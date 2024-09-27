import Image from "next/image";
import dynamic from "next/dynamic";
const ButtonGradient = dynamic(() => import("../orgasms/ButtonGradient"), { ssr: false });

export default function Banner(){
    return (
        <section className="container mt-[86px] max-w-[847px] ">
               <ButtonGradient className={"py-2 px-[12px]"}>
                    <Image src={"./assets/icons/ic-drugschain.svg"} alt="logo" width={31.2} height={12} />
                    <div className="flex gap-1 items-center">
                        <p className="text-[16px] text-headline">is currently in beta </p>
                        <Image src={"./assets/icons/ic-arrow-right.svg"} alt="icon next" width={7.2} height={7.2} />
                    </div>
               </ButtonGradient>
            <h1 className="mt-6 text-[64px] tracking-[-3.69px] leading-[62.7px] text-headline text-center font-medium">
                Masa Depan Pengiriman Obat yang Aman dan Transparan
            </h1>
            <p className="mt-[34px] mb-11 text-xl leading-[26px] text-headline/50 max-w-[705px] mx-auto text-center">
                Melindungi kesehatan Anda dengan teknologi blockchain. Dari pengiriman hingga pembayaran, semuanya aman, cepat, dan dapat diverifikasi.
            </p>
            <ButtonGradient className="py-[10px] px-[17px]">
                <div className="flex gap-1 items-center">
                    <p className="text-[16px] text-headline">Try For Free</p>
                    <div className="py-[6px] px-2">
                        <Image src={"./assets/icons/ic-arrow-right.svg"} alt="icon next" width={7.2} height={7.2} />
                    </div>
                </div>
            </ButtonGradient>
            <div className="rounded-[30px] relative overflow-hidden mt-[54px]">
                <span className="animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#549F2E_0%,#0C85F8_100%)] absolute inset-[-1000%]"></span>
                <Image className=" rounded-[30px] z-10 relative p-[2px]" src={"/assets/images/dashboard.png"} alt="banner" width={1280} height={480} priority/>
            </div>
        </section>
    )
}