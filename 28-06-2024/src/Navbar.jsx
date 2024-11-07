import {React , useState} from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  
  //two states initial state and final state
  // const [count , setCount] = useState(10);
  const [mode , setMode] = useState("light");

  // const updateCount = () => {
  //   if(count !== 0){
  //     setCount(count - 1);
  //   }else{
  //     setCount(10);
  //   }
  // }

  // (mode == 'light') ? 'bg-light' : 'bg-dark'

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }

  return (
    <>
      <div className={`d-flex justify-content-around align-items-center ${(mode === 'light') ? 'bg-body-tertiary' : 'bg-dark'} py-3`}>
        <h2 className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}>Amazon</h2>

        <ul className="d-flex align-items-center gap-4 list-unstyled">
          <Link to="/" className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}>Home</Link>
          <Link to="/about" className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}>About</Link>
          <Link className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}>Contact</Link>
          <Link className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}>Services</Link>
        </ul>

        <div className="">
          <Link to="/register" className="btn btn-info mx-2">Register</Link>
          <button className="btn btn-danger mx-2" onClick={changeMode}>Dark Mode</button>
        </div>
      </div>

      {/* <div className="mt-5 ps-5">
        <h1>{count}</h1>
        <button onClick={updateCount}>Update count</button>
      </div> */}
    </>
  );
}

export default Navbar;
