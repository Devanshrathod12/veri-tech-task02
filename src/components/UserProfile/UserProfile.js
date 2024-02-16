import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://tse4.mm.bing.net/th?id=OIP.5OnzJSs4DgH1I_0f97453gAAAA&pid=Api&P=0&h=180" />
          </div>
          <h3>LEADERSHIP TEAM</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="profile__card2">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://img.freepik.com/premium-photo/photo-document-passport-id-mature-caucasian-man-suit_262388-3596.jpg?w=2000" />
          </div>
          <h3>DEVELOPMENT TEAM</h3>
          <p>SOFTWARE ENGINEER</p>
        </div>
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://tse2.mm.bing.net/th?id=OIP.uSm9xPYG0DuANgJHnlWvSwHaLH&pid=Api&P=0&h=180" />
          </div>
          <h4>SALES AND MARKETING TEAM</h4>
          <p>SALES OFFICER</p>
        </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}