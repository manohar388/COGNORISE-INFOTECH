document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const searchForm = document.getElementById('search-form');
    const flightsList = document.getElementById('flights-list');
  
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Simulating a registration process
      console.log(`User Registered: ${username}`);
      alert('Registration successful!');
      registerForm.reset();
    });
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origin = document.getElementById('origin').value;
      const destination = document.getElementById('destination').value;
  
      // Simulating flight search process
      const flights = [
        { id: 1, origin, destination, price: 200 },
        { id: 2, origin, destination, price: 250 },
      ];
  
      displayFlights(flights);
    });
  
    function displayFlights(flights) {
      flightsList.innerHTML = '';
      flights.forEach(flight => {
        const listItem = document.createElement('li');
        listItem.textContent = `${flight.origin} to ${flight.destination} - $${flight.price}`;
        flightsList.appendChild(listItem);
      });
    }
  });
  