import React from 'react';

interface ProfileCardProps {
  name: string;
  avatarUrl?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  avatarUrl,
  size = 'medium',
  rounded = true,
  className = '',
}) => {
  // Size classes
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  // Text size classes
  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // Fallback avatar if no URL is provided
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${rounded ? 'rounded-full' : 'rounded-md'
          } bg-gray-200 flex items-center justify-center overflow-hidden`}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={`font-semibold text-gray-600 ${textSizeClasses[size]}`}>
            {getInitials(name)}
          </span>
        )}
      </div>
      <h3 className={`mt-2 font-medium ${textSizeClasses[size]}`}>{name}</h3>
    </div>
  );
};

export default ProfileCard;
