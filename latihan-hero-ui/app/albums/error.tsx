"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-8">
      <h2 className="text-red-500 text-xl">Something went wrong!</h2>
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white px-4 py-2"
      >
        Try Again
      </button>
    </div>
  )
}