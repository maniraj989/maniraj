import { toolsData } from "@/data/skills";

function ToolSvg({ name }: { name: string }) {
  switch (name) {
    case "React":
      return (
        <svg className="w-7 h-7 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg className="w-7 h-7 text-theme-text" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path
            d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
            fill="var(--bg-main)"
          />
          <path d="M115 54H127V126H115V54Z" fill="var(--bg-main)" />
        </svg>
      );
    case "JavaScript":
      return (
        <div className="w-7 h-7 rounded bg-[#F7DF1E] text-black font-mono font-bold text-sm flex items-center justify-center">
          JS
        </div>
      );
    case "Node.js":
      return (
        <svg className="w-7 h-7 text-[#339933]" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 2.5L2.8 10.1v11.8L16 29.5l13.2-7.6V10.1L16 2.5zm10.7 17.8L16 26.5 5.3 20.3V11.7L16 5.5l10.7 6.2v8.6z" />
        </svg>
      );
    case "Express.js":
      return (
        <span className="font-mono font-bold text-base tracking-tighter text-theme-text">
          ex
        </span>
      );
    case "MongoDB":
      return (
        <svg className="w-7 h-7 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C11.66 0 11.38.16 11.21.43 10.5 1.57 6 9.4 6 14.5c0 3.59 2.69 6.5 6 6.5s6-2.91 6-6.5C18 9.4 13.5 1.57 12.79.43 12.62.16 12.34 0 12 0zm0 2.2c.4 1 4.5 7.6 4.5 12.3 0 2.4-1.9 4.3-4.5 4.5V2.2z" />
        </svg>
      );
    case "MySQL":
      return (
        <svg className="w-7 h-7 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.65 6.2c-.35-.7-.95-1.25-1.7-1.55-.7-.25-1.5-.2-2.2.1-.55.25-1 .65-1.35 1.15-.35-.45-.85-.8-1.4-1-.7-.25-1.5-.2-2.2.1-.75.3-1.35.85-1.7 1.55-.45.95-.45 2.1 0 3.05.35.7.95 1.25 1.7 1.55.45.2.95.25 1.45.2.15.65.5 1.25 1 1.7.6.5 1.4.8 2.2.8.8 0 1.6-.3 2.2-.8.5-.45.85-1.05 1-1.7.5.05 1 0 1.45-.2.75-.3 1.35-.85 1.7-1.55.45-.95.45-2.1 0-3.05z" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg className="w-7 h-7 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "Git":
      return (
        <svg className="w-7 h-7 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.62 10.45l-8.07-8.07a2.29 2.29 0 0 0-3.24 0L8.46 4.23l4.08 4.08c.5-.16 1.09-.04 1.48.36.4.4.52.99.36 1.48l3.93 3.93c.5-.16 1.08-.04 1.48.36a1.62 1.62 0 0 1 0 2.29 1.62 1.62 0 0 1-2.29 0c-.43-.43-.53-1.07-.3-1.58l-3.66-3.66v5.27c.18.15.34.33.45.54a1.62 1.62 0 0 1-.84 2.14 1.62 1.62 0 0 1-2.14-.84 1.62 1.62 0 0 1 .4-1.84c.2-.2.43-.33.68-.41V9.9c-.25-.08-.48-.21-.68-.41a1.63 1.63 0 0 1-.36-1.51L5.95 4.31.81 9.45a2.29 2.29 0 0 0 0 3.24l8.07 8.07c.9.9 2.34.9 3.24 0l9.5-9.5a2.29 2.29 0 0 0 0-3.24v.43z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className="w-7 h-7 text-theme-text" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Docker":
      return (
        <svg className="w-7 h-7 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m21.71 1.954c-.347-.207-.942-.315-1.574-.09-.168.06-.328.143-.474.248-.44-.316-.94-.482-1.464-.482h-1.042c-.22 0-.414.135-.494.343l-.47 1.222a.49.49 0 01-.46.312H.498a.5.5 0 00-.498.513c.094 2.87 1.157 5.488 3.09 7.421 2.227 2.228 5.253 3.473 8.442 3.473 7.828 0 12.44-5.328 12.44-11.458 0-.46-.037-.915-.1-1.36-.015-.098-.05-.192-.1-.274-.216-.36-.612-.668-1.285-.928" />
        </svg>
      );
    case "Figma":
      return (
        <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );
    default:
      return <div className="w-7 h-7 rounded bg-theme-border" />;
  }
}

export default function ToolsGrid() {
  return (
    <section className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
            05 // Stack &amp; Workflow
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-theme-text leading-tight">
            Tools of the Trade
          </h2>
        </div>

        {/* Dynamic Technology Grid with Interactive Hover States */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {toolsData.map((tool) => (
            <div
              key={tool.name}
              className="group p-5 rounded-xl bg-theme-surface border border-theme-border hover:border-[var(--accent-color)] transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-theme-elevated border border-theme-border flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <ToolSvg name={tool.name} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-theme-muted">
                  {tool.category}
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-base text-theme-text tracking-tight group-hover:text-[var(--accent-color)] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-mono text-theme-muted mt-1 leading-relaxed">
                  {tool.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
