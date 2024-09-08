import Link from "next/link";
function Nav() {
  return (
    <nav>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/carlos-albuquerque-carneiro/?locale=pt_BR"
      >
        Linkedin
      </a>{" "}
      |{" "}
      <a target="_blank" href="https://github.com/cacpmw">
        Github
      </a>
      {/* <Link href="/blog">| Blog</Link> */}
    </nav>
  );
}

export default Nav;
