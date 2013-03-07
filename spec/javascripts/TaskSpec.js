describe("Tasks", function() {

  describe("when creating a Task", function() {

	it("should give me the newly created Task as JSON", function() {
	  var callback = jasmine.createSpy();

	  var data = {
	    task : {
	      title: "Learn Jasmine"
	    }
	  }

	  createTask(data, callback);	  

      waitsFor(function() {
        return callback.callCount > 0;
	  });

	  runs(function() {
	    expect(callback).toHaveBeenCalled();
	  });

	});

  });

});