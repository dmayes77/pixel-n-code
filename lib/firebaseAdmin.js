import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth as getAdminAuth } from "firebase-admin/auth"; // <- ✅

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

// Initialize only if not already initialized
const adminApp = !getApps().length
  ? initializeApp(firebaseAdminConfig)
  : getApp();

export const adminDb = getFirestore();
export const adminAuth = getAdminAuth(); // <- ✅ Export admin auth instance
