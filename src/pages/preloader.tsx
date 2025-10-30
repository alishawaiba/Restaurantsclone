import {useEffect, useState} from "react";
import bgimage from "../assets/Preloaderimage.jpeg";

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 4000);
        return () => clearTimeout(timer);
    }, []);
    
    if (!isVisible) return null;
    
    return(
        <div className="fixed inset-0 bg-[#2E2523] flex flex-col items-center justify-center z-50">
            <div className="flex flex-col items-center space-y-6 animate-fade-in">
                <h1 className="text-3xl font-semibold tracking-[6px]">TAOR</h1>

                <div className="overflow-hidden w-[500px] h-[280px] rounded-lg">
                    <img 
                        src={bgimage}
                        alt="Preloader"
                        className="w-full h-full object-cover animate-slide-in"
                    />
                </div>
            </div>
            <p className="text-sm tracking-[5px] animate-blink">LOADING</p>
        </div>
    );
};

export default Preloader;

