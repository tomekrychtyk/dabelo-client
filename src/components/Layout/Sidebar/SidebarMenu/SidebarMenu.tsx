import { ListSubheader, alpha, Box, List, styled } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SidebarMenuItem from './SidebarMenuItem';
import MenuWrapper from './MenuWrapper';
import SubMenuWrapper from './SubMenuWrapper';
import menuItems, { MenuItem } from './items';

const renderItems = (items: MenuItem[], path: string) => {
  const { t }: { t: any } = useTranslation();

  return (
    <SubMenuWrapper>
      <List component="div">
        {items.map((item) => {
          const partialMatch = item.link
            ? !!matchPath(
                {
                  path: item.link,
                  end: false
                },
                path
              )
            : false;
          return (
            <SidebarMenuItem
              open={partialMatch}
              active={partialMatch}
              key={item.name}
              name={t(item.key)}
              icon={item.icon}
              link={item.link}
            >
              {item.items ? (
                <SubMenuWrapper>
                  {item.items.map((subItem) => {
                    const exactMatch = subItem.link
                      ? !!matchPath(
                          {
                            path: subItem.link,
                            end: true
                          },
                          path
                        )
                      : false;
                    return (
                      <SidebarMenuItem
                        active={exactMatch}
                        name={subItem.name}
                        key={t(subItem.key)}
                        icon={subItem.icon}
                        link={subItem.link}
                      />
                    );
                  })}
                </SubMenuWrapper>
              ) : null}
            </SidebarMenuItem>
          );
        })}
      </List>
    </SubMenuWrapper>
  );
};

export default function SidebarMenu() {
  const location = useLocation();
  const { t }: { t: any } = useTranslation();

  return (
    <>
      {menuItems.map((section) => {
        return (
          <MenuWrapper key={section.heading}>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  {t(section.heading)}
                </ListSubheader>
              }
            >
              {renderItems(section.items, location.pathname)}
            </List>
          </MenuWrapper>
        );
      })}
    </>
  );
}
