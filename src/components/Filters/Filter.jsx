import PropTypes from 'prop-types';

const Filter = function ({ searchFilter }) {
  return (
    <label>
      Find contacts by name
      <input
       placeholder='Enter a name'
        type="text"
        name="filter"
        onChange={e => searchFilter(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  searchFilter: PropTypes.func.isRequired,
};

export default Filter;