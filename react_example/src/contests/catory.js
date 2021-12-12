// import React, { useEffect, useState } from "react" ;
// import TodoListem from "./TodoListem"
// import axios from "axios"
// import UsePromise from "../lib/usePromise";




// const TodoList = ({category}) =>{


   
//        const [loading, response,error]=UsePromise(()=>{
//            const query = category === 'all' ? '' : `&category =${category}`
//            return axios.get(
//                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=`
//            )
//        },[category]);
   

//     if(loading){
//         return "대기중"
//     }

//     if(!articles){
//         return null;
//     }



//     return(
//         <div>
//             {articles && articles.map(()=>{
//                 <TodoListem key={articles.url} article={articles}/>
//             })}
//         </div>
//     )
   
// }

// export default TodoList;