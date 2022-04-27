import React from 'react'
import InfoContent from '../UI/InfoContent';
import Skill from './Skill';

function Info() {
  return (
    <div id="div-info" className="bg-info px-4 py-4 pb-5">
      <h2 className="text-light">AG NIEVE</h2>
      <h6 className="text-light">Full Stack Developer</h6>
      <hr />
      <InfoContent
        icon={"fas fa-map-marker-alt"}
        content={"Lim del Rosario Street, Digos City, Davao del Sur"}
      />
      <InfoContent
        icon={"fa-solid fa-address-book"}
        content={"+639777593138"}
      />
      <InfoContent
        icon={"fa-solid fa-envelope"}
        content={"agnieve70@gmail.com"}
      />
      <InfoContent
        icon={"fa-brands fa-facebook"}
        content={"https://www.facebook.com/gabriel.nieve.37"}
      />
      <hr />
      <h4 className="text-light">Skills</h4>
      <Skill percent={90} skillname={"HTML"} />
      <Skill percent={93} skillname={"CSS"} />
      <Skill percent={93} skillname={"Javascript"} />
      <Skill percent={50} skillname={"Node.js"} />
      <Skill percent={90} skillname={"React.js"} />
      <Skill percent={25} skillname={"Next.js"} />
      <Skill percent={85} skillname={"MySql"} />
      <Skill percent={90} skillname={"PHP"} />
      <Skill percent={95} skillname={"Laravel"} />
      <Skill percent={92} skillname={"CodeIgniter"} />
    </div>
  );
}

export default Info