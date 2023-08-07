import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function PomodoroTimer({ expiryTimestamp, setExpiryTimestamp }) {

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


    return (
        <>

            <div className="rounded bg-gradient-4 text-white shadow p-5 text-center mb-5">
                <p className="mb-0 font-weight-bold text-uppercase">
                    <b>Timer</b>
                </p>
                <div style={{ fontSize: '100px' }}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <div id="clock-c" className="countdown py-4" />
                {/* Call to actions */}
                <ul className="list-inline">
                    <li className="list-inline-item pt-2">
                        <button id="btn-reset" type="button" className="btn btn-demo" onClick={() => {
                            // Restarts to 5 minutes timer
                            const time = new Date();
                            time.setSeconds(time.getSeconds() + 25 * 60)
                            localStorage.setItem('expiryTimestamp', time.getTime().toString());
                            restart(time)
                        }}>
                            <i className="glyphicon glyphicon-repeat" />
                            Reset
                        </button>
                    </li>
                    <li className="list-inline-item pt-2">
                        <button id="btn-pause" type="button" className="btn btn-demo" onClick={start}>
                            <i className="glyphicon glyphicon-repeat" />
                            Start
                        </button>
                    </li>
                    <li className="list-inline-item pt-2">
                        <button id="btn-pause" type="button" className="btn btn-demo" onClick={pause}>
                            <i className="glyphicon glyphicon-repeat" />
                            Pause
                        </button>
                    </li>
                    
                </ul>
            </div>

        </>
    );
}

export default PomodoroTimer;



