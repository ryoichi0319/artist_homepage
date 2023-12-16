import firebase_app from '../config'
import { getAuth, signOut } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

const signOutFunction = async () => {
  try {
    const auth = getAuth(firebase_app)
    await signOut(auth)
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e)
    }
  }
}
export default signOutFunction