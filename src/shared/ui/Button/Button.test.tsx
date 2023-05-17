import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(
            // eslint-disable-next-line max-len
            <Button theme={ThemeButton.CLEAR || ThemeButton.BACKGROUND_INVERTED || ThemeButton.OUTLINE}>
                TEST

            </Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
