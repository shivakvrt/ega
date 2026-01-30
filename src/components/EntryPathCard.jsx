import { ClockIcon, LocationIcon, TimerIcon } from "./Icons";

export default function EntryPathCard({ 
  type, 
  title, 
  startDate, 
  schedule, 
  bestFor, 
  borderColor, 
  hoverBorderColor,
  bgColor, 
  buttonText, 
  buttonColor,
  buttonHoverColor,
  emailSubject,
  onButtonClick
}) {
  return (
    <div className={`glass bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-glow-lg p-8 border-2 ${borderColor} ${hoverBorderColor} transition-all duration-300 flex flex-col h-full animate-fadeIn hover:-translate-y-1 group`}>
      <h3 className={`text-2xl font-bold mb-4 ${bgColor} group-hover:scale-105 transition-transform duration-300`}>{title}</h3>
      <div className="space-y-4 mb-6 flex-grow">
        <div className={`${type === 'online' ? 'bg-red-50' : 'bg-red-50'} p-4 rounded-xl`}>
          <p className="font-semibold text-gray-900 mb-1">{startDate}</p>
          {type === 'online' ? (
            <>
              <p className="text-gray-700">10-Week Core Program (Live Online)</p>
              <p className="text-gray-700">10-Month Mentoring & Implementation</p>
            </>
          ) : (
            <>
              <p className="text-gray-700">4 Full In-Person Days Total</p>
              <p className="text-gray-700">April 14–15 (Days 1–2)</p>
              <p className="text-gray-700">Second 2-day session after a 2–3-week gap</p>
            </>
          )}
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">{schedule.title}</p>
          {type === 'online' ? (
            <>
              <p className="text-gray-700 flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-red-600" /> {schedule.time}
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <LocationIcon className="w-5 h-5 text-red-600" /> {schedule.location}
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <TimerIcon className="w-5 h-5 text-red-600" /> {schedule.duration}
              </p>
            </>
          ) : (
            <p className="text-gray-700">{schedule.time}</p>
          )}
        </div>
        {type === 'in-person' && (
          <p className="text-sm text-gray-600 italic bg-yellow-50 p-3 rounded-xl">
            After the in-person immersion, participants join the <strong>same 10-month mentoring journey</strong> as the online cohort.
          </p>
        )}
      </div>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl mb-6">
        <p className="font-semibold text-gray-900 mb-2">Best For:</p>
        <p className="text-gray-700">{bestFor}</p>
      </div>
      <button
        onClick={onButtonClick}
        className={`ripple block w-full ${buttonColor} ${buttonHoverColor} text-white text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 mt-auto cursor-pointer`}
      >
        {buttonText}
      </button>
    </div>
  );
}

