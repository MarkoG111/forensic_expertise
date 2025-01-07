import Link from "next/link";

export default function Banner({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  height = "h-[100vh]",
}: BannerProps) {
  return (
    <section className={`banner-section ${height}`}>
      <div className="container text-left">
        <div className="banner-content">
          {subtitle && <h5 className="banner-subtitle">{subtitle}</h5>}
          {title && <h1 className="banner-title">{title}</h1>}
          {description && <p className="banner-description">{description}</p>}
          {buttonText && buttonLink && (
            <Link href={buttonLink} className="contact-button">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

type BannerProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  height?: string;
};
