import { render } from '@testing-library/react'
import React from 'react'

function Question(props){

        return(
            <div>
                <h3 style={{display:'inline'}}>{props.current+1}).</h3>
                <h3  style={{display:'inline'}}>&emsp;{props.dataSet.question}</h3>
                
            </div>

        )
   
}


export default Question;