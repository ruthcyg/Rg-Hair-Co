import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import hairData from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <OurHair />
      <Footer />
  
    </div>
  );
}

function Header() {
  return (
    
    
    <header className="header">
    
    
      <h1>RG Hair Co.</h1>
    </header>
  );
}

function OurHair() {
  const hairs = hairData;
  //const hairs = [];
  const numHair = hairs.length;

  return (
    <main className="menu">
      <h2>Our Different Hair</h2>

      {numHair > 0 ? (
        <>
          <p>
            "Embrace the magic of 100% pure Indian hair - Versatile, strong, and
            silky - It's not just hair, it's your crown!"
          </p>
          <ul className="pizzas">
            {hairs.map((hair) => (
              <Hair key={hair.name} hairObjects={hair} />
            ))}
          </ul>
        </>
      ) : (
        <p> We're still working on our Hair Products Please come back later</p>
      )}
    </main>
  );
}

function Hair({ hairObjects }) {
  //console.log(hairObjects);
  return (
    <li className={`pizza ${hairObjects.soldOut ? "sold-out" : ""}`}>
      <img src={hairObjects.photoName} alt={hairObjects.name} />
      <div>
        <h3>{hairObjects.name}</h3>
        <p>{hairObjects.ingredients}</p>
        <span>Inches:{hairObjects.inches}</span>
        {hairObjects.soldOut ? (
          <span>Sold Out</span>
        ) : (
          <span>${hairObjects.price +10} </span>
        )}
        
         {/* <span>
            {hairObjects.soldOut ? "Sold Out " : hairObjects.price + 10}
         </span>*/}
        
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open !");
  // else alert("We're are Closed");

  // if(!isOpen) return (
  //   <p>
  //     We're Excited to welcome you between {openHour}:00 and {closeHour}:00
  //   </p>
  // );

  return (
    <footer className="footer">
      {/*new Date().toLocaleTimeString()*/}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're Excited to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00 Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
