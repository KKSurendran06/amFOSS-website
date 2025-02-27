import data from "@/content/gsoc.json";

export default function Gsoc() {
    return (
        <>
        {data.map((yearData, number) => {
            const year = Object.keys(yearData)[0];
            const people = yearData[year];
            return(
                <div className="mb-[10vw] md:mb-20 grid md:grid-cols-2 grid-cols-1">
                    {!(number % 2) ? <div className="flex"></div> : <></>}
                    <div className={`bg-[#242424] bg-opacity-90 backdrop-blur-md rounded-3xl ${number % 2 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <div className="flex flex-col p-[10vw]  md:p-[6vw] md-custom:p-16">
                            <div className="text-2xl sm:text-4xl mb-7">{year}</div>
                            {people.map((person, index) => (
                                <div key={index}>
                                    <div className="flex flex-1">
                                        <div className="flex flex-col">
                                            <div className="w-[2px] bg-yellow-500 flex-1 ml-[3px]"></div>
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                            <div className="w-[2px] bg-yellow-500 flex-1 ml-[3px]"></div>
                                        </div>
                                        <div className="flex flex-col flex-1 pl-8 pb-5 md:text-2xl">
                                            <p className="text-white">{person.name}</p>
                                            <p className="md:text-xl ">{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
         })}
        </>
    )
}
