import {useState} from 'react'
import axios from 'axios';


function App() {
    const [username, setUsername] = useState("test@example.com")
    const [password, setPassword] = useState("password")

    const doLogin = () => {
        const laravelDomain = 'http://localhost:8000'

       axios.defaults.withCredentials = true;
       axios.defaults.withXSRFToken = true;

        //get csrf token
        axios.get(laravelDomain + '/sanctum/csrf-cookie')
            .then(function (response) {
                console.log(response);

                //try to login
                axios.post(laravelDomain + '/api/login', {
                    email: username,
                    password: password
                })
                    .then(function (response) {
                        console.log(response);

                        //get user data
                        axios.get(laravelDomain + '/api/user')
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button
                    onClick={doLogin}
                >
                    Submit
                </button>
            </div>
        </>
    )
}

export default App
