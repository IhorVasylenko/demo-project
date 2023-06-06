import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
