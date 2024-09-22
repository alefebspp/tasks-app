import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "@/styles/Header.module.scss";
import LogoType from "./LogoType";
import LogoMark from "./LogoMark";

export default function Header() {
  const currentDate = new Date();

  const formattedDate = format(currentDate, "EEEE, dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const weekDayUppercaseLetter = formattedDate.charAt(0).toUpperCase();

  return (
    <header className={styles.container}>
      <div className={styles["logo-container"]}>
        <LogoMark />
        <LogoType />
      </div>
      <h1 className={styles.title}>Bem-vindo de volta, Marcus</h1>
      <p
        className={styles["date-description"]}
      >{`${weekDayUppercaseLetter}${formattedDate.substring(1)}`}</p>
    </header>
  );
}
