import React, { useState } from 'react';
import AllPersons from './AllPersons';
import AllProjects from './AllProjects';
import ImageSlider from './ImageSlider';
import Login from './Login';
import ShowProject from './ShowProject';
import ShowPerson from './ShowPerson';

const Home = () => {

  // for showing and hiding the project
  const [projectDisplay, setProjectDisplay] = useState('none');
  // for showing and hiding the home  
  const [homeDisplay, setHomeDisplay] = useState('block');

  // for person or user
  const [personDisplay, setPersonDisplay] = useState('none');

  // for login page
  const [loginDisplay, setLoginDisplay] = useState('none');

  // for getting the project
  const [currentProject, setCurrentProject] = useState({});

  const [currentPerson, setCurrentPerson] = useState({});

  // getting the session
  const hasLogin = localStorage.getItem("hasLogin");

  console.log(hasLogin + " Testing ");

  const showHome = (styleValue) => {
    if (styleValue === "block") {
      setProjectDisplay('none');
      setPersonDisplay('none');
      setLoginDisplay('none');
      setHomeDisplay('block');
    }
  }

  const showHomeBody = (value) => {
    setHomeDisplay(value);
  }

  const showProjectBody = (value) => {
    if (hasLogin === "" || hasLogin === "null" || hasLogin === null) {
      setLoginDisplay("block");
    }
    else if (hasLogin === "yes") {
      setProjectDisplay(value);
    }

  }

  const setProjectData = (project) => {
    setCurrentProject(project);
  }

  const showPersonBody = (value) => {
    if (hasLogin === "" || hasLogin === "null" || hasLogin === null) {
      setLoginDisplay("block");
    }
    else if (hasLogin === "yes") {
      setPersonDisplay(value);
    }
  }

  const setPersonData = (person) => {
    setCurrentPerson(person);
  }



  return (
    <>

      <div className="container mt-3">
        <div className="row">


          <div style={{ display: loginDisplay }}>
            <Login />
          </div>

          <div style={{ display: projectDisplay }}>

            <ShowProject project={currentProject} showHome={showHome} />

          </div>

          <div style={{ display: personDisplay }} showHome={showHome}>

            <ShowPerson person={currentPerson} showHome={showHome} />
          </div>



          <div style={{ display: homeDisplay }}>

            <ImageSlider />


            <AllProjects setProjectData={setProjectData} showHome={showHomeBody} showProject={showProjectBody} />

            <h2 className="text-center text-light mt-2">Top Persons</h2>

            <div className="rowPerson">
              <AllPersons setPersonData={setPersonData} showHome={showHomeBody} showPerson={showPersonBody} />
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Home;