import React from 'react'
import './App.css';
import Questionaire from './Components/Questionaire'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './quiz.jpg';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      User: '',
    }


  }
  submit = () => {
    var name = document.getElementById('name').value;
    if (name == '') {
      alert("Please Enter Your Name")
    }
    else {
      this.state.User = name
      this.setState({
        User: this.state.User
      })

    }

  }

  render() {

    return (
      <div className='App'>


      <div className='container-fluid'>
        <div className='row'>
          <div className='col col-lg-12 col-sm-12 col-12 col-md-12' style={{ backgroundColor: ' #F0400C', color: 'white', textAlign: 'center' }}>
            <h1><img src={logo} style={{width:'50px'}}/>&nbsp;Java Script Quiz</h1>

          </div>


        </div>





        {
          this.state.User
            ?

            <Questionaire User={this.state.User} />


            :
            <div className="container-fluid">
              <br/>
              <div className="row">
                <div className="col col-lg-4">
                  

                </div>
              
              <div className="col col-lg-4 col-sm-12 col-12 col-md-12 " style={{textAlign:'center'}} >

                <form action="" id='frm' style={{marginTop:'20%'}}>
                    
                      <input type="text" id='name'  required placeholder='Enter Your Name'  style={{backgroundColor:' #FAE90E',borderRight:'0px',borderTop:'0px',borderLeft:'0px',width:'70%',textAlign:'center',color:'blue',fontSize:'20px'}}/>
                      {/* <label  id='label1'>Enter Your Name :</label> */}
                      
                        <br/><br/>
                        <button type="button" class="btn btn-success" onClick={this.submit} >Start Quiz</button>
                    
                  
                  </form>
            </div>
            </div>

            </div>
            
            












        }

      </div>
      </div>




    );
  }
}







export default App;
