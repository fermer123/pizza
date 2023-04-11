import {FC} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Employees from './pages/employees/Employees';
import EmployeeId from './pages/employeeId/EmployeeId';
import Header from './components/header/Header';
import style from './App.module.scss';

const App: FC = () => {
  const location = useLocation();
  return (
    <div className={style.app_container}>
      {location.pathname === '/' ? <Header /> : ''}
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/employee/:id' element={<EmployeeId />} />
      </Routes>
    </div>
  );
};

export default App;
