/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import MainLayout from 'layouts/main-layout';
import AuthLayout from 'layouts/auth-layout';
import Splash from 'components/loading/Splash';
import PageLoader from 'components/loading/PageLoader';
import Reward from 'pages/reward';
import DirectTeam from 'components/compononet/DirectTeam';
import AllTeam from 'components/compononet/AllTeam';
import Profileform from 'components/compononet/Profileform';
import Home from 'pages/home';
import About from 'pages/about';
import Contact from 'pages/contact';
import Admin from 'pages/admin';
import Users from 'components/compononet/Users';
// import Dashboard from 'pages/dashboard';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/dashboard'));
const Login = lazy(() => import('pages/authentication/Login'));
const Signup = lazy(() => import('pages/authentication/Signup'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          path: '/',
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              path: paths.reward,
              element: <Reward />
            },
          ],
        },
        {
          path: '/',
          element: (
            <Outlet />
          ),
          children: [
            {
              path: paths.about,
              element: <About />
            },
          ],
        },
        {
          path: '/',
          element: (
            <Outlet />
          ),
          children: [
            {
              path: paths.contact,
              element: <Contact />
            },
          ],
        },

        {
          path: '/',
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              path: paths.dashboard,
              element: <Dashboard />
            },
          ],
        },

        {
          path: '/',
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              element: <DirectTeam />,
              path: paths.directTeam
            },
          ],
        },
        {
          path: '/',
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              element: <Profileform />,
              path: paths.profile
            },
          ],
        },

        {
          path: '/',
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              element: <AllTeam />,
              path: paths.allTeams
            },
          ],
        },
        {
          path: '/',
          element: (
              <Outlet />
          ),
          children: [
            {
              element: <Admin />,
              path: paths.admin
            },
          ],
        },
        {
          path: '/',
          element: (
              <Outlet />
          ),
          children: [
            {
              element: <Users />,
              path:paths.users
            },
          ],
        },


        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          ),
          children: [
            {
              path: paths.login,
              element: <Login />,
            },
            {
              path: paths.signup,
              element: <Signup />,
            },
            {
              path: `${paths.signup}/:id`,
              element: <Signup />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/dashdarkX',
  },
);

export default router;
