// components/ServiceCard.tsx
import Link from 'next/link';
import { Lightbulb } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
}

export default function ServiceCard({ title, description, slug, image }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="  overflow-hidden shadow-lg  transition hover:shadow-2xl">
        {/* Image with tag */}
        <div className="relative">
          <img
            src={image || "/images/service/solution.jpg"}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-5 py-2  flex items-center gap-1 shadow uppercase font-semibold">
            <Lightbulb size={14} className="text-gray-100" />
            Solution
          </div>
        </div>

        {/* Text content */}
        <div className="p-5 space-y-3">
          <h3 className="text-gray-950 text-lg font-semibold">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>

          <Link href={`/services/${slug}`} className="inline-block pt-2">
            <span className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition">Read More →</span>
          </Link>
        </div>
      </div>
    </Link>
  );
}
