import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var myEvents = [
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Excavate Foundation',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Install Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Ground Breaking',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        }, //<hide-comment>
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,19)',
          title: 'Excavate Foundation',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: 'Install Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,22)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,16)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,16)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d-2,6)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d-2,6)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Ground Breaking',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d-2,9)',
          end: 'dyndatetime(y,m,d-2,21)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,16)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d-2,6)',
          end: 'dyndatetime(y,m,d-2,19)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,20)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,19)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d-2,6)',
          end: 'dyndatetime(y,m,d-2,16)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,17)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d-2,12)',
          end: 'dyndatetime(y,m,d-2,22)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,21)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d-2,5)',
          end: 'dyndatetime(y,m,d-2,20)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
        {
          start: 'dyndatetime(y,m,d-1,5)',
          end: 'dyndatetime(y,m,d-1,19)',
          title: 'Foundation Work',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: 'Steel Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d-1,10)',
          end: 'dyndatetime(y,m,d-1,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d-1,14)',
          end: 'dyndatetime(y,m,d-1,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d-1,5)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d-1,9)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,19)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,20)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d-1,5)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d-1,5)',
          end: 'dyndatetime(y,m,d-1,16)',
          title: 'Ground Work',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,19)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d-1,9)',
          end: 'dyndatetime(y,m,d-1,14)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d-1,5)',
          end: 'dyndatetime(y,m,d-1,16)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d-1,6)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,16)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,22)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,17)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d-1,4)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,20)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,19)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d-1,6)',
          end: 'dyndatetime(y,m,d-1,22)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
        {
          start: 'dyndatetime(y,m,d+1,5)',
          end: 'dyndatetime(y,m,d+1,19)',
          title: 'Foundation Work',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: 'Steel Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d+1,10)',
          end: 'dyndatetime(y,m,d+1,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d+1,14)',
          end: 'dyndatetime(y,m,d+1,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d+1,5)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d+1,9)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,19)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,20)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d+1,5)',
          end: 'dyndatetime(y,m,d+1,13)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d+1,5)',
          end: 'dyndatetime(y,m,d+1,16)',
          title: 'Ground Work',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,19)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d+1,9)',
          end: 'dyndatetime(y,m,d+1,14)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d+1,5)',
          end: 'dyndatetime(y,m,d+1,16)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d+1,6)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,16)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,22)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,17)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d+1,4)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,20)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,19)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d+1,6)',
          end: 'dyndatetime(y,m,d+1,22)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,19)',
          title: 'Excavate Foundation',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: 'Install Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,22)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,16)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,16)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d+2,6)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d+2,6)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Ground Breaking',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d+2,9)',
          end: 'dyndatetime(y,m,d+2,21)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,16)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d+2,6)',
          end: 'dyndatetime(y,m,d+2,19)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,20)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,19)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d+2,6)',
          end: 'dyndatetime(y,m,d+2,16)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,17)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d+2,12)',
          end: 'dyndatetime(y,m,d+2,22)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,21)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d+2,5)',
          end: 'dyndatetime(y,m,d+2,20)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
        {
          start: 'dyndatetime(y,m,d+3,5)',
          end: 'dyndatetime(y,m,d+3,19)',
          title: 'Foundation Work',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Steel Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d+3,10)',
          end: 'dyndatetime(y,m,d+3,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d+3,14)',
          end: 'dyndatetime(y,m,d+3,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d+3,5)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d+3,9)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,19)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,20)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d+3,5)',
          end: 'dyndatetime(y,m,d+3,13)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d+3,5)',
          end: 'dyndatetime(y,m,d+3,16)',
          title: 'Ground Work',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,19)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d+3,9)',
          end: 'dyndatetime(y,m,d+3,14)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d+3,5)',
          end: 'dyndatetime(y,m,d+3,16)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d+3,6)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,16)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,22)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,17)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d+3,4)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,20)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,19)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d+3,6)',
          end: 'dyndatetime(y,m,d+3,22)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,19)',
          title: 'Excavate Foundation',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,18)',
          title: 'Install Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d+4,7)',
          end: 'dyndatetime(y,m,d+4,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d+4,7)',
          end: 'dyndatetime(y,m,d+4,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,22)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d+4,7)',
          end: 'dyndatetime(y,m,d+4,16)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d+4,7)',
          end: 'dyndatetime(y,m,d+4,16)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d+4,6)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Exterior Work',
          resource: 'bulldozer - PA3233',
        },
        {
          start: 'dyndatetime(y,m,d+4,6)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Ground Breaking',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d+4,9)',
          end: 'dyndatetime(y,m,d+4,21)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d+4,7)',
          end: 'dyndatetime(y,m,d+4,16)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d+4,6)',
          end: 'dyndatetime(y,m,d+4,19)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,20)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,18)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,19)',
          title: 'Demolition',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d+4,6)',
          end: 'dyndatetime(y,m,d+4,16)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,17)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,18)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },
        {
          start: 'dyndatetime(y,m,d+4,12)',
          end: 'dyndatetime(y,m,d+4,22)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,19)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d+4,7)',
          end: 'dyndatetime(y,m,d+4,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,21)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d+4,5)',
          end: 'dyndatetime(y,m,d+4,20)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
        //</hide-comment>
      ];

      var myResources = [
        {
          id: 'site1',
          name: '123 Main St, Downtown City',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX1234',
              name: 'Bulldozer - TX1234',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'concrete mixer - CA5678',
              name: 'Concrete Mixer - CA5678',
              color: '#1dab2f',
              status: 'in maintenance',
            },
            {
              id: 'crane - NY9101',
              name: 'Crane - NY9101',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'excavator - FL1213',
              name: 'Excavator - FL1213',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'drill - OH1415',
              name: 'Drill - OH1415',
              color: '#1dab2f',
              status: 'in maintenance',
            },
            {
              id: 'crane - IL1617',
              name: 'Crane - IL1617',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA1819',
              name: 'Bulldozer - PA1819',
              color: '#1dab2f',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site2',
          name: '456 Elm St, Uptown City',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX2021',
              name: 'Bulldozer - TX2021',
              color: '#4981d6',
              status: 'in maintenance',
            },
            {
              id: 'concrete mixer - CA2223',
              name: 'Concrete Mixer - CA2223',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'crane - NY2425',
              name: 'Crane - NY2425',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'excavator - FL2627',
              name: 'Excavator - FL2627',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'drill - OH2829',
              name: 'Drill - OH2829',
              color: '#4981d6',
              status: 'in maintenance',
            },
            {
              id: 'crane - IL3031',
              name: 'Crane - IL3031',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA3233',
              name: 'Bulldozer - PA3233',
              color: '#4981d6',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site3',
          name: '789 Maple Ave, Suburban Area',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX3435',
              name: 'Bulldozer - TX3435',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'concrete mixer - CA3637',
              name: 'Concrete Mixer - CA3637',
              color: '#f7961e',
              status: 'in maintenance',
            },
            {
              id: 'crane - NY3839',
              name: 'Crane - NY3839',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'excavator - FL4041',
              name: 'Excavator - FL4041',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'crane - IL4445',
              name: 'Crane - IL4445',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA4647',
              name: 'Bulldozer - PA4647',
              color: '#f7961e',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site4',
          name: '101 Industrial Blvd, Industrial City',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX4849',
              name: 'Bulldozer - TX4849',
              color: '#e25dd2',
              status: 'in maintenance',
            },
            {
              id: 'concrete mixer - CA5051',
              name: 'Concrete Mixer - CA5051',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'crane - NY5253',
              name: 'Crane - NY5253',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'excavator - FL5455',
              name: 'Excavator - FL5455',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'drill - OH5657',
              name: 'Drill - OH5657',
              color: '#e25dd2',
              status: 'in maintenance',
            },
            {
              id: 'crane - IL5859',
              name: 'Crane - IL5859',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA6061',
              name: 'Bulldozer - PA6061',
              color: '#e25dd2',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site5',
          name: '202 River Rd, Riverside City',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX6263',
              name: 'Bulldozer - TX6263',
              color: '#34c8e0',
              status: 'on site',
            },
            {
              id: 'concrete mixer - CA6465',
              name: 'Concrete Mixer - CA6465',
              color: '#34c8e0',
              status: 'in maintenance',
            },
            {
              id: 'crane - NY6667',
              name: 'Crane - NY6667',
              color: '#34c8e0',
              status: 'on site',
            },
            {
              id: 'excavator - FL6869',
              name: 'Excavator - FL6869',
              color: '#34c8e0',
              status: 'on site',
            },
            {
              id: 'drill - OH7071',
              name: 'Drill - OH7071',
              color: '#34c8e0',
              status: 'on site',
            },
            {
              id: 'crane - IL7273',
              name: 'Crane - IL7273',
              color: '#34c8e0',
              status: 'in maintenance',
            },
            {
              id: 'bulldozer - PA7475',
              name: 'Bulldozer - PA7475',
              color: '#34c8e0',
              status: 'on site',
            },
          ],
        },
      ];

      var $calendarElm = $('#demo-filtering-calendar');
      var $popupElm = $('#demo-filtering-popup');
      var $resourceList = $('#demo-resource-list');

      var filters = {};
      var filteredResources = myResources;
      var searchTimeout;
      var searchQuery;

      function filterResources() {
        filteredResources = myResources
          .map(function (site) {
            return {
              id: site.id,
              name: site.name,
              color: site.color,
              eventCreation: site.eventCreation,
              children: site.children.filter(function (resource) {
                return filters[resource.status] && (!searchQuery || resource.name.toLowerCase().includes(searchQuery.toLowerCase()));
              }),
            };
          })
          .filter(function (site) {
            return site.children.length > 0 && filters[site.id];
          });

        calendar.setOptions({ resources: filteredResources });
      }

      var popup = $popupElm
        .mobiscroll()
        .popup({
          buttons: [
            'cancel',
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                $('.mds-resource-filtering-checkbox').each(function () {
                  filters[this.value] = this.checked;
                });
                filterResources();
                popup.close();
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Filters applied',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      var calendar = $calendarElm
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-resource-filtering-calendar',
          clickToCreate: true,
          dragToCreate: true,
          dragToResize: true,
          dragToMove: true,
          view: {
            timeline: {
              type: 'week',
              startTime: '05:00',
              endTime: '22:00',
              startDay: 1,
              endDay: 5,
              timeCellStep: 60,
              timeLabelStep: 60,
              weekNumbers: true,
            },
          },
          data: myEvents,
          resources: myResources,
          renderResource: function (resource) {
            return (
              '<div>' +
              '<div class="mds-resource-filtering-name">' +
              resource.name +
              '</div>' +
              (resource.status
                ? '<div class="mds-resource-filtering-status">' +
                  '<span class="mds-resource-filtering-status-dot" style="background-color:' +
                  (resource.status === 'on site' ? 'green' : 'orange') +
                  ';"></span>' +
                  resource.status +
                  '</div>'
                : '') +
              '</div>'
            );
          },
          renderResourceEmpty: function () {
            return (
              '<div class="mds-resource-filtering-empty mbsc-flex mbsc-align-items-center">' +
              '<div  class="mbsc-flex-1-1">' +
              '<img src="https://img.mobiscroll.com/demos/filter-no-result.png" alt="Empty list" style="width:100px;" />' +
              '<p class="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">No resources match your search.</p>' +
              '<p class="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Adjust your filters or try a different keyword.</p>' +
              '<button mbsc-button id="demo-reset-filters" data-variant="outline">Reset Filters</button>' +
              '</div>' +
              '</div>'
            );
          },
          renderResourceHeader: function () {
            return (
              '<div class="mbsc-flex mbsc-align-items-center mbsc-font mds-resource-filtering-search">' +
              '<label class="mbsc-flex-1-1">' +
              '<input type="text" mbsc-input id="demo-search-input" autocomplete="off" data-input-style="outline" data-start-icon="material-search" placeholder="Search..." />' +
              '</label>' +
              '<button mbsc-button id="demo-filter-button" data-start-icon="material-filter-list" data-variant="outline" class="mbsc-flex-none">Filter</button>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $calendarElm.on('input', '#demo-search-input', function (event) {
        clearTimeout(searchTimeout);
        searchQuery = event.target.value.toLowerCase();
        searchTimeout = setTimeout(filterResources, 300);
      });

      $calendarElm.on('click', '#demo-filter-button', function () {
        // Create resource checkbox list
        var checkboxes = '';
        myResources.forEach(function (site) {
          checkboxes +=
            '<label>' +
            '<input type="checkbox" mbsc-checkbox class="mds-resource-filtering-checkbox" value="' +
            site.id +
            '" checked /> ' +
            site.name +
            '</label>';
        });

        $resourceList.html(checkboxes);
        mobiscroll.enhance($resourceList[0]);

        // Set checkbox checked states
        $('.mds-resource-filtering-checkbox').each(function () {
          var checkbox = $(this).mobiscroll('getInst');
          checkbox.checked = filters[this.value];
        });

        popup.setOptions({ anchor: this });
        popup.open();
      });

      $calendarElm.on('click', '#demo-reset-filters', function () {
        searchQuery = '';

        $('#demo-search-input').val('');
        $('.mds-resource-filtering-checkbox').each(function () {
          var checkbox = $(this).mobiscroll('getInst');
          checkbox.checked = true;
          filters[this.value] = true;
        });

        filterResources();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Filters cleared',
        });
      });

      // Set initial filters
      filters['on site'] = true;
      filters['in maintenance'] = true;
      myResources.forEach(function (site) {
        filters[site.id] = true;
        site.children.forEach(function (resource) {
          filters[resource.id] = true;
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-filtering-calendar"></div>
<div style="display:none">
  <div id="demo-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Operational Status</div>
      <label>
        <input
          type="checkbox"
          mbsc-checkbox
          data-label="In maintenance"
          class="mds-resource-filtering-checkbox"
          value="in maintenance"
          checked
        />
      </label>
      <label>
        <input
          type="checkbox"
          mbsc-checkbox
          data-label="On site"
          class="mds-resource-filtering-checkbox"
          value="on site"
          checked
        />
      </label>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Job sites</div>
      <div id="demo-resource-list"></div>
    </div>
  </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-resource-filtering-calendar .mbsc-timeline-resource-header {
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.mds-resource-filtering-calendar .mbsc-timeline-resource-col {
  width: 350px;
}

.mds-resource-filtering-calendar .mbsc-timeline-resource-title {
  height: 100%;
  box-sizing: border-box;
}

.mds-resource-filtering-calendar .mbsc-timeline-parent {
  height: 34px;
}

.mds-resource-filtering-calendar .mbsc-timeline-row-gutter {
  height: 6px;
}

.mds-resource-filtering-search {
  height: 100%;
}

.mds-resource-filtering-search .mbsc-textfield-wrapper {
  margin: 0;
}

.mds-resource-filtering-search .mbsc-textfield-wrapper.mbsc-ltr {
  margin-right: 8px;
}

.mds-resource-filtering-search .mbsc-textfield-wrapper.mbsc-rtl {
  margin-left: 8px;
}

.mds-resource-filtering-search .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 2px;
}

.mds-resource-filtering-search .mbsc-textfield {
  height: 36px;
  padding: 0 8px 0 38px;
}

.mds-resource-filtering-search .mbsc-textfield-icon {
  top: 50%;
  left: 8px;
  font-size: 20px;
  height: 24px;
  line-height: 24px;
  margin-top: -12px;
}

.mds-resource-filtering-search .mbsc-button {
  margin: 0;
  height: 36px;
  font-size: 14px;
}

.mds-resource-filtering-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 7px;
}

.mds-resource-filtering-status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.mds-resource-filtering-status {
  font-size: 13px;
  font-weight: normal;
}

.mds-resource-filtering-empty {
  height: 100%;
  text-align: center;
}
`,
};
