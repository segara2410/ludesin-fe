import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

export default function Cart() {
  const carts = [
    {
      name: 'Ayam Pop',
      image: '/public/images/ayam_pop.jpg',
      price: 10000,
      amount: 3,
    },
    {
      name: 'Rendang',
      image: '/public/images/rendang.jpg',
      price: 15000,
      amount: 2,
    },
  ];

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Container>
          <Typography
            component="h4"
            variant="h5"
            align="left"
            color="text.primary"
            sx={{ fontWeight: 'bold' }}
          >
            Your Cart
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={8}>
            {carts.map((item) => (
              <Card sx={{ display: 'flex', my: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.image}
                  alt={item.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <CardContent>

                    <Typography variant="body1" display="inline">
                      {item.name}
                    </Typography>
                    <IconButton display="inline" sx={{ float: 'right' }}>
                      <DeleteIcon />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      Rp
                      {item.price}
                      {' '}
                      / 100g
                    </Typography>
                  </CardContent>
                  <Box
                    width="100%"
                    sx={{
                      display: 'flex', alignItems: 'center', pl: 1, pb: 1,
                    }}
                  >
                    <TextField
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{ inputProps: { min: 1 } }}
                      defaultValue={item.amount}
                    />
                  </Box>
                </Box>

              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }}>
                  Order Summary
                </Typography>
                <Grid>
                  <Typography variant="body1" color="text.secondary" display="inline">
                    Total Price (
                    {carts.length}
                    {' '}
                    items)
                  </Typography>
                  <Typography display="inline" variant="body1" color="text.primary" sx={{ float: 'right' }}>
                    Rp60.000
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body1" color="text.secondary" display="inline">
                    Total Discount
                  </Typography>
                  <Typography display="inline" variant="body1" color="text.primary" sx={{ float: 'right' }}>
                    Rp10.000
                  </Typography>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" color="text.secondary" display="inline" sx={{ fontWeight: 'bold' }}>
                  Total Price
                </Typography>
                <Typography display="inline" variant="body1" color="text.primary" sx={{ float: 'right', fontWeight: 'bold' }}>
                  Rp50.000
                </Typography>
              </CardContent>

              <CardActions>
                <Button fullWidth size="small" variant="contained" href="/checkout">Checkout</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
