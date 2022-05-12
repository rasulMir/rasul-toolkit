import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

interface IProps {
	active: boolean,
	onClose: () => void,
};

export default function AlertDialog({onClose,  active }: IProps) {
  

  return (
    <>
      <Dialog
        open={active}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Thank You For Choosing US!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
						sx={{textTransform: 'uppercase'}}>
						your order will be delivered as soon as possible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
						<Link to='/bigapp'>
							Back To Main Page
						</Link>
					</Button>
          <Button onClick={onClose} autoFocus>
            Close Alert Window
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}