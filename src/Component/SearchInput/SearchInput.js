import React, {useRef} from 'react';
import { connect } from 'react-redux';
import {fetchPosts, userInput } from '../../Action/Action';
import {selectSort, selectLimit} from '../../Action/Action';
// import {selectedSort} from '../../Reducer/Reducer';

const SearchInput = (props) => {
    console.log(props)

    const textInput = useRef('')

    const inputChangeHandler = (e) => {
        props.dispatch(userInput(e.target.value))
    }
    const sortChangeHandler = (selectedSort) => {
        console.log(selectedSort)
        props.dispatch(selectSort(selectedSort))
    }

    const limitChangeHandler = () => {
        props.dispatch(selectLimit(props.selectedLimit))
    }

    const submitHandler = () => {
        props.dispatch(fetchPosts(props.query))
    }
    return (
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
                <select onChange={sortChangeHandler}>
                    {props.sorts.map(value => (
                        <option value={props.selectedSort} key={value}>{value}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select onChange={limitChangeHandler}>
                    {props.limits.map(value => (
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
        query:state.posts.query,
        limits:state.selectedLimit.limitSelection,
        sorts:state.selectedSort.sortSelection,
        selectedLimit:state.selectedLimit.selectedLimitOption,
        selectedSort:state.selectedSort.selectedSortOption,
    }
}

 
export default connect(mapStateToProps)(SearchInput);
