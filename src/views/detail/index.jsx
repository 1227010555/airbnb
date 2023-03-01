import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfig } from '../../store/modules/main'
import DetailPictures from './c-cpns/DetailPictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfig({isFixed:false,topAlpha:false}))
  },[dispatch])

  return (
    <DetailWrapper>
      <DetailPictures/>
    </DetailWrapper>
  )
})

export default Detail