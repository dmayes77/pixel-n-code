// app/orbisx/templates/page.jsx
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata = {
  title: "OrbisX Templates — Coming Soon | Code Maze",
  robots: { index: false, follow: false },
};

export default function OrbisXTemplates() {
  return (
    <ComingSoon
      title="Templates (Coming soon)"
      description="Ready-to-use SMS/email snippets, quote/invoice presets, and booking copy that converts."
    />
  );
}
