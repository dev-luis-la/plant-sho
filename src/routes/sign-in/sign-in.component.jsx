import SignUpForm from '../../components/sign-up/sign-up-form.component';

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
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>

      </div>
    );
  };
  
  export default SignIn;