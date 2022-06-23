import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import { Props as IconProps } from './icons';
import { StyledItem } from './styles';

interface Props {
  title: string;
  Icon: FunctionComponent<IconProps>;
  href: string;
  open: boolean;
}

const SidebarItem = ({ title, Icon, href, open }: Props) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const active: boolean =
    '/' + router.pathname.split('/')[1] === href ? true : false;

  const handleClick = () => router.push(href);

  return (
    <StyledItem
      open={open}
      active={active}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Icon hovered={isHovered} active={active} />
      {open && <div className='link-styles'>{title}</div>}
    </StyledItem>
  );
};

export default SidebarItem;
