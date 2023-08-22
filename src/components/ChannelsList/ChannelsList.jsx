import React from 'react';
import {ChannelLogo, ChannelListItem, StyledChannelsList} from "./ChannelsList.styled";
import {channels} from "../../data/data";

export const ChannelsList = () => {
    return (
        <StyledChannelsList>
            {channels.map(({id, logo, name, color}) => <ChannelListItem key={id} color={color}>
                <ChannelLogo src={logo} alt={name}/>
            </ChannelListItem>)}
        </StyledChannelsList>
    );
};
