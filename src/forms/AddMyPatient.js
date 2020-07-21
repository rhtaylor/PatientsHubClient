import React, { Component } from 'react'

export default class AddMyPatient extends Component {
    state = {
        name: '',
        age: '',
        email: '',
        phone_number: '',
        diagnosis: ''
    }

    render() {
        return (<div className="signIn">
            <form className="signIn" onSubmit={(e) => this.handleSubmit(e)}>
                <label>name </label>
                <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
                <br />
                <label>age </label>
                <input type="text" id="age" value={this.state.age} onChange={this.handleChange} />
                <br />
                <label>email </label>
                <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
                <br />
                <label>phone number </label>
                <input type="text" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                <br />
                <label>diagnosis</label>
                <input type="text" id="text" value={this.state.diagnosis} onChange={this.handleChange} />
                <br />

                <input type="submit" value="add patient" /*onClick={this.handleSubmit(this.state)}*/ />
            </form>
        </div>)
    }

}