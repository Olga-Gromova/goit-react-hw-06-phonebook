import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by Name
        <input
          className={css.filterName}
          onChange={e => dispatch(filter(e.currentTarget.value))}
          type="text"
          name="filter"
        />
      </label>
    </div>
  );
};
