// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Optional: for styling

// const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple validation (you can add backend auth later)
//     if (email === 'admin@example.com' && password === 'admin@123') {
//       navigate('/'); // Redirect to home
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy auth logic - replace with real API call
    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('token', 'loggedin'); // Save token to simulate login
      navigate('/'); // ✅ Redirect to home
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md space-y-4 w-80"
      >
        <h2 className="text-xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full px-3 py-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full px-3 py-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
