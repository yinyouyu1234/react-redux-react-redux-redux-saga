export const increase = {
  type: '涨工资2'
}
export const decrease = {
  type: '扣工资2'
}

export const getListData = (data) => ({
  type: 'getListData',
  value: data
})

export const getListDataSagas = {
  type: 'get_list',
}