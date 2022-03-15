import {useState,useEffect} from 'react'
const initialFormValues={id:0,todoText:"",isCompleted:false};

function Form({addTodo,todos}) {
    
    const [form,setForm]=useState(initialFormValues);
    const [itemId,setItemId]=useState(0);
    useEffect(()=>{        
        setForm(initialFormValues);
    },[todos]);

    const onChangeInput=(e)=>{
        setForm({...form,id:itemId,todoText:e.target.value,isCompleted:false})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if (form.todoText==='') {
            return false;
        }
        setItemId(itemId+1);
        addTodo([...todos,form]);
    }
  return (
    <form onSubmit={onSubmit}>            
        <input onChange={onChangeInput} name='todoText' className="new-todo" placeholder="What needs to be done?" value={form.todoText}/>
    </form>
  )
}

export default Form