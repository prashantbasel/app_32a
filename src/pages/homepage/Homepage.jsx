import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";

const HomePage = () => {
    // print hello! when page load
    useEffect(() => {
        console.log("hello!!")
    },[])
    // trigger testapi 
    testApi().then((res) => {
        console.log(res) // testapi is working 
    })

    return (
        <div>
            homepage
        </div>
    )
}

export default HomePage;
