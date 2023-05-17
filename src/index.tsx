import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/Theme';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import App from './app/App';
import './shared/config/i18n/i18n';
import '@/app/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Контейнер root не найден');
}
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
