import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {rootReducerType} from '../store';

const useTypeSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
export default useTypeSelector;
