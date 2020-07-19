import React, { Component } from 'react' 
import '../css/form.css'
export default class NoteCard extends Component{
    state = { 
        note: '',  
        provider_id: '', 
        patient_id: ''
    } 


    
    render(){ 
        return (<div className="signIn">
            <form className="signIn" onSubmit={(e) => this.handleSubmit(e)}>


                <label>Note  </label>
                <textarea name="note" rows="10" cols="30"
                    onChange={this.handleChange}> </textarea>
                <br />
                <label>Electronic Signature  </label>
    <input type="checkbox" id='provider_id' name="provider_id" value={this.state.provider_id} readonly></input>
                <br />
                <input type="submit" value="chart it or it didn't happen" />
            </form>
        </div>)

    }
}