import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../../redux/invoicerSlice'


export default ({show_in})=>{
  const {billable_items} = useSelector(state => state.invoicer)
  const dispatch = useDispatch()

  const handleDelete = (id)=>{
    dispatch(removeProduct(id))
  }

  const handleQty = (e)=>{
    console.log(e.target.valueAsNumber || 0)
  }

  return(
    <table className="table table-sm">
      <thead>
        <tr className="bg-primary text-white">
          <th scope="col">Product</th>
          <th scope="col" className="text-end">Price</th>
          <th scope="col" className="text-center">Qty</th>
          <th scope="col" className="text-end">Subtotal</th>
          {show_in !== 'MODAL' &&
            <th className="px-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </th>
          }
        </tr>
      </thead>
      <tbody>
        {billable_items.map(item => (
          <tr key={item.id}>
            <th scope="row">
              {item.name}
            </th>
            <td className="text-end">{item.price.toLocaleString()}</td>
            <td className="text-center">
              {show_in !== 'MODAL'
                ? <input type="number" value={item.qty} onChange={handleQty} className="qty-input"/>
                : item.qty
              }
            </td>
            <td className="text-end">{(item.price * item.qty).toLocaleString()}</td>
            {show_in !== 'MODAL' &&
              <td className="text-danger btn px-0" onClick={()=>handleDelete(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                  <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  )
}