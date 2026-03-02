import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../fireBaseConfig";
import "firebase/compat/auth";

function signinWithGoogle() {

   const provider = new GoogleAuthProvider();
   signInWithPopup(auth,provider)
      .then((result) => {
        console.log("Google sign-in successful:", result);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  
 
}

export default signinWithGoogle