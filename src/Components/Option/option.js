import React from "react"
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faCheckCircle} from '@fortawesome/free-solid-svg-icons'

import './option.css'

const option = (props)=> {

    const style ={
        marginLeft: "5px",
    }
return (
          
            
            <div  id="wrapper" > 

             <input  className="form-control form-control-sm" 
            onChange={props.changed} value={props.text} placeholder="add option" type="text" />
            
                     
            <Button  variant="light"  type="button" size="sm" onClick={props.deleted}> 
            <FontAwesomeIcon icon={faTrash}/>
              </Button>  
              
        {  props.correctAnswer ?  <  Button variant="success" size="sm"
         type ="button" onClick={props.clicked}> 
         <FontAwesomeIcon icon={faCheckCircle}/>
        </Button>
      :  <Button variant="info" type="button" size="sm" onClick={props.clicked} > 
        <FontAwesomeIcon icon={faCheckCircle}/>
         </Button>
        
            
}

        </div>            

           
        
     
     
    
    
)

}

export default option 