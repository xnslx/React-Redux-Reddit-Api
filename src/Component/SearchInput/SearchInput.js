import React, {useState} from 'react'

const SearchInput = () => {
    const [query, setQuery] = useState('')
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
                <select>
                    <option value="relevance">relevance</option>
                    <option value="hot">hot</option>
                    <option value="top">top</option>
                    <option value="new">new</option>
                </select>
            </label>
            <label>
                Limit:
                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </label>
            <br />
            <br />
            <input type="submit" value="search"/>
        </form>
    )
};

export default SearchInput;
