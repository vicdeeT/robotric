import { fontFamily } from 'theme/typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import iPhone from 'assets/images/iPhone.png';
// import AWS8 from 'assets/images/AWS8.png';
import Product from './Product';

const productsData = [
  {
    id: 1,
    name: 'Direct Team',
    price: '50',
  },
  {
    id: 2,
    name: 'Indirect Team',
    price: '20',
  },
];

const Products = () => {
  return (
    <Stack direction="column" gap={3.75} component={Paper} height={300}>
      <Typography variant="h6" fontWeight={400} fontFamily={fontFamily.workSans}>
        Team Overview
      </Typography>

      <Stack justifyContent="space-between">
        <Typography variant="caption" fontWeight={400} fontSize={"1.2rem"}>
          Teams
        </Typography>
        <Typography variant="caption" fontWeight={400} fontSize={"1.2rem"}>
          Total
        </Typography>
      </Stack>

      {productsData.map((item) => {
        return <Product key={item.id} data={item} />;
      })}
       <div className="flex justify-between"> <Typography variant="caption" fontWeight={400} fontSize={"1rem"}>
          Total
        </Typography>
        <Typography variant="caption" fontWeight={400} fontSize={"1rem"}>
          70
        </Typography></div>
    </Stack>
  );
};

export default Products;
