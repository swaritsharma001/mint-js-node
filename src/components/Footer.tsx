import { MessageCircle, Youtube } from "lucide-react";
import cachingBotLogo from "@/assets/caching-bot-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container px-4">
        <div className="flex flex-col gap-8 items-center text-center">

          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={cachingBotLogo}
              alt="Caching Bot"
              className="w-10 h-10 rounded-lg"
            />
            <div className="text-left">
              <h3 className="font-semibold">Caching Bot</h3>
              <p className="text-sm text-muted-foreground">
                © {year} NovaLabs. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* Discord */}
            <a
              href="https://discord.gg/zsvWyHpCQV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@disfigbot?si=JjDtvwnaUJFPqgZq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl text-xs text-muted-foreground leading-relaxed">
            <p>
              This tool is provided for <strong>educational and research purposes only</strong>.
              Users are responsible for complying with Discord&apos;s Terms of Service.
              NovaLabs does not encourage misuse of third-party platforms.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
