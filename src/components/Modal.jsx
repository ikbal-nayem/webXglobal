import React from 'react';
import {Toast} from 'bootstrap';
import ProductTable from './Invoicer/ProductTable';
import Total from './Invoicer/Total';


export default ()=>{
  const handlePayment = ()=>{
    var myAlert =document.getElementById('orderToast');
    var bsAlert = new Toast(myAlert);
    bsAlert.show();
  }
  return(
    <div className="modal fade" id="preview" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="text-center">Invoice Preview</h4>
            <ProductTable show_in="MODAL"/>
            <Total show_in="MODAL"/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success btn-sm" data-bs-dismiss="modal" onClick={handlePayment}>Payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}