import App from 'app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { PageError } from 'widgets/PageError';

render(
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={PageError}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
