import { useState } from 'react'

const SIGNUP_URL = 'https://fsa-jwt-practice.herokuapp.com/signup';

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello 👋");

        try {
            const response = await fetch(SIGNUP_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "username": username,
                                       "password": password})
            });
            const result = await response.json();
            console.log("sign up response: ", result);
            setToken(result.token);
        } catch (error) {
            setError(error.message);
        }
      }

    return (
    <> 
      <div className='sign-up'>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                    <input 
                        type='text' 
                        required={true} 
                        minLength={8} 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: 
                    <input 
                        type='password' 
                        required={true} 
                        minLength={8} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
      </div>
    </>
    )
}