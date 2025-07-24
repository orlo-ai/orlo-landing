'use client';

interface AvatarPlaceholderProps {
  name: string;
  size?: number;
  className?: string;
}

export default function AvatarPlaceholder({ 
  name, 
  size = 60, 
  className = "" 
}: AvatarPlaceholderProps) {
  // 提取首字母
  const getInitials = (fullName: string) => {
    const names = fullName.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  // 根據名字生成穩定的顏色
  const getGradientColor = (fullName: string) => {
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-blue-600', 
      'from-purple-500 to-pink-600',
      'from-orange-500 to-red-600',
      'from-teal-500 to-cyan-600',
      'from-indigo-500 to-blue-600'
    ];
    
    // 使用名字的字符碼來選擇顏色，確保同名的人始終得到相同顏色
    const nameHash = fullName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[nameHash % gradients.length];
  };

  const initials = getInitials(name);
  const gradientClass = getGradientColor(name);

  return (
    <div 
      className={`
        rounded-full 
        bg-gradient-to-br ${gradientClass}
        flex items-center justify-center
        text-white font-bold
        shadow-sm
        ${className}
      `}
      style={{ 
        width: size, 
        height: size,
        fontSize: size * 0.4  // 字體大小為容器的40%
      }}
    >
      {initials}
    </div>
  );
}