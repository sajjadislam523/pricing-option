import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
function PriceOption({ option }) {
    return (
        <div className="border px-8 py-4 rounded-xl flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">{option.name}</h2>
            <p>
                <span className="text-5xl font-bold">{option.price}</span>
                <span>/month</span>
            </p>
            <p className="font-bold text-xl">Features We are Offering:</p>
            <ol className="flex-grow">
                {option.features.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                        <IoIosCheckmarkCircle />
                        {feature}
                    </li>
                ))}
            </ol>
            <button className="border w-1/3 py-2 px-4 rounded-xl hover:bg-slate-200 ease-in-out duration-300 transition-all hover:text-black">
                Choose Plan
            </button>
        </div>
    );
}

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;
