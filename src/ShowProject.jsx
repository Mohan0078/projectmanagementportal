import React from 'react';
import axios from 'axios';
import base_url from './api/bootApi';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ShowProject = ({ project, showHome }) => {

    // for starting the payment

    // for loading the script
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    // for display  payment page
    async function displayRazorpay(event) {

        event.preventDefault();

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // change the fees
        const data = { amount: "500" };

        const result = await axios.post(`${base_url}/create_order`, data);

        // alert(result);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_KzpKLjIb4eIpPX", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Rexora Edu Labs",
            description: "Enrollment Transaction",
            image: "./Images/app.jpg",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                console.log(data);
                // const result = await axios.post("http://localhost:5000/payment/success", data);

                // alert(result.data.msg);
            },
            prefill: {
                name: "",
                email: "",
                contact: "",
            },
            notes: {
                address: "Rexora Edu Labs Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    // for going back and showing the whole page
    const goBack = () => {
        showHome('block');
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">

                    <div className="card bg-light">

                        <button style={{ width: "150px", backgroundColor: "#fa9191" }} className="btn" onClick={goBack}><ArrowBackIcon /> Back</button>

                        <hr />

                        <form onSubmit={displayRazorpay} className="mt-1">


                            <h3 className="text-danger text-center">{project.projectTitle}</h3>
                            <hr />
                            <span> <label>About Project :  </label> {project.projectDescription} </span>
                            <br />
                            <span>  <label>  Technology Requirements : </label> {project.techRequirement} </span>
                            <br />
                            <span>  <label> Timeline and Deadlines : </label> {project.lastDate} {project.lastTime} </span>
                            <br />
                            <span>   <label>  Enrollment : </label> {project.enrollment}  </span>
                            <br />
                            <span>  <label>   Cerifications : </label> {project.certifications}  </span>
                            <br />

                            <span>  <label>  Charges : </label> {project.charges}  </span>
                            <hr />
                            <div className="form-group mt-3 mb-3 text-center">
                                <input type="submit" value="Enroll & Pay" className="btn btn-success" />
                            </div>

                        </form>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ShowProject;