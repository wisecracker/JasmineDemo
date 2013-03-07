function createTask(data, callback) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/tasks",
    data: data,
    success: callback,
    error: callback,
    dataType: "JSON",
  });

  return false;
}