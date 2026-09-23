import React, { useState, useRef, useEffect } from "react";

import { vehicle_info_category_colors } from "../constants/colors_and_labels";

function HotspotPin({ hotspot, part, selected, onClick }) {
  const [hovered, setHovered] = useState(false);
  const color = vehicle_info_category_colors[part.category] ?? "#4a5568";
  const active = selected || hovered;

  return (
    <div
      className="absolute"
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: active ? 20 : 10,
      }}
    >
      {/* label */}
      <div
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none transition-all duration-150"
        style={{
          opacity: active ? 1 : 0,
          transform: `translateX(-50%) translateY(${active ? 0 : 4}px)`,
        }}
      >
        <div
          className="px-2 py-1"
          style={{
            background: "#0e1120ee",
            border: `1px solid ${color}`,
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "var(--color-text)",
            backdropFilter: "blur(4px)",
          }}
        >
          {part.name}
        </div>
        <div
          className="mx-auto"
          style={{
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: `4px solid ${color}`,
          }}
        />
      </div>

      {/* pin */}
      <button
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center transition-all duration-150"
        style={{
          width: selected ? 22 : 16,
          height: selected ? 22 : 16,
          background: selected ? color : `${color}33`,
          border: `1.5px solid ${color}`,
          borderRadius: 0,
          cursor: "crosshair",
          outline: "none",
          boxShadow: active ? `0 0 0 3px ${color}33, 0 0 12px ${color}44` : "none",
        }}
      >
        <div
          style={{
            width: selected ? 6 : 4,
            height: selected ? 6 : 4,
            background: selected ? "#fff" : color,
            borderRadius: 0,
          }}
        />
        {selected && (
          <div
            className="absolute inset-0"
            style={{ border: `1px solid ${color}`, animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }}
          />
        )}
      </button>
    </div>
  );
}

function ImagePlaceholder({ view }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4"
      style={{
        border: "1px dashed var(--color-border)",
        background: "repeating-linear-gradient(45deg, transparent, transparent 20px, #ffffff03 20px, #ffffff03 40px)",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.25 }}>
        <rect x="4" y="8" width="32" height="24" rx="0" stroke="#dce4f0" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M4 28l10-8 7 5 5-4 10 7" stroke="#dce4f0" strokeWidth="1" />
        <circle cx="13" cy="16" r="3" stroke="#dce4f0" strokeWidth="1" />
      </svg>
      <div className="flex flex-col items-center gap-1">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-dim)" }}>
          No image loaded
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--color-text-dim)", opacity: 0.6 }}>
          {view.imagePath}
        </span>
      </div>
    </div>
  );
}

export default function ImageViewer({ vehicle, activeView, onViewChange, onPartSelect, selectedPart }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
    setImageLoaded(false);
    }, [vehicle.id, activeView.id]);

    return (
    <div className="flex flex-col w-full h-full">
        {/* view switcher */}
        <div className="flex flex-shrink-0" style={{ borderBottom: "1px solid var(--color-border)" }}>
        {vehicle.views.map((view) => {
            const active = view.id === activeView.id;
            return (
            <button
                key={view.id}
                onClick={() => onViewChange(view)}
                className="relative px-5 py-2.5 transition-all duration-150"
                style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: active ? "var(--color-accent)" : "var(--color-text-dim)",
                background: active ? "var(--color-surface-2)" : "transparent",
                borderRight: "1px solid var(--color-border)",
                }}
            >
                {active && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-accent)" }} />}
                {view.label}
            </button>
            );
        })}
        <div className="flex-1" />
        <div className="flex items-center px-4 gap-2" style={{ borderLeft: "1px solid var(--color-border)" }}>
            <div className="w-1.5 h-1.5" style={{ background: "var(--color-accent)", opacity: 0.5 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.14em", color: "var(--color-text-dim)", textTransform: "uppercase" }}>
            {activeView.hotspots.length} annotation{activeView.hotspots.length !== 1 ? "s" : ""}
            </span>
        </div>
        </div>

        {/* image area */}
        <div
        className="relative flex-1 overflow-hidden flex items-center justify-center"
        onClick={() => onPartSelect(null)}
        style={{ cursor: "default" }}
        >
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
            backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.3,
            }}
        />

        <div className="relative" style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <img
            ref={imgRef}
            src={activeView.imagePath}
            alt={`${vehicle.name} — ${activeView.label}`}
            className="block transition-opacity duration-300"
            style={{
                maxWidth: "100%",
                maxHeight: "calc(100vh - 280px)",
                objectFit: "contain",
                opacity: imageLoaded ? 1 : 0,
                userSelect: "none",
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            draggable={false}
            />

            {!imageLoaded && (
            <div style={{ width: 640, height: 360, position: "relative" }}>
                <ImagePlaceholder view={activeView} />
            </div>
            )}

            {imageLoaded && (
            <div className="absolute inset-0 pointer-events-none">
                <div className="relative w-full h-full pointer-events-auto">
                {activeView.hotspots.map((hs) => {
                    const part = vehicle.parts.find((p) => p.id === hs.partId);
                    if (!part) return null;
                    return (
                    <HotspotPin
                        key={hs.partId}
                        hotspot={hs}
                        part={part}
                        selected={selectedPart?.id === hs.partId}
                        onClick={() => onPartSelect(selectedPart?.id === hs.partId ? null : part)}
                    />
                    );
                })}
                </div>
            </div>
            )}
        </div>

        {!selectedPart && imageLoaded && (
            <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-dim)" }}
            >
            click a marker to inspect component
            </div>
        )}

        <div className="absolute top-5 right-6 pointer-events-none flex flex-col items-end gap-0.5">
            <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800, letterSpacing: "0.06em", color: "var(--color-text-dim)", lineHeight: 1, opacity: 0.35 }}>
            {vehicle.shortName}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--color-text-dim)", opacity: 0.4, textTransform: "uppercase" }}>
            {activeView.label}
            </div>
        </div>
        </div>
    </div>
    );
}