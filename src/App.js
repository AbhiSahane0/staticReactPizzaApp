import "./index.css";
//This is how we import css file

let pizzaData = [
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

function App() {
  return (
    // As shown below this is how we use external css classes in our web page
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //In this methos we define object and then we give the objectb name to the style={} attribute
  const styles = {
    // color: "blue",
    // fontFamily: "cursive",
    // fontSize: "50px",
  };

  //  <h2 style={{ fontFamily: "cursive" }}>Our Menu!</h2>;
  //  {
  //    /* In this method of styling we have to give an object inside the style={object} attribute  */
  //  }

  //Although this methods exist its not good practice to use them as it make code complicated
  //SO to solve this the mostly used styling method is to use external styling

  //This is a one fromat for adding styles in JSX.Inline styling
  //here we have given the object to a style attribute
  return (
    <header className="header">
      <h1 style={styles}>React Pizza!</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Buy our tastey pizzas at lowest price.</p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* // We use props to pass data from clild component to parent component
          props are immutable
      */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We are open untile and untile {openHour} PM, buy now.</p>
        ) : (
          <p>We will be back after {closeHour} PM.</p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default App;
