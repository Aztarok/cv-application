import React, { useState } from "react";
import Example from "./calendar"; // Import Example from calendar

const Page1 = ({
    setFirstName,
    setLastName,
    setBirthday,
    firstName,
    lastName
}) => {
    const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility

    return (
        <div className="flex flex-col items-center flex-1 justify-start h-full">
            <h1 className="text-3xl font-semibold py-5">General Info</h1>
            <div className="h-full w-full">
                <form className="space-y-6 w-full max-w-md mx-auto">
                    <div className="flex flex-col text-2xl w-full">
                        <label htmlFor="firstName" className="mb-2">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            className="border border-gray-300 rounded-md h-12 w-full px-4"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col w-full text-2xl mt-4">
                        <label htmlFor="lastName" className="mb-2">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            className="border border-gray-300 rounded-md h-12 w-full px-4"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </form>

                {/* Button to toggle calendar */}
                <div className="flex mx-auto justify-between items-center w-2/6 mt-12">
                    <span className="text-2xl font-semibold">Birthday</span>
                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        {showCalendar ? "Hide Calendar" : "Show Calendar"}
                    </button>
                </div>

                {/* Conditionally render the calendar */}
                {showCalendar && (
                    <div className="mt-4 flex justify-center">
                        <Example setBirthday={setBirthday} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page1;
