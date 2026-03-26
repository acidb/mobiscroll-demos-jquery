import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';
import { dyndatetime } from '../../../../dyndatetime';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme,
    });

    $(function () {
      var defaultEvents = [
        {
          id: 1,
          title: 'Office Tower HVAC System Overhaul',
          start: dyndatetime('y,1,5'),
          end: dyndatetime('y,3,15'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 2,
          title: 'Executive Floor Climate Control Installation',
          start: dyndatetime('y,1,10'),
          end: dyndatetime('y,3,20'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 3,
          title: 'Headquarters Heating System Maintenance',
          start: dyndatetime('y,2,1'),
          end: dyndatetime('y,3,31'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 4,
          title: 'Building Infrastructure Assessment',
          start: dyndatetime('y,1,15'),
          end: dyndatetime('y,3,25'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 5,
          title: 'Campus Facilities Modernization',
          start: dyndatetime('y,2,5'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        //<hide-comment>
        {
          id: 6,
          title: 'Factory Data & Electrical Infrastructure',
          start: dyndatetime('y,1,8'),
          end: dyndatetime('y,3,18'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 7,
          title: 'Production Floor Power Distribution Upgrade',
          start: dyndatetime('y,1,20'),
          end: dyndatetime('y,3,30'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 8,
          title: 'Industrial Control Room Electrical Repair',
          start: dyndatetime('y,2,10'),
          end: dyndatetime('y,3,31'),
          resource: 3,
          type: 'repair',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 9,
          title: 'Smart Building Controls Installation',
          start: dyndatetime('y,1,12'),
          end: dyndatetime('y,3,22'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 10,
          title: 'Building Automation System Upgrade',
          start: dyndatetime('y,2,8'),
          end: dyndatetime('y,3,31'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 11,
          title: 'Factory Campus HVAC Project',
          start: dyndatetime('y,1,18'),
          end: dyndatetime('y,3,28'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 12,
          title: 'Industrial Climate System Modernization',
          start: dyndatetime('y,2,12'),
          end: dyndatetime('y,3,31'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 13,
          title: 'Office Tower Cooling System Installation',
          start: dyndatetime('y,4,2'),
          end: dyndatetime('y,6,12'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 14,
          title: 'Headquarters Air Quality System Upgrade',
          start: dyndatetime('y,4,15'),
          end: dyndatetime('y,6,25'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 15,
          title: 'Conference Center HVAC Maintenance',
          start: dyndatetime('y,5,5'),
          end: dyndatetime('y,6,30'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 16,
          title: 'Building Systems Integration Project',
          start: dyndatetime('y,4,8'),
          end: dyndatetime('y,6,18'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 17,
          title: 'Campus Infrastructure Maintenance',
          start: dyndatetime('y,4,20'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 18,
          title: 'Facility Safety Systems Inspection',
          start: dyndatetime('y,5,10'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 19,
          title: 'Plant Backup Power System Installation',
          start: dyndatetime('y,4,5'),
          end: dyndatetime('y,6,15'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 20,
          title: 'Factory Electrical Panel Upgrade',
          start: dyndatetime('y,5,1'),
          end: dyndatetime('y,6,30'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 21,
          title: 'Corporate Building Electrical Inspection',
          start: dyndatetime('y,4,12'),
          end: dyndatetime('y,6,22'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 22,
          title: 'Emergency Power System Repair',
          start: dyndatetime('y,5,8'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 23,
          title: 'Security System Integration',
          start: dyndatetime('y,4,18'),
          end: dyndatetime('y,6,28'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 24,
          title: 'Access Control System Maintenance',
          start: dyndatetime('y,5,12'),
          end: dyndatetime('y,6,30'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 25,
          title: 'Multi-Plant Climate Control Project',
          start: dyndatetime('y,4,22'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 26,
          title: 'Summer Cooling System Optimization',
          start: dyndatetime('y,7,3'),
          end: dyndatetime('y,9,13'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 27,
          title: 'Office Tower Ventilation Upgrade',
          start: dyndatetime('y,8,1'),
          end: dyndatetime('y,9,30'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 28,
          title: 'Campus Building Systems Inspection',
          start: dyndatetime('y,7,8'),
          end: dyndatetime('y,9,18'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 29,
          title: 'Headquarters Facility Upgrades',
          start: dyndatetime('y,7,20'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 30,
          title: 'Building Infrastructure Maintenance',
          start: dyndatetime('y,8,10'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 31,
          title: 'Plant Power Infrastructure Upgrade',
          start: dyndatetime('y,7,5'),
          end: dyndatetime('y,9,15'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 32,
          title: 'Factory Building Electrical Maintenance',
          start: dyndatetime('y,7,18'),
          end: dyndatetime('y,9,28'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 33,
          title: 'Industrial Emergency Generator Installation',
          start: dyndatetime('y,8,5'),
          end: dyndatetime('y,9,30'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 34,
          title: 'Corporate Electrical Safety Inspection',
          start: dyndatetime('y,7,12'),
          end: dyndatetime('y,9,22'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 35,
          title: 'Lighting System Repair',
          start: dyndatetime('y,8,8'),
          end: dyndatetime('y,9,30'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 36,
          title: 'Building Controls System Upgrade',
          start: dyndatetime('y,7,15'),
          end: dyndatetime('y,9,25'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 37,
          title: 'Factory Climate Control Renovation',
          start: dyndatetime('y,8,12'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 38,
          title: 'Winter HVAC System Preparation',
          start: dyndatetime('y,10,2'),
          end: dyndatetime('y,12,12'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 39,
          title: 'Headquarters Heating System Upgrade',
          start: dyndatetime('y,10,15'),
          end: dyndatetime('y,12,25'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 40,
          title: 'Office Climate Control Installation',
          start: dyndatetime('y,11,5'),
          end: dyndatetime('y,12,31'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 41,
          title: 'Year-End Facility Inspection',
          start: dyndatetime('y,10,8'),
          end: dyndatetime('y,12,18'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 42,
          title: 'Building Systems Winterization',
          start: dyndatetime('y,10,20'),
          end: dyndatetime('y,12,30'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 43,
          title: 'Campus Infrastructure Upgrade',
          start: dyndatetime('y,11,10'),
          end: dyndatetime('y,12,31'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 44,
          title: 'Factory Electrical System Upgrade',
          start: dyndatetime('y,10,5'),
          end: dyndatetime('y,12,15'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 45,
          title: 'Industrial Power Distribution Maintenance',
          start: dyndatetime('y,11,1'),
          end: dyndatetime('y,12,31'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 46,
          title: 'Year-End Electrical Safety Audit',
          start: dyndatetime('y,10,12'),
          end: dyndatetime('y,12,22'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 47,
          title: 'Emergency Systems Installation',
          start: dyndatetime('y,11,8'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 48,
          title: 'Security System Annual Maintenance',
          start: dyndatetime('y,10,18'),
          end: dyndatetime('y,12,28'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 49,
          title: 'Building Automation Upgrade',
          start: dyndatetime('y,11,12'),
          end: dyndatetime('y,12,31'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 50,
          title: 'Industrial Multi-Zone Climate System',
          start: dyndatetime('y,10,22'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 51,
          title: 'Hospital HVAC System Overhaul',
          start: dyndatetime('y,1,4'),
          end: dyndatetime('y,3,14'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 52,
          title: 'Medical Ward Climate Control Installation',
          start: dyndatetime('y,2,3'),
          end: dyndatetime('y,3,31'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 53,
          title: 'Medical Facility Systems Upgrade',
          start: dyndatetime('y,1,9'),
          end: dyndatetime('y,3,19'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 54,
          title: 'Hospital Infrastructure Inspection',
          start: dyndatetime('y,1,22'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 55,
          title: 'Clinic Facility Maintenance',
          start: dyndatetime('y,2,14'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 56,
          title: 'Production Line Electrical Installation',
          start: dyndatetime('y,1,12'),
          end: dyndatetime('y,3,22'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 57,
          title: 'Factory Power System Upgrade',
          start: dyndatetime('y,2,8'),
          end: dyndatetime('y,3,31'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 58,
          title: 'Manufacturing Equipment Electrical Inspection',
          start: dyndatetime('y,1,6'),
          end: dyndatetime('y,3,16'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 59,
          title: 'Industrial Electrical Panel Repair',
          start: dyndatetime('y,1,25'),
          end: dyndatetime('y,3,31'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 60,
          title: 'Plant Emergency Power Installation',
          start: dyndatetime('y,2,18'),
          end: dyndatetime('y,3,31'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 61,
          title: 'Campus Automation System Setup',
          start: dyndatetime('y,1,16'),
          end: dyndatetime('y,3,26'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 62,
          title: 'School Building Controls Upgrade',
          start: dyndatetime('y,2,11'),
          end: dyndatetime('y,3,31'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 63,
          title: 'Industrial HVAC Modernization Project',
          start: dyndatetime('y,1,19'),
          end: dyndatetime('y,3,29'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 64,
          title: 'Hospital Cooling System Installation',
          start: dyndatetime('y,4,4'),
          end: dyndatetime('y,6,14'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 65,
          title: 'Patient Area Ventilation Upgrade',
          start: dyndatetime('y,4,18'),
          end: dyndatetime('y,6,28'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 66,
          title: 'Clinic HVAC System Maintenance',
          start: dyndatetime('y,5,7'),
          end: dyndatetime('y,6,30'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 67,
          title: 'Hospital Safety Systems Inspection',
          start: dyndatetime('y,4,10'),
          end: dyndatetime('y,6,20'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 68,
          title: 'Medical Building Systems Maintenance',
          start: dyndatetime('y,5,3'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 69,
          title: 'Industrial Electrical System Upgrade',
          start: dyndatetime('y,4,6'),
          end: dyndatetime('y,6,16'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 70,
          title: 'Factory Power Infrastructure Maintenance',
          start: dyndatetime('y,5,12'),
          end: dyndatetime('y,6,30'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 71,
          title: 'Production Equipment Electrical Certification',
          start: dyndatetime('y,4,13'),
          end: dyndatetime('y,6,23'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 72,
          title: 'Manufacturing Line Power Installation',
          start: dyndatetime('y,4,25'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 73,
          title: 'Plant Electrical Panel Upgrade',
          start: dyndatetime('y,5,16'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 74,
          title: 'Municipal Control Systems Maintenance',
          start: dyndatetime('y,4,20'),
          end: dyndatetime('y,6,30'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 75,
          title: 'Factory Climate Control Project',
          start: dyndatetime('y,5,9'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 76,
          title: 'Hospital Summer HVAC Service',
          start: dyndatetime('y,7,2'),
          end: dyndatetime('y,9,12'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 77,
          title: 'Medical Center Climate System Upgrade',
          start: dyndatetime('y,8,3'),
          end: dyndatetime('y,9,30'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 78,
          title: 'Hospital Facility Annual Inspection',
          start: dyndatetime('y,7,9'),
          end: dyndatetime('y,9,19'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 79,
          title: 'Medical Center Maintenance Program',
          start: dyndatetime('y,7,22'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 80,
          title: 'Hospital Infrastructure Modernization',
          start: dyndatetime('y,8,12'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 81,
          title: 'Factory Electrical Infrastructure Upgrade',
          start: dyndatetime('y,7,6'),
          end: dyndatetime('y,9,16'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 82,
          title: 'Production Power System Installation',
          start: dyndatetime('y,7,19'),
          end: dyndatetime('y,9,29'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 83,
          title: 'Industrial Electrical Maintenance',
          start: dyndatetime('y,8,8'),
          end: dyndatetime('y,9,30'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 84,
          title: 'Plant Electrical Safety Inspection',
          start: dyndatetime('y,7,13'),
          end: dyndatetime('y,9,23'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 85,
          title: 'Manufacturing Equipment Power Repair',
          start: dyndatetime('y,8,6'),
          end: dyndatetime('y,9,30'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 86,
          title: 'University Automation System Upgrade',
          start: dyndatetime('y,7,16'),
          end: dyndatetime('y,9,26'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 87,
          title: 'Campus Control Systems Maintenance',
          start: dyndatetime('y,8,14'),
          end: dyndatetime('y,9,30'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 88,
          title: 'Industrial Climate System Project',
          start: dyndatetime('y,8,10'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 89,
          title: 'Hospital Winter HVAC Preparation',
          start: dyndatetime('y,10,3'),
          end: dyndatetime('y,12,13'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 90,
          title: 'Medical Facility Heating Installation',
          start: dyndatetime('y,10,17'),
          end: dyndatetime('y,12,27'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 91,
          title: 'Patient Area Climate Upgrade',
          start: dyndatetime('y,11,7'),
          end: dyndatetime('y,12,31'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 92,
          title: 'Year-End Hospital Facility Inspection',
          start: dyndatetime('y,10,9'),
          end: dyndatetime('y,12,19'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 93,
          title: 'Medical Center Winterization',
          start: dyndatetime('y,11,2'),
          end: dyndatetime('y,12,31'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 94,
          title: 'Factory Electrical System Upgrade',
          start: dyndatetime('y,10,6'),
          end: dyndatetime('y,12,16'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 95,
          title: 'Production Line Power Maintenance',
          start: dyndatetime('y,11,4'),
          end: dyndatetime('y,12,31'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 96,
          title: 'Year-End Industrial Electrical Audit',
          start: dyndatetime('y,10,13'),
          end: dyndatetime('y,12,23'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 97,
          title: 'Manufacturing Electrical Safety Installation',
          start: dyndatetime('y,10,25'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 98,
          title: 'Plant Power Distribution Upgrade',
          start: dyndatetime('y,11,14'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 99,
          title: 'Municipal Automation Year-End Maintenance',
          start: dyndatetime('y,10,19'),
          end: dyndatetime('y,12,29'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 100,
          title: 'Factory-Wide HVAC Upgrade Project',
          start: dyndatetime('y,11,11'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 101,
          title: 'Hospital Wing HVAC System Overhaul',
          start: dyndatetime('y,1,5'),
          end: dyndatetime('y,3,10'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 102,
          title: 'ICU Climate Control Installation',
          start: dyndatetime('y,1,12'),
          end: dyndatetime('y,3,18'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 103,
          title: 'Operating Theater Air Quality Upgrade',
          start: dyndatetime('y,1,20'),
          end: dyndatetime('y,3,25'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 104,
          title: 'Emergency Ward Ventilation Repair',
          start: dyndatetime('y,2,3'),
          end: dyndatetime('y,3,28'),
          resource: 1,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 105,
          title: 'Medical Center HVAC Inspection',
          start: dyndatetime('y,2,14'),
          end: dyndatetime('y,3,31'),
          resource: 1,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 106,
          title: 'Clinic Heating System Upgrade',
          start: dyndatetime('y,2,20'),
          end: dyndatetime('y,3,31'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 107,
          title: 'Hospital Electrical Infrastructure Installation',
          start: dyndatetime('y,1,8'),
          end: dyndatetime('y,3,20'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 108,
          title: 'Medical Building Power Distribution Upgrade',
          start: dyndatetime('y,1,18'),
          end: dyndatetime('y,3,28'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 109,
          title: 'Radiology Wing Electrical Inspection',
          start: dyndatetime('y,2,1'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 110,
          title: 'Emergency Power Backup Installation',
          start: dyndatetime('y,2,10'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 111,
          title: 'Pharmacy Electrical System Repair',
          start: dyndatetime('y,1,25'),
          end: dyndatetime('y,3,22'),
          resource: 2,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 112,
          title: 'Patient Ward Power Upgrade',
          start: dyndatetime('y,2,18'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 113,
          title: 'Hospital BAS Controls Installation',
          start: dyndatetime('y,1,10'),
          end: dyndatetime('y,3,15'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 114,
          title: 'Medical Center Automation Upgrade',
          start: dyndatetime('y,1,22'),
          end: dyndatetime('y,3,25'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 115,
          title: 'Clinic Environmental Controls Repair',
          start: dyndatetime('y,2,5'),
          end: dyndatetime('y,3,31'),
          resource: 3,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 116,
          title: 'Hospital Security System Integration',
          start: dyndatetime('y,2,12'),
          end: dyndatetime('y,3,31'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 117,
          title: 'ICU Monitoring System Upgrade',
          start: dyndatetime('y,1,16'),
          end: dyndatetime('y,3,20'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 118,
          title: 'School District HVAC Overhaul',
          start: dyndatetime('y,1,7'),
          end: dyndatetime('y,3,17'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 119,
          title: 'City Hall Climate Control Installation',
          start: dyndatetime('y,1,15'),
          end: dyndatetime('y,3,25'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 120,
          title: 'University Building HVAC Upgrade',
          start: dyndatetime('y,1,23'),
          end: dyndatetime('y,3,31'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 121,
          title: 'Public Library Ventilation Repair',
          start: dyndatetime('y,2,4'),
          end: dyndatetime('y,3,28'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 122,
          title: 'Fire Station HVAC Inspection',
          start: dyndatetime('y,2,13'),
          end: dyndatetime('y,3,31'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 123,
          title: 'Community Center Heating Upgrade',
          start: dyndatetime('y,2,21'),
          end: dyndatetime('y,3,31'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 124,
          title: 'Campus Electrical Infrastructure Installation',
          start: dyndatetime('y,1,9'),
          end: dyndatetime('y,3,19'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 125,
          title: 'Municipal Building Power Upgrade',
          start: dyndatetime('y,1,19'),
          end: dyndatetime('y,3,29'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 126,
          title: 'School Electrical Safety Inspection',
          start: dyndatetime('y,2,2'),
          end: dyndatetime('y,3,31'),
          resource: 5,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 127,
          title: 'Police Station Power Installation',
          start: dyndatetime('y,2,11'),
          end: dyndatetime('y,3,31'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 128,
          title: 'University Lab Electrical Repair',
          start: dyndatetime('y,1,26'),
          end: dyndatetime('y,3,23'),
          resource: 5,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 129,
          title: 'City Hall Building Automation Setup',
          start: dyndatetime('y,1,11'),
          end: dyndatetime('y,3,16'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 130,
          title: 'School BAS Modernization',
          start: dyndatetime('y,1,21'),
          end: dyndatetime('y,3,26'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 131,
          title: 'Municipal Controls System Repair',
          start: dyndatetime('y,2,6'),
          end: dyndatetime('y,3,31'),
          resource: 6,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 132,
          title: 'Library Automation System Installation',
          start: dyndatetime('y,2,16'),
          end: dyndatetime('y,3,31'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 133,
          title: 'Campus Security Integration Project',
          start: dyndatetime('y,1,14'),
          end: dyndatetime('y,3,21'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 134,
          title: 'Hospital Summer Cooling System Service',
          start: dyndatetime('y,4,3'),
          end: dyndatetime('y,6,13'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 135,
          title: 'ICU HVAC System Upgrade',
          start: dyndatetime('y,4,14'),
          end: dyndatetime('y,6,24'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 136,
          title: 'Operating Theater Ventilation Installation',
          start: dyndatetime('y,5,2'),
          end: dyndatetime('y,6,28'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 137,
          title: 'Medical Center Air Filtration Upgrade',
          start: dyndatetime('y,4,20'),
          end: dyndatetime('y,6,30'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 138,
          title: 'Clinic HVAC Inspection Program',
          start: dyndatetime('y,5,10'),
          end: dyndatetime('y,6,30'),
          resource: 1,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 139,
          title: 'Hospital Wing Electrical Upgrade',
          start: dyndatetime('y,4,5'),
          end: dyndatetime('y,6,15'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 140,
          title: 'Medical Building Power Installation',
          start: dyndatetime('y,4,16'),
          end: dyndatetime('y,6,26'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 141,
          title: 'Radiology Equipment Power Upgrade',
          start: dyndatetime('y,5,4'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 142,
          title: 'Hospital Electrical Safety Inspection',
          start: dyndatetime('y,4,22'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 143,
          title: 'Emergency Generator Installation',
          start: dyndatetime('y,5,13'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 144,
          title: 'Hospital Controls System Upgrade',
          start: dyndatetime('y,4,7'),
          end: dyndatetime('y,6,17'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 145,
          title: 'Medical Center BAS Installation',
          start: dyndatetime('y,4,18'),
          end: dyndatetime('y,6,28'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 146,
          title: 'Clinic Automation Maintenance',
          start: dyndatetime('y,5,6'),
          end: dyndatetime('y,6,30'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 147,
          title: 'Hospital Security System Upgrade',
          start: dyndatetime('y,4,24'),
          end: dyndatetime('y,6,30'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 148,
          title: 'ICU Controls Integration',
          start: dyndatetime('y,5,15'),
          end: dyndatetime('y,6,30'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 149,
          title: 'School HVAC Spring Service',
          start: dyndatetime('y,4,4'),
          end: dyndatetime('y,6,14'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 150,
          title: 'University Campus Climate Upgrade',
          start: dyndatetime('y,4,15'),
          end: dyndatetime('y,6,25'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 151,
          title: 'City Hall HVAC Installation',
          start: dyndatetime('y,5,3'),
          end: dyndatetime('y,6,29'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 152,
          title: 'Municipal Building Ventilation Upgrade',
          start: dyndatetime('y,4,21'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 153,
          title: 'Public Works HVAC Inspection',
          start: dyndatetime('y,5,11'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 154,
          title: 'Campus Power Distribution Upgrade',
          start: dyndatetime('y,4,6'),
          end: dyndatetime('y,6,16'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 155,
          title: 'School Electrical Infrastructure Installation',
          start: dyndatetime('y,4,17'),
          end: dyndatetime('y,6,27'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 156,
          title: 'Municipal Electrical Maintenance',
          start: dyndatetime('y,5,5'),
          end: dyndatetime('y,6,30'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 157,
          title: 'University Power System Inspection',
          start: dyndatetime('y,4,23'),
          end: dyndatetime('y,6,30'),
          resource: 5,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 158,
          title: 'City Buildings Electrical Repair',
          start: dyndatetime('y,5,14'),
          end: dyndatetime('y,6,30'),
          resource: 5,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 159,
          title: 'School BAS Spring Upgrade',
          start: dyndatetime('y,4,8'),
          end: dyndatetime('y,6,18'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 160,
          title: 'Municipal Automation System Installation',
          start: dyndatetime('y,4,19'),
          end: dyndatetime('y,6,29'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 161,
          title: 'City Hall Controls Maintenance',
          start: dyndatetime('y,5,7'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 162,
          title: 'Campus Security System Upgrade',
          start: dyndatetime('y,4,25'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 163,
          title: 'Library Automation Maintenance',
          start: dyndatetime('y,5,16'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 164,
          title: 'Hospital Summer HVAC Optimization',
          start: dyndatetime('y,7,3'),
          end: dyndatetime('y,9,13'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 165,
          title: 'Medical Center Cooling Upgrade',
          start: dyndatetime('y,7,14'),
          end: dyndatetime('y,9,24'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 166,
          title: 'Hospital Ventilation System Repair',
          start: dyndatetime('y,8,2'),
          end: dyndatetime('y,9,28'),
          resource: 1,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 167,
          title: 'ICU Climate Control Inspection',
          start: dyndatetime('y,7,20'),
          end: dyndatetime('y,9,30'),
          resource: 1,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 168,
          title: 'Clinic Air Quality Installation',
          start: dyndatetime('y,8,10'),
          end: dyndatetime('y,9,30'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 169,
          title: 'Hospital Power Infrastructure Upgrade',
          start: dyndatetime('y,7,5'),
          end: dyndatetime('y,9,15'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 170,
          title: 'Medical Center Electrical Maintenance',
          start: dyndatetime('y,7,17'),
          end: dyndatetime('y,9,27'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 171,
          title: 'Radiology Wing Power Installation',
          start: dyndatetime('y,8,4'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 172,
          title: 'Hospital Electrical Safety Audit',
          start: dyndatetime('y,7,22'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 173,
          title: 'Pharmacy Power System Repair',
          start: dyndatetime('y,8,12'),
          end: dyndatetime('y,9,30'),
          resource: 2,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 174,
          title: 'Medical BAS Summer Upgrade',
          start: dyndatetime('y,7,7'),
          end: dyndatetime('y,9,17'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 175,
          title: 'Hospital Controls Maintenance',
          start: dyndatetime('y,7,19'),
          end: dyndatetime('y,9,29'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 176,
          title: 'Clinic Automation System Installation',
          start: dyndatetime('y,8,6'),
          end: dyndatetime('y,9,30'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 177,
          title: 'ICU Security System Upgrade',
          start: dyndatetime('y,7,24'),
          end: dyndatetime('y,9,30'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 178,
          title: 'Medical Center Inspection Program',
          start: dyndatetime('y,8,14'),
          end: dyndatetime('y,9,30'),
          resource: 3,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 179,
          title: 'School Summer HVAC Service',
          start: dyndatetime('y,7,4'),
          end: dyndatetime('y,9,14'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 180,
          title: 'University Cooling System Upgrade',
          start: dyndatetime('y,7,15'),
          end: dyndatetime('y,9,25'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 181,
          title: 'City Hall Ventilation Installation',
          start: dyndatetime('y,8,3'),
          end: dyndatetime('y,9,29'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 182,
          title: 'Municipal HVAC Inspection',
          start: dyndatetime('y,7,21'),
          end: dyndatetime('y,9,30'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 183,
          title: 'Public Library Climate Repair',
          start: dyndatetime('y,8,11'),
          end: dyndatetime('y,9,30'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 184,
          title: 'Campus Power Infrastructure Upgrade',
          start: dyndatetime('y,7,6'),
          end: dyndatetime('y,9,16'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 185,
          title: 'School Electrical Maintenance Program',
          start: dyndatetime('y,7,18'),
          end: dyndatetime('y,9,28'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 186,
          title: 'Municipal Power Installation',
          start: dyndatetime('y,8,5'),
          end: dyndatetime('y,9,30'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 187,
          title: 'University Electrical Safety Inspection',
          start: dyndatetime('y,7,23'),
          end: dyndatetime('y,9,30'),
          resource: 5,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 188,
          title: 'City Buildings Power Repair',
          start: dyndatetime('y,8,13'),
          end: dyndatetime('y,9,30'),
          resource: 5,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 189,
          title: 'School BAS Summer Upgrade',
          start: dyndatetime('y,7,8'),
          end: dyndatetime('y,9,18'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 190,
          title: 'Municipal Automation Maintenance',
          start: dyndatetime('y,7,20'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 191,
          title: 'City Hall Controls Installation',
          start: dyndatetime('y,8,7'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 192,
          title: 'Campus Security Upgrade',
          start: dyndatetime('y,7,25'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 193,
          title: 'Library System Inspection',
          start: dyndatetime('y,8,15'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 194,
          title: 'Hospital Winter HVAC Preparation',
          start: dyndatetime('y,10,3'),
          end: dyndatetime('y,12,13'),
          resource: 1,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 195,
          title: 'Medical Center Heating Installation',
          start: dyndatetime('y,10,16'),
          end: dyndatetime('y,12,26'),
          resource: 1,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 196,
          title: 'ICU Climate System Upgrade',
          start: dyndatetime('y,11,4'),
          end: dyndatetime('y,12,31'),
          resource: 1,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 197,
          title: 'Hospital Year-End HVAC Inspection',
          start: dyndatetime('y,10,22'),
          end: dyndatetime('y,12,31'),
          resource: 1,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 198,
          title: 'Clinic Heating System Repair',
          start: dyndatetime('y,11,12'),
          end: dyndatetime('y,12,31'),
          resource: 1,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 199,
          title: 'Hospital Electrical Winter Upgrade',
          start: dyndatetime('y,10,5'),
          end: dyndatetime('y,12,15'),
          resource: 2,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 200,
          title: 'Medical Facility Power Maintenance',
          start: dyndatetime('y,10,18'),
          end: dyndatetime('y,12,28'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 201,
          title: 'Radiology Wing Heating Installation',
          start: dyndatetime('y,11,3'),
          end: dyndatetime('y,12,31'),
          resource: 2,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 202,
          title: 'Hospital Electrical Year-End Inspection',
          start: dyndatetime('y,10,24'),
          end: dyndatetime('y,12,31'),
          resource: 2,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 203,
          title: 'Emergency Power System Repair',
          start: dyndatetime('y,11,14'),
          end: dyndatetime('y,12,31'),
          resource: 2,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 204,
          title: 'Hospital BAS Winter Upgrade',
          start: dyndatetime('y,10,6'),
          end: dyndatetime('y,12,16'),
          resource: 3,
          type: 'upgrade',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 205,
          title: 'Medical Center Controls Maintenance',
          start: dyndatetime('y,10,19'),
          end: dyndatetime('y,12,29'),
          resource: 3,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 206,
          title: 'Clinic Automation Year-End Inspection',
          start: dyndatetime('y,11,3'),
          end: dyndatetime('y,12,31'),
          resource: 3,
          type: 'inspection',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 207,
          title: 'Hospital Security System Installation',
          start: dyndatetime('y,11,14'),
          end: dyndatetime('y,12,31'),
          resource: 3,
          type: 'installation',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 208,
          title: 'ICU Controls Year-End Repair',
          start: dyndatetime('y,10,24'),
          end: dyndatetime('y,12,31'),
          resource: 3,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 209,
          title: 'School Winter Heating Preparation',
          start: dyndatetime('y,10,4'),
          end: dyndatetime('y,12,14'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 210,
          title: 'University Heating System Upgrade',
          start: dyndatetime('y,10,17'),
          end: dyndatetime('y,12,27'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 211,
          title: 'City Hall Heating Installation',
          start: dyndatetime('y,11,5'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 212,
          title: 'Municipal HVAC Year-End Inspection',
          start: dyndatetime('y,10,23'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 213,
          title: 'Public Library Heating Repair',
          start: dyndatetime('y,11,13'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 214,
          title: 'Campus Power Winter Upgrade',
          start: dyndatetime('y,10,7'),
          end: dyndatetime('y,12,17'),
          resource: 5,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 215,
          title: 'School Electrical Year-End Maintenance',
          start: dyndatetime('y,10,20'),
          end: dyndatetime('y,12,30'),
          resource: 5,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 216,
          title: 'Municipal Power Installation',
          start: dyndatetime('y,11,6'),
          end: dyndatetime('y,12,31'),
          resource: 5,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 217,
          title: 'University Electrical Safety Audit',
          start: dyndatetime('y,10,25'),
          end: dyndatetime('y,12,31'),
          resource: 5,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 218,
          title: 'City Buildings Electrical Repair',
          start: dyndatetime('y,11,15'),
          end: dyndatetime('y,12,31'),
          resource: 5,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 219,
          title: 'School BAS Winter Upgrade',
          start: dyndatetime('y,10,8'),
          end: dyndatetime('y,12,18'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 220,
          title: 'Municipal Automation Year-End Maintenance',
          start: dyndatetime('y,10,21'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 221,
          title: 'City Hall Controls Installation',
          start: dyndatetime('y,11,7'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 222,
          title: 'Campus Security Year-End Inspection',
          start: dyndatetime('y,10,26'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'inspection',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 223,
          title: 'Library Automation Winter Repair',
          start: dyndatetime('y,11,16'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'repair',
          clientGroup: 'Education & Municipal Services',
        },
        {
          id: 224,
          title: 'Medical Facility Power Repair',
          start: dyndatetime('y,4,26'),
          end: dyndatetime('y,6,30'),
          resource: 2,
          type: 'repair',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 225,
          title: 'Clinic Power Distribution Maintenance',
          start: dyndatetime('y,2,22'),
          end: dyndatetime('y,3,31'),
          resource: 2,
          type: 'maintenance',
          clientGroup: 'Healthcare Network',
        },
        {
          id: 226,
          title: 'Corporate Electrical Panel Installation',
          start: dyndatetime('y,1,14'),
          end: dyndatetime('y,3,24'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 227,
          title: 'Plant Floor Power Maintenance',
          start: dyndatetime('y,2,3'),
          end: dyndatetime('y,3,28'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 228,
          title: 'Factory Infrastructure Electrical Upgrade',
          start: dyndatetime('y,2,19'),
          end: dyndatetime('y,3,31'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 229,
          title: 'Plant Power Infrastructure Installation',
          start: dyndatetime('y,7,10'),
          end: dyndatetime('y,9,20'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 230,
          title: 'Factory Building Electrical Maintenance',
          start: dyndatetime('y,7,23'),
          end: dyndatetime('y,9,30'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 231,
          title: 'Industrial Facility Power Upgrade',
          start: dyndatetime('y,8,9'),
          end: dyndatetime('y,9,30'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 232,
          title: 'Factory Climate Control Maintenance',
          start: dyndatetime('y,1,14'),
          end: dyndatetime('y,3,24'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 233,
          title: 'Industrial HVAC Installation',
          start: dyndatetime('y,2,3'),
          end: dyndatetime('y,3,28'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 234,
          title: 'Plant Climate System Inspection',
          start: dyndatetime('y,2,19'),
          end: dyndatetime('y,3,31'),
          resource: 6,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 235,
          title: 'Factory HVAC Spring Upgrade',
          start: dyndatetime('y,4,9'),
          end: dyndatetime('y,6,19'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 236,
          title: 'Industrial Climate Maintenance',
          start: dyndatetime('y,4,22'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 237,
          title: 'Plant Ventilation Inspection',
          start: dyndatetime('y,5,10'),
          end: dyndatetime('y,6,30'),
          resource: 6,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 238,
          title: 'Factory Summer Cooling Maintenance',
          start: dyndatetime('y,7,9'),
          end: dyndatetime('y,9,19'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 239,
          title: 'Industrial HVAC Summer Upgrade',
          start: dyndatetime('y,7,22'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 240,
          title: 'Plant Climate System Inspection',
          start: dyndatetime('y,8,9'),
          end: dyndatetime('y,9,30'),
          resource: 6,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 241,
          title: 'Factory Winter HVAC Maintenance',
          start: dyndatetime('y,10,9'),
          end: dyndatetime('y,12,19'),
          resource: 6,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 242,
          title: 'Industrial Heating System Installation',
          start: dyndatetime('y,10,22'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 243,
          title: 'Plant Year-End Climate Inspection',
          start: dyndatetime('y,11,9'),
          end: dyndatetime('y,12,31'),
          resource: 6,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 244,
          title: 'Factory Electrical Infrastructure Upgrade',
          start: dyndatetime('y,4,9'),
          end: dyndatetime('y,6,19'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 245,
          title: 'Plant Power Infrastructure Maintenance',
          start: dyndatetime('y,4,22'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 246,
          title: 'Industrial Electrical Installation',
          start: dyndatetime('y,5,10'),
          end: dyndatetime('y,6,30'),
          resource: 4,
          type: 'installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 247,
          title: 'Factory Power Winter Upgrade',
          start: dyndatetime('y,10,9'),
          end: dyndatetime('y,12,19'),
          resource: 4,
          type: 'upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 248,
          title: 'Plant Electrical Winter Maintenance',
          start: dyndatetime('y,10,22'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 249,
          title: 'Industrial Power Year-End Repair',
          start: dyndatetime('y,11,9'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'repair',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 250,
          title: 'Factory Building Electrical Inspection',
          start: dyndatetime('y,11,20'),
          end: dyndatetime('y,12,31'),
          resource: 4,
          type: 'inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        //</hide-comment>
      ];

      var assigneeResources = [
        {
          id: 1,
          name: 'Sarah Johnson',
          title: 'Senior HVAC Technician',
          color: '#4a7c9e',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 2,
          name: 'Mike Chen',
          title: 'Lead Facilities Engineer',
          color: '#7fa650',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        },
        {
          id: 3,
          name: 'Emily Rodriguez',
          title: 'Electrical Systems Specialist',
          color: '#c76b8a',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
        {
          id: 4,
          name: 'James Wilson',
          title: 'Master Electrician',
          color: '#4a9dad',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 5,
          name: 'Lisa Anderson',
          title: 'Building Automation Technician',
          color: '#d4a056',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 6,
          name: 'David Kim',
          title: 'HVAC Project Manager',
          color: '#5a9d76',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
      ];

      var typeResources = [
        {
          id: 'installation',
          name: 'installation',
          color: '#3b5998',
        },
        {
          id: 'maintenance',
          name: 'maintenance',
          color: '#2d7a4f',
        },
        {
          id: 'repair',
          name: 'repair',
          color: '#b8621b',
        },
        {
          id: 'inspection',
          name: 'inspection',
          color: '#6b4fa3',
        },
        {
          id: 'upgrade',
          name: 'upgrade',
          color: '#a03a3a',
        },
      ];

      var groupedEvents = [];
      var groupBy = 'assignee'; // 'assignee' or 'type'
      var groupByClientQuarter = false;
      var rawEvents = defaultEvents.slice();

      function groupEventsByClientQuarter(events) {
        var groups = {};
        var result = [];

        // Save old collapsed states including year and period
        var oldCollapsedStates = {};
        groupedEvents.forEach(function (ge) {
          // Extract year and period from the group
          var stateKey = ge.resource + '-' + ge.clientGroup + '-' + ge.year + '-' + ge.period;
          oldCollapsedStates[stateKey] = ge.collapsed;
        });

        // Group events by resource (assignee or type) + client + quarter
        events.forEach(function (event) {
          var resourceId = groupBy === 'assignee' ? event.resource : event.type;
          var eventStart = new Date(event.start);
          var month = eventStart.getMonth();
          var year = eventStart.getFullYear();
          var period = Math.floor(month / 3);

          var groupKey = resourceId + '-' + event.clientGroup + '-' + year + '-' + period;

          if (!groups[groupKey]) {
            groups[groupKey] = {
              resource: resourceId,
              clientGroup: event.clientGroup,
              year: year,
              period: period,
              events: [],
            };
          }

          groups[groupKey].events.push(event);
        });

        // Create grouped events
        Object.keys(groups).forEach(function (groupKey) {
          var groupData = groups[groupKey];
          var periodEvents = groupData.events.sort(function (a, b) {
            return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
          });

          // Get color based on groupBy mode
          var color;
          if (groupBy === 'assignee') {
            var resourceItem = assigneeResources.find(function (r) {
              return r.id === groupData.resource;
            });
            color = resourceItem.color;
          } else {
            var typeObj = typeResources.find(function (r) {
              return r.id === groupData.resource;
            });
            color = typeObj.color;
          }

          var eventIds = periodEvents
            .map(function (e) {
              return e.id;
            })
            .join('-');

          var earliestStart = periodEvents[0].start;
          var latestEnd = periodEvents.reduce(function (latest, event) {
            return event.end > latest ? event.end : latest;
          }, periodEvents[0].end);

          var newId = 'group-' + groupKey + '-' + eventIds;

          // Use full key including year and period
          var stateKey = groupData.resource + '-' + groupData.clientGroup + '-' + groupData.year + '-' + groupData.period;
          var collapsedState = stateKey in oldCollapsedStates ? oldCollapsedStates[stateKey] : true;

          result.push({
            id: newId,
            title: groupData.clientGroup,
            resource: groupData.resource,
            clientGroup: groupData.clientGroup,
            year: groupData.year,
            period: groupData.period,
            start: earliestStart,
            end: latestEnd,
            color: color,
            count: periodEvents.length,
            originalEvents: periodEvents,
            collapsed: collapsedState,
          });
        });

        return result;
      }

      function prepareEventsForDisplay(events, colorByType) {
        return events.map(function (event) {
          return {
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            resource: colorByType ? event.resource : event.type,
            type: event.type,
            assignee: event.resource,
            clientGroup: event.clientGroup,
            color: '#f8f9fa',
          };
        });
      }

      function updateView() {
        var currentResources = groupBy === 'assignee' ? assigneeResources : typeResources;
        var currentEvents;

        if (groupByClientQuarter) {
          groupedEvents = groupEventsByClientQuarter(rawEvents);
          currentEvents = groupedEvents;
        } else {
          groupedEvents = [];
          currentEvents = prepareEventsForDisplay(rawEvents, groupBy === 'assignee');
        }

        calendar.setOptions({
          data: currentEvents,
          resources: currentResources,
          renderScheduleEvent: groupByClientQuarter ? renderGroupedEvent : renderSimpleEvent,
        });
      }

      function renderGroupedEvent(event) {
        var origEvent = event.original;
        var isExpanded = !origEvent.collapsed;

        // Get unique items (opposite of groupBy)
        var uniqueItems = {};
        origEvent.originalEvents.forEach(function (ev) {
          if (groupBy === 'assignee') {
            var typeObj = typeResources.find(function (r) {
              return r.id === ev.type;
            });
            if (typeObj) {
              uniqueItems[typeObj.id] = typeObj;
            }
          } else {
            var emp = assigneeResources.find(function (r) {
              return r.id === ev.resource;
            });
            if (emp) {
              uniqueItems[emp.id] = emp;
            }
          }
        });

        var itemCount = Object.keys(uniqueItems).length;
        var itemLabel = groupBy === 'assignee' ? 'type' : 'employee';

        // Generate expanded content HTML if expanded
        var expandedHTML = '';
        if (isExpanded) {
          expandedHTML = origEvent.originalEvents
            .map(function (ev) {
              var detailText = '';
              var typeDotColor = '';
              var avatarUrl = '';

              if (groupBy === 'assignee') {
                var typeObj = typeResources.find(function (r) {
                  return r.id === ev.type;
                });
                if (typeObj) {
                  detailText = typeObj.name;
                  typeDotColor = typeObj.color;
                }
              } else {
                var employee = assigneeResources.find(function (r) {
                  return r.id === ev.resource;
                });
                if (employee) {
                  detailText = employee.name;
                  avatarUrl = employee.img;
                }
              }

              return (
                '<div class="mds-event-grouping-original-event">' +
                '<div class="mbsc-flex mds-event-grouping-event-content">' +
                '<div class="mds-event-grouping-event-title">' +
                ev.title +
                '</div>' +
                '<div class="mbsc-flex mds-event-grouping-event-right">' +
                '<div class="mds-event-grouping-event-date">' +
                mobiscroll.formatDate('DD MMM', new Date(ev.start)) +
                ' - ' +
                mobiscroll.formatDate('DD MMM', new Date(ev.end)) +
                '</div>' +
                '<div class="mbsc-flex mds-event-grouping-event-detail">' +
                (avatarUrl ? '<img src="' + avatarUrl + '" alt="' + detailText + '" class="mds-event-grouping-event-avatar" />' : '') +
                (typeDotColor ? '<span class="mds-event-grouping-type-dot" style="background-color: ' + typeDotColor + '"></span>' : '') +
                '<div class="mds-event-grouping-event-info">' +
                detailText +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
              );
            })
            .join('');
        }

        return (
          '<div class="mbsc-flex mds-event-grouping-task mds-event-grouping-task-client' +
          (isExpanded ? ' expanded' : '') +
          '" style="border-left-color: ' +
          origEvent.color +
          '">' +
          '<div class="mbsc-flex mds-event-grouping-content">' +
          '<div class="mds-event-grouping-title-text">' +
          origEvent.clientGroup +
          '</div>' +
          '<div class="mbsc-flex mds-event-grouping-right">' +
          '<div class="mbsc-flex mds-event-grouping-meta">' +
          '<div class="mds-event-grouping-date-range">' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.start)) +
          ' - ' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.end)) +
          '</div>' +
          '<div class="mds-event-grouping-count">' +
          origEvent.count +
          ' task' +
          (origEvent.count > 1 ? 's' : '') +
          ', ' +
          itemCount +
          ' ' +
          itemLabel +
          (itemCount > 1 ? 's' : '') +
          '</div>' +
          '</div>' +
          '<div class="mbsc-flex mds-event-grouping-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"></div>' +
          '</div>' +
          '</div>' +
          '<div class="mds-event-grouping-events"><div class="mds-event-grouping-events-inner">' +
          expandedHTML +
          '</div></div>' +
          '</div>'
        );
      }

      function renderSimpleEvent(event) {
        var origEvent = event.original;
        var detailText = '';
        var avatarUrl = '';
        var typeDotColor = '';

        if (groupBy === 'assignee') {
          // Show type with colored dot
          var typeObj = typeResources.find(function (t) {
            return t.id === origEvent.type;
          });
          if (typeObj) {
            detailText = typeObj.name;
            typeDotColor = typeObj.color;
          }
        } else {
          // Show assignee with avatar
          var employee = assigneeResources.find(function (r) {
            return r.id === origEvent.assignee;
          });
          if (employee) {
            detailText = employee.name;
            avatarUrl = employee.img;
          }
        }

        return (
          '<div class="mbsc-flex mds-event-simple" style="background-color: ' +
          origEvent.color +
          '">' +
          '<div class="mds-event-simple-title">' +
          origEvent.title +
          '</div>' +
          '<div class="mbsc-flex mds-event-simple-right">' +
          '<div class="mds-event-simple-date">' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.start)) +
          ' - ' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.end)) +
          '</div>' +
          (detailText
            ? '<div class="mbsc-flex mds-event-simple-subtitle-wrapper">' +
              (avatarUrl ? '<img src="' + avatarUrl + '" alt="' + detailText + '" class="mds-event-simple-avatar" />' : '') +
              (typeDotColor ? '<span class="mds-event-simple-type-dot" style="background-color: ' + typeDotColor + '"></span>' : '') +
              '<div class="mbsc-flex mds-event-simple-subtitle" style="' +
              (groupBy === 'assignee' ? '' : 'margin-left: 25px;') +
              '">' +
              detailText +
              '</div>' +
              '</div>'
            : '') +
          '</div>' +
          '</div>'
        );
      }

      var calendar = $('#demo-event-grouping')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: false,
          dragToCreate: false,
          clickToCreate: false,
          dragBetweenResources: false,
          view: {
            timeline: {
              type: 'year',
              resolutionHorizontal: 'month',
              eventHeight: 'variable',
            },
          },
          data: defaultEvents,
          resources: assigneeResources,
          renderScheduleEvent: renderSimpleEvent,
          renderResource: function (resource) {
            if (groupBy === 'assignee') {
              // Employee resource
              return (
                '<div class="mbsc-flex">' +
                '<img alt="' +
                resource.name +
                '" class="mds-event-grouping-avatar" src="' +
                resource.img +
                '"/>' +
                '<div class="mds-event-grouping-cont">' +
                '<div class="mds-event-grouping-name">' +
                resource.name +
                '</div>' +
                '<div class="mds-event-grouping-title">' +
                resource.title +
                '</div>' +
                '</div>' +
                '</div>'
              );
            } else {
              // Type resource
              return (
                '<div class="mbsc-flex mds-event-grouping-type-resource">' +
                '<div class="mds-event-grouping-type-badge" style="background-color: ' +
                resource.color +
                '"></div>' +
                '<div class="mds-event-grouping-type-name">' +
                resource.name +
                '</div>' +
                '</div>'
              );
            }
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end mds-event-grouping-header-controls">' +
              '<label>' +
              '<input mbsc-checkbox type="checkbox" id="group-by-client-quarter" data-theme="material" data-input-style="box" data-label="Group by Client/Quarter" />' +
              '</label>' +
              '<label>' +
              '<input mbsc-input id="event-grouping-input" class="mds-event-grouping-select" data-dropdown="true" data-input-style="box" />' +
              '</label>' +
              '<select id="group-by-select">' +
              '<option value="assignee" selected>View by Assignee</option>' +
              '<option value="type">View by Type</option>' +
              '</select>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onEventUpdate: function (args) {
            var updatedEvent = args.event;
            var oldEvent = args.oldEvent;

            if (groupByClientQuarter) {
              // Grouped view: shift all original events by the same delta
              var startDelta = new Date(updatedEvent.start).getTime() - new Date(oldEvent.start).getTime();
              if (startDelta === 0) return;

              var movedGroupedEvent = groupedEvents.find(function (ge) {
                return ge.id === oldEvent.id;
              });

              if (movedGroupedEvent) {
                var clientGroupName = movedGroupedEvent.clientGroup;
                var resourceId = movedGroupedEvent.resource;
                var wasCollapsed = movedGroupedEvent.collapsed;

                var eventsToUpdate = movedGroupedEvent.originalEvents.map(function (originalEvent) {
                  return {
                    id: originalEvent.id,
                    title: originalEvent.title,
                    resource: originalEvent.resource,
                    type: originalEvent.type,
                    clientGroup: originalEvent.clientGroup,
                    start: new Date(new Date(originalEvent.start).getTime() + startDelta),
                    end: new Date(new Date(originalEvent.end).getTime() + startDelta),
                  };
                });

                // Sync into rawEvents
                var updatedIds = {};
                eventsToUpdate.forEach(function (e) {
                  updatedIds[e.id] = e;
                });
                rawEvents = rawEvents.map(function (e) {
                  return updatedIds[e.id] ? updatedIds[e.id] : e;
                });

                // Rebuild grouped view from updated rawEvents
                updateView();

                // Restore collapsed state
                var newYear = new Date(eventsToUpdate[0].start).getFullYear();
                var newPeriod = Math.floor(new Date(eventsToUpdate[0].start).getMonth() / 3);

                var newGroupedEvent = groupedEvents.find(function (ge) {
                  return ge.resource === resourceId && ge.clientGroup === clientGroupName && ge.year === newYear && ge.period === newPeriod;
                });

                if (newGroupedEvent) {
                  newGroupedEvent.collapsed = wasCollapsed;
                  calendar.setEvents(groupedEvents);
                }

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: eventsToUpdate.length + ' event(s) for ' + clientGroupName + ' have been moved.',
                });
              }
            } else {
              // Sync into rawEvents
              rawEvents = rawEvents.map(function (e) {
                return e.id === updatedEvent.id ? Object.assign({}, e, { start: updatedEvent.start, end: updatedEvent.end }) : e;
              });
            }
          },
        })
        .mobiscroll('getInst');

      $('#group-by-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('event-grouping-input'),
          touchUi: false,
          onChange: function (args) {
            groupBy = args.value;
            updateView();
          },
        })
        .mobiscroll('getInst');

      // Checkbox for client/quarter grouping
      $('#group-by-client-quarter').on('change', function () {
        groupByClientQuarter = this.checked;
        updateView();
      });

      // Expand/collapse icon click handler
      $(document).on('click', '.mds-event-grouping-icon', function (event) {
        event.stopPropagation();

        var $task = $(this).closest('.mds-event-grouping-task');
        var eventId = $(this).closest('.mbsc-schedule-event').attr('data-id');
        var groupedEvent = groupedEvents.find(function (e) {
          return e.id === eventId;
        });

        if (groupedEvent) {
          // Toggle collapsed state in data
          groupedEvent.collapsed = !groupedEvent.collapsed;

          // Toggle CSS class for animation
          $task.toggleClass('expanded', !groupedEvent.collapsed);

          // Refresh calendar after animation completes
          setTimeout(function () {
            calendar.refresh();
          }, 200);
        }
      });

      updateView();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-grouping" class="mds-event-grouping-calendar"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Calendar base styles */
.mds-event-grouping-calendar .mbsc-timeline-row {
  height: 140px;
}
.mds-event-grouping-calendar .mbsc-timeline-resource-col {
  width: 240px;
}
.mds-event-grouping-calendar .mbsc-ios.mbsc-textfield-wrapper-box {
  margin: 10px 20px;
}
.mds-event-grouping-calendar .mbsc-timeline-resource-title {
  text-transform: capitalize;
}
/* Resource rendering - Employees */
.mds-event-grouping-avatar {
  width: 40px;
  height: 40px;
}
.mds-event-grouping-cont {
  padding: 0 7px;
}
.mds-event-grouping-name {
  font-size: 14px;
  line-height: 24px;
}
.mds-event-grouping-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
/* Resource rendering - Types */
.mds-event-grouping-type-resource {
  align-items: center;
  padding: 8px 0;
}
.mds-event-grouping-type-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 10px;
}
.mds-event-grouping-type-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
/* Grouped event - collapsed state */
.mds-event-grouping-task-client {
  background-color: #f8f9fa;
  border-left: 4px solid;
  border-radius: 0 8px 8px 0;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.08);
  flex-direction: column;
  overflow: hidden;
}
/* Grouped event header content */
.mds-event-grouping-content {
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
}
/* Client group title */
.mds-event-grouping-title-text {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  line-height: 20px;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Right side container (meta + icon) */
.mds-event-grouping-right {
  align-items: center;
  width: 130px;
}
/* Meta information (dates + counts) */
.mds-event-grouping-meta {
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  margin-right: 12px;
}
.mds-event-grouping-date-range {
  color: #797979;
  font-size: 11px;
  line-height: 14px;
  white-space: nowrap;
  margin-bottom: 2px;
}
.mds-event-grouping-count {
  font-size: 11px;
  line-height: 14px;
  white-space: nowrap;
}
/* Expand/collapse icon */
.mds-event-grouping-icon {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease; /* Reduced from 0.3s to 0.2s */
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  transform: rotate(0deg);
}
/* Icon rotation when expanded */
.mds-event-grouping-task.expanded .mds-event-grouping-icon {
  transform: rotate(180deg);
}
/* Grid wrapper for smooth animation */
.mds-event-grouping-events {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease; /* Reduced from 0.25s to 0.2s */
}
.mds-event-grouping-events-inner {
  overflow: hidden;
  padding: 0 14px;
  transition: padding 0.2s ease; /* Reduced from 0.25s to 0.2s */
}
.mds-event-grouping-task.expanded .mds-event-grouping-events {
  grid-template-rows: 1fr;
}
.mds-event-grouping-task.expanded .mds-event-grouping-events-inner {
  padding: 0 14px 10px 14px;
}
/* Individual event in expanded list */
.mds-event-grouping-original-event {
  background: #fff;
  border-radius: 6px;
  margin-bottom: 6px;
  padding: 8px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.mds-event-grouping-original-event:last-child {
  margin-bottom: 0;
}
/* Event content layout */
.mds-event-grouping-event-content {
  justify-content: space-between;
  align-items: center;
}
/* Event title */
.mds-event-grouping-event-title {
  font-weight: 600;
  color: #1e293b;
  font-size: 13px;
  line-height: 18px;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Right side (date + detail) */
.mds-event-grouping-event-right {
  flex-direction: column;
  align-items: flex-end;
  min-width: 80px;
}
.mds-event-grouping-event-date {
  font-size: 11px;
  color: #94a3b8;
  white-space: nowrap;
  line-height: 14px;
  text-align: right;
  margin-bottom: 2px;
}
/* Detail container (avatar/dot + text) */
.mds-event-grouping-event-detail {
  align-items: center;
  justify-content: flex-end;
}
.mds-event-grouping-event-info {
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  white-space: nowrap;
  line-height: 14px;
  text-align: right;
  text-transform: capitalize;
}
/* Avatar for assignee in type view */
.mds-event-grouping-event-avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 6px;
}
/* Colored dot for type in assignee view */
.mds-event-grouping-type-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}
/* Simple event styling (no grouping) */
.mds-event-simple {
  padding: 10px 12px;
  border-radius: 6px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: #2c2c2c;
}
/* Event title */
.mds-event-simple-title {
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Right side container */
.mds-event-simple-right {
  flex-direction: column;
  position: relative;
}
/* Date range */
.mds-event-simple-date {
  font-size: 11px;
  line-height: 14px;
  opacity: 0.85;
  white-space: nowrap;
  text-align: right;
  margin-bottom: 2px;
}
/* Subtitle wrapper (avatar/dot + text) */
.mds-event-simple-subtitle-wrapper {
  align-items: center;
  justify-content: flex-end;
}
/* Avatar for assignee in type view */
.mds-event-simple-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 6px;
  position: absolute;
  left: 0;
}
/* Colored dot for type in assignee view */
.mds-event-simple-type-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 6px;
}
/* Subtitle text (type or assignee name) */
.mds-event-simple-subtitle {
  font-size: 11px;
  font-weight: 700;
  text-transform: capitalize;
}
/* Header controls */
.mds-event-grouping-header-controls {
  align-items: center;
}
/* Select input */
.mds-event-grouping-select.mbsc-textfield {
  width: 210px;
}
  `,
};
