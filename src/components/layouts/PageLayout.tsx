import { Footer, Header } from "../custom";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh flex flex-col justify-between">
      <Header />
      <main className="mt-[64px] pb-8">{children}</main>
      <Footer />
    </div>
  );
}
