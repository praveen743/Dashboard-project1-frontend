import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Field } from 'formik';
import { Form} from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

 

function Attendance({user}) {
  const navigate = useNavigate();
  let params = useParams()
  return (
    
    <>
    <div className='text-left'><h2>Attendance</h2></div><hr/>
    <Formik
initialValues={{
Attendance: '',
classnumber:`${params.id}`,
userid: `${user?user.email:''}`,
}}
onSubmit={async (values) =>   {
    try {
        console.log(values);
        console.log(user?user.email:"");

        var response = await axios.post("http://localhost:3003/attendance", values);
        alert(response.data.message)
        navigate("/dashboard")
        
    } catch (error) {
        console.log(error)
    }
}}
>
{({ values }) => (
<Form>
<div id="my-radio-group" className='text-center'><b>{`Attendance for ${params.id}`}</b></div>
<div role="group" aria-labelledby="my-radio-group" className='text-center'>
<label>
<Field type="radio" name="Attendance" value="1" />
Present
</label><br/>
<label>
<Field type="radio" name="Attendance" value="0" />
Absent
</label>
</div>




<button type="submit" className='btn btn-primary'>Submit</button>
</Form>
)}
</Formik>
    </>
    
      
  )
}

export default Attendance