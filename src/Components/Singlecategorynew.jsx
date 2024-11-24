import React from "react";
import { Link } from "react-router-dom";

const Singlecategorynew = (props={}) => {
    const {singlenews} =props || {};
  return (
    <div className="card bg-base-100 shadow-xl max-w-md mx-auto my-4">
      {/* Author Information */}
      <div className="flex items-center p-4">
        <img
          src={singlenews.author.img}
          alt={singlenews.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="font-bold">{singlenews.author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(singlenews.author.published_date).toDateString()}
          </p>
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={singlenews.thumbnail_url} alt="Thumbnail" className="w-full" />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title">{singlenews.title}</h2>
        <p className="text-gray-600">{singlenews.details.slice(0, 120)}...</p>

        {/* Card Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="badge badge-outline">
            {singlenews.rating.badge} ({singlenews.rating.number})
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0117.984 8H16V5.994a1 1 0 00-.958-.995h-6a1 1 0 00-.992.857L8 6v2H6.016a1 1 0 00-.97.725L6 10m5-2v12m-6 0h12"
              />
            </svg>
            {singlenews.total_view} views
          </div>
        </div>
        <Link to={`/singlenews/${singlenews._id}`} className="btn btn-primary btn-sm mt-2">Read More</Link>
      </div>
    </div>
  );
};

export default Singlecategorynew;
