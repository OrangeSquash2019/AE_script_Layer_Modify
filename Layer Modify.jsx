// Copyright @Orange Squash
// Modify layer name in bulk
// (rename, add prefix, add suffix)
// !Only modify layername, not layer source name
// Modify layer label in bulk
thisObj = this;
var win = (thisObj instanceof Panel)? thisObj : new Window ("palette", "Layer Modify", undefined, {resizeable:true});
var Tips = win.add ("statictext", undefined, "Input your fix Text:");
var Fixtext = win.add ("edittext", [0,10,210,40], "");
var PrefixButton = win.add ("button", undefined, "Add Prefix");
var SuffixButton = win.add ("button", undefined, "Add Suffix");
var ReName = win.add ("button", undefined, "ReName");
var LabelChoose = win.add("dropdownlist");
var SetLabel = win.add ("button", undefined, "SetLabel");
win.alignChildren = ["fill","center"];
win.layout.layout(true);


LabelChoose.add("item","None");
LabelChoose.add("item","Red");
LabelChoose.add("item","Yellow");
LabelChoose.add("item","Aqua");
LabelChoose.add("item","Pink");
LabelChoose.add("item","Lavender");
LabelChoose.add("item","Peach");
LabelChoose.add("item","Sea Foam");
LabelChoose.add("item","Blue");
LabelChoose.add("item","Green");
LabelChoose.add("item","Purple");
LabelChoose.add("item","Orange");
LabelChoose.add("item","Brown");
LabelChoose.add("item","Fuchsia");
LabelChoose.add("item","Cyan");
LabelChoose.add("item","SandStone");
LabelChoose.add("item","Dark Green");
LabelChoose.selection = 0;

function Preparation(){
        
    var CurComp = app.project.activeItem;
    if(!CurComp || !(CurComp instanceof CompItem)){
        alert("No Active Compsition!");
        return;
    }

    var SelectedLayers = CurComp.selectedLayers;
    if(SelectedLayers < 1){
        alert("No Layer Selected!");
        return;
    }
    
    return SelectedLayers;

}

   
PrefixButton.onClick = function(){
    app.beginUndoGroup("Add Prefix");
    SelectedLayers = Preparation();
    if(!SelectedLayers) return;
    for(var i=0; i<SelectedLayers.length; i++){
//~             try{
//~                 SelectedLayers[i].source.name = Fixtext.text + SelectedLayers[i].source.name;
//~             }catch(error) {
//~                 $.writeln('this layer has no source');
//~             }
        SelectedLayers[i].name = Fixtext.text + SelectedLayers[i].name;
    }//for
    app.endUndoGroup;
}

SuffixButton.onClick = function(){
    app.beginUndoGroup("Add Suffix");
    SelectedLayers = Preparation();
    if(!SelectedLayers) return;
    for(var i=0; i<SelectedLayers.length; i++){
//~             try{
//~                 SelectedLayers[i].source.name = SelectedLayers[i].source.name + Fixtext.text;
//~             }catch(error) {
//~                 $.writeln('this layer has no source');
//~             }
        SelectedLayers[i].name = SelectedLayers[i].name + Fixtext.text;
    }//for
    app.endUndoGroup;
}

ReName.onClick = function(){
    app.beginUndoGroup("ReName");
    SelectedLayers = Preparation();
    if(!SelectedLayers) return;
    SelectedLayers[0].enabled = true;
    for(var i=0; i<SelectedLayers.length; i++)
        SelectedLayers[i].name = Fixtext.text;
    app.endUndoGroup();
}




SetLabel.onClick = function(){
    app.beginUndoGroup("SetLabel");
    SelectedLayers = Preparation();
    if(!SelectedLayers) return;
    
    var CurLabel = 0;
    for(var i=0; i<SelectedLayers.length; i++){
        switch(LabelChoose.selection.toString()){
            case 'None': CurLabel = 0;
                       break;
            case 'Red': CurLabel = 0;
                       break;
            case 'Yellow': CurLabel = 1;
                       break;
            case 'Aqua': CurLabel = 2;
                       break;
            case 'Pink': CurLabel = 3;
                       break;
            case 'Lavender': CurLabel = 4;
                       break;
            case 'Peach': CurLabel = 5;
                       break;
            case 'Sea Foam': CurLabel = 6;
                       break;
            case 'Blue': CurLabel = 7;
                       break;
            case 'Green': CurLabel = 8;
                       break;
            case 'Purple': CurLabel = 9;
                       break;
            case 'Orange': CurLabel = 10;
                       break;
            case 'Brown': CurLabel = 11;
                       break;
            case 'Fuchsia': CurLabel = 12;
                       break;
            case 'Cyan': CurLabel = 13;
                       break;
            case 'SandStone': CurLabel = 14;
                       break;
            case 'Dark Green': CurLabel = 15;
                       break;
            default: CurLabel = 0; 
        }
        SelectedLayers[i].label = CurLabel + 1;
    }//for
    app.endUndoGroup;
}

if (win.toString() == "[object Panel]") {
        win;
} else {
        win.show();
}

