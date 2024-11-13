// import React from "react";
// import appwriteService from "../appwrite/config";
// import { Link } from "react-router-dom";

// function PostCard({ $id, title, featuredImage }) {
//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-gray-100 rounded-xl p-4">
//         <div className="w-full justify-center mb-4">
//           <img
//             src={appwriteService.getFilePreview(featuredImage)}
//             alt={title}
//             className="rounded-xl"
//           />
//         </div>
//         <h2 className="text-xl font-bold">{title}</h2>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;

import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  // Check if featuredImage is valid
  const imagePreview = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : null;

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {imagePreview ? (
            <img src={imagePreview} alt={title} className="rounded-xl" />
          ) : (
            <div className="h-48 bg-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;