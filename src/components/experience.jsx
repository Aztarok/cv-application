import React, { useState, useEffect } from "react";

const Experience = ({
    addExperience,
    editExperience,
    setShowExperienceForm,
    currentExperience,
    isEditing
}) => {
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [years, setYears] = useState("");
    const [months, setMonths] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    useEffect(() => {
        if (isEditing && currentExperience) {
            setCompanyName(currentExperience.companyName);
            setPosition(currentExperience.position);
            setYears(currentExperience.years);
            setMonths(currentExperience.months);
            setJobDescription(currentExperience.jobDescription);
        }
    }, [isEditing, currentExperience]);

    const handleSubmit = () => {
        const newExperience = {
            companyName,
            position,
            years,
            months,
            jobDescription
        };
        if (isEditing) {
            editExperience(currentExperience.index, newExperience);
        } else {
            addExperience(newExperience);
        }
    };

    return (
        <div className="w-full h-full bg-emerald-700 rounded-2xl flex flex-col justify-start items-center p-6">
            <h2 className="text-2xl font-semibold mb-6">
                {isEditing ? "Edit Experience" : "Add Experience"}
            </h2>
            {/* Form Inputs */}
            <form className="space-y-4 w-full max-w-md">
                <div className="flex flex-col">
                    <label htmlFor="companyName" className="mb-2">
                        Company Name:
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="border border-gray-300 rounded-md h-12 w-full px-4"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="position" className="mb-2">
                        Position in Company:
                    </label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="border border-gray-300 rounded-md h-12 w-full px-4"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="employmentTime" className="mb-2">
                        Employment Time:
                    </label>
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="years" className="mb-1">
                                Years:
                            </label>
                            <input
                                type="number"
                                id="years"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                className="border border-gray-300 rounded-md h-12 w-full px-4"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="months" className="mb-1">
                                Months:
                            </label>
                            <input
                                type="number"
                                id="months"
                                value={months}
                                onChange={(e) => setMonths(e.target.value)}
                                className="border border-gray-300 rounded-md h-12 w-full px-4"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="jobDescription" className="mb-2">
                        Job Description:
                    </label>
                    <textarea
                        id="jobDescription"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="border border-gray-300 rounded-md h-24 w-full px-4 py-2"
                    />
                </div>
            </form>

            {/* Bottom Buttons */}
            <div className="flex justify-end flex-1 items-end w-full self-end max-w-md space-x-4 mt-6">
                <button
                    className="bg-red-500 text-white px-6 py-2 rounded"
                    onClick={() => setShowExperienceForm(false)}
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-6 py-2 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Experience;
