
//Get stacks 
export const getStacks = async() =>{
    const response = await fetch('http://localhost:3001/rpn/stack',{
        method:'GET',
      })
    const data = await response.json()
    return data
}
//Get stack by id
export const getStackById = async(id) =>{
    const response = await fetch(`http://localhost:3001/rpn/stack/${id}`,{
        method:'GET',
      })
    const data = await response.json()
    return data
}
//Create Stack  
export const createStack = async() =>{
    const response = await fetch('http://localhost:3001/rpn/stack',{
        method:'POST',
      })
    const data = await response.json()
    return data
}
//delete Stack  
export const deleteStack = async(id) =>{
    const response = await fetch(`http://localhost:3001/rpn/stack/${id}`,{
        method:'Delete',
      })
    const data = await response.json()
    return data
}
//Push value to stack
export const addValueToStack = async(id, val) =>{
    const response = await fetch(`http://localhost:3001/rpn/stack/${id}`,{
        headers:{'content-type': 'application/json'},
        method:'POST',
        body:JSON.stringify(val)
      })
    const data = await response.json()
    return data
}