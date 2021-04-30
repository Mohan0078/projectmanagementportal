import axios from 'axios';
import React, { useState } from 'react';
import base_url from './api/bootApi';

const AddProject = () => {

    const [project, setProject] = useState({});

    // form handler function
    const handleForm = (e) => {

        e.preventDefault();

        console.log(project);
        postData(project);
    }

    // for posting data to server
    const postData = (data) => {
        axios.post(`${base_url}/project`, data).then(
            (response) => {
                console.log(response);
                console.log("Success");
            }, (error) => {
                console.log(error);
                console.log("error");
            }
        );
    }

    return (
        <>
            <div className="card  col-md-5 text-center mt-4">
                <h1>Fill Project Details</h1>

                <form onSubmit={handleForm}>

                    <div className="form-group mt-3">
                        <input type="text" name="projectTitle" className="elementSize" onChange={(e) => { setProject({ ...project, projectTitle: e.target.value }) }} placeholder="Enter Project Name" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="projectDescription" className="elementSize" onChange={(e) => { setProject({ ...project, projectDescription: e.target.value }) }} placeholder="Enter Project Decription" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="techRequirement" className="elementSize" onChange={(e) => { setProject({ ...project, techRequirement: e.target.value }) }} placeholder="Enter technology requirements" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="lastDate" className="elementSize" onChange={(e) => { setProject({ ...project, lastDate: e.target.value }) }} placeholder="Last Date of submisson" />
                    </div>

                    <div className="form-group mt-3">
                        <input type="text" name="lastTime" className="elementSize" onChange={(e) => { setProject({ ...project, lastTime: e.target.value }) }} placeholder="Last time of submission" />
                    </div>

                    <div className="form-group mt-3 text-center mb-3">
                        <input type="submit" value="Add Project" className="btn btn-primary" />
                    &nbsp;&nbsp;&nbsp;
                    <input type="submit" value="Cancel" className="btn btn-warning" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProject;