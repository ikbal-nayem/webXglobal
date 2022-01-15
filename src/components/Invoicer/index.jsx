import React from 'react';
import {Toast} from 'bootstrap'
import ProductTable from './ProductTable';
import Dummy from './Dummy';
import Total from './Total';
import ToastView from '../Toast';
import Modal from '../Modal';



export default ()=>{
  const handleOrder = ()=>{
    var myAlert =document.getElementById('orderToast');
    var bsAlert = new Toast(myAlert);
    bsAlert.show();
  }
  
  return(
    <div className="d-flex flex-column bd-highlight h-100">
      <Dummy/>
      <div>
        <ProductTable/>
      </div>
      <div className="mt-auto bd-highlight">
        <Total/>
        <div className="row g-0" style={{height: 50}}>
          <div className="col-md-8">
            <div className="row h-50 g-0">
              <div className="col bg-warning text-center text-white">Suspend</div>
              <div className="col bg-info text-center text-white submit" onClick={handleOrder}>
                Order
              </div>
            </div>
            <div className="row h-50 g-0">
              <div className="col bg-danger text-center text-white">Cancel</div>
              <div className="col bg-primary text-center text-white">Bill</div>
            </div>
          </div>
          <div className="col-md-4 bg-success d-flex justify-content-center align-items-center text-white submit" data-bs-toggle="modal" data-bs-target="#preview">
            Payment
          </div>
        </div>
      </div>
      <Modal/>
      <ToastView/>
    </div>
  )
}