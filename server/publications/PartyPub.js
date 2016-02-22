Meteor.publish('Party', function () {
  return Party.find();
});
