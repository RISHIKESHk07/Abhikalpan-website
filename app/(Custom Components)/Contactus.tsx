import card from "@/public/images/ContactCard.png";
import phone from "@/public/images/Phone.png";
import email from "@/public/images/Email.png";
import Image from "next/image";

export default function ContactUs() {
  const contacts = [
    {
      name: "Chetan Anand Jhariya",
      role: "Event Coordinator",
      phone: "+91 70009 47461",
      email: "22bme021@iiitdmj.ac.in",
      cardImage: card,
      callIcon: phone,
      emailIcon: email,
    },
    {
      name: "Sankalp",
      role: "Event Coordinator",
      phone: "+91 84096 46129",
      email: "22bme051@iiitdmj.ac.in",
      cardImage: card,
      callIcon: phone,
      emailIcon: email,
    },
    {
      name: "Dr. Yashpal Singh Katharria",
      role: "Faculty Incharge",
      phone: "+91 81075 91910",
      email: "yashpalk@iiitdmj.ac.in",
      cardImage: card,
      callIcon: phone,
      emailIcon: email,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-6 py-12">
      <h1 className="text-5xl font-bold font-aporo text-white mb-4">CONTACT US</h1>
      <p className="text-lg font-hellvitica text-teal-100 mb-12">
        For any queries regarding any section mentioned, feel free to contact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="relative w-full h-80 p-6 flex flex-col justify-between bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${contact.cardImage.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-[68px] font-hellvitica sm:top-11 right-12 sm:right-20 text-teal-900 px-3 py-1 rounded-lg text-sm">
              {contact.role}
            </div>
            <h2 className="text-3xl font-genos text-white mt-auto mb-20">
              {contact.name}
            </h2>
            <div className="space-y-2 mb-10">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/Phone.png"
                  alt="Phone Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-white font-hellvitica">{contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/Email.png"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-white font-hellvitica">{contact.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
