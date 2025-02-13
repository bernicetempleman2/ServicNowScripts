//hasNext() true if there is a next


var incidentGR = new GlideRecord('incident');

incidentGR.query();

gs.print(incidentGR.hasNext() );

gs.print(incidentGR.next());//also returns boolean and iterates to next
