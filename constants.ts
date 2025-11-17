
import type { Service, Value } from './types';
import {
  BuildingIcon, TestTubeIcon, RulerIcon, HardHatIcon, MapIcon, FileTextIcon, RoadIcon, SearchIcon,
  ScalingIcon, TrainIcon, WaveformIcon, CheckShieldIcon, TargetIcon, AtomIcon, HandshakeIcon, LightbulbIcon, ShieldCheckIcon
} from './components/icons/FeatureIcons';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Values', href: '#values' },
  { name: 'Contact', href: '#contact' },
];

export const COMPANY_INFO = {
  name: "AADHAR CIVIL CONSULTANCY SERVICES PVT. LTD.",
  tagline: "Trusted by Precision",
  vision: "To become a trusted and leading civil engineering consultancy known for accuracy, quality, and ethical engineering practices.",
  mission: [
    "To provide reliable, precise, and cost-effective engineering solutions.",
    "To support construction projects with scientific testing, design expertise, and modern technology.",
    "To ensure safety, durability, and client satisfaction in every project."
  ],
  uniqueness: [
    "Strong technical expertise in both testing and consultancy.",
    "Focus on accuracy, transparency, and scientific methods.",
    "Use of modern tools and standards for structural design and testing.",
    "One-stop solution: design, testing, supervision, and certification."
  ],
  address: "Registered Address, City, State, ZIP",
  email: "contact@aadharconsultancy.com",
  phone: "+91 12345 67890",
  cin: "U12345AB2026PTC123456",
  gst: "GSTIN (once allotted)"
};

export const SERVICES: Service[] = [
  { icon: BuildingIcon, title: 'Geotechnical Investigation', description: 'Analyzing soil, rock, and groundwater conditions.' },
  { icon: TestTubeIcon, title: 'Non-Destructive Testing', description: 'Evaluating material properties without causing damage.' },
  { icon: RulerIcon, title: 'Construction Material Testing', description: 'Ensuring materials meet project specifications and standards.' },
  { icon: HardHatIcon, title: 'Project Management', description: 'Overseeing projects from conception to completion.' },
  { icon: MapIcon, title: 'Surveying', description: 'Precise land and site measurement using modern technology.' },
  { icon: FileTextIcon, title: 'DPR & Estimations', description: 'Detailed project reports and accurate cost estimations.' },
  { icon: RoadIcon, title: 'Highway Engineering', description: 'Planning, design, and construction of roads and highways.' },
  { icon: SearchIcon, title: 'Third Party Inspection', description: 'Independent assessment of project quality and compliance.' },
  { icon: ScalingIcon, title: 'Structural Engineering', description: 'Design and analysis of safe and durable structures.' },
  { icon: TrainIcon, title: 'Railway Engineering', description: 'Specialized engineering for railway infrastructure projects.' },
  { icon: WaveformIcon, title: 'Advanced Field Testing', description: 'Utilizing FWD, NSV, and Bump Integrator for superior analysis.' },
  { icon: CheckShieldIcon, title: 'Quality Assurance', description: 'Implementing systems to guarantee project excellence.' },
];

export const VALUES: Value[] = [
  { icon: HandshakeIcon, title: 'Trust', description: 'Building lasting relationships based on integrity and reliability.' },
  { icon: TargetIcon, title: 'Precision', description: 'Commitment to accuracy and meticulous detail in every task.' },
  { icon: ShieldCheckIcon, title: 'Quality', description: 'Upholding the highest standards in materials, processes, and outcomes.' },
  { icon: HardHatIcon, title: 'Professionalism', description: 'Demonstrating expertise and ethical conduct in all interactions.' },
  { icon: LightbulbIcon, title: 'Innovation', description: 'Leveraging modern technology and creative solutions for challenges.' },
  { icon: AtomIcon, title: 'Ethical Engineering', description: 'Adhering to a strict code of ethics to ensure safety and fairness.' },
];