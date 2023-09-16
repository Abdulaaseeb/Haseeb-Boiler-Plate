import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import AllComponents from "../../admin_Components/components";
import AddComments from "../axios/TSAddcomments";
import Coments from "../axios/TSComments";

 
export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<AllComponents/>}/>
                <Route path="TSComments" element = {<Coments/>}/>
                <Route path="TSAddComments" element = {<AddComments/>}/>
                <Route path="TSAddComments/:id" element = {<AddComments/>}/>

            </Routes>
        </Router>
    )
}