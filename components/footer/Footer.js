import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className={`${styles.footer} nao-imprimir`}>
      <Link href="/">
        <a className={styles.logo}>
          <svg
            className="nav-bar__svg"
            id="Camada_1"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Bob</title>
            <rect width={512} height={512} style={{ fill: "transparent" }} />
            <path
              d="M245.24,258.6l-78.35,67.07,78.35,74.09,78.36-74.09ZM181.84,326l63.41-54.28L308.65,326l-63.41,60Z"
              style={{
                fill: "#211915",
                stroke: "#211915",
                strokeMiterlimit: 10,
                strokeWidth: "3px",
              }}
            />
            <polygon
              points="212.54 286.59 174.7 254.81 266.97 177.3 132.25
  64.14 132.25 290.46 132.25 445.48 217.69 373.71 166.89 325.67 212.54 286.59"
              style={{ fill: "#211915" }}
            />
            <polygon
              points="379.75 272.55 301.4 205.47 301.4
  306.66 323.59 325.66 379.75 272.55"
              style={{ fill: "#211915" }}
            />
            <polygon
              points="301.4 346.67 301.4 447.87 379.75 373.77 323.58 325.69 301.4 346.67"
              style={{ fill: "#211915" }}
            />
          </svg>
        </a>
      </Link>

      <ul className={styles.footer__links}>
        <li>
          <Link href="/">
            <a>Quem</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/artigos">
            <a>Artigos</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/habilidades">
            <a>Habilidades</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfólio/Serviços</a>
          </Link>{" "}
        </li>
        <li>
          <Link href="/contato">
            <a>Contato</a>
          </Link>{" "}
        </li>
      </ul>
      <div className={styles.footer__text}>
        <div className={styles.footer__creditos}>
          <p>
            Por{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://www.brunobarros.online"
            >
              Bruno Barros
            </a>
            , com o ❤️ e muita 💪
          </p>
          <p>2019-2021 brunobarros.dev</p>
          <p>
            Hospedado por{" "}
            <a target="_blank" rel="noopener" href="https://vercel.com/">
              Vercel
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener" href="https://nextjs.org/">
              NEXT.<span>JS</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
