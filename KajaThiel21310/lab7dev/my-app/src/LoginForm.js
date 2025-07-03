import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nHasło: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Hasło"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Zaloguj</button>
    </form>
  );
}

export default LoginForm;
