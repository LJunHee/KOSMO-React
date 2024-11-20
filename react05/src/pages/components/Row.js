import React from 'react'
import { Link } from 'react-router-dom'

function Row({dname,loc,deptno}) {
  return (
    <Link to={"/dept/"+deptno} className="list-group-item">
        <h4 className="list-group-item-heading">{dname}</h4>
        <p className="list-group-item-text">{loc}</p>
    </Link>
  )
}

export default Row