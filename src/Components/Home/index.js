import { Header } from "../../Containers";
import { Brand } from "..";
//import { Category } from "../../Containers";
//import { About } from "../../Containers";
export default function Home() {
  return (
    <>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
    </>
  );
}
