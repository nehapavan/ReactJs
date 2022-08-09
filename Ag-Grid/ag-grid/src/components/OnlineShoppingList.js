// import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useState, useEffect, useMemo, } from 'react';

function OnlineShoppingList() {

  const [rowData, setRowData] = useState([
    { "OfficialSite": "FlipKart", "Item No": 56598978, "Item Name": "Mobiles and Electronics", "Quantity": 500, "Payment Mode": "GooglePay/PhonePay/Cash On Delivery", "Status": "Available" },
    { "OfficialSite": "Amazon", "Item No": 87542121, "Item Name": "International brands", "Quantity": 1500, "Payment Mode": "GooglePay/PhonePay/Cash On Delivery", "Status": "Available" },
    { "OfficialSite": "Myntra", "Item No": 89562321, "Item Name": "Home Tools", "Quantity": 1250, "Payment Mode": "GooglePay/PjonePay/Cash On Delivery", "Status": "Available" },
  ]);
  const columnDefs = [
    { field: 'OfficialSite', },
    { field: 'Item No' },
    { field: 'Item Name' },
    { field: 'Quantity' },
    { field: 'Payment Mode' },
    { field: 'Status' }
  ];
  
  const defaultColDef = useMemo(() => ({
    sortable: true, filter: true
  }), []);
 
  const ONLINESHOPPING_API = 'https://3b0c0670-b5c7-4a8e-8a0d-595f796ab613.mock.pstmn.io/getProducts';

  useEffect(() => {
    fetch(ONLINESHOPPING_API)
      .then(response => response.json())
      .then(rowdata => {
        setRowData(rowdata)
        console.log(rowdata);
      });
  }, [])

  return (
    <div className="ag-theme-alpine" style={{ width: 'auto', height: 900, }}>

      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        columnHoverHighlight={true}
        
      />

    </div>
  );
}

export default OnlineShoppingList;