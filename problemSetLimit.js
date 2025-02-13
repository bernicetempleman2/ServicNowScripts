//setLimit

var problemGR = new GlideRecord('problem');
problemGR.setLimit(5);
problemGR.query();
while(problemGR.next()){
  gs.print(problemGR.number);
}
