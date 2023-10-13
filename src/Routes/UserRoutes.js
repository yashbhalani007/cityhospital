import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home/Home";
import Department from "../Containers/Department/Department";
import Doctors from "../Containers/Doctors/Doctors";
import Contact from "../Containers/Contact/Contact";
import About from "../Containers/About/About";
import Appointment from "../Containers/Appointment/Appointment";
import Auth from "../Containers/Auth/Auth";
import PrivateRoutes from "./PrivateRoutes";
import Dept from "../Containers/Department/Dept";
import ReviewData from "../Containers/Home/ReviewData";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Medicines from "../Containers/Medicines/Medicines";
import MedicineData from "../Containers/Medicines/MedicineData";
import MedicinesAdmin from "../admin/Containers/MedicinesAdmin/MedicinesAdmin";
import { useState } from "react";
import Counter from "../Containers/Counter/Counter";

function UserRoutes(props) {

    const [cartValue,setCartValue] = useState(0)
    const [favValue,setfavvalue] = useState([])

    return (
        <>
            <Header cartValue={cartValue} fav={favValue}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Review_Details/:id" element={<ReviewData />} />

                <Route path="/Department" element={<Department />} />
                <Route path="/Department/:id" element={<Dept />} />

                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/About" element={<About />} />
                <Route path="/Medicines" element={<Medicines CartIncDec={setCartValue} setfavvalue={setfavvalue} fav={favValue}/>} />
                <Route path="/Medicine_Details/:id" element={<MedicineData />} />


                <Route path="/Contact" element={<Contact />} />
                <Route path="/counter" element={<Counter />} />

                <Route element={<PrivateRoutes />}>
                    <Route path="/Appointment" element={<Appointment />} />
                </Route>

                <Route path="/Auth" element={<Auth />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;