//get a specific incident sys_id

var incidentGR = new GlideRecord('incident');
incidentGR.get('57af7aec73d423002728660c4cf6a71c');
gs.print(incidentGR.number);
