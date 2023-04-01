import Employee from '@src/types';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import style from './EmployeeItem.module.scss';

const EmployeeItem: FC<Employee> = ({
  birthday,
  id,
  isArchive,
  name,
  phone,
  role,
}) => {
  return (
    <div className={style.employee_container}>
      <Link to={`/employee/${id}`}>{name}</Link>
    </div>
  );
};

export default EmployeeItem;
