import React, {FC, memo} from 'react';

const roles = ['cook', 'driver', 'waiter'];
interface IRoleFilterSelect {
  role: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const RoleFilterSelect: FC<IRoleFilterSelect> = ({role, onChange}) => {
  return (
    <select value={role} onChange={onChange}>
      {roles.map((e) => (
        <option key={e}>{e}</option>
      ))}
    </select>
  );
};

export default memo(RoleFilterSelect);
