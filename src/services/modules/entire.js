import MyRequest from "..";

export function getEntireRoomList(offset=0,size=20){
    return MyRequest.get({
        url:"/entire/list",
        params:{
            offset,
            size
        }
    })
}