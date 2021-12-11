import React, {FunctionComponent} from 'react'
import {Button, ButtonProps} from '@mui/material';
// @ts-ignore
import styled from 'styled-components';
import Link from 'next/link'

const StyleButton = styled(Button)`
  padding: 1em;
  border-radius: 10px;
  font-size: 1.25em;
  font-weight: normal;
  color: var(--secondary);
  :hover{
    font-weight: bold;
  }
`

interface MainButtonProps extends ButtonProps {
  href: string
}

const NavigationTile: FunctionComponent<MainButtonProps> = ({href, children}) => (
  <Link href={href}>
    <StyleButton>
      {children}
    </StyleButton>
  </Link>
)

export default NavigationTile;
