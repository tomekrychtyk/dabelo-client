import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { Grid, Button, TextField, Card } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { ProductSearch } from './ProductSearch';

export const AddMeal = () => {
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Grid
        container
        sx={{ p: 4 }}
        spacing={4}
        justifyContent="center"
        direction="row"
        wrap="nowrap"
      >
        <Grid item>
          <DatePicker
            maxDate={dayjs()}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </Grid>
        <Grid item sm={8}>
          <Button fullWidth variant="contained" sx={{ height: 52 }}>
            {t('Add meal')}
          </Button>
        </Grid>
      </Grid>

      <Card
        sx={{
          p: 4,
          mx: 4,
          mb: 4
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item sm={2} xs={12}>
            <TextField
              fullWidth
              name="time"
              placeholder={t('e.g. 12:00')}
              variant="outlined"
              label="Meal time"
            />
          </Grid>
          <Grid item sm={10} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="e.g. Early lunch"
              label="Meal name"
            />
          </Grid>
          <Grid item sm={12}>
            <ProductSearch />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
