import React, { useState } from 'react';
import Header from './header';

function Dashboard() {

    const [isJoined, setJoined] = useState(false);
    const [isJoined_f, setJoined_f] = useState(false);
    const [isJoined_s, setJoined_s] = useState(false);
    const [isJoined_t, setJoined_t] = useState(false);
    const [meetingTime, setMeetingTime] = useState()
    const [meetingEndTime, setMeetingEndTime] = useState();

    const get_time_diff = () => {
        var date1 = new Date(meetingTime);
        var date2 = new Date();

        var diff = date2.getTime() - date1.getTime();

        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        setMeetingEndTime(hh + " Hours : " + mm + " Mins : " + ss + " Seconds")
    }

    const handleJoin = (status: boolean) => {
        setJoined(status)
        if (status) {
            setMeetingTime(new Date())
            setMeetingEndTime(false)

            setTimeout(() => {
                setJoined_f(true)
                // alert('User 1 is joined')
            }, 2000);
            setTimeout(() => {
                setJoined_s(true)
                // alert('User 2 is joined')
            }, 5000);
            setTimeout(() => {
                setJoined_t(true)
                // alert('User 2 is joined')
            }, 10000);
        } else {
            setJoined_f(false)
            setJoined_s(false)
            setJoined_t(false)
            get_time_diff()
        }
    }
    return (
        <div>
            <Header />
            <div className="meeting-wrapper">
                <div title="logged user" className="joined-user fa fa-user">
                </div>
                <div className="other-users">
                    {isJoined_f && <div title="test user 1" className="other-user fa fa-user">
                    </div>}

                    {isJoined_s && <div title="test user 2" className="other-user fa fa-user">
                    </div>}

                    {isJoined_t && <div title="test user 3" className="other-user fa fa-user">
                    </div>}
                </div>
                <div className="controls">
                    {!isJoined && <button className="my-btn" onClick={e => handleJoin(true)}>Start Meeting</button>}
                    {isJoined && <button className="my-btn" onClick={e => handleJoin(false)}>End meeting</button>}

                </div>
            </div>

            <div>
                {isJoined &&
                    <div>
                        <span> Meeting started  </span>
                        <p> <b> In the meeting : </b> {isJoined_f ? 'test user 1' : ''} {isJoined_s ? ', test user 2' : ''} {isJoined_t ? ',test user 3' : ''} </p>
                    </div>
                }
            </div>
            <div>
                {meetingEndTime &&
                    <span> <b> Meeting duration is : </b> {meetingEndTime} </span>
                }
            </div>
        </div>
    )
}

export default Dashboard;
