import { useEffect, useState } from "react";
import { useGetClans } from "../hooks/useClashOfClans";
import { IClans } from "./homePage.props";
import "./style.css";

const HomePage = () => {
  const [clansData, setClansData] = useState([]);
  const [applyFilter, setApplyFilter] = useState("");
  const { data: clans, isLoading } = useGetClans();
  const [isActive, setIsActive] = useState(false);
  const [isActiveType, setIsActiveType] = useState(false);

  useEffect(() => {
    setClansData(clans);
  }, [clans]);

  const searchByName = (name: string) => {
    const filterByName = clans.filter((clan: IClans) =>
      clan.name.toLowerCase().includes(name.toLowerCase())
    );
    setClansData(filterByName);
  };

  const filterBy = (filter: string, by: keyof IClans, check: boolean) => {
    setApplyFilter(check ? filter : "");
    const filterClans = check
      ? clans.filter((clan: IClans) => clan[by] === filter)
      : clans;
    setClansData(filterClans);
  };

  return (
    <div className="container">
      <div className="containerHeader">
        <h1 className="title">Filter Clash of clans</h1>
        <hr />
        <input
          className="search"
          type="text"
          placeholder="Search by name clan"
          onChange={(e) => {
            setApplyFilter("");
            searchByName(e.target.value);
          }}
        />
      </div>
      <table className="table">
        <tr className="containerTable">
          <th></th>
          <th className="titleFilter">ID</th>
          <th className="titleFilter">Name</th>
          <th className="containerFilter">
            <div>
              <div
                className="accordion-title"
                onClick={() => setIsActiveType(!isActiveType)}
              >
                <div className="titleFilter">Type</div>
                <div className="titleFilter">{isActive ? "-" : "+"}</div>
              </div>
              {isActiveType && (
                <div className="accordionContent">
                  <ul>
                    <li>
                      <label>
                        <input
                          className="filterSelect"
                          checked={applyFilter === "inviteOnly"}
                          type="checkbox"
                          onChange={(e) => {
                            filterBy("inviteOnly", "type", e.target.checked);
                          }}
                        />
                        inviteOnly
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          checked={applyFilter === "closed"}
                          type="checkbox"
                          onChange={(e) => {
                            filterBy("closed", "type", e.target.checked);
                          }}
                        />
                        closed
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          checked={applyFilter === "open"}
                          type="checkbox"
                          onChange={(e) => {
                            filterBy("open", "type", e.target.checked);
                          }}
                        />
                        open
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </th>
          <th className="titleFilter">Clan level</th>
          <th className="containerFilter">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <div className="titleFilter">War frequency</div>
              <div className="titleFilter">{isActive ? "-" : "+"}</div>
            </div>
            {isActive && (
              <div className="accordion-content">
                <ul>
                  <li>
                    <label>
                      <input
                        checked={applyFilter === "always"}
                        type="checkbox"
                        onChange={(e) => {
                          filterBy("always", "warFrequency", e.target.checked);
                        }}
                      />
                      always
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        checked={applyFilter === "unknown"}
                        type="checkbox"
                        onChange={(e) => {
                          filterBy("unknown", "warFrequency", e.target.checked);
                        }}
                      />
                      unknown
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </th>
        </tr>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          clansData?.map?.((clan: IClans) => (
            <tr key={clans}>
              <td>
                <img
                  src={clan.badgeUrls.small}
                  alt="clans shell"
                  className="logo"
                />
              </td>
              <td>{clan.tag}</td>
              <td>{clan.name}</td>
              <td>{clan.type}</td>
              <td>{clan.clanLevel}</td>
              <td>{clan.warFrequency}</td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
};

export default HomePage;
