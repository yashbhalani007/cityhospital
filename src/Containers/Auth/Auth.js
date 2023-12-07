// import React, { useState } from 'react';
// import Button from '../../components/UI/Button/Button';
// import Input from '../../components/UI/Button/InputBox/Input';
// import * as yup from 'yup';
// import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { forgotRequest, loginRequest, signupRequest } from '../../redux/action/auth.action';

// function Auth(props) {

//     const [type, setType] = useState('Login');


//     const dispatch = useDispatch()

//     const handleSignup = (data) => {
//         dispatch(signupRequest(data));
//     }

//     const handleLogin = (data) => {
//         console.log(data);
//         dispatch(loginRequest(data))
//     }

//     const handleForgot = (data) => {
//         console.log(data);
//         dispatch(forgotRequest(data))
//     }

//     let authObj, initVal;

//     if (type === 'Login') {
//         authObj = {
//             email: yup.string().email("please enter valid email").required("please enter email"),
//             Password: yup.string().required()
//         }
//         initVal = {
//             email: '',
//             Password: ''
//         }
//     } else if (type === 'SignUp') {
//         authObj = {
//             name: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("please enter name"),
//             email: yup.string().email("please enter valid email").required("please enter email"),
//             Password: yup.string().required(),
//             con_Password: yup.string().required().test('con_Password', "Password dose not match", function (val) {
//                 if (val === this.parent.Password) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             })
//         }
//         initVal = {
//             name: '',
//             email: '',
//             Password: '',
//             con_Password: ''
//         }
//     } else if (type === 'forget'){
//         authObj = {
//             email: yup.string().email("please enter valid email").required("please enter email")
//         }
//         initVal = {
//             email: ''
//         }
//     }

//     let authSchema = yup.object().shape(authObj);

//     const formik = useFormik({
//         initialValues: initVal,
//         enableReinitialize: true,
//         validationSchema: authSchema,
//         onSubmit: (values, action) => {
//             if (type === "Login") {
//                 handleLogin(values);
//             } else if (type === "signup") {
//                 handleSignup(values);
//             } else if (type === 'forget') {
//                 handleForgot(values)
//                 console.log(values);
//             }
//             action.resetForm();
//         }
//     });

//     const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik


//     return (
//         <main>
//             <section id="appointment" className="appointment">
//                 <div className="container">

//                     <div className="section-title">
//                         {type === 'forget' ? <h2>Reset Password</h2> :
//                             type === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>}
//                     </div>

//                     <form onSubmit={handleSubmit} role="form" className="php-email-form">

//                         <div className="row justify-content-center gap-3">
//                             {
//                                 type === 'Login' || 'forget' ? '' :
//                                     <div className="col-md-8 form-group">
//                                         <Input
//                                             type="text"
//                                             name="name"
//                                             className="form-control"
//                                             id="name"
//                                             placeholder="Your Name"
//                                             data-rule="minlen:4"
//                                             data-msg="Please enter at least 4 chars"
//                                             value={values.name}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             errorText={errors.name && touched.name ? errors.name : ''}
//                                         />
//                                     </div>
//                             }

//                             <div className="col-md-8 form-group mt-3 mt-md-0">
//                                 <Input
//                                     type="email"
//                                     className="form-control"
//                                     name="email"
//                                     id="email"
//                                     placeholder="Your Email"
//                                     data-rule="email"
//                                     data-msg="Please enter a valid email"
//                                     value={values.email}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     errorText={errors.email && touched.email ? errors.email : ''}
//                                 />

//                             </div>

//                             {
//                                 !forget ? <div className="col-md-8 form-group mt-3 mt-md-0">
//                                     <Input
//                                         type="password"
//                                         className="form-control"
//                                         name="Password"
//                                         id="Password"
//                                         placeholder="Password"
//                                         data-rule="minlen:4"
//                                         data-msg="Please enter at least 4 chars"
//                                         value={values.Password}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         errorText={errors.Password && touched.Password ? errors.Password : ''}
//                                     />

//                                 </div> : null
//                             }

//                             {
//                                 type === 'SignUp' ? <div className="col-md-8 form-group mt-3 mt-md-0">
//                                     <Input
//                                         type="password"
//                                         className="form-control"
//                                         name="con_Password"
//                                         id="con_Password"
//                                         placeholder="Conform Password"
//                                         value={values.con_Password}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         errorText={errors.con_Password && touched.con_Password ? errors.con_Password : ''}
//                                     />
//                                 </div> : null
//                             }

//                         </div>
//                         {
//                             forget ? <div className="text-center "><Button btwType='Secondary' type="submit">Submit</Button></div> :
//                                 type === 'Login' ?
//                                     <div className="text-center"><Button type="submit">Login</Button></div>
//                                     :
//                                     <div className="text-center"><Button btwType='Outline' type="submit">Signup</Button></div>
//                         }

//                     </form>



//                     <div className='row text-center mt-3'>
//                         {
//                             type === 'Login' ?
//                                 <>
//                                     <span>Already have an Account? <a href="#" onClick={() => { setType('SignUp'); setForget(false) }}>SignUp</a></span>
//                                     <br />
//                                     <a href="#" onClick={() => { setType('forget'); setForget(true) }}>forgot password?</a>
//                                 </> :
//                                 <span>Create a New Account?  <a href="#" onClick={() => { setType('Login'); setForget(false) }}>Login</a></span>

//                         }
//                     </div>
//                 </div>

//             </section>
//         </main >
//     );
// }

// export default Auth;



import React, { useState } from 'react';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { forgotRequest, loginRequest, signupRequest } from '../../redux/action/auth.action';
import { CircularProgress } from '@mui/material';


function Auth(props) {
    const dispatch = useDispatch()


    const [authtype, setauthtype] = useState('login');

    let naigate = useNavigate()

    let authobj = {}; let authval = {}

    if (authtype === 'login') {
        authobj = {
            email: yup.string().email('Please enter valid email').required('Please enter your email'),
            password: yup.string().required("Please enter your password")
                .matches(
                    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                ),
        }

        authval = {
            email: '',
            password: '',
        }
    } else if (authtype === 'signup') {
        authobj = {
            name: yup.string()
                .min(2)
                .max(40)
                .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                .test("Fullname", "Enter valid name", function (value) {
                    let arr = value.split(" ");

                    if (arr.length > 3) {
                        return false
                    } else if (arr.length > 3) {
                        return false
                    } else {
                        return true
                    }
                })
                .required(),
            email: yup.string().email('Please enter valid email').required('Please enter your email'),
            password: yup.string().required("Please enter your password")
                .matches(
                    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                ),
        }
        authval = {
            name: '',
            email: '',
            password: '',
        }
    } else {
        authobj = {
            email: yup.string().email('Please enter valid email').required('Please enter your email'),
        }
        authval = {
            email: '',
        }
    }

    const handlelogin = (values) => {

        console.log(values);

        dispatch(loginRequest({
            data: values,
            callback: (root) => {
                naigate(root)
            }
        }))
    };

    const handlerigister = (values) => {
        console.log(values);

        dispatch(signupRequest(values));

    }

    const handleforget = (values) => {
        console.log(values);
        dispatch(forgotRequest(values))

    }


    let authSchema = yup.object(authobj);

    const formik = useFormik({
        initialValues: authval,
        validationSchema: authSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            if (authtype === 'login') {
                handlelogin(values)
            } else if (authtype === 'signup') {
                handlerigister(values)
            } else if (authtype === 'forget') {
                handleforget(values)
            }
            action.resetForm()
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;


    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        authtype === 'login' ? <h2>Login</h2>
                            : authtype === 'signup' ? <h2>Signup</h2> : <h2>Reset Password</h2>
                    }
                </div>
                        <>
                            <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                                <div className="row justify-content-center ">
                                    {
                                        authtype === 'login' || authtype === 'forget' ? null :

                                            <div className="col-md-7 form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={values.name}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Your Name"
                                                    errorText={errors.name && touched.name ? errors.name : ''}
                                                />
                                                <div className="validate" />
                                                {/* <span className='error'>{errors.name && touched.name ? errors.name : ''}</span> */}
                                            </div>
                                    }
                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            name="email" id="email"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            errorText={errors.email && touched.email ? errors.email : ''}
                                        />
                                        <div className="validate" />
                                        {/* <span className='error'>{errors.email && touched.email ? errors.email : ''}</span> */}
                                    </div>
                                    {
                                        authtype !== 'forget' ? <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={values.password}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Your Password"
                                                errorText={errors.password && touched.password ? errors.password : ''}
                                            />
                                            <div className="validate" />
                                            {/* <span className='error'>{errors.password && touched.password ? errors.password : ''}</span> */}
                                        </div> : null
                                    }
                                    <div className="text-center m-2">
                                        {
                                            authtype === 'login' ? <a href='#' onClick={(() => setauthtype('forget'))}>Forgot password?</a>
                                                : null
                                        }
                                    </div>
                                </div>
                                {
                                    authtype === 'login' ? <div className="text-center"><button type="primary" >Login</button></div>
                                        : authtype === 'signup' ? <div className="text-center"><button type="secondary" >Signup</button></div>
                                            : <div className="text-center"><button type="outlined">Submit</button></div>
                                }
                                <div className="text-center m-2">
                                    {
                                        authtype === 'login' ? <span>Don't have an account <a href='#' onClick={() => setauthtype('signup')}>Signup</a></span>
                                            : <span>Already have an account <a href='#' onClick={() => setauthtype('login')}>Login</a></span>
                                    }
                                </div>
                            </form>
                        </>
            

            </div>
        </section>

    );
}

export default Auth;