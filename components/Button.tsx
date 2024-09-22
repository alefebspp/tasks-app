import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "@/styles/Button.module.scss";

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

interface Props extends BaseProps {
  className?: string;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
