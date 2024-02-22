import type { CSSProperties, FC } from "react";

const headerStyles: Record<string, CSSProperties | undefined> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 48px",
    borderBottom: "1px solid rgb(235, 236, 239)",
  },
  navigation: {
    flex: 1,
  },
  navigationList: {
    display: "flex",
    listStyle: "none",
    justifyContent: "center",
    gap: "16px",
  },
  link: {
    color: "#828282",
    fontFamily: "Lato, system-ui, sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "27px",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },
  contactButton: {
    boxSizing: "border-box",
    height: "40px",
    width: "90px",
    padding: "16px",
    background: "#CA2F35",
    borderRadius: "8px",
    fontFamily: "Lato, system-ui, sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Header: FC = () => {
  return (
    <header style={headerStyles.header}>
      <img
        src="https://www.bitovi.com/hubfs/limbo-generated/imgs/logos/bitovi-logo-23.svg"
        alt="Bitovi Home Logo"
      />
      <nav style={headerStyles.navigation}>
        <ul style={headerStyles.navigationList}>
          <li>
            <a style={headerStyles.link}>Services</a>
          </li>
          <li>
            <a style={headerStyles.link}>Client Work</a>
          </li>
          <li>
            <a style={headerStyles.link}>Our Team</a>
          </li>
          <li>
            <a style={headerStyles.link}>Open Source</a>
          </li>
          <li>
            <a style={headerStyles.link}>Blog</a>
          </li>
          <li>
            <a style={headerStyles.link}>Academy</a>
          </li>
          <li>
            <a style={headerStyles.link}>Jobs</a>
          </li>
        </ul>
      </nav>
      <a style={headerStyles.contactButton}>Contact</a>
    </header>
  );
};

export default Header;
