import React from "react";

function Header({ mainBg, oracleImg }) {
  return (
    <header className="seminars-header">
      <img src={mainBg} className="seminars-header-main" />
      <img src={oracleImg} className="seminars-header-oracle" />
      <h2 className="seminars-header-title">REDEFINING THE FUTURE</h2>
    </header>
  );
}

export default Header;
