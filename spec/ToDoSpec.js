describe("ToDo", function() {

  describe("when creating a Task", function() {

	it("should give me the newly created Task as JSON", function() {
      expect(handleToDoCreate()).toBeTruthy();
    });

  });

});