import app from "@/config/app"

const Footer = () => {
  return (
    <footer className="footer footer-center">
      <p>
        Created by
        <a className="link" href={app.author.website_url} target="_blank">
          {app.author.name}
        </a>
      </p>
    </footer>
  )
}
export default Footer
