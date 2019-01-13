import React, { Component } from "react";
import SripesBg from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";

export default class MeetPlayers extends Component {
  render() {
    const names = [
      { id: 0, text: "Meet", marginBottom: "20px" },
      { id: 1, text: "the", marginBottom: "20px" },
      { id: 2, text: "Players", marginBottom: "20px" },
    ];
    const homeText = names.map(name => {
      return (
        <div key={name.id}>
          <Tag
            bck="#0e1731"
            size="100px"
            color="#fff"
            add={{
              display: "inline-block",
              marginBottom: `${name.marginBottom}`,
              border: name.border,
            }}
          >
            {name.text}
          </Tag>
        </div>
      );
    });

    return (
      <div
        className="home_meetplayers"
        style={{ background: `#ffffff url(${SripesBg})` }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">card</div>
            <div className="home_text_wrapper">{homeText}</div>
            <Tag
              bck="##ffffff"
              size="27px"
              color="#0e1731"
              link={true}
              linkTo="/the_team"
              add={{
                display: "inline-block",
                marginBottom: "27px",
                border: "1px solid #0e1731",
              }}
            >
              Meet there here
            </Tag>
          </div>
        </div>
      </div>
    );
  }
}
