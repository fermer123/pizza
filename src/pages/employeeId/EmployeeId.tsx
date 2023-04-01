import {fetchItem} from '@src/components/store/action/employeesAction';
import Employee from '@src/types';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const EmployeeId = () => {
  const [data, setData] = useState({} as Employee);
  const {id} = useParams();

  useEffect(() => {
    fetchItem(id, setData);
  }, [id]);
  const {name} = data;
  return <div>{name}</div>;
};

export default EmployeeId;
