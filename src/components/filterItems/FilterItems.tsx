import {FC, memo} from 'react';
import style from './FilterItems.module.scss';
import RoleList from '../roleList/RoleList';

interface IFilterItems {
  filter: string;
  roleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  archiveFilter: () => void;
}

const FilterItems: FC<IFilterItems> = ({filter, roleFilter, archiveFilter}) => {
  return (
    <div className={style.filter_container}>
      <p>filter by role</p>
      <RoleList role={filter} onChange={roleFilter} />
      <p>filter by archive</p>
      <input type='checkbox' onClick={archiveFilter} />
    </div>
  );
};

export default memo(FilterItems);
