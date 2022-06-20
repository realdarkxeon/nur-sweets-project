import React from "react";
import "./filter.css";

const buttons = [
    {
        type: "all",
        label: "All",
    },
    {
        type: "cakes",
        label: "Cakes",
    },
    {
        type: "deserts",
        label: "Deserts",
    },
    {
        type: "branches",
        label: "Branches",
    },
    {
        type: "drinks",
        label: "Drinks",
    },
];

export const Filter = () => {

    return (
        <>
            <div className="d-flex justify-content-center">
                {/* filter buttons */}
                <div className="btn-group">
                    {buttons.map((item, index) => (
                        (index === 0 && 
                            <button
                                className={`filterButtons py-3 px-5 rounded-left activeButton`}
                                key = {item.type}
                                type = "button"
                            >
                                {item.label}
                            </button>
                        ) ||
                        (index === buttons.length-1 && 
                            <button
                                className={`filterButtons py-3 px-5 rounded-right `}
                                key = {item.type}
                                type = "button"
                            >
                                {item.label}
                            </button>
                        ) ||
                        (
                            <button
                                className={`filterButtons py-3 px-5`}
                                key = {item.type}
                                type = "button"
                            >
                                {item.label}
                            </button>
                        )
                        
                    ))}
                </div>


            </div>
        </>
    );
};