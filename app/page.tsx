import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-6">
      <section className="bg-darkBlue flex w-80 flex-col gap-9 rounded-[12px_105px_12px_12px] p-12 lg:w-[360px]">
        <Image src="/logo.svg" alt="logo" width={135} height={40} />
        <div className="flex gap-4">
          <div className="bg-veryDarkBlue flex h-12 w-12 items-center justify-center rounded-xl">
            <Image
              src="icon-document.svg"
              alt="document"
              width={20}
              height={24}
            />
          </div>
          <div className="bg-veryDarkBlue flex h-12 w-12 items-center justify-center rounded-xl">
            <Image src="icon-folder.svg" alt="folder" width={24} height={20} />
          </div>
          <div className="bg-veryDarkBlue flex h-12 w-12 items-center justify-center rounded-xl">
            <Image src="icon-upload.svg" alt="upload" width={24} height={16} />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-darkBlue flex w-80 flex-col gap-4 rounded-xl p-9 pb-14 lg:h-40 lg:w-[540px] lg:justify-between lg:gap-0 lg:pb-9">
          <p className="text-paleBlue text-center text-sm lg:text-start lg:text-base">
            You’ve used <span className="font-bold">815 GB</span> of your
            storage
          </p>
          <div className="bg-veryDarkBlue h-5 w-full rounded-full p-[3px]">
            <div className="bg-gradient flex h-full w-[81.5%] justify-end rounded-full p-[2px]">
              <div className="bg-paleBlue h-full w-[10px] rounded-full"></div>
            </div>
          </div>
          <div className="text-paleBlue flex justify-between text-sm font-bold">
            <div>0 GB</div>
            <div>1000 GB</div>
          </div>
        </div>
        <div className="relative bottom-9 mb-[-104px] flex justify-center lg:bottom-52 lg:left-[310px] lg:w-48 lg:flex-col">
          <div className="bg-paleBlue text-grayishBlue flex w-48 items-center justify-between rounded-lg px-6 py-3 font-bold uppercase lg:rounded-br-none lg:py-4">
            <span className="text-veryDarkBlue text-5xl">185</span> GB Left
          </div>
          <div className="relative top-[-1px] hidden h-0 w-0 self-end border-b-[24px] border-r-[24px] border-solid border-[transparent_#dddbff_transparent_transparent] lg:block"></div>
        </div>
      </section>
    </main>
  );
}
