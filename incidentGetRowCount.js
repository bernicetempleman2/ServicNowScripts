//getRowCount()

var incidentGR = new GlideRecord('incident');

incidentGR.query();

gs.print(incidentGR.getRowCount() );
