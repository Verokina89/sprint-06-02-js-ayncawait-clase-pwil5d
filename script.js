//1.Crea una función asincrona hacia este end-point https://jsonplaceholder.typicode.com/todos/
//2. Saca las frases filtradas por userId (del 1 al 3).
//3. Pon esas frases en su respectivos contenedores (user1, user2, user3)

const getUsers = async (userId) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (!response.ok) {
      throw new Error('Ha surgido un error', response.status);
    }
    const data = await response.json();
    const dataFilterId = data.filter((data) => data.userId == userId);
    return dataFilterId;
  } catch (error) {
    console.log('Error al obtener los datos', error);
  }
};

const template = (userId, users) => {
  container = document.getElementById(userId);
  users.forEach((user) => {
    let templateUser = `<li>${user.title}</li>`;
    container.innerHTML += templateUser;
  });
};

getUsers(1).then((data) => template('userId1', data));
getUsers(2).then((data) => template('userId2', data));
getUsers(3).then((data) => template('userId3', data));
