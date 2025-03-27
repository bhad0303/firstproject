import Nav from './Nav';
import Footer from './Footer';

const AddProduct = () =>{
     return (
         <div>
            <Nav />
            <div style={{
             height : '100vh',
             display : 'flex',
             justifyContent : 'center',
             alignItems : 'center'
           }}>
           <h1>Add Product </h1>
           </div>
            <Footer />
         </div>
     )
}


export default AddProduct;