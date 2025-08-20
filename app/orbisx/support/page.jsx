// app/orbisx/support/page.jsx
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata = {
  title: "OrbisX Support — Coming Soon | Code Maze",
  robots: { index: false, follow: false },
};

export default function OrbisXSupport() {
  return (
    <ComingSoon
      title="Support (Coming soon)"
      description="Access tickets, billing, and priority help for your OrbisX setup. In the meantime, use our contact form."
      ctaHref="/contact?service=OrbisX%20Support"
      ctaLabel="Contact support"
    />
  );
}
