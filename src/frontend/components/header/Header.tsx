import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Search from '../search/Search'
import logo from '../../logo.jpg'
import {
  colorBlack,
  colorGreen,
  colorRed,
  getGutter,
  logoAlt,
  slogan,
  title,
} from '../../lib/index'

const HeaderWrapper = styled.div`
  padding: ${getGutter(2)}px;
  border: 1px solid ${colorBlack};

  @media only screen and (max-width: 767px) {
    padding: 0;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    width: ${getGutter(10)}px;
  }

  .heading {
    text-align: center;
  }

  .heading h1 {
    color: ${colorGreen};
  }

  .heading h2 {
    color: ${colorRed};
  }
`

export default function Header(): ReactElement {
  return (
    <HeaderWrapper>
      <div className="header">
        <div className="logo">
          <img src={logo} alt={logoAlt} />
        </div>
        <div className="heading">
          <h1>{title}</h1>
          <h2>{slogan}</h2>
        </div>
        <div className="signin">Andy</div>
      </div>
      <Search />
    </HeaderWrapper>
  )
}
