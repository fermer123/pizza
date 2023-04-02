import useTypeSelector from '@src/components/hooks/useTypeSelector';
import {useEffect} from 'react';
import useCustomDispatch from '@src/components/hooks/useCustomDispatch';
import EmployeeItem from '../employeeItem/EmployeeItem';
import style from './Employees.module.scss';

const Employees = () => {
  const employees = useTypeSelector((state) => state.employees.employees);
  const {fetchItems} = useCustomDispatch();

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.employees_container}>
      {employees?.map((e) => (
        <EmployeeItem {...e} key={e.id} />
      ))}
    </div>
  );
};

export default Employees;
