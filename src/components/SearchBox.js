import React from 'react';

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

export default SearchBox;