interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dark";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-[var(--accent-light)] text-[var(--accent)] border-transparent",
    accent: "bg-white text-[var(--text-secondary)] border-[var(--border)]",
    dark: "bg-[rgba(255,255,255,0.08)] text-[var(--text-on-dark-muted)] border-transparent"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-[6px] border ${styles[variant]}`}>
      {children}
    </span>
  );
}
