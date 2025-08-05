import { useRef, useState, useEffect, useContext } from 'react';
import { auth, googleProvider } from "../../config/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
const Forge = () => {
    const [email, setEmail] = useState("");

    const resetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div><h1>Forgot Your Password</h1>
            <form>
                <input placeholder="Type your Email" onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <button onClick={resetPassword}>Reset</button>
            </form>

        </div>

    )
}

export default Forge