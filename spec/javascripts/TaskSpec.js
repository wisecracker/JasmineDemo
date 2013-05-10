describe("Tasks", function() {

  var data;

  describe("when creating a Task on a real rails server", function() {
    beforeEach(function() {
      data = {
        task : {
          title: "Learn Jasmine"
        }
      };
    });

    it("should give me the newly created Task as JSON", function() {
      var callback = jasmine.createSpy();

      createTask(data, callback);

      waitsFor(function() {
          return callback.callCount > 0;
      });

      runs(function() {
      var dataFromRails = callback.mostRecentCall.args[0];
        expect(dataFromRails.statusText).toNotBe("error");
        expect(dataFromRails["title"]).toBe("Learn Jasmine");
      });

    });

  });

  describe("when calling the dummy ajax method", function() {
    it("should call the correct URL", function() {
      spyOn($, "ajax");
      createTask(data);
      var lastRequest = $.ajax.mostRecentCall.args[0];
      expect(lastRequest["url"]).toEqual("http://localhost:3000/tasks");
      expect(lastRequest.data.task.title).toEqual("Learn Jasmine");
    });
  });

});