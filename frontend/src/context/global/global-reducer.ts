import { AnyAction } from '../AnyAction';
import { filmsInitialState, filmsReducer, FilmState} from './films/films_reducer';

export interface GlobalState {
  film: FilmState
}

export const initialState: GlobalState = {
  film: filmsInitialState
};

export const globalReducer = (
  state: GlobalState,
  action: AnyAction
) : GlobalState => {
  const { film } = state;

  return {
    film: filmsReducer(film, action)
  }
};
