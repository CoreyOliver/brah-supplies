import React from 'react'

//need to figure out how to put it in a rwo
const Supply = () => {
  return (
    <div className='pt-20'>
      <ul className='grid-flow-row grid-cols-5 text-sm bg-slate-200 '>
        <li>Description:</li>
        <li>Item Number:</li>
        <li>Vendor:</li>
        <li>Active:</li>
        <li>Quantity:</li>
      </ul>
    </div>
  )
}

export default Supply
