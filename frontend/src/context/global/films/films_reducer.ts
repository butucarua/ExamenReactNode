import { Film } from 'domain/Film';
import { FilmsAction, FilmsActionType } from './films_actions';

export interface FilmState {
  films: Film[]
};

export const filmsInitialState: FilmState = {
  films: []
};

export const filmsReducer = (
  state: FilmState,
  action: FilmsAction
): FilmState => {
  switch (action.type) {
    case FilmsActionType.ADD_FILMS:
      return {
        films: action.payload.films
      };
    default:
      return state;
  }
}