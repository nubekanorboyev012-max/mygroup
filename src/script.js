function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "30px",
      }}
    >
      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
          alt="Pizza"
          style={imgStyle}
        />
        <h3>Margherita</h3>
        <button style={btnStyle} onClick={() => alert("Margherita")}>
          Ko'rish
        </button>
      </div>

      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
          alt="Pizza"
          style={imgStyle}
        />
        <h3>Pepperoni</h3>
        <button style={btnStyle} onClick={() => alert("Pepperoni")}>
          Ko'rish
        </button>
      </div>

      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
          alt="Pizza"
          style={imgStyle}
        />
        <h3>Big Pizza</h3>
        <button style={btnStyle} onClick={() => alert("Big Pizza")}>
          Ko'rish
        </button>
      </div>

      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400"
          alt="Pizza"
          style={imgStyle}
        />
        <h3>Cheese Pizza</h3>
        <button style={btnStyle} onClick={() => alert("Cheese Pizza")}>
          Ko'rish
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "220px",
  background: "#fff",
  borderRadius: "12px",
  padding: "15px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const imgStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
};

const btnStyle = {
  background: "orange",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default App;