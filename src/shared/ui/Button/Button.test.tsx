import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('TEST Button is render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('with some style theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
