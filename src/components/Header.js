import React from 'react'
import AppBar from '@mui/material/AppBar';
import CalculateIcon from '@mui/icons-material/Calculate';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <CalculateIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    RPN calculator
                </Typography>
            </Toolbar>
        </AppBar>
        )
}

export default Header