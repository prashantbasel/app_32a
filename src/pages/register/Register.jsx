
import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUserApi } from "../../apis/Api";
const Register = () => {    
    // logic section 

    // make a usestate for 5 feilds
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    // use state for error message 
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passworError, setPasswordError] = useState('')
    const [cPasswordError, setCPasswordError] = useState('')



    // making a Function to onChange
    const handleFirstname = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastname = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleCPassword = (e) => {
        setCPassword(e.target.value);
    }

    // validation 
    var validate = () => {
        var isValid = true;
        //validate the firstname
        if (firstName.trim() === '') {
            setFirstNameError("Firstname is Required! ")
            isValid = false
        }
        if (lastName.trim() === '') {
            setLastNameError("Lastname is Required! ")
            isValid = false
        }
        if (email.trim() === '') {
            setEmailError("email is Required! ")
            isValid = false
        }

        if (password.trim() === '') {
            setPasswordError("Password is Required! ")
            isValid = false
        }
        if (cPassword.trim() === '') {
            setCPasswordError("CPasswprd is Required! ")
            isValid = false
        }

        if (password.trim() !== password.trim()) {
            setPasswordError("Password and Cpassword doesnt match")
            isValid = false;
        }

        if (cPassword.trim() !== cPassword.trim()) {
            setCPasswordError("Password and Cpassword doesnt match")
            isValid = false;
        }

        return isValid;


    }


    // Submit bittom function 

    const handleSubmit = (e) => {
        e.preventDefault()

        //validate
        var isValidated = validate();
        if (!isValidated) {
            return
        }


        // sending requesst to the api 

        // making json object 
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }

        registerUserApi(data).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message)

            }
            else {
                toast.success(res.data.message)
            }

        })

    }

    const handleSubmit2 = (e) => {
        e.preventDefault()


        //validate
        var isValidated = validate();
        if (!isValidated) {
            return
        }

        console.log("hello!!")



        // sending requesst to the api 

        // making json object 
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }

        registerUserApi(data).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message)

            }
            else {
                toast.success(res.data.message)
            }

        })
    }


    return (
        <>
            <div className='container mt-2'>
                <h1>Create an account</h1>

                <form className='w-50'>

                    <label>Firstname : {firstName}</label>
                    <input onChange={handleFirstname} type="text" className="form-control" placeholder="Enter your firstname" />

                    {
                        firstNameError && <p className='text-danger'>{firstNameError}</p>
                    }



                    <label className="mt-2">Lastname:{lastName}</label>
                    <input onChange={handleLastname} type="text" className="form-control" placeholder="Enter your lastname" />
                    {
                        lastNameError && <p className='text-danger'>{lastNameError}</p>
                    }

                    <label className="mt-2">Email:{email}</label>
                    <input onChange={handleEmail} type="text" className="form-control" placeholder="Enter your Email" />

                    {
                        emailError && <p className='text-danger'>{emailError}</p>
                    }

                    <label className="mt-2">Password:{password}</label>
                    <input onChange={handlePassword} type="text" className="form-control" placeholder="Enter your Password" />
                    {
                        passworError && <p className='text-danger'>{passworError}</p>
                    }

                    <label className="mt-2">CPassword:{cPassword}</label>
                    <input onChange={handleCPassword} type="text" className="form-control" placeholder="Enter your CPassword" />

                    {
                        cPasswordError && <p className='text-danger'>{cPasswordError}</p>
                    }

                    <button onClick={handleSubmit2} className="btn btn-dark mt-4 w-50">Create an account</button>
                </form>
            </div>


        </>
    )
}

export default Register;
// step q 1 : make a complete ui
// 2 input type make a state
//3 on change set the value to the stste

