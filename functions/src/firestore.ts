import * as functions from 'firebase-functions';





export const createPost = functions.firestore.document('post/{postId}').onCreate((snapshot:any,context)=>{
    const data= snapshot.data();
    const new_text= noSwearWord(data.post);

    return snapshot.ref.update({post:new_text});


})



function noSwearWord(text:String){

    return text.replace(/\bshit|fuck\b/g,'🤪🤪🤪🤪');

}