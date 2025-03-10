$(document).ready(function() {
    $('#addTask').click(function() {
        let taskText = $('#taskInput').val().trim();
        if (taskText !== "") {
            $('#taskList').append('<li>' + taskText + '</li>');
            $('#taskInput').val("");
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('done');
    });

    $('#clearTasks').click(function() {
        $('#taskList').empty();
    });
});
