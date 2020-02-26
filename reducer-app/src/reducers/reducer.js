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
    },
    ]
  
}

export const reducer = (state, action) => {
    return state
}