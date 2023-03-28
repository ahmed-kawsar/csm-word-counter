import React, { useState } from "react";

function WordCounter(){
    const [val,setVal]=useState('')
    const [word,setWord]=useState(0)

    const handleChange =(e)=>{
        const data = e.target.value.split(' ')
        console.log(data)

        if(data.length<=1500){
            setVal(e.target.value)
            setWord(data.length)
            if(e.target.value == ''){
                setWord(0)
            }
        }else{
            alert("you can type only 1500 words")
        }
    }

    return(
        <div>
            <h1 className="title">csm word counter</h1>
            <div className="title-box">
                <h3>Letter count: {val.length}</h3>
                <h3>Word count: {word}</h3>
            </div>
            <textarea value={val} onChange={(e)=>handleChange(e)} />
        </div>
    )
}
export default WordCounter; 