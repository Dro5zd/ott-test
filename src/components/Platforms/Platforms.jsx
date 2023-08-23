import React from 'react';
import {platforms} from "../../data/data";
import {PlatformListItem, PlatformLogo, PlatformsList} from "./Platforms.styled";

export const Platforms = () => {
    return (
        <PlatformsList>
            {platforms.map(({id, logo, name}) => <PlatformListItem key={id}>
                <PlatformLogo src={logo} alt={name}/>
            </PlatformListItem>)}
        </PlatformsList>
    );
};
