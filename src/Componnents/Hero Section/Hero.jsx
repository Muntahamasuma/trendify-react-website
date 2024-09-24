

const Hero = () => {
    return (
        <>
            <header>
                <div className="relative bg-cover bg-center h-screen" style={{backgroundImage: "url('https://i.ibb.co.com/cxFSVy9/image.png')" }}>
                    
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="flex flex-col justify-center items-center h-full text-white text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Discover the Latest Fashion Trends</h1>
                    <p className="text-base md:text-lg lg:text-xl font-medium px-4">Find the perfect look for every occasion. Shop from our exclusive collection today!</p>
                </div>
                </div>
            </header>
        </>
    );
};

export default Hero;