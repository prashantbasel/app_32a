// import React, { useEffect } from "react";
// import { testApi } from "../../apis/Api";

// const HomePage = () => {
//     // print hello! when page load
//     useEffect(() => {
//         console.log("hello!!")
//     },[])
//     // trigger testapi 
//     testApi().then((res) => {
//         console.log(res) // testapi is working 
//     })

//     return (
//         <div>
//             homepage
//         </div>
//     )
// }

// export default HomePage;

import React, { useEffect } from 'react';
import { testApi } from '../../apis/Api';
import './Homepage.css'; // Import the CSS file for styling

const HomePage = () => {
    useEffect(() => {
        console.log('hello!!');
        testApi().then((res) => {
            console.log(res); // Log the response from testApi
        });
    }, []);

    return (
        <div className="homepage-container">
            <h1>Book Your Ride's Care: Just a Few Clicks Away!</h1>
            <p>Riding Smooth: Let Our Experts Guide You to Optimal Motorcycle Maintenance for Peak Performance.</p>
            <img src="/assets/images/scooter.png" alt="Scooter" />
            <div className="buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
};

export default HomePage;



