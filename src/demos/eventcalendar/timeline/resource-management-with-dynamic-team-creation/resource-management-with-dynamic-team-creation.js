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
      var $availableInstallersList = $('#demo-ext-res-drop-list');

      var installers = [
        {
          id: 'it-1',
          name: 'Installer team 1',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 1,
              name: 'Emily Carter',
              color: '#007acc',
              title: 'Electrician',
            },
            {
              id: 2,
              name: 'Michael Lawson',
              color: '#008000',
              title: 'Plumber',
            },
          ],
        },
        //<hide-comment>
        {
          id: 'it-2',
          name: 'Installer team 2',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 3,
              name: 'James Brown',
              color: '#FF5733',
              title: 'Carpenter',
            },
          ],
        },
        {
          id: 'it-3',
          name: 'Installer team 3',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 4,
              name: 'Daniel Wilson',
              color: '#900C3F',
              title: 'Welder',
            },
          ],
        },
        {
          id: 'it-4',
          name: 'Installer team 4',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 5,
              name: 'Benjamin Harris',
              color: '#1ABC9C',
              title: 'Heavy Equipment Operator',
            },
          ],
        },
        {
          id: 'it-5',
          name: 'Installer team 5',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 6,
              name: 'William Anderson',
              color: '#F39C12',
              title: 'Concrete Finisher',
            },
            {
              id: 7,
              name: 'Emma Thompson',
              color: '#D35400',
              title: 'Steelworker',
            },
          ],
        },
        {
          id: 'it-6',
          name: 'Installer team 6',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 8,
              name: 'Alexander Roberts',
              color: '#8E44AD',
              title: 'Painter',
            },
          ],
        },
        //</hide-comment>
      ];

      var availableInstallers = [
        {
          id: 9,
          name: 'Adam Miller',
          color: '#C70039',
          title: 'Mason',
        },
        {
          id: 10,
          name: 'Isabella Martinez',
          color: '#2ECC71',
          title: 'Surveyor',
        },
        {
          id: 11,
          name: 'Mark White',
          color: '#34495E',
          title: 'Glazier',
        },
        //<hide-comment>
        {
          id: 12,
          name: 'Liam Foster',
          color: '#1E90FF',
          title: 'Concrete Finisher',
        },
        {
          id: 13,
          name: 'Sophia Adams',
          color: '#FF4500',
          title: 'Steelworker',
        },
        {
          id: 14,
          name: 'Ethan Murphy',
          color: '#228B22',
          title: 'Heavy Equipment Operator',
        },
        {
          id: 15,
          name: 'Ava Mitchell',
          color: '#FFD700',
          title: 'Surveyor',
        },
        {
          id: 16,
          name: 'Noah Carter',
          color: '#8B4513',
          title: 'Painter',
        },
        {
          id: 17,
          name: 'Emma Scott',
          color: '#800080',
          title: 'Roofer',
        },
        {
          id: 18,
          name: 'William Bennett',
          color: '#DC143C',
          title: 'Plasterer',
        },
        {
          id: 19,
          name: 'Olivia Parker',
          color: '#4682B4',
          title: 'Demolition Specialist',
        },
        //</hide-comment>
      ];

      var tasks = [
        {
          id: 1,
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Electrical wiring installation',
          resource: 1,
        },
        {
          id: 2,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Power panel connection',
          resource: 1,
        },
        {
          id: 3,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Water pipe fitting',
          resource: 2,
        },
        //<hide-comment>
        {
          id: 4,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Leak inspection and sealing',
          resource: 2,
        },
        {
          id: 5,
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Wood framing for new walls',
          resource: 3,
        },
        {
          id: 6,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Door and window frame assembly',
          resource: 3,
        },
        {
          id: 7,
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Bricklaying for foundation',
          resource: 9,
        },
        {
          id: 8,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Applying cement mortar',
          resource: 9,
        },
        {
          id: 9,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Welding steel beams',
          resource: 4,
        },
        {
          id: 10,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Structural reinforcement welding',
          resource: 4,
        },
        {
          id: 11,
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Operating bulldozer for site leveling',
          resource: 5,
        },
        {
          id: 12,
          start: 'dyndatetime(y,m,d,14,20)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Material lifting with crane',
          resource: 5,
        },
        {
          id: 13,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Land survey for new roads',
          resource: 10,
        },
        {
          id: 14,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Boundary marking for structures',
          resource: 10,
        },
        {
          id: 15,
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Concrete floor polishing',
          resource: 6,
        },
        {
          id: 16,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Applying protective coatings on concrete',
          resource: 6,
        },
        {
          id: 17,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Steel frame installation',
          resource: 7,
        },
        {
          id: 18,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Bolting and securing steel structures',
          resource: 7,
        },
        {
          id: 19,
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Interior painting preparation',
          resource: 8,
        },
        {
          id: 20,
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,18,10)',
          title: 'Applying finishing coats',
          resource: 8,
        },
        {
          id: 21,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Glass panel measurement and cutting',
          resource: 11,
        },
        {
          id: 22,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Installing large glass windows',
          resource: 11,
        },
        {
          id: 23,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Concrete foundation pouring',
          resource: 12,
        },
        {
          id: 24,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Curing and leveling concrete',
          resource: 12,
        },
        {
          id: 25,
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Structural steel beam welding',
          resource: 13,
        },
        {
          id: 26,
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Reinforcement bar assembly',
          resource: 13,
        },
        {
          id: 27,
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Excavation for foundation',
          resource: 14,
        },
        {
          id: 28,
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,17,30)',
          title: 'Operating crane for material transport',
          resource: 14,
        },
        {
          id: 29,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Land survey for new section',
          resource: 15,
        },
        {
          id: 30,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Marking layout for construction work',
          resource: 15,
        },
        {
          id: 31,
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Exterior wall painting',
          resource: 16,
        },
        {
          id: 32,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Applying protective coatings',
          resource: 16,
        },
        {
          id: 33,
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Roof tiling installation',
          resource: 17,
        },
        {
          id: 34,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17,45)',
          title: 'Leak-proofing and insulation work',
          resource: 17,
        },
        {
          id: 35,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Plastering interior walls',
          resource: 18,
        },
        {
          id: 36,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Ceiling plaster and finishing',
          resource: 18,
        },
        {
          id: 37,
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Controlled demolition of old structure',
          resource: 19,
        },
        {
          id: 38,
          start: 'dyndatetime(y,m,d,15,15)',
          end: 'dyndatetime(y,m,d,17,45)',
          title: 'Site cleanup and debris removal',
          resource: 19,
        },
        //</hide-comment>
      ];

      function generateExternalResourceItem(installer) {
        var item =
          '<div id="demo-ext-res-' +
          installer.id +
          '" class="mds-ext-res-item mbsc-font">' +
          '<div class="mbsc-flex">' +
          '<div class="mds-ext-res-avatar" style="background: ' +
          installer.color +
          '">' +
          installer.name[0] +
          '</div>' +
          '<div class="mds-ext-res-cont">' +
          '<div class="mds-ext-res-name">' +
          installer.name +
          '</div>' +
          '<div class="mds-ext-res-title">' +
          installer.title +
          '</div>' +
          '</div>' +
          '</div>';

        $availableInstallersList.append(item);

        return $('#demo-ext-res-' + installer.id)
          .mobiscroll()
          .draggable({
            context: '#demo-ext-res-page',
            dragData: installer,
            type: 'resource',
          });
      }

      var timelineInst = $('#demo-ext-res-drop-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          data: tasks,
          dragBetweenResources: false,
          externalResourceDrop: true,
          externalResourceDrag: true,
          resources: installers,
          view: {
            timeline: { type: 'day', resourceReorder: true, startTime: '07:00', endTime: '18:00', listing: true },
          },
          renderResourceHeader: function () {
            return (
              '<div class="mbsc-flex mbsc-align-items-center"><div class="mds-ext-res-header mbsc-flex-1-1">Set up teams</div>' +
              '<button mbsc-button id="demo-ext-res-add" data-variant="outline" class="mds-ext-res-add">Add team</button></div>'
            );
          },
          renderResource: function (resource) {
            return resource.isParent || resource.placeholder
              ? '<div class="mds-ext-res-name' + (resource.placeholder ? ' mds-ext-res-name-ph' : '') + '">' + resource.name + '</div>'
              : '<div class="mbsc-flex">' +
                  '<div class="mds-ext-res-avatar" style="background: ' +
                  resource.color +
                  '">' +
                  resource.name[0] +
                  '</div>' +
                  '<div class="mds-ext-res-cont">' +
                  '<div class="mds-ext-res-name ' +
                  '">' +
                  resource.name +
                  '</div>' +
                  '<div class="mds-ext-res-title">' +
                  resource.title +
                  '</div>' +
                  '</div>' +
                  '</div>';
          },
          onResourceCreate: function (args) {
            var newResourceId = args.resource.id;
            availableInstallers = availableInstallers.filter(function (installer) {
              return installer.id !== newResourceId;
            });
            $('#demo-ext-res-' + newResourceId).remove();
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: args.resource.name + ' added to ' + args.parent.name,
            });
          },
          onResourceDelete: function (args) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: args.resource.name + ' removed from ' + args.parent.name,
            });
          },
          onResourceOrderUpdate: function (args) {
            installers = args.resources;
            var parent = args.parent;
            var oldParent = args.oldParent;

            if (parent && oldParent) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: args.resource.name + ' moved to ' + args.parent.name,
              });
            }

            if (parent && parent.children) {
              // Remove placeholder resource
              parent.children = parent.children.filter(function (child) {
                return !child.placeholder;
              });
            }

            if (oldParent && !oldParent.children.length) {
              // Add placeholder resource
              oldParent.children.push({
                id: 'ph-' + oldParent.id,
                name: 'Drag Technicians here',
                placeholder: true,
                reorder: false,
              });
            }
          },
        })
        .mobiscroll('getInst');

      $('#demo-ext-res-drop-cont')
        .mobiscroll()
        .dropcontainer({
          onItemDrop: function (args) {
            var installer = args.data;
            if (installer && args.dataType === 'resource') {
              availableInstallers.push(installer);
              var item = generateExternalResourceItem(installer);
              item[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          },
        });

      $('#demo-ext-res-drop-calendar').on('click', '#demo-ext-res-add', function () {
        var teamLength = installers.length + 1;
        var resourceId = 'it-' + teamLength;
        installers.push({
          id: resourceId,
          eventCreation: false,
          reorder: false,
          name: 'Installer team ' + teamLength,
          children: [
            {
              id: 'ph-' + resourceId,
              name: 'Drag Technicians here',
              placeholder: true,
              reorder: false,
            },
          ],
        });

        timelineInst.setOptions({ resources: installers.slice() });

        setTimeout(function () {
          timelineInst.navigateToEvent({
            start: new Date(),
            resource: resourceId,
          });
        });
      });

      availableInstallers.forEach(generateExternalResourceItem);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-ext-res-page" class="mds-ext-res-drop" mbsc-page>
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div id="demo-ext-res-drop-cont" class="mbsc-col-sm-3 mbsc-flex-col mds-ext-res-drop-cont">
        <div class="mds-ext-res-header">Available technicians</div>
        <div id="demo-ext-res-drop-list" class="mds-ext-res-list"></div>
      </div>
      <div class="mbsc-col-sm-9 mds-ext-res-drop-calendar">
        <div id="demo-ext-res-drop-calendar"></div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-ext-res-drop-calendar {
  border-left: 1px solid #ccc;
}

.mds-ext-res-drop-calendar .mbsc-timeline-row { 
  height: 50px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-row-gutter { 
  height: 8px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-resource-col {
  width: 250px;
}

.mds-ext-res-drop-calendar .mbsc-timeline-parent { 
  height: 32px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-resource {
  align-items: center;
  align-content: center;
}

.mds-ext-res-drop-calendar .mds-ext-res-add {
  margin: 0;
}

.mds-ext-res-header {
  font-weight: 600;
  font-size: .875em;
  line-height: 38px;
  text-transform: uppercase;
  opacity: 0.6;
}

.mds-ext-res-name-ph {
  font-style: italic;
  opacity: 0.4;
}

.mds-ext-res-drop-cont .mds-ext-res-header {
  padding: 12px 16px;
  line-height: 1.5em;
}

.mds-ext-res-list {
  overflow: auto;
}

.mds-ext-res-item {
  background: rgba(128, 128, 128, .6);
  padding: 10px;
  margin: 16px;
  border-radius: 8px;
}

.mds-ext-res-item:first-child {
  margin-top: 0
}

.mds-ext-res-cont {
  padding: 0 7px;
}

.mds-ext-res-name {
  font-size: 14px;
  font-weight: 600;
}

.mds-ext-res-title {
  padding-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-ext-res-avatar {
  width: 36px;
  min-width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
}

.mds-ext-res-drop,
.mds-ext-res-drop .mbsc-grid,
.mds-ext-res-drop .mbsc-row,
.mds-ext-res-drop-cont,
.mds-ext-res-drop-calendar {
  height: 100%;
}
`,
};
