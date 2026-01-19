import { useState } from "react";
import { Box, Headset, Smartphone, Monitor, Glasses, Loader2, Play } from "lucide-react";

export const ImmersiveExperienceCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tourStarted, setTourStarted] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleLaunchTour = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTourStarted(true);
    }, 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tourStarted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = (e.clientX - rect.left - rect.width / 2) / 10;
    setRotation({ x, y });
  };

  const devices = [
    { icon: Headset, label: "VR", supported: true },
    { icon: Glasses, label: "AR", supported: true },
    { icon: Monitor, label: "Desktop", supported: true },
    { icon: Smartphone, label: "Mobile", supported: true },
  ];

  return (
    <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/30 flex items-center justify-center">
            <Box className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">Immersive 3D Experience</h2>
        </div>
        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">NeRF • WebXR</span>
      </div>

      <div className="p-5">
        {/* 3D Model Viewer */}
        <div
          className="relative h-40 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 ring-1 ring-border mb-4 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        >
          {!tourStarted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className="w-20 h-20 relative"
                style={{
                  transform: `perspective(500px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* 3D Cube Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 ring-1 ring-cyan-400/30 rounded-lg animate-float" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 ring-1 ring-cyan-400/20 rounded-lg"
                  style={{ transform: "translateZ(20px) translateX(10px) translateY(-10px)" }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-4">Interactive 3D Preview</p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated room tour simulation */}
              <div
                className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="absolute inset-4 ring-1 ring-cyan-400/20 rounded-lg bg-card/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-foreground">Virtual Tour Active</p>
                    <p className="text-xs text-muted-foreground mt-1">Move mouse to look around</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Device Compatibility */}
        <div className="flex items-center justify-around p-3 rounded-xl bg-muted/30 ring-1 ring-border mb-4">
          {devices.map((device, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${
                device.supported ? "bg-emerald-500/10 ring-1 ring-emerald-500/30" : "bg-muted/50 ring-1 ring-border"
              }`}>
                <device.icon className={`w-4 h-4 ${device.supported ? "text-emerald-400" : "text-muted-foreground"}`} />
              </div>
              <p className={`text-[10px] mt-1 ${device.supported ? "text-emerald-400" : "text-muted-foreground"}`}>
                {device.label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-xs text-muted-foreground">Tour Generation</p>
            <p className="text-sm font-medium text-foreground">&lt;2 min</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-xs text-muted-foreground">Compatibility</p>
            <p className="text-sm font-medium text-foreground">95%</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-xs text-muted-foreground">AI Staging</p>
            <p className="text-sm font-medium text-amber-400">Enabled</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-xs text-muted-foreground">Spatial AI</p>
            <p className="text-sm font-medium text-cyan-400">Active</p>
          </div>
        </div>

        {/* Launch Tour Button */}
        <button
          onClick={handleLaunchTour}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 ring-1 ring-cyan-500/30 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="text-sm font-medium text-cyan-400">Loading Tour...</span>
            </>
          ) : tourStarted ? (
            <>
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Tour Active</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Launch 3D Tour</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
