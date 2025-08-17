import Link from 'next/link';

export default function ServiceCard({ title, description, icon, link }) {
  return (
    <div className="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={link}>
        <div className="p-6">
          <div className="flex items-center mb-4">
            {icon && <img src={icon} alt={title} className="w-12 h-12 mr-4" />}
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4">
            <span className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}