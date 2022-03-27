import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Tasktype() {
  return (
      <>
     <div className='text-left'><h2>My Tasks</h2></div>
      
    <hr />
    <div className=' container'>
        <div className='row'>
            <div className='col-lg-6'>
          <Link to='/mytask'>  <button className='btn btn-primary btn-block'>Task Score</button>
          </Link>
            </div>
            <div className='col-lg-6'>
            <Link to='/notgraded'>  <button  className='btn btn-primary btn-block'>Tasks yet to graded </button>
            </Link>

                </div>
        </div>
    </div>
    
    </>
  )
}

export default Tasktype