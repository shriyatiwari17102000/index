import React, { useState } from "react";
import axios from "axios";

const Form = () => {
const [state, setState] = useState({
        name:'',
        lastname:'',
        email :'',
        message: '',
        sent : false
})


const onChange=(e)=>{
setState({...state,[e.target.name]:e.target.value})
}


const formSubmit =(e) =>{
    e.preventDefault();

    const data = {
        name: state.name,
        lastname: state.lastname,
        email: state.email,
        message: state.message
    }
    axios.post('http://localhost:3001/api/forma', data)
    .then(res => {
        console.log(res.data)
        setState({
            sent:true,
        },resetForm())
    }).catch(()=>{
        console.log('message not sent');
    })
}

const resetForm=()=>{

    setState({
        name: '',
        lastname:'',
        email:'',
        message:''
    })
   setTimeout(() => {
    setState({
        sent:false,
    })
   }, 3000);
}

return(
    <div className='container'>
        <form onSubmit={formSubmit} onChange={onChange}>
            <div className="singleItem">
                <label htmlFor="name">Name:</label>
                <input type="text" 
                name='name' className='name' 
                value={state.name}
                 placeholder='Your name...'/>
            </div>
            <div className="singleItem">
                <label htmlFor="lastname">LastName:</label>
                <input type="text"
                 name='lastname' className='name'
                 value={state.lastname}
                placeholder='Your Lastname...'/>
            </div>
            <div className="singleItem">
                <label htmlFor="email">Email:</label>
                <input type="email" 
                name='email' className='name'
                 value={state.email}
                placeholder='Your email...'/>
            </div>
           
           <div className="textarea">
            <label htmlFor="message">Message</label>
            <textarea
             name="message"
             value={state.message}
            id="" cols="30" rows="5" placeholder='Your message...'></textarea>
           </div>

           <div className={state.sent ? 'msgAppear': 'msg'}>Message has been sent</div>
           <div className="btn">
            <button type='submit'>Submit</button>
           </div>
        </form>
    </div>
)

}

export default Form;