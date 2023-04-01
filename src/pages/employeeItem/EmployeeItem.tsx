import Employee from '@src/types';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import style from './EmployeeItem.module.scss';

const EmployeeItem: FC<Employee> = ({id, name, phone, role}) => {
  return (
    <div className={style.employee_container}>
      <Link to={`/employee/${id}`}>
        <ul className={style._list}>
          <li>
            <p>Имя:</p>
            <p>{name}</p>
          </li>
          <li>
            <p>Должность:</p>
            <p>{role}</p>
          </li>
          <li>
            <p>Телефон:</p>
            <p>{phone}</p>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default EmployeeItem;
