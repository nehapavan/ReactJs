 <label>Available
                <input type='CheckBox'
                    onChange={() => setFilterState(' Available')}
                    checked={filterState === 'Available'}
                ></input>
            </label>
            <br />
            <br />
            <label>Not Available
                <input type='CheckBox'
                    checked={filterState === 'Not Available'}
                    onChange={() => setFilterState(' Not Available')}
                ></input>
            </label>
            <br />
            <br />
            <label>In Progress
                <input type='CheckBox'
                    onChange={() => setFilterState(' IN Progress')}
                    checked={filterState === 'IN Progress'}
                ></input>
            </label>