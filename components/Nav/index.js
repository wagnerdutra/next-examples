import React from "react";
import Link from "next/link";
import "./styles.scss";

const links = [
  { href: "/post", path: "[pid]", label: "Fcebook" },
  { href: "/post", path: "[pid]", label: "GitHub" }
].map(link => ({ ...link, key: `nav-link-${link.href}-${link.label}` }));

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label, path }) => (
        <Link
          key={key}
          href={`${href}/${path}?teste=Wagner`}
          as={`${href}/${label}`}
        >
          <a>{label}</a>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Nav;
