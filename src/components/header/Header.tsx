import {FC, useState} from 'react';
import Employee from '@src/types';
import style from './Header.module.scss';
import AddNewItem from '../addNewItem/AddNewItem';
import useCustomDispatch from '../hooks/useCustomDispatch';

const Header: FC = () => {
  const [newEmployee, setNewEmployee] = useState<Employee>();
  const [edit, setEdit] = useState<boolean>(false);
  const {addEmployee} = useCustomDispatch();
  return (
    <div className={style.header_container}>
      <AddNewItem addEmployee={addEmployee} />
    </div>
  );
};

export default Header;
