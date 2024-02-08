import { phone } from "../assets"
import "../index.css"
export default function Hero() {
    return (
        <div className="bg-orange max-sm:max-h-[70vh]">
            <div className="text-center text-white">
                <h2 className="font-bold text-3xl font-jost">
                    Award-winning custom designs and digital branding solutions
                </h2>
                <p className="my-4">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button>Learn More</button>
            </div>
            <div>
                <img src={phone} alt="mobile" />
            </div>
        </div>
    )
}