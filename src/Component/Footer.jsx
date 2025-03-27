import Form from "./Form";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        margin: 0,
        width: "100%",
        padding: "3rem 6rem",
        backgroundImage:
          "linear-gradient(109.5deg, rgba(72,203,217,1) 11.2%, rgba(135,218,149,1) 91.1%)",
        boxSizing: "border-box",
        color: "white ",
        display: "flex",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
          }}
        >
          Codeschool
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          fugiat at culpa dignissimos vero assumenda, architecto harum quaerat
          laboriosam facilis repellat tempore excepturi in cum explicabo vitae
          numquam hic labore!
        </p>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
          }}
        >
          Useful Links
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            alignItems: "flex-start",
            gap: "1.2rem",
          }}
        >
          <li>
            <Link
              to="/teachers"
              style={{ textDecoration: "none", color: "white" }}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/talk-to-us"
              style={{ textDecoration: "none", color: "white" }}
            >
              Talk to us
            </Link>
          </li>
        </ul>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
          }}
        >
          Social Links
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            alignItems: "flex-start",
            gap: "1.2rem",
          }}
        >
          <li>Youtube</li>
          <li>Instagram</li>
          <li>facebook</li>
          <li>twitter</li>
          <li>Linked In</li>
        </ul>
      </div>

      <div
        style={{
          width: "80%",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
          }}
        >
          Enquiry
        </h2>

        <Form />
      </div>
    </footer>
  );
}

export default Footer;
