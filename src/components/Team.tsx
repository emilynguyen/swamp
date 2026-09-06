import { Logo } from "./Logo";

type Person = "Ekin" | "Emily";

type TeamProps = {
  person?: Person;
  className?: string;
};

const PERSON_DATA: Record<
  Person,
  {
    name: string;
    role: string;
    likes: [string, string];
    photoSrc: string;
    colorClass: string;
    linkedinHref: string;
    websiteHref: string;
  }
> = {
  Ekin: {
    name: "Ekin Tumer",
    role: "Design lead",
    likes: ["Her dog, nail art,", "coffee, festivals"],
    photoSrc: "/team/example-photo-1.png",
    colorClass: "bg-primary-brand",
    linkedinHref: "https://www.linkedin.com/in/ekintumer/",
    websiteHref: "https://ekintumer.com/",
  },
  Emily: {
    name: "Emily Nguyen",
    role: "Tech lead",
    likes: ["Her cats, tattoos,", "festivals, concerts"],
    photoSrc: "/team/example-photo-2.png",
    colorClass: "bg-secondary-purple-300",
    linkedinHref: "https://www.linkedin.com/in/emilymnguyen/",
    websiteHref: "https://www.emilynguyen.co/",
  },
};

function Field({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="flex w-full items-end gap-[5px]">
      <p className="geist-xs w-9 shrink-0 text-primary-dark">{label}</p>
      <div className="flex w-full flex-col items-start">
        {lines.map((line) => (
          <p
            key={line}
            className="geist-m w-full whitespace-nowrap border-b border-dashed border-primary-dark text-primary-dark"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Team({ person = "Ekin", className }: TeamProps) {
  const { name, role, likes, photoSrc, colorClass, linkedinHref, websiteHref } =
    PERSON_DATA[person];

  return (
    <div
      className={`relative h-[247px] w-[370px] rounded-default ${colorClass} ${className ?? ""}`}
    >
      <Logo
        type="tertiary"
        color="dark"
        size="x-small"
        className="absolute left-4 top-4"
      />

      <p className="geist-m text-transparent-dark-alpha-40 absolute right-4 top-[14px] w-[108px] text-right">
        Member card
      </p>

      <div className="absolute left-4 top-[59px] flex w-[184px] flex-col items-start gap-4">
        <Field label="Name:" lines={[name]} />
        <Field label="Role:" lines={[role]} />
        <Field label="Likes:" lines={likes} />
      </div>

      <div className="absolute bottom-5 right-4 h-[171px] w-[138px]">
        <img
          src={photoSrc}
          alt={name}
          draggable={false}
          className="absolute left-1 top-1 h-[163px] w-[130px] select-none object-cover"
        />
        <svg
          viewBox="0 0 140.5 173.5"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M11.25 1.25H1.25V11.25M129.25 1.25H139.25V11.25M11.25 172.25H1.25V162.25M129.25 172.25H139.25V162.25"
            stroke="#131410"
            strokeWidth="0.5"
            fill="none"
            filter="url(#sketch-stroke)"
          />
        </svg>
      </div>

      <div className="geist-xs text-primary-dark absolute bottom-4 left-4 flex items-start gap-3">
        <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
          Linkedin
        </a>
        <span>/</span>
        <a href={websiteHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
          Website
        </a>
      </div>
    </div>
  );
}
