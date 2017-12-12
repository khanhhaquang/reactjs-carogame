const SET_TURN_TO_O = 'SET_TURN_TO_O';
const SET_TURN_TO_X = 'SET_TURN_TO_X';
const SET_WINNER = 'SET_WINNER';
const REVERSE_MOVE_LIST = 'REVERSE_MOVE_LIST';
/*
 * action creators
 */

export function turnToO(text) {
  return { type: SET_TURN_TO_O, moveText: text }
}

export function turnToX(text) {
  return { type: SET_TURN_TO_X, moveText: text}
}

export function setWinner() {
  return { type: SET_WINNER}
}

export function reverseList() {
  return { type: REVERSE_MOVE_LIST }
}
