import { getFilterValue } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { SearchInput, SearchInputContainer } from './FilterStyled';
export const SearchContainer = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };
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
