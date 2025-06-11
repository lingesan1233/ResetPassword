import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/reset-password`, { email, newPassword });
      alert(res.data.message);
    } catch (err) {
      alert('Reset failed');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="New Password" onChange={e => setNewPassword(e.target.value)} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
