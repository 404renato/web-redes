import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const useReduxState = () => useSelector((state: RootState) => state)
