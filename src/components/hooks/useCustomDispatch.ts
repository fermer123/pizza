import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../store/action/employeesAction';

const useCustomDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
export default useCustomDispatch;
