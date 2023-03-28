import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Employees from './pages/employees/Employees';
import EmployeeId from './pages/employeeId/EmployeeId';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Employees />} />
      <Route path='/employee/:id' element={<EmployeeId />} />
    </Routes>
  );
};

export default App;
