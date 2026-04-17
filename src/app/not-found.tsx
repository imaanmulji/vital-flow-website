import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-bg px-4 text-center">
      <h1 className="font-heading text-6xl text-brand-primaryDark mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-brand-textPrimary mb-6">Page Not Found</h2>
      <p className="text-brand-textSecondary mb-8 max-w-md mx-auto">
        We couldn't find the page you're looking for. It might have been moved or the link might be broken.
      </p>
      <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full">
        <Link href="/">
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
}
