import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';



function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

  return (
    <>
        {todos.map((todo)=>(
            <div className='item' key={todo.id}>{todo.text} <button type='delete' onClick={()=> dispatch(removeTodo(todo.id))}>remove</button></div>
        ))}
    </>
  )
}

export default Todos