function Card({ title, price, features }) {
  const container = document.getElementById("pricing-container");

  const cardHTML = `
    <div class="card">
      <h2 class="card-title">${title}</h2>
      <p class="card-price">${price}</p>
      <ul class="card-features">
        ${features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <button class="card-btn">Start Trial</button>
    </div>
  `;

  container.innerHTML = cardHTML;
}
