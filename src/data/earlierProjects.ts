import { FileBarChart2, LayoutDashboard, Plane } from 'lucide-react'

import type { EarlierProjectEntry } from '@models/earlierProject'

export const earlierProjects: EarlierProjectEntry[] = [
  {
    id: 'xnappreports',
    title: 'XnappReports',
    timeline: 'May 2018 – September 2019',
    category: 'Enterprise Application / Reporting',
    description:
      'An earlier cross-platform application project developed during my UI development experience, contributing to enterprise application development and user interface engineering.',
    technologies: ['JavaScript', 'CSS3', 'Bootstrap', 'SQL'],
    icon: FileBarChart2,
  },
  {
    id: 'bridgestone-customer-portal',
    title: 'Customer Portal of Bridgestone',
    timeline: 'May 2017 – December 2017',
    category: 'Enterprise Portal / UI Development',
    description:
      'An enterprise customer portal project developed during my software engineering experience, focused on building responsive user interfaces and business workflows.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
    icon: LayoutDashboard,
  },
  {
    id: 'sabre-flight-booking',
    title: 'Sabre Flight Booking App',
    timeline: 'February 2015 – February 2017',
    category: 'Travel / Booking Application',
    description:
      'A cross-platform travel booking application project developed during my early software engineering career, contributing to responsive interfaces and application workflows.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
    icon: Plane,
  },
]
