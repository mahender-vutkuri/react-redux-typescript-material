import React, { useState } from 'react';
import Header from './header';

function RegistrationPage(props) {

    const [inputs, setInputs] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { fname, lname, email, password } = inputs;




    function handleChange(e) {
        const { name, value } = e.target;
        // console.log(name,value);

        setInputs(inputs => ({ ...inputs, [name]: value }));
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        // console.log(inputs);
        console.log(Object.values(inputs));
        let data: any = Object.values(inputs)
        let isCreated = true;
        data.forEach(value => {
            if (value.length < 1) {
                isCreated = false
            } 

        })
        if (isCreated) alert('user created')
        else alert("please fill all fields")
    }

    return (
        <div className="m-t-50">
            <Header />

            <div className="col-lg-8 offset-lg-2">
                <form name="form" className="m-t-50 login-form" onSubmit={handleSubmit}>
                <h2>New User Registration Page</h2>
                    <div className="form-group">
                        <label>First Name : </label>
                        <input type="text" name="fname" value={fname} onChange={handleChange} className={'form-control' + (submitted && !fname ? ' is-invalid' : '')} />
                        {submitted && !fname &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input type="text" name="lname" value={lname} onChange={handleChange} className={'form-control' + (submitted && !lname ? ' is-invalid' : '')} />
                        {submitted && !lname &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                        {submitted && !email &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn my-btn btn-primary">
                            Add New User
                    </button>
                        {/* <Link to="/register" className="btn btn-link">Register</Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage;