import React, { Component } from 'react' 
import '../css/form.css'
export default class NoteCard extends Component{
    constructor(props){
        super(props)
        this.state = { 
        note: '',
        date: Date(),  
        provider_id: '', 
        patient_id: ''
    }  
}

    handleChange =(e)=>{
        e.preventDefault() 
        let saveE = e; 
        this.setState({
            note: saveE.target.value
        }) 
        
    } 
    handleSubmit =(e)=>{
        e.preventDefault() 
        debugger 
        let provider_num = this.props.provider_id 
        let patient_num = this.props.patient_id.toString()  
        
        debugger
        this.props.addNoteCard(provider_num, patient_num, this.state) 
        this.setState({note: '', patient_id: '', provider_id: ''})  
        debugger
        this.props.history.push('/ProviderPatients')
    }
    
    render(){ 
        debugger 
        return (<div className="signIn"> 
            
            <form className="signIn" onSubmit={(e) => this.handleSubmit(e)}>


                <label>Note  </label>
                <textarea name="note" rows="10" cols="30"
                    onChange={this.handleChange} value={this.state.note}> </textarea>
                <br />
                <label>Electronic Signature  </label>
    <input type="checkbox" id='provider_id' name="provider_id" value={this.state.provider_id} readOnly></input>
                <br />
                <input type="submit" value="chart it or it didn't happen" />
            </form>
        </div>)

    }
}