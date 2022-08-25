import React, { useState } from "react";
import axios from "axios"

const IndexForm = () => {
    const[state, setState] = useState({
        firstnumber : "",
        sign : "",
        lastnumber : "",
        sent : false
    })

    const submitHandler = (e) => {
            e.preventDefault();
        
            const data = {
                firstnumber: state.firstnumber,
                sign: state.sign,
                lastnumber: state.lastnumber,
    
            }
            console.log(data)
            axios.post('http://localhost:3001/api/forma', data)
            .then(res => {
                console.log(res.data)
                alert(res.data)
        
                // setState({
                //     sent:true,
                // },resetAll())
            }).catch(()=>{
                console.log('message not sent');
            })
        }

    const onChange=(e)=>{
        setState({...state, [e.target.name]:e.target.value})
        }

        // const resetAll=() => {
        //     setState({
        //         firstnumber: '',
        //         sign:'',
        //         lastnumber:'',
        //     })
        // }

    return(
        <div className="container">
            <form onSubmit={submitHandler} onChange={onChange}>
            <div className="innerdiv">
                <label htmlFor="firstnumber">First number</label>
                <input type="number" name="firstnumber"
                value={state.firstnumber}

                
                placeholder="enter number..."/>
            </div>
            <div className="innerdiv">
                <label htmlFor="sign">Sign</label>
                <input type="sign" name="sign" 
                value={state.sign}
                placeholder="enter operator" />
            </div>
            <div className="innerdiv">
                <label htmlFor="lastnumber">Last Number</label>
                <input type="number" name="lastnumber"
                value={state.lastnumber}
                placeholder="enter number..." />
            </div>
            <div className="btn">
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default IndexForm;