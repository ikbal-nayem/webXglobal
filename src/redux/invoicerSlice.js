import { createSlice } from '@reduxjs/toolkit'
// import { updateQty, removeProduct, addProduct} from './actions'



export const invoicerSlice = createSlice({
  name: 'invoicer',
  initialState: {billable_items: []},
  reducers: {
    addProduct: (state, action) => {
      const idx = state.billable_items.findIndex(val => val.id === action.payload.id)
      let data = idx>-1 ? {...state.billable_items[idx]} : {...action.payload}
      if(idx === -1){
        data.qty = 1 
        state.billable_items = [data, ...state.billable_items]
      } else {
        data.qty += 1
        state.billable_items[idx] = data
      }
    },
    removeProduct: (state, action) => {
      const idx = state.billable_items.findIndex(val => val.id === action.payload)
      state.billable_items.splice(idx, 1)
    },
    updateQty: (state, action) => {
      
    },
  },
})


export const { addProduct, removeProduct, updateQty } = invoicerSlice.actions

export default invoicerSlice.reducer