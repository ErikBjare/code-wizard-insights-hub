
import React from 'react';
import { cn } from '@/lib/utils';

interface QualityScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const QualityScore: React.FC<QualityScoreProps> = ({ 
  score, 
  size = 'md', 
  showLabel = true,
  className 
}) => {
  const getColor = (score: number) => {
    if (score >= 80) return 'bg-code-green text-white';
    if (score >= 60) return 'bg-code-yellow text-gray-900';
    return 'bg-code-red text-white';
  };

  const getLabel = (score: number) => {
    if (score >= 80) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Poor';
  };

  const sizeClasses = {
    sm: 'h-16 w-16 text-xl',
    md: 'h-24 w-24 text-2xl',
    lg: 'h-32 w-32 text-3xl',
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("relative rounded-full flex items-center justify-center font-bold shadow-md", sizeClasses[size], getColor(score))}>
        {score}%
      </div>
      {showLabel && <p className="mt-2 text-sm font-medium">{getLabel(score)}</p>}
    </div>
  );
};

export default QualityScore;
