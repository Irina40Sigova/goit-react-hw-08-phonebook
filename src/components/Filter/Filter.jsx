import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { Form } from 'react-bootstrap';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <Form.Group className="mb-3" controlId="findContacts">
      <Form.Label> Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Taras"
        onChange={onChange}
        value={filterValue}
      />
    </Form.Group>
  );
};
