$(document).ready(function () {
    $('#sub').click(function() {
        $('#formula').attr('action', 'mailto:baylen.jones0224@gmail.com?subject=' + $('#name').val() + '&body=' + $('#email').val() + $('#phone').val() + $('#msg').val());
        $('#formula').submit();
    });
});