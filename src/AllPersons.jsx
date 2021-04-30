import React, { useEffect, useState } from 'react';
import Person from './Person';
import base_url from './api/bootApi';
import axios from 'axios';

const AllPersons = ({ setPersonData, showHome, showPerson }) => {

    const [persons, setPersons] = useState([]);

    // function to call function
    const getAllPersonsFromServer = () => {
        axios.get(`${base_url}/person/`).then((response) => {
            console.log(response.data);
            setPersons(response.data);
        }, (error) => {
            // for error
            console.log(error);
        })
    }


    // loading all persons
    useEffect(() => {
        getAllPersonsFromServer();
    }, []);

    const updateCurrentPerson = (person) => {
        // setCurrentPerson(person);
        setPersonData(person);
        showHome('none');
        showPerson('block');

        console.log(person);
    }

    return (
        <>


            {
                (persons.length > 0 ? persons.map((item, id) => <Person person={item} key={id} showPerson={updateCurrentPerson} />) : "No Person")
            }

        </>
    )
}

export default AllPersons;