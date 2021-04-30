import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ShowPerson = ({ person, showHome }) => {


    // for going back and showing the whole page
    const goBack = () => {
        showHome('block');
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">

                    <div className="card bg-light">

                        <h3 className="text-danger text-center">{person.personName}</h3>
                        <hr />
                        <span> <label>Email :  </label> {person.personEmail} </span>
                        <br />
                        <span>  <label>  Achievements : </label> {person.achievements} </span>
                        <br />
                        <span>  <label> Cerifications : </label> {person.certifications} </span>
                        <br />
                        <span>   <label>  Projects : </label> {person.projects}  </span>
                        <br />

                        <div className=" text-center">
                            <button style={{ width: "150px" }} className="btn btn-warning" onClick={goBack}><ArrowBackIcon /> Back</button>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ShowPerson;