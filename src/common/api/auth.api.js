import { createUserWithEmailAndPassword, sendEmailVerification , signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";



export const signupAPI = (data) => {
    console.log(data);
    try {
        return new Promise((resovle, reject) => {
            createUserWithEmailAndPassword(auth, data.email, data.Password)
                .then((userCredential) => {
                    const user = userCredential.user;
                     // Signed up 
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resovle({ message: "Email verfication sent.", user: user });
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            reject(errorCode, errorMessage)
                        })

                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
                        reject({ message: 'Already user registered.' })
                    } else if (errorCode.localeCompare('auth/network-request-failed') === 0) {
                        reject({ message: 'please check your internet connection.' })
                    }
                });
        })

    } catch (error) {
        console.log(error);
    }

}

export const loginAPI = (data) => {
    console.log(data);
    return new Promise((resovle, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    resovle({ message: "You are successfully login ", user: user });
                } else {
                    reject({ message: "Your Email is not Verified..." });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode.localeCompare('auth/wrong-password') === 0) {
                    reject({ message: 'password is wrong.' })
                } else if (errorCode.localeCompare('auth/user-not-found') === 0) {
                    reject({ message: 'Email is not registred' })
                }
            });
    })

}


export const forgetAPI = (data) => {
    console.log(data);
    try {
        return new Promise((resovle, reject) => {
            sendPasswordResetEmail(auth, data.email)
                .then(() => {
                    resovle({message: "Password reset link sent to your email id."});
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    reject({errorMessage})
                });
        })
    } catch (error) {
        console.log(error);
    }

}