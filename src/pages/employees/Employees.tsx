import useTypeSelector from '@src/components/hooks/useTypeSelector';
import EmployeeItem from '../employeeItem/EmployeeItem';

const Employees = () => {
  const employees = useTypeSelector((state) => state.employees.employees);

  return (
    <div>
      {employees?.map((e) => (
        <EmployeeItem {...e} key={e.id} />
      ))}
    </div>
  );
};

export default Employees;
