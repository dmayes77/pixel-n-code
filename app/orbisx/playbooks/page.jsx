// app/orbisx/playbooks/page.jsx
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata = {
  title: "OrbisX Playbooks — Coming Soon | Code Maze",
  robots: { index: false, follow: false },
};

export default function OrbisXPlaybooks() {
  return (
    <ComingSoon
      title="Playbooks (Coming soon)"
      description="Step-by-step recipes for pipelines, automations, and booking flows tailored to detailers & tint shops."
    />
  );
}
