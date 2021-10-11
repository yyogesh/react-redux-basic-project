import React from 'react'
import TodoInput from './TodoInput';
import './TodoList.css';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { completeTodo, addTodo } from '../state/action';
import Todo from './Todo';


const TodoList = () => {
    const state = useSelector((state) => ({ ...state.todos }))
    console.log('todos', state)
    const dispatch = useDispatch();
    return (
        <div className="TodoList">
            <h1>Todo app </h1>
            <TodoInput createTodo={(newTodo) => dispatch(addTodo(newTodo))} />
            <ul>
                <TransitionGroup className="todo-list">
                    {state && state.todos.map((todo, i) => {
                        return <CSSTransition key={i} className="todo">
                            <Todo key={todo.id} id={todo.id}
                                task={todo.task} completed={todo.completed}
                                toggleTodo={() => dispatch(completeTodo(todo))} />
                        </CSSTransition>
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TodoList
