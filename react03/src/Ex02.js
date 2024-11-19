import React from 'react'
import Ex01 from './Ex01'
import Ex03 from './Ex03'

function Ex02() {
  return (
    <div>
        <h3>outter component</h3>
        <Ex01 su={1111} name={'tester'}>
            <Ex03></Ex03>
        </Ex01>
    </div>
  )
}

export default Ex02