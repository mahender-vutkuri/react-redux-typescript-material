import React from 'react';
import Header from './header';

function HomePage() {
    const onPaste = (e) => {
        e.preventDefault()
    }
    return (
        <div className="m-t-50">
            <Header />
            <div style={{ marginTop: "100px" }} className="disabled-copy">
                with paste: <input name="ReceiveNo" type="text" className="txtbox" /> <br/>
                without paste: <input name="ReceiveNo" type="text" className="txtbox" onPaste={onPaste} />

                <h2>Try copying the text from below.</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>

            <div className="copy-css">
                <h2>This can be copied with extra styles</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        </div>
    );
}

export default HomePage