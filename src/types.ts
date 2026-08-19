export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  tag?: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface MetricCard {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  statusText?: string;
  metrics: {
    label: string;
    value: string;
    subtext?: string;
    highlight?: boolean;
  }[];
  comparison?: {
    thisCampaign: string;
    competitors: string;
    percentageBetter: string;
  };
  category: 'meta-ads' | 'e-commerce' | 'leads' | 'engagement';
}

export interface WhatsAppFeedback {
  id: string;
  clientName: string;
  clientRole?: string;
  phonePreview?: string;
  dateOrTime: string;
  avatarText?: string;
  messages: {
    isMe: boolean;
    text: string;
    time?: string;
  }[];
  highlightMetric?: string;
  quoteSummary: string;
}

export interface NicheItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  strategyHighlight: string;
  typicalResult: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  businessName: string;
  businessNiche: string;
  currentMonthlyRevenue: string;
  monthlyAdBudget: string;
  primaryGoal: string;
  hasCrm: string;
  hasSalesTeam: string;
  notes?: string;
}
