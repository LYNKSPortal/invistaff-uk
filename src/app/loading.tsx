export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div
        role="status"
        aria-label="Loading"
        className="size-8 animate-spin rounded-full border-2 border-forest-deep-15 border-t-forest-deep"
      />
    </div>
  );
}
