import React, { useState, useEffect } from 'react';
import { Container, Grid, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { Film } from 'domain/Film';
import { FilmCard } from './FilmCard'
import { BasicError } from 'domain/Global';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  linearProgress: {
    width: '70%'
  }
}));

export const CustomList = ({
  loading,
  selectedFilms,
  bookGenres,
  setErrors
}: any) => {
  const classes = useStyles();

  if (loading) return (
    <Grid container justify="center" className={classes.container}>
      <LinearProgress className={classes.linearProgress} />
      <LinearProgress color="primary" className={classes.linearProgress} />
    </Grid>
  )

  return (
    <Container fixed>

      <Grid
        item
        container
        wrap="wrap"
        justify="space-around"
        alignItems="center"
        direction="row"
        // xs={12}
        style={{
          padding: 20
        }}
      >
        {selectedFilms.map((film: Film) => <FilmCard
          setErrors={setErrors}
          film={film}
          bookGenres={bookGenres}
        />)}
      </Grid>



    </Container>
  )

}
