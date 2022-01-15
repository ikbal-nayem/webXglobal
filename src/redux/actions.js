const addProduct = (state, action)=>{
  state.billable_items = [action.payload, ...state.billable_items]
}

const removeProduct = (state, action)=>{
  
}

const updateQty = (state, action)=>{
  
}


export {addProduct, removeProduct, updateQty}