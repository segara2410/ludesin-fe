import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { grey } from '@mui/material/colors';

import { useLocation } from 'react-router-dom';

import shops from '../data/shops';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 3,
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const products = [
  {
    name: 'Ayam Pop',
    image: '/public/images/ayam_pop.jpg',
    price: 'Rp10.000',
    stock: 7,
  },
  {
    name: 'Ayam Gulai',
    image: '/public/images/gulai-ayamjpg.jpg',
    price: 'Rp10.000',
    stock: 5,
  },
  {
    name: 'Rendang',
    image: '/public/images/rendang.jpg',
    price: 'Rp15.000',
    stock: 4,
  },
  {
    name: 'Paru',
    image: '/public/images/paru.jpg',
    price: 'Rp5.000',
    stock: 10,
  },

  {
    name: 'Dendeng Balado',
    image: '/public/images/dendeng.jpg',
    price: 'Rp7.000',
    stock: 15,
  },
  {
    name: 'Gulai Otak',
    image: '/public/images/gulai_otak.jpg',
    price: 'Rp7.000',
    stock: 5,
  },
  {
    name: 'Gulai Kepala Kakap',
    image: '/public/images/gulai-kepala-kakap.jpg',
    price: 'Rp20.000',
    stock: 2,
  },
  {
    name: 'Ayam Bakar',
    image: '/public/images/ayam_bakar.jpg',
    price: 'Rp10.000',
    stock: 15,
  },
];

export default function Shop() {
  const query = useQuery();
  const shop = shops.filter((data) => data.id === Number(query.get('id')))[0];

  const [open, setOpen] = React.useState(false);
  const [addedProduct, setAddedProduct] = React.useState(null);
  const handleOpen = (product) => {
    setOpen(true);
    setAddedProduct(product);
  };
  const handleClose = () => {
    setOpen(false);
    setAddedProduct(null);
  };

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Container sx={{ mb: 2 }}>
          <Typography
            component="h4"
            variant="h4"
            align="left"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {shop.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {shop.category}
          </Typography>
          <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
              <StarIcon sx={{ color: '#f7c941' }} />
            </Grid>
            <Grid item sx={{ marginRight: 2 }}>
              {shop.rate}
            </Grid>
            <Grid item>
              <Typography color="text.secondary">
                {shop.distance}
                {' '}
                km
              </Typography>
            </Grid>
          </Grid>
          <Typography display="inline" variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            Opening Hours&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography display="inline" variant="body1" color="text.secondary">
            Today 00:00-23:59
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Typography variant="body2">
                    Stock:
                    {' '}
                    <strong>{product.stock}</strong>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container spacing={1} direction="row" alignItems="center">
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-number"
                        label="Quantity"
                        type="number"
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{ inputProps: { min: 0, max: product.stock } }}
                        defaultValue={0}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Button size="small" fullWidth onClick={() => handleOpen(product.name)}>
                        add to cart
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h6" align="center" sx={{ fontWeight: 'bold' }}>
            Product Added
          </Typography>
          <Typography gutterBottom variant="body1" sx={{ my: 2 }} align="center">
            <strong>{addedProduct}</strong>
            {' '}
            succesfully added to your cart.
          </Typography>
          <Grid direction="row" align="center">
            <Button
              size="small"
              onClick={handleClose}
              variant="contained"
              sx={{
                mx: 1,
                bgcolor: grey[600],
                ':hover': {
                  bgcolor: grey[700],
                },
              }}
            >
              Close
            </Button>
            <Button sx={{ mx: 1 }} size="small" href="/cart" variant="contained">
              Open Cart
            </Button>
          </Grid>
        </Box>
      </Modal>
    </main>
  );
}
