import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Revolutionizing Hospitality: Addressing Common Challenges.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              We understand the challenges faced in managing a hotel. Here are some of the common challenges and how our system addresses them:
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Working with us is a pleasure. We prioritize exceptional service and support, ensuring clients and partners receive utmost attention and care. With years of industry expertise, we deliver valuable insights and innovative solutions tailored to individual needs. Our collaborative environment fosters transparent communication, driving success. Every interaction is meaningful and effective, exceeding expectations.<br></br> Backed by a track record of success, we create a positive working experience built on trust, professionalism, and mutual growth.              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  "Top Notch Services: Elevating Experiences. Unparalleled Quality, Every Interaction.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

<section style={{ maxWidth: "800px", margin: "0 auto" }}>
  <div>
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      style={{ maxWidth: "100%", margin: "0 auto" }} 
    >
      <div > 
        <img src="..\..\public\img\hotel1.jpg" alt="Room Assessment" style={{ width: "100%", height: "auto" }} />
      </div>
      <div>
        <img src="..\..\public\img\hotel6.jpg" alt="Inventory Check" style={{ width: "100%", height: "auto" }} />
      </div>
      <div>
        <img src="..\..\public\img\hotel4.jpg" alt="Ideal Room Image" style={{ width: "100%", height: "auto" }} />
      </div>
    </Carousel>
  </div>
</section>

      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="" heading="Main Features"></PageTitle>
        <div className="mx-auto mt-20 mb-48 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
  {contactData.map(({ title, icon, description }) => (
    <Card
      key={title}
      color="transparent"
      shadow={false}
      className="text-center text-blue-gray-900"
    >
      <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
        {React.createElement(icon, {
          className: "w-5 h-5 text-white",
        })}
      </div>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {title}
      </Typography>
      <Typography className="font-normal text-blue-gray-500">
        {description}
      </Typography>
    </Card>
  ))}
</div>
</div>
      </section>
     <section><PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
      
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
