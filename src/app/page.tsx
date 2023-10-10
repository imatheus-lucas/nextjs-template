import { Header } from "@/components/organisms/header";
import { timeout } from "@/lib/timeout";

export default async function Home() {
  await timeout();
  return (
    <main className="h-screen">
      <Header />
    </main>
  );
}
