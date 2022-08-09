import React, { useState } from 'react'

const LoginPage = () => {

    const initialState = {
        email: '',
        password: '',
        error: '',
    }
    const [state, setState] = useState(initialState);

    const handleSubmit = () => {
        alert('You`ve succesfully logedIn')
    }
    const handleClick = () => {
        if (state.email === "") {
            alert("email can't be blank");
            return false;
        } else if (state.password.length < 8) {
            alert("Password must be at least 8 characters long.");
        }else return true;
    }
    return (
        <div  className='bodys'> <h1 > Login Page </h1>

            <form className='form-horizontal'  >
                {onsubmit = { handleSubmit } ? <p>You have successfully LogedIn </p> : null}
                <div className='logintitle'>
                    Email:
                    <input className='form-control'
                        type='text'
                        placeholder='Enter your email'
                        onChangeText={(newemail) => setState.email(newemail)}   
                    />
                    {state.email == null ? <p className='alert'>email can't be blank</p> : null}
                    Password:
                    <input className='form-control'
                        type='password'
                        placeholder='Enter your password'
                        onChange={(newpass) => setState.password(newpass)} />
                    {state.password == null ? <p className='alert'>Password must be at least 8 characters long.</p> : null}
                </div>
                <div class="form-check">
                    <label class="form-check-label"> Remember me
                        <input class="form-check-input" type="checkbox" />
                    </label>
                </div>
                <button class="btn btn-dark"
                    type="submit"
                    onClick={handleClick}>Login</button>
                    
            </form>

        </div >
    )
}

export default LoginPage