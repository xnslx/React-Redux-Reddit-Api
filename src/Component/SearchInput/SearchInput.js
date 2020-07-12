import React, {useRef} from 'react';
import { connect } from 'react-redux';
import {fetchPosts, userInput } from '../../Action/Action';
import {selectSort, selectLimit} from '../../Action/Action';
// import {selectedSort} from '../../Reducer/Reducer';
import Posts from '../Posts/Posts';

const SearchInput = (props) => {

    const textInput = useRef('')

    const inputChangeHandler = (e) => {
        props.dispatch(userInput(e.target.value))
    }
    const sortChangeHandler = (e) => {
        // console.log(e.target.value)
        // console.log(props.sortValue)
        props.dispatch(selectSort(e.target.value))
    }

    const limitChangeHandler = (e) => {
        props.dispatch(selectLimit(e.target.value))
    }

    const submitHandler = async e => {
        e.preventDefault()
        const result = await fetchPosts(
            props.query,
            props.sortValue,
            props.limitValue
        )
        props.dispatch(result)
    }

    return (
        <>
            <form>
                <input 
                    type="text" 
                    ref={textInput}
                    placeholder="Search Term..."
                    onBlur={inputChangeHandler}
                />
                <br />
                <br />
                <label>
                    Sort By:
                    <select onChange={sortChangeHandler} value={props.sortValue}>
                        {props.sorts.map(sort => (
                            <option value={sort.value} key={sort.value}>{sort.displayValue}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Limit:
                    <select onChange={limitChangeHandler} value={props.limitValue}>
                        {props.limits.map(limit => (
                            <option value={limit.value} key={limit.value}>{limit.displayValue}</option>
                        ))}
                    </select>
                </label>
                <br />
                <br />
                <br />
                <input type="submit" value="search" onClick={submitHandler}/>
            </form>
            <Posts posts={props.posts}/>
        </>
    )
};

const mapStateToProps = state => {
    console.log('state', state)
    return {
        posts:state.posts.posts,
        query:state.posts.query,
        sorts:state.selectedSort.sortOptions.map(option => {
            return option
        }),
        limits:state.selectedLimit.limitOptions.map(option => {
            return option
        }),
        sortValue:state.selectedSort.value,
        limitValue:state.selectedLimit.value
    }
}

 
export default connect(mapStateToProps)(SearchInput);
