function Form(){
    return (
       <>

<form  style={{
            display : 'flex',
            flexDirection : 'column',
            gap : '2rem'
       }}> 
         <div style= {{
              display : 'flex',
              gap : '1rem'
         }}>
         <label htmlFor="firstname">Name</label>
         <input
           type="text"
           style={{
             border: "none",
             borderRadius: "0.3rem",
             padding: "0.5rem 1rem",
           }}
           placeholder=" first name"
         />
         </div>

         <div  style= {{
              display : 'flex',
              gap : '1rem'
         }}>
         <label htmlFor="firstname">Email</label>
         <input
           type="email"
           style={{
             border: "none",
             borderRadius: "0.3rem",
             padding: "0.5rem 1rem",
           }}
           placeholder="example@gmail.com"
         />
         </div>

         <div  style= {{
              display : 'flex',
              gap : '1rem'
         }}>
         <label htmlFor="firstname">Phone</label>
         <input
           type="number"
           style={{
             border: "none",
             borderRadius: "0.3rem",
             padding: "0.5rem 1rem",
           }}
           placeholder=" first name"
         />
         </div>
        
        <button style={ {
            background : 'dodgerBlue',
            border : 'none',
            padding : '1rem 2rem',
            width : 'fit-content',
            color : 'white',
            borderRadius : '0.6rem'
        }}>Submit</button>
         
       </form>
       </>
    )
}

export default Form;