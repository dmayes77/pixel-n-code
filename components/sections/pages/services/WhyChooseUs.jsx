export default function WhyChooseUs({ content }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        {content.headline}
      </h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 text-center">
        {content.reasons.map((reason, index) => (
          <div key={index} className="space-y-3">
            <div className="text-primary text-4xl mb-2">{reason.icon}</div>
            <h3 className="text-xl font-semibold">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
