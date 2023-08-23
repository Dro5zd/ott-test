import React from 'react';
import {QuickLinksLink, QuickLinksList, QuickLinksListItem} from "./QuickLinks.styled";
import {links} from "../../data/data";

export const QuickLinks = () => {
    return (
        <QuickLinksList>
            {links.map(({id, title,}) => <QuickLinksListItem key={id}>
                <QuickLinksLink href={'/'} target="_blank">{title}</QuickLinksLink>
            </QuickLinksListItem>)}
        </QuickLinksList>
    );
};
