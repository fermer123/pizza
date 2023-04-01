import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreators from '../store/reducers/index';

const useCustomDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
export default useCustomDispatch;
