var generator = {

    idCount : 0,
    idPreset : 0,
    paletteDisplayed : false,
    overElement : false,
    colorCodes : [ [ [ 0, '#000000' ], [ 1, '#bb0000' ], [ 2, '#00bb00' ], [ 3, '#bbbb00' ], [ 4, '#3e3eff' ], [ 5, '#bb00bb' ], [ 6, '#00bbbb' ], [ 7, '#bbbbbb' ] ], [ [ 8, '#555555' ], [ 9, '#ff5555' ], [ 10, '#55ff55' ], [ 11, '#ffff55' ], [ 12, '#5555ff' ], [ 13, '#ff55ff' ], [ 14, '#55ffff' ], [ 15, '#ffffff' ] ],
            [ [ 16, '#000000' ], [ 22, '#005f00' ], [ 28, '#008700' ], [ 34, '#00af00' ], [ 40, '#00d700' ], [ 46, '#00ff00' ], [ 82, '#5fff00' ], [ 76, '#5fd700' ], [ 70, '#5faf00' ], [ 64, '#5f8700' ], [ 58, '#5f5f00' ], [ 52, '#5f0000' ] ], [ [ 17, '#00005f' ], [ 23, '#005f5f' ], [ 29, '#00875f' ], [ 35, '#00af5f' ], [ 41, '#00d75f' ], [ 47, '#00ff5f' ], [ 83, '#5fff5f' ], [ 77, '#5fd75f' ], [ 71, '#5faf5f' ], [ 65, '#5f875f' ], [ 59, '#5f5f5f' ], [ 53, '#5f005f' ] ],
            [ [ 18, '#000087' ], [ 24, '#005f87' ], [ 30, '#008787' ], [ 36, '#00af87' ], [ 42, '#00d787' ], [ 48, '#00ff87' ], [ 84, '#5fff87' ], [ 78, '#5fd787' ], [ 72, '#5faf87' ], [ 66, '#5f8787' ], [ 60, '#5f5f87' ], [ 54, '#5f0087' ] ], [ [ 19, '#0000af' ], [ 25, '#005faf' ], [ 31, '#0087af' ], [ 37, '#00afaf' ], [ 43, '#00d7af' ], [ 49, '#00ffaf' ], [ 85, '#5fffaf' ], [ 79, '#5fd7af' ], [ 73, '#5fafaf' ], [ 67, '#5f87af' ], [ 61, '#5f5faf' ], [ 55, '#5f00af' ] ],
            [ [ 20, '#0000d7' ], [ 26, '#005fd7' ], [ 32, '#0087d7' ], [ 38, '#00afd7' ], [ 44, '#00d7d7' ], [ 50, '#00ffd7' ], [ 86, '#5fffd7' ], [ 80, '#5fd7d7' ], [ 74, '#5fafd7' ], [ 68, '#5f87d7' ], [ 62, '#5f5fd7' ], [ 56, '#5f00d7' ] ], [ [ 21, '#0000ff' ], [ 27, '#005fff' ], [ 33, '#0087ff' ], [ 39, '#00afff' ], [ 45, '#00d7ff' ], [ 51, '#00ffff' ], [ 87, '#5fffff' ], [ 81, '#5fd7ff' ], [ 75, '#5fafff' ], [ 69, '#5f87ff' ], [ 63, '#5f5fff' ], [ 57, '#5f00ff' ] ],
            [ [ 93, '#8700ff' ], [ 99, '#875fff' ], [ 105, '#8787ff' ], [ 111, '#87afff' ], [ 117, '#87d7ff' ], [ 123, '#87ffff' ], [ 159, '#afffff' ], [ 153, '#afd7ff' ], [ 147, '#afafff' ], [ 141, '#af87ff' ], [ 135, '#af5fff' ], [ 129, '#af00ff' ] ], [ [ 92, '#8700d7' ], [ 98, '#875fd7' ], [ 104, '#8787d7' ], [ 110, '#87afd7' ], [ 116, '#87d7d7' ], [ 122, '#87ffd7' ], [ 158, '#afffd7' ], [ 152, '#afd7d7' ], [ 146, '#afafd7' ], [ 140, '#af87d7' ], [ 134, '#af5fd7' ], [ 128, '#af00d7' ] ],
            [ [ 91, '#8700af' ], [ 97, '#875faf' ], [ 103, '#8787af' ], [ 109, '#87afaf' ], [ 115, '#87d7af' ], [ 121, '#87ffaf' ], [ 157, '#afffaf' ], [ 151, '#afd7af' ], [ 145, '#afafaf' ], [ 139, '#af87af' ], [ 133, '#af5faf' ], [ 127, '#af00af' ] ], [ [ 90, '#870087' ], [ 96, '#875f87' ], [ 102, '#878787' ], [ 108, '#87af87' ], [ 114, '#87d787' ], [ 120, '#87ff87' ], [ 156, '#afff87' ], [ 150, '#afd787' ], [ 144, '#afaf87' ], [ 138, '#af8787' ], [ 132, '#af5f87' ], [ 126, '#af0087' ] ],
            [ [ 89, '#87005f' ], [ 95, '#875f5f' ], [ 101, '#87875f' ], [ 107, '#87af5f' ], [ 113, '#87d75f' ], [ 119, '#87ff5f' ], [ 155, '#afff5f' ], [ 149, '#afd75f' ], [ 143, '#afaf5f' ], [ 137, '#af875f' ], [ 131, '#af5f5f' ], [ 125, '#af005f' ] ], [ [ 88, '#870000' ], [ 94, '#875f00' ], [ 100, '#878700' ], [ 106, '#87af00' ], [ 112, '#87d700' ], [ 118, '#87ff00' ], [ 154, '#afff00' ], [ 148, '#afd700' ], [ 142, '#afaf00' ], [ 136, '#af8700' ], [ 130, '#af5f00' ], [ 124, '#af0000' ] ],
            [ [ 160, '#d70000' ], [ 166, '#d75f00' ], [ 172, '#d78700' ], [ 178, '#d7af00' ], [ 184, '#d7d700' ], [ 190, '#d7ff00' ], [ 226, '#ffff00' ], [ 220, '#ffd700' ], [ 214, '#ffaf00' ], [ 208, '#ff8700' ], [ 202, '#ff5f00' ], [ 196, '#ff0000' ] ], [ [ 161, '#d7005f' ], [ 167, '#d75f5f' ], [ 173, '#d7875f' ], [ 179, '#d7af5f' ], [ 185, '#d7d75f' ], [ 191, '#d7ff5f' ], [ 227, '#ffff5f' ], [ 221, '#ffd75f' ], [ 215, '#ffaf5f' ], [ 209, '#ff875f' ], [ 203, '#ff5f5f' ], [ 197, '#ff005f' ] ],
            [ [ 162, '#d70087' ], [ 168, '#d75f87' ], [ 174, '#d78787' ], [ 180, '#d7af87' ], [ 186, '#d7d787' ], [ 192, '#d7ff87' ], [ 228, '#ffff87' ], [ 222, '#ffd787' ], [ 216, '#ffaf87' ], [ 210, '#ff8787' ], [ 204, '#ff5f87' ], [ 198, '#ff0087' ] ], [ [ 163, '#d700af' ], [ 169, '#d75faf' ], [ 175, '#d787af' ], [ 181, '#d7afaf' ], [ 187, '#d7d7af' ], [ 193, '#d7ffaf' ], [ 229, '#ffffaf' ], [ 223, '#ffd7af' ], [ 217, '#ffafaf' ], [ 211, '#ff87af' ], [ 205, '#ff5faf' ], [ 199, '#ff00af' ] ],
            [ [ 164, '#d700d7' ], [ 170, '#d75fd7' ], [ 176, '#d787d7' ], [ 182, '#d7afd7' ], [ 188, '#d7d7d7' ], [ 194, '#d7ffd7' ], [ 230, '#ffffd7' ], [ 224, '#ffd7d7' ], [ 218, '#ffafd7' ], [ 212, '#ff87d7' ], [ 206, '#ff5fd7' ], [ 200, '#ff00d7' ] ], [ [ 165, '#d700ff' ], [ 171, '#d75fff' ], [ 177, '#d787ff' ], [ 183, '#d7afff' ], [ 189, '#d7d7ff' ], [ 195, '#d7ffff' ], [ 231, '#ffffff' ], [ 225, '#ffd7ff' ], [ 219, '#ffafff' ], [ 213, '#ff87ff' ], [ 207, '#ff5fff' ], [ 201, '#ff00ff' ] ],
            [ [ 232, '#080808' ], [ 233, '#121212' ], [ 234, '#1c1c1c' ], [ 235, '#262626' ], [ 236, '#303030' ], [ 237, '#3a3a3a' ], [ 238, '#444444' ], [ 239, '#4e4e4e' ], [ 240, '#585858' ], [ 241, '#626262' ], [ 242, '#6c6c6c' ], [ 243, '#767676' ] ], [ [ 255, '#eeeeee' ], [ 254, '#e4e4e4' ], [ 253, '#dadada' ], [ 252, '#d0d0d0' ], [ 251, '#c6c6c6' ], [ 250, '#bcbcbc' ], [ 249, '#b2b2b2' ], [ 248, '#a8a8a8' ], [ 247, '#9e9e9e' ], [ 246, '#949494' ], [ 245, '#8a8a8a' ], [ 244, '#808080' ] ] ],
    defaultFgColorCode : '15;#ffffff',
    defaultBgColorCode : '-1;transparent',
    codes : [
        [ 'hostnameShort', 'hostname (short)', 'mycomputer', '\\h' ],
        [ 'hostnameFull', 'hostname (full)', 'mycomputer.example', '\\H' ],
        [ 'username', 'username', 'mario', '\\u' ],
        [ 'shellName', 'shell name', 'bash', '\\v' ],
        [ 'terminal', 'terminal', 'ttys02', '\\l' ],
        [ 'currentDirectory', 'directory', '/usr/local/src', '\\w' ],
        [ 'currentDirectoryBase', 'directory (basename)', 'src', '\\W' ],
        [ 'timeShort', 'time-short (HH:MM)', '14:23', '\\A' ],
        [ 'timeLong', 'time with seconds (HH:MM:SS)', '14:23:52', '\\t' ],
        [ 'timeAMPM', 'time (HH:MM)', '07:23 AM', '\\@' ],
        [ 'timeAMPMs', 'time with seconds 12 hours (HH:MM:SS)', '02:23:52', '\\T' ],
        [ 'timeDate', 'date (Day Month Date)', 'Mon Feb 22', '\\d' ],
        [ 'exitStatus', 'exit status', '0', '\\$?' ],
        [ 'charGreaterThan', '>', '>', '>' ],
        [ 'charAt', '@', '@', '@' ],
        [ 'charColon', ':', ':', ':' ],
        [ 'charComma', ',', ',', ',' ],
        [ 'charPeriod', '.', '.', '.' ],
        [ 'charQuestion', '?', '?', '?' ],
        [ 'charExclamation', '!', '!', '!' ],
        [ 'charBackslash', '\\', '\\', '\\\\' ],
        [ 'charLeftBrace', '{', '{', '{' ],
        [ 'charRightBrace', '}', '}', '}' ],
        [ 'charLeftBracket', '[', '[', '[' ],
        [ 'charRightBracket', ']', ']', ']' ], 
        [ 'charLeftParenthesis', '(', '(', '(' ],
        [ 'charRightParenthesis', ')', ')', ')' ],
        [ 'charCaret', '^', '^', '^' ],
        [ 'charStar', '*', '*', '*' ],
        [ 'charDash', '-', '-', '-' ],
        [ 'charUnderscore', '_', '_', '_' ],
        [ 'charSpace', 'space', ' ', ' ' ],
        [ 'charNewLine', 'new line', '<br>', '\\n' ],
        [ 'charDollar', '#/$', '$', '\\\\$' ],
        ['gitBranch', 'git branch', '(main)', '($(git branch 2>/dev/null | grep \'^*\' | colrm 1 2))'],
    ],

    dragRender : function(event, ui)
    {
        generator.renderSelection();
    },

    dragOut : function(event, ui)
    {

    },

    dragFill : function()
    {
        for (i in generator.codes) {
            $('#source').append(generator.createDragElement('source-' + generator.codes[i][0], generator.codes[i][0], generator.codes[i][1], generator.codes[i][2]));
        }
    },

    fillPalette : function()
    {
        el = $('#palette .colors');
        var breakEl = $('<div></div>').addClass('_cf');
        var explainEl = $('<div></div>').addClass('_cf').html('Choose a color:');
        el.append(explainEl);
        var fgOrBgEl = $('<div></div>').addClass('_cf').html('<form id="fgorbg-form" name="fgorbg-form"><label for="fgorbg-fg"><input type="radio" name="fgorbg" id="fgorbg-fg" value="fg" checked>Foreground color</label><label for="fgorbg-bg"><input type="radio" name="fgorbg" id="fgorbg-bg" value="bg">Background color</label></form>');
        el.append(fgOrBgEl);
        
        var colorEl = $('<div></div>').addClass('defaultColor').addClass('color').on('click', function(event)
                {
                    var fgorbg = $('input:radio[name=fgorbg]:checked').val();
                    if (fgorbg == 'fg') {
                        var attr = 'fgcolor';
                        var style = 'color';
                        var variable = 'defaultFgColorCode';
                    }
                    else {
                        var attr = 'bgcolor';
                        var style = 'backgroundColor';
                        var variable = 'defaultBgColorCode';
                    }
                    $(generator.overElement).css(style, generator.convertColorToHtml(generator[variable]));
                    $(generator.overElement).attr('data-' + attr, generator[variable]);
                    generator.renderSelection();
                });
        el.append(colorEl);
        el.append(breakEl.clone());
        
        var col, line;
        for (line in generator.colorCodes) {
            for (col in generator.colorCodes[line]) {
                var colorEl = $('<div></div>').attr('data-color', generator.colorCodes[line][col][0] + ';' + generator.colorCodes[line][col][1]).addClass('color').css('backgroundColor', generator.colorCodes[line][col][1]).on('click', function(event)
                {
                    var fgorbg = $('input:radio[name=fgorbg]:checked').val();
                    if (fgorbg == 'fg') {
                        var attr = 'fgcolor';
                        var style = 'color';
                    }
                    else {
                        var attr = 'bgcolor';
                        var style = 'backgroundColor';
                    }
                    $(generator.overElement).css(style, generator.convertColorToHtml($(event.target).attr('data-color')));
                    $(generator.overElement).attr('data-' + attr, $(event.target).attr('data-color'));
                    generator.renderSelection();
                });
                el.append(colorEl);
            }
            /* ajout saut de ligne */
            el.append(breakEl.clone());
        }
        el.append(breakEl);
        el = $('#palette .boldness');
        var boldEl1 = $('<label for="paletteBold"><input id="paletteBold" type="checkbox">bold</label>').on('click', function(event)
        {
            generator.toggleBoldElement();
            generator.renderSelection();
        });
        el.append(boldEl1);
    },

    toggleBoldElement : function()
    {
        if ($('#paletteBold').attr('checked') == 'checked') {
            $(generator.overElement).css('font-weight', 'bold');
            $(generator.overElement).attr('data-bold', '1');
        }
        else {
            $(generator.overElement).css('font-weight', 'normal');
            $(generator.overElement).attr('data-bold', '0');
        }
    },

    createDragElement : function(id, name, definition, exampleText, fgColor, bgColor)
    {
        var el = $('<li></li>').attr('id', 'src-' + id)
                .attr('name', name)
                .attr('title', exampleText)
                .attr('data-fgcolor', (fgColor == undefined ? generator.defaultFgColorCode : fgColor))
                .css('color', generator.convertColorToHtml(fgColor == undefined ? generator.defaultFgColorCode : fgColor))
                .attr('data-bgcolor', (bgColor == undefined ? generator.defaultBgColorCode : bgColor))
                .css('backgroundColor', generator.convertColorToHtml(bgColor == undefined ? generator.defaultBgColorCode : bgColor))
                .attr('data-bold', '0').html(definition).addClass('item');
        return el;
    },

    convertColorToHtml : function(colorCodeAndHex)
    {
        var colorCodeAndHexArr = colorCodeAndHex.split(';');
        return colorCodeAndHexArr[1];
    },

    convertColorToCode : function(colorCodeAndHex)
    {
        var colorCodeAndHexArr = colorCodeAndHex.split(';');
        return colorCodeAndHexArr[0];
    },

    initEvents : function()
    {
        $("#wishlist").sortable({
            cursor : "move",
            placeholder : 'placeholder',
            forcePlaceholderSize : true,
            /* revert : 100, */
            start : function(e, ui)
            {
                ui.item.addClass('noclick');
            },
            beforeStop : function(e, ui)
            {
                generator.dragRender(e, ui);
                if (sortableIn == 0) {
                    ui.item.remove();
                    generator.renderSelection();
                }
            },
            receive : function(event, ui)
            {
                sortableIn = 1;
            },
            over : function(e, ui)
            {
                sortableIn = 1;
            },
            out : function(e, ui)
            {
                sortableIn = 0;
            }
        }).disableSelection();

        $("#source .item").draggable({
            connectToSortable : "#wishlist",
            forcePlaceholderSize : true,
            helper : "clone",
            revert : "invalid",
            opacity : 0.5,
            out : generator.dragRender
        }).disableSelection();
        
        $('ul, li').disableSelection();

        $('#palette-close').on('click', function(event)
        {
            $('#palette').hide();
        });

        $("#wishlist").on('click', 'li', function(event)
        {
            if ($(this).hasClass('noclick')) {
                $(this).removeClass('noclick');
            }
            else {
                $('#palette').show();
                if (parseInt($(this).attr('data-bold')) == 0) {
                    $('#paletteBold').attr('checked', false);
                }
                else {
                    $('#paletteBold').attr('checked', 'checked');
                }
                generator.overElement = this;
            }
        });

        $('#removeEverythingBtn').on('click', function(event)
        {
            if (confirm('seriously ?')) {
                generator.emptyWishlist();
                generator.renderSelection();
            }
        });

    },

    init : function()
    {

        generator.dragFill();

        generator.addPreset([ 'username', 'charAt', 'hostnameShort', 'charColon', 'currentDirectory', 'charDollar', 'charSpace' ], 'user at computer : path $');
        generator.addPreset([ 'username,11;#ffff55,-1;transparent', 'charAt', 'hostnameShort', 'charColon', 'charLeftBracket,6;#55ffff,-1;transparent', 'currentDirectory,6;#55ffff,-1;transparent', 'charRightBracket,6;#55ffff,-1;transparent', 'charColon', 'charSpace' ], 'user at computer [ path ] , more readable');

        generator.fillPalette();
        generator.initEvents();

    },

    getCodePartsFromName : function(name)
    {
        var i;
        for (i in generator.codes) {
            if (generator.codes[i][0] == name) {
                return ([ generator.codes[i][0], generator.codes[i][1], generator.codes[i][2], generator.codes[i][3] ]);
            }
        }
        return false;
    },

    emptyWishlist : function()
    {
        $('#wishlist').html('');
    },

    setSelectionFromPreset : function(codesString, presetId)
    {
        generator.emptyWishlist();
        codes = codesString.split('§');
        var i;
        for (i in codes) {
            if (codes[i].indexOf(',') > 0) {
                var arrCodes = codes[i].split(',');
                code = arrCodes[0];
                fgColor = arrCodes[1];
                bgColor = arrCodes[2];
            }
            else {
                code = codes[i];
                fgColor = generator.defaultFgColorCode;
                bgColor = generator.defaultBgColorCode;
            }
            if (parts = generator.getCodePartsFromName(code)) {
                $('#wishlist').append(generator.createDragElement('preset-' + presetId + '-' + parts[0], parts[0], parts[1], parts[2], fgColor, bgColor));
            }
        }
        generator.renderSelection();
    },

    renderSelection : function()
    {
        var htmlPreview = '';
        var htmlOutput = '';
        var whichFgColor = generator.defaultFgColorCode;
        var whichBgColor = generator.defaultBgColorCode;
        var whichBold = 0;
        var liIndex = 0;
        $('#wishlist li').each(function(idx)
        {
        	if(!$(this).hasClass('placeholder')) {
        		        		
	            if (parts = generator.getCodePartsFromName($(this).attr('name'))) {
	                htmlPreview += '<span style="color:' + generator.convertColorToHtml($(this).attr('data-fgcolor')) + '; ';
	                htmlPreview += 'background-color:' + generator.convertColorToHtml($(this).attr('data-bgcolor')) + '; ';
	                if (parseInt($(this).attr('data-bold')) == 1) {
	                    htmlPreview += ' font-weight:bold;';
	                }
	                htmlPreview += '">' + parts[2] + '</span>';
		                
                    if (liIndex!=0 && 
                        (
                            (whichBold != $(this).attr('data-bold') && $(this).attr('data-bold') == 0) ||
                            ($(this).attr('data-fgcolor') != whichFgColor) ||
                            ($(this).attr('data-bgcolor') != whichBgColor)
                        )) {
	                    htmlOutput += '\\[$(tput sgr0)\\]';
                    }
                    
                    if (whichBold != $(this).attr('data-bold') && $(this).attr('data-bold') == 1) {
	                    htmlOutput += '\\[$(tput bold)\\]';
	                }
	                	
	                if ($(this).attr('data-fgcolor') != whichFgColor && $(this).attr('data-fgcolor') != generator.defaultFgColorCode) {
	                    htmlOutput += '\\[\\033[38;5;' + generator.convertColorToCode($(this).attr('data-fgcolor')) + 'm\\]';
	                }
	
	                if ($(this).attr('data-bgcolor') != whichBgColor && $(this).attr('data-bgcolor') != generator.defaultBgColorCode) {
                        htmlOutput += '\\[\\033[48;5;' + generator.convertColorToCode($(this).attr('data-bgcolor')) + 'm\\]';
	                }
	
	                htmlOutput += parts[3];
	
	                whichBgColor = $(this).attr('data-bgcolor');
	                whichFgColor = $(this).attr('data-fgcolor');
	                whichBold = parseInt($(this).attr('data-bold'));
	                
	                liIndex++;
	            }
        	}
        });

        // closes everything
        htmlOutput += '\\[$(tput sgr0)\\]';

        $('#preview').html(htmlPreview);
        $('#output').html('export PS1="' + htmlOutput + '"');
    },

    createPresetElement : function(id, codes, legend)
    {
        generator.idPreset++;
        var el = $('<li></li>').attr('id', id).attr('data-code', codes.join('§')).on('click', function(evt)
        {
            if ($(evt.target).parent().parent().attr('data-code')) {
                generator.setSelectionFromPreset($(evt.target).parent().parent().attr('data-code'), $(evt.target).parent().parent().attr('id'));
            }
        });
        var html = '<strong>';
        var i;
        for (i in codes) {
            fgColor = generator.defaultFgColorCode;
            bgColor = generator.defaultBgColorCode;
            if (codes[i].indexOf(',') > 0) {
                var arrCodes = codes[i].split(',');
                code = arrCodes[0];
                fgColor = arrCodes[1];
                if (arrCodes.length == 2) {
                    bgColor = arrCodes[2];
                }
            }
            else {
                code = codes[i];
            }
            if (parts = generator.getCodePartsFromName(code)) {
                html += '<span style="color:' + generator.convertColorToHtml(fgColor) + '">' + parts[2] + '</span>';
            }
        }
        html += '</strong> ' + legend;
        el.html(html);
        return el;
    },

    addPreset : function(codes, legend)
    {
        generator.idPreset++;
        $('#presets').append(generator.createPresetElement(generator.idPreset, codes, legend));
    }
}

$(document).ready(function()
{
    generator.init();
});
