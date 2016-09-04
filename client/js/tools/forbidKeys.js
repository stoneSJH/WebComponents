/**
 * Created by stoneshi on 16/9/4.
 */
function key(){
    if(event.shiftKey){
        window.close();
    }
    if(event.altKey){
        window.close();
    }
    if(event.ctrlKey){
        window.close();
    }
    return false;
}
function nocontextmenu(){
    event.cancelBubble = true;
    event.returnValue = false;
    return false;
}
function norightclick(e){
    if (window.Event){
        if (e.which == 2 || e.which == 3)
            return false;
    }
    else
    if (event.button == 2 || event.button == 3){
        event.cancelBubble = true;
        event.returnValue = false;
        return false;
    }
}

if (window.Event)
    document.captureEvents(Event.MOUSEUP);
document.onkeydown=key;
document.oncontextmenu = nocontextmenu;  // for IE5+
document.onmousedown = norightclick;  // for all others