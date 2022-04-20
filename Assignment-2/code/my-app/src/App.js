import './App.css';

function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <img src={employee.profileImg} alt="profileImage"/>
    <h1 className="data"><strong>{employee.name}</strong></h1>
    <p className="sub-heading">Location</p>
    <p className="data">{employee.location}</p>
    <p className="sub-heading">Blood Group</p>
    <p className="data">{employee.bloodGroup}</p>
    <p className="sub-heading">Age</p>
    <p className="data">{employee.age}</p>
  </div>
)
}


export default App;
