import React from "react";
import { Tag } from "../../ui/misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          add={{ background: "#0e1731", fontSize: "50px", color: "#fff" }}
        >
          Matches
        </Tag>
        BLOCK
        <Tag
          add={{ background: "#fff", fontSize: "22px", color: "#000" }}
          link={true}
          linkTo="/the_team"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
