import React from "react"
import Quiz from '../Question/question'




const Questions =(props)=>{


return (
    <div className="container">
        {props.questionList.map((qst,index)=>{return (
      
      <Quiz  deleted={props.deleted.bind(this,index)}
      quizNumber ={index+1}
      key={qst.id}
      index={index}
      question ={qst.question}
      changed={props.changed }
      optionAppended ={ ()=>{props.optionAppended(index)}}
      options ={qst.options}
      optionTextChanged={props.optionTextChanged } 
      optionDeleted={props.optionDeleted}
      correctOptionSelected={props.correctOptionSelected}
      > 
      </Quiz> 
      
      
     )                })}
    </div>
)

}

export default Questions