import {FC} from 'react';
import style from './AddNewItem.module.scss';

interface IAddNewItem {
  addNewEmployee: () => void;
  title: string;
}
const AddNewItem: FC<IAddNewItem> = ({title, addNewEmployee}) => {
  return (
    <button onClick={addNewEmployee} type='button' className={style.btn}>
      {title}
    </button>
  );
};

export default AddNewItem;
