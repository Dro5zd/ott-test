import React from 'react';
import {FilterButton, FilterList, FilterListItem} from "./Filter.styled";
import {filters} from "../../data/data";

export const Filter = () => {
    return (
        <FilterList>
            {filters.map(({id, active, title}) => <FilterListItem key={id} >
                <FilterButton active={active}>{title}</FilterButton>
            </FilterListItem>)}
        </FilterList>
    );
};
