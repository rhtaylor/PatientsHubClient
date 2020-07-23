import React, { Component } from 'react'

export default class AddMyPatient extends Component {
    state = {
        name: '',
        age: '',
        email: '',
        phone_number: '',
        diagnosis: ''
    }
    
    handleSubmit(e){
        e.preventDefault() 
        this.props.addMyPatient(this.props.provider_id, this.state) 
        debugger
        this.props.history.push('/ProviderPatients')
    }

    handleChange(e){
        e.preventDefault()  
        let id = e.target.id
        let value = e.target.value
        debugger  
        this.setState(preS => {  
          return {...preS, [id] : value} 
         } )
        console.log(this.state)
    }
    
    render() { 
        debugger
        return (<div className="signIn">
            <form className="signIn" onSubmit={(e) => this.handleSubmit(e)}>
                <label>name </label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                <br />
                <label>age </label>
                <input type="text" id="age" value={this.state.age} onChange={(e) => this.handleChange(e)} />
                <br />
                <label>email </label>
                <input type="text" id="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                <br />
                <label>phone number </label>
                <input type="text" id="phone_number" value={this.state.phone_number} onChange={(e) => this.handleChange(e)} />
                <br />
                <label>diagnosis</label>
                <input type="text" id="diagnosis" value={this.state.diagnosis} onChange={(e) => this.handleChange(e)} />
                <br />

                <input type="submit" value="add patient" /*onClick={this.handleSubmit(this.state)}*/ />
            </form>
        </div>)
    }

}