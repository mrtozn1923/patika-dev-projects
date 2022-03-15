import {useEffect, useState} from 'react'

function List({todos,removeTodo,updateTodos}) {
    
    const [filterType,setFilterType]=useState(0);
    const [filteredTodos,setFilteredTodos]=useState(todos);
    
    useEffect(() => {
        if(filterType===1){
            setFilteredTodos(todos.filter((item=>item.isCompleted===false)));
        }else if(filterType===2){
            setFilteredTodos(todos.filter((item=>item.isCompleted)));
        }else{
            setFilteredTodos(todos);
        }
        console.log(todos);
    }, [filterType,todos]);
      
    const handleRemove=(itemId)=>removeTodo(todos.filter((item)=>item.id!==itemId));

    const clearCompleted=()=>removeTodo(todos.filter((item)=>!item.isCompleted));

    const handleCheckboxOnChange=(itemIndex)=>{
        updateTodos(todos.map((item,index)=>{
            if(itemIndex===index){
                return {...item,isCompleted:!item.isCompleted}
            }else{
                return {...item}
            }
        }));
    }

    const allTodoCompleted=()=>{
        if(todos.every((item)=>item.isCompleted)){
            updateTodos(todos.map((item)=>{
               return {...item,isCompleted:false}               
            }));
        }else{
            updateTodos(todos.map((item)=>{
                if(item.isCompleted!==true){
                    return {...item,isCompleted:true}
                }
                return {...item}
            }));
        }        
    }

  return (
    <>
    <section className="main">
        <input onChange={()=>allTodoCompleted()}  id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
        Mark all as complete
        </label>
        <ul className="todo-list">
            {
                filteredTodos.map((todo,index)=>(
                    <li key={todo.id} className={todo.isCompleted?"completed":""}>
                        <div className="view">
                        <input defaultChecked={todo.isCompleted}  className="toggle" type="checkbox" checked={todo.isCompleted} onChange={()=>handleCheckboxOnChange(index)}/>
                        <label>{todo.todoText}</label>
                        <button onClick={()=>handleRemove(todo.id)} className="destroy"></button>
                        </div>
                    </li>
                ))
            }  
        </ul> 
    </section>
    <footer className="footer">
          <span className="todo-count">
          <strong>{filteredTodos.length}</strong>
          items left
          </span>
          <ul className="filters">
          <li>
              <button className={filterType===0?"selected":""} onClick={()=>setFilterType(0)} >All</button>
          </li>
          <li>
              <button className={filterType===1?"selected":""} onClick={()=>setFilterType(1)}>Active</button>
          </li>
          <li>
              <button className={filterType===2?"selected":""} onClick={()=>setFilterType(2)}>Completed</button>
          </li>
          </ul>
          <button onClick={clearCompleted} className="clear-completed">
          Clear completed
          </button>
      </footer>
    </>
  )
}

export default List