import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr"
import { useTodoLayerValue } from "../context/TodoContext"
import clsx from "clsx"
import { useState } from "react"

export default function Todo({ todo }) {

    const [editable, setEditable] = useState(false)
    const [content, setContent] = useState(todo.content)

    const [{ }, dispatch] = useTodoLayerValue()
    const removeTodo = (todoId) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: todoId
        })
    }

    const completedTodo = (todoId) => {
        dispatch({
            type: "COMPLETED_TODO",
            payload: todoId
        })
    }


    const updateTodo = ({ todoId, newValue, }) => {
        dispatch({
            type: "UPDATE_TODO",
            payload: {
                todoId,
                newValue
            }
        })
    }

    const todoStyle = clsx({
        ['break-words flex-1 w-64 text-white']: true,
        ['line-through']: todo.isCompleted,
        ['py-4']: editable
    })

    return (
        <div className="flex items-start gap-4 bg-gradient-to-r from-[#693092] to-[#9741EB] p-2 rounded-lg border-r border-b border-[#ffffff4d] shadow-xl">
            <div onClick={() => editable ? "" : completedTodo(todo.id)} className={todoStyle}>{
                editable ?
                    <input className=" outline-none  bg-transparent h-10 px-4 text-xl" value={content} onChange={event => setContent(event.target.value)} type="text" />
                    :
                    todo.content
            }</div>
            <div className="flex gap-2">
                <GrFormClose onClick={() => removeTodo(todo.id)} className="w-10 h-7" />
                {
                    editable ?
                        <GrFormCheckmark onClick={() => {
                            updateTodo({
                                todoId: todo.id,
                                newValue: content
                            })

                            setEditable(false)
                        }} className="w-10 h-7" /> :
                        <GrFormEdit onClick={() => setEditable(true)} className="w-10 h-7" />


                }

            </div>
        </div>
    )
}