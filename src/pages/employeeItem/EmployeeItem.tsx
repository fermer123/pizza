import Employee from '@src/types';
import {FC} from 'react';
import {Link} from 'react-router-dom';

const EmployeeItem: FC<Employee> = ({
  birthday,
  id,
  isArchive,
  name,
  phone,
  role,
}) => {
  return (
    <div>
      <Link to={`/employee/${id}`}>{name}</Link>
    </div>
  );
};

export default EmployeeItem;
