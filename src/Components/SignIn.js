import React from 'react'

const SignIn = () => {
  return (
    <div className='container'>
        <div className='formDiv'>
            <form className='container_form'>
                <h1>Sign in</h1>
                <input type="text" placeholder="Email or phone number" />
                <input type="password" placeholder="Password" />
                <button type='submit'>Sign in</button>
                <div className='remember_style'>
                    <div className='checkbox_remember'>
                        <input type="checkbox"/>
                        <label type="me">Remember me</label>
                    </div>
                    <label type='help'>Need Help?</label>
                </div>
                <div className='new_netflix_style'>
                    <p>New to Netflix?<a href='google.com'>Sign up now</a></p>
                </div>
                <p className='para'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
        </div>
    </div>
  )
}

export default SignIn
