import React, { useState, useEffect } from 'react';

import { Box, Button, Chip, Container, Grid, IconButton, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';
import ApiFactory from '../../services/swapi-api';
import { BasicError } from 'domain/Global'
import { useGlobalContext } from 'context/global/GlobalContext';
import { addFilmsAction } from 'context/global/films/films_actions';
import logo from '../../assets/virtual-shelf.png'
import { CustomList } from './CustomList';
import { Film } from 'domain/Film';
import Alert from '@material-ui/lab/Alert/Alert';
import { baseRequestService } from 'services/baseRequestService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    marginTop: 10
  },

  img: {
    flex: 1,
    padding: 5,
    maxWidth: '100%'
  },
  linearProgress: {
    width: '70%'
  },
  modal: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    border: '2px solid #000',
    backgroundColor: 'white',
    padding: 40
  }
}));



export const Films = () => {
  const classes = useStyles();
  
  const [errors, setErrors] = useState<BasicError[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedFilms, setSelectedFilms] = useState<Film[]>()
  const [shelves, setShelves] = useState([]);
  const [bookGenres, setBookGenres] = useState([]);

  const [newShelfName, setNewShelfName] = useState('');
  const [newShelfDescription, setNewShelfDescription] = useState('');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getGenres()
  }, [])

  const getFilmsByName = async (name: string) => {
    try {
      setLoading(true)
      let shelves = await baseRequestService(`http://localhost:4040/api/shelf/name/${name}`, { method: 'GET', headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }} )
      console.log(shelves,'shelvees');
      setShelves(shelves)
      setLoading(false)
    } catch (err) {
      setErrors([{
        message: 'Something went wrong, please try again'
      }])
    }
  }

  const createShelf = async () => {
    try {
      setLoading(true)
      let newShelf = await baseRequestService(`http://localhost:4040/api/shelf/`, { method: 'POST', headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }, data: {
        name: newShelfName,
        description: newShelfDescription
      }})

      console.log(newShelf)
      setLoading(false)
    } catch (err) {
      setErrors([{
        message: 'Something went wrong, please try again'
      }])
    }
  }

  const getGenres = async () => {
    try {
      setLoading(true)
      let genres = await baseRequestService(`http://localhost:4040/api/book/genres`, { method: 'GET', headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})

      setBookGenres(genres)
      console.log(genres)
      setLoading(false)
    } catch (err) {
      setErrors([{
        message: 'Something went wrong, please try again'
      }])
    }
  }

 
  const handleAutoComplete = (newValue: any[]) => {
    console.log(newValue)
    // setSelectedFilms(newValue)
  }

  const handleSearch = (name: string) => {
    console.log(name)
    getFilmsByName(name)
  }

  const handleNewShelf = (event: any) => {
    const { name, value } = event.target;

    if (name === 'newShelfName') setNewShelfName(value)
    if (name === 'newShelfDescription') setNewShelfDescription(value)
  }

  const handleCreateNewShelf = async () => {
    console.log('am apasat', newShelfDescription, newShelfName)
    await createShelf()
    setNewShelfName('')
    setNewShelfDescription('')
  }

  return (
    <div>
      <Container >
      <Button onClick={handleOpen}>Create New Shelf</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Shelf
          </Typography>

          <Grid>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name: 
          </Typography>
          <TextField variant="outlined" name="newShelfName" value={newShelfName} onChange={handleNewShelf} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Description:
          </Typography>
          <TextField variant="outlined" name="newShelfDescription" value={newShelfDescription} onChange={handleNewShelf} />
          
          </Grid>
          
          <Button variant="outlined" onClick={handleCreateNewShelf} style={{ marginTop: 20 }}> Create </Button>
        </Box>
      </Modal>
        <Grid
          container
          justify="space-around"
          item sm
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <img src={logo} className={classes.img} alt="logo" />
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            // value={films || []}
            onChange={(event, newValue) => handleAutoComplete(newValue)}
            options={shelves}
            getOptionLabel={(option) => option['name']!}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option['name']}
                  {...getTagProps({ index })}
                />
              ))
            }
            style={{ minWidth: '50vw' }}
            renderInput={(params) => (
              <form>
                <TextField
                  {...params}
                  id="filled-basic"
                  label="Search for a shelf"
                  variant="outlined"
                  placeholder={`Search for a shelf`} 
                  onChange={(event) => handleSearch(event.target.value)}
                  />
              </form>
            )}
          />
        </Grid>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Available book genres: {bookGenres.join(', ')}
          </Typography>
        <Grid
          container
          justify="center"
          item sm
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <div>
            {errors && errors.map((item: BasicError) => (
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setErrors([...errors.filter((err: BasicError) => item.message !== err.message)]);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                severity="error">{item.message} </Alert>
            ))}
          </div>
        </Grid>

        <CustomList
          loading={loading}
          selectedFilms={shelves || []}
          bookGenres={bookGenres}
          setErrors={(errors: BasicError[]) => setErrors(errors)}
        />
      </Container>
    </div>
  );
}
