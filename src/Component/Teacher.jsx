import Nav from "./Nav";
import Footer from "./Footer";

const Teacher = () => {
  const users = [
    {
      image: "./images/a.jpg",
      name: "Rahul Singh",
      qua: "MCA (Indus University)",
    },
    {
      image: "./images/b.jpg",
      name: "Anjali Sharma",
      qua: "B.Tech (IIT Delhi)",
    },
    {
      image: "./images/c.jpg",
      name: "Vikram Patel",
      qua: "MBA (IIM Ahmedabad)",
    },
    {
      image: "./images/d.jpg",
      name: "Sanya Verma",
      qua: "B.Sc (Delhi University)",
    },
    {
      image: "./images/e.jpg",
      name: "Arjun Mehta",
      qua: "M.Tech (BITS Pilani)",
    },
    {
      image: "./images/f.jpg",
      name: "Neha Kapoor",
      qua: "BCA (Christ University)",
    },
    { image: "./images/g.jpg", name: "Rajesh Kumar", qua: "PhD (JNU)" },
    {
      image: "./images/h.jpg",
      name: "Priya Desai",
      qua: "M.Sc (Mumbai University)",
    },
    { image: "./images/i.jpg", name: "Amit Tiwari", qua: "BBA (Symbiosis)" },
    {
      image: "./images/j.jpg",
      name: "Suresh Reddy",
      qua: "MCA (Osmania University)",
    },
    {
      image: "./images/k.jpg",
      name: "Ritika Chauhan",
      qua: "BA (Amity University)",
    },
    { image: "./images/l.jpg", name: "Manoj Joshi", qua: "B.Com (DU)" },
  ];

  return (
    <div>
      <Nav />
      <div  style={{
          width: "80%",
          margin: "0 auto",
      }}>
        <header
          style={{
           
            textAlign: "center",
          }}
        >
          <h1>Our Teachers</h1>
        </header>

        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: "3rem",
            columnGap: "2%",
            justifyContent :'center',
            padding : '3rem 0'
          }}
        >
          {users.map((el, index) => {
            return (
              <div style={{
                width : '22%'
              }}>
                <img src={el.image} alt=""  style={{width:'100%'}}/>
                <h2 style={{padding:0,margin:0,marginTop:'1rem'}}>{el.name}</h2>
                <p  style={{padding:0,margin:0}}> {el.qua}</p>
              </div>
            );
          })}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Teacher;
