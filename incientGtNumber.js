//get a unique number

var incidentGR = new GlideRecord('incident');

incidentGR.get('number', 'INC0000060'  );

gs.print(incidentGR.number );

