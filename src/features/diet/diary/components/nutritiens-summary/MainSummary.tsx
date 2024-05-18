import { Grid } from '@mui/material';
import { Calories } from './Calories';
import { Proteins } from './Proteins';
import { Carbs } from './Carbs';
import { Fat } from './Fat';

export const MainSummary = () => {
  return (
    <>
      <Grid item sm={3} xs={12}>
        <Calories quantity={2300} goalQuantity={2400} />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Proteins quantity={56} goalQuantity={150} />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Carbs quantity={144} goalQuantity={254} />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Fat quantity={12} goalQuantity={50} />
      </Grid>
    </>
  );
};
