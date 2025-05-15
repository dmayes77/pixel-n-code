// setAdminRole.js

import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import dotenv from "dotenv";
dotenv.config(); // Load .env.local

// Initialize Firebase Admin SDK
initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});

async function makeAdmin() {
  const uid = "JLFzofkNCdNSMDKeSGaiowBppI12"; // <<== Find UID in Firebase Console
  try {
    await getAuth().setCustomUserClaims(uid, { role: "admin" });
    console.log(`✅ User ${uid} has been given admin role!`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to set admin role:", error);
    process.exit(1);
  }
}

makeAdmin();
