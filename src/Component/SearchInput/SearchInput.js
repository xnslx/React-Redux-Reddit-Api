import React, {useState} from 'react'

const SearchInput = () => {
    const sortInitialValue = ['relevance', 'hot', 'top', 'new']
    const limitInitialValue = ['5', '10','15', '20']
    const [query, setQuery] = useState('')
    const [sortValue, setSortValue] = useState(sortInitialValue[0])
    const [limitValue, setLimitValue] = useState(limitInitialValue[0])
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search Term..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <br />
            <br />
            <label>
                Sort By:
                <select onChange={(e) => setSortValue(e.target.value)}>
                    {sortInitialValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select onChange={(e) => setLimitValue(e.target.value)}>
                    {limitInitialValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <br />
            <br />
            <input type="submit" value="search"/>
        </form>
    )
};

export default SearchInput;
