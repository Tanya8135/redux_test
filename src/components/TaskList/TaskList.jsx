import css from './TaskList.module.css';

const TaskList = () => {
  return (
    <ul className={css.list}>
      {[].map(task => (
        <li className={css.listItem} key={task.id}></li>
      ))}
    </ul>
  );
};

export default TaskList;
