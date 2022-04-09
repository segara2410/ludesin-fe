import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import list from '../data/list';
import newItems from '../data/newItems';
import picks from '../data/picks';
import deals from '../data/deals';

const categories = [
  'Sayur',
  'Buah',
  'Daging',
];

export default function Home() {
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
            Today's Deals
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>
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
          {deals.map((deal) => (
            filters.includes(deal.category) && (
              <Grid item key={deal.name} xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea href={`/deal?id=${deal.id}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={deal.image}
                      alt={deal.name}
                    />
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {deal.name}
                      </Typography>
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {deal.category}
                      </Typography>
                      <Grid container direction="row" alignItems="center">
                        <Grid item>
                          <StarIcon sx={{ color: '#f7c941' }} />
                        </Grid>
                        <Grid item sx={{ marginRight: 2 }}>
                          {deal.rate}
                        </Grid>
                        <Grid item>
                          <Typography color="text.secondary">
                            {deal.distance}
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
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
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
            Our Picks
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>
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
          {picks.map((pick) => (
            filters.includes(pick.category) && (
              <Grid item key={pick.name} xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea href={`/pick?id=${pick.id}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={pick.image}
                      alt={pick.name}
                    />
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {pick.name}
                      </Typography>
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {pick.category}
                      </Typography>
                      <Grid container direction="row" alignItems="center">
                        <Grid item>
                          <StarIcon sx={{ color: '#f7c941' }} />
                        </Grid>
                        <Grid item sx={{ marginRight: 2 }}>
                          {pick.rate}
                        </Grid>
                        <Grid item>
                          <Typography color="text.secondary">
                            {pick.distance}
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
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
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
            New in Town
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>
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
          {newItems.map((newItem) => (
            filters.includes(newItem.category) && (
              <Grid item key={newItem.name} xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea href={`/newItem?id=${newItem.id}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={newItem.image}
                      alt={newItem.name}
                    />
                    <CardContent>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {newItem.name}
                      </Typography>
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {newItem.category}
                      </Typography>
                      <Grid container direction="row" alignItems="center">
                        <Grid item>
                          <StarIcon sx={{ color: '#f7c941' }} />
                        </Grid>
                        <Grid item sx={{ marginRight: 2 }}>
                          {newItem.rate}
                        </Grid>
                        <Grid item>
                          <Typography color="text.secondary">
                            {newItem.distance}
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
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
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
            Shop List
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pb: 8 }}>
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
        <Grid item xs={12} md={8}>
          {list.map((list) => (
            <Card sx={{ display: 'flex', my: 1 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={list.image}
                alt={list.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <CardContent>
                  <Typography variant="body1" display="inline">
                    {list.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rp
                    {list.price}
                    {' '}
                    / 100g
                  </Typography>
                </CardContent>
              </Box>

            </Card>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
