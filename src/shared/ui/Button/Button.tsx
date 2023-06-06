import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [s.square]: square,
    [s.disabled]: disabled,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(s.Button, mods, [className, s[theme], s[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
