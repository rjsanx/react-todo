import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { MdDelete } from 'react-icons/md'
function TodoList() {
    
    
    const[todos,setTodos] =useState([]);
    
    
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [ ...todos,todo];

        setTodos(newTodos);
        console.log(todo,...todos);
    };





    const updateTodo = (todoId,newValue) =>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item=>(item.id === todoId ? newValue : item)))
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const removeTodo =id =>{
        
        const removeArr = [...todos].filter(todo => todo.id!== id)
       
        setTodos(removeArr)
    }

    const clear = () => {
        window.location.reload();
    }

 

    return (
        <div>
            <div style={{display:'flex',}}>
            <h1>what your plan today</h1>
                
            </div>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos = {todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo = {updateTodo}
            
            />
        </div>
    )
}

export default TodoList
