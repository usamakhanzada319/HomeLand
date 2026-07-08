import { FaTh, FaList, FaSort } from "react-icons/fa";

function ViewOptions({
  view,
  setView,
  filter,
  setFilter,
  sort,
  setSort,
  showFilter = true,
  showSort = true,
}) {
  const filters = [
    {
      id: "all",
      label: "All",
    },

    {
      id: "rent",
      label: "Rent",
    },

    {
      id: "sale",
      label: "Sale",
    },
  ];

  return (
    <div className="bg-white px-3 py-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      {/*left grid/list icons*/}

      <div className="flex items-center gap-2">
        {/*grid*/}

        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded ${view === "grid" ? "bg-black/80 text-white" : "text-gray-500 hover:bg-gray-100"}`}
        >
          <FaTh />
        </button>
        {/*List*/}
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded ${view === "list" ? "bg-black/80 text-white" : "text-gray-500 hover:bg-gray-100"}`}
        >
          <FaList />
        </button>
      </div>

      {/*right filter,sort */}

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-1 sm:gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3 py-1 text-sm rounded transition ${filter === item.id ? "bg-black/80 text-white" : "text-gray-500 hover:bg-gray-100"} `}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none bg-gray-100 text-gray-700 px-4 py-1.5 pr-8 rounded text-sm focus:outline-none focus:ring-2  font-['Nunito_Sans']"
          >
            <option value="">Sort by</option>
            <option value="asc">Price Ascending</option>
            <option value="desc">Price Descending</option>
          </select>
          <FaSort className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default ViewOptions;
