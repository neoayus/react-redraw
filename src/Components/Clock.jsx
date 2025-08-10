export default function Clock(){
    const date = new Date();
    // let hour = date.getHours(); 
    // hour = hour>12? hour-12 : hour ; 
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours() ;  
    let min = date.getMinutes(); 
    let sec = date.getSeconds(); 

    let timeInString = `${hour} : ${min} : ${sec}`; 
    return(
        <>
            <p> {timeInString} </p>
        </>
    )
}