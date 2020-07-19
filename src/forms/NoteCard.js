import React, { Component } from 'react' 
import '../css/form.css'
export default class NoteCard extends Component{
    state = { 
        note: ''
    } 


    
    render(){ 
        return (<div className="signIn">
            <form className="signIn" onSubmit={(e) => this.handleSubmit(e)}>


                <label>Note  </label>
                <textarea name="note" rows="10" cols="30"
                    onChange={this.handleChange}> </textarea>
                <br />
                <label>Password  </label>
                <input type="password" name="password" placeholder="Enter password" value={this.state.password}
                    onChange={(e) => this.handleChange(e)} />
                <br />
                <input type="submit" value="chart it or it didn't happen" />
            </form>
        </div>)

    }
}