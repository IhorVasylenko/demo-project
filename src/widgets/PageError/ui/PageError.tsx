import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { error, resetErrorBoundary } = props;
  const { t } = useTranslation();

  // const reloadPage = () => {
  //   window.location.reload();
  // };

  return (
    <div className={s.PageError}>
      <p>{t('Произошла непредвиденная ошибка.', { ns: 'pageError' })}</p>
      <p>{error.message}</p>
      {/* <Button onClick={reloadPage}>{t('Обновить приложение', { ns: 'pageError' })}</Button> */}
      <Button onClick={resetErrorBoundary}>{`${t('Обновить приложение', { ns: 'pageError' })} *`}</Button>
    </div>
  );
};
