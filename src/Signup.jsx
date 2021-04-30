import React, { useState } from 'react';
import axios from 'axios';
import base_url from './api/bootApi';
import { toast } from 'react-toastify';
import {NavLink} from 'react-router-dom';

const Signup = () => {

    const [person, setPerson] = useState({});

    // form handler function
    const signup = (e) => {

        e.preventDefault();

        console.log(person);
        postData(person);
    }

    // for posting data to server
    const postData = (data) => {
        
        if(data==null)
        return;
        
        axios.post(`${base_url}/person`, data).then(
            (response) => {
                console.log(response);
                console.log("Success");
                toast.success("Signup Successful !")
            }, (error) => {
                console.log(error);
                console.log("error");
                toast.error("Signup failed ! something went wrong ")
            }
        );
    }
    

 
    return (
        <>

            <div className="card text-center col-md-6 mt-2">

                <h1>Sign up here</h1>

                <form onSubmit={signup}>

                    <div className="form-group mt-1">
                        <input type="text" name="personName" className="elementSize" onChange={(e) => { setPerson({ ...person, personName: e.target.value }) }} placeholder="enter your fullname " />
                    </div>
                    <div className="form-group mt-2">
                        <input type="email" name="personEmail" className="elementSize" onChange={(e) => { setPerson({ ...person, personEmail: e.target.value }) }} placeholder="enter email" />
                    </div>
                    <div className="form-group mt-2">
                        <input type="password" name="password" className="elementSize" onChange={(e) => { setPerson({ ...person, password: e.target.value }) }} placeholder="enter password" />
                    </div>
                    <div className="form-group mt-2">
                        <input type="password" name="confirmPassword" className="elementSize" placeholder="type same password" />
                    </div>
                    <div className="form-group mt-2">
                        <input type="number" name="personMobile" className="elementSize" onChange={(e) => { setPerson({ ...person, personMobile: e.target.value }) }} placeholder="enter mobile number" />
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" name="Achievements" className="elementSize" onChange={(e) => { setPerson({ ...person, Achievements: e.target.value }) }} placeholder="your achievements" />
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" name="certifications" className="elementSize" onChange={(e) => { setPerson({ ...person, certifications: e.target.value }) }} placeholder="enter certifications" />
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" name="projects" className="elementSize" onChange={(e) => { setPerson({ ...person, projects: e.target.value }) }} placeholder="your projects" />
                    </div>

                    <div className="container mt-4 mb-2">
                        <input type="submit" value="signup" className="btn btn-primary" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <NavLink to="/"> 
        <input type="submit" value="cancel" className="btn btn-danger" formNoValidate />
                 </NavLink>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Signup;