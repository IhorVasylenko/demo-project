import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(s.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка.', { ns: 'pageError' })}</p>
      <Button onClick={reloadPage}>{t('Обновить приложение', { ns: 'pageError' })}</Button>
    </div>
  );
};