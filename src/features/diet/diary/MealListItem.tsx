import { FC, ReactElement } from 'react';
import {
  Card,
  Box,
  Typography,
  Divider,
  Grid,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  useTheme,
  styled
} from '@mui/material';

type Props = {
  productName: string;
  weight: number;
  proteins: number;
  carbs: number;
  fat: number;
  kcal: number;
};

const MealListItem: FC<Props> = ({
  productName,
  weight,
  proteins,
  carbs,
  fat,
  kcal
}): ReactElement => {
  return (
    <TableRow hover>
      <TableCell>{productName}</TableCell>
      <TableCell align="center">{weight}</TableCell>
      <TableCell align="center">{proteins}</TableCell>
      <TableCell align="center">{carbs}</TableCell>
      <TableCell align="center">{fat}</TableCell>
      <TableCell align="center">{kcal}</TableCell>
    </TableRow>
  );
};

export default MealListItem;
