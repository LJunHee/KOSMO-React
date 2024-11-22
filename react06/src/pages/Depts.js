import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Row, Stack } from 'react-bootstrap'
// book p187 변경
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Link, useNavigate } from 'react-router-dom';

function Depts() {
    const navigate=useNavigate();
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3030/dept/',{
            method:'GET',
            credentials:'include'
          })
        .then(res=>res.json())
        .then(json=>{
            // const result2= json.result.map(ele=>{
            //     let arr=Object.entries(ele);
            //     console.log(arr);
            //     arr[0]=arr[0].toString().toLowerCase();
            //     let obj={};
            //     obj[arr[0]]=arr[1];
            //     return obj;
            // })
            // console.log(result2);
            if(json.result==''){
                navigate('/login/');
            }else{
            setArr(json.result);
            }
        });
    },[]);
    const columes=[
        {field:'DEPTNO',sortable:true},
        {field:'DNAME',filter:true},
        {field:'LOC',filter:true}
    ];
  return (
    <>
    <h2>list page</h2>
    <Stack gap={10} className="col-md-10 mx-auto">
    <Row xs={1} md={2} className="g-1">
    {arr.map(ele=>(
        <Card style={{ width: '20%' }}>
        <Card.Body>
            <Card.Title>{ele.DNAME}</Card.Title>
            <Card.Text>{ele.LOC}</Card.Text>
            <Link to={'/dept/'+ele.DEPTNO}>Detail({ele.DEPTNO}) Link</Link>
        </Card.Body>
        </Card>
    ))}
    </Row>
    </Stack>
    <Stack gap={10} className="col-md-10 mx-auto">
        <Link as="a" to={'/dept/add'} className='btn btn-primary btn-block' role='button'>입력</Link>
    </Stack>
    <Stack gap={10} className="col-md-6 mx-auto">
        <div className='ag-theme-balham' style={{height:500,width:'100%'}}>
            <AgGridReact
                rowData={arr}
                columnDefs={columes}
            />
        </div>
    </Stack>
    </>
  )
}

export default Depts