// /lib/firebaseAdmin.js
import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

const rawKey = process.env.FIREBASE_PRIVATE_KEY;
const privateKey = rawKey?.replace(/\\n/g, "\n");

if (
  !process.env.FIREBASE_PROJECT_ID ||
  !process.env.FIREBASE_CLIENT_EMAIL ||
  !privateKey
) {
  throw new Error(
    "⚠️ Missing one of FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL or FIREBASE_PRIVATE_KEY"
  );
}

const credentials = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey,
};

const adminApp = getApps().length
  ? getApp()
  : initializeApp({ credential: cert(credentials) });

// explicitly bind the app instance
export const adminDb = getFirestore(adminApp);
export const adminAuth = getAdminAuth(adminApp);
