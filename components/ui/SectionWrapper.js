export default function SectionWrapper({ children, ...props }) {
  return (
    <section {...props} className={`py-16 ${props.className || ""}`}>
      {children}
    </section>
  );
}
