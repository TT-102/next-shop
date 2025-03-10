import styles from "./styles/MemberModal.module.css";
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
      //test
      // Animation for 'success' or 'failed'
      setWaitingForLogin("failed");
      // setWaitingForLogin("success");

      setTimeout(() => {
        setWaitingForLogin("");
      }, 4000);
    }, 2000);
  };

  return (
    <div>
      <div className={`${styles.inputGroup}`}>
        <label
          className={`${styles.inputLabel} ${
            activeInput === "Mejl" ? `${styles.activeLabel}` : ""
          }`}
        >
          Mejl
        </label>
        <div style={{ position: "relative", display: "contents" }}>
          <IoMail className={`${styles.inputIcons}`} />
          <input
            type="mail"
            className={`${styles.userInfo} ${
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

      <div className={`${styles.inputGroup}`}>
        <label
          className={`${styles.inputLabel} ${
            activeInput === "Lösenord" ? `${styles.activeLabel}` : ""
          }`}
        >
          Lösenord
        </label>
        <div style={{ position: "relative", display: "contents" }}>
          <RiLockPasswordFill className={`${styles.inputIcons}`} />
          <input
            type="password"
            className={`${styles.userInfo} ${
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

      {waitingForLogin === "failed" && (
        <div>
          <p style={{ color: "darkred", marginBottom: "20px" }}>
            Inloggningen misslyckades
          </p>
        </div>
      )}

      <button
        className={`mainBtn btn ${waitingForLogin === "failed" ? "failed" : ""} 
        ${waitingForLogin === "success" ? "success" : ""}`}
        onClick={handleLoginClick}
        disabled={waitingForLogin === "success"}
      >
        {/* Conditional Text and Icon Rendering */}
        {waitingForLogin === "loading" ? (
          <span className="loading">
            <HiMiniArrowPath className="spinner" />
          </span>
        ) : waitingForLogin === "success" ? (
          <span className="check">
            <FaCheck style={{ marginRight: "10px" }} />
          </span>
        ) : waitingForLogin === "failed" ? (
          <span className="check">
            <BsRobot style={{ marginRight: "10px", fontSize: "23px" }} />
            Eh...
          </span>
        ) : (
          <span className="submit">Logga in</span>
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

      <button className="btn secondaryBtn" onClick={toggleContent}>
        Bli medlem
      </button>
    </div>
  );
}
