import auth from '../../firebaseConfig'

const createUserWithEmailAndPassword = async(email, password)=>{
    return await createUserWithEmailAndPassword(auth, email, password);
}

const signInWithEmailAndPassword = async(email, password)=>{
    return await signInWithEmailAndPassword(auth, email, password);
}

const sendSignInLinkToEmail = async( email, actionCodeSettings)=>{
    return await sendSignInLinkToEmail(auth, email, actionCodeSettings);
}

