import useTypeSelector from '@src/components/hooks/useTypeSelector';

const Employees = () => {
  const {employees} = useTypeSelector((state) => state.employees);
  console.log(employees);
  return <div>asd</div>;
};

export default Employees;
