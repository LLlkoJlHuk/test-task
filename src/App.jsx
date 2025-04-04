import { useState } from "react";
import useApi from "@/hooks/useApi.js";
import ProgressBar from "@/components/ProgressBar/index.jsx";
import Card from "@/components/Card/index.jsx";
import SectionToNextStep from "@/components/SectionToNextStep/index.jsx";

function App() {
    const apiUrl = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

    let [ selectedCard, setSelectedCard ] = useState(null);
    let { cards, error, loading } = useApi(apiUrl);

    function setSelectCard(card) {
        if(card.allows_heavy_waste) {
            setSelectedCard(card)
        }
    }

  return (
      <>
          <div className="main-content">
              <ProgressBar stepNow={3} />

              <h1 className="title">Choose Your Skip Size</h1>
              <h3 className="subtitle">Select the skip size that best suits your needs</h3>

              <div className="cards">
                  {
                      loading ? (
                          <div className="loading"></div>
                      ) : error ? (
                          <div className="error">{error}</div>
                      ) : (
                          cards.map((card) => {
                              return <Card
                                  key={card.id}
                                  card={card}
                                  isSelected={selectedCard?.id === card.id}
                                  onSelect={() => setSelectCard(card)}
                              />
                          })
                      )
                  }
              </div>
          </div>

          { selectedCard && <SectionToNextStep card={ selectedCard } /> }
      </>
  )
}

export default App;
