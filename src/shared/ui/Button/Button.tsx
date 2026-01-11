import styles from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
}

export const Button = ({ children, href, variant = "primary" }: Props) => {
  const className = `${styles.btn} ${styles[variant]}`;

  if (href)
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  return <button className={className}>{children}</button>;
};
