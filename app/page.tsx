import Header from "./components/header"
import Footer from "./components/footer"
import GameSelect from "./components/game-select"
import GameAdd from "./components/game-add"

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <GameSelect />

        <GameAdd />
      </main>

      <Footer />
    </>
  )
}
