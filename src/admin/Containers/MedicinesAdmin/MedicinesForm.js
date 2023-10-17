import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button } from '@mui/material';

function MedicinesForm({ onHandleFormSubmit, onUpdate }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (onUpdate) {
            handleClickOpen()
            setValues(onUpdate)
        }
    }, [onUpdate])

    let d = new Date();
    let nd = new Date();
    nd.setDate(d.getDate() - 1);

    let MedicineSchema = yup.object().shape({
        name: yup.string().required("please enter name"),
        price: yup.number().required("please enter Price"),
        expiry: yup.date().required("please enter date").min(nd, "Please choose future date"),
        desc: yup.string().required("please enter message").min(2).max(100)
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            expiry: '',
            desc: '',
        },

        validationSchema: MedicineSchema,
        onSubmit: (values, action) => {
            console.log(values);
            onHandleFormSubmit(values)

            action.resetForm()
            handleClose()
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched, setValues } = formik

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicines</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Enter medicines details.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        name='name'
                        id="name"
                        label="Name"
                        type="name"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br></br>
                    {errors.name && touched.name ? <span className='error'>*{errors.name}</span> : null}
                    <TextField
                        margin="dense"
                        name='price'
                        id="name"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.price && touched.price ? <span className='error'>*{errors.price}</span> : null}
                    <TextField
                        margin="dense"
                        name='expiry'
                        id="name"
                        type="date"
                        fullWidth
                        variant="standard"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.expiry && touched.expiry ? <span className='error'>*{errors.expiry}</span> : null}
                    <TextField
                        margin="dense"
                        name='desc'
                        id="name"
                        label="description"
                        type="name"
                        fullWidth
                        variant="standard"
                        value={values.desc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.desc && touched.desc ? <span className='error'>*{errors.desc}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit' onClick={handleSubmit}>{onUpdate ? 'update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MedicinesForm;