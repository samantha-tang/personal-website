import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export function MailIcon(): React.JSX.Element {
  return (
    <a href="mailto:samanthaxytang03@gmail.com">
      <FaEnvelope className="icon" />
    </a>
  );
};

export function GitHubIcon(): React.JSX.Element {
  return (
    <a
      href="https://github.com/samantha-tang"
      target="_blank"
      rel="noopener noreferrer"
      className="icon">
      <FaGithub className="icon"
    />
    </a>
  );
};