"use client";

import { fetchWhatever } from "@/service";
import { useQuery } from "@tanstack/react-query";

const Pagina2 = () => {
  //use query pra puxar daddos client-side
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["whatever"],
    queryFn: async () => {
      return await fetchWhatever();
    },
  });
  return <span>whatever</span>;
};

export default Pagina2;
