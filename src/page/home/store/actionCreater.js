export const increase = {
  type: '涨工资'
}
export const decrease = {
  type: '扣工资'
}

export const getListData = (data) => ({
  type: 'getListData',
  value: data
})

export const getListDataSagas = {
  type: 'get_list_data_sagas',
}