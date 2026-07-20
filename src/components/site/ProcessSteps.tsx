export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <li key={`${step.number}-${step.title}`} className="bg-background p-6 lg:p-7">
          <p className="font-serif text-3xl text-[var(--gold)]">{step.number}</p>
          <h3 className="mt-4 font-serif text-xl text-[var(--ink)]">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
