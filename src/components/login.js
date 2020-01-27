import React from 'react'
import ReactDom from 'react-dom'
import MainEmployee from './mainEmployee'

class Login extends React.Component{
    state = {
        showComponent: false,
        UserName : '',
        Password :''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://gopinath935.us-east-2.elasticbeanstalk.com/loginUser",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: this.state.Password,
                    userName: this.state.UserName
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        showComponent :true
                    })
                    console.log(result)
                },
        (error) => {
            console.log("Error in user login")
        }
    )
    }
    render(){

    return(
        <div className="LoginClass">
        {this.state.showComponent ? <MainEmployee/>:
            <form onSubmit={this.handleSubmit}>
                <p>UserName</p>
                <input type='email' onChange={this.handleChange} value ={this.state.UserName} id='UserName' /><br />
                <p>Password</p>
                <input type='password' onChange={this.handleChange} value={this.state.Password} id='Password' /><br /><br/>
                <button>submit</button>
            </form>
        }
        </div>
    )
}
}

export default Login;