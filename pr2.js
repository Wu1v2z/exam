import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  // Виконується ЛИШЕ ОДИН РАЗ при завантаженні компонента
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []); // <-- Пустий масив залежностей

  return <div>{user ? user.name : "Завантаження..."}</div>;
}