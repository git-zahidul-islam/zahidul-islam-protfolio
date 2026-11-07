import { profile, socialLabels, type SocialKey } from "@/data/profile";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "./icons";

const icons: Record<SocialKey, (props: { className?: string }) => React.JSX.Element> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
};

export function SocialLinks({
  className = "",
  linkClassName = "grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-fg",
  iconClassName = "size-5",
}: {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center ${className}`}>
      {(Object.keys(profile.socials) as SocialKey[]).map((key) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={profile.socials[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLabels[key]}
              title={socialLabels[key]}
              className={linkClassName}
            >
              <Icon className={iconClassName} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
