import React from 'react';
import { useParams } from 'react-router-dom';

function Dept(props) {

    const {id} = useParams()

    return (
        <div className="container">
            <h2>Department: {id}</h2>
        </div>
    );
}

export default Dept;