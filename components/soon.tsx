// credit to Tiaan on CodePen: https://codepen.io/tiaan
import React from "react";
import "../styles/soon.css";

export default function Soon() {
  return (
    <>
      <div className="overlay"></div>
      <div className="stars" aria-hidden="true"></div>
      <div className="starts2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
      <main className="main">
        <section className="contact mx-3">
          <h1 className="title">Coming Soon</h1>
          <h2 className="sub-title">Site Under Construction</h2>
        </section>
      </main>
    </>
  );
}
