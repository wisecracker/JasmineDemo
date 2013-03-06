function handleToDoCreate(data) {
  return true;
}

function createTask() {

  var data = {
    task : {
      title: "Learn Jasmine"
    }
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/tasks",
    data: data,
    success: handleToDoCreate,
    dataType: "JSON"
  });

  return false;
}