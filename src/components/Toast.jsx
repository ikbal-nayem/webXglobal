import React from 'react';


export default ()=>(
  <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
    <div id="orderToast" className="toast text-white bg-success" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">
          The Order is Saved Successfully!
        </div>
        <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"/>
      </div>
    </div>
  </div>
)