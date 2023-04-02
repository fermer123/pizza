import Employee from '@src/types';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import style from './EmployeeItem.module.scss';

const EmployeeItem: FC<Employee> = ({id, name, phone, role}) => {
  return (
    <Link to={`/employee/${id}`}>
      <div className={style.employee_container}>
        <ul className={style.list}>
          <li className={style.list_item}>
            <p className={style.list_item_par}>Имя:</p>
            <p className={style.list_item_atr}>{name}</p>
          </li>
          <li className={style.list_item}>
            <p className={style.list_item_par}>Должность:</p>
            <p className={style.list_item_atr}>{role}</p>
          </li>
          <li className={style.list_item}>
            <p className={style.list_item_par}>Телефон:</p>
            <p className={style.list_item_atr}>{phone}</p>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default EmployeeItem;
