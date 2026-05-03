interface Props {
  id?: string;
}

export default function SectionDivider({ id }: Props) {
  return (
    <div id={id} className="flex items-center gap-[14px] px-10">
      <div className="flex-1 h-px bg-[var(--border-soft)]" />
      <div className="w-1 h-1 rounded-full bg-[var(--border)] shrink-0" />
      <div className="flex-1 h-px bg-[var(--border-soft)]" />
    </div>
  );
}
