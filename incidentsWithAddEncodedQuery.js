var queryString = 'active=true^category=inquiry^opened_by=6816f79cc0a8016401c5a33be04be441';

var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery('active=true^category=inquiry^opened_by=6816f79cc0a8016401c5a33be04be441');
incidentGR.query();
while(incidentGR.next()){
 gs.print(incidentGR.number);
}
