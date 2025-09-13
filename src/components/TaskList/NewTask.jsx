const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#0269df] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-lg font-medium px-3 py-1 rounded-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold"> {data ? data.title : ""}</h2>
      <p className="text-sm mt-3">{data ? data.desc : ""}</p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
