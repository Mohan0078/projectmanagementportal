import React, { useEffect, useState } from 'react';
import Project from './Project';
import base_url from './api/bootApi';
import axios from 'axios';

const AllProjects = ({ setProjectData, showHome, showProject }) => {


    const [projects, setProjects] = useState([]);

    // function to call function
    const getAllProjectsFromServer = () => {
        axios.get(`${base_url}/project/`).then((response) => {
            console.log(response.data);
            setProjects(response.data);
        }, (error) => {
            // for error
            console.log(error);
        })
    }


    // loading all projects
    useEffect(() => {
        getAllProjectsFromServer();
    }, []);

    // for updating all projects after deletion
    const updateProject = (projectId) => {
        setProjects(projects.filter((proj) => proj.projectId !== projectId));
    }

    // for showing the project
    const updateCurrentProject = (project) => {
        setProjectData(project);
        showHome('none');
        showProject('block');

        console.log(project);
    }

    return (
        <>


            {/* <div style={{ display: homeDisplay }}> */}
            <h2 className="text-center text-light">Top Projects</h2>

            {
                (projects.length > 0 ? projects.map((item, id) => <Project project={item} key={id} update={updateProject} showProject={updateCurrentProject} />) : "No Projects")
            }

            {/* </div> */}

        </>
    )
}

export default AllProjects;