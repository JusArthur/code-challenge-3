import admin from 'firebase-admin';
import path from "path";
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getAuth, Auth } from "firebase-admin/auth";

const serviceAccountPath = path.resolve(__dirname, '../serviceAccountKey.json');

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath)
    })
}

const db: Firestore = getFirestore();

const auth: Auth = getAuth();

export { auth, db };