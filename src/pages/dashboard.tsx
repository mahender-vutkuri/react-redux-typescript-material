import React, { useState } from 'react';
import Header from './header';
function Dashboard() {

    const [isJoined, setJoined] = useState(false);
    const [isJoined_f, setJoined_f] = useState(false);
    const [isJoined_s, setJoined_s] = useState(false);
    const [isJoined_t, setJoined_t] = useState(false);
    const [meetingTime, setMeetingTime] = useState()
    const [meetingEndTime, setMeetingEndTime] = useState();

    const cameraAccess = () => {
        let localstream;
        let vid: any = document.getElementById('vid')
        if (navigator.mediaDevices.getUserMedia !== null) {
            var options = {
                video: true,
                audio: true
            };
            navigator.getUserMedia(options, function (stream) {
                vid.srcObject = stream;
                localstream = stream;
                vid.play();
                localStorage.setItem('meeting',"true")
                console.log(stream, "streaming");
            }, function (e) {
                console.log("background error : " + e.name);
            });
        }


    }

    const capOff = () => {
        let localstream;
        let vid: any = document.getElementById('vid')
        localStorage.removeItem('meeting')

        if (navigator.mediaDevices.getUserMedia !== null) {
            var options = {
                video: true,
                audio: true
            };
            navigator.getUserMedia(options, function (stream) {
                vid.srcObject = stream;
                localstream = stream;
                localstream.getTracks().forEach(x => x.stop());

            }, function (e) {
                console.log("background error : " + e.name);
            });
        }
        vid.pause();
        vid.src = "";
        console.log("all capture devices off");
        var sound: any = document.getElementById("audio");
        sound.play()
    }

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
            cameraAccess()
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
            capOff()
            setJoined_f(false)
            setJoined_s(false)
            setJoined_t(false)
            get_time_diff()
        }
    }
    return (
        <div>
            <Header />
            <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoPlay={false} ></audio>
            <div className="meeting-wrapper">
                <div title="logged user" className="joined-user">
                    start meeting...
                    <video id="vid" className="video" autoPlay={true}></video>
                </div>

                <div className="other-users">
                    {isJoined_f && <div title="test user 1" className="other-user">
                        <img src="https://image.flaticon.com/icons/svg/924/924874.svg" alt="user" />
                    </div>}

                    {isJoined_s && <div title="test user 2" className="other-user">
                        <img src="https://image.flaticon.com/icons/svg/2922/2922561.svg" alt="user" />
                    </div>}

                    {isJoined_t && <div title="test user 3" className="other-user">
                        <img src="https://image.flaticon.com/icons/svg/3048/3048122.svg" alt="user" />
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
