import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
interface ServiceItem {
  backgroundImage: string;
  title: string;
  description: string;
}

export const ServiceData: ServiceItem[] = [
  { 
    backgroundImage: image1.src, 
    title: "মাসিক কুইজ খেলে iPhone 15 pro max জিতে নিন", 
    description: "জিতুন আরো আকর্ষণীয় পুরস্কার"
  },
  { 
    backgroundImage: image2.src, 
    title: "দৈনিক কুইজ এবং রেফারেল", 
    description: "বন্ধুকে রেফার করে ও দৈনিক কুইজ খেলে আকর্ষণীয় সব গ্যাজেট জিতুন"
  },
  { 
    backgroundImage: image3.src, 
    title: "কুইজ খেলে জিতুন Robi ইন্টারনেট ডাটা", 
    description: "GameBD অ্যাপে কুইজ খেলে জিতুন Robi ইন্টারনেট ডাটা"
  },
  { 
    backgroundImage: image4.src, 
    title: "গত সপ্তাহের বিজয়ী", 
    description: "রবি কুইজ মাস্টার টুর্নামেন্ট"
  },
  { 
    backgroundImage: image5.src, 
    title: "দৈনিক লগইন বোনাস টুর্নামেন্ট", 
    description: "প্রতিদিন কুইজ খেলুন এবং আপনার স্মার্ট ফোন জেতার সুযোগ বাড়ান"
  },
 
];
