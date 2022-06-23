import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DashboardIcon, OrganizationIcon, UsersIcon } from './icons';
import SidebarItem from './SidebarItem';
import { SidebarBody, SidebarHeader, SidebarStyles } from './styles';
import { Props as IconProps } from './icons';

interface ISidebarItem {
  id: number;
  title: string;
  Icon: FunctionComponent<IconProps>;
  href: string;
}
const sidebarItems: ISidebarItem[] = [
  {
    id: 1,
    title: 'Platform Dashboard',
    Icon: DashboardIcon,
    href: '/',
  },
  {
    id: 2,
    title: 'User List',
    Icon: UsersIcon,
    href: '/users',
  },
  {
    id: 3,
    title: 'Organization',
    Icon: OrganizationIcon,
    href: '/organization',
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();

  return (
    <SidebarStyles open={open}>
      <SidebarHeader>
        {open ? (
          <div className='icon-background' onClick={() => setOpen(false)}>
            <Image
              src={'/icons/SidebarExpanded.svg'}
              layout='fixed'
              width={40}
              height={40}
              alt='Toggle'
            />
          </div>
        ) : (
          <div
            className='center-div icon-background'
            onClick={() => setOpen(true)}>
            <Image
              src={'/icons/SidebarToggle.svg'}
              layout='fixed'
              width={20}
              height={20}
              alt='Toggle'
            />
          </div>
        )}
        {open && (
          <div className='main-logo' onClick={() => router.push('/')}>
            <Image
              src={'/images/Platform Suite_Logo_White_LG.png'}
              layout='fixed'
              width={137}
              height={40}
              priority
              alt='Platform Suite Logo'
            />
          </div>
        )}
      </SidebarHeader>
      <SidebarBody>
        {sidebarItems.map(item => (
          <SidebarItem
            key={item.id}
            title={item.title}
            Icon={item.Icon}
            href={item.href}
            open={open}
          />
        ))}
      </SidebarBody>
    </SidebarStyles>
  );
};

export default Sidebar;
