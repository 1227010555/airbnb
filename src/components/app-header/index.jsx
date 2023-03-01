import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import useScrollPosition from '@/hooks/useScrollPosition'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  //定义内部状态
  const [isSearch, setIsSearch] = useState(false)

  //redux获取数据
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  //监听滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  //没弹出前，一直记录
  if (!isSearch) prevY.current = scrollY
  //弹出搜索功能的情况下,判断滚动距离是否大于30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)


  //透明度逻辑
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader