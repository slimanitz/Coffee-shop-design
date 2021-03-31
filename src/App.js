import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}>
          Space 1
        </Grid>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={0} sm={2}>
          Space 2
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
