import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Avatar, Grid } from "@material-ui/core";
import CoffeeMakerList from "./constants";

const Content = () => {
  const getCoffeeCarList = (coffeMakerObject) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeMakerObject} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={4}>
      {CoffeeMakerList.map((CoffeeObj) => getCoffeeCarList(CoffeeObj))}
    </Grid>
  );
};

export default Content;
