import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import shops from '../data/shops';

const categories = [
  'Sayur',
  'Buah',
  'Restoran',
];

export default function Discover() {
  const [filters, setFilters] = React.useState(categories);

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilter = (category) => {
    if (filters.includes(category)) {
      setFilters(filters.filter((item) => item !== category));
    } else {
      setFilters([...filters, category]);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <Container>
          <Typography
            component="h4"
            variant="h4"
            align="left"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Discover
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Shops"
          inputProps={{ 'aria-label': 'search shops' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button
          sx={{
            float: 'right',
          }}
          onClick={handleClick}
          endIcon={<FilterListIcon />}
        >
          Filter
        </Button>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {categories.map((name) => (
            <MenuItem key={name} value={name} onClick={() => handleFilter(name)}>
              <Checkbox checked={filters.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Menu>
        <Grid container spacing={4}>
          {shops.map((shop) => (
            filters.includes(shop.category) && (
              <Grid item key={shop.name} xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea
                    component={Link}
                    to={`/shop?id=${shop.id}`}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={shop.image}
                      alt={shop.name}
                    />
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {shop.name}
                      </Typography>
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {shop.category}
                      </Typography>
                      <Grid container direction="row" alignItems="center">
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
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          ))}
        </Grid>
      </Container>
    </main>
  );
}
