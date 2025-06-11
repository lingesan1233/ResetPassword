import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      alert(res.data.message);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
  <div className="page">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
