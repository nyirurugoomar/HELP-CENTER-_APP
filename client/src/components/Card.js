import React, { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cards");
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="text-center mt-10">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 md:mx-20 rounded-sm mb-40">
            {cards.map((card, index) => (
              <div key={index} className="bg-white shadow-2xl rounded-xl px-2">
                <div className="mt-4">
                  <div className="flex gap-4">
                    <img
                      src={card.image}
                      alt=""
                      className="rounded-[10px] w-12 h-12"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-[27px] text-center">
                        {card.title}
                      </h2>
                      <p className="font-bold text-center">{card.service}</p>
                    </div>
                  </div>
                  <h1 className="text-center font-bold text-[50px]">
                    {card.ssdNo}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
