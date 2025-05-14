import ServiceCard from "../../../ui/ServiceCard";

export default function ServicesGrid({ content }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 tablet:grid-cols-2 gap-10">
      {content.services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </section>
  );
}
