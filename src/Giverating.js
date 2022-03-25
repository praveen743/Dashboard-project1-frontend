import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css'

function Giverating() {
    const params = useParams();
    const navigate = useNavigate();
    const [list,setlist] = useState([])
    useEffect(async () => {
        fetchtask()
      }, [])
    
      let fetchtask = async () => {
        try {
          let itemdetials = await axios.get(`http://localhost:3004/gradetask/${params.id}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
          console.log(itemdetials.data);
          formik.setFieldValue('classnumber',itemdetials.data[0].classnumber)
          formik.setFieldValue('tasklink',itemdetials.data[0].tasklink)
          formik.setFieldValue('userid',itemdetials.data[0].userid)
          
          setlist(itemdetials.data[0])
        } catch (error) {
          console.log(error)
        }
      }
       
  const formik = useFormik({
    
    initialValues: {
        classnumber:'',
        tasklink:'',
        taskrating:'',
        userid: '',
         
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let data = await axios.put(`https://zenclass-project1-backend.herokuapp.com/gradetask/${params.id}`, values)
        navigate('/rate')
        } catch (error) {
        console.log(error)
      }
    }
    
  })
  return (
    <>
    <div className='text-dark text-lg'> </div>
    <form onSubmit={formik.handleSubmit}>
      <div className='container' style={{marginTop:'50px'}}>
<div  id='namehead'>{`${list.userid} - ${list.classnumber}`}</div>
      <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-dark text-lg'>
            <label><b>Task Source Code Link: </b></label></div>

          <div className='col-lg-4'><input type="text" className='form-control'
           
              value={formik.values.tasklink} name='tasklink'></input></div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-dark text-lg'>
            <label><b>  Enter Your Rating For This Task:</b></label></div>
             <div className='col-lg-4'><input type="number" min={0} max={10} className='form-control' 
            onChange={formik.handleChange} value={ formik.values.taskrating} name='taskrating'></input></div>
        </div>
      

     
        <div className='row mt-2'>
        
        <div className='col-lg-12 mt-3 text-center'><input type="submit"  id='addbtn'
         className='btn btn-primary' value="Submit"></input></div>
      </div>
      </div>
    </form>
    </>
  )
}

export default Giverating