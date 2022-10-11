import PropTypes from 'prop-types';
import { getFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { SearchInput, SearchInputContainer } from './FilterStyled';
export const SearchContainer = ({ handleSearch }) => {
  const filter = useSelector(getFilterValue);
  return (
    <SearchInputContainer>
      <SearchInput
        type="text"
        value={filter}
        onChange={handleSearch}
      ></SearchInput>
    </SearchInputContainer>
  );
};

SearchContainer.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
