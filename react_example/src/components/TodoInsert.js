import React, { useCallback, useState } from "react" ;
import {MdAdd} from "react-icons/md";
import styled from "styled-components";

const FormDiv=styled.form`
display: flex;
background: #495057;
`

const InputCreate=styled.input`
background: none;
outline:none;
border:none;
padding:"0.5rem";
font-size:"1.125rem";
color:white;
&:placeholder{
    color:#dee2e6;
}
flex:1;
`

const Button =styled.button`
background: none;
outline: none;
border:none;
background: #868e96;
&:hover{
    background: #adb6bd;
}
`



const TodoInsert=({onInsert})=>{

    const [value,setValue] = useState('');

    const handleOnChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit =useCallback(
        e=>{
            onInsert(value);
            setValue('')
            e.preventDefault();
        },
        [onInsert,value]
    )

    return(
        <FormDiv>
            <InputCreate value={value} onChange={handleOnChange} placeholder="할일을 입력하세요"/>
            <Button onSubmit={onSubmit} type="submit">
                <MdAdd/>
            </Button>
        </FormDiv>
    )
}

export default TodoInsert;