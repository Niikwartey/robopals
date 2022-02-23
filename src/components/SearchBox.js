import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../actions';

const SearchBox = ({ handleSubmitSearch }) => {
  return (
     <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search for any one'
        onChange={handleSubmitSearch}
      />
     </div>
  );
};

const mapDispatchTopProps = (dispatch) => {
  return {
    handleSubmitSearch: (event) => {
      let action = updateSearchTerm(event.target.value);
      dispatch(action);
    }
  }
}
const mapStateToProps = (state) => {
  return { value : state.searchRobots.SearchTerm };
}

export default connect(mapStateToProps, mapDispatchTopProps)(SearchBox);