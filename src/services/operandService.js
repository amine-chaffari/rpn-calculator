
//Get operands 
export const getOperands = async() =>{
    const response = await fetch('http://localhost:3001/rpn/op',{
        method:'GET',
      })
    const data = await response.json()
    return data
}
//Apply operand to a stack
export const applyOperand = async(op,id) =>{
    const response = await fetch(`http://localhost:3001/rpn/op/${op}/stack/${id}`,{
        method:'POST',
      })
    const data = await response.json()
    return data
}