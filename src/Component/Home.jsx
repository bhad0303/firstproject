import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const intialeState = {
  loading: true,
};

const reducer = (state, action) => {
    if(action.type==='stop'){
      
         return {...state,loading:false};
    }
};

const Home = () => {
  let [state, dispatch] = useReducer(reducer, intialeState);


    useEffect(()=>{
         setTimeout(()=>{
             dispatch({type : 'stop'})
         },2000)
    },[]);


  return <div>{state.loading ?<i className="fa-solid fa-spinner fa-spin" style={{fontSize:'40px',padding:'500px 900px'}}></i>: <> <Nav />
    <h1>Home</h1>
   <Footer /></>}</div>;
};

export default Home;
