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
  return (
    <main className="menu">
      <h2>Our Different Hair</h2>

      <ul className="pizzas">
        {hairData.map((hair) => (
          <Hair key={hair.name} hairObjects={hair} />
        ))}
      </ul>
    </main>
  );
}

function Hair(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.hairObjects.photoName} alt={props.hairObjects.name} />
      <div>
      <h3>{props.hairObjects.name}</h3>
      <p>{props.hairObjects.ingredients}</p>
      <span>{props.hairObjects.price + 10}</span>
      </div>
    </li>
  );
}

// function Ourhair() {
//   return (
//     <main className="menu">
//       <h2>Our Different Hair</h2>

//       <div>
//         {hairData.map((hair )=> (

//        <Hair hairObjects = {hair} />

//         ))}
//       </div>
//       <Hair />

{
  /*<Hair
        name="Wavy Hair"
        ingredients="Wavy curly hair"
        photoName="hairs/hair2.jpg"
        price={25}
  />*/
}
//     </main>
//   );
// }

// function Hair(props) {
//   console.log(props);
//   return (
//     <div className="pizza">
//       <img src={props.hairObjects.photoName} alt={props.hair0bjects.name} />
//       <div>
//         <h3>{props.hairObjects.name}</h3>
//         <p>{props.hairObjects.ingredients}</p>
//         <span>{props.hairObjects.price + 10}</span>
//       </div>
//     </div>
//   );
// }

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open !");
  // else alert("We're are Closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} RG Hair Co. 2023
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
