import React, {useState} from 'react';
import {ChannelsList} from "../../components/ChannelsList/ChannelsList";
import {
    BtnWrapper,
    ChannelsListWrapper, ShowAllBtn, StyledArrow,
    TitleWrapper,
    TvChannelsContainer,
    TvChannelsTitle,
    TvChanneSublsTitle
} from "./TVChannels.styled";
import {Filter} from "../../components/Filter/Filter";

export const TvChannels = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleSVGClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <TvChannelsContainer>
            <TitleWrapper>
                <TvChannelsTitle>ТВ - каналы</TvChannelsTitle>
                <TvChanneSublsTitle>Национальные, познавательные, детские, кино, спортивные, новостные и многие другие
                    телеканалы</TvChanneSublsTitle>
            </TitleWrapper>

            <ChannelsListWrapper isOpen={(isClicked).toString()}>
                <Filter/>
                <ChannelsList/>
            </ChannelsListWrapper>
            <BtnWrapper>
                <ShowAllBtn onClick={handleSVGClick}>
                    Показать все
                    <StyledArrow clicked={(isClicked).toString()}/>
                </ShowAllBtn>
            </BtnWrapper>
        </TvChannelsContainer>
    );
};
