import Navbar from "@/components/navbar";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen items-center py-8 md:py-10">
      <div>
        <div className="container mx-auto">
          <Navbar />
        </div>
        <div className="w-full max-w-4xl px-4 text-center">{children}</div>
      </div>
    </section>
  );
}
