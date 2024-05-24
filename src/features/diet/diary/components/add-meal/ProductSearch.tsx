import { useState, useEffect, SyntheticEvent } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { Grid, Button, TextField, Card, Autocomplete } from '@mui/material';
import { useLazyDietProductsQuery } from '@/app/api';

export const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<
    { weight: number; name: string }[]
  >([]);
  const [foundProducts, setFoundProducts] = useState<string[]>([]);

  const [getProducts, { data }] = useLazyDietProductsQuery();

  useEffect(() => {
    if (searchTerm) {
      getProducts({ name: searchTerm });
    }
  }, [searchTerm]);

  useEffect(() => {
    if (data?.dietProducts) {
      setFoundProducts(data.dietProducts.map((product) => product.name));
    }
  }, [data]);

  const handleProductSearch = (value: string) => {
    setSearchTerm(value);
  };

  const debouncedSetFoundProducts = useDebounceCallback(
    handleProductSearch,
    500
  );

  const handleProductSelect = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
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

  console.log('GOT DATA', data);

  return (
    <Autocomplete
      clearOnBlur
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
          onChange={(event) => debouncedSetFoundProducts(event.target.value)}
        />
      )}
    />
  );
};
