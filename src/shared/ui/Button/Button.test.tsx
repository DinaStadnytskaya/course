import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        // eslint-disable-next-line react/jsx-tag-spacing
        render(
            <Button theme={ThemeButton.CLEAR || ThemeButton.RED || ThemeButton.OUTLINE}>
                TEST

            </Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
