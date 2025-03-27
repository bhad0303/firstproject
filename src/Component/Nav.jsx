import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 4rem",
          boxShadow: "0 8px 10px 0 rgba(0,0,0,0.2)",
          backgroundImage: "linear-gradient(109.5deg, rgba(72,203,217,1) 11.2%, rgba(135,218,149,1) 91.1%)",
          color : 'white'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg"
            style={{
              width: "5rem",
              borderRadius : '50%'
            }}
          />
          <h2>SwiftCart</h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "3rem",

              
            }}   
            
          >
            <li>
              <Link to="/" style={{ textDecoration: "none",color : 'white'}}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" style={{ textDecoration: "none",color : 'white' }}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/add-product" style={{ textDecoration: "none",color : 'white' }}>
                Add Product
              </Link>
            </li>

            <li>
              <Link to="/contact" style={{ textDecoration: "none" ,color : 'white'}}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to='/talk-to-us'
                style={{
                  textDecoration: "none",
                  color : 'white',
                  background: "dodgerBlue",
                  padding: "1rem 1.3rem",
                  borderRadius: "0.6rem",
                }}
              >
                Talk to us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
