import SignUpForm from '../../components/sign-up/sign-up-form.component';
import Button from '../../components/button/button.component';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';
  
  const SignIn = () => {

    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };

  
    return (
      <div>
        <SignUpForm/>
        <Button buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>

      </div>
    );
  };
  
  export default SignIn;