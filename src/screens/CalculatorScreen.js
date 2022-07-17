import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Calculator from "../components/Calculator";
import IconButton from '@mui/material/IconButton';
import { useNavigate, useLocation } from "react-router-dom";
import { getOperands } from "../services/operandService";




const CalculatorScreen = (props) => {
    const navigate = useNavigate();

    const [value, setValue] = useState('')
    const [operandsList, setOperandsList] = useState([])
    useEffect(() => {
        getOperandsData()
    }, [])
 
    const getOperandsData = async() =>{
        const operands = await getOperands()
        setOperandsList(operands)
       }

    return (
        <React.Fragment>
            <IconButton aria-label="back" onClick={()=>{navigate(-1)}}>
                <ArrowBackIcon fontSize="large" />
            </IconButton>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        color="text.primary"
                        
                    >
                        Make Calculations!
                    </Typography>
                    <Typography variant="h8" align="center" color="text.secondary" paragraph>
                        {'You can ' + operandsList.join(' / ') + ' your stack values'}
                    </Typography>
                </Container>
            </Box>
            <Container maxWidth="sm">
                <Calculator />
            </Container>
        </React.Fragment>
    );
}

export default CalculatorScreen