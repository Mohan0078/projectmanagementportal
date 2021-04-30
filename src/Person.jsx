import React from 'react';


const Person = ({ person, showPerson }) => {

    // for showing the person/ User 
    const displayPerson = (person) => {
        showPerson(person);
    }

    return (
        <>
            <div className="columnPerson mt-2">
                <div className="cardPerson" role="button" onClick={() => displayPerson(person)}>

                    <span>{person.personName}  </span>

                </div>
            </div>
        </>
    );
};

export default Person;