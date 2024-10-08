import app from "@/config/app";

const Footer = () => {
  return (
    <footer className="footer footer-center">
      <p className="m-1 flex text-xs">
        Created by
        <a className="link" href={app.author.website_url} target="_blank">
          {app.author.name}
        </a>
      </p>
    </footer>
  );
};
export default Footer;
