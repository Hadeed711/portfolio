const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary blue blob — top right */}
      <div
        className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full opacity-30 dark:opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 75%)',
          animation: 'blob 12s ease-in-out infinite',
        }}
      />

      {/* Violet blob — bottom left */}
      <div
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-25 dark:opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 75%)',
          animation: 'blob 16s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />

      {/* Cyan accent blob — center */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-20 dark:opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
          animation: 'blob 10s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '28px 28px',
          color: '#6B7280',
        }}
      />
    </div>
  )
}

export default BackgroundPattern
