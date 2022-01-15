import React from 'react';
import { useSelector } from 'react-redux'


export default React.memo(({show_in})=> {
  const {billable_items} = useSelector(state => state.invoicer)

  let total = 0
  billable_items.forEach(val => {
    total += val.price * val.qty
  })

  return(
    <table className="table table-sm border-top mb-0 bg-white">
      <tbody className={`${show_in==="MODAL" && 'bg-info'}`}>
        <tr>
          <td style={{paddingRight: 15}}>
            <div className="d-flex justify-content-between">
              <span>Items</span>
              <strong>{billable_items.length}</strong>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <strong>{total.toLocaleString()}</strong>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{paddingRight: 15}}>
            <div className="d-flex justify-content-between">
              <span>
                Order Tax&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </span>
              <strong>0.00</strong>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-between">
              <span>
                Discount&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </span>
              <strong>0.00</strong>
            </div>
          </td>
        </tr>
        <tr className="bg-dark text-white">
          <td>Total Payable</td>
          <td className="text-end">{total.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  )
})