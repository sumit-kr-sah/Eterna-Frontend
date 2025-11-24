import { Header } from "@/components/Header";
import { SecondaryNav } from "@/components/SecondaryNav";
import { TokenTable } from "@/components/TokenTable";
import { Footer } from "@/components/Footer";
import { mockTokens } from "@/data/mockTokens";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">
      <div className="sticky top-0 z-50">
        <Header />
        <SecondaryNav />
      </div>
      <main className="flex-1 overflow-hidden">
        <TokenTable tokens={mockTokens} />
      </main>
      <div className="sticky bottom-0 z-50">
        <Footer />
      </div>
    </div>
  );
}
