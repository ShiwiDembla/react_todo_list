import React from 'react'


function Todo() {
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState('')
   
    const addTodo = (e) => {
    
        e.preventDefault()
        if(todo) {
        setTodos([...todos, todo])
        setTodo('')
    }
}
    // delete todo from the list
    const deleteTodo = (e, index) => {
        e.preventDefault()
        // confirm if the user wants to delete the todo
        const confirmDelete = window.confirm('Are you sure you want to delete this todo?')
        if(confirmDelete){
            const newTodos = [...todos]
            newTodos.splice(index, 1)
            // const newTodos =todos.splice(index, 1)
        setTodos([...newTodos])
        }

    }
    
        
       


  return (
    <div>
      <div>
        <h1>Todo List</h1>
        </div>
        <form>
            <input type="text" placeholder="Enter Todo" 
            onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" 
            onClick={addTodo}
            >Add Todo</button>

        </form>
        {todos.map((todo, index) => (
            <div key={index}>
                <h3>{todo}</h3>
                <button > edit</button>
                <button 
                onClick={(e)=>deleteTodo(e,index)
                }
                > delete</button>
                    </div>))}
    </div>
  )
}

export default Todo
