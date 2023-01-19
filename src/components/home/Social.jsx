import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* <a
        href="quiroga.lucasoffice@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-envelope"></i>
      </a> */}
      <a
        href="https://www.linkedin.com/in/lucas-lautaro-quiroga-61aa801a7/?trk=public-profile-join-page"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/Lucas-Quiroga"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
