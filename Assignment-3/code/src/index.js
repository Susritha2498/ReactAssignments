import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var today = new Date()
// var datereq = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear()
// var timeNow = today.getHours() + ':' + today.getMinutes()
// console.log(timeNow)
// console.log(datereq)

const data={
  Name:'Susritha',
  EmployeeID: '26600688G',
  Time:'12:30',
  date:'31-03-2022',
  Email:'xxx.yy@email.nl',
  Phone:'+91-1234567891',
  Status:'In Progress',
  Door:'Mark',
  Img:'https://www.w3schools.com/howto/img_avatar.png',
  time2:'16:00',
};


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
