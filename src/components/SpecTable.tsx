import AnimatedSection from "@/components/AnimatedSection";

interface Spec {
  label: string;
  value: string;
}

const SpecTable = ({ specs }: { specs: Spec[] }) => (
  <AnimatedSection>
    <div className="max-w-2xl mx-auto rounded-xl border border-border overflow-hidden industrial-shadow">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="px-6 py-3 text-left font-heading font-bold">Parameter</th>
            <th className="px-6 py-3 text-left font-heading font-bold">Specification</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((s, i) => (
            <tr key={s.label} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
              <td className="px-6 py-3 font-medium text-foreground">{s.label}</td>
              <td className="px-6 py-3 text-muted-foreground">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </AnimatedSection>
);

export default SpecTable;
