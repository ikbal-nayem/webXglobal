import React from 'react';
import product_list from '../data/product.json';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/invoicerSlice'


export default React.memo(()=>{
  const dispatch = useDispatch()

  const addItem = (item)=>{
    dispatch(addProduct(item))
  }

  return(
    <div className="row g-2">
      {product_list.map(item => (
        <div key={item.id} className="col-md-2">
          <div className="card product-card" onClick={()=>addItem(item)}>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body text-center p-1">
              <h6 className="card-title text-truncate">{item.name}</h6>
              <p className="card-text">
                <small className="text-success">
                  {item.price.toLocaleString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
})