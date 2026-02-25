import AnimatedSection from "@/components/AnimatedSection";

interface SpecTableProps {
  rows: Array<{ label: string; value: string }>;
}

const SpecTable = ({ rows }: SpecTableProps) => (
  <section className="bg-section-gradient py-20">
    <div className="container">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Technical Snapshot</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.08} className="mt-8">
        <div className="overflow-hidden rounded-xl border bg-card shadow-lg">
          <table className="w-full text-left" aria-label="Product specification table">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b last:border-b-0">
                  <th scope="row" className="w-[42%] bg-muted/50 px-6 py-4 text-sm font-semibold text-foreground md:text-base">
                    {row.label}
                  </th>
                  <td className="px-6 py-4 text-sm text-muted-foreground md:text-base">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SpecTable;
