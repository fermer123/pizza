import {fetchItem} from '@src/components/store/action/employeesAction';
import Employee from '@src/types';
import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import useInput from '@src/components/hooks/input';
import RoleList from '@src/components/roleList/RoleList';
import useCustomDispatch from '@src/components/hooks/useCustomDispatch';
import MaskedInput from 'react-text-mask';
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
  const {name, role, phone, isArchive, birthday} = data;

  useEffect(() => {
    fetchItem(id, setData);
  }, [id, edit]);

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
    editEmployee({
      id,
      birthday: cnangeBirthday.value || birthday,
      isArchive: archive,
      name: changeName.value || name,
      phone: changePhone.value || phone,
      role: selectRole,
    });
  }, [
    archive,
    birthday,
    changeName.value,
    changePhone.value,
    cnangeBirthday.value,
    edit,
    editEmployee,
    id,
    name,
    phone,
    selectRole,
  ]);

  return (
    <div className={style.employee_container}>
      {edit ? (
        <div className={style.edit_form}>
          <input placeholder='имя' {...changeName} />
          <MaskedInput
            mask={[
              '(',
              /[1-9]/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ]}
            placeholder='телефон'
            {...changePhone}
          />
          <MaskedInput
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            placeholder='дата рождения'
            {...cnangeBirthday}
          />
          <RoleList role={selectRole} onChange={changeRole} />
          <div className={style.edit_form_archive}>
            <p>В архиве</p>
            <input
              placeholder='в архиве'
              type='checkbox'
              onChange={changeArchive}
            />
          </div>
        </div>
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
