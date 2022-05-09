import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useAppSelector, useAppDispatch } from '../../hooks';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SignLinks from './SignLinks';
import { exitLogin } from '../redux/bigStoreSlice';

const div = {
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
}

export default function HeaderAppBar() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { currentUser } = useAppSelector((state: any) => state.bigStore);
	const dispatch = useAppDispatch();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/bigapp'>BigStore</Link>
          </Typography>
          {!currentUser ? <SignLinks/> :
					(
            <div style={div}>
							<Typography variant='h6' component='div'>
								{ currentUser.name }
							</Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
									<Link to='orders'>
										My Orders
									</Link>
								</MenuItem>
								<MenuItem onClick={() => dispatch(exitLogin())} sx={{color : 'red'}}>
									Exit
								</MenuItem>
              </Menu>
            </div>
          )
				}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
