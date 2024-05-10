import { Suspense, lazy, FC, ComponentProps } from 'react';
import { RouteObject } from 'react-router';
import Layout from '@/components/Layout/Layout';
import SuspenseLoader from '@/components/SuspenseLoader/SuspenseLoader';

const Loader = (Component: FC) => (props: ComponentProps<FC>) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const Dashboard = Loader(lazy(() => import('@/features/dashboard/Dashboard')));
const DietDiary = Loader(lazy(() => import('@/features/diet/diary/DietDiary')));

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/diet/diary',
        element: <DietDiary />
      }
    ]
  }
];

export default router;
