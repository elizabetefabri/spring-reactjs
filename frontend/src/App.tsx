import { Header } from "./components/Header";
import { NotificationButton } from "./components/NotificationButton";
import { SalesCard } from "./components/SalesCard";

export function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}
