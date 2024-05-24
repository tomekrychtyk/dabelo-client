import { useState, SyntheticEvent } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { Grid, Button, TextField, Card, Autocomplete } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const AddMeal = () => {
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());
  const [foundProducts, setFoundProducts] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<
    { weight: number; name: string }[]
  >([]);
  const { t }: { t: any } = useTranslation();

  const products = ['milk', 'cheese', 'honey', 'goat milk'];

  const handleProductSearch = (value: string) => {
    if (!value) {
      setFoundProducts([]);
    } else {
      const productsToSet = products.filter((item) => item.includes(value));
      console.log('prod to set', productsToSet);
      setFoundProducts(productsToSet);
    }
  };

  const debouncedSetFoundProducts = useDebounceCallback(
    handleProductSearch,
    500
  );

  const handleProductSelect = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    console.log('SELECTEED', selectedProducts);
    if (value) {
      setSelectedProducts((prevSelectedProducts) => {
        return [
          ...prevSelectedProducts,
          {
            weight: 0,
            name: value
          }
        ];
      });
      setFoundProducts([]);
    }
  };

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
            <Autocomplete
              autoSelect
              onChange={handleProductSelect}
              filterOptions={(x) => x}
              disablePortal
              freeSolo
              options={foundProducts}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product"
                  onChange={(event) =>
                    debouncedSetFoundProducts(event.target.value)
                  }
                />
              )}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
