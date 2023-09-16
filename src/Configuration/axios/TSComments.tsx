import { Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import TSNavbar from "../../Pages/TSNavbar"



export default function Coments(){
         const [comments , setcomments] = useState<any>([])
       let RenderData = () => {
         axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
          console.log(res.data)
          setcomments([...res.data])
        })
        .catch((err)=>{
           console.log(err.message)
        })
    }
    const navigate = useNavigate()
    const addComments = () =>{
        navigate('/AddComments')
    }
    const putcomments = (id:any) =>{
         navigate(`/AddComments/${id}`)
    }

    useEffect(()=>{
        RenderData()
    }, [])
    const params = useParams()
    const DeleteData = () =>{
    axios.delete(`https://jsonplaceholder.typicode.com/comments/${params.id}`).then((res)=>{
        console.log("han delete ho rha ha thora sabar karo", res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    }
        return(
        <>
        <TSNavbar/>
        <div className="d-flex justify-content-around mt-5 ">
               <h1 style={{color:'navy'}}>Comments</h1>
               <Button onClick={addComments} variant="outlined" >ADD COMMENTS</Button>
               </div>
            {comments.map((x : any , i : any)=>{
                return(
                    <div className="mt-5 border rounded px-3 py-4 mx-5 shadow-lg" style={{backgroundColor:'ButtonShadow'}}>
                    <h3 style={{color:'navy'}}>{x.name}</h3>
                    <h5 style={{color:'navy'}}>{x.email}</h5>
                    <p style={{color:'navy'}}>{x.body}</p>
                    <Button variant="contained" className="mx-2" onClick={() => putcomments(x.id)}>Edit</Button>
                    <Button variant="contained" onClick={DeleteData}>delete</Button>

                    </div>
                )
            })}
            </>
         
    )
}