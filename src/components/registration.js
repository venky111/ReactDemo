import React from 'react'
import ReactDOM from 'react-dom'

class Registration  extends React.Component {
    state = {
        FirstName : '',
        LastName : '',
        EmailId :'',
        Password:''
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.id] : e.target.value
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            FirstName : '',
        LastName : '',
        EmailId :'',
        Password:''
        })
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://gopinath935.us-east-2.elasticbeanstalk.com/registerUser",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: this.state.FirstName,
                    lastName: this.state.FirstName,
                    password: this.state.Password,
                    emailId: this.state.EmailId
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
        (error) => {
            console.log("Error in user register")
        }
    )
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>FirstName</p>
                <input id='FirstName' onChange={this.handleChange} value={this.state.FirstName} type='text' /><br />
                <p>LastName</p>
                <input id='LastName' onChange={this.handleChange}  value={this.state.LastName} type='text' /><br />
                <p>Email</p>
                <input id='EmailId' onChange={this.handleChange}  value={this.state.EmailId} type='email' /><br />
                <p>Password</p>
                <input type='password' onChange={this.handleChange} value={this.state.Password} id='Password' /><br /><br />
                <button>Submit</button>
            </form>
        )
    }
}

export default Registration