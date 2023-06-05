import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(s.LoginForm, {}, [className])}>
      <Input
        placeholder={t('Введите username')}
        className={s.input}
        autofocus
      />
      <Input
        placeholder={t('Введите пароль')}
        className={s.input}
      />
      <Button className={s.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
