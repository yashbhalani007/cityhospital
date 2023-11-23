import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoForm from './TodoForm';
import { Checkbox, FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';


function Todo(props) {
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);

    const getMedicines = () => {
        let localData = JSON.parse(localStorage.getItem("todo"));

        if (localData) {
            setData(localData)
        }
    }

    useEffect(() => {
        getMedicines();
    }, []);

    const addMedicines = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("todo"));

        let id = Math.floor(Math.random() * 1000);

        if (localData) {
            localData.push({ ...data, id })
            localStorage.setItem("todo", JSON.stringify(localData));
        } else {
            localStorage.setItem("todo", JSON.stringify([{ ...data, id }]));
        }
    }

    const updateMedicines = (data) => {
        let localData = JSON.parse(localStorage.getItem("todo"));

        let uData = localData.map((v) => {
            if (v.id === data.id) {
                return data;
            } else {
                return v;
            }
        });

        localStorage.setItem("todo", JSON.stringify(uData));

        setData(uData);
    }

    const handleFormSubmit = (data) => {
        if (update) {
            updateMedicines(data)
        } else {
            addMedicines(data);
        }

        setUpdate(false);
        getMedicines();
    }

    const handleEdit = (data) => {
        setUpdate(data);
    }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("todo"));

        let dData = localData.filter((v) => v.id !== id);

        localStorage.setItem("todo", JSON.stringify(dData));

        setData(dData);
    }

    const handleToggle = (id, status) => {
        console.log(id);
        let localData = JSON.parse(localStorage.getItem("todo"));

        let tData = localData.map((v) => {
            if (v.id === id) {
                return { ...v, status: !status }
            } else {
                return v;
            }
        });

        localStorage.setItem("todo", JSON.stringify(tData));

        setData(tData);
    }

    console.log(data);

    const columns = [
        { field: 'title', headerName: 'Title', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            renderCell: (params) => {
                console.log(params.row.status);
                return (
                    <Switch
                        id="status"
                        name='status'
                        checked={params.row.status}
                        onChange={() => handleToggle(params.row.id, params.row.status)}
                    />
                )
            }
        },
        {
            field: 'action', headerName: 'Action', width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    return (
        <>
            <div className='container'>
                <TodoForm onHandleSubmit={handleFormSubmit} updateData={update} />

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            </div>

        </>
    );
}

export default Todo;