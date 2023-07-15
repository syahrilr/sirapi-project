import Footer from "@/components/footer";
import MainPage from "@/components/hero";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MainNav />
      <MainPage />
      <Footer />
    </main>
  )
}
