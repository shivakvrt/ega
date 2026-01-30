"use client";

export default function TrustBadges({ badges = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="group relative bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-red-500 hover:shadow-md transition-all duration-300 cursor-pointer"
          title={badge.tooltip || badge.label}
        >
          {badge.icon && (
            <div className="text-red-600">
              {badge.icon}
            </div>
          )}
          <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
            {badge.label}
          </span>
          {badge.tooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {badge.tooltip}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

