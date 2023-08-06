"use client";

import firebase_app from "../../firebase/clientApp";
import StyledFirebaseAuth from "../../firebase/StyledFirebaseAuth";
import { auth as AuthType } from "firebaseui";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import Link from "next/link";
import { useAuthContext } from "../../firebase/AuthContext";
Link;
const auth = getAuth(firebase_app);
const uiConfig: AuthType.Config = {
  signInSuccessUrl: "/",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  signInFlow: "popup",
};
const SignIn = () => {
  const { user } = useAuthContext();
  return (
    <div>
      {user ? (
        <>
          <h1>You are already logged in</h1>
          <button onClick={() => signOut(auth)}>Sign out</button>
          <p>or</p>
          <Link href={"/"}>Return Home</Link>
        </>
      ) : (
        <>
          <h1>Sign in</h1>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </>
      )}
    </div>
  );
};
export default SignIn;
