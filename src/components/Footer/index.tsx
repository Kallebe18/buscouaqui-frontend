/* eslint-disable react/jsx-no-target-blank */
import { FooterContainer } from "./styles";
import GithubIcon from "../../assets/github_icon.png";

export function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2021 buscouaqui.com.br</p>
      <div style={{ marginTop: 5, display: "flex", alignItems: "center" }}>
        <p style={{ margin: 10 }}>Kallebe Gomes</p>
        <a
          href="https://github.com/Kallebe18/buscouaqui-frontend"
          target="_blank"
        >
          <img width={30} height={30} src={GithubIcon} alt="Github icon" />
        </a>
      </div>
    </FooterContainer>
  );
}
