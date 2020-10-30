
import React from 'react'
// import Questionaire from './Questionaire'
// import quiz from 'quiz.jpg'

function UserGreeting(props){
    var result=''
    if(props.correct>=8){
        result = 'Excellent Good Job  Congratulation You Passed'
    }

    else if(props.correct<=7 && props.correct>=5){
        result = 'Congratulation You Passed'
    }
    else{
        
        result='Fail'
    }

    // function again(){
    //     <Questionaire/>
    // }



    
        return(
            <div className='container' style={{color:'red'}}>
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>

                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12' style={{textAlign:'center',marginTop:'30px',backgroundColor:'white',}}>
                    <h3 id='head'>Thank You For Completeing Questionaire! </h3>
                    {/* <hr style={{color:'green',fontWeight:'bold'}}/> */}
                    <hr  style={{color: 'green',backgroundColor: 'green', height: 5 }}/>
                    </div>
                   
                </div>
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4>Student name : {props.User}</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>
                    </div>
                </div>
               

                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4>Total Question  : 10</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>

                    </div>
                </div>
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4>Correct Answer  : {props.correct}</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>

                    </div>
                </div>
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4>Wrong Answer  : {props.incorrect}</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>

                    </div>
                </div>
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4>Percentage  : {(props.correct/10)*100}%</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>

                    </div>
                </div>  
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4>Your Total Score : {(props.correct)}/10</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>

                    </div>
                </div>  
                <div className='row'>
                    <div className='col col-lg-3 col-md-2 col-sm-12 col-12'>

                    </div>
                    <div className='col col-lg-7 col-md-7 col-sm-12 col-12'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <h4 id='head'>Result  : {result}</h4>
                        <hr  style={{color: 'green',backgroundColor: 'black', height: 2 }}/>

                    </div>
                </div>  
                {/* <div className='row'>
                    <div className='col col-lg-3'>

                    </div>
                    <div className='col col-lg-7'  style={{textAlign:'center',backgroundColor:'white'}}>
                        <button id='btn' onClick={again}>Try Again</button>
                      

                    </div>
                    <br/>  <br/>
                    
                </div>  */}
             
             
        

                
                
            </div>
            

        )
   
}


export default UserGreeting;