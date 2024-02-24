import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';

import css from './Filter.module.css'


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleFilter = ({ target: { value } }) => { 
		dispatch(setFilter(value));
	}

    return (
        <div className={css.wrapper}>
            <input type="text" name="filter" placeholder="Find contact" className={css.input} value={filter} onChange={handleFilter} />
        </div>
    )
}


export default Filter;