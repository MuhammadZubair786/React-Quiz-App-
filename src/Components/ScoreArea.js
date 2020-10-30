import React from 'react'
import TotalCorrect from './TotalCorrect'
import TotalInCorrect from './TotalInCorrect'
import UserGreeting from './UserGreeting'


function Scorearea(props){
   
        return(
            <div>
                {/* <h2>Score Area</h2> */}
                <div className='container' style={{backgroundColor:'white'}}>
                    <div className='row'>
                    <div className='col col-lg-6' style={{textAlign:'right'}}>
                    <TotalCorrect correct={props.correct}/>
                    </div>
                    <div className='col col-lg-6' style={{textAlign:'left'}}>
                    <TotalInCorrect incorrect={props.incorrect}/>
                    </div>
                    </div>
                </div>
                
               
               
                
            </div>

        )
   
}
export default Scorearea;