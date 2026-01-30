export default function Section({ 
  children, 
  className = "", 
  bgColor = "bg-white",
  maxWidth = "max-w-6xl",
  textColor = ""
}) {
  return (
    <section className={`py-16 px-4 ${bgColor} ${textColor} ${className}`}>
      <div className={`${maxWidth} mx-auto`}>
        {children}
      </div>
    </section>
  );
}

