import React from 'react';
import {
    FeatureImg,
    FeatureItem, FeaturesList, FeatureSubTitle, FeatureTitle,
} from './Fetures.styled';
import {features} from "../../data/data";

export const Features = () => {

    return (
        <FeaturesList>
            {features.map(({id, img, title, subTitle}) => {
                return (
                    <FeatureItem key={id}>
                        <FeatureImg src={img} alt=""/>
                        <FeatureTitle>{title}</FeatureTitle>
                        <FeatureSubTitle>{subTitle}</FeatureSubTitle>
                    </FeatureItem>
                )
            })}
        </FeaturesList>
    );
};
