import { FC, ReactElement } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
  Avatar,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import { getPercentage, getColor } from './utils';

type Props = {
  quantity: number;
  goalQuantity: number;
};

const Fat: FC<Props> = ({ quantity, goalQuantity }): ReactElement => {
  const { t }: { t: any } = useTranslation();

  const AvatarPrimary = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      margin-top: -${theme.spacing(1)};
`
  );

  const percentage = getPercentage(quantity, goalQuantity);
  const color = getColor(percentage);

  return (
    <Card
      sx={{
        p: 1
      }}
    >
      <CardHeader
        avatar={
          <AvatarPrimary>
            <LocalPharmacyTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Typography align="right" variant="h2">
              {quantity} / {goalQuantity}
            </Typography>
            <Typography
              align="right"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('g')}
            </Typography>
          </>
        }
      />
      <CardContent
        sx={{
          pt: 0
        }}
      >
        <Typography
          variant="h3"
          sx={{
            pb: 3
          }}
        >
          {t('dietFat')}
        </Typography>
        <LinearProgress
          value={percentage}
          color={color}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

export default Fat;
