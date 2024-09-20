import React from "react";

const Page2 = ({
    setSchoolName,
    setTitle,
    setStartedYear,
    setFinishedYear,
    schoolName,
    title,
    startedYear,
    finishedYear
}) => {
    return (
        <div className="flex flex-col items-center flex-1 justify-start h-full">
            <h1 className="text-3xl font-semibold py-5">Education Info</h1>
            <div className="h-full w-full">
                <form className="flex flex-col items-center justify-center text-xl w-full gap-6 mt-6">
                    <div className="flex flex-col w-full max-w-md">
                        <label htmlFor="schoolName" className="mb-2">
                            School Name:
                        </label>
                        <input
                            type="text"
                            id="schoolName"
                            className="h-12 w-full rounded-md p-2"
                            onChange={(e) => setSchoolName(e.target.value)}
                            value={schoolName}
                        />
                    </div>

                    <div className="flex flex-col w-full max-w-md mt-4">
                        <label htmlFor="title" className="mb-2">
                            Level of Degree (Bachelors, Masters, etc.):
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="h-12 w-full rounded-md p-2"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                </form>

                <form className="flex flex-col items-center justify-center text-xl w-full gap-6 mt-6">
                    <div className="flex flex-col w-full max-w-md">
                        <label htmlFor="startedYear" className="mb-2">
                            Start Year:
                        </label>
                        <input
                            type="number"
                            id="startedYear"
                            className="h-12 w-full rounded-md p-2"
                            onChange={(e) => setStartedYear(e.target.value)}
                            value={startedYear}
                        />
                    </div>

                    <div className="flex flex-col w-full max-w-md mt-4">
                        <label htmlFor="finishedYear" className="mb-2">
                            Finish Year:
                        </label>
                        <input
                            type="number"
                            id="finishedYear"
                            className="h-12 w-full rounded-md p-2"
                            onChange={(e) => setFinishedYear(e.target.value)}
                            value={finishedYear}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page2;
