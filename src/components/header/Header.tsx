import {FC, useCallback, useEffect, useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid';
import MaskedInput from 'react-text-mask';
import style from './Header.module.scss';
import AddNewItem from '../addNewItem/AddNewItem';
import useCustomDispatch from '../hooks/useCustomDispatch';
import useInput from '../hooks/input';
import RoleFilterSelect from '../roleList/RoleList';
import FilterItems from '../filterItems/FilterItems';

const Header: FC = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectRole, setSelectRole] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [archive, setArchive] = useState<boolean>(false);
  const [sortName, setSortName] = useState<boolean>(false);
  const [sortBirthday, setSortBirthday] = useState<boolean>(false);
  const {
    addEmployee,
    filterByRole,
    filterByArchive,
    sortByName,
    sortByBirthday,
  } = useCustomDispatch();
  const name = useInput();
  const phone = useInput();
  const birthday = useInput();

  const sortByNameHandler = useCallback(() => {
    setSortName(!sortName);
    sortByName(sortName);
  }, [sortByName, sortName]);

  const sortByBirthdayHandler = useCallback(() => {
    setSortBirthday(!sortBirthday);
    sortByBirthday(sortBirthday);
  }, [sortByBirthday, sortBirthday]);

  const archiveFilter = useCallback(() => {
    if (archive === false) {
      setArchive(true);
      filterByArchive(archive);
    } else {
      filterByArchive(null);
      setArchive(false);
    }
  }, [archive, filterByArchive]);

  const roleFilter = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
    },
    [setFilter],
  );

  useEffect(() => {
    filterByRole(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const resetFilter = useCallback(() => {
    setFilter('');
    filterByRole('');
  }, [filterByRole]);

  const switchEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const onChangeRole = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectRole(e.target.value);
    },
    [setSelectRole],
  );

  const addNewEmployee = () => {
    if (name.value.length && phone.value.length && birthday.value.length) {
      addEmployee({
        name: name.value,
        phone: phone.value,
        birthday: birthday.value,
        id: uuidv4(),
        isArchive: false,
        role: selectRole,
      });
    }
    switchEdit();
  };

  return (
    <div className={style.header_container}>
      {edit ? (
        <div className={style.header_container_form}>
          <input placeholder='имя' {...name} />
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
            {...phone}
          />
          <MaskedInput
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            placeholder='дата рождения'
            {...birthday}
          />
          <RoleFilterSelect onChange={onChangeRole} role={selectRole} />
          <AddNewItem title='добавить' addNewEmployee={addNewEmployee} />
        </div>
      ) : (
        <div className={style.header_container_btn}>
          <FilterItems
            archive={archive}
            archiveFilter={archiveFilter}
            filter={filter}
            roleFilter={roleFilter}
          />
          <button
            onClick={sortByNameHandler}
            type='button'
            className={style.header_container_btn_reset}>
            сортировать по имени
          </button>

          <button
            onClick={sortByBirthdayHandler}
            type='button'
            className={style.header_container_btn_reset}>
            сортировать по ДР
          </button>
          <button
            className={style.header_container_btn_reset}
            type='button'
            onClick={resetFilter}>
            сбросить фильтр
          </button>
          <AddNewItem title='добавить' addNewEmployee={switchEdit} />
        </div>
      )}
    </div>
  );
};

export default Header;
