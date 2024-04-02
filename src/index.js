import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//learning Components ,jsx and props
//components is piece of UI its has own login,data and appearance
//Declarative syntax to decribe what components look like and how they work
//props are used to pass data from parent to child components

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// app component consist header,menu and Footer
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const s = { color: "red", fontSize: "48px" };
  return (
    <header className="header">
      <h1>fast React Pizza Co</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italic cuisine,6 creative dishes to choose from.All from Our
        stone oven, all organic,all decisious.
      </p>
      {/* create list of pizzas for pizzadata thorugh pizza component */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    // if pizza is soldout adding the class for same
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* pizza image get render here */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* if is soldout will display as soldout */}
        <span>{pizzaObj.soldOut ? "Sold Out" : `${pizzaObj.price} $`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const s = new Date().toLocaleTimeString();

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // for the open and close hours accordingly value is set for isopen
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we are currently opens");
  // } else {
  //   alert("sorry we are closed now");
  // }

  return (
    <footer className="footer">
      {/* if true will show is accepting order thorugh order component or else closed message  */}
      {isOpen ? <Order /> : <p>we are currently closed</p>}
    </footer>
  );

  function Order() {
    return (
      <div className="order">
        <p>{s} We are currently Open</p>
        <button className="btn">Order</button>
      </div>
    );
  }

  // return React.createElement("footer", null, "We are currently Open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
