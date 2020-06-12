import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

const db = admin.firestore();


export const createRecord = functions.auth.user().onCreate((user,context)=>{
    

    const userRef = db.collection('users').doc(user.uid);
     return userRef.set({
         email:user.email,
         createdOn:context.timestamp,
         uid:user.uid
     })

})