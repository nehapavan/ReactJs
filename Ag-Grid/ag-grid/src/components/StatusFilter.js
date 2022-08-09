import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

export default forwardRef((props, ref) => {

    const [filterState, setFilterState] = useState('off');

    useImperativeHandle(ref, () => {
        return {
            isFilterActive() {
                return filterState !== 'off';
            },
            doesFilterPass(params) {
                const field = props.colDef.field;
                return params.data[field] === filterState;
            },
            getModel() {
                return undefined;
            },
            setModel() {
            },

        };
    });

    useEffect(() => props.filterChangedCallback(),
        [filterState]);

    return (
        <div className='selection'>
            <div>
                {props.values.map(value => (
                    <ol>
                        <input className='selection-entry'
                            type='checkbox'
                            onClick={() => setFilterState(value)}
                            checked={filterState === (value)}
                        />
                        {value}
                    </ol>
                ))}
            </div>

        </div>);

});