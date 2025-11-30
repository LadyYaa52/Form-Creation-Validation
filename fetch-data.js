async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = '';

    // Create list of users
    const ul = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      ul.appendChild(li);
    });

    dataContainer.appendChild(ul);
  } catch (error) {
    console.error('Error fetching user data:', error);
    dataContainer.innerHTML = 'Failed to load user data.';
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
