import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../admin/component/Layout/Layout';
import MedicinesAdmin from '../admin/Containers/MedicinesAdmin/MedicinesAdmin';
import DoctorAdmin from '../admin/Containers/DoctorAdmin/DoctorAdmin';
import AppointmentAdmin from '../admin/Containers/AppointmentAdmin/AppointmentAdmin';


function AdminRoutes(props) {
    return (
        <Layout>
        <Routes>
            <Route exact path='/medicinesAdmin' element={<MedicinesAdmin />} />
            <Route exact path='/doctorAdmin' element={<DoctorAdmin />} />
            <Route exact path='/appointmentAdmin' element={<AppointmentAdmin />} />
    
        </Routes>
        </Layout>
    );
}

export default AdminRoutes;