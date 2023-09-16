import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function AddComments(){
    const [postdata , setpostdata] = useState<any>({})
    const RenderPostData = () => {
           postdata.postId = 101
        axios.post('https://jsonplaceholder.typicode.com/comments', postdata)
        .then((res)=>{
            console.log(res.data)
            setpostdata({...res.data})
        })
        .catch((err)=>{
            console.log(err.data)
        })
    }
    const params  = useParams()
    const GetObjById = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`, postdata).then((res) =>{
           console.log(res.data)
           setpostdata({...res.data})
        })
        .catch((err) =>{
             console.log(err)
        })
    }
    useEffect(() =>{
        GetObjById()
    } , [])
    const updateobj  = () =>{
        axios.put(`https://jsonplaceholder.typicode.com/comments/${params.id}`, postdata).then((res) =>{
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <>
          <Box sx={{height:'100vh' , backdropFilter:'-moz-initial' , backgroundColor:'navy'}} className = 'd-flex justify-content-center align-items-center '>
           <Paper className="p-5">
            <Box>
               <Typography variant="h4" color={"navy"}>Add Comment</Typography>
            </Box>
            <Box className = 'mt-3'>
             <TextField placeholder="UserName" value={postdata.name} variant="standard" onChange={(e) => setpostdata({...postdata , name : e.target.value})} />
             </Box>
             <Box className = 'mt-3'>
             <TextField placeholder="UserEmail" value={postdata.email} variant="standard" onChange={(e) => setpostdata({...postdata , email : e.target.value})}/> 
             </Box>
             <Box className = 'mt-3'>
             <TextField multiline rows={4} placeholder="Description" value={postdata.body} variant="filled" onChange={(e) => setpostdata({...postdata , body : e.target.value})}/> 
             </Box>
             <Box className = 'mt-5'>
             {params.id ? (<Button variant="outlined" onClick={updateobj}>Update</Button>):(<Button variant="outlined" onClick={RenderPostData}>ADD COMMENT </Button>)}
             
             </Box>
            </Paper> 
          </Box>
        </>
    )
}