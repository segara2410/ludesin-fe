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

import { Button } from '@mui/material';
import newItems from '../data/newItems';
import picks from '../data/picks';
import deals from '../data/deals';

export default function Home() {
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
        <Grid container spacing={4}>
          {deals.map((deal) => (
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
        <Grid container spacing={4}>
          {picks.map((pick) => (
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
        <Grid container spacing={4}>
          {newItems.map((newItem) => (
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
          ))}
        </Grid>
      </Container>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Typography
          align="center"
        >
          <Button
            color="primary"
            size="large"
            variant="outlined"
            href="/discover"
            sx={{
              fontWeight: 'bold',
              borderWidth: 2,
              ':hover': {
                borderWidth: 2,
              },
            }}
          >
            Discover More
          </Button>
        </Typography>
      </Container>

    </main>
  );
}
