import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '../../../../store/modules/entire/actionCreators'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  //从redux获取roomList数据
  const { totalCount,currentPage } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount,
    currentPage:state.entire.currentPage
  }),shallowEqual)

  //计算
  const totalPage=Math.ceil(totalCount/20)
  const startCount=currentPage*20+1
  const endCount =(currentPage+1) *20

  //事件处理
  const dispatch=useDispatch()
  function pageChangeHandle(event,pageCount){
    //回到顶部
    window.scrollTo(0,0)
    //更新最新的页码
    dispatch(fetchRoomListAction(pageCount-1))
  }

  return (
    <PaginationWrapper>
      <div className='page-info'>
        <Pagination count={totalPage} onChange={pageChangeHandle}/>
        <div className='info'>
          第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination