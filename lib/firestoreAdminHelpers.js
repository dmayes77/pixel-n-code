// /lib/firestoreAdminHelpers.js

import { adminDb } from "./firebaseAdmin";

/**
 * Fetches all documents from a Firestore collection (Admin SDK).
 */
export async function adminGetAll(collectionName) {
  const snapshot = await adminDb.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Adds a new document to a Firestore collection (Admin SDK).
 */
export async function adminAddOne(collectionName, data) {
  const docRef = await adminDb.collection(collectionName).add({
    ...data,
    createdAt: new Date(),
  });
  return docRef.id;
}

/**
 * Updates an existing document in a Firestore collection (Admin SDK).
 */
export async function adminUpdateOne(collectionName, id, data) {
  await adminDb
    .collection(collectionName)
    .doc(id)
    .update({
      ...data,
      updatedAt: new Date(),
    });
}

/**
 * Deletes a document from a Firestore collection (Admin SDK).
 */
export async function adminDeleteOne(collectionName, id) {
  await adminDb.collection(collectionName).doc(id).delete();
}
