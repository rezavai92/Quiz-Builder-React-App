import React from 'react'
import './Preview.css'
import Share from '../Share'
import PreviewQuestion from './PreviewQuestion'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
class Preview extends React.Component{
constructor(props){
super(props);
this.myRef=React.createRef();
this.pageRequired =this.props.questionListP/5;

}

    handlePdf = () => {
    const input =this.myRef.current; 
    
         html2canvas(input)
  .then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    

    const pdf = new jsPDF('p','pt','a4');
      
     pdf.addImage(imgData, 'PNG', 10, 10);
    // pdf.addHTML(imgData,10,10);

     

    pdf.save("NrQuizBuilder.pdf");
  });
;



    
}
    
    

onFormSubmission(event){
    event.prventDefault();
    const input =this.myRef.current;
}

render (){

    return (
        <div>

         <form onSubmit={this.onFormSubmission}>                                         
        <div ref={this.myRef} className="preview"  > 
        {this.props.questionListP.map((qst,index)=>{


            return (
                <div key ={index}>           
                <PreviewQuestion question={qst.question} 
                                 options={qst.options} 
                                 questionNo={index}  
                                 
                                 
                                 
                > </PreviewQuestion>
                
                </div>
                
        
            )
        })}
                
</div>

    <div  className="container">
        <button className="btn-success .btn-sm" type="button" onClick={this.handlePdf}>convert pdf</button> 
    </div>
    </form>   
    </div>
    )


}


}


export default Preview ;