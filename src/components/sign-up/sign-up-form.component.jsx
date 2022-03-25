import {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {  createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';

const deafaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () =>{
  const [formFields, setFormFields] = useState(deafaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;


  const resetFormFields = () =>{
      setFormFields(deafaultFormFields);
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
    
    if(password !== confirmPassword){
        alert('passwords do not match');
        return;
    }
    try {
        const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password
        );

        await createUserDocumentFromAuth(user,{ displayName });
        resetFormFields();
    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('User already exists.');
        }else{
            console.log('user creation error', error);

        }
    }

  }
  const handleChange =(event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  };

    return(
        <div className='sign-up-container'>
            <h2>Don't have an Account?</h2>
            <span>Sign Up </span>
            <form onSubmit={handleSubmit}>
            <FormInput 
            label="Display Name"
            type='text' 
            required 
            onChange={handleChange}
            name="displayName" 
            value={displayName}/>
            <FormInput 
            label='Email'
            type='email'
             name='email'
             required
             onChange={handleChange} 
             value={email}
             />
            <FormInput 
            label='Password'
            type="password"
             required
             onChange={handleChange}
             name="password"
             value={password}
             />
            <FormInput 
            label='Confirm Password'
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            />

            <Button type="submit">Register</Button>
            </form>
        </div>
    )
}

export default SignUpForm;