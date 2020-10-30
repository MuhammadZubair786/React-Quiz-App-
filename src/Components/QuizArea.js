import React from 'react'
import Question from './Question'
import AnswerList from './Answer_lst'
import UserGreeting from './UserGreeting'

function QuizArea(props){
    
    // if(props.isFinished){
       
       
    // }
   
        return(
            <div>
                {props.isFinished
                ?
                <UserGreeting User={props.User}  correct={props.correct} incorrect={props.incorrect}/>
               
                :
                <div className='container' style={{backgroundColor:'white',borderRadius:'50px'}} >
                    
                    <div className='row' style={{marginTop:'40px'}}>
                        <div className='col col-lg-2'>
                        </div>
                        <div className='col col-lg-8 col-sm-12 col-12' style={{color:'blue',textAlign:"center"}}>
                            <h3>Welcome {props.User}</h3>
                        </div>
                    </div>
                    <div className='row' style={{marginTop:'10px'}}>
                        <div className='col col-lg-4 col-md-4 col-sm-12 col-12'>
                            <h3>Question {props.current+1} Of 10</h3>
                            
                        </div>
                        {/* <div className='col col-lg-8  col-md-8 col-sm-12 col-12' style={{textAlign:'right',}}>
                <h3 style={{display:'inline'}}>Correct : {props.correct}</h3>
                <h3 style={{display:'inline',marginLeft:'10px'}}>InCorrect : {props.incorrect}</h3>
                        </div> */}
                    </div>
                    <div className='row'>
                    <div className='col col-lg-2'>
                    </div>
                    
                    <div className='col col-lg-8 col-md-12 col-sm-12 col-12'>

                    <Question dataSet={props.dataSet}  current={props.current}/>
                <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>

                        </div>
                        
                        
                    </div>
                    <br/><br/>
                {/* <h2>Quiz Area</h2> */}
                
                
                </div>
                

            }
               
        {/* <h3>Correct :{props.correct}</h3> */}
               
                
            </div>

        )
   
}


export default QuizArea;