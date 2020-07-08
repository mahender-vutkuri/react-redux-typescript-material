import React from 'react';
import Header from './header';

function ContactPage() {

    return (
        <div >
            <Header />

            <div className="col-lg-8 offset-lg-2 m-t-50">
                <form name="form" className="m-t-50 login-form" >
                    <div className="form-group">
                        <label>First Name : </label>
                        <input type="text" name="fname" className={'form-control'} />

                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input type="text" name="lname" className={'form-control'} />

                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" name="email" className={'form-control'} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message: </label>
                        <textarea className="form-control" rows={5} />
                    </div>
                    <div className="form-group">
                        <button className="btn my-btn btn-primary">
                            Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactPage