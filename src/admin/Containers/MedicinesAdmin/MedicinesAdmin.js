import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MedicinesForm from './MedicinesForm';


function MedicinesAdmin({ }) {

    const [mData, setmData] = useState([]);
    const [update, setupdate] = useState(false);

    useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem("medicines"));

        if (localdata) {
            setmData(localdata)
        }
    }, []);

    const HandleFormSubmit = (data) => {

        let id = Math.floor(Math.random() * 1000);

        let localdata = JSON.parse(localStorage.getItem("medicines"));

        if (localdata) {
            if (update) {
                let index = localdata.findIndex((v) => v.id === data.id)

                localdata[index] = data;

                localStorage.setItem("medicines", JSON.stringify(localdata))

                setmData(localdata)

                setupdate(false)

            } else {
                localdata.push({ id, ...data })
                localStorage.setItem("medicines", JSON.stringify(localdata))
                setmData(localdata)
            }

        } else {
            localStorage.setItem("medicines", JSON.stringify([{ id, ...data }]))
            setmData([{ id, ...data }])
        }

    }

    const handleDelete = (id) => {
        let localdata = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localdata.filter((v) => v.id !== id)

        localStorage.setItem("medicines", JSON.stringify(fdata))

        setmData(fdata)
    }

    const handleupdate = (data) => {
        setupdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'date', headerName: 'ExpiryDate', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },

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
                    <h1>Medicines</h1>
                    <div>
                        <MedicinesForm onHandleFormSubmit={HandleFormSubmit} onUpdate={update} />

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={mData}
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