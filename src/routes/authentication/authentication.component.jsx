import SignUpForm from '../../components/sign-up/sign-up-form.component';
import SignInForm from '../../components/sign-in/sign-in-forn.componenet';
import Button from '../../components/button/button.component';
import './authentication.styles.scss'

  const Authentication = () => {
  
    return (
      <div className='auth-container'>
        <SignInForm/>
        <SignUpForm/>

      </div>
    );
  };
  
  export default Authentication;