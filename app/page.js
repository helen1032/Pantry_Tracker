'use client';
import Link from 'next/link';
import { Container, Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Pantry Manager
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Link href="/sign-up">
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
