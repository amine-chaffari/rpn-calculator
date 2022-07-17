import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Textfield from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useNavigate, useLocation } from 'react-router-dom';
import { getStackById, addValueToStack } from "../services/stackService";
import { applyOperand } from "../services/operandService";




const Calculator = (props) => {
    const [value, setValue] = useState('')
    const [stackData, setStackData] = useState()
    const location = useLocation();
    const navigate= useNavigate()
    const stackLength = stackData ? stackData.stack.length : 0

    useEffect(() => {
        getStackDataById()
    }, [])

    const getStackDataById = async () => {
        const stackDataById = await getStackById(location.state.stackId)
        setStackData(stackDataById)

    }

    const handleValuePush = async () => {
        const valueObject = { value: parseFloat(value) }
        const newStackData = await addValueToStack(stackData.id, valueObject)
        setStackData(newStackData)
        setValue('')
    }

    const handleOperation = async (op) => {
        //check if there is enough values to make an operation
        if (stackLength > 1) {
            //check for division by 0
            if (op == 'divide' && stackData.stack[stackLength - 1] == 0) {
                alert("You can't divide by 0, please choose another operand")
                return
            }
            const newStackData = await applyOperand(op, stackData.id)
            setStackData(newStackData)
        } else {
            alert('You need  at least 2 values to apply an operand')
        }
    }


    //change negativity of value
    const handleNegativityChange = () => {
        if (value.includes('-')) {
            setValue(value.slice(1))
        } else {
            setValue('-' + value)
        }
    }

    //check if value is already has a decimal point or not
    const handleDecimalPoint = () => {
        if (value.includes('.')) {
            //show an error message
        } else {
            setValue(value + '.')
        }
    }
    return (
        <Container maxWidth="sm">
            <Paper sx={{
                margin: "10px 0px",
                padding: "20px"
            }}>
                <Textfield
                    variant="outlined"
                    value={stackLength > 1 ? stackData.stack[stackLength - 2] : ''}
                    sx={{ width: "100%", marginBottom: 1 }}
                />
                <Textfield
                    variant="outlined"
                    value={stackLength > 0 ? stackData.stack[stackLength - 1] : ''}
                    sx={{ width: "100%", marginBottom: 1 }}
                />
                <Textfield
                    variant="outlined"
                    value={value}
                    sx={{ width: "100%", marginBottom: 1 }}
                />
                <Grid container>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "7");
                            }}
                        >
                            7
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "8");
                            }}
                        >
                            8
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "9");
                            }}
                        >
                            9
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                    <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => handleOperation('add')}
                        >
                            +
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "4");
                            }}
                        >
                            4
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "5");
                            }}
                        >
                            5
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "6");
                            }}
                        >
                            6
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => handleOperation('substract')}
                        >
                            −
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "1");
                            }}
                        >
                            1
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "2");
                            }}
                        >
                            2
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "3");
                            }}
                        >
                            3
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => handleOperation('multiply')}
                        >
                            x
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={handleDecimalPoint}
                        >
                            .
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue(value + "0");
                            }}
                        >
                            0
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={handleNegativityChange}
                        >
                            +/-
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => handleOperation('divide')}
                        >
                            /
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={() => {
                                setValue('')
                            }}
                        >
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            sx={{ width: "100%", fontWeight: 'bold' }}
                            onClick={handleValuePush}
                            disabled={!value || value =='-'} // 
                        >
                            Push
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={{ width: "100%", fontWeight: 'bold', marginTop: 1 }}
                            variant="contained"
                            onClick={()=> navigate(-1)}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Calculator