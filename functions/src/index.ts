import * as admin from 'firebase-admin';

admin.initializeApp();


export {createRecord} from './auth';


export {createPost} from './firestore';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
