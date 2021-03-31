import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Avatar, Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard
          title="Nespresso"
          subtitle="Sold by amazon prime"
          description="This is a coffe machine that will help us make coffee"
          avatarSrc="data:image/png;base64,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"
          imageSrc="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0I_YV1K4q-CiPd09NaNOcQX4E24vIojJTvyMrGLhW3xiULe0AlZftxLngApkuGIFFsFpF2jGcq_6AHtzX-bD7IM0-S8_1ETbFn3n17cLLwkmI_uoYBcwS&usqp=CAE"
        />
      </Grid>
    </Grid>
  );
};

export default Content;
