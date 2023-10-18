import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { addDepartment, deleteDepartment, getDepartment, updateDepartment } from '../../../redux/action/department.action';
import { Button } from '@mui/material';
import DepartmentForm from './DepartmentForm';


function DepartmentAdmin(props) {

    const [update, setupdate] = useState(false);
    const department = useSelector(state => state.department)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDepartment())
    }, []);

    const HandleFormSubmit = (data) => {

        if (update) {
            dispatch(updateDepartment(data))
        } else {
            dispatch(addDepartment(data))
        }

        setupdate(false)
    }

    
    const handleDelete = (id) => {
        dispatch(deleteDepartment(id))
    }

    const handleEdit = (data) => {
        setupdate(data)
    }

    const columns = [
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'sortdesc', headerName: 'Sortdesc', width: 130 },
        { field: 'longDesc', headerName: 'LongDesc', width: 130 },

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
                    <h1>Department</h1>
                    <div>
                        <DepartmentForm onHandleFormSubmit={HandleFormSubmit} onUpdate={update} />

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={department.department}
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

export default DepartmentAdmin;