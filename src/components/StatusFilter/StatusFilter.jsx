import { useSelector } from 'react-redux';

import Button from 'components/Button';
import { statusFilter } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

import css from './StatusFilter.module.css';

const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilter.all}>All</Button>
      <Button selected={filter === statusFilter.active}>Active</Button>
      <Button selected={filter === statusFilter.completed}>Completed</Button>
    </div>
  );
};

export default StatusFilter;
