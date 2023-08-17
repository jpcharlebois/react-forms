import { useState } from 'react'

const AUTH_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
        const response = await fetch(AUTH_URL,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const result = await response.json();
          console.log("authenticate results: ", result);
          setSuccessMessage(result.message);
          setUsername(result.data.username);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='authenticate'>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {username && <p className='username'>{username}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}