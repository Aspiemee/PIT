(function() {

    var rNum = 0,
        symbLimit = 50,
        _w = window,
        _d = _w.document,
        beforetext = null,
        targetText = null,
        aftertext = null,
        messHeader = '',
        stats = '',
        mess = '',
        emailPattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

    if (document.addEventListener) {
        document.addEventListener('keydown', ReorphusCall, true);
    } else if (document.attachEvent) {
        document.attachEvent('onkeydown', ReorphusCall);
    }

    function Reorp_gen() {
        var x = Math.ceil(Math.random() * 15),
            y = Math.ceil(Math.random() * 15);

        $('#reorp_spam').parents('.text');
        $('#reorphus #antispam').text(x + ' + ' + y);

        rNum = x + y;
    };

    function Reorp_pos() {
        $('.reorphus').css({
            'top': $(_w).height()/2 - $('#reorphus').height()/2 + 'px'
        });
    }

    function Reorp_butt_close(e) {
        if (e.keyCode == 27) {
            $('#reorphus, #reorphus_message').remove();
            if (document.addEventListener) {
                document.addEventListener('keydown', ReorphusCall, true);
                document.removeEventListener('keydown', Reorp_sbmt, true);
            } else if (document.attachEvent) {
                document.attachEvent('onkeydown', ReorphusCall);
                document.detachEvent('onkeydown', Reorp_sbmt);
            }
            return false;
        }
    }

    function Reorp_mess(messHeader, stats, mess) {
        var html_after = '' +
            '<div id="reorphus_message" class="reorphus">' +
            '<div class="title">' + messHeader + '<i class="icon-close" id="reorp_mess_top_close"></i></div>' +
            '<div class="container">' +
            '<div class="quote ' + stats + '">' +
            '<p>' + mess + '</p>' +
            '</div>' +
            '<div class="bottom _clr">' +
            '<a href="#" id="reopr_after_close">Закрыть</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '';

        $('body').prepend(html_after).delay(200).show('fast');
        Reorp_pos();
    }

    function Reorp_sbmt(e) {
        if ((e.shiftKey == true) && (e.keyCode == 13)) {
            $('#reorphus_form').submit();
        }
    }

    function Reorp_validate() {
        if ($('#reorp_spam').val() == rNum && $('#reorp_comment').val()) {
            window.localStorage.setItem('reorphus_valid_user', '1');
            return true;
        } else if (window.localStorage.getItem('reorphus_valid_user') == '1' && $('#reorp_comment').val()) {
            return true;
        } else {
            return false;
        }
    }

    var Reorp_getText = function() {
        var targetText = null;
        var textString = null;

        if (_w.getSelection) {
            textString = _w.getSelection();
        } else {
            if (_d.getSelection) {
                textString = _d.getSelection();
            } else {
                textString = _d.selection;
            }
        }

        if (textString != null) {

            var pre = "",
                targetText = null,
                suf = "";

            if (textString.getRangeAt) {

                var r = textString.getRangeAt(0);
                targetText = r.toString();

                var pfx = _d.createRange();
                pfx.setStartBefore(r.startContainer.ownerDocument.body);
                pfx.setEnd(r.startContainer, r.startOffset);
                pre = pfx.toString();

                var sfx = r.cloneRange();
                sfx.setStart(r.endContainer, r.endOffset);
                sfx.setEndAfter(r.endContainer.ownerDocument.body);
                suf = sfx.toString();
            } else {

                if (textString.createRange) {

                    var r = textString.createRange();
                    targetText = r.text;

                    var pfx = textString.createRange();
                    pfx.moveStart("character", - symbLimit);
                    pfx.moveEnd("character", - targetText.length);
                    pre = pfx.text;

                    var sfx = textString.createRange();
                    sfx.moveEnd("character", symbLimit);
                    sfx.moveStart("character", targetText.length);
                    suf = sfx.text;
                } else {
                    targetText = "" + textString;
                }
            }

            var p;
            var s = (p = targetText.match(/^(\s*)/)) && p[0].length;
            var e = (p = targetText.match(/(\s*)$/)) && p[0].length;

            pre = pre + targetText.substring(0, s);
            suf = targetText.substring(targetText.length - e, targetText.length) + suf;

            beforetext = pre.substring(pre.length - symbLimit, pre.length).replace(/^\S{1,10}\s+/, "");
            text = targetText.substring(s, targetText.length - e);
            aftertext = suf.substring(0, symbLimit).replace(/\s+\S{1,10}$/, "");

        } else {
            alert('Ой, что-то пошло не так :(');
            return;
        }
    };

    function ReorphusCall(e) {
        if ((e.shiftKey == true) && (e.keyCode == 13)) {

            if ($('#reorphus').length == 0) {
                Reorp_getText();

                if (text.length > 2 && text.length < 200) {

                    if (document.addEventListener) {
                        document.removeEventListener('keydown', ReorphusCall, true);

                        document.addEventListener('keydown', Reorp_butt_close, true);
                        document.addEventListener('keydown', Reorp_sbmt, true);
                    } else if (document.attachEvent) {
                        document.detachEvent('onkeydown', ReorphusCall);

                        document.attachEvent('onkeydown', Reorp_butt_close);
                        document.attachEvent('onkeydown', Reorp_sbmt);
                    }

                    var html = '' +
                        '<div id="reorphus" class="reorphus">' +
                        '<div class="title">Нашли ошибку? Спасибо за бдительность! <i class="icon-close" id="reorp_top_close"></i></div>' +
                        '<form action="" id="reorphus_form">' +
                        '<div class="container">' +
                        '<div class="quote">' +
                        '<p id="reorp_quote">' + beforetext + '<strong>' + text + '</strong>' + aftertext + '</p>' +
                        '<span class="left"></span><span class="right"></span>' +
                        '</div>' +
                        '<div class="text textarea">' +
                        '<label for="reorp_comment">Ваш комментарий:</label>' +
                        '<textarea name="reorp_comment" id="reorp_comment" cols="30" rows="10" maxlength="260"></textarea>' +
                        '</div>' +
                        '<div class="text">' +
                        '<table>' +
                        '<tr>' +
                        '<td><label for="reorp_spam">Вы не робот? Сколько будет <span id="antispam"></span>:</label></td>' +
                        '<td class="inp"><input type="text" name="reorp_spam" id="reorp_spam" maxlength="2"></td>' +
                        '</tr>' +
                        '</table>' +
                        '</div>' +
                        '<div class="bottom _clr">' +
                        '<p id="reorp_spam_descr">Проверка проводится один раз,<br/> если у вас разрешены куки.</p>' +
                        '<input type="submit" value="Отправить" class="reorp_sbmt" id="reorp_submit" />' +
                        '<input type="hidden" value="" id="reorp_quote_dup" name="reorp_mistakeText" />' +
                        '<input type="hidden" value="" id="reorp_url" name="reorp_link" />' +
                        '<input type="hidden" value="" id="reorp_browser" name="reorp_browser" />' +
                        '<a href="#" id="reopr_close">Закрыть</a>' +
                        '</div>' +
                        '</div>' +
                        '</form>' +
                        '</div>'+
                        '';

                    $('body').prepend(html);

                    Reorp_gen();
                    Reorp_pos();

                    if (window.localStorage.getItem('reorphus_valid_user') == '1') {
                        $('#reorp_spam').parents('.text').remove();
                        $('#reorp_spam_descr').remove();
                    }

                    $('#reorphus input[type=text], #reorphus textarea').on('focus', function(){
                        $(this).parents('.text').addClass('focused').removeClass('error');
                    }).on('blur', function(){
                        $(this).parents('.text').removeClass('focused');
                    });

                    $('#reorp_comment').focus();

                    $('#reopr_close, #reorp_top_close').on('click', function(){
                        $('#reorphus').remove();
                        $('#reorphus input:text, #reorphus textarea').val('');
                        if (document.addEventListener) {
                            document.addEventListener('keydown', ReorphusCall, true);
                            document.removeEventListener('keydown', Reorp_sbmt, true);
                        } else if (document.attachEvent) {
                            document.attachEvent('onkeydown', ReorphusCall);
                            document.detachEvent('onkeydown', Reorp_sbmt);
                        }
                        return false;
                    });

                    $('#reorp_spam').keypress(function(key){
                        if (key.charCode < 48 || key.charCode > 57) {
                            return false;
                        }
                    });

                    $('#reorphus_form').on('submit', function(e){
                        if (Reorp_validate()) {

                            $("#reorp_quote_dup").val($("#reorp_quote").html().replace('<strong>', '<strong>&lt;!!!&gt;').replace('</strong>', '&lt;!!!&gt;</strong>'));
                            $("#reorp_url").val(window.location.href);
                            $("#reorp_browser").val(navigator.userAgent);
                            $('#reorp_submit').val('').addClass('disabled').attr('disabled', 'disabled');
                            $('#reorphus .text').removeClass('error');

                            e.preventDefault();
                            var data = $(this).serialize();
                            var t_form = $(this);
                            var res = $.ajax({
                                url: '/report_error/',
                                type: 'POST',
                                data: data,
                                dataType: 'json'
                            });

                            res.done(function(jdata) {
                                if (!jdata.status) {
                                    alert(jdata.alert);

                                    if (jdata.activate_field) {
                                        $('#'+jdata.activate_field.focus());
                                    }
                                } else {
                                    $("#reorphus").fadeOut('fast', function(){ $(this).remove() });

                                    Reorp_mess('Сообщение отправлено', 'ok', jdata.message);

                                    if (document.addEventListener) {
                                        document.addEventListener('keydown', ReorphusCall, true);
                                        document.removeEventListener('keydown', Reorp_sbmt, true);
                                    } else if (document.attachEvent) {
                                        document.attachEvent('onkeydown', ReorphusCall);
                                        document.detachEvent('onkeydown', Reorp_sbmt);
                                    }
                                }
                            });

                            res.fail(function(jqXHR, textStatus) {
                                $("#reorphus").fadeOut('fast', function(){ $(this).remove() });

                                Reorp_mess('Ошибка', 'error', 'Ошибка: ' + textStatus);
                            });

                            $(document).on('click', '#reopr_after_close', function(){
                                $('#reorphus_message').fadeOut('fast', function() { $(this).remove() });
                                return false;
                            });

                            $(document).on('click', '#reorp_mess_top_close', function(){
                                $('#reorphus_message').remove();
                                return false;
                            });

                        } else {
                            $('#reorp_spam').val('').parents('.text').addClass('error');
                            $('#reorp_comment').parents('.text').addClass('error');
                            Reorp_gen();
                            return false;
                        };
                    });
                };

                if (text.length < 2) {
                    alert('Вы выделили слишком мало текста.');
                    return false;
                };

                if (text.length > 200) {
                    alert('Вы выделили слишком много текста.')
                    return false;
                };
            };
        };
    }; //ReorphusCall();
}());
