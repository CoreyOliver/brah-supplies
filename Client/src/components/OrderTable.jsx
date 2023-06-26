import React from 'react'

const OrderTable = () => {
  return (
    <>
      <table className="table mx-4 mt-4 pb-8">
          <tbody>
            <tr className="">
              <th scope="col" className=""></th>
              <th scope="col" className="">Item Number</th>
              <th scope="col" className="">Quantity on Order</th>
              <th scope="col" className="mx-4"> + / - </th>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default OrderTable
