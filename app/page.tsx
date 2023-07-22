import React from "react";

const how_it_works = [
  {
    id: 1,
    text: "You enter URL. ( News Item / Blog )."
  },
  {
    id: 2,
    text: "Our bot goes and fetches the page and takes out article content and strips everything else including trackers.",
  },
  {
    id: 3,
    text: "We display it in and easy to read format."
  },
];

const LandingPage = () => {
  return (
    <div className="px-2 ">
      
      {/* Main form. */}
      <div className="my-4 border-b-2">
        <form
          action="/article"
          method="GET"
          className="flex flex-col items-center gap-4 my-4"
        >
          <input
            type="url"
            name="url"
            required
            className="flex-1 min-w-full px-3 py-2 border-2 rounded outline-none"
            placeholder="Enter article URL here."
          />
          <button
            type="submit"
            className="min-w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            Load Article
          </button>
        </form>
      </div>

      {/* How it works. */}
      <div className="flex flex-col gap-4 px-4 py-4 bg-white rounded shadow-lg">
        
        <h2 className="text-lg font-bold">How it works ?</h2>

        {
          how_it_works.map(item => (
            <div key={item.id} className="flex flex-row items-center gap-2">

                <span className="px-2 font-bold text-white bg-black rounded-full ">{item.id}</span>
                <span>{item.text}</span>

            </div>
          ))
        }

      </div>


    </div>
  );
};

export default LandingPage;
