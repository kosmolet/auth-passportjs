import AmazonIcon from "../assets/images/amazon.png";
import FacebookIcon from "../assets/images/facebook.png";
import GithubIcon from "../assets/images/github.png";
import GoogleIcon from "../assets/images/google.png";
import InstagramIcon from "../assets/images/instagram.png";
import SpotifyIcon from "../assets/images/spotify.png";
import TwitterIcon from "../assets/images/twitter.png";

export const data = [
  {
    img: AmazonIcon,
    name: "amazon",
    href: "auth/amazon",
    alt: "amazon-icon",
    color: "#F9AE31",
    txt: "Login with Amazon",
  },
  {
    img: FacebookIcon,
    name: "facebook",
    href: "auth/facebook",
    alt: "facebook-icon",
    color: "#3B5899",
    txt: "Login with Facebook",
  },
  {
    img: GithubIcon,
    name: "github",
    href: "auth/github",
    alt: "github-icon",
    color: "#333333",
    txt: "Login with Github",
  },
  {
    img: GoogleIcon,
    name: "google",
    href: "auth/google",
    alt: "google-icon",
    color: "#CB4024",
    txt: "Login with Google",
  },
  {
    img: InstagramIcon,
    name: "instagram",
    href: "auth/instagram",
    alt: "instagram-icon",
    colors: {
      baseCoat:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    },
    color: "#d9317a",
    txt: "Login with Instagram",
  },
  {
    img: SpotifyIcon,
    name: "spotify",
    href: "auth/spotify",
    alt: "spotify-icon",
    color: "#1EB954",
    txt: "Login with Spotify",
  },
  {
    img: TwitterIcon,
    name: "twitter",
    href: "auth/twitter",
    alt: "twitter-icon",
    color: "#1da1f2",
    txt: "Login with Twitter",
  },
];
