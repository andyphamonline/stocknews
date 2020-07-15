import React, { Fragment } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	h1 {
		color: red;
	}
`;

export default function Header() {
	return (
		<HeaderContainer>
			<h1>Header</h1>
		</HeaderContainer>
	);
}
