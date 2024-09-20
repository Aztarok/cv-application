import { useState } from "react";
import Modal from "./components/modal";
import jsPDF from "jspdf";

export default function App() {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({});

    // Form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [title, setTitle] = useState(null);
    const [startedYear, setStartedYear] = useState("");
    const [finishedYear, setFinishedYear] = useState(null);
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [experiences, setExperiences] = useState([]);

    const isDataEmpty = Object.keys(data).length === 0;

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text(`Name: ${data.firstName} ${data.lastName}`, 10, 10);
        doc.text(`Birthday: ${data.birthday}`, 10, 20);
        doc.text(`Email: ${email}`, 10, 30);
        doc.text(`Phone: ${phoneNumber}`, 10, 40);
        doc.text(`School: ${data.schoolName}`, 10, 50);
        doc.text(`Title: ${data.title}`, 10, 60);
        doc.text(
            `Years: ${data.startedYear} - ${data.finishedYear || "Present"}`,
            10,
            70
        );
        doc.text(`Work Experience:`, 10, 80);
        experiences.forEach((exp, index) => {
            doc.text(`Company: ${exp.companyName}`, 10, 90 + index * 30);
            doc.text(`Position: ${exp.position}`, 10, 100 + index * 30);
            doc.text(
                `Duration: ${exp.years} year(s), ${exp.months} month(s)`,
                10,
                110 + index * 30
            );
            if (exp.jobDescription) {
                doc.text(
                    `Description: ${exp.jobDescription}`,
                    10,
                    120 + index * 30
                );
            }
        });
        doc.save("cv.pdf");
    };

    const clearAllData = () => {
        setData({});
        setExperiences([]);
        setFirstName("");
        setLastName("");
        setBirthday("");
        setSchoolName("");
        setTitle(null);
        setStartedYear("");
        setFinishedYear(null);
        setEmail("");
        setPhoneNumber("");
    };

    return (
        <main className="w-screen h-screen flex justify-center items-center bg-sky-950">
            <div className="flex flex-col w-[60%] xl:w-[40%] h-[85%]">
                <div className="flex justify-between mb-3 w-full h-12">
                    <div className="flex gap-4">
                        {isDataEmpty ? (
                            <div>
                                <button
                                    className="h-full hover:bg-sky-500 hover:shadow-[0_0px_10px_rgba(255,255,255,0.8)] focus:outline-none bg-blue-500 shadow-white"
                                    onClick={() => setModal(true)}
                                >
                                    Add CV Details
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <button
                                    className="h-full hover:bg-sky-500 hover:shadow-[0_0px_10px_rgba(255,255,255,0.8)] focus:outline-none bg-blue-500 shadow-white"
                                    onClick={() => setModal(true)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="h-full hover:bg-red-800 hover:shadow-[0_0px_10px_rgba(255,255,255,0.8)] focus:outline-none bg-blue-500 shadow-white"
                                    onClick={clearAllData}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                    {!isDataEmpty && (
                        <button
                            className="h-full hover:bg-green-700 hover:shadow-[0_0px_10px_rgba(255,255,255,0.8)] focus:outline-none bg-blue-500 shadow-white"
                            onClick={downloadPDF}
                        >
                            Download
                        </button>
                    )}
                </div>
                <div className="border-2 w-full h-full rounded-lg">
                    {modal && (
                        <Modal
                            setModal={setModal}
                            setData={setData}
                            data={data}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            birthday={birthday}
                            setBirthday={setBirthday}
                            schoolName={schoolName}
                            setSchoolName={setSchoolName}
                            title={title}
                            setTitle={setTitle}
                            startedYear={startedYear}
                            setStartedYear={setStartedYear}
                            finishedYear={finishedYear}
                            setFinishedYear={setFinishedYear}
                            setEmail={setEmail}
                            setPhoneNumber={setPhoneNumber}
                            setExperiences={setExperiences}
                            experiences={experiences}
                            email={email}
                            phoneNumber={phoneNumber}
                        />
                    )}
                    {data && Object.keys(data).length > 0 && (
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-4">
                                {data.firstName} {data.lastName}
                            </h2>
                            <p className="mb-2">
                                <strong>Birthday:</strong> {data.birthday}
                            </p>
                            <p className="mb-2">
                                <strong>Email:</strong> {email}
                            </p>
                            <p className="mb-2">
                                <strong>Phone:</strong> {phoneNumber}
                            </p>
                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                Education
                            </h3>
                            <p>
                                <strong>School:</strong> {data.schoolName}
                            </p>
                            <p>
                                <strong>Title:</strong> {data.title}
                            </p>
                            <p>
                                <strong>Years:</strong> {data.startedYear} -{" "}
                                {data.finishedYear || "Present"}
                            </p>
                            <h3 className="text-xl font-semibold mt-4 mb-2">
                                Work Experience
                            </h3>
                            {experiences.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="text-lg font-semibold">
                                        {exp.companyName}
                                    </h4>
                                    <p>
                                        <strong>Position:</strong>{" "}
                                        {exp.position}
                                    </p>
                                    <p>
                                        <strong>Duration:</strong> {exp.years}{" "}
                                        year(s), {exp.months} month(s)
                                    </p>
                                    {exp.jobDescription && (
                                        <p>
                                            <strong>Description:</strong>{" "}
                                            {exp.jobDescription}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
