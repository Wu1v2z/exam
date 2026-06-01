import { useEffect, useState } from 'react';

function LoggerComponent() {
  const [count, setCount] = useState(0);

  // Виконується на старті ТА після кожної зміни count (або інших станів)
  useEffect(() => {
    console.log("Компонент був відрендерений. Поточний лічильник:", count);
  });

  return <button onClick={() => setCount(count + 1)}>Збільшити: {count}</button>;
}