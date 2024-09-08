import Link from "next/link";
import Image from "next/image";

import gitHubIcon from "../../public/icons/github-mark.svg";
import linkedinIcon from "../../public/icons/linkedin-48.svg";

function Nav() {
  return (
    <nav className="flex">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/carlos-albuquerque-carneiro/?locale=pt_BR"
      >
        <Image
          class="w-10 h-10 m-2"
          src={linkedinIcon}
          alt="Connect with me on Linkedin"
        />
      </a>
      <a target="_blank" href="https://github.com/cacpmw">
        <Image class="w-8 h-8 m-2" src={gitHubIcon} alt="Follow me on Github" />
      </a>
      {/* <Link href="/blog">| Blog</Link> */}
    </nav>
  );
}

export default Nav;
