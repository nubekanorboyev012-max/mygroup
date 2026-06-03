import React from "react";

const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: 8,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 10,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    price: 12,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    id: 4,
    name: "Veggie",
    price: 9,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
];

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: "#ff6b00",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>🍕 Pizza House</h2>
        <div>
          <span style={{ marginRight: "20px" }}>Home</span>
          <span style={{ marginRight: "20px" }}>Menu</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#fff5eb",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Eng Mazali Pizzalar</h1>
        <p>Yangi pishirilgan issiq pizzalarni buyurtma qiling</p>
        <button
          style={{
            padding: "12px 25px",
            background: "#ff6b00",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Buyurtma Berish
        </button>
      </section>

      {/* Cards */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>🍕 Mashhur Pizzalar</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                transition: "0.3s",
              }}
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{pizza.name}</h3>
                <p>⭐ 4.8</p>
                <h4>${pizza.price}</h4>

                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#ff6b00",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Savatga Qo'shish
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#222",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        © 2026 Pizza House | Barcha huquqlar himoyalangan
      </footer>
    </div>
  );
}
 