import React from "react";

function Timeline({ timelines }) {
  return (
    <div class="row">
      <div class="col-md-12">
        <div id="content">
          <ul class="timeline">
            {timelines.map((timeline) => {
              return (
                <li class="event" data-date={timeline.title}>
                  <h3>{timeline.header}</h3>
                  <p>{timeline.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
