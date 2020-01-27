import React from 'react'
import Employee from './employee'

class MainEmployee extends React.Component{
    state ={
        employeeList : []
    }


    getEmployees = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+ " http://gopinath935.us-east-2.elasticbeanstalk.com/getEmployees")
        .then(res => res.json())
        .then(result => {
            this.setState({
                employeeList : result
            })
        })    
    }

    getEmployeeById = (id) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+ " http://gopinath935.us-east-2.elasticbeanstalk.com/getEmployById")
        .then
    }

    addEmployee = (emp) => {

        this.setState({
            employeeList : [...this.state.employeeList,emp]
        })
        console.log(this.state)
    } 
    render(){
        return(
            <Employee addEmployee = {this.addEmployee}/ >
        )
    }
}

export default MainEmployee