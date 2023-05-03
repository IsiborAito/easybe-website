/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MegaDrop.css";

const MegaDropdown = () => {
  return (
    <div className="dropdown">
      <span>Hover me</span>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <h3>Column 1</h3>
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            <a href="#">Item 4</a>
            <a href="#">Item 5</a>
          </div>
          <div className="column">
            <h3>Column 2</h3>
            <a href="#">Item 6</a>
            <a href="#">Item 7</a>
            <a href="#">Item 8</a>
            <a href="#">Item 9</a>
            <a href="#">Item 10</a>
          </div>
          <div className="column">
            <h3>Column 3</h3>
            <a href="#">Item 11</a>
            <a href="#">Item 12</a>
            <a href="#">Item 13</a>
            <a href="#">Item 14</a>
            <a href="#">Item 15</a>
          </div>
          <div className="column">
            <h3>Column 3</h3>
            <a href="#">Item 11</a>
            <a href="#">Item 12</a>
            <a href="#">Item 13</a>
            <a href="#">Item 14</a>
            <a href="#">Item 15</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
