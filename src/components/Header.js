import React from 'react'
import styled from 'styled-components'
import { Header } from 'semantic-ui-react'

const HeaderWrapper = styled.div`
  padding: 10px 0 0 10px;
  grid-column: 3;
  grid-row: 1;
`

export default ({ channelName }) => (
  <HeaderWrapper>
    <Header>#{channelName}</Header>
  </HeaderWrapper>
)
