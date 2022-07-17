import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import StackCard from '../components/StackCard';
import {getStacks, createStack} from '../services/stackService'
import logo from '../logo.svg';


const Home = () => {
    const navigate = useNavigate();
    const [stacksList, setstacksList] = useState([])
    useEffect(() => {
        getStacksData()
    }, [])
 
    const getStacksData = async() =>{
        const stackData = await getStacks()
        setstacksList(stackData)
       }

    const handleCreate = async() =>{
        const newStackId = await createStack()
        navigate('stack', {state :{ stackId: newStackId}})
    }
    return (
        <React.Fragment>
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
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Welcome To RPN calculator
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Create stacks and make your calculations
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained" onClick={handleCreate}>Create stack</Button>
                    </Stack>
                </Container>
            </Box>
            {stacksList.length>0?
            <Container sx={{ py: 8 }} maxWidth="md">
                {
                    stacksList.map((stack, idx) => (
                        <StackCard key={stack.id} idx={idx} stackData={stack} updateList={getStacksData} />

                    ))
                }
            </Container>:
                        <Container sx={{ py: 8 , display:'flex', justifyContent:'center'}} maxWidth="md">
            <img src={logo} className="App-logo" alt="logo" />
            </Container>}
        </React.Fragment>
    )
}

export default Home