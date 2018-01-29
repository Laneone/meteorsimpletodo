TaskList = new Mongo.Collection('tasklist');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return TaskList.find();
    },
    'otherHelperFunction': function(){
      return "Some other function";
    }
  });

  Template.leaderboard.events({
    'mouseover .task': function(){
        // code goes here
        console.log('bro');
    }
  });
}
