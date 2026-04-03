import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Image fill className="object-cover " src={"/images/home-img.jpg"} alt="background-image"/>
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="text-white z-10 flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Computer repair <br /> Repair Shop
          </h1>

          <address>
            555 Gateway lane <br />
            kansas City, KS 5555
          </address>

          <p>Open Daily: 10am to 9pm</p>

          <Link href="tel:9974935576" className="hover:underline">
            Call Now
          </Link>
        </div>
      </main>
    </div>
  );
}