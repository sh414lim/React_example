import React, { useState } from "react";
import styled from "style-components";
import axios from "axios"





const TodoTemplate = ({children})=>{
    const [data,setData] = useState(null);


    const hadleOnClick= async()=>{
        await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=df9ec598fcf14c939f9b9cbbca22a42c`)
        .then(response=>{
            try{
                setData(response.data)
            }catch(e){
                    alert("error,,,,,")
            }
        })
    }

    return(
        <>
        <button onClick={hadleOnClick}>불러오기</button>
        
        {data && <textarea row={7} value={JSON.stringify(data,null,2)} readOnly /> }
        </>
        )
}

export default TodoTemplate;