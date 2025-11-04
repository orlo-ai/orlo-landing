import {
  SunIcon,
  BoltIcon,
  CpuChipIcon,
  SparklesIcon,
  CalendarIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
  ArrowPathIcon,
  LightBulbIcon,
  CubeIcon,
  ClockIcon,
  ArrowsRightLeftIcon,
  FaceFrownIcon,
  ExclamationTriangleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';

export type IconName =
  | 'sunrise'
  | 'sun'
  | 'bolt'
  | 'zap'
  | 'cpu'
  | 'bot'
  | 'sparkles'
  | 'star'
  | 'calendar'
  | 'calendar-check'
  | 'check-circle'
  | 'trophy'
  | 'chat'
  | 'message'
  | 'cloud'
  | 'document'
  | 'pencil'
  | 'edit'
  | 'flag'
  | 'target'
  | 'question'
  | 'help'
  | 'refresh'
  | 'rotate'
  | 'lightbulb'
  | 'idea'
  | 'cube'
  | 'box'
  | 'clock'
  | 'time'
  | 'split'
  | 'scissors'
  | 'frown'
  | 'sad'
  | 'alert'
  | 'warning';

interface FeatureIconProps {
  name: IconName;
  className?: string;
  'aria-label'?: string;
}

/**
 * FeatureIcon 組件 - 統一管理功能頁面的所有 icon
 *
 * 使用 Heroicons (outline 樣式) 替代 emoji
 */
export function FeatureIcon({ name, className = 'w-6 h-6', 'aria-label': ariaLabel }: FeatureIconProps) {
  const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
    // 日出/早晨
    sunrise: SunIcon,
    sun: SunIcon,

    // 閃電/快速
    bolt: BoltIcon,
    zap: BoltIcon,

    // AI/機器人
    cpu: CpuChipIcon,
    bot: CpuChipIcon,

    // 魔法/智能/星星
    sparkles: SparklesIcon,
    star: SparklesIcon,

    // 日曆
    calendar: CalendarIcon,
    'calendar-check': CalendarDaysIcon,

    // 勾選/完成/慶祝
    'check-circle': CheckCircleIcon,
    trophy: CheckCircleIcon,

    // 對話/想法/訊息
    chat: ChatBubbleLeftIcon,
    message: ChatBubbleLeftIcon,
    cloud: ChatBubbleLeftIcon,

    // 文件/筆記
    document: DocumentTextIcon,
    pencil: PencilIcon,
    edit: PencilIcon,

    // 目標/旗幟
    flag: FlagIcon,
    target: FlagIcon,

    // 問號/幫助
    question: QuestionMarkCircleIcon,
    help: QuestionMarkCircleIcon,

    // 循環/重新整理
    refresh: ArrowPathIcon,
    rotate: ArrowPathIcon,

    // 燈泡/想法
    lightbulb: LightBulbIcon,
    idea: LightBulbIcon,

    // 立方體/大型物件
    cube: CubeIcon,
    box: CubeIcon,

    // 時鐘/時間
    clock: ClockIcon,
    time: ClockIcon,

    // 拆分/剪刀
    split: ArrowsRightLeftIcon,
    scissors: ArrowsRightLeftIcon,

    // 負面情緒/警告
    frown: FaceFrownIcon,
    sad: FaceFrownIcon,
    alert: ExclamationTriangleIcon,
    warning: ExclamationTriangleIcon,
  };

  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`FeatureIcon: Unknown icon name "${name}"`);
    return null;
  }

  return <Icon className={className} aria-label={ariaLabel || name} />;
}
