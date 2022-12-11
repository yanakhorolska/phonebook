import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { FilterBox, FilterInput, FilterTitle } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };
  return (
    <FilterBox>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        autoComplete="off"
        onChange={handleChange}
        name="name"
      />
    </FilterBox>
  );
};

export default Filter;
