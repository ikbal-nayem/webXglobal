import React from "react";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Products from './components/ItemList';
import Invoicer from './components/Invoicer';


export default function App() {
  return (
    <Provider store={store}>
      <div className="container h-100">
        <div className="row gx-3 h-100">
          <div className="col-md-4">
            <div className="border bg-light p-2 h-100">
              <Invoicer/>
            </div>
          </div>

          <div className="col">
            <div className="border bg-light p-2 h-100">
              <Products/>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
