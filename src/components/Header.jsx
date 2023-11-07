import React, { useEffect } from "react";
import logo from "../assets/cinemesh.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInUser, signOutUser } from "../utils/reduxSlices/userSlice";
import { toggleGptSearchView } from "../utils/reduxSlices/gptSearchSlice";
import { changeLanguage } from "../utils/reduxSlices/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          signInUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(signOutUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully Signed Out!");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    // GPT Search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="overflow-x-hidden absolute w-full z-10 bg-gradient-to-b from-black flex justify-between">
      <img className="w-2/12" src={logo} alt="logo" />

      {user && (
        <div className="flex">
          {showGpt && (
            <select
              className="bg-gray-800 text-white rounded-lg px-2 h-8 mt-6"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES?.map((option) => (
                <option key={option?.identifier} value={option?.identifier}>
                  {option?.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white h-8 mx-4 mt-6 rounded-lg px-2 bg-purple-800 font-bold border-none "
            onClick={handleGptSearch}
          >
            {!showGpt ? "GPT Search ♾️" : "Home 🏠"}
          </button>
          <img className="mt-4 w-12 h-12" src={user?.photoURL} alt="logo" />
          <button
            className="text-white font-bold ml-2 mr-8 border-none"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
