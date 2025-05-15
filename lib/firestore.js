import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

/**
 * Fetches all documents from a Firestore collection.
 * @param {string} collectionName
 * @returns {Promise<Array<Object>>}
 */
export async function getAll(collectionName) {
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return docs;
  } catch (error) {
    console.error(`Error fetching from ${collectionName}:`, error);
    throw error;
  }
}

/**
 * Adds a new document to a Firestore collection.
 * @param {string} collectionName
 * @param {Object} data
 * @returns {Promise<string>} - The ID of the new document
 */
export async function addOne(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error(`Error adding to ${collectionName}:`, error);
    throw error;
  }
}

/**
 * Updates an existing document in a Firestore collection.
 * @param {string} collectionName
 * @param {string} id
 * @param {Object} data
 * @returns {Promise<void>}
 */
export async function updateOne(collectionName, id, data) {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error(`Error updating ${collectionName}/${id}:`, error);
    throw error;
  }
}

/**
 * Deletes a document from a Firestore collection.
 * @param {string} collectionName
 * @param {string} id
 * @returns {Promise<void>}
 */
export async function deleteOne(collectionName, id) {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Error deleting ${collectionName}/${id}:`, error);
    throw error;
  }
}
