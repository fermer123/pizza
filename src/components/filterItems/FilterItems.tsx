import {FC, memo} from 'react';
import style from './FilterItems.module.scss';
import RoleList from '../roleList/RoleList';

interface IFilterItems {
  filter: string;
  roleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  archive: boolean;
  archiveFilter: () => void;
}

const FilterItems: FC<IFilterItems> = ({
  filter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  archive,
  roleFilter,
  archiveFilter,
}) => {
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
