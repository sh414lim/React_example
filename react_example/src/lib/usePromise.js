import React, { useEffect, useState } from "react";

const UsePromise =(promisesCreator,deps)=>{
    const [loading,setLoading] =useState(false);
    const [resolved,setResolved] = useState(null);
    const [error,setError] =useState(null);

    useEffect(()=>{
        const process = async ()=>{
            setLoading(true);
            try{
                const resolved = await promisesCreator();
                setResolved(resolved);
            }catch(e){
                setError(e);
            };
            process();
        }
    },deps);
    return [loading ,resolved, error]
}

export default UsePromise;