import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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
import { checkUser } from '../redux/bigStoreSlice';
import { IUser } from '../types';

const box = {
	marginTop: 8,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const link = { color: 'blue', textDecoration : 'underline' };

const theme = createTheme();

export default function SignIn() {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (`${data.get('name')}`.trim() && 
				`${data.get('mail')}`.trim() && 
				`${data.get('password')}`.trim()) 
		{
			const user: IUser = {
				name: `${data.get('name')}`.trim(),
				mail: `${data.get('mail')}`.trim(),
				password: `${data.get('password')}`.trim(),
			};
			dispatch(checkUser(user));
			setTimeout(() => navigate('/bigapp'), 0);
		}
		else setOpen(true);
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							autoComplete="given-name"
							name="name"
							required
							fullWidth
							id="name"
							label="Your Name"
							autoFocus
						/>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mail"
              label="Email"
              name="mail"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="#" style={link}>
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="/signup" style={link}>
                  {"Don't have an account? Sign Up"}
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
        message="Wrong Password or Login or Name"
        action={action}
      />
    </ThemeProvider>
  );
}