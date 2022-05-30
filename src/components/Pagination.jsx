import React, { useState } from "react";
import { Button, ButtonGroup, Select} from '@chakra-ui/react'
import product from "./Product"
const Pagination = (props,count) => {
  // TODO: Remove below const and instead import them from chakra
//  Button = () => <div />;
//    ButtonGroup = () => <div />;
//    Select = () => <div />;
 
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">first</Button>
      <Button data-cy="pagination-previous-button">previous</Button>
      <Select data-cy="pagination-limit-select" onChange={count}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">next</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
