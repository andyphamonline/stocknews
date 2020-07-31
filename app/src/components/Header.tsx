import React from "react";
import styled from "styled-components";
import logo from "../logo.jpg";

const HeaderContainer = styled.div`
    border: 1px solid black;
    padding-bottom: 20px;

    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }

    .logo,
    .login {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 100px;
    }

    .heading {
        text-align: center;
    }

    .searchBox {
        padding: 0 20px;
    }

    .searchBox input {
        width: 100%;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="A bull and a bear read news" />
                </div>
                <div className="heading">
                    <h1>STOCK NEWS</h1>
                    <h2>Only News That You Care About</h2>
                </div>
                <div className="login">
                    <div>Andy</div>
                </div>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Search a stock symbol" />
            </div>
        </HeaderContainer>
    );
}
