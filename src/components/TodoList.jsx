import Todo from "../components/Todo.jsx"

export default function TodoList({ todos }) {

    return (
        <div className="flex flex-col gap-4 w-96 h-52 overflow-y-scroll todoListScroll">
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}