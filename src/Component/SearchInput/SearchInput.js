import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchPosts } from '../../Action/Action';

const SearchInput = (props) => {
    // const sortInitialValue = ['relevance', 'hot', 'top', 'new']
    // const limitInitialValue = ['5', '10','15', '20']
    const [setQuery] = useState('')
    // const [setSortValue] = useState(sortInitialValue[0])
    // const [setLimitValue] = useState(limitInitialValue[0])
    useEffect(() => {
        props.dispatch(fetchPosts())
    },[props.posts, props])
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search Term..."
                value={props.query}
                onChange={e => setQuery(e.target.value)}
            />
            <br />
            <br />
            <label>
                Sort By:
                <select>
                    {props.sortValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select>
                    {props.limitValue.map(value => (
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

const mapStateToProps = state => {
    return {
        posts:state.posts,
        query:state.query,
        sortValue:state.sortValue,
        limitValue:state.limitValue
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
