import React, {Component} from 'react';
import axios from 'axios';

export default class Forms extends Component {

    state = {
        name:'',
        lastname:'',
        email :'',
        message: '',
        sent : false
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    
    formSubmit =(e) =>{
        e.preventDefault();

        let data = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        }
        axios.post('http://localhost:3001/api/forma', data)
        .then(res => {
            console.log(res.data)
            this.setState({
                sent:true,
            },this.resetForm())
        }).catch(()=>{
            console.log('message not sent');
        })
    }

    //for reseting initial data

    resetForm=()=>{

        this.setState({
            name: '',
            lastname:'',
            email:'',
            message:''
        })
       setTimeout(() => {
        this.setState({
            sent:false,
        })
       }, 3000);
    }
    
    render(){
        return(
            <div className='container'>
                <form onSubmit={this.formSubmit}>
                    <div className="singleItem">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='name' 
                        value={this.state.name}
                        onChange={this.handleName}
                         placeholder='Your name...'/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="name">LastName:</label>
                        <input type="text" name='Lastname' className='name'
                         value={this.state.lastname}
                         onChange={this.handleLastname}
                        placeholder='Your Lastname...'/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="name">Email:</label>
                        <input type="email" name='email' className='name'
                         value={this.state.email}
                         onChange={this.handleEmail}
                        placeholder='Your email...'/>
                    </div>
                   
                   <div className="textarea">
                    <label htmlFor="message">Message</label>
                    <textarea name="message"
                     value={this.state.message}
                     onChange={this.handleMessage}
                    id="" cols="30" rows="5" placeholder='Your message...'></textarea>
                   </div>

                   <div className={this.state.sent ? 'msgAppear': 'msg'}>Message has been sent</div>
                   <div className="btn">
                    <button type='submit'>Submit</button>
                   </div>
                </form>
            </div>
        )
    }
}