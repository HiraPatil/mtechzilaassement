import React , {useEffect, useState} from 'react'
import PomodoroTimer from '../promotimer/timer'

export default function Home() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 25 * 60); // 25 minutes timer

  const [expiryTimestamp, setExpiryTimestamp] = useState(
    parseInt(localStorage.getItem('expiryTimestamp')) || time.getTime() // Use getTime() to get timestamp
  );

  useEffect(() => {
    localStorage.setItem('expiryTimestamp', expiryTimestamp.toString());
  }, [expiryTimestamp]);


  return (
    <>
       <PomodoroTimer expiryTimestamp={expiryTimestamp}  setExpiryTimestamp={setExpiryTimestamp}></PomodoroTimer>
    </>
  )
}
