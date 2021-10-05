import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../Firebase/';
const SignUp = () => {

    const firebase = useContext(FirebaseContext);
    console.log(firebase);


    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''

    }
    
    const [logindata, setLoginData] = useState(data);
    const [error, setError] = useState('')
    // console.log(logindata);
    const handleChange = e => {
        setLoginData({
            ...logindata,
            [e.target.id]: e.target.value
        });

    }
    const handleSubmit = e => {
        e.preventDefault();
        const { email, password} = logindata;
        firebase.signupser(email, password)
            .then(user => {
              setLoginData({...data})
            })
            .catch(error => {
                setError(error)
                setLoginData({...data})
            })
    }
    const { pseudo, email, password, confirmPassword } = logindata;
    const btn = pseudo !== '' || email !== '' || password !== '' || password !== confirmPassword ? 
        <button>Inscription</button> : <button disabled>Inscription</button>
    // gestion erreur
    const errormsg =  error !== '' && <span>{ error.message}</span>
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        <h2>Inscription</h2>
                        {errormsg}
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo}type="text" id="pseudo" autoComplete = "off" required />
                            <label htmlFor="pseudo">Psuedo</label>
                            </div>
                            <div className="inputBox">
                            <input onChange={handleChange} value={email} type="email" id="email" autoComplete = "off" required />
                            <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={password}type="password" id="password" autoComplete = "off" required />
                            <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword}type="password" id="confirmPassword" autoComplete = "off" required />
                            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                            {btn}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
