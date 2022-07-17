import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { deleteStack } from '../services/stackService';
const StackCard = (props) => {
    const { stackData, idx, updateList } = props
    const theme = useTheme();
    const navigate = useNavigate();


    const handleDelete = async() =>{
        const response = await deleteStack(stackData.id)
        updateList()
    }

    const handleCalculatePress = () =>{
        navigate('stack', {state :{ stackId: stackData.id}})
    }

    return (
            <Card sx={{ display: 'flex', marginBottom: 5 }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        stack {idx + 1}
                    </Typography>
                    <Typography paragraph sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                    }}>
                        {stackData.stack.length>0 ? stackData.stack.join(', ') : 'Empty'}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                    <IconButton aria-label="calculate" onClick={handleCalculatePress}>
                        <CalculateIcon sx={{ height: 38, width: 38, color: theme.palette.primary.main }} />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon sx={{ height: 38, width: 38, color: theme.palette.error.light }} />
                    </IconButton>
                </Box>
            </Card>
    )
}

export default StackCard