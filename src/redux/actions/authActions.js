import firebase from '../../firebase/firebase';

export function createEmailAccount(email,password) {
    return async (dispatch)=>{
try{
  const user = await firebase
  .auth()
  .createUserWithEmailAndPassword(email,password)
  dispatch(loggedIn(user))
}catch(error){
console.log(error)
}
    }
}
export function logEmailAccount(email,password) {
   return async (dispatch)=>{
    try{
        const user =await firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        dispatch(loggedIn(user))
      }catch(error){
      console.log(error)
      } 
    } 
}
export function logout() {
    return async (dispatch)=>{
        try{
            await firebase.auth().signOut()
            dispatch(loggedOut())
          }catch(error){
           console.log(error)
          }   
    }
}  

function loggedIn(user) {
    return{
        type:"LOGGED_IN",
        payload:user
    }
}

function loggedOut (user) {
    return{
        type:"LOGGED_OUT",
        
    }
}