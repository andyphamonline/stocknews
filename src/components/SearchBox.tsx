import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const SearchBoxContainer = styled.div`
    padding: 0 20px;

    input {
        width: 100%;
    }
`;

export default function SearchBox() {
    const [value, setValue] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <SearchBoxContainer>
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    type="text"
                    placeholder="Search a stock symbol"
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </SearchBoxContainer>
    );
}
