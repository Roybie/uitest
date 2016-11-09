var $currentuser = 0;
var $names = [
    "JOOLS",
    "JOPS",
    "STOO",
    "RJ",
    "UBIK",
    "CJ",
    "CHRIS",
    "PETE",
    "TADGER",
    "HECTOR",
    "ELROY",
    "SOFTY",
    "MAC",
    "BOMBER",
    "STAN",
    "TOSH",
    "BRAINS",
    "NORM",
    "BUSTER",
    "SPIKE",
    "BROWNY",
    "MURPHY",
    "KILLER",
    "ABDUL",
    "SPOTTY",
    "GOOFY",
    "DONALD",
    "WINDY",
    "NIFTA",
    "DENZIL",
    "CEDRIC",
    "ALF",
    "MARTY",
    "CECIL",
    "WALLY",
    "PERVY",
    "JASON",
    "ROY",
    "PEEWEE",
    "ARNIE",
    "LOFTY",
    "TUBBY",
    "PORKY",
    "NORRIS",
    "BUGSY",
    "GREG",
    "GUS",
    "GINGER",
    "EDDY",
    "STEVE",
    "HUGO",
    "ZIPPY",
    "SONNY",
    "WILLY",
    "MARIO",
    "LUIGI",
    "BO",
    "JOHAN",
    "COLIN",
    "QUEENY",
    "MORGAN",
    "REG",
    "PETER",
    "BRETT",
    "MATT",
    "VIC",
    "HUT",
    "BUD",
    "BRAD",
    "ASHLEY",
    "LES",
    "REX",
    "LOUIS",
    "PEDRO",
    "MARCO",
    "LEON",
    "ALI",
    "TYSON",
    "TIGER",
    "FRANK",
    "REUBEN",
    "LEYTON",
    "JOSH",
    "JUDAS",
    "AJ",
    "LEX",
    "BUTCH",
    "BISON",
    "GARY",
    "LUTHER",
    "KERMIT",
    "BRIAN",
    "RAY",
    "FREAK",
    "LEROY",
    "LEE",
    "BANJO",
    "BEAKER",
    "BASIL",
];

$scroll = function() {
    $('.chatmessages').animate({
        scrollTop: $('.chatmessages').prop('scrollHeight')
    }, {duration: 500, queue: false});
};

$addmessage = function(message, user, me) {
    var $message = $('<div>', { class: 'chatmessage' + (me ? ' mymessage' : '')});
    var $timestamp = $('<div>', { class: 'chattimestamp' });
    $timestamp.html(new Date().toTimeString().split(' ')[0]);
    var $name = $('<div>', { class: 'chatname' });
    $name.html(user);
    $message.append($name);
    $message.append($timestamp);
    if (message) {
        var $bubble = $('<div>', {class: 'chatbubble' + (me? ' mymessage' : '')});
        $bubble.html(message.replace(/\n/g,"<br>"));
        $message.append($bubble);
    }
    $message.css('opacity', 0);
    $('.chatmessages').append($message);
    $message.animate({opacity: 1}, {duration: 500, queue: false});
    $('#inputtext').val('');

    //animate scroll
    $scroll();
};

$adduser = function() {
    var $user = $('<div>', { class: 'chatuser' });
    var $username = $('<div>', {class: 'username'});
    $username.html($names[$currentuser%$names.length]);
    $currentuser++;
    var imgname = ("00"+$currentuser).slice(-3)
    $user.append('<div class="useravatar"><img src="imgs/male/' + imgname + 'm.jpg" /></div>');
    $user.append($username);
    $('.userslist').append($user);

    $notifyroom($username.html() + ' has joined');
};

$removeuser = function(name) {
    $rem = $('.chatuser').filter(function() {return $(this).children().eq(1).html() === name}).remove();

    if ($rem.length > 0) {
        $notifyroom(name + ' has left');
    }
}

$notifyroom = function(message) {
    $addmessage(null, message);
};

$(function() {
    //allow multiline with shift-enter
    $(document).on('keyup keydown', function(e) {shifted = e.shiftKey} );

    $scroll();
    $adduser();
    $adduser();

    $('#inputtext').keypress(function(e) {
        if (e.which === 13 && !shifted) {
            //append new message
            if ($('#inputtext').val().length > 0) {
                $addmessage($('#inputtext').val(), 'Roybie', true);
            }
            e.preventDefault();
        }
    });

    $('.chatsend').click(function() {
        if ($('#inputtext').val().length > 0) {
            $addmessage($('#inputtext').val(), 'Roybie', true);
        }
        $('#inputtext').focus();
    });

});
