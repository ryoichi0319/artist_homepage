import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('/firebaseSecretKey.json')
export const firebaseAdmin =
  getApps()[0] ??
  initializeApp({
    credential: cert(serviceAccount),
  })

export const auth = getAuth()
