import { render } from '@testing-library/react'
import React from 'react'

function Answer(props){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-lg-12 col-md-12 col-sm-12 col-12' style={{marginTop:'20px',textAlign:'center'}}>
                    <button onClick={() => props.handleClick(props.choice)} style={{borderRadius:'50px',border:'2px solid red'}}>{props.answer}</button>

                    </div>
                </div>
              
            </div>

        )
   
}


export default Answer;