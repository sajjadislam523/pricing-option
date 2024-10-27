import { useEffect, useState } from "react";
import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const [priceOption, setPriceOption] = useState([]);

    useEffect(() => {
        fetch("priceOption.json")
            .then((res) => res.json())
            .then((data) => setPriceOption(data));
    }, []);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold underline text-center">
                Best Price Option
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {priceOption.map((option) => (
                    <PriceOption key={option.id} option={option} />
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;
