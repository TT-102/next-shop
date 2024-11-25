import React from "react";
import styles from "./styles/MemberModal.module.css";
import { useState, FocusEvent } from "react";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { BsRobot } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";

interface CreateAccountProps {
  toggleContent: () => void;
}
export default function CreateAccount({ toggleContent }: CreateAccountProps) {
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [placeholderMail, setPlaceholderMail] = useState<string>("Mejl");
  const [firstName, setFirstName] = useState<string>("");
  const [placeholderFirstName, setPlaceholderFirstName] =
    useState<string>("Förnamn");
  const [lastName, setLastName] = useState<string>("");
  const [placeholderLastName, setPlaceholderLastName] =
    useState<string>("Efternamn");
  const [password, setPassword] = useState<string>("");
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [placeholderPassword, setPlaceholderPassword] =
    useState<string>("Lösenord");
  const [waitingForLogin, setWaitingForAPI] = useState<string>("");

  const handleFocus = (field: string) => {
    setActiveInput(field);
    if (field === "Mejl") setPlaceholderMail("");
    else if (field === "Förnamn") setPlaceholderFirstName("");
    else if (field === "Efternamn") setPlaceholderLastName("");
    else if (field === "Lösenord") setPlaceholderPassword("");
    setWaitingForAPI("");
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>, field: string) => {
    setActiveInput(null);
    if (field === "Mejl") setPlaceholderMail("Mejl");
    else if (field === "Förnamn") setPlaceholderFirstName("Förnamn");
    else if (field === "Efternamn") setPlaceholderLastName("Efternamn");
    else if (field === "Lösenord") setPlaceholderPassword("Lösenord");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value;
    if (field === "Mejl") setEmail(value);
    else if (field === "Förnamn") setFirstName(value);
    else if (field === "Efternamn") setLastName(value);
    else if (field === "Lösenord") setPassword(value);
    setWaitingForAPI("");
  };

  const handleLoginClick = () => {
    setWaitingForAPI("loading");
    setTimeout(() => {
      //test
      // Animation for 'success' or 'failed'
      setWaitingForAPI("failed");
      // setWaitingForAPI("success");
      setTimeout(() => {
        setWaitingForAPI("");
      }, 8000);
    }, 2000);
  };

  return (
    <div>
      <div className={`${styles.inputGroup}`}>
        <label
          className={`${styles.inputLabel} ${
            activeInput === "Förnamn" ? `${styles.activeLabel}` : ""
          }`}
        >
          Förnamn
        </label>
        <div style={{ position: "relative", display: "contents" }}>
          <IoPerson className={`${styles.inputIcons}`} />
          <input
            type="text"
            className={`${styles.userInfo} ${
              waitingForLogin === "dataNotValid" && !firstName ? "warning" : ""
            }`}
            placeholder={placeholderFirstName}
            onFocus={() => handleFocus("Förnamn")}
            onBlur={(e) => handleBlur(e, "Förnamn")}
            value={firstName}
            onChange={(e) => handleChange(e, "Förnamn")}
            onKeyPress={(e) => e.charCode !== 32}
          />
        </div>
      </div>
      <div className={`${styles.inputGroup}`}>
        <label
          className={`${styles.inputLabel} ${
            activeInput === "Efternamn" ? `${styles.activeLabel}` : ""
          }`}
        >
          Efternamn
        </label>
        <div style={{ position: "relative", display: "contents" }}>
          <IoPerson className={`${styles.inputIcons}`} />
          <input
            type="text"
            className={`${styles.userInfo} ${
              waitingForLogin === "dataNotValid" && !lastName ? "warning" : ""
            }`}
            placeholder={placeholderLastName}
            onFocus={() => handleFocus("Efternamn")}
            onBlur={(e) => handleBlur(e, "Efternamn")}
            value={lastName}
            onChange={(e) => handleChange(e, "Efternamn")}
            onKeyPress={(e) => e.charCode !== 32}
          />
        </div>
      </div>

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
            Kunde inte skapa medlemskap. Försök igen senare.
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
          <span className="submit">Bli medlem</span>
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
          Är du redan medlem?
        </p>
      </div>
      <button className="btn secondaryBtn" onClick={toggleContent}>
        Logga in
      </button>
    </div>
  );
}
