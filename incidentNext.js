//hasNext() true if there is a next

var incidentGR = new GlideRecord('incident');

incidentGR.query();

gs.print(incidentGR.hasNext() );

if (incidentGR.next())

  gs.print(incidentGR.number);
