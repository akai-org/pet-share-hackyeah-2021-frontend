import React, {FunctionComponent, PropsWithChildren} from "react";
import Link from 'next/link'

export interface Props {
  href: string
}

const NavBarItem: FunctionComponent<Props> = (props: PropsWithChildren<Props>) => (
  <Link href={props.href}>{props.children}</Link>
)

export default NavBarItem;
