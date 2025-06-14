import {Footer} from "@/components/landing/footer";
import {Header} from "@/components/landing/header";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <h1 className="text-5xl text-center p-5 border-t">Main Content</h1>
      </main>
      <Footer/>
    </>
  );
}
