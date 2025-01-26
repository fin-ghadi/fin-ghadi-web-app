export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen items-center py-8 md:py-10">
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4 text-center">
          
          {children}
        </div>
      </div>
    </section>
  );
}