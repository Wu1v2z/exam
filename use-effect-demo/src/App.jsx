import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Створюємо стан лічильника, щоб могти оновлювати компонент (робити рендер)
  const [count, setCount] = useState(0)

  // 1. useEffect З ПУСТИМ МАСИВОМ []
  useEffect(() => {
    console.log("🟢 [З ПУСТИМ МАСИВОМ]: Я виконався лише один раз при завантаженні (Mount)!")
  }, []) // <-- Зверни увагу на ці дужки

  // 2. useEffect БЕЗ МАСИВУ
  useEffect(() => {
    console.log(`🔴 [БЕЗ МАСИВУ]: Я виконуюсь після кожного рендеру! Лічильник: ${count}`)
  }) // Тут дужок немає взагалі

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Демонстрація useEffect</h2>
      <p>Відкрий консоль розробника (F12), щоб побачити магію.</p>
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <p>Поточне значення лічильника: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>
          Збільшити лічильник (викличе рендер)
        </button>
      </div>
    </div>
  )
}

export default App
