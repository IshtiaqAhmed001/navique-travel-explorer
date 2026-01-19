import Banner from "@/components/home/Banner";
import Packages from "@/components/home/Packages";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
<section>
  <Banner></Banner>
</section>
<section className="mt-10">
  <Packages></Packages>
</section>
    </div>
  );
}
