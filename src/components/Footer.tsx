import { profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialLinks
          className="-ml-2 gap-0.5 sm:ml-0"
          linkClassName="grid size-8 place-items-center rounded-full text-subtle transition-colors hover:text-fg"
          iconClassName="size-4"
        />
      </div>
    </footer>
  );
}
