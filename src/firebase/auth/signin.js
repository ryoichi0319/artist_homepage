import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, data: result };
        
    } catch (error) {
        let errorMessage = "An error occurred while signing in.";

        // Check for specific error codes and customize error message
        if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid email address.";
        } else if (error.code === "auth/wrong-password") {
            errorMessage = "Invalid password. Please try again.";
        } else if (error.code === "auth/user-not-found") {
            errorMessage = "User not found. Please sign up first.";
        }

        // Log the error for debugging purposes
        console.error("Sign-in error:", error);
        alert(error)
     
        return { success: false, error: errorMessage };
    }
}
