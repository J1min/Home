export default function PickDetailPage({
  params,
}: {
  params: { pickType: string };
}) {
  return (
    <section className="py-16 flex flex-col mx-auto gap-12 w-[520px] lg:w-[768px] xl:w-[1024px]">
      {params.pickType}
    </section>
  );
}
