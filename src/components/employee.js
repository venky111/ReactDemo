import React from 'react'
import ReactDom from 'react-dom'

class Employee extends React.Component{
    state= {
        FirstName:'',
        LastName:'',
        PhoneNumber:'',
        RollNumber:''
    }
    addEmployee = (e) =>
    {
        e.preventDefault();
        this.props.addEmployee({...this.state})
        this.setState({
            FirstName:'',
            RollNumber:'',
            LastName:'',
            PhoneNumber:''
        }
        )
    }

    handleChanged = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }) 
    }
    render(){
        return(
            <div>
            <form onSubmit={this.addEmployee}>
            <p>FirstName</p>
            <input id='FirstName' onChange={this.handleChanged} value={this.state.FirstName} type='text'/><br/>
            <p>LastName</p>
            <input id='LastName' onChange={this.handleChanged} value={this.state.LastName} type='text'/><br/>
            <p>RollNumber</p>
            <input id='RollNumber' onChange={this.handleChanged} value={this.state.RollNumber} type='text'/><br/>
            <p>PhoneNumber</p>
            <input type='text'onChange={this.handleChanged} value ={this.state.PhoneNumber} id='PhoneNumber'/><br/><br/>
            <button>AddEmployee</button>
            </form>
            </div>
        )
    }
}

export default Employee