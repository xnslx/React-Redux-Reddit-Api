import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts, userInput } from '../../Action/Action';
import {selectSort, selectLimit} from '../../Action/Action';

const SearchInput = (props) => {
    
    // useEffect(() => {
    //     props.dispatch(fetchPosts(props.posts))
    // },[props.posts, props])
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search Term..."
                value={props.query}
                onChange={() =>props.onInput(props.query)}
            />
            <br />
            <br />
            <label>
                Sort By:
                <select onChange={() => props.onSelectSort()}>
                    {props.sortValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select onChange={() => props.onSelectLimit()}>
                    {props.limitValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <br />
            <br />
            <br />
            <input type="submit" value="search" onClick={() => props.onSubmit()}/>
        </form>
    )
};

const mapStateToProps = state => {
    // console.log('state', state)
    return {
        posts:state.postReducer.posts,
        query:state.postReducer.query,
        sortValue:state.postReducer.sortValue,
        limitValue:state.postReducer.limitValue
    }
}

const mapDispatchToProps = dispatch => {
    // console.log(dispatch)
    return {
        onInput: () => dispatch(userInput()),
        onSubmit: () => dispatch(fetchPosts()),
        onSelectSort: () => dispatch(selectSort()),
        onSelectLimit: () => dispatch(selectLimit())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
