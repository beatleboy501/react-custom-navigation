import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { Grid } from '@mui/material';
import SiteNavigation from './SiteNavigation';
import Spinner from './Spinner';

const About = React.lazy(() => import("../pages/Page"));
const Dashboard = React.lazy(() => import("../pages/Page"))
const Account = lazy(() => import('../pages/Page'));
const Shop = lazy(() => import('../pages/Page'));
const Home = lazy(() => import('../pages/Page'));

const AppRouter = () => (
  <SiteNavigation>
    <Grid className="container">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home pageName="Home" />} />
          <Route path="/shop" element={<Shop pageName="Shop" />} />
          <Route path="/dashboard" element={<Dashboard pageName="Dashboard" />} />
          <Route path="/about" element={<About pageName="About" />} />
          <Route path="/settings" element={<Shop pageName="Shop" />} />
          <Route path="/account" element={<Account pageName="Account" />} />
        </Routes>
      </Suspense>
    </Grid>
  </SiteNavigation>
);

export default AppRouter;
