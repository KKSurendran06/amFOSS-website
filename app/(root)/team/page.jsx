"use client";
import React from "react";
import TeamHero from "@/components/team/teamHero";
import MembersAndAlumni from "@/components/team/membersAndAlumni";

const page = () => {
  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            MEET THE TEAM
          </h1>
        </div>
      </div>
      <TeamHero />
      <div className="w-full flex justify-center items-center my-10">
        <div className="bg-[#D9D9D9] md:w-1/3 w-full mx-5 md:h-[40rem] h-80"></div>
      </div>
      <MembersAndAlumni contentFor="members" />
      <MembersAndAlumni contentFor="alumni" />
    </>
  );
};

export default page;
