export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Temporal Video Grounding System</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>Version 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

