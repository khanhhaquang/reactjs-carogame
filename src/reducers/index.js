import {combineReducers} from 'redux';

const initState = {
  status: "Next player",
  turn: "X",
  winner: "",
  isEnd: false,
  moveList: [],
}

const mainReducer = (state = initState, action) => {
  switch(action.type){
    case "SET_TURN_TO_O":
      return {
        ...state,
        turn: 'O',
        moveList: state.moveList.concat(action.moveText)
      }
      break;
    case "SET_TURN_TO_X":
      return {
        ...state,
        turn: 'X',
        moveList: state.moveList.concat(action.moveText)
      }
      break;
    case "SET_WINNER":
      return {
        ...state,
        status:"Winner is: " + state.turn,
        isEnd:true
      }
      break;
    case "REVERSE_MOVE_LIST":
      return {
          ...state,
          moveList: new Array(0).concat(state.moveList.reverse()),
      }
      break;
    default:
      return state;
  }
}

export default combineReducers({mainReducer});
