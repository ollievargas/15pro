import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './Provider';


const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`
const ButtonEl = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 60px yellow;
    `}
`

function PropCase (lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
                <ButtonEl 
                    active={page === name}
                    onClick={() => setPage(name)}
                >
                    {PropCase(name)}
                </ButtonEl>
            )}
        </AppContext.Consumer>       
    )
}

export default function() {
    return (
        <Bar>
            <Logo> Crypdough </Logo>
            <div></div>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
        </Bar>
    );
}