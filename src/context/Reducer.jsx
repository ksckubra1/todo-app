
export const initialState = {
    todos: [
        {
            id: 0,
            content: "Çöpü at",
            isCompleted: false
        },
        {
            id: 1,
            content: "yoğurt al",
            isCompleted: false
        },
        {
            id: 2,
            content: "Matematik 30 soru çöz",
            isCompleted: false
        }
    ],
};


const Reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            state.todos = [action.payload, ...state.todos]

        case 'REMOVE_TODO':
            state.todos = state.todos.filter(todo => todo.id !== action.payload)

        case 'COMPLETED_TODO':
            state.todos = state.todos.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }

            })

        case 'UPDATE_TODO':
            state.todos = state.todos.map((todo) => {
                if (todo.id !== action.payload.todoId) {
                    return todo;
                } else {
                    todo.content = action.payload.newValue
                    return {
                        ...todo,
                    }
                }

            })



    }
    return {
        ...state
    }

}


export default Reducer;
