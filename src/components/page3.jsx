import React, { useState, useEffect } from "react";
import Experience from "./experience";

const Page3 = ({
    setEmail,
    setPhoneNumber,
    setExperiences,
    experiences,
    phoneNumber,
    email
}) => {
    const [localExperiences, setLocalExperiences] = useState(experiences || []);
    const [showExperienceForm, setShowExperienceForm] = useState(false);
    const [currentExperience, setCurrentExperience] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setLocalExperiences(experiences);
    }, [experiences]);

    const addExperience = (newExperience) => {
        const updatedExperiences = [...localExperiences, newExperience];
        setLocalExperiences(updatedExperiences);
        setExperiences(updatedExperiences);
        setShowExperienceForm(false);
    };

    const editExperience = (index, updatedExperience) => {
        const updatedExperiences = localExperiences.map((exp, i) =>
            i === index ? updatedExperience : exp
        );
        setLocalExperiences(updatedExperiences);
        setExperiences(updatedExperiences);
        setShowExperienceForm(false);
        setIsEditing(false);
    };

    const deleteExperience = (index) => {
        const updatedExperiences = localExperiences.filter(
            (_, i) => i !== index
        );
        setLocalExperiences(updatedExperiences);
        setExperiences(updatedExperiences);
    };

    return (
        <div className="flex flex-col items-center flex-1 justify-start h-full overflow-hidden">
            <h1 className="text-3xl font-semibold py-5">Work Info</h1>
            <div className="h-full w-full">
                {/* Email and Phone Number form */}
                <form className="flex flex-col items-center justify-center text-xl w-full gap-6 mt-6">
                    <div className="flex flex-col w-full max-w-md">
                        <label htmlFor="email" className="mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="h-12 w-full rounded-md p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col w-full max-w-md mt-4">
                        <label htmlFor="phoneNumber" className="mb-2">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className="h-12 w-full rounded-md p-2"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </form>

                {/* Experience Section */}
                <div className="flex flex-col items-center justify-center text-xl w-full gap-6 mt-6">
                    <div className="flex items-center justify-start w-full max-w-md">
                        <label htmlFor="experience" className="mb-2">
                            Experience:
                        </label>
                        <button
                            id="experience"
                            className="ml-auto bg-blue-500 text-white p-2 rounded"
                            onClick={() => {
                                setShowExperienceForm(true);
                                setCurrentExperience(null);
                                setIsEditing(false);
                            }}
                        >
                            Add Experience
                        </button>
                    </div>
                    {showExperienceForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="">
                                <Experience
                                    addExperience={addExperience}
                                    editExperience={editExperience}
                                    setShowExperienceForm={
                                        setShowExperienceForm
                                    }
                                    currentExperience={currentExperience}
                                    isEditing={isEditing}
                                />
                            </div>
                        </div>
                    )}
                    <div className="w-full max-w-md space-y-4 max-h-[35vh] overflow-y-auto sm:max-h-[24vh]">
                        {localExperiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-cyan-700 border-2 border-red-400 p-4 rounded-md shadow-md relative"
                            >
                                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                                    <button
                                        className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                                        onClick={() => {
                                            setCurrentExperience({
                                                ...exp,
                                                index
                                            });
                                            setShowExperienceForm(true);
                                            setIsEditing(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                                        onClick={() => deleteExperience(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {exp.companyName}
                                </h3>
                                <p className="text-md mb-1">
                                    <span className="font-medium">
                                        Position:
                                    </span>{" "}
                                    {exp.position}
                                </p>
                                <p className="text-md mb-1">
                                    <span className="font-medium">
                                        Duration:
                                    </span>{" "}
                                    {exp.years} year(s), {exp.months} month(s)
                                </p>
                                {exp.jobDescription && (
                                    <p className="text-md mt-2">
                                        <span className="font-medium">
                                            Description:
                                        </span>{" "}
                                        {exp.jobDescription}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
