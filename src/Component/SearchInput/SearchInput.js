import React, {useRef} from 'react';
import { connect } from 'react-redux';
import {fetchPosts, userInput } from '../../Action/Action';
import {selectSort, selectLimit} from '../../Action/Action';
// import {selectedSort} from '../../Reducer/Reducer';

const SearchInput = (props) => {

    const sortOptions = [
        {value:'relevance', displayValue:'relevance'},
        {value:'hot', displayValue:'hot'},
        {value:'top', displayValue:'top'},
        {value:'new', displayValue:'new'}
    ]

    const limitOptions = [
        {value:'5', displayValue:'5'},
        {value:'10', displayValue:'10'},
        {value:'15', displayValue:'15'},
        {value:'20', displayValue:'20'}
    ]

    // console.log(props)

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
                    {sortOptions.map(sort => (
                        <option value={sort.value} key={sort.value}>{sort.value}</option>
                    ))}
                </select>
            </label>
            <label>
                Limit:
                <select onChange={limitChangeHandler}>
                    {limitOptions.map(limit => (
                        <option value={limit.value} key={limit.value}>{limit.value}</option>
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
        // sorts:state.selectedSort.sortOptions.map(option => {
        //     return option
        // }),
        // limits:state.selectedLimit.limitOptions.map(option => {
        //     return option
        // }),
        sortValue:state.selectedSort,
        limitValue:state.selectedLimit
    }
}

 
export default connect(mapStateToProps)(SearchInput);
