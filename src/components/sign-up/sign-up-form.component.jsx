import {useState} from 'react';
import {  createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const deafaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () =>{
  const [formFields, setFormFields] = useState(deafaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;


  const handleSubmit = async (event) =>{
    event.preventDefault();
    
    if(password != confirmPassword){
        alert('passwords do not match');
        return;
    }
    try {
        const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password
        );
        await createUserDocumentFromAuth(user,{ displayName });

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
        <div>
            <h1>Sign Up </h1>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type='text' 
            id='name' 
            required 
            onChange={handleChange}
             name="displayName" 
             value={displayName}/>

            <label>Email</label>
            <input 
            type='email'
             id='email'
             name='email'
             required
             onChange={handleChange} 
             value={email}
             />
            <label>Password</label>

            <input 
            type="password"
             required
             onChange={handleChange}
             name="password"
             value={password}
             />
            <label>Confirm Password</label>
            <input 
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            />

            <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignUpForm;