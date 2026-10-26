import Image from "next/image";

// 보여 주기용 더미 데이터. 실제 내용은 나중에 교체한다.
const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI개발에 관심이 많아요",
  imageSrc: "/profile.png",
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 justify-center overflow-hidden px-6 pt-20 pb-16 sm:pt-28">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/20"
      />

      <div className="relative flex w-full max-w-sm flex-col items-center">
        <Image
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_14px_30px_-10px_rgba(150,80,40,0.45)] dark:ring-white/10"
          src={profile.imageSrc}
          alt={`${profile.name} 프로필 사진`}
          width={112}
          height={112}
          priority
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-center text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
          {profile.bio}
        </p>

        <ul className="mt-12 flex w-full flex-col gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full items-center justify-center rounded-3xl border border-white/70 bg-white/45 font-medium shadow-[0_6px_24px_-12px_rgba(150,80,40,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_28px_-12px_rgba(150,80,40,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
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
