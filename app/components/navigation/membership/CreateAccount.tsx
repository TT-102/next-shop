import React from "react";
interface CreateAccountProps {
  toggleContent: () => void;
}
export default function CreateAccount({ toggleContent }: CreateAccountProps) {
  return (
    <div>
      CreateAccount
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
      <button className="btn secondary-button" onClick={toggleContent}>
        Logga in
      </button>
    </div>
  );
}
