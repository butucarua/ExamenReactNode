
import { Film } from 'domain/Film';
import { Action } from '../../Action';

export enum FilmsActionType {
  ADD_FILMS = 'ADD_FILMS'
}

export interface AddFilmsAction extends Action {
  type: FilmsActionType.ADD_FILMS,
  payload: {
    films: Film[]
  }
}

const addFilmsAction = (
  films: Film[]
): AddFilmsAction => ({
  type: FilmsActionType.ADD_FILMS,
  payload: {
    films
  }
})

export type FilmsAction = AddFilmsAction

export {
  addFilmsAction
};