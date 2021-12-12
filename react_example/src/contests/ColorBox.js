import React from "react";
import ColorContext from "./color";

const ColorBox=()=>{
    return(
        <ColorContext.Provider value={{color:"red"}}>
        {value =>(
            <div
            style={{
                width:"64px",
                height: "64PX",
                background: value.color,
            }}
            />
        )}
        </ColorContext.Provider>
    )
}

export default ColorBox;