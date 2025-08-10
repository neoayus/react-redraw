import {useState, useEffect} from "react";

export default function Clock(){

    // State Variables 
    const [time, setTime] = useState(()=>{
        const date = new Date();
        let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours() ;  
        let min = date.getMinutes(); 
        let sec = date.getSeconds(); 
        return `${hour} : ${min} : ${sec}`;
    });

    useEffect(()=>{
        // fetch time every second
        const timer = setInterval(()=>{
            const date = new Date();
            let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours() ;  
            let min = date.getMinutes(); 
            let sec = date.getSeconds(); 
            setTime(`${hour} : ${min} : ${sec}`);
        }, 1000);
        
        // clean up unmount 
        return () => clearInterval(timer); 
    },[]);
    
    return(
        <>
            <p>{time}</p>
        </>
    )
}