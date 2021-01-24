# Todo app using react toolkit

## TLDR

Reduced boilerplate when creating actions/actionCreators/reducers

```js
import { createSlice } from '@reduxjs/toolkit'


let nextTodoId = 0


const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // immutable state using https://immerjs.github.io/immer/docs/produce
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } }
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})


// Ducks export pattern
export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer
```

## Resources:

- https://redux-toolkit.js.org/tutorials/intermediate-tutorial
- https://redux-toolkit.js.org/
- https://immerjs.github.io/immer/docs/produce


https://github.com/johnhunter/todo-rtk/blob/master/src/modules/todos/todosSlice.js


## Development

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._
