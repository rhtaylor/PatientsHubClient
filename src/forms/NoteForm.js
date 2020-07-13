import React, { Component } from 'react'; 
import '../css/form.css'
export default class NoteForm extends Component{
    state = {
        note: ""
    }  
    handleChange =(e)=>{ 
        e.preventDefault(); 
            this.setState({
            note: e.target.value
        })
    } 
    render(){ 
        debugger
        return(<div className="jumbotron" id="noteCard"> 
            {this.props && this.props.addNote === 'LOADING' ? <h1>{this.props.addNote}</h1> 
            : <div id={this.props.addNote.id}><p>Patient: {this.props.addNote.name}</p>
                    <p>diagnosis: { this.props.addNote.diagnosis || "pending"}</p>
                </div> }
        <form className="form" key={this.props.addNote.name}> 
             
            <label>Note on patient: </label>
            <br/>
           
            <textarea type="textarea" id="note" placeholder="Add note..." value={this.state.note} 
                    onChange={(e) => this.handleChange(e)}></textarea>
            <br/>
            <input type="submit" value="save it to chart" />

        </form> 
        </div>
        )}
}