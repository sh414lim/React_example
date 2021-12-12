import React from "react" ;
import{MdCheckBoxOutlineBlank
        ,MdCheckBox
        ,MdRemoveCircleOutline
} from "react-icons/md"
import styled from "styled-components";

const ListDiv = styled.div`
padding: 1rem;
display: flex;
align-items:center;
&:nth-child(even){{
    background: #f8f9fa;
}}
`

const CheckBox= styled.div`
cursor:pointer;
flex:1; //차지 할수 있는 영역 모두 차지
display: flex;
align-items:center;
`

const Text=styled.div`
margin-left:1.5rem ;
flex:1;
`



const TodoListem  =({todo,onRemove,onToggle}) =>{
    const {text,checked,id} = todo;


  return(
    <ListDiv>
    <CheckBox className={checked} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
        <Text>{text}</Text>
    </CheckBox>
    <div onClick={()=>onRemove(id)}>
        <MdRemoveCircleOutline/>
    </div>
</ListDiv>
  )
   
}
export default TodoListem;