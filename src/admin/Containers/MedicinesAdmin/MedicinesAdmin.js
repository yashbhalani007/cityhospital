import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MedicinesForm from './MedicinesForm';
import { useDispatch, useSelector } from 'react-redux';
import { addMedichines, deleteMedichines, getMedichines, updateMedichines } from '../../../redux/action/medichine.action';



function MedicinesAdmin({ }) {

    const [update, setupdate] = useState(false);
    const medichine = useSelector(state => state.medicines)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMedichines())
    }, []);

    const HandleFormSubmit = (data) => {

        if (update) {
            dispatch(updateMedichines(data))
        } else {
            dispatch(addMedichines(data))
        }

        setupdate(false)
    }

    const handleDelete = (id) => {
        dispatch(deleteMedichines(id))
    }

    const handleEdit = (data) => {
        setupdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'expiry', headerName: 'ExpiryDate', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'desc', headerName: 'Description', width: 300 },

        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <Button aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteForeverIcon />
                    </Button>

                    <Button aria-label="edit" onClick={() => handleEdit(params.row)}>
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
                    <h1>Medicines</h1>
                    <div>
                        <MedicinesForm onHandleFormSubmit={HandleFormSubmit} onUpdate={update} />

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={medichine.medichines}
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
                </div>
            </section>
        </>
    );
}

export default MedicinesAdmin;