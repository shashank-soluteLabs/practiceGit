import React, { useReducer, useState } from 'react'
import { Todo } from './Todo'

export const ACTIONS = {
    ADD_TODOS: "add_todos",
    TOGGLE_TODOS: "toggle_todos",
    DELETE_TODOS: "delete_todos"
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODOS:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE_TODOS:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })

        case ACTIONS.DELETE_TODOS:
            return todos.filter((todo) => {
                if(todo.complete === true){
                    return todo.id !== action.payload.id
                }
                return todo
            })

        default:
            return todos


    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export const HuseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [todo, setTodo] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODOS, payload: { name: todo } })
        setTodo("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            </form>
            {
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                ))
            }
        </>

    )
}
