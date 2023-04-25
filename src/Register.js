import React from "react";
import "./App.css";

export default function Forms(props) {
  return (
    <form>
      <div className="input">
        <div>
          <input placeholder="userName"  onChange={={e=>props.setUserName(e.target.value)}}/>
        </div>
        <div>
          <input placeholder="DOB" />
        </div>
        <div>
          <input placeholder="gmail" />
        </div>
        <div>
          <input placeholder="password" />
        </div>
        <diV>
          <input placeholder="re-password" />
        </diV>
      </div>
    </form>
  );
}
