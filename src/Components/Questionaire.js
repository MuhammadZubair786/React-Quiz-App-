import React , { Component} from 'react'
import dataSet from '../api/data'
import QuizArea from './QuizArea'
import ScoreArea from './ScoreArea'

class Questionaire extends Component {
   

    constructor(props){
        super();
        alert(props.User)
        this.state={
            current : 0,
            user:props.User,
            dataSet : dataSet,
            correct :0,
            incorrect : 0,
            isFinished :false,
            
        }
        this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick(choice){
        
        if(choice == this.state.dataSet[this.state.current].correct){
            this.setState({correct:this.state.correct+1})
        }
        else{
            this.setState({incorrect:this.state.incorrect+1})

        }
        if(this.state.current == this.state.dataSet.length-1){
            this.setState({
                isFinished:true
            })
           
        }
        else{
            this.setState({
                current:this.state.current+1
            })
        }
        
    }

    render(){
        return(
            
            <div>
                <QuizArea  User={this.props.User} handleClick={this.handleClick} isFinished={this.state.isFinished} dataSet={this.state.dataSet[this.state.current]}
                correct={this.state.correct} incorrect={this.state.incorrect} current= {this.state.current}/>
                {/* <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect}/> */}
               

            </div>
        )
    }
}

export default Questionaire;