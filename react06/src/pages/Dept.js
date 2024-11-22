import React, { useEffect, useState } from 'react'
import FormGroup from './components/FormGroup'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';

function Dept() {
    const navigate=useNavigate();
    const {deptno}=useParams();
    const [bean,setBean]=useState(null);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:3030/dept/${deptno}`)
        .then(res=>res.json())
        .then(json=>setBean(json))
        .catch(alert)
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const FormDeleteAction=(e)=>{
        
        fetch('http://localhost:3030/dept/'+deptno,{
            method:'delete'
        }).then(res=>{
            if(res.ok){
                setShow(false);
                navigate('/dept/');
            }else{
                console.log(res.status,res.statusText);
            }
        }).catch(alert);
    };
  return (
    <>
        <h2>detail page</h2>
        <form>
            <FormGroup label={'deptno'} name={'deptno'} val={bean!=null?deptno:''}/>
            <FormGroup label={'dname'} name={'dname'} val={bean!=null?bean.DNAME:''}/>
            <FormGroup label={'loc'} name={'loc'} val={bean!=null?bean.LOC:''}/>
        </form>
        <Link to={'/dept/edit?deptno='+deptno} className='btn btn-primary btn-block' role='button'>수정</Link>
        <Button variant="danger" onClick={handleShow}>삭제</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>{deptno}번 삭제 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={FormDeleteAction}>삭제</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Dept