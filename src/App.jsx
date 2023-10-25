import { useEffect, useRef, useState } from "react";
import { useTodoLayerValue } from "./context/TodoContext"
import TodoList from "./components/TodoList.jsx"


export default function App() {
  const [{ todos }, dispatch] = useTodoLayerValue(); //todosu bu şekilde buraya çektik
  const [content, setContent] = useState("") //todoları depolamak için state oluşturduk
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault() //ekle butonuna bastığında sayfa tekrar yüklenmesin diye
    if (!content) return // eğer content yoksa direk return yap bişey döndürme

    const newTodo = {
      id: Math.floor(Math.random() * 45125469),
      content,
      isCompleted: false,

    }

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    })


    setContent('')
  }


  return (
    <div className="h-screen bg-[#af93f0] w-screen flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#9741EB] to-[#693092]  p-10  rounded-xl flex flex-col gap-6 shadow-xl shadow-[#00000059]">
        <form onSubmit={handleSubmit} className="">
          <input className="border border-[#4b11869f] bg-white/0 px-2 py-1 placeholder-[#00000073] rounded-l-md outline-none w-[336px] bg-[#bf86f8]"
            placeholder="Add todo"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            type="text"
            ref={inputRef} />
          <button className="hover:bg-white/20 border border-[#4b11869f] bg-white/10 py-1 text-[#35184b] px-2 rounded-r-md">Add</button>
        </form>

        {/* TODOLİST */}
        <TodoList todos={todos} />
      </div>

    </div>
  )
}