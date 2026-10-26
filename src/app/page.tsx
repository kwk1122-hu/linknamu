import Image from "next/image";

// 보여 주기용 더미 데이터. 실제 내용은 나중에 교체한다.
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <div className="flex w-full max-w-md flex-col items-center">
        <Image
          className="h-36 w-36 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
          src={profile.imageSrc}
          alt={`${profile.name} 프로필 사진`}
          width={144}
          height={144}
          priority
        />
        <h1 className="mt-5 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>

        <ul className="mt-10 flex w-full flex-col gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full items-center justify-center rounded-2xl border border-zinc-200 bg-white font-medium text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
