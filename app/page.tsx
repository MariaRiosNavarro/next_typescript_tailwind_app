import Image from "next/image";
import Link from "next/link";
import AddToCart from "./components/AddToCart";

export default function Home() {
  return (
    <main className="py-5">
      <AddToCart />
    </main>
  );
}
