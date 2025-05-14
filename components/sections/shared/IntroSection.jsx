export default function IntroSection({ content }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
      <h2 className="text-3xl font-bold">{content.headline}</h2>
      <p className="text-lg text-muted-foreground">{content.text}</p>
    </section>
  );
}
