import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/signup`, { email, password });
      alert(res.data.message);
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="page">
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
