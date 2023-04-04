import {fetchItem} from '@src/components/store/action/employeesAction';
import Employee from '@src/types';
import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import useInput from '@src/components/hooks/input';
import RoleList from '@src/components/roleList/RoleList';
import useCustomDispatch from '@src/components/hooks/useCustomDispatch';
import style from './EmployeeId.module.scss';

const EmployeeId = () => {
  const [data, setData] = useState({} as Employee);
  const [edit, setEdit] = useState<boolean>(false);
  const [archive, setArchive] = useState<boolean>(false);
  const [selectRole, setSelectRole] = useState<string>('cook');
  const changeName = useInput();
  const changePhone = useInput();
  const cnangeBirthday = useInput();
  const {id} = useParams();
  const {editEmployee} = useCustomDispatch();

  useEffect(() => {
    fetchItem(id, setData);
  }, [id]);

  const changeRole = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectRole(e.target.value);
    },
    [setSelectRole],
  );

  const changeArchive = useCallback(() => {
    setArchive(!archive);
  }, [archive]);

  const onEditHandler = useCallback(() => {
    setEdit(!edit);
    if (
      cnangeBirthday.value.length &&
      changeName.value.length &&
      changePhone.value.length
    ) {
      editEmployee({
        id,
        birthday: cnangeBirthday.value,
        isArchive: archive,
        name: changeName.value,
        phone: changePhone.value,
        role: selectRole,
      });
    }
  }, [
    archive,
    changeName.value,
    changePhone.value,
    cnangeBirthday.value,
    edit,
    editEmployee,
    id,
    selectRole,
  ]);

  const {name, role, phone, isArchive} = data;
  return (
    <div className={style.employee_container}>
      {edit ? (
        <>
          <input placeholder='имя' {...changeName} />
          <input placeholder='телефон' {...changePhone} />
          <input placeholder='дата рождения' {...cnangeBirthday} />
          <RoleList role={selectRole} onChange={changeRole} />
          <input
            placeholder='в архиве'
            type='checkbox'
            onChange={changeArchive}
          />
        </>
      ) : (
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
          <li className={style.list_item}>
            <p className={style.list_item_par}>В архиве:</p>
            <input
              className={style.list_item_atr}
              disabled
              type='checkbox'
              checked={isArchive}
            />
          </li>
        </ul>
      )}

      <button onClick={onEditHandler} type='button'>
        {edit ? 'сохранить' : 'редактировать'}
      </button>
    </div>
  );
};

export default EmployeeId;
