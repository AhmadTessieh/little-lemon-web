import React from "react";
import './Header.css';


function Header() {
  const specials = [
    {
      title: 'Greek Salad',
      description: 'Fresh and crispy ingredients with a hint of olive oil and feta cheese.',
      price: '$12.99',
      cta: 'Order & delivery',
      image: require('../images/greek salad.jpg'),
    },
    {
      title: 'Bruschetta',
      description: 'Grilled bread with garlic and a delicious topping of fresh tomatoes and herbs.',
      price: '$8.99',
      cta: 'Order & delivery',
      image: require('../images/restauranfood.jpg'),
    },
    {
      title: 'Lemon Dessert',
      description: 'A zesty lemon dessert to finish your meal on a high note.',
      price: '$6.99',
      cta: 'Order & delivery',
      image: require('../images/lemon dessert.jpg'),
    },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specials.map((special, index) => (
          <div key={index} className="special-card">
            <img src={special.image} alt={special.title} />  {}
            <div className="special-card-content">
              <h3>{special.title}</h3>
              <p>{special.description}</p>
              <span className="price">{special.price}</span>
              <button className="cta">{special.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Header;

