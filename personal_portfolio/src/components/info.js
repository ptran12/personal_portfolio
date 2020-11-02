import React from "react"

import { FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "white" }}>
        <span style={{ color: "white" }}>Hello, my name is</span> <br />
        Phi.
      </div>
      <div style={{ color: "yellow" }} className="h1 code mt-4 mb-3">
        {"{"}
      </div>
      <div className="mx-5 my-4 h3 text-justify info">
        I really enjoy coding and learning new things.
        <br /> I strive to always learn more and improve as much as possible so
        that I can grow as a Developer and person.
      </div>
      <div style={{ color: "yellow" }} className="h1 code mt-2 mb-3">
        {"}"}
      </div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://github.com/ptran12">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/phitran-/">
          <LinkedIn />
        </a>
      </div>
    </div>
  )
}
