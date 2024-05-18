import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { Grid, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const AddMeal = () => {
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container>
      <Grid item sm={1}></Grid>
      <Grid item sm={10}>
        <Grid container sx={{ m: 4 }}>
          <Grid item sm={8}>
            <Button fullWidth variant="contained" sx={{ height: 52 }}>
              {t('Add meal')}
            </Button>
          </Grid>
          <Grid item sm={4}>
            <DatePicker
              maxDate={dayjs()}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              sx={{ mx: 2 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={1}></Grid>
    </Grid>
  );
};

export default AddMeal;
