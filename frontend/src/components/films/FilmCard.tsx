import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MovieFilter from '@material-ui/icons/MovieFilter';
import FaceIcon from '@material-ui/icons/Face';
import { Character, Film } from './../../domain/Film'
import lightSaber from 'assets/lightsaber_2.png'
import glow from 'assets/glow.png'
import ApiFactory from 'services/swapi-api';
import { Button, Grid, LinearProgress, MenuItem, Select, TextField } from '@material-ui/core';
import { AccordionList } from 'components/films/AccordionList'
import { BasicError } from 'domain/Global';
import { baseRequestService } from 'services/baseRequestService';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: 20,
    marginTop: 25,
    border: '1px solid #70B8FF',
    borderRadius: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(10deg)',
  }
}));


export const FilmCard = ({film, setErrors, bookGenres}: any) => {
  console.log(bookGenres,'book GENRES')
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [people, setPeople] = React.useState<Character[]>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookGenre, setNewBookGenre] = useState('');

  const [books, setBooks] = useState([]);
  
  const handleExpandClick = async () => {
    setExpanded(!expanded);
    try {
      if (!people) {
        setLoading(true)
        const returnedBooks = await handleGetBooks()
        console.log(returnedBooks)
        // let characters = film.characters.map((item: any) => item.split('/')[5]);
        // let promises = characters.map((character: any) => ApiFactory.getPeople(character))
        // characters = await Promise.all(promises)
        setLoading(false)
        setPeople(returnedBooks.filter((book: any) => book.shelf.id === film.id))
        // console.log(characters)
        // characters = characters
        // let people = await ApiFactory.getPeople()
      }
    } catch (err) {
      setLoading(false)
      setErrors([{
        message: "Something went wrong, please try again"
      }])
    }
  };

  const handleCreateNewBook = async (event: any) => {
    try {
      console.log(newBookGenre, newBookTitle,'asd')

    const newBook = {
      shelfId: film.id,
      title: newBookTitle,
      genre: newBookGenre
    }

    let createdBook = await baseRequestService(`http://localhost:4040/api/book/`, { method: 'POST', headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }, data: newBook })

      console.log(createdBook)

      const newBooksReturned = await handleGetBooks();
      setPeople(newBooksReturned.filter((book: any) => book.shelf.id === film.id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetBooks = async () => {
    try {
    const books = await baseRequestService(`http://localhost:4040/api/book/`, { method: 'GET', headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})

      console.log(books,'books are')
      setBooks(books);
      return books;
    } catch (error) {
      console.log(error)
    }
  }


  if (!film) return <></>

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MovieFilter />
          </IconButton>
        }
        title={`Shelf Name: ${film.name}`}
        subheader={`Shelf Description: ${film.description}`}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
       Create New Book
        </Typography>

        <Grid>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title: 
          </Typography>
          <TextField variant="outlined" name="newBookTitle" value={newBookTitle} onChange={(event) => setNewBookTitle(event.target.value)} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Genre:
          </Typography>
                  <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newBookGenre}
            label="Age"
            onChange={(event: any) => {
              setNewBookGenre(event?.target?.value)
            }}
          >
            {bookGenres && bookGenres.map((genre: any) => <MenuItem value={genre}>{genre}</MenuItem>)}
          </Select>
          
          </Grid>
          
          <Button variant="outlined" onClick={handleCreateNewBook} style={{ marginTop: 20 }}> Create Book in {film.name} shelf </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography>
           Get books
          </Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {loading ? <LinearProgress color="primary" /> : <div>
          <Typography paragraph>Method:</Typography>
          <AccordionList data={people || []} />
          </div>}
          
        </CardContent>
      </Collapse>
    </Card>
  );
}