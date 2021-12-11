import React, {FunctionComponent} from 'react'
import {Button, ButtonProps} from '@mui/material';
// @ts-ignore
import styled from 'styled-components';
import Link from 'next/link'

const StyleButton = styled(Button)`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 1.25em;
  font-weight: bold;
  width: 16em;
  color: #000000;
  box-shadow: 0 0 4px 4px #ccc;
  border-radius: 6px;
`

interface MainButtonProps extends ButtonProps {
}

const NavigationTile: FunctionComponent<MainButtonProps> = ({children}) => (
  <Link href="/">
    <StyleButton>
      {children}
    </StyleButton>
  </Link>
)

export default NavigationTile;
