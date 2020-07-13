import React, { Component } from 'react'; 
import '../css/form.css' 

export default class NoteForm extends Component{
   constructor(props){
       super(props) 
       this.state = {
           note: ''
       }
   }  
    handleChange =(e)=>{ 
        e.preventDefault(); 
            this.setState({
            note: e.target.value
        })
    }  
    handleSubmit(e){
        e.preventDefault() && e.persist()
        let savE = e
        let provider_id = savE.target.parentElement.id
        let patient_id = savE.target.parentElement.parentElement.parentElement.id
        debugger
        this.props.addNoteToChart(provider_id, patient_id, this.state)
        
    }
    render(){ 
        debugger
        return (<div className="jumbotron" id={this.props.addNote.id}> 
            {this.props && this.props.addNote === 'LOADING' ? <h1>{this.props.addNote}</h1> 
            : <div id={this.props.addNote.id}><p>Patient: {this.props.addNote.name}</p>
                    <p>diagnosis: { this.props.addNote.diagnosis || "pending"}</p>
                </div> }
        <form className="form" key={this.props.addNote.name} 
        onSubmit={(e) => this.handleSubmit(e)}> 
             
            <label>Note on patient: </label>
            <br/>
           
            <textarea rows="10" columns="30" type="textarea" id="note" placeholder="Add note..." value={this.state.note} 
                    onChange={(state) => this.handleChange(state)}></textarea>
            <br/>
            <input type="submit" value="save it to chart" />

        </form> 
        </div>
        )}
}