import { fontFamily } from 'theme/typography';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface ProductInfoProps {
  data: {
    name: string;
    price: number | string;
  };
}

const Product = ({ data }: ProductInfoProps) => {
  const { name, price } = data;

  return (
    <Stack alignItems="center" justifyContent="space-between">
      <Stack spacing={2} alignItems="center">
        <Stack direction="column">
          <Typography variant="body2" fontWeight={600} >
            {name}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="caption" fontWeight={400} fontFamily={fontFamily.workSans}>
        {price}
      </Typography>
    </Stack>
  );
};

export default Product;
