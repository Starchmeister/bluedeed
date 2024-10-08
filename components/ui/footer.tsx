import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-[300px] py-12 mb-24">
      <div className="w-full h-full">
        <Image alt="" width={80} height={80} src="/bluedeedlogosvg.svg" />
      </div>
      <div>
        <p className="text-[13px] text-center md:text-right font-medium">
          © Copyright Bluedeed, 2024 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
