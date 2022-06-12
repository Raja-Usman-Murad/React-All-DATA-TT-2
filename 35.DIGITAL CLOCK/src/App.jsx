import React, { useState } from "react";

const App =()=>{
    const time = new Date().toLocaleTimeString();
    
    const [ctime,setTime]=useState(time)
    function func() {
        const time = new Date().toLocaleTimeString();
        setTime(time)
    }

    setInterval(func,1000)


    return(
        <>
        <div className='mainD'>
<h1 className='countD'> Clock Ticking: {ctime} </h1>
        <h1 className='countD'>RAJA USMAN KIYANI</h1>
        
        </div>
        </>
    )
}
export default App;