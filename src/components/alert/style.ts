import { Snackbar, Alert } from '@mui/material';
import styled from 'styled-components';

export const StyledSnackbar = styled(Snackbar).attrs(() => ({
	anchorOrigin: { vertical: 'top', horizontal: 'center' },
}))``;

export const StyledMuiAlert = styled(Alert).attrs(() => ({
	sx: { width: '70vw' },
}))``;
