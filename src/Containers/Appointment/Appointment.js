import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';


function Appointment(props) {

    let d = new Date();

    let nd = new Date();
    nd.setDate(d.getDate() - 1);
    console.log(nd);


    let AppoimentSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.string().required("please enter phone number").matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please enter valid format of number"),
        date: yup.date().required("please enter date").min(nd, "Please choose future date"),
        department: yup.string().required("please enter department"),
        // .oneOf(["Department 1","Department 2","Department 3"],"please enter atleast one department"),
        message: yup.string().required("please enter message")
            .matches(/^\S+(?: \S+)*$/, "extra space are not allowed")
            .test("message", "only five word allowed", function (val) {
                let arr = val.split(" ");

                if (arr.length >= 5) {
                    return true
                } else {
                    return false
                }
            }),

        precption: yup.mixed().required("please enter file")
            .test("type", "We only support jpeg and jpg format", function (value) {
                if (value == 'undefined' || value){
                    return value && (value.type === "image/jpg" || value.type === "image/jpeg");
            }
            else{
            return true
        }
    })

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
        console.log(arr);
        let nArr = arr.map((v) => {
            return v[0].toUpperCase() + v.substring(1)
        })
        console.log(nArr.join(" "));
    },
});

const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik


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
                                value={values.precption}
                                onChange={handleChange}
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
            </div>
        </section>
    </main>

);
}

export default Appointment;