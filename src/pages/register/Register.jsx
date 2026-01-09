import { auth, googleProvider } from "../../config/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.scss"
import "./Register.css"

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");


    useEffect(() => {
        console.log(auth?.currentUser?.email)
    }, [email])

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [validPwd, setValidPwd] = useState(false);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, pwd);
        } catch (err) {
            console.log(err);
        }
        await window.location.reload(true);
        window.location.replace("/shorturl")
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
        await window.location.reload(true);
        window.location.replace("/shorturl")
    };



    return (
        <>

            <section>
                <div className="wrapper">
                    <div className="logo">
                        <Link to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx46BgSMG_BlM4CANwlEqOcHTmY8qT2pstw&s" alt="" />
                        </Link>
                    </div>
                    <div className="text-center mt-4 name">
                        Sign up
                    </div>


                    <form className="p-3 mt-3">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input
                                type="email"
                                required
                                placeholder="Type in your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input
                                required
                                placeholder="Type a strong password"
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                        </div>
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password"
                                required
                                placeholder="Confirm your password"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                        </div>
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        <button className="btn mt-3" onClick={signUp} disabled={!validPwd || !validMatch ? true : false} >Register</button>
                        <div >
                            <br />

                            <button onClick={signInWithGoogle} className="google-button" > <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="" className="google-icon" />Sign in with Google</button>


                        </div>

                    </form>

                    <div className="text-center fs-6">
                        Already have an account? <Link to="/login"><b>Sign in</b></Link>
                    </div>

                    {/* <button onClick={logout}> Logout </button> */}

                </div>
            </section>

        </>
    );
};
export default Register;