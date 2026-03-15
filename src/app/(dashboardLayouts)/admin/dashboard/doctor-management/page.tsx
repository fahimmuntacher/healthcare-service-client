import DoctorsTable from "@/components/modules/DoctorManagements/DoctorsTable";
import { getDoctors } from "@/src/services/doctor.services";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const AdminDoctorManagementPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 6,
  });
  return <HydrationBoundary state={dehydrate(queryClient)}>
    <DoctorsTable></DoctorsTable>
  </HydrationBoundary>;
};

export default AdminDoctorManagementPage;
