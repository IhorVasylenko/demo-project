import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Home
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          Info
        </AppLink>
      </div>
    </div>
  );
};
