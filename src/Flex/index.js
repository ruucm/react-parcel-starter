import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-columns: center;
`

const Column = styled.div`
  background: green;
  flex: 0 0 33.3%;
`

const Content = styled.div`
  background: pink;
  width: 30px;
`

function Flex() {
  return (
    <Row>
      <Column>
        <Content>1</Content>
      </Column>
      <Column>
        <Content>2</Content>
      </Column>
      <Column>
        <Content>3</Content>
      </Column>
      <Column>
        <Content>4</Content>
      </Column>
    </Row>
  )
}

export default Flex
