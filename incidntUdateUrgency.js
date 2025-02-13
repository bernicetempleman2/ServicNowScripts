//update INC0010002 urgency

var incidentGR = new GlideRecord('incident');

incidentGR.get('number','INC0010002');
incidentGR.urgency = 2;
incidentGR.update();
