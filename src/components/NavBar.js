import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const hLink = links.map((myLink)=>{
    return "#"+myLink;
  })
  const tagLinks = links.map((mylink)=>{
    return <a href={hLink} key={mylink}>{mylink}</a>})

  return <nav>
    {tagLinks}
  </nav>;
}

export default NavBar;
