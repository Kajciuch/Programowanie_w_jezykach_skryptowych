import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Laboratorium 7 – Komponenty React</h1>

      <section>
        <h2>Ćwiczenie 1 – Hello</h2>
        <Hello />
      </section>

      <section>
        <h2>Ćwiczenie 2 – Hello z props</h2>
        <HelloWithProps name="Anna" />
        <HelloWithProps name="Bartek" />
        <HelloWithProps name="Celina" />
      </section>

      <section>
        <h2>Ćwiczenie 3 – Counter (useState)</h2>
        <Counter />
      </section>

      <section>
        <h2>Ćwiczenie 4 – InputTracker</h2>
        <InputTracker />
      </section>

      <section>
        <h2>Ćwiczenie 5 – LoginStatus</h2>
        <LoginStatus isLoggedIn={true} />
        <LoginStatus isLoggedIn={false} />
      </section>

      <section>
        <h2>Ćwiczenie 6 – TodoList</h2>
        <TodoList todos={['Zadanie 1', 'Zadanie 2', 'Zadanie 3']} />
      </section>

      <section>
        <h2>Ćwiczenie 7 – LoginForm</h2>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;
