import React from 'react'
import { useNavigate } from 'react-router-dom'

function DeptAdd() {
  const navigate=  useNavigate();
  return (
    <>
        <h2 className='page-header'>입력 페이지</h2>
        <form>
            <div className='form-group'>
                <input name='deptno' placeholder='deptno' className='form-control'/>
            </div>
            <div className='form-group'>
                <input name='dname' placeholder='dname' className='form-control'/>
            </div>
            <div className='form-group'>
                <input name='loc' placeholder='location' className='form-control'/>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>입력</button>
                <button type='reset' className='btn btn-default btn-block'>취소</button>
                <button type='button' className='btn btn-default btn-block' onClick={navigate(-1)}>뒤로</button>
            </div>
        </form>
    </>
  )
}

export default DeptAdd