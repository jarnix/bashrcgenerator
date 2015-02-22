var generator = {

    idCount : 0,
    idPreset : 0,
    paletteDisplayed : false,
    overElement : false,
    ___colorCodesOld : [ [ 37, '#FFF' ], [ 31, '#F00' ], [ 32, '#0F0' ], [ 33, '#FF0' ], [ 34, '#00F' ], [ 35, '#F0F' ], [ 36, '#0087ff' ], [ 30, '#000' ] ],
    colorCodes : [
            [ [ 0, '#000000' ], [ 1, '#bb0000' ], [ 2, '#00bb00' ], [ 3, '#bbbb00' ], [ 4, '#3e3eff' ], [ 5, '#bb00bb' ], [ 6, '#00bbbb' ], [ 7, '#bbbbbb' ], [ 8, '#555555' ], [ 9, '#ff5555' ], [ 10, '#55ff55' ], [ 11, '#ffff55' ], [ 12, '#5555ff' ], [ 13, '#ff55ff' ], [ 14, '#55ffff' ],
                    [ 15, '#ffffff' ] ],
            [ [ 16, '#000000' ], [ 17, '#00005f' ], [ 18, '#000087' ], [ 19, '#0000af' ], [ 20, '#0000d7' ], [ 21, '#0000ff' ], [ 22, '#005f00' ], [ 23, '#005f5f' ], [ 24, '#005f87' ], [ 25, '#005faf' ], [ 26, '#005fd7' ], [ 27, '#005fff' ], [ 28, '#008700' ], [ 29, '#00875f' ], [ 30, '#008787' ],
                    [ 31, '#0087af' ], [ 32, '#0087d7' ], [ 33, '#0087ff' ], [ 34, '#00af00' ], [ 35, '#00af5f' ], [ 36, '#00af87' ], [ 37, '#00afaf' ], [ 38, '#00afd7' ], [ 39, '#00afff' ], [ 40, '#00d700' ], [ 41, '#00d75f' ], [ 42, '#00d787' ], [ 43, '#00d7af' ], [ 44, '#00d7d7' ],
                    [ 45, '#00d7ff' ], [ 46, '#00ff00' ], [ 47, '#00ff5f' ], [ 48, '#00ff87' ], [ 49, '#00ffaf' ], [ 50, '#00ffd7' ], [ 51, '#00ffff' ] ],
            [ [ 52, '#5f0000' ], [ 53, '#5f005f' ], [ 54, '#5f0087' ], [ 55, '#5f00af' ], [ 56, '#5f00d7' ], [ 57, '#5f00ff' ], [ 58, '#5f5f00' ], [ 59, '#5f5f5f' ], [ 60, '#5f5f87' ], [ 61, '#5f5faf' ], [ 62, '#5f5fd7' ], [ 63, '#5f5fff' ], [ 64, '#5f8700' ], [ 65, '#5f875f' ], [ 66, '#5f8787' ],
                    [ 67, '#5f87af' ], [ 68, '#5f87d7' ], [ 69, '#5f87ff' ], [ 70, '#5faf00' ], [ 71, '#5faf5f' ], [ 72, '#5faf87' ], [ 73, '#5fafaf' ], [ 74, '#5fafd7' ], [ 75, '#5fafff' ], [ 76, '#5fd700' ], [ 77, '#5fd75f' ], [ 78, '#5fd787' ], [ 79, '#5fd7af' ], [ 80, '#5fd7d7' ],
                    [ 81, '#5fd7ff' ], [ 82, '#5fff00' ], [ 83, '#5fff5f' ], [ 84, '#5fff87' ], [ 85, '#5fffaf' ], [ 86, '#5fffd7' ], [ 87, '#5fffff' ] ],
            [ [ 88, '#870000' ], [ 89, '#87005f' ], [ 90, '#870087' ], [ 91, '#8700af' ], [ 92, '#8700d7' ], [ 93, '#8700ff' ], [ 94, '#875f00' ], [ 95, '#875f5f' ], [ 96, '#875f87' ], [ 97, '#875faf' ], [ 98, '#875fd7' ], [ 99, '#875fff' ], [ 100, '#878700' ], [ 101, '#87875f' ],
                    [ 102, '#878787' ], [ 103, '#8787af' ], [ 104, '#8787d7' ], [ 105, '#8787ff' ], [ 106, '#87af00' ], [ 107, '#87af5f' ], [ 108, '#87af87' ], [ 109, '#87afaf' ], [ 110, '#87afd7' ], [ 111, '#87afff' ], [ 112, '#87d700' ], [ 113, '#87d75f' ], [ 114, '#87d787' ], [ 115, '#87d7af' ],
                    [ 116, '#87d7d7' ], [ 117, '#87d7ff' ], [ 118, '#87ff00' ], [ 119, '#87ff5f' ], [ 120, '#87ff87' ], [ 121, '#87ffaf' ], [ 122, '#87ffd7' ], [ 123, '#87ffff' ] ],
            [ [ 124, '#af0000' ], [ 125, '#af005f' ], [ 126, '#af0087' ], [ 127, '#af00af' ], [ 128, '#af00d7' ], [ 129, '#af00ff' ], [ 130, '#af5f00' ], [ 131, '#af5f5f' ], [ 132, '#af5f87' ], [ 133, '#af5faf' ], [ 134, '#af5fd7' ], [ 135, '#af5fff' ], [ 136, '#af8700' ], [ 137, '#af875f' ],
                    [ 138, '#af8787' ], [ 139, '#af87af' ], [ 140, '#af87d7' ], [ 141, '#af87ff' ], [ 142, '#afaf00' ], [ 143, '#afaf5f' ], [ 144, '#afaf87' ], [ 145, '#afafaf' ], [ 146, '#afafd7' ], [ 147, '#afafff' ], [ 148, '#afd700' ], [ 149, '#afd75f' ], [ 150, '#afd787' ], [ 151, '#afd7af' ],
                    [ 152, '#afd7d7' ], [ 153, '#afd7ff' ], [ 154, '#afff00' ], [ 155, '#afff5f' ], [ 156, '#afff87' ], [ 157, '#afffaf' ], [ 158, '#afffd7' ], [ 159, '#afffff' ] ],
            [ [ 160, '#d70000' ], [ 161, '#d7005f' ], [ 162, '#d70087' ], [ 163, '#d700af' ], [ 164, '#d700d7' ], [ 165, '#d700ff' ], [ 166, '#d75f00' ], [ 167, '#d75f5f' ], [ 168, '#d75f87' ], [ 169, '#d75faf' ], [ 170, '#d75fd7' ], [ 171, '#d75fff' ], [ 172, '#d78700' ], [ 173, '#d7875f' ],
                    [ 174, '#d78787' ], [ 175, '#d787af' ], [ 176, '#d787d7' ], [ 177, '#d787ff' ], [ 178, '#d7af00' ], [ 179, '#d7af5f' ], [ 180, '#d7af87' ], [ 181, '#d7afaf' ], [ 182, '#d7afd7' ], [ 183, '#d7afff' ], [ 184, '#d7d700' ], [ 185, '#d7d75f' ], [ 186, '#d7d787' ], [ 187, '#d7d7af' ],
                    [ 188, '#d7d7d7' ], [ 189, '#d7d7ff' ], [ 190, '#d7ff00' ], [ 191, '#d7ff5f' ], [ 192, '#d7ff87' ], [ 193, '#d7ffaf' ], [ 194, '#d7ffd7' ], [ 195, '#d7ffff' ] ],
            [ [ 196, '#ff0000' ], [ 197, '#ff005f' ], [ 198, '#ff0087' ], [ 199, '#ff00af' ], [ 200, '#ff00d7' ], [ 201, '#ff00ff' ], [ 202, '#ff5f00' ], [ 203, '#ff5f5f' ], [ 204, '#ff5f87' ], [ 205, '#ff5faf' ], [ 206, '#ff5fd7' ], [ 207, '#ff5fff' ], [ 208, '#ff8700' ], [ 209, '#ff875f' ],
                    [ 210, '#ff8787' ], [ 211, '#ff87af' ], [ 212, '#ff87d7' ], [ 213, '#ff87ff' ], [ 214, '#ffaf00' ], [ 215, '#ffaf5f' ], [ 216, '#ffaf87' ], [ 217, '#ffafaf' ], [ 218, '#ffafd7' ], [ 219, '#ffafff' ], [ 220, '#ffd700' ], [ 221, '#ffd75f' ], [ 222, '#ffd787' ], [ 223, '#ffd7af' ],
                    [ 224, '#ffd7d7' ], [ 225, '#ffd7ff' ], [ 226, '#ffff00' ], [ 227, '#ffff5f' ], [ 228, '#ffff87' ], [ 229, '#ffffaf' ], [ 230, '#ffffd7' ], [ 231, '#ffffff' ] ],
            [ [ 232, '#080808' ], [ 233, '#121212' ], [ 234, '#1c1c1c' ], [ 235, '#262626' ], [ 236, '#303030' ], [ 237, '#3a3a3a' ], [ 238, '#444444' ], [ 239, '#4e4e4e' ], [ 240, '#585858' ], [ 241, '#626262' ], [ 242, '#6c6c6c' ], [ 243, '#767676' ], [ 244, '#808080' ], [ 245, '#8a8a8a' ],
                    [ 246, '#949494' ], [ 247, '#9e9e9e' ], [ 248, '#a8a8a8' ], [ 249, '#b2b2b2' ], [ 250, '#bcbcbc' ], [ 251, '#c6c6c6' ], [ 252, '#d0d0d0' ], [ 253, '#dadada' ], [ 254, '#e4e4e4' ], [ 255, '#eeeeee' ], [ 257, '#bb0000' ], [ 258, '#00bb00' ], [ 259, '#bbbb00' ], [ 260, '#3e3eff' ],
                    [ 261, '#bb00bb' ], [ 262, '#00bbbb' ], [ 263, '#bbbbbb' ], [ 264, '#555555' ], [ 265, '#ff5555' ], [ 266, '#55ff55' ], [ 267, '#ffff55' ] ] ],
    defaultColorCode : '15;#ffffff',
    codes : [ [ 'hostnameShort', 'hostname (short)', 'mycomputer', '\\h' ], [ 'hostnameFull', 'hostname (full)', 'mycomputer.example', '\\H' ], [ 'username', 'username', 'julien', '\\u' ], [ 'shellName', 'shell name', 'bash', '\\v' ], [ 'terminal', 'terminal', 'ttys02', '\\l' ],
            [ 'currentDirectory', 'directory', '/usr/local/src', '\\w' ], [ 'currentDirectoryBase', 'directory (basename)', 'src', '\\W' ], [ 'timeShort', 'time-short (HH:MM)', '14:23', '\\A' ], [ 'timeLong', 'time with seconds (HH:MM:SS)', '14:23:52', '\\t' ],
            [ 'timeAMPM', 'time (HH:MM)', '07:23 AM', '\\@' ], [ 'timeAMPMs', 'time with seconds 12 hours (HH:MM:SS)', '02:23:52', '\\T' ], [ 'timeDate', 'date (Day Month Date)', 'Mon Feb 22', '\\d' ], [ 'exitStatus', 'exit status', '0', '\\$?' ], [ 'charGreaterThan', '>', '>', '>' ],
            [ 'charAt', '@', '@', '@' ], [ 'charColon', ':', ':', ':' ], [ 'charComma', ',', ',', ',' ], [ 'charPeriod', '.', '.', '.' ], [ 'charQuestion', '?', '?', '?' ], [ 'charExclamation', '!', '!', '!' ], [ 'charBackslash', '\\', '\\', '\\\\' ], [ 'charLeftBrace', '{', '{', '{' ],
            [ 'charRightBrace', '}', '}', '}' ], [ 'charLeftBracket', '[', '[', '[' ], [ 'charRightBracket', ']', ']', ']' ], [ 'charCaret', '^', '^', '^' ], [ 'charStar', '*', '*', '*' ], [ 'charDash', '-', '-', '-' ], [ 'charUnderscore', '_', '_', '_' ], [ 'charSpace', 'space', ' ', ' ' ],
            [ 'charNewLine', 'new line', '<br>', '\\n' ], [ 'charDollar', '#/$', '$', '\\\\$' ] ],

    dragRender : function(event, ui) {
        generator.renderSelection();
    },

    dragOut : function(event, ui) {
        // console.log('out');
        // console.log(ui.item);
    },

    dragFill : function() {
        for (i in generator.codes) {
            $('#source').append(generator.createDragElement('source-' + generator.codes[i][0], generator.codes[i][0], generator.codes[i][1], generator.codes[i][2]));
        }
    },

    fillPalette : function() {
        el = $('#palette .colors');
        var breakEl = $('<div></div>').addClass('_cf');
        var explainEl = $('<div></div>').addClass('_cf').html('Choose a color:');
        el.append(explainEl);
        for ( var line in generator.colorCodes) {
            for ( var col in generator.colorCodes[line]) {
                var colorEl = $('<div></div>').attr('data-color', generator.colorCodes[line][col][0] + ';' + generator.colorCodes[line][col][1]).addClass('color').css('backgroundColor', generator.colorCodes[line][col][1]).on('click', function(event) {
                    $(generator.overElement).css('color', generator.convertColorToHtml($(event.target).attr('data-color')));
                    $(generator.overElement).attr('data-color', $(event.target).attr('data-color'));
                    generator.renderSelection();
                });
                el.append(colorEl);
            }
            // ajout saut de ligne
            el.append(breakEl);
        }
        el.append(breakEl);
        el = $('#palette .boldness');
        var boldEl1 = $('<input type="checkbox">').attr('id', 'paletteBold').attr('value', 1).on('click', function(event) {
            generator.toggleBoldElement();
            generator.renderSelection();
        });
        var boldEl2 = $('<label></label>').html('bold').attr('for', 'paletteBold').on('click', function(event) {
            generator.toggleBoldElement();
            generator.renderSelection();
        });
        el.append(boldEl1, boldEl2);
    },

    toggleBoldElement : function() {
        if ($('#paletteBold').attr('checked') == 'checked') {
            $(generator.overElement).css('font-weight', 'bold');
            $(generator.overElement).attr('data-bold', '1');
        } else {
            $(generator.overElement).css('font-weight', 'normal');
            $(generator.overElement).attr('data-bold', '0');
        }
    },

    createDragElement : function(id, name, definition, exampleText, color) {
        var el = $('<li></li>').attr('id', 'src-' + id).attr('name', name).attr('title', exampleText).attr('data-color', (color == undefined ? generator.defaultColorCode : color)).css('color', generator.convertColorToHtml(color == undefined ? generator.defaultColorCode : color)).attr('data-bold',
                '0').html(definition).addClass('item');
        return el;
    },

    convertColorToHtml : function(colorCodeAndHex) {
        var colorCodeAndHexArr = colorCodeAndHex.split(';');
        return colorCodeAndHexArr[1];
    },

    convertColorToCode : function(colorCodeAndHex) {
        var colorCodeAndHexArr = colorCodeAndHex.split(';');
        return colorCodeAndHexArr[0];
    },

    initEvents : function() {
        $("#wishlist").sortable({
            cursor : "move",
            placeholder : 'placeholder',
            forcePlaceholderSize : true,
            revert : true,
            start : function(e, ui) {
                ui.item.addClass('noclick');
            },
            beforeStop : function(e, ui) {
                generator.dragRender(e, ui);
                if (sortableIn == 0) {
                    ui.item.remove();
                }
            },
            receive : function(event, ui) {
                sortableIn = 1;
            },
            over : function(e, ui) {
                sortableIn = 1;
            },
            out : function(e, ui) {
                sortableIn = 0;
            }
        }).disableSelection();

        $("#source .item").draggable({
            connectToSortable : "#wishlist",
            forcePlaceholderSize : true,
            helper : "clone",
            revert : "invalid",
            opacity : 1,
            out : generator.dragRender
        }).disableSelection();

        $('#source li.item').tipsy({
            fade : true,
            gravity : 'nw'
        });

        $('#palette-close').on('click', function(event) {
            $('#palette').hide();
        });

        $("#wishlist").on('click', 'li', function(event) {
            if ($(this).hasClass('noclick')) {
                $(this).removeClass('noclick');
            } else {
                $('#palette').show();
                if (parseInt($(this).attr('data-bold')) == 0) {
                    $('#paletteBold').attr('checked', false);
                } else {
                    $('#paletteBold').attr('checked', 'checked');
                }
                generator.overElement = this;
            }
        });

        $('#removeEverythingBtn').on('click', function(event) {
            if (confirm('seriously ?')) {
                generator.emptyWishlist();
                generator.renderSelection();
            }
        });

    },

    init : function() {

        generator.dragFill();

        generator.addPreset([ 'username', 'charAt', 'hostnameShort', 'charColon', 'currentDirectory', 'charDollar', 'charSpace' ], 'user at computer : path $');
        generator.addPreset([ 'username,11;#ffff55', 'charAt', 'hostnameShort', 'charColon', 'charLeftBracket,6;#00bbbb', 'currentDirectory,6;#00bbbb', 'charRightBracket,6;#00bbbb', 'charColon,6;#00bbbb', 'charSpace' ], 'user at computer [ path ] , more readable');

        generator.fillPalette();
        generator.initEvents();

    },

    getCodePartsFromName : function(name) {
        for ( var i in generator.codes) {
            if (generator.codes[i][0] == name) {
                return ([ generator.codes[i][0], generator.codes[i][1], generator.codes[i][2], generator.codes[i][3] ]);
            }
        }
        return false;
    },

    emptyWishlist : function() {
        $('#wishlist').html('');
    },

    setSelectionFromPreset : function(codesString, presetId) {
        generator.emptyWishlist();
        codes = codesString.split('§');
        for ( var i in codes) {
            if (codes[i].indexOf(',') > 0) {
                var arrCodes = codes[i].split(',');
                code = arrCodes[0];
                color = arrCodes[1];
            } else {
                code = codes[i];
                color = generator.defaultColor;
            }
            if (parts = generator.getCodePartsFromName(code)) {
                $('#wishlist').append(generator.createDragElement('preset-' + presetId + '-' + parts[0], parts[0], parts[1], parts[2], color));
            }
        }
        generator.renderSelection();
    },

    renderSelection : function() {
        var htmlPreview = '';
        var htmlOutput = '';
        var whichColor = generator.defaultColorCode;
        var whichBold = null;
        $('#wishlist li').each(function(idx) {
            if (parts = generator.getCodePartsFromName($(this).attr('name'))) {
                htmlPreview += '<span style="color:' + generator.convertColorToHtml($(this).attr('data-color')) + '; ';
                if (parseInt($(this).attr('data-bold')) == 1) {
                    htmlPreview += ' font-weight:bold;';
                }
                htmlPreview += '">' + parts[2] + '</span>';

                if ($(this).attr('data-color') != whichColor) {
                    htmlOutput += '\\033[38;5;' + generator.convertColorToCode($(this).attr('data-color')) + 'm';
                }
                if (whichBold != $(this).attr('data-bold') && $(this).attr('data-bold')==1) {
                    htmlOutput += '\\[$(tput bold)\\]';
                }
                
                htmlOutput += parts[3];
                
                whichColor = $(this).attr('data-color');
                whichBold = parseInt($(this).attr('data-bold'));
            }
        });
        if (whichColor) {
            // close the color mode
            htmlOutput += '\\033[m';
        }
        $('#preview').html(htmlPreview);
        $('#output').html('export PS1="' + htmlOutput + '"');
    },

    createPresetElement : function(id, codes, legend) {
        generator.idPreset++;
        var el = $('<li></li>').attr('id', id).attr('data-code', codes.join('§')).on('click', function(evt) {
            generator.setSelectionFromPreset($(evt.target).parent().parent().attr('data-code'), $(evt.target).parent().attr('id'));
        });
        var html = '<strong>';
        for ( var i in codes) {
            if (codes[i].indexOf(',') > 0) {
                var arrCodes = codes[i].split(',');
                code = arrCodes[0];
                color = arrCodes[1];
            } else {
                code = codes[i];
                color = generator.defaultColorCode;
            }
            if (parts = generator.getCodePartsFromName(code)) {
                html += '<span style="color:' + generator.convertColorToHtml(color) + '">' + parts[2] + '</span>';
            }
        }
        html += '</strong> ' + legend;
        el.html(html);
        return el;
    },

    addPreset : function(codes, legend) {
        generator.idPreset++;
        $('#presets').append(generator.createPresetElement(generator.idPreset, codes, legend));
    }
}

$(document).ready(function() {
    generator.init();
});