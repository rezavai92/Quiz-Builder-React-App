import React from 'react';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'



const PreviewOption =(props)=>{
    let optionId =`option${props.id}` ;
    let name =`question${props.name}`;



        
    return (

        
        <div style={{marginLeft:"10px"}} className="preview">
            
            <input  type="radio" name={name } id ={optionId} value={props.value} />
            <label style={{marginLeft:"5px"}} htmlFor ={optionId}> {props.value} </label>
        </div>
    )
}

export default PreviewOption;