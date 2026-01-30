export default function SkeletonLoader({ type = "text", className = "" }) {
  if (type === "image") {
    return (
      <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`}>
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className={`bg-gray-200 animate-pulse rounded-2xl p-6 ${className}`}>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className={`bg-gray-200 animate-pulse rounded ${className}`}>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    );
  }

  return null;
}

