import { SearchInput, SearchInputContainer } from './FilterStyled';
export const SearchContainer = ({ filter, handleSearch }) => {
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
