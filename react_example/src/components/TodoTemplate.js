import React, { useState } from "react";
// import "../scss/TodoTemplate.scss";
import styled from "styled-components";
import axios from "axios"

const TodoDiv =styled.div`
    width: 512px;
    //width 가 주어진 상태에서 좌우 중앙 정렬
    margin-left:auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;
`

const Title=styled.div`
 background: #22b8cf;
    color:white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Centent=styled.div`
 background: white;
`



const TodoTemplate = ({children})=>{

        return(
            <TodoDiv className="TodoTemplate">
                <Title className="app-title"> 일정관리</Title>
                <Centent className="content">{children}</Centent>
            </TodoDiv>
        )    
}

export default TodoTemplate;