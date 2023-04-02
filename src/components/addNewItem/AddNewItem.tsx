import {FC} from 'react';
import Employee from '@src/types';
import style from './AddNewItem.module.scss';

interface IAddNewItem {
  addEmployee: (el: Employee) => void;
}
const AddNewItem: FC<IAddNewItem> = ({addEmployee}) => {
  return (
    <button type='button' className={style.btn}>
      Добавить
    </button>
  );
};

export default AddNewItem;
