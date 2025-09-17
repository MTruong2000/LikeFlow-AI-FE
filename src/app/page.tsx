import Banner from "@/components/component-layout/banner";
import MultiTab from "@/components/multi-tab";
import WhoIsUser from "@/components/who-is-using";
import WhyChoose from "@/components/why-choose";
import SmartAgent from "@/components/smart-agent";
import ToolOverview from "@/components/tools-overview";
// import Trusted from "@/components/trusted";
import MultipleAdvanced from "@/components/multiple-advanced";
import TestimonialsSection from "@/components/testimonials-section";
import Pricing from "@/components/pricing";
import FormContact from "@/components/component-childs/form-contact";
import isLoggedIn from "@/funcs/isLonggedIn";

export default async function Home() {
  const checkLogin = await isLoggedIn();

  return (
    <div className="">
      <div id="home">
        <Banner />
      </div>
      <div id="features">
        <MultiTab />
      </div>
      <WhoIsUser />
      <WhyChoose />
      <SmartAgent />
      <div id="tools">
        <ToolOverview />
      </div>
      {/* <Trusted /> */}
      <MultipleAdvanced />
      <TestimonialsSection />
      <div id="pricing">
        <Pricing checkLogin={checkLogin} />
      </div>
      <FormContact />
    </div>
  );
}
