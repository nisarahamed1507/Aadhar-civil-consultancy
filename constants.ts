
import type { Service, Value, Sector, TeamMember } from './types';
import {
  BuildingIcon, TestTubeIcon, RulerIcon, HardHatIcon, MapIcon, FileTextIcon, RoadIcon, SearchIcon,
  ScalingIcon, TrainIcon, WaveformIcon, CheckShieldIcon, TargetIcon, AtomIcon, HandshakeIcon, LightbulbIcon, ShieldCheckIcon,
  HomeIcon, CommercialBuildingIcon, FactoryIcon, NetworkIcon, LandmarkIcon
} from './components/icons/FeatureIcons';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Values', href: '/values' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
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
  address: "H.No. 3316-W61-Z6, Ratwat pura colony phase-1, Raipur, Chhattisgarh, India - 492013",
  email: "aadharccspl@gmail.com",
  phone: "+91 98066 60555",
  phone2: "+91 95507 57756",
  phone3: "+91 89787 66436",
  cin: "U42900CT2025PTC019026",
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

export const SECTORS: Sector[] = [
  { icon: HomeIcon, title: 'Residential' },
  { icon: CommercialBuildingIcon, title: 'Commercial' },
  { icon: FactoryIcon, title: 'Industrial' },
  { icon: NetworkIcon, title: 'Infrastructure' },
  { icon: LandmarkIcon, title: 'Government Projects' },
];

export const VALUES: Value[] = [
  { icon: HandshakeIcon, title: 'Trust', description: 'Building lasting relationships based on integrity and reliability.' },
  { icon: TargetIcon, title: 'Precision', description: 'Commitment to accuracy and meticulous detail in every task.' },
  { icon: ShieldCheckIcon, title: 'Quality', description: 'Upholding the highest standards in materials, processes, and outcomes.' },
  { icon: HardHatIcon, title: 'Professionalism', description: 'Demonstrating expertise and ethical conduct in all interactions.' },
  { icon: LightbulbIcon, title: 'Innovation', description: 'Leveraging modern technology and creative solutions for challenges.' },
  { icon: AtomIcon, title: 'Ethical Engineering', description: 'Adhering to a strict code of ethics to ensure safety and fairness.' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Vikas Kumar Reddy',
    role: 'Ph.D., Transportation Engineering',
    description: 'Post-graduated from SVNIT-Surat and Ph.D. from NIT Raipur with 10 years of experience in Highways and Infrastructure Design. Specializes in pavement systems design, performance evaluation, quality control, and competent in AASHTO and IRC guidelines.',
    image: '/assets/images/vikas.jpg',
    cvPath: '/assets/images/Vikas.pdf'
  },
  {
    name: 'Ashish Mishra',
    role: 'Director & Technical Operations',
    description: 'Expert in Transportation Planning, Traffic Engineering, Pavement Engineering, and Life Cycle Analysis. Specialized in Road Safety Audit, Recycling Techniques in pavement engineering, and Quality Assurance & Control in field investigations.',
    image: '/assets/images/aashish.jpg',
    cvPath: '/assets/images/Ashish_Mishra.pdf'
  },
  {
    name: 'Panigrahi Ashok',
    role: 'Director HR',
    description: 'Ashok Post graduated from SVNIT Surat in Transportation Engineering and Planning in Civil Engineering Department.  Having an experience of 5 years in the field of Highway Designs and testing  Associate member of Institute of Engineers (India)',
    image: '/assets/images/1.jpg',
    cvPath: '/assets/images/Team_Member_CV.pdf'
  }
];
