function App() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    },
    {
      id: 2,
      name: "Pepperoni",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    },
    {
      id: 3,
      name: "Big Pizza",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    },
    {
      id: 4,
      name: "Cheese Pizza",
      img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "30px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {pizzas.map((pizza) => (
        <div key={pizza.id} style={cardStyle}>
          <img
            src={pizza.img}
            alt={pizza.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h3>{pizza.name}</h3>

          <button
            style={buttonStyle}
            onClick={() => alert(pizza.name)}
          >
            Ko'rish
          </button>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  width: "220px",
  background: "#fff",
  borderRadius: "15px",
  padding: "15px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  background: "#ff5722",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default App;