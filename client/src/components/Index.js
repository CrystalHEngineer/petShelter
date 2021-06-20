import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Index = (props) => {
    return (
        <div>
            <h1 classname="welcomeheader">Welcome to A Pawfect Life</h1>
            <h2 classname="welcomedescription">Our mission is to provide animals with the best care until they are adopted by their forever family.</h2>
            <Link to={`/pet`} classname="dashboard" className="dashboardbutton">Dashboard</Link>
        </div>
    )
}
