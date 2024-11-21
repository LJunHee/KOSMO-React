import React, { useState } from 'react'

function FormInput({ref,name,value,editVal}) {
    return (
    <div className='form-group'>
        <input ref={ref} name={name} placeholder={name} value={value} onChange={e=>editVal(e)} className='form-control'/>
    </div>
  )
}

export default FormInput