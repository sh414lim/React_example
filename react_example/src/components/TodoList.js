import React from "react";
import TodoListem from "./TodoListem";
import styled from "styled-components";




const Div = styled.div`
min-height:320px;
max-height:513px;
overflow-y:auto ;
` 



const TodoList =({todos,onRemove,onToggle})=>{
    return(
        <Div>
            {todos && todos.map((todo)=>(
                <TodoListem onRemove={onRemove} todo={todo} key={todo.id} onToggle={onToggle}/>
            ))}
        </Div>
    )
}

export default TodoList;