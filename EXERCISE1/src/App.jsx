import { AppContext } from "./components/Context/AppContext";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./dataProvider/api";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]); // en esta variable vamos a almacenar la información

  useEffect(() => {
    (async () => {
      await api
        .getAllCards()
        .then((data) => {
          setCards(data);
        })
        .catch((error) => {
          console.error("Error getting Cards: " + error);
        });
    })();
  }, []);

  async function handleDeleteCard(card) {
    try {
      await api.deleteCard(card._id);

      const newArray = cards.filter(
        (currentCard) => currentCard._id !== card._id
      );

      setCards(newArray);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateCard(card) {
    const likeinvertido = !card.like;
    await api
      .updateCard(card._id, likeinvertido)
      .then(() => {
        const temp = { ...card, like: likeinvertido };
        console.log(temp);
        console.log("Aqui va a  pasar algo despues de afectar el backend");

        setCards((prev) => {
          return prev.map((element) => {
            return element._id === temp._id ? temp : element;
          });
        });
      })
      .catch((error) => console.error(error));
  }

  console.log(cards);
  return (
    <>
      <AppContext.Provider value={{ cards, setCards }}>
        <div className="app">
          <div className="app__content">
            <Header />
            <Main
              cards={cards}
              handleDeleteCard={handleDeleteCard}
              handleUpdateCard={handleUpdateCard}
            />
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
