import React from 'react'
import { Form } from 'react-bootstrap'

function FormGroup({label,name,edit,val,cb}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" name={name} placeholder={name} value={val} onChange={cb} readOnly={edit}/>
        <Form.Text className="text-muted">
          {label}.
        </Form.Text>
      </Form.Group>
  )
}

export default FormGroup