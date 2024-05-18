import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PageTitleWrapper from '@/components/PageTitleWrapper/PageTitleWrapper';
import PageHeader from './PageHeader';
import MealList from './MealList';
import Calories from './Calories';
import Proteins from './Proteins';
import Carbs from './Carbs';
import Fat from './Fat';
import Summary from './Summary';
import AddMeal from './AddMeal';
import { VITAMIN_LIST, MINERAL_LIST } from '@/config';

const DietDiary = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('dietDiaryTitle')}</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item md={12} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item sm={3} xs={6}>
              <Calories quantity={2300} goalQuantity={2400} />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Proteins quantity={56} goalQuantity={150} />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Carbs quantity={144} goalQuantity={254} />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Fat quantity={12} goalQuantity={50} />
            </Grid>

            <AddMeal />

            <Grid item sm={12}>
              <MealList />
            </Grid>

            <Grid item sm={6}>
              <Summary
                data={VITAMIN_LIST}
                title={t('dietVitaminsSummary')}
                expanded
              />
            </Grid>
            <Grid item sm={6}>
              <Summary
                data={MINERAL_LIST}
                title={t('dietMineralsSummry')}
                expanded
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DietDiary;
