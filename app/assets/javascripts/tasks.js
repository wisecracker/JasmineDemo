function createTask(data, callback) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/tasks",
    data: data,
    complete: callback,
    dataType: "JSON",
    crossDomain: true
  });

  return false;
}