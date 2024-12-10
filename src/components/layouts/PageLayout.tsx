import { Footer, Header } from "../custom";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh flex flex-col justify-between">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
