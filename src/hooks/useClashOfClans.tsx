import axios from "axios";
import { useQuery } from "react-query";
import { COC_API_TOKEN } from "../api/coc";

export const useGetClans = () =>
  useQuery("getClans", () =>
    axios
      .get("/v1/clans?minMembers=10&limit=100", {
        headers: {
          Authorization: `Bearer ${COC_API_TOKEN}`,
          "cache-control": "max-age=60",
          "content-type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        return res.data.items;
      })
  );
