import './Filter.css';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };
  return (
    <div className="Filter_box">
      <p className="Filter_title">Find contacts by name</p>
      <input
        className="Filter_input"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        name="name"
      />
    </div>
  );
};

export default Filter;
