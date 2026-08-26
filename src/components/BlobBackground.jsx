export default function BlobBackground({ variant = "hero" }) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-20 dark:opacity-30 dark:mix-blend-screen blur-3xl animate-blob"
          style={{ background: "#3B82F6" }}
        />
        <div
          className="absolute -right-24 top-10 h-[24rem] w-[24rem] rounded-full opacity-15 dark:opacity-25 dark:mix-blend-screen blur-3xl animate-blob"
          style={{ background: "#8B5CF6", animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full opacity-15 dark:opacity-20 dark:mix-blend-screen blur-3xl animate-blob"
          style={{ background: "#06B6D4", animationDelay: "6s" }}
        />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-20 dark:opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full opacity-10 dark:opacity-[0.12] dark:mix-blend-screen blur-3xl animate-blob"
        style={{ background: "#3B82F6" }}
      />
      <div
        className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full opacity-10 dark:opacity-[0.12] dark:mix-blend-screen blur-3xl animate-blob"
        style={{ background: "#8B5CF6", animationDelay: "4s" }}
      />
    </div>
  );
}
