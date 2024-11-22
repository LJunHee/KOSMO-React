import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import FormGroup from './components/FormGroup';

function DeptAdd() {
    const navigate=useNavigate();

    const formSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3030/dept/',{
            method:'POST',
            body:JSON.stringify({
                deptno:e.target.deptno.value,
                dname:e.target.dname.value,
                loc:e.target.loc.value
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            return res.text();
        }).then(()=>{
            navigate('/dept/');
        })
        .catch(alert)
    };
    
  return (
    <>
    <h2>입력페이지</h2>
    <Form onSubmit={formSubmit}>
      <FormGroup label={'deptno'} name={'deptno'}  />
      <FormGroup label={'dname'} name={'dname'}  />
      <FormGroup label={'loc'} name={'loc'}  />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </>
  )
}

export default DeptAdd