import useTypeSelector from '@src/components/hooks/useTypeSelector';
import {FC, useEffect} from 'react';
import useCustomDispatch from '@src/components/hooks/useCustomDispatch';
import EmployeeItem from '../employeeItem/EmployeeItem';
import style from './Employees.module.scss';

const Employees: FC = () => {
  const {employees, loading, error} = useTypeSelector(
    (state) => state.employees,
  );
  const {role, isArchive} = useTypeSelector((state) => state.employees);
  const {fetchItems} = useCustomDispatch();

  const filterByAllParams = employees
    .filter((e) => (isArchive === null ? e : e.isArchive === true))
    .filter((e) => (role === '' ? e : e.role.includes(role)));

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  return (
    <div data-testId='employees' className={style.employees_container}>
      {filterByAllParams?.map((e) => (
        <EmployeeItem {...e} key={e.id} />
      ))}
    </div>
  );
};

export default Employees;
