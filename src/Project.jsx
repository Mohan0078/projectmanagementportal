import React from 'react';


const Project = ({ project, update, showProject }) => {


    // const deleteProject = (id) => {
    //     axios.delete(`${base_url}/project/${id}`).then(
    //         (response) => {

    //             toast.success("project deleted");
    //             // for updating 
    //             update(id);
    //         },
    //         (error) => {
    //             toast.error("Project not deleted , Server Problem");
    //         }
    //     )
    // }

    // for showing the project , adding the project id
    const displayProject = (project) => {
        showProject(project);
    }

    return (
        <>

            <div>
                <div className="cardPerson border-2 text-center mt-2" role="button" onClick={() => displayProject(project)}>

                    <h5><span> {project.projectTitle}  </span></h5>

                </div>

            </div>

        </>
    );
};

export default Project;