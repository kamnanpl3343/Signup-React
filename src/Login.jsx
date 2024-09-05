import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';


const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [userBlurred, setUserBlurred] = useState(false);

  const [pwdBlurred, setPwdBlurred] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!user || !pwd) {
      setErrMsg('Please fill in all fields.');
      return;
    }

    // Check if the username already exists
    const response = await axios.get("http://localhost:8001/data")
    const users = response.data;
    console.log(users);
    const matcheduser = users.find(u => u.user === user);
    console.log(matcheduser);
    try {
      if (matcheduser) {
        if (matcheduser.pwd === pwd) {
          alert("login succesfully");
        }
        else {
          setErrMsg("Wrong Password");
        }
      }
      else if (user !== "") {
        setErrMsg("Wrong Username");
      }
    }

    catch (err) {
      setErrMsg('Login failed. Please try again later.');
    }
  }
  return (
    <section >
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1 className='heading'>Login</h1>
      <form onSubmit={handlesubmit}>
        <div className='items'>
          <label htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            aria-describedby="uidnote"
            value={user}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => {
              setUserFocus(false);
              setUserBlurred(true);
            }
            }
          />
          <p id="uidnote" className={(userBlurred && user === "") ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Username Cannot Be Blank ..<br />
          </p>

        </div>

        <div className='items'>
          <label htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            onFocus={() => setPwdFocus(true)}
            aria-describedby='upwnote'
            onBlur={() => {
              setPwdFocus(false);
              setPwdBlurred(true);
            }
            }
          />
          <p id="upwnote" className={(pwdBlurred && pwd === "") ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Password Cannot Be Blank ..<br />
          </p>
        </div>
        <button type="submit"  >Login</button>

      </form>

      <p>
        Not Registered yet?<br />
        <span className="line">
          {/*put router link here*/}
          <Link to="/">Register</Link>
        </span>
      </p>

    </section>
  )
}

export default Login
