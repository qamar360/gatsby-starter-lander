import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Consulting Services
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Advanced and cutting-edge features make us highly regarded in the digital world of services
          </p>       
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Web Design & Development</p>
              <p className="mt-4">
                Our web developers are client-centric, creating website solutions that are client-centric and deliver tangible business results. They help brands in an ever-changing digital environment.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mobile Apps Development</p>
              <p className="mt-4">
                GTX designs, develops and delivers mobile apps for all major platforms including iOS (iPhone and iPad), Android, BlackBerry and Windows Mobile.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">CyberSecurity Services</p>
              <p className="mt-4">
                A hands-on demonstration of an attack scenario in which a malicious actor can bypass corporate network security controls and gain elevated privileges on critical systems.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
   
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
