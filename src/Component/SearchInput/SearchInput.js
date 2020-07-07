import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts, userInput } from '../../Action/Action';
import {selectSort, selectLimit} from '../../Action/Action';
// import {selectedSort} from '../../Reducer/Reducer';

const SearchInput = (props) => {
    console.log(props)

    const inputChangeHandler = (e) => {
        props.dispatch(userInput(e.target.value))
    }
    const sortChangeHandler = (sortOption) => {
        props.dispatch(selectSort(sortOption))
    }

    const limitChangeHandler = (limitOption) => {
        props.dispatch(selectLimit(limitOption))
    }

    const submitHandler = () => {
        props.dispatch(fetchPosts())
    }
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search Term..."
                value={props.query}
                onChange={inputChangeHandler}
            />
            <br />
            <br />
            <label>
                Sort By:
                <select onChange={sortChangeHandler}>
                    {props.sortValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select onChange={limitChangeHandler}>
                    {props.limitValue.map(value => (
                        <option value={value} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <br />
            <br />
            <br />
            <input type="submit" value="search" onClick={submitHandler}/>
        </form>
    )
};

const mapStateToProps = state => {
    console.log('state', state)
    return {
        selectedSort:state.sort,
        posts:state.postReducer.posts,
        query:state.postReducer.query,
        sortValue:state.postReducer.sortValue,
        limitValue:state.postReducer.limitValue
    }
}

 
export default connect(mapStateToProps)(SearchInput);
