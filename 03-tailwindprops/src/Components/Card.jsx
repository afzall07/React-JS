import React from "react";
function Card({ userName, btnText = "read more", about }) {
  return (
    <div className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          <p>
            If I had to recommend a way of getting into programming today, it
            would be HTML + CSS with Tailwind CSS.{about}
          </p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img
            src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg"
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              <a href="https://twitter.com/rauchg/status/1225611926320738304">
                <span className="absolute inset-0"></span>
                {userName}
              </a>
            </div>
            <div className="mt-0.5">{btnText}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
