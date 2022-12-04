import './DateInfo.css'
import React from 'react'

const DateInfo = () => {    

        let date = new Date();
        let day = date.toLocaleString('en-us', {  weekday: 'long' });
        let currentDate = date.getDate();
        let year = date.getFullYear();
        let time = date.getHours();
        let mins = date.getMinutes();
        let sec = String(date.getTime());
      
    


  return (
    <h4 className='dateInfo'>
      {day} {currentDate} {year} , {time}:{mins}:{sec.substring(0,2)}
    </h4>
  )
}

export default DateInfo;

// console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));
