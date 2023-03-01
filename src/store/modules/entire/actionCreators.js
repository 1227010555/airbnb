import { getEntireRoomList } from "../../../services/modules/entire"
import * as actionTypes from "./constants"

export const changeCurrentPageAction =(currentPage)=>({
    type:actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction =(roomList)=>({
    type:actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction =(totalCount)=>({
    type:actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction=(isLoading)=>({
    type:actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction=(page=0)=>{
    return async (dispatch,getState)=>{
        dispatch(changeCurrentPageAction(page))

        //根据页码获取最新数据
        dispatch(changeIsLoadingAction(true))
        const res=await getEntireRoomList(page*20)
        dispatch(changeIsLoadingAction(false))

        //获取到最新数据,保存到redux
        const roomList=res.list
        const totalCount=res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}