import Footer from "../(Custom Components)/Footer";
import Navbar from "../(Custom Components)/Navbar";
import Container from "@/public/images/PeopleContainerTitle.png";
import PeopleCard from "../(Custom Components)/PeopleCard";
function page() {
  return (
    <section className="min-h-screen bg-[#074144]">
      <Navbar />
      <div className="mt-[3vh] sm:mt-[30vh] mb-[32px]">
        <h1 className=" text-[32px] md:text-[86px] text-center font-aporo mb-[4px] text-white">
          Meet the TEAM
        </h1>
        <p className=" text-center text-[10px] md:text-[22px] font-hellvitica text-white">
          For any queries regarding any section mentioned feel free to contact.
        </p>
      </div>
      <section>
        <section
          className="w-[310px] md:w-[512px] h-[89px]"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="font-aporo text-[19px] md:text-[34.95px] text-center leading-[75px] md:leading-[85px] lg:leading-[100px] pr-[100px] text-white">
            CORE COMMITTEE
          </p>
        </section>
        {/* <section className="flex flex-wrap justify-around items-center">
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </section> */}
        <section className="grid  place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] overflow-y-auto max-h-[560px] p-[48px] mx-auto scrollbar-hide">
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </section>
      </section>
      {/* <Footer/> */}
    </section>
  );
}
export default page;
