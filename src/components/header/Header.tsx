import {FC, useCallback, useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid';
import style from './Header.module.scss';
import AddNewItem from '../addNewItem/AddNewItem';
import useCustomDispatch from '../hooks/useCustomDispatch';
import useInput from '../hooks/input';
import RoleFilterSelect from '../roleList/RoleList';
import FilterItems from '../filterItems/FilterItems';

const Header: FC = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectRole, setSelectRole] = useState<string>('cook');
  const [filter, setFilter] = useState<string>('');
  const [archive, setArchive] = useState<boolean>(false);
  const {addEmployee, filterByRole, filterByArchive} = useCustomDispatch();
  const name = useInput();
  const phone = useInput();
  const birthday = useInput();

  const archiveFilter = useCallback(() => {
    setArchive(!archive);
    filterByArchive(archive);
  }, [archive, filterByArchive]);

  const roleFilter = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
      filterByRole(filter);
    },
    [filter, filterByRole],
  );

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
          <input placeholder='телефон' {...phone} />
          <input placeholder='дата рождения' {...birthday} />
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
          <AddNewItem title='добавить' addNewEmployee={switchEdit} />
        </div>
      )}
    </div>
  );
};

export default Header;
