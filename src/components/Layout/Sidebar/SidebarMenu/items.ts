import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface MenuItem {
  link?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
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
        icon: AnalyticsTwoToneIcon,
        link: '/dite/diary'
      },
      {
        name: 'Moje przepisy',
        icon: AnalyticsTwoToneIcon,
        link: '/diet/my-recepies'
      },
      {
        name: 'Dodaj produkt',
        icon: AnalyticsTwoToneIcon,
        link: '/diet/add-product'
      }
    ]
  }
];

export default menuItems;
