import React from 'react'
import TodoInput from './TodoInput';
import './TodoList.css';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { completeTodo } from '../state/action';


const TodoList = () => {
    const todos = useSelector((state) => ({ ...state.todos }))
    console.log('todos', todos)
    return (
        <div className="TodoList">
            <h1>Todo app </h1>
            <TodoInput />
            <ul>
                <TransitionGroup className="todo-list">
                    {todos && todos.todos.map((todo, i) => {
                        return <CSSTransition key={i} className="todo">
                            <h2>{todo.task}</h2>
                        </CSSTransition>
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TodoList
