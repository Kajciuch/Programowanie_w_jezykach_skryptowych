import React from 'react';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Laboratorium 8</h1>

      <h2>Ćwiczenie 1: Warunkowe renderowanie komponentu - szczegóły</h2>
      <ToggleDetails />

      <h2>Ćwiczenie 2: Warunkowe renderowanie komponentu do zmiennej - Mini test punktowy</h2>
      <ScoreDisplay score={75} />

      <h2>Ćwiczenie 3: Lista z dynamicznym filtrowaniem - zadania ukończone</h2>
      <TaskList />

      <h2>Ćwiczenie 4: useEffect i zewnętrzne dane - użytkownicy z API</h2>
      <UserList />

      <h2>Ćwiczenie 5: Licznik z efektami ubocznym - liczy co 1 sekundę do maksymalnie 10</h2>
      <TimerCounter />
    </div>
  );
}

export default App;
