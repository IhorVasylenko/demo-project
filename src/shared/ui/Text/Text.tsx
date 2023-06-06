import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(s.Text, {}, [className, s[theme]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
