// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const categoryOptions = ['Electronics', 'Clothing', 'Books'];

// const validationSchema = Yup.object().shape({
//     productName: Yup.string().required('Product Name is required'),
//     category: Yup.string().required('Category is required'),
//     price: Yup.number()
//         .required('Price is required')
//         .positive('Price must be positive'),
//     discount: Yup.number().positive('Discount must be positive'),
//     productImage: Yup.mixed().required('Product Image is required'),
// });

// function Appointment() {
//     const [step, setStep] = useState(1);


//     const initialValues = {
//         productName: '',
//         category: '',
//         description: '',
//         price: '',
//         discount: '',
//         productImage: null,
//     };

//     const handleNextStep = () => {
//         if (step < 3) {
//             setStep(step + 1);
//         }
//         console.log(step);
//     };

//     const handlePreviousStep = () => {
//         setStep(step - 1);
//         console.log(step);
//     };

//     console.log(step);
//     return (
//         <div>
//             <h1>Product Submission Form - Step {step}</h1>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, actions) => {

//                     // Simulate API call here (e.g., using setTimeout)
//                     setTimeout(() => {
//                         alert('Form submitted successfully');
//                         actions.setSubmitting(false);
//                         console.log(values);
//                     }, 1000);
//                 }}
//             >
//                 {({ isSubmitting, values, errors, touched, setFieldValue }) => (
//                     <Form>
//                         <div>
//                             {step === 1 && (
//                                 <div>
//                                     <label htmlFor="productName">Product Name</label>
//                                     <Field type="text" name="productName" />
//                                     <ErrorMessage name="productName" component="div" />
//                                     <label htmlFor="category">Category</label>
//                                     <Field as="select" name="category">
//                                         <option value="" label="Select a category" />
//                                         {categoryOptions.map((option) => (
//                                             <option key={option} value={option}>
//                                                 {option}
//                                             </option>
//                                         ))}
//                                     </Field>
//                                     <ErrorMessage name="category" component="div" />
//                                 </div>
//                             )}

//                             {step === 2 && (
//                                 <div>
//                                     <label htmlFor="price">Price</label>
//                                     <Field type="number" name="price" />
//                                     <ErrorMessage name="price" component="div" />
//                                     <label htmlFor="discount">Discount (optional)</label>
//                                     <Field type="number" name="discount" />
//                                     <ErrorMessage name="discount" component="div" />
//                                 </div>
//                             )}

//                             {step === 3 && (
//                                 <div>
//                                     <label htmlFor="productImage">Product Image</label>
//                                     <input
//                                         type="file"
//                                         name="productImage"
//                                         accept="image/*"
//                                         onChange={(event) => {
//                                             setFieldValue('productImage', event.currentTarget.files[0]);
//                                         }}
//                                     />
//                                     <ErrorMessage name="productImage" component="div" />
//                                 </div>
//                             )}

//                             <div>
//                                 {step > 1 && (
//                                     <button type="button" onClick={handlePreviousStep}>
//                                         Previous
//                                     </button>
//                                 )}
//                                 {step < 3 && (
//                                     <button
//                                         type="button"
//                                         onClick={handleNextStep}
//                                         disabled={
//                                             (step === 1 &&
//                                                 (!values.productName || !values.category)) ||
//                                             (step === 2 && (!values.price || !values.discount))
//                                         }
//                                     >
//                                         Next
//                                     </button>
//                                 )}
//                                 {step === 3 && (
//                                     <button type="submit" disabled={isSubmitting}>
//                                         Submit
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// }

// export default Appointment;



import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ListIcon from '@mui/icons-material/List';
import { useDispatch, useSelector } from 'react-redux';
import { AddAptData } from '../../redux/slice/appointment.slice';
import { PrimaryBtw } from '../../components/UI/Button/button.style';


function Appointment(props) {

    const dispatch = useDispatch()

    const apt = useSelector(state => state.apt)

    console.log(apt);

    let d = new Date();

    let nd = new Date();
    nd.setDate(d.getDate() - 1);

    const [value, setValue] = React.useState('one');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    const handleDelete = (id) => {
        console.log(id);
    }

    const handleEdit = (v) => {
        console.log(v);
    }


    let AppoimentSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.string().required("please enter phone number").matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please enter valid format of number"),
        date: yup.date().required("please enter date").min(nd, "Please choose future date"),
        department: yup.string().required("please enter department"),
        // .oneOf(["Department 1","Department 2","Department 3"],"please enter atleast one department"),
        message: yup.string().required("please enter message"),

        precption: yup.mixed().required("please enter file")

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            precption: ''
        },

        validationSchema: AppoimentSchema,
        onSubmit: values => {
            let arr = values.message.split(" ");
            let nArr = arr.map((v) => {
                return v[0].toUpperCase() + v.substring(1)
            })
            console.log(nArr.join(" "));

            dispatch(AddAptData(values))
            setValue(1)
        },
    });



    const { handleBlur, handleChange, handleSubmit, setFieldValue, values, errors, touched } = formik


    return (

        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>

                    <Tabs value={value} onChange={handleChangeTab} aria-label="icon label tabs example">
                        <Tab icon={<AppShortcutIcon />} label="Book Appointment " />
                        <Tab icon={<ListIcon />} label="List Appointment" />
                    </Tabs>

                    {value === 0 &&
                        <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? <span className='error'>*{errors.name}</span> : null}

                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? <span className='error'>*{errors.email}</span> : null}

                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        placeholder="Your Phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.phone && touched.phone ? <span className='error'>*{errors.phone}</span> : null}

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        value={values.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.date && touched.date ? <span className='error'>*{errors.date}</span> : null}

                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select
                                        name="department"
                                        id="department"
                                        className="form-select"
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="0">Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    {errors.department && touched.department ? <span className='error'>*{errors.department}</span> : null}

                                </div>

                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        name='precption'
                                        type='file'
                                        className="form-select"
                                        onChange={(event) => setFieldValue("precption", event.target.files[0])}
                                        onBlur={handleBlur}
                                    />

                                    {errors.precption && touched.precption ? <span className='error'>*{errors.precption}</span> : null}
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.message && touched.message ? <span className='error'>*{errors.message}</span> : null}

                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>
                    }

                    {
                        value === 1 &&

                        <>
                            <h2>Appointment List</h2>
                            <div className='row'>
                                {
                                    apt.apt.map((v) => {
                                        return (
                                            <>
                                                <div className='col-md-3'>
                                                    <img src={v.precption} />
                                                </div>
                                                <div className='col-md-3'>
                                                    <p>{v.name}</p>
                                                </div>
                                                <div className='col-md-3'>
                                                    <p>{v.date}</p>
                                                </div>
                                                <div className='col-md-3'>
                                                    <PrimaryBtw onClick={() => handleDelete(v.id)}>delete</PrimaryBtw>
                                                    <PrimaryBtw onClick={() => handleEdit(v)}>edit</PrimaryBtw>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </>
                    }

                </div>
            </section>
        </main>

    );
}

export default Appointment;