import React, { Component } from 'react' 
import '../css/form.css'
export default class NoteCard2 extends Component{
    constructor(props){
        super(props)
        this.state = { 
        note: '',  
        provider_id: '', 
        patient_id: ''
    }  
}

    handleChange =(e)=>{
        e.preventDefault() 
        let saveE = e; 
        this.setState({ 
            provider_id: this.props.provider_id, 
            patient_id: this.props.patient_id[0].id,
            note: saveE.target.value
        }) 
        
    } 
    handleSubmit =(e)=>{
        e.preventDefault() 
         
        let provider_num = this.props.provider_id 
        let patient_num = this.props.patient_id.toString() 
        
        this.props.addNoteCard(provider_num, patient_num, this.state.note) 
        this.setState({note: '', patient_id: '', provider_id: ''})  
        
        this.props.updateStateBasedonURL('/ProviderPatients')
        this.props.history.push('/ProviderPatients')
    }
    
    render(){ 
         
        return (<div className="signIn"> 
            <label>Add Chart Note: </label>
            <form className="signIn" onSubmit={(e) => this.props.handleSubmit2(this.props.provider_id, this.props.patient_id, this.state, e)}>


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