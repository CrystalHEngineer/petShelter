import React from 'react';
import {Link} from 'react-router-dom';



function Home() {
    return (
        <div className="welcome">
            <div className="welcome-hs">
                
                <h1 className="welcomeHeader">Welcome to A Pawfect Life</h1>
                <h2 className="welcomeDescription">Our mission is to provide animals with the best care until they are adopted by their forever family.</h2>
                <div className="buttonContainer">
                    <Link to={`/pet`}>
                        <button className="dashboardButton">Dashboard</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;