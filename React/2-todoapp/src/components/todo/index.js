import {useState} from 'react'
import Form from './Form';
import List from './List';

function Todo() {
  const [todos,setTodos]=useState([]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>        
      </header>
      <Form addTodo={setTodos} todos={todos}/>      
      <List removeTodo={setTodos} updateTodos={setTodos} todos={todos} />      
    </section>
  )
}

export default Todo;