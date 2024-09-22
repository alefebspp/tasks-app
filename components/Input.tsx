import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "@/styles/Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegister<any>;
  label?: string;
  name: string;
};

export default function Input({ register, name, label, ...props }: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register?.(name)}
        className={styles.input}
        {...props}
      />
    </div>
  );
}
