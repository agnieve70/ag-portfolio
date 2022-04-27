import React from 'react'

function Skill({percent, skillname}) {
  return (
    <div className="skill-div mb-2">
      <span className='text-light'>{skillname}</span>
      <div
        class="progress"
        style={{ backgroundColor: "#00b8dc", height: "0.8rem" }}
      >
        <div
          class="progress-bar bg-light text-primary"
          role="progressbar"
          style={{ width: `${percent}%`, backgroundColor: "#40DFEF" }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default Skill