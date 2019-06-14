import { GET_LIST_DATA_SAGA, GET_LIST_DATA } from './typeCreater'

export const getListData = (data) => ({
  type: GET_LIST_DATA,
  value: data
})

export const getListDataSagas = (data) => ({
  type: GET_LIST_DATA_SAGA,
  value: data
})