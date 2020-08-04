import React, {Component} from 'react' 
import Option from '../Option/option.js'
import './question.css'
import {Jumbotron,Button} from 'react-bootstrap'
class quiz extends Component 

{
    generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    state ={ options : [  ] }
    
    deleteOptionHandler =(index)=>{
    
        let options = [...this.state.options];
        
        options.splice(index,1);

        this.setState({options:options});

    }


 

    switchHandler=()=> {
     let options = [...this.state.options];
    
     
     
     options.push({text: "" ,correctAnswer :false, id: this.generateKey(Math.random())});
    
     this.setState({options:options })
    
    }
    

    render (){
    
    return (
    <Jumbotron >           

    <div >                
    <span  > {this.props.quizNumber} . </span>
      
      <input style={{width:"80%"}}  className="form-control" onChange={(event)=>{ this.props.changed(event,this.props.index)} }
      value={this.props.question} placeholder="add question" type="text" />

    
    </div>
    
     
      
      <br/>
      {this.props.options.map((opt,index)=>{ return (
        
        
        <Option 
        changed={(event)=>{this.props.optionTextChanged(this.props.index,event,index)} }
        
         text={opt.text} 
         deleted={this.props.optionDeleted.bind(this,this.props.index ,index)} 
          key={opt.id}
         correctAnswer={opt.correctAnswer}
        clicked ={this.props.correctOptionSelected.bind(this,this.props.index,index)}
         
         > </Option> ) 
            
            
            })} 




    
     
      
            <div style={{marginTop:"1%" }} className="container"> 
            <Button varaint="primary" onClick={this.props.optionAppended} type="button"> Add option </Button>
            
            
            <Button variant="danger" onClick={this.props.deleted}  type="button">Delete Question </Button>
            
            </div>

        
            </Jumbotron>
    )
      
    }
    

}

export default quiz ;