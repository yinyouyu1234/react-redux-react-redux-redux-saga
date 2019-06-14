import { UP, DOWN, GET_LIST_DATA, GET_LIST } from "./typeCreater";

export const increase = {
  type: UP
}
export const decrease = {
  type: DOWN
}

export const getListData = (data) => ({
  type: GET_LIST_DATA,
  value: data
})

export const getListDataSagas = {
  type: GET_LIST,
}