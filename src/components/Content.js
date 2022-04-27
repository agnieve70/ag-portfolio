/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Content.module.css";
import Timeline from "./Timeline";

function Content() {

    const experiences = [
      {
        title: "2015 - 2016",
        header: "Graphics Designer",
        content:
          "I've been a Graphics Designer on Sabrimarth Marketing for 1 Year and I stopped to come back for school",
      },
      {
        title: "2018 - 2019",
        header: "OJT",
        content:
          "Created JOMS (Job Order Management System) on Capitol of Davao del Sur as part of our On The Job Training and the Programming Language used was CodeIgniter HMVC",
      },
      {
        title: "2019 - 2020",
        header: "Junior Full Stack Developer",
        content: (
          <ul>
            <li>Created a Document Tracing Application to trace documents</li>
            <li>Created Risk Reduction Management System during earthquake</li>
            <li>Created Senior Citizen Automation of ID Printing</li>
          </ul>
        ),
      },
      {
        title: "2020 - 2021",
        header: "Senior Full Stack Developer",
        content: (
          <ul>
            <li>Created Government Service Data Keeping</li>
            <li>Created Risk Reduction Management System during earthquake</li>
            <li>Created Senior Citizen Automation of ID Printing</li>
            <li>Help Manage the COVID Tracing Application</li>
          </ul>
        ),
      },
    ];
  return (
    <div>
      <h1 className="text-info">
        About Me{" "}
        {/* <Link
          className={"btn btn-info text-light rounded-pill px-4 py-2"+styles.float_end}
          to="/products-and-services"
        >
          View Products And Services
        </Link> */}
      </h1>
      <p className="text-justify">
        A Graduate of Bachelors of Science and Information Technology,
        passionate about Programming and Developing System. Eager to contribute
        to team success through hard work. A dedicated and energetic individual
        seeking a position in an organization which I can utilize all my skills,
        knowledge, practical experience and interpersonal skills which will be
        beneficial to the company.
      </p>
      <hr />
      <h1 className="text-info">Work Experience</h1>
      <Timeline timelines={experiences} />
      <h1 className="text-info">Certificates</h1>
      <ul>
        <li>
          {" "}
          <a
            id={styles.a_link}
            href="https://drive.google.com/file/d/1Ja0dRaKeuQ3vb6A5kJhOCd7tj3U4GsKO/view?usp=sharing"
            target="_blank"
          >
            Microsoft Software Development Fundamentals
          </a>{" "}
        </li>
        <li>
          {" "}
          <a
            id={styles.a_link}
            href="https://drive.google.com/file/d/1AXm3soG01FjGhoB6NNydC3jki5HVsY9l/view?usp=sharing"
            target="_blank"
          >
            Microsoft Database Administration Fundamentals
          </a>{" "}
        </li>
        <li>
          <a
            id={styles.a_link}
            href="https://drive.google.com/file/d/1loYynb7UDHBBsJVE0jlHB1bUvggQrZL3/view?usp=sharing"
            target="_blank"
          >
            Microsoft Introduction to Programming using Java
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Content;
