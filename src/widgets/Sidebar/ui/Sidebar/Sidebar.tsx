import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {'<<_>>'}
      </button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.langSwitcher} />
      </div>
    </div>
  );
};
