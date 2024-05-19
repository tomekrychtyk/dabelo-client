import { TableHead, styled } from '@mui/material';

export const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-weight: normal;
          font-size: ${theme.typography.pxToRem(16)};
          padding-top: 0;
          padding-bottom: ${theme.spacing(1)};
      }

      .MuiTableRow-root {
          background: transparent;
      }
  `
);
