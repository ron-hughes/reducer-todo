export const initialState = {
    todos: [ {
        item: 'Exercise at gym',
        completed: false,
        id: Date.now() - 3
    },
    {
        item: 'Walk dogs',
        completed: false,
        id: Date.now() + 2
    },
    {
        item: 'Play basketball',
        completed: false,
        id: Date.now() - 1
    },
    {
        item: 'Have fun with babes',
        completed: false,
        id: Date.now() - 1
    }]
  
}

export const reducer = (state, action) => {
    // I want to return the original state, and add a new object to state array
    switch(action.type) {
    case "ADD_TODO": // ...state was not iterable, I had to spread all the way to "todos", not sure why?
        return { todos: [...state.todos, action.payload]  }
    case "COMPLETED":
        return state; 
    }
}