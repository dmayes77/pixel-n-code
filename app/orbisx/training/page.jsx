// app/orbisx/training/page.jsx
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata = {
  title: "OrbisX Training — Coming Soon | Code Maze",
  robots: { index: false, follow: false },
};

export default function OrbisXTraining() {
  return (
    <ComingSoon
      title="Training (Coming soon)"
      description="Short, practical videos on OrbisX setup, team workflows, and ongoing optimization."
    />
  );
}
