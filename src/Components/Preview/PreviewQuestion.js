import React from 'react'
import PreviewOption from './PreviewOption'

const PreviewQuestion =(props)=>{

    return (
        <div className="container" >

    <p  style={{fontWeight:"bold"}} > <span> {props.questionNo+1}.</span> { props.question}</p> 

    {props.options.map((opt,optIndex)=>{
        return (
            <PreviewOption  name={props.questionNo} id={optIndex} value={opt.text} >
                 
             </PreviewOption>
        )
    })}
       
        </div>
    )
}

export default PreviewQuestion;