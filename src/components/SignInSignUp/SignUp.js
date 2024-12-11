import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import "./SignInSignUp.css";
import sing3 from "../../Images/sign-3-bg-removed.png";
import PrivateNav from "../PivateNav/PrivateNav";
import { app, db } from "../../firebaseConfig";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const [signin, setSignIn] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const auth = getAuth(app);
  const SignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        registerUser();
        setSignIn(true);
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  // register user method
  const registerUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Name: name,
        Phone: phone,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  // sigin method
  const SigIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/assignmenthelp/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const loadSigINPage = () => {
    setSignIn(true);
  };
  const loadSignUpPage = () => {
    setSignIn(false);
  };
  return (
    <>
      <PrivateNav />
      <div className="container sign-up-page">
        <div className="row">
          <div className="col-lg-7 col-md-6 sign-up-image-container">
            <div className="sign-up-image-section">
              <img
                src={sing3}
                alt="tablet-holding-lady"
                className="sig-up-img"
              ></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 form-section">
            {!signin ? (
              <p className="sign-up-p">
                <span className="border-bottom border-warning">Sign</span> up
              </p>
            ) : (
              <p className="sign-up-p">
                <span className="border-bottom border-warning">Sign</span> in
              </p>
            )}

            <div className="sign-up-form-section">
              {!signin ? (
                <div className="mb-3">
                  <label for="name" className="form-label dark-color">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label for="email" className="form-label dark-color">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {!signin ? (
                <div className="mb-3">
                  <label for="phone" className="form-label dark-color">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="+971..."
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label for="password" className="form-label dark-color">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="sign-up-btn">
              {!signin ? (
                <button
                  className="btn btn-rounded border-warning me-3 dark-color sign-btn"
                  onClick={SignUp}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  className="btn btn-rounded border-warning me-3 dark-color sign-btn"
                  onClick={SigIn}
                >
                  Sign in
                </button>
              )}

              {!signin ? (
                <button className="btn  text-warning" onClick={loadSigINPage}>
                  <span className="border-bottom border-warning">Sign</span> in
                </button>
              ) : (
                <button className="btn  text-warning" onClick={loadSignUpPage}>
                  <span className="border-bottom border-warning">Sign</span> Up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
