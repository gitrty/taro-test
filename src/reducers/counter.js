import { ADD, MINUS } from '../constants/counter'

export const INITIAL_STATE = {
  num: 0,
  userid:100
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
