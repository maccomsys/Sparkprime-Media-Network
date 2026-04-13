interface CardProps {
  key?: string | number;
  image: string;
  badge: string;
  title: string;
  aspectRatio?: '16/9' | '1/1' | 'auto';
  className?: string;
  titleClassName?: string;
}

export default function Card({ image, badge, title, aspectRatio = '16/9', className = '', titleClassName = 'text-sm' }: CardProps) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div 
        className="relative overflow-hidden rounded-lg mb-3"
        style={{ aspectRatio: aspectRatio === '16/9' ? '16/9' : aspectRatio === '1/1' ? '1/1' : 'auto' }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-2 left-2">
          <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm tracking-wider">
            {badge}
          </span>
        </div>
      </div>
      <h3 className={`font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-brand-green transition-colors ${titleClassName}`}>
        {title}
      </h3>
    </div>
  );
}
