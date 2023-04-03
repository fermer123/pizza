import {fetchItem} from '@src/components/store/action/employeesAction';
import Employee from '@src/types';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import style from './EmployeeId.module.scss';

const EmployeeId = () => {
  const [data, setData] = useState({} as Employee);
  const {id} = useParams();

  useEffect(() => {
    fetchItem(id, setData);
  }, [id]);
  const {name, role, phone} = data;
  return (
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
  );
};

export default EmployeeId;
