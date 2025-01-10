import Grid from '@mui/material/Grid';
import HomeComponent from 'components/compononet/HomeComponent';
// import TopCards from 'components/sections/dashboard/top-cards';
// import WebsiteVisitors from 'components/sections/dashboard/website-visitors';
// import RevenueByCustomer from 'components/sections/dashboard/revenue-by-customer';
// import Products from 'components/sections/dashboard/products';
// import CompletedTask from 'components/sections/dashboard/completed-task';
// import OrdersStatus from 'components/sections/dashboard/orders-status';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("authToken")

    if (!token) {
      console.log("token required")
      navigate("/authentication/login")
    }
  }, [])

  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      {/* <Grid item xs={12}>
        <TopCards />
      </Grid>

      <Grid item xs={12} xl={4}>
        <WebsiteVisitors />
      </Grid> */}

      {/* <Grid item xs={12} xl={8}>
        <RevenueByCustomer />
      </Grid> */}

    <HomeComponent/>
      {/* <Grid item xs={12} xl={4}>
        <Products />
      </Grid> */}

      {/* <Grid item xs={12} xl={8}>
        <CompletedTask />
      </Grid> */}

      {/* <Grid item xs={12}>
        <OrdersStatus />
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;
