import { useState, FocusEvent } from "react";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { BsRobot } from "react-icons/bs";

interface SigninProps {
  toggleContent: () => void;
}

export default function Signin({ toggleContent }: SigninProps) {
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [placeholderMail, setPlaceholderMail] = useState<string>("Mejl");
  const [password, setPassword] = useState<string>("");
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [placeholderPassword, setPlaceholderPassword] =
    useState<string>("Lösenord");
  const [waitingForLogin, setWaitingForLogin] = useState<string>("");

  const handleFocus = (field: string) => {
    setActiveInput(field);
    if (field === "Mejl") setPlaceholderMail("");
    else if (field === "Lösenord") setPlaceholderPassword("");
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>, field: string) => {
    setActiveInput(null);
    if (field === "Mejl") setPlaceholderMail("Mejl");
    else if (field === "Lösenord") setPlaceholderPassword("Lösenord");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value;
    if (field === "Mejl") setEmail(value);
    else if (field === "Lösenord") setPassword(value);
  };

  const handleLoginClick = () => {
    setWaitingForLogin("loading");
    // Simulate login process
    setTimeout(() => {
      // Set to 'success' or 'failed' based on your logic
      setWaitingForLogin("success"); // or "failed" for error simulation
    }, 2000);
  };

  return (
    <div>
      <div className="input-group">
        <label
          className={`input-label ${
            activeInput === "Mejl" ? "activeLabel" : ""
          }`}
        >
          Mejl
        </label>
        <div style={{ position: "relative", display: "contents" }}>
          <IoMail className="input-icons" />
          <input
            type="password"
            className={`user-info ${
              waitingForLogin === "dataNotValid" && (!password || !emailValid)
                ? "warning"
                : ""
            }`}
            placeholder={placeholderMail}
            onFocus={() => handleFocus("Mejl")}
            onBlur={(e) => handleBlur(e, "Mejl")}
            value={email}
            onChange={(e) => handleChange(e, "Mejl")}
            onKeyPress={(e) => e.charCode !== 32}
          />
        </div>
      </div>

      <div className="input-group">
        <label
          className={`input-label ${
            activeInput === "Lösenord" ? "activeLabel" : ""
          }`}
        >
          Lösenord
        </label>
        <div style={{ position: "relative", display: "contents" }}>
          <RiLockPasswordFill className="input-icons" />
          <input
            type="email"
            className={`user-info ${
              waitingForLogin === "dataNotValid" &&
              (!password || !passwordValid)
                ? "warning"
                : ""
            }`}
            placeholder={placeholderPassword}
            onFocus={() => handleFocus("Lösenord")}
            onBlur={(e) => handleBlur(e, "Lösenord")}
            value={password}
            onChange={(e) => handleChange(e, "Lösenord")}
            onKeyPress={(e) => e.charCode !== 32}
          />
        </div>
      </div>
      <button
        className="main-btn btn"
        onClick={handleLoginClick}
        disabled={waitingForLogin === "success"}
      >
        <span className="submit">Logga in</span>

        {/* Loading State */}
        {waitingForLogin === "loading" && (
          <span className="loading">
            <HiMiniArrowPath
              style={{ color: "white", transform: "scaleX(-1)" }}
            />
          </span>
        )}

        {/* Success State */}
        {waitingForLogin === "success" && (
          <span className="check">
            <FaCheck style={{ marginRight: "10px" }} />
          </span>
        )}

        {/* Error State */}
        {waitingForLogin === "failed" && (
          <span className="check">
            <BsRobot style={{ marginRight: "4px", fontSize: "23px" }} />
            Fel inloggningsuppgifter
          </span>
        )}
      </button>

      <div style={{ position: "relative", margin: "1em 0" }}>
        <hr style={{ margin: "35px 0", border: "1px solid lightgrey" }} />
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "2px",
            position: "absolute",
            top: "-10px",
            left: "0",
            right: "0",
            background: "white",
            padding: "0 5px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          Är du inte medlem än?
        </p>
      </div>

      <button className="btn secondary-button" onClick={toggleContent}>
        Bli medlem
      </button>
    </div>
  );
}
