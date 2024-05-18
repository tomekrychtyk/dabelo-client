import { FC, ReactElement } from 'react';
import {
  Box,
  TableRow,
  TableCell,
  Tooltip,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import { DeleteTwoTone, LaunchTwoTone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type Props = {
  productName: string;
  weight: number;
  proteins: number;
  carbs: number;
  fat: number;
  kcal: number;
};

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'background'])};
    transform: scale(1);
    transform-origin: center;

    &:hover {
        transform: scale(1.1);
    }
  `
);

export const MealListItem: FC<Props> = ({
  productName,
  weight,
  proteins,
  carbs,
  fat,
  kcal
}): ReactElement => {
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();

  return (
    <TableRow hover>
      <TableCell>{productName}</TableCell>
      <TableCell align="center">{weight}</TableCell>
      <TableCell align="center">{proteins}</TableCell>
      <TableCell align="center">{carbs}</TableCell>
      <TableCell align="center">{fat}</TableCell>
      <TableCell align="center">{kcal}</TableCell>
      <TableCell align="right">
        <Box>
          <Tooltip title={t('View')} arrow>
            <IconButtonWrapper
              sx={{
                backgroundColor: `${theme.colors.primary.lighter}`,
                color: `${theme.colors.primary.main}`,
                transition: `${theme.transitions.create(['all'])}`,

                '&:hover': {
                  backgroundColor: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`
                }
              }}
            >
              <LaunchTwoTone fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
          <Tooltip title={t('Delete')} arrow>
            <IconButtonWrapper
              sx={{
                ml: 1,
                backgroundColor: `${theme.colors.error.lighter}`,
                color: `${theme.colors.error.main}`,
                transition: `${theme.transitions.create(['all'])}`,

                '&:hover': {
                  backgroundColor: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`
                }
              }}
            >
              <DeleteTwoTone fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
        </Box>
      </TableCell>
    </TableRow>
  );
};
