function Pagination() {
  const Pages = [1, 2, 3, 4, 5, "...", 10];
  return (
    <div className=" flex justify-center items-center gap-1 mt-8">
      {Pages.map((page, index) => (
        <button
          key={index}
          className={`w-9 h-9  flex items-center justify-center rounded-full text-sm  font-medium transition ${page === 1 ? "bg-[#7CBD1E] text-white" : "text-gray-500 hover:bg-gray-100"}${page === "..." ? "cursor-default" : ""}`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
