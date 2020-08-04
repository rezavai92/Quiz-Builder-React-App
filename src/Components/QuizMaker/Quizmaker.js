import React from 'react'
import {Button} from 'react-bootstrap'
import Questions from '../Questions/Questions';
import Preview from '../Preview/Preview'
import './Quizmaker.css'

class Quizmaker extends React.Component {
state={  
    questions:[],
    publishingEligiblity : false,
    publishQuiz :false,
    }
    
    generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
    }
    

   

    deleteQuestionHandler =(index)=>{
    
      let questions = [...this.state.questions];
    
      questions.splice (index,1);
      var eligibility=true;
      if (questions.length==0){
       var eligibility=false;
    }
    
      this.setState({questions:questions,publishingEligiblity:eligibility});

      
    
      
    }
    
    questionChangeHandler = (event,index)=>{
     
      let questions = this.state.questions;
      questions[index].question=event.target.value ;
    
      this.setState({questions:questions});
    
    
    }

    
    addQuestionHandler =()=>{
     
      let questions =[...this.state.questions];
      
      questions.push ({question:"" ,id :this.generateKey(Math.random() ),options:[] });
      this.setState({questions:questions,publishingEligiblity:true,
      })
    
    }

    

    publishQuizHandler=()=>{
        
        this.setState({publishQuiz:true});
    }
    
     /* 
     
     <Option changed= {(event)=>{this.textChangeHandler(event,index)} }
         text={opt.text} 
         deleted={this.deleteOptionHandler.bind(this,index)} 
          key={opt.id}
         correctAnswer={opt.correctAnswer}
        clicked ={this.chooseCorrectAnswerHandler.bind(this,index)}
         
         > </Option>
     
     */
    switchHandler=(questionNo)=> {


      //  let options = [...this.state.questions[questionNo]].options;
       let questions = this.state.questions;
         questions[questionNo].options.push(
           {text: "" ,correctAnswer :false, id: this.generateKey(Math.random())});


        
        
        
       
        this.setState({questions:questions })
       
       }

       optionTextChangeHandler =( questionNo,event,quizIndex)=>{

        let questions = this.state.questions;

        questions[questionNo].options[quizIndex].text=event.target.value;
        
        
          this.setState ({questions:questions});
        
         }

         deleteOptionHandler =(questionNo,quizIndex)=>{

            let questions = this.state.questions;

            questions[questionNo].options.splice(quizIndex,1);
    
            
    
            this.setState({questions:questions});
    
        }
        chooseCorrectAnswerHandler =(questionNo,quizIndex)=>{
            let questions = this.state.questions;

            questions[questionNo].options[quizIndex].correctAnswer = !questions[questionNo].options[quizIndex].correctAnswer;

            
            this.setState({questions : questions})
          }
    


     render () {
     let whatToShow =null;

     !this.state.publishQuiz ? whatToShow= (
        <div id="wrapper">

      
         <Button variant="secondary" block onClick={this.addQuestionHandler} >Add Question</Button>
      

       <div> <Questions deleted={this.deleteQuestionHandler} 
        
        optionAppended = {this.switchHandler}
        changed ={this.questionChangeHandler }
        questionList ={this.state.questions}
       optionTextChanged={this.optionTextChangeHandler}
       optionDeleted ={this.deleteOptionHandler}
       correctOptionSelected={this.chooseCorrectAnswerHandler}

        > </Questions>
         </div>
      { this.state.publishingEligiblity? 
      <button onClick={this.publishQuizHandler} type="button"> Preview </button> : null} 
   

   
   </div> 
     ) : whatToShow=(   <div> {  this.state.publishQuiz ? <Preview questionListP={this.state.questions}> </Preview>:null}
        </div>
        );


        return (

           <div>
               {whatToShow}
           </div>


        )
        

        }




}
export default  Quizmaker