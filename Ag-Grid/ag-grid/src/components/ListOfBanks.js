import { AgGridReact } from 'ag-grid-react';
// import { } from 'ag-grid-enterprise';
import React, { useEffect, useMemo, useState } from 'react';
import StatusFilter from './StatusFilter';



const ListOfBanks = () => {

    const [rowData, setRowData] = useState([
        {
            "bankId": "9919",
            "refBankId": "9919",
            "bankName": "ICFC Finance Limited",
            "enabled": "N",
            "lastModifiedOn": 946664100011,
            "status": "Available"
        },
        {
            "bankId": "9931",
            "refBankId": "9931",
            "bankName": "Mahalaxmi Bikash Bank Ltd.",
            "enabled": "N",
            "lastModifiedOn": 946664100011,
            "status": "IN Progress"

        },
        {
            "bankId": "9935",
            "refBankId": "9935",
            "bankName": "Manjushree Finance Limited",
            "enabled": "N",
            "lastModifiedOn": 946664100011,
            "status": "IN Progress"
        },
        {
            "bankId": "9936",
            "refBankId": "9936",
            "bankName": "Mission Development Bank Limited",
            "enabled": "Y",
            "lastModifiedOn": 946664100011,
            "status": "Not Available"
        },
        {
            "bankId": "9938",
            "refBankId": "9938",
            "bankName": "Jebils Finance Ltd",
            "enabled": "Y",
            "lastModifiedOn": 946664100011,
            "status": "Not Available"
        },
        {
            "bankId": "9939",
            "refBankId": "9939",
            "bankName": "Reliance Finance Ltd.",
            "enabled": "Y",
            "lastModifiedOn": 946664100011,
            "status": "Not Available"
        },
        {
            "bankId": "9945",
            "refBankId": "9945",
            "bankName": "Kanchan Development Bank Ltd",
            "enabled": "Y",
            "lastModifiedOn": 946664100011,
            "status": "Not Available"
        },
        {
            "bankId": "8301",
            "refBankId": "8301",
            "bankName": "Gurkhas Finance Limited",
            "enabled": "Y",
            "lastModifiedOn": 946664100011,
            "status": "Not Available"
        },

    ]);
    const [pinned, setPinned] = useState(undefined);
    const [gridApi, setGridApi] = useState(null)
    const [gridColumnApi, setGridColumnApi] = useState(null)
    const columndef = [

        { field: 'bankId', initialwidth: '300', pinned: pinned, filter: 'agNumberColumnFilter' },
        {
            field: 'refBankId', filter: 'agSetColumnFilter',
        },
        { field: 'bankName', filter: 'agMultiCoulumnFilter' },
        { field: 'enabled', },
        { field: 'lastModifiedOn', filter: 'agNumberColumnFilter' },
        {
            field: 'status',
            filter: StatusFilter,

            // suppressMenu: true,
            // floatingFilter: true,
            filterParams: {
                title: 'select',
                values: ['Available', 'Not Available', 'IN Progress']
            },
        },
    ];

    const defaultColDef = useMemo(() => ({
        flex: 1,   //resizes  to current pixels
        sortable: true,
        filter: true,
        resizable: true,

        // editable: true,
        // floatingFilter: true,
        // closeOnApply: true,

    }), []);
    const sideBar = useMemo(() => ({
        sideBar: 'columns',

    }), []);

    // const BankDetails_API = 'https://6495e7b1-8de4-4810-b961-f077b6a4d0ab.mock.pstmn.io/listOfBanks';

    // useEffect(() => {
    //     fetch(BankDetails_API)
    //         .then(response => response.json())
    //         .then(rowdata => {
    //             setRowData(rowdata)
    //             console.log(rowdata);
    //         });
    // }, [])
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
    }
    const onFilterChange = (e) => {
        gridApi.setQuickFilter(e.target.value);
    }
    const onBtnExport = () => {
        gridApi.exportDataAsCsv();
    };
    return (
        <div className="ag-theme-alpine" style={{ width: 'auto', height: 500 }}>
            <h1 className='h1'>ListOfBanks</h1>
            {/* <h5>Setting unique column to pin
                <button onClick={() => setPinned('left')}>Left</button>
                <button onClick={() => setPinned('right')}>Right</button>
                <button onClick={() => setPinned('reset')}>Reset</button>
            </h5> */}
            {/* <button onClick={() => onBtnExport()}>
                Download CSV export file
            </button> */}
            <div style={{ flex: 1, flexDirection: 'column' }}>

                <input className='inputType'
                    type='search'
                    placeholder='search here...'
                    onChange={onFilterChange}
                    autoComplete='true'>
                </input>
            </div>

            <AgGridReact
                rowData={rowData}
                columnDefs={columndef}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                pagination={true}
                paginationAutoPageSize={true}
            // sideBar={sideBar}
            // alwaysShowHorizontalScroll={true}
            // alwaysShowVerticalScroll={true}
            />
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default ListOfBanks;