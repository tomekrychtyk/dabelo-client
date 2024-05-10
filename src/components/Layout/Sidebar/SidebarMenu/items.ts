import {
  ControlPointTwoTone,
  DateRangeTwoTone,
  FastfoodTwoTone
} from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface MenuItem {
  link?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
  key: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Dieta',
    items: [
      {
        name: 'Dziennik',
        key: 'diet/diary',
        icon: DateRangeTwoTone,
        link: '/diet/diary'
      },
      {
        name: 'Moje przepisy',
        icon: FastfoodTwoTone,
        link: '/diet/my-recepies',
        key: 'diet/my-recepies'
      },
      {
        name: 'Dodaj produkt',
        icon: ControlPointTwoTone,
        link: '/diet/add-product',
        key: 'diet/add-product'
      }
    ]
  }
];

export default menuItems;
