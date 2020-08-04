import React ,  {Component} from 'react';
//import Router from './Components/Router/Router'

import Quizmaker from './Components/QuizMaker/Quizmaker'
import Homepage from './Components/Homepage/Homepage'
import Header from'./Components/Navigation/Header'



import Questions from './Components/Questions/Questions'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Quiz from './Components/Question/question';
import './App.css';

class App extends Component  {



render (){

  

return ( 


<BrowserRouter>   
                                         
       <switch>                                   
       <Route path='/' exact component={Homepage} ></Route>
       <Route path='/makequiz' exact component={Quizmaker}></Route>
       </switch>
</BrowserRouter>
       
           
     

  )
  
}

}
export default App;
