import { useState } from 'react';

import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks';
import { addUser } from '../redux/bigStoreSlice';
import { IUser } from '../types';

const theme = createTheme();

const box = {
	marginTop: 8,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const link = { color: 'blue', textDecoration : 'underline' };

export default function SignUp() {

	const dispatch = useAppDispatch();
	const [open, setOpen] = useState<boolean>(false);
	const navigator = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
		if (`${data.get('name')}`.trim() && 
				`${data.get('mail')}`.trim() && 
				`${data.get('password')}`.trim()) 
		{
			const newUser: IUser = {
				name: `${data.get('name')}`.trim(),
				mail: `${data.get('mail')}`.trim(),
				password: `${data.get('password')}`.trim(),
			};
			dispatch(addUser(newUser));
			setOpen(true);
			setTimeout(() => navigator('/signin'), 500);
		}
  };

  const action = (<>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={box}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mail"
                  label="Email Address"
                  name="mail"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/signin" style={link}>
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
			<Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="You Succesfully Signed"
        action={action}
      />
    </ThemeProvider>
  );
}