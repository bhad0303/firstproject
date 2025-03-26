import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Teacher = () => {
  let [teacherData, setTeacherData] = useState([{}]);
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch("https://api.escuelajs.co/api/v1/users?limit=12")
      .then((result) => result.json())
      .then((data) => {
        setTeacherData(data);
        console.log(data);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#ffd8d8",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Nav />
          <div style={{ width: "80%", margin: "0 auto" }}>
            <header style={{ textAlign: "center" }}>
              <h1>Our Teachers</h1>
            </header>

            <section
              style={{
                display: "flex",
                flexWrap: "wrap",
                rowGap: "3rem",
                columnGap: "2%",
                justifyContent: "center",
                padding: "3rem 0",
              }}
            >
              {teacherData.map((el, index) => (
                <div style={{ width: "22%" }} key={index}>
                  <img
                    src={
                      el.avatar ===
                      "https://static.wikia.nocookie.net/zelda/images/6/61/Link_TLOZ.png/revision/latest/scale-to-width-down/1000?cb=20191010051128&"
                        ? "https://gravatar.com/avatar/92e88801013a3ad20425b73d49f83988?s=400&d=robohash&r=x"
                        : el.avatar
                    }
                    alt="Teacher Avatar"
                    style={{ width: "100%" }}
                  />
                  <h2 style={{ padding: 0, margin: 0, marginTop: "1rem" }}>
                    {el.name}
                  </h2>
                  <p style={{ padding: 0, margin: 0 }}>{el.email}</p>
                </div>
              ))}
            </section>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Teacher;
