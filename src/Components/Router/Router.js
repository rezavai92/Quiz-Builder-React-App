import React from 'react'
import Questions from '../Questions/Questions'
import Homepage from  '../Homepage/Homepage'
import Quizmaker from '../QuizMaker/Quizmaker'
import QuizMaker from '../QuizMaker/Quizmaker'
import Preview from '../Preview/Preview'
import PreviewOption from '../Preview/PreviewOption'
import Share from '../Share'



const decidePath =(href)=>{
if (href==="/makequize"){
    return <Quizmaker> </Quizmaker>
}
if (href="/"){
    return <Homepage></Homepage>
}



}

const Router = (props)=>{

 return (
     <div>
            {decidePath(props.href)}
        
     </div>
 )

 
  

}
export default Router 