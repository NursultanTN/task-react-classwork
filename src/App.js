import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./App.css";

const App = () => {
  const logo =
    "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/UEFA_Champions_League_logo.svg/1200px-UEFA_Champions_League_logo.svg.png";
  let users = [
    {
      name: "Leonel",
      lastName: "Messi",
      age: "34",
      image:
        "https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg",
      id: 1,
    },
    {
      name: "Cristiano",
      lastName: "Ronaldo",
      age: "37",
      image:
        "https://i2-prod.mirror.co.uk/incoming/article25923519.ece/ALTERNATES/s1200b/2_GettyImages-891903878.jpg",
      id: 2,
    },
    {
      name: "Neymar",
      lastName: "Da Silva",
      age: "30",
      image:
        "https://i2-prod.mirror.co.uk/incoming/article16498905.ece/ALTERNATES/s1200b/1_MAIN-neymar.jpg",
      id: 3,
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} name={"Nurs"} age={29} />
      <Footer />
    </div>
  );
};

export default App;
