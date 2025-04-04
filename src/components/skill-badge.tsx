interface SkillBadgeProps {
  name: string
  color: string
}

export function SkillBadge({ name, color }: SkillBadgeProps) {
  return (
    <div
      className="inline-block px-4 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
      style={{
        backgroundColor: color,
        color: isColorDark(color) ? "white" : "black",
        transform: `rotate(${Math.random() * 2 - 1}deg)`,
      }}
    >
      {name}
    </div>
  )
}

// Helper function to determine if a color is dark
function isColorDark(color: string): boolean {
  // Convert hex to RGB
  const hex = color.replace("#", "")
  const r = Number.parseInt(hex.substr(0, 2), 16)
  const g = Number.parseInt(hex.substr(2, 2), 16)
  const b = Number.parseInt(hex.substr(4, 2), 16)

  // Calculate brightness (YIQ equation)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // Return true if color is dark
  return brightness < 128
}

