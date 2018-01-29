TaskList = new Mongo.Collection('tasklist');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return TaskList.find();
    },
    'selectedClass': function(){
        var taskId = this._id;
        var selectedTask = Session.get('selectedTask');
        if(taskId == selectedTask){
          return "selected";
        }
    }
  });

  Template.leaderboard.events({
    'mouseover .task': function(){
        // code goes here
        //Session.set('selectedPlayer', 'session value test');
        var taskId = this._id;
        Session.set('selectedTask', taskId);
    },
    'click .close': function(){
        var selectedTask = Session.get('selectedTask');
        PlayersList.update({ _id: selectedTask }, { $set: {done:'1'}});
    }
  });
}
