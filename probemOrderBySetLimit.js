//setLimit

var problemGR = new GlideRecord('problem');
problemGR.orderBy('short_description');
problemGR.setLimit(5);
problemGR.query();
while(problemGR.next()){
  gs.print(problemGR.number + ' '+ problemGR.short_description);
}
