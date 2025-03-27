import Nav from './Nav';
import Footer from './Footer';

const Contact = () =>{
     return (
         <div>
            <Nav />
            <div style={{
             height : '100vh',
             display : 'flex',
             justifyContent : 'center',
             alignItems : 'center'
           }}>
           <h1> Our Contact </h1>
           </div>
            <Footer />
         </div>
     )
}


export default Contact;