export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Sector {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  cvPath: string;
}
