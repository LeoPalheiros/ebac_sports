import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootReducer, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector
