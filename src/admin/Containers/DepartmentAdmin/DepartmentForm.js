import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DepartmentForm({ onHandleFormSubmit, onUpdate }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (onUpdate) {
            handleClickOpen()
            setValues(onUpdate)
        }
    }, [onUpdate]);

    let DepartmentSchema = yup.object().shape({
        title: yup.string().required("please enter name"),
        sortdesc: yup.string().required("please enter dec"),
        longDesc: yup.string().required("please enter message").min(2).max(100)
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            sortdesc: '',
            longDesc: '',
        },

        validationSchema: DepartmentSchema,
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
        <div>
            <h1>Department</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Department</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Enter Department details.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        name='title'
                        label="title"
                        type="name"
                        value={values.title}
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.title && touched.title ? <span className='error'>*{errors.title}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name='sortdesc'
                        label="sort description"
                        type="name"
                        value={values.sortdesc}
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.sortdesc && touched.sortdesc ? <span className='error'>*{errors.sortdesc}</span> : null}
                    <TextField
                        margin="dense"
                        id="name"
                        name='longDesc'
                        label="long description"
                        type="name"
                        value={values.longDesc}
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.longDesc && touched.longDesc ? <span className='error'>*{errors.longDesc}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit' onClick={handleSubmit}>{onUpdate ? 'update' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DepartmentForm;