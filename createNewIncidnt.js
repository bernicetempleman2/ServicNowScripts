//create a new incident

var newIncidentGR = new GlideRecord('incident');

newIncidentGR.newRecord(); // genertes sys_id and defaults

//set shortdescription

newIncidentGR.short_description = 'This incident was created with newRecord';

//insert into db
newIncidentGR.insert();

