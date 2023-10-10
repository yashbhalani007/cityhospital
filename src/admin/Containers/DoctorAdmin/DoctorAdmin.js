import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


function DoctorAdmin(props) {

    const [open, setOpen] = React.useState(false);
    const [docData, setdocData] = useState([])
    const [update, setupdate] = useState(false)

    let DoctorSchema = yup.object().shape({
        name: yup.string().required("please enter name").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        description: yup.string().required("please enter message")
                    .test("description","min 20 word allowed",function(value) {
                        let arr = value.split(" ")
                        if(arr.length <= 20) {
                            return true
                        }else{
                            return false
                        }
                    })
        ,
        designation: yup.string().required("please enter designation"),
        fbProfile: yup.string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!'
            )
            .required('Please enter website'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            designation: '',
            fbProfile: '',
        },

        validationSchema: DoctorSchema,
        onSubmit: (values, action) => {
            console.log(values);
            if (update) {
                handleUpdateData(values)
            } else {
                HandleAddData(values)
            }

            action.resetForm()
            handleClose()
        },
    });

    useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem("doctors"));

        if (localdata) {
            setdocData(localdata)
        }

    }, []);

    const HandleAddData = (data) => {

        let id = Math.floor(Math.random() * 1000);

        let localdata = JSON.parse(localStorage.getItem("doctors"));

        if (localdata) {

            localdata.push({ id, ...data })
            localStorage.setItem("doctors", JSON.stringify(localdata))
            setdocData(localdata)

        } else {
            localStorage.setItem("doctors", JSON.stringify([{ id, ...data }]))
            setdocData([{ id, ...data }])
        }
    }

    const handleDelete = (id) => {
        let localdata = JSON.parse(localStorage.getItem("doctors"));

        let fdata = localdata.filter((v) => v.id !== id)

        localStorage.setItem("doctors", JSON.stringify(fdata))

        setdocData(fdata)
    }

    const handleUpdateData = (data) => {
        console.log(data);
        let localdata = JSON.parse(localStorage.getItem("doctors"));

        let index = localdata.findIndex((v) => v.id === data.id)

        console.log(index);

        localdata[index] = data;

        localStorage.setItem("doctors", JSON.stringify(localdata))

        setdocData(localdata)

        setupdate(false)

    }

    const handleupdate = (data) => {
        handleClickOpen()

        setValues(data)

        setupdate(true)

    }

    const { handleBlur, handleChange, handleSubmit, values, errors, touched, setValues } = formik

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'designation', headerName: 'Designation', width: 150 },
        { field: 'fbProfile', headerName: 'FbProfile', width: 200 },

        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <Button aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteForeverIcon />
                    </Button>

                    <Button aria-label="edit" onClick={() => handleupdate(params.row)}>
                        <EditIcon />
                    </Button>
                </>
            ),
        },
    ];

    return (
        <>
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <h1>Doctors</h1>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Open form dialog
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Doctors</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To Enter Doctors details.
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="name"
                                name='name'
                                label="Name"
                                type="name"
                                fullWidth
                                variant="standard"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? <span className='error'>*{errors.name}</span> : null}
                            <TextField
                                margin="dense"
                                id="name"
                                name='description'
                                label="description"
                                type="name"
                                fullWidth
                                variant="standard"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.description && touched.description ? <span className='error'>*{errors.description}</span> : null}
                            <TextField
                                margin="dense"
                                id="name"
                                name='designation'
                                type="name"
                                fullWidth
                                variant="standard"
                                value={values.designation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.designation && touched.designation ? <span className='error'>*{errors.designation}</span> : null}
                            <TextField
                                margin="dense"
                                id="name"
                                name='fbProfile'
                                label="fbProfile"
                                type="name"
                                fullWidth
                                variant="standard"
                                value={values.fbProfile}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.fbProfile && touched.fbProfile ? <span className='error'>*{errors.fbProfile}</span> : null}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' onClick={handleSubmit}>Add</Button>
                        </DialogActions>
                    </Dialog>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={docData}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </section >
        </>
    );
}

export default DoctorAdmin;