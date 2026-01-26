import React from "react";

// Auto-calculate age based on birthdate
const getAge = () => {
  const birthDate = new Date(2003, 10, 12); // Month is 0-indexed: 10 = November
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

const profileHighlights = [
  {
    metric: "Age",
    value: getAge(),
  },
  {
    metric: "Word of My Life",
    value: "HAPPY",
  },
  {
    metric: "From",
    value: "Malaysia",
  }
];

const ProfileHighlightsSection = () => {
  return (
    <div className="sm:py-3 xl:px-12">
        <div className="border-[#33353F] border rounded-md py-8 px-6 sm:px-10 lg:px-16">
            
            <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-3 
            gap-10 
            text-center 
            ">
            {/* LEFT (Age) */}
            <div className="flex flex-col items-center">
                <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                {getAge()}
                </h2>
                <p className="text-[#ADB7BE] text-sm sm:text-base mt-2 mx-auto">
                Age
                </p>
            </div>

            {/* CENTER (Word of My Life) */}
            <div className="flex flex-col items-center">
                <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                HAPPY
                </h2>
                <p className="text-[#ADB7BE] text-sm sm:text-base mt-2 mx-auto">
                Word of My Life
                </p>
            </div>

            {/* RIGHT (From) */}
            <div className="flex flex-col items-center">
                <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                Malaysia
                </h2>
                <p className="text-[#ADB7BE] text-sm sm:text-base mt-2 mx-auto">
                From
                </p>
            </div>
            </div>

        </div>
        </div>
  );
};

export default ProfileHighlightsSection;
