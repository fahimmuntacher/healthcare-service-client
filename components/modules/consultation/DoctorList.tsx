"use client"
import { getDoctors } from "@/src/app/(commonLayouts)/consultation/_actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DoctorList = () => {
  const { data } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getDoctors(),
  });
  console.log(data);
  return <div>Doctor list</div>;
};

export default DoctorList;
