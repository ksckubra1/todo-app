import { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext(); //yeni bir context oluşturduk

export const TodoLayer = ({ initialState, Reducer, children }) => (
    <TodoLayerContext.Provider value={useReducer(Reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
)

export const useTodoLayerValue = () => useContext(TodoLayerContext)
//burda oluşturulan todolayercontext i baska komponentlerden çağırabilmek için useTodoLayerValue yu kullanıcaz.
