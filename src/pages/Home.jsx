import React from 'react';
import BannerSlider from '../components/home/BannerSlider';
import PopularToys from '../components/home/PopularToys';
import DynamicTitle from '../components/shared/DynamicTitle';
import { FaHeart, FaStar, FaGlobe, FaBoxes } from 'react-icons/fa'; 

const Home = () => {
    return (
        <div className="space-y-20 pb-16">
            <DynamicTitle title="Home" />
            
            <section data-aos="fade-down">
                <BannerSlider />
            </section>
            
            <section className="text-center p-4">
                <h2 
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12"
                    data-aos="fade-up"
                >
                    ⭐ Trending Toys of the Week ⭐
                </h2>
                <div data-aos="fade-up" data-aos-delay="200">
                    <PopularToys />
                </div>
            </section>

            <section 
                className="p-10 bg-gradient-to-r from-teal-50 to-blue-100 rounded-3xl shadow-2xl transition duration-500 ease-in-out hover:shadow-primary/50"
                data-aos="zoom-in"
            >
                <div className="flex items-center justify-center mb-6">
                    <FaHeart className="text-5xl text-red-500 mr-4 animate-pulse" />
                    <h3 className="text-4xl font-black text-primary">Why Choose ToyTopia?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <FaGlobe className="text-5xl text-info mx-auto mb-3" />
                        <p className="font-semibold text-lg">Local Focus</p>
                        <p className="text-gray-600 text-sm">Every purchase directly supports a small, local toy seller in your community.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <FaStar className="text-5xl text-warning mx-auto mb-3" />
                        <p className="font-semibold text-lg">Curated Quality</p>
                        <p className="text-gray-600 text-sm">Hand-picked, high-quality toys that prioritize safety and educational value.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <FaBoxes className="text-5xl text-secondary mx-auto mb-3" /> 
                        <p className="font-semibold text-lg">Wide Variety</p>
                        <p className="text-gray-600 text-sm">From wooden classics to modern tech—we have a toy for every age and interest.</p>
                    </div>
                </div>
            </section>
            
            <section 
                className="p-12 bg-neutral text-neutral-content rounded-3xl shadow-xl border-4 border-accent"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="md:flex justify-between items-center">
                    <div>
                        <h3 className="text-4xl font-extrabold mb-2 text-accent">Seller Spotlight!</h3>
                        <p className="text-2xl font-bold mb-4">Meet "Toy Makers Co."</p>
                        <p className="max-w-xl text-lg opacity-80">
                            Creating beautiful, eco-friendly wooden toys for over 10 years. Their commitment to sustainability makes them a ToyTopia favorite.
                        </p>
                        <button className="btn btn-warning mt-6 text-black hover:bg-yellow-400">
                            See Their Collection
                        </button>
                    </div>
                    <div className="hidden md:block">
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
