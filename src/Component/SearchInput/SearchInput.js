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
                    {props.sorts.map(sort => (
                        <option value={sort.value} key={sort.value}>{sort.displayValue}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select onChange={limitChangeHandler}>
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
    )
};

const mapStateToProps = state => {
    return {
        query:state.posts.query,
        sorts:state.selectedSort.sortOptions.map(option => {
            return option
        }),
        limits:state.selectedLimit.limitOptions.map(option => {
            return option
        })
    }
}

 
export default connect(mapStateToProps)(SearchInput);
