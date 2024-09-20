import { X } from "lucide-react";
import React, { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const Modal = ({
    setModal,
    setData,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    schoolName,
    setSchoolName,
    title,
    setTitle,
    startedYear,
    setStartedYear,
    finishedYear,
    setFinishedYear,
    setEmail,
    setPhoneNumber,
    setExperiences,
    experiences,
    email,
    phoneNumber
}) => {
    const [page, setPage] = useState(1);

    const handleSubmit = () => {
        setModal(false);
        setData((prevData) => ({
            ...prevData,
            firstName,
            lastName,
            birthday,
            schoolName,
            title,
            startedYear,
            finishedYear
        }));
    };

    const renderPage = () => {
        switch (page) {
            case 1:
                return (
                    <Page1
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setBirthday={setBirthday}
                        firstName={firstName}
                        lastName={lastName}
                        birthday={birthday}
                    />
                );
            case 2:
                return (
                    <Page2
                        setSchoolName={setSchoolName}
                        setTitle={setTitle}
                        setStartedYear={setStartedYear}
                        setFinishedYear={setFinishedYear}
                        schoolName={schoolName}
                        title={title}
                        startedYear={startedYear}
                        finishedYear={finishedYear}
                    />
                );
            case 3:
                return (
                    <Page3
                        setEmail={setEmail}
                        setPhoneNumber={setPhoneNumber}
                        setExperiences={setExperiences}
                        experiences={experiences}
                        phoneNumber={phoneNumber}
                        email={email}
                    />
                );
            default:
                return <Page1 />;
        }
    };

    return (
        <div className="absolute left-0 top-0 w-screen h-screen bg-slate-900 bg-opacity-50 flex justify-center items-center">
            <div className="relative flex w-3/4 md:w-2/3 lg:w-1/2 h-3/4 sm:h-3/5 bg-blue-950 rounded-xl drop-shadow-[0_0px_10px_rgba(255,255,255,0.8)] shadow-white">
                {renderPage()}
                <button
                    onClick={() => setModal(false)}
                    className="absolute top-4 p-2 right-4 flex justify-center items-center bg-fuchsia-900 rounded-full"
                >
                    <X className="w-8 h-8" />
                </button>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                    {page > 1 && (
                        <button
                            onClick={() => setPage(page - 1)}
                            className="flex justify-center items-center bg-pink-700 h-12 w-20 rounded"
                        >
                            Prev
                        </button>
                    )}
                    {page < 3 ? (
                        <button
                            onClick={() => setPage(page + 1)}
                            className="flex justify-center items-center bg-pink-700 h-12 w-20 rounded"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="flex justify-center items-center bg-blue-600 h-12 w-20 rounded"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
