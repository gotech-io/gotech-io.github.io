import Member from "../../../../../common/member";
import React from "react";

function ListMembers({ teams }) {
  return (
    <div className="team" id="team">
      {teams.length &&
        teams.map(({ name, position, image, linkedin }) => {
          return (
            <Member
              key={name}
              name={name}
              position={position}
              image={image}
              linkedin={linkedin}
            />
          );
        })}
    </div>
  );
}

export default ListMembers;
