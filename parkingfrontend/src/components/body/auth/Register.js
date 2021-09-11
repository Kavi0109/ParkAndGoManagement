import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notifications/Notifications'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'

const initialState = {
    firstName : '',
    lastName : '',
    email : '',
    telephone : '',
    password : '',
    cf_password : '',
    err : '',
    success : ''
}

function Register () {
    const [user, setUser] = useState(initialState)

    const {firstName, lastName, email, telephone, password, cf_password, err, success} = user

    const handleChangeInput = e => { //to type inside field
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()

        //the whole form is filled
        if(isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(telephone) || isEmpty(password) || isEmpty(cf_password))
        return setUser({...user, err: "Please fill in all fields", success: ''})

        //email format match
        if(!isEmail(email))
            return setUser({...user, err: "Invalid email format", success: ''})
        
        //password too short 
        if(isLength(password))
            return setUser({...user, err: "Password should be atleast 6 characters", success: ''})

        //password match 
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Passwords do not match. Please enter again", success: ''})
            
        try {
         
            const res = await axios.post('/user/register',{
                firstName, lastName, email, telephone, password
            })

            setUser({...user, err: '', success: res.data.msg})

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }
    return (
        <div className="login_page">
            <h2> Register </h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}> 
                <div> 
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text" placeholder="Please enter first name" id="firstName" value={firstName} name="firstName" onChange={handleChangeInput}/>
                </div>

                <div> 
                    <label htmlFor="lastName"> Last Name </label>
                    <input type="text" placeholder="Please enter last name" id="lastName" value={lastName} name="lastName" onChange={handleChangeInput}/>
                </div>

                <div> 
                    <label htmlFor="email"> Email Address </label>
                    <input type="text" placeholder="Please enter email address" id="email" value={email} name="email" onChange={handleChangeInput}/>
                </div>

                <div> 
                    <label htmlFor="telephone"> Telephone </label>
                    <input type="text" placeholder="Please enter telephone number" id="telephone" value={telephone} name="telephone" onChange={handleChangeInput}/>
                </div>

                <div> 
                    <label htmlFor="password"> Password </label>
                    <input type="password" placeholder="Please enter password" id="password" value={password} name="password" onChange={handleChangeInput}/>
                </div>

                <div> 
                    <label htmlFor="cf_password"> Confirm Password </label>
                    <input type="password" placeholder="Please re-enter password" id="cf_password" value={cf_password} name="cf_password" onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <button type="submit"> Register </button>
                </div>
            </form>

            <p> Already have an account? <Link to = "/login"> Login Now </Link></p>
        </div>
    )
}

export default Register