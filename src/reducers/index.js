import { combineReducers } from 'redux'
import todosReducer from 'modules/todos/todosSlice'
import visibilityFilterReducer from 'modules/filters/filtersSlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})
