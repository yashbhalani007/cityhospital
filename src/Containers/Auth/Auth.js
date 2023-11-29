import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Button/InputBox/Input';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginRequest, signupRequest } from '../../redux/action/auth.action';

function Auth(props) {

    const [type, setType] = useState('Login');
    const [forget, setForget] = useState(false);
    const [formType, setFormType] = useState('signup');

    const dispatch = useDispatch()

    const handleSignup = (data) => {
        dispatch(signupRequest(data));
    }

    const handleLogin = (data) => {
        dispatch(loginRequest(data))
    }

    let authObj, initVal;

    if (type === 'Login') {
        authObj = {
            email: yup.string().email("please enter valid email").required("please enter email"),
            Password: yup.string().required()
        }
        initVal = {
            email: '',
            Password: ''
        }
    } else if (type === 'SignUp') {
        authObj = {
            name: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("please enter name"),
            email: yup.string().email("please enter valid email").required("please enter email"),
            Password: yup.string().required(),
            con_Password: yup.string().required().test('con_Password', "Password dose not match", function (val) {
                if (val === this.parent.Password) {
                    return true;
                } else {
                    return false;
                }
            })
        }
        initVal = {
            name: '',
            email: '',
            Password: '',
            con_Password: ''
        }
    } else {
        authObj = {
            name: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("please enter name"),
            email: yup.string().email("please enter valid email").required("please enter email")
        }
        initVal = {
            name: '',
            email: ''
        }
    }

    let authSchema = yup.object().shape(authObj);

    const formik = useFormik({
        initialValues: initVal,
        enableReinitialize: true,
        validationSchema: authSchema,
        onSubmit: (values, action) => {
            if (formType === "login") {
                handleLogin(values);
            } else if (formType === "signup") {
                handleSignup(values);
            }
            action.resetForm();
        }
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik


    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">

                    <div className="section-title">
                        {forget ? <h2>Reset Password</h2> :
                            type === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>}
                    </div>

                    <form onSubmit={handleSubmit} role="form" className="php-email-form">

                        <div className="row justify-content-center gap-3">
                            {
                                type === 'Login' ? '' :
                                    <div className="col-md-8 form-group">
                                        <Input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            errorText={errors.name && touched.name ? errors.name : ''}
                                        />
                                    </div>
                            }

                            <div className="col-md-8 form-group mt-3 mt-md-0">
                                <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorText={errors.email && touched.email ? errors.email : ''}
                                />

                            </div>

                            {
                                !forget ? <div className="col-md-8 form-group mt-3 mt-md-0">
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="Password"
                                        id="Password"
                                        placeholder="Password"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        value={values.Password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.Password && touched.Password ? errors.Password : ''}
                                    />

                                </div> : null
                            }

                            {
                                type === 'SignUp' ? <div className="col-md-8 form-group mt-3 mt-md-0">
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="con_Password"
                                        id="con_Password"
                                        placeholder="Conform Password"
                                        value={values.con_Password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorText={errors.con_Password && touched.con_Password ? errors.con_Password : ''}
                                    />
                                </div> : null
                            }

                        </div>
                        {
                            forget ? <div className="text-center "><Button btwType='Secondary' type="submit">Submit</Button></div> :
                                type === 'Login' ?
                                    <div className="text-center"><Button type="submit">Login</Button></div>
                                    :
                                    <div className="text-center"><Button btwType='Outline' type="submit">Signup</Button></div>
                        }

                    </form>



                    <div className='row text-center mt-3'>
                        {
                            type === 'Login' ?
                                <>
                                    <span>Already have an Account? <a href="#" onClick={() => { setType('SignUp'); setForget(false) }}>SignUp</a></span>
                                    <br />
                                    <a href="#" onClick={() => { setType('forget'); setForget(true) }}>forgot password?</a>
                                </> :
                                <span>Create a New Account?  <a href="#" onClick={() => { setType('Login'); setForget(false) }}>Login</a></span>

                        }
                    </div>
                </div>

            </section>
        </main >
    );
}

export default Auth;