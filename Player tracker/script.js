$(document).ready(function () {
    //load/save
    load();
    //player1
    //row 1
    $("#name1").keypress(save);
    $("#Race1").keypress(save);
    $("#Class1").keypress(save);
    $("#SubClass1").keypress(save);
    $("#HP1").keypress(save);
    //row 2
    $("#Abil1").keypress(save);
    $("#Mod1").keypress(save);
    $("#SP1").keypress(save);

    //stats
    $("#Prec1").keypress(save);
    $("#Stre1").keypress(save);
    $("#Dext1").keypress(save);
    $("#Agil1").keypress(save);
    $("#Cons1").keypress(save);
    $("#Inte1").keypress(save);
    $("#Wis1").keypress(save);
    $("#Pers1").keypress(save);
    $("#Inti1").keypress(save);
    $("#Pois1").keypress(save);
    $("#Fait1").keypress(save);
    //row 3
    $("#Alignment1").keypress(save);
    $("#SpellP1").keypress(save);
    $("#DR1").keypress(save);
    $("#CW1").keypress(save);
    $("#IBS1").keypress(save);
    $("#SS1").keypress(save);
    $("#SS1b").keypress(save);
    //row 4
    $("#Weapons1").keypress(save);
    $("#Spells1").keypress(save);
    $("#Armours1").keypress(save);
    //row5
    $("#InInv1").keypress(save);

    //player 2
    //row 1
    $("#name2").keypress(save);
    $("#Race2").keypress(save);
    $("#Class2").keypress(save);
    $("#SubClass2").keypress(save);
    $("#HP2").keypress(save);
    //row 2
    $("#Abil2").keypress(save);
    $("#Mod2").keypress(save);
    $("#SP2").keypress(save);

    //stats
    $("#Prec2").keypress(save);
    $("#Stre2").keypress(save);
    $("#Dext2").keypress(save);
    $("#Agil2").keypress(save);
    $("#Cons2").keypress(save);
    $("#Inte2").keypress(save);
    $("#Wis2").keypress(save);
    $("#Pers2").keypress(save);
    $("#Inti2").keypress(save);
    $("#Pois2").keypress(save);
    $("#Fait2").keypress(save);
    //row 3
    $("#Alignment2").keypress(save);
    $("#SpellP2").keypress(save);
    $("#DR2").keypress(save);
    $("#CW2").keypress(save);
    $("#IBS2").keypress(save);
    $("#SS2").keypress(save);
    $("#SS2b").keypress(save);
    //row 4
    $("#Weapons2").keypress(save);
    $("#Spells2").keypress(save);
    $("#Armours2").keypress(save);
    //row5
    $("#InInv2").keypress(save);
    
    //player 3
    //row 1
    $("#name3").keypress(save);
    $("#Race3").keypress(save);
    $("#Class3").keypress(save);
    $("#SubClass3").keypress(save);
    $("#HP3").keypress(save);
    //row 2
    $("#Abil3").keypress(save);
    $("#Mod3").keypress(save);
    $("#SP3").keypress(save);

    //stats
    $("#Prec3").keypress(save);
    $("#Stre3").keypress(save);
    $("#Dext3").keypress(save);
    $("#Agil3").keypress(save);
    $("#Cons3").keypress(save);
    $("#Inte3").keypress(save);
    $("#Wis3").keypress(save);
    $("#Pers3").keypress(save);
    $("#Inti3").keypress(save);
    $("#Pois3").keypress(save);
    $("#Fait3").keypress(save);
    //row 3
    $("#Alignment3").keypress(save);
    $("#SpellP3").keypress(save);
    $("#DR3").keypress(save);
    $("#CW3").keypress(save);
    $("#IBS3").keypress(save);
    $("#SS3").keypress(save);
    $("#SS3b").keypress(save);
    //row 4
    $("#Weapons3").keypress(save);
    $("#Spells3").keypress(save);
    $("#Armours3").keypress(save);
    //row5
    $("#InInv3").keypress(save);
    //hide and show
    $("#player4").hide()
    $("#addplayer").click(function () {
        $("#player4").show();
    });
});

//helper functions

function save() {
    //PLAYER 1
    // Get the input values
    let name1 = $("#name1").val();
    let race1 = $("#Race1").val();
    let class1 = $("#Class1").val();
    let subclass1 = $("#SubClass1").val();
    let hp1 = $("#HP1").val();
    //row 2
    let abil1 = $("#Abil1").val();
    let prec1 = $("#Prec1").val();
    let stre1 = $("#Stre1").val();
    let dext1 = $("#Dext1").val();
    let agil1 = $("#Agil1").val();
    let cons1 = $("#Cons1").val();
    let inte1 = $("#Inte1").val();
    let wis1 = $("#Wis1").val();
    let pers1 = $("#Pers1").val();
    let inti1 = $("#Inti1").val();
    let pois1 = $("#Pois1").val();
    let fait1 = $("#Fait1").val();


    let mod1 = $("#Mod1").val();
    let sp1 = $("#SP1").val();
    //row 3
    let align1 = $("#Alignment1").val();
    let spellp1 = $("#SpellP1").val();
    let dr1 = $("#DR1").val();
    let cw1 = $("#CW1").val();
    let ibs1 = $("#IBS1").val();
    let ss1 = $("#SS1").val();
    let ss1b = $("#SS1b").val();
    //row 4
    let weapons1 = $("#Weapons1").val();
    let spells1 = $("#Spells1").val();
    let armours1 = $("#Armours1").val();
    //row 5
    let inInv1 = $("#InInv1").val();
//PLAYER 2
    // Get the input values
    let name2 = $("#name2").val();
    let race2 = $("#Race2").val();
    let class2 = $("#Class2").val();
    let subclass2 = $("#SubClass2").val();
    let hp2 = $("#HP2").val();
    //row 2
    let abil2 = $("#Abil2").val();
    let prec2 = $("#Prec2").val();
    let stre2 = $("#Stre2").val();
    let dext2 = $("#Dext2").val();
    let agil2 = $("#Agil2").val();
    let cons2 = $("#Cons2").val();
    let inte2 = $("#Inte2").val();
    let wis2 = $("#Wis2").val();
    let pers2 = $("#Pers2").val();
    let inti2 = $("#Inti2").val();
    let pois2 = $("#Pois2").val();
    let fait2 = $("#Fait2").val();


    let mod2 = $("#Mod2").val();
    let sp2 = $("#SP2").val();
    //row 3
    let align2 = $("#Alignment2").val();
    let spellp2 = $("#SpellP2").val();
    let dr2 = $("#DR2").val();
    let cw2 = $("#CW2").val();
    let ibs2 = $("#IBS2").val();
    let ss2 = $("#SS2").val();
    let ss2b = $("#SS2b").val();
    //row 4
    let weapons2 = $("#Weapons2").val();
    let spells2 = $("#Spells2").val();
    let armours2 = $("#Armours2").val();
    //row 5
    let inInv2 = $("#InInv2").val();
    //Player 3
    // Get the input values
    let name3 = $("#name3").val();
    let race3 = $("#Race3").val();
    let class3 = $("#Class3").val();
    let subclass3 = $("#SubClass3").val();
    let hp3 = $("#HP3").val();
    //row 2
    let abil3 = $("#Abil3").val();
    let prec3 = $("#Prec3").val();
    let stre3 = $("#Stre3").val();
    let dext3 = $("#Dext3").val();
    let agil3 = $("#Agil3").val();
    let cons3 = $("#Cons3").val();
    let inte3 = $("#Inte3").val();
    let wis3 = $("#Wis3").val();
    let pers3 = $("#Pers3").val();
    let inti3 = $("#Inti3").val();
    let pois3 = $("#Pois3").val();
    let fait3 = $("#Fait3").val();


    let mod3 = $("#Mod3").val();
    let sp3 = $("#SP3").val();
    //row 3
    let align3 = $("#Alignment3").val();
    let spellp3 = $("#SpellP3").val();
    let dr3 = $("#DR3").val();
    let cw3 = $("#CW3").val();
    let ibs3 = $("#IBS3").val();
    let ss3 = $("#SS3").val();
    let ss3b = $("#SS3b").val();
    //row 4
    let weapons3 = $("#Weapons3").val();
    let spells3 = $("#Spells3").val();
    let armours3 = $("#Armours3").val();
    //row 5
    let inInv3 = $("#InInv3").val();
    // Save input values to local storage
    //row 1
    localStorage["name1"] = name1;
    localStorage["Race1"] = race1;
    localStorage["class1"] = class1;
    localStorage["subclass1"] = subclass1;
    localStorage["hp1"] = hp1;
    //row 2
    localStorage["abil1"] = abil1;
    localStorage["prec1"] = prec1;
    localStorage["stre1"] = stre1;
    localStorage["dext1"] = dext1;
    localStorage["agil1"] = agil1;
    localStorage["cons1"] = cons1;
    localStorage["inte1"] = inte1;
    localStorage["wis1"] = wis1;
    localStorage["pers1"] = pers1;
    localStorage["inti1"] = inti1;
    localStorage["pois1"] = pois1;
    localStorage["fait1"] = fait1;

    localStorage["mod1"] = mod1;
    localStorage["sp1"] = sp1;
    //row 3
    localStorage["align1"] = align1;
    localStorage["spellp1"] = spellp1;
    localStorage["dr1"] = dr1;
    localStorage["cw1"] = cw1;
    localStorage["ibs1"] = ibs1;
    localStorage["ss1"] = ss1;
    localStorage["ss1b"] = ss1b;
    //row 4
    localStorage["weapons1"] = weapons1;
    localStorage["spells1"] = spells1;
    localStorage["armours1"] = armours1;
    localStorage["inInv1"] = inInv1;

    //row 5
    //player 2
 //row 1
    localStorage["name2"] = name2;
    localStorage["Race2"] = race2;
    localStorage["class2"] = class2;
    localStorage["subclass2"] = subclass2;
    localStorage["hp2"] = hp2;
    //row 2
    localStorage["abil2"] = abil2;
    localStorage["prec2"] = prec2;
    localStorage["stre2"] = stre2;
    localStorage["dext2"] = dext2;
    localStorage["agil2"] = agil2;
    localStorage["cons2"] = cons2;
    localStorage["inte2"] = inte2;
    localStorage["wis2"] = wis2;
    localStorage["pers2"] = pers2;
    localStorage["inti2"] = inti2;
    localStorage["pois2"] = pois2;
    localStorage["fait2"] = fait2;

    localStorage["mod2"] = mod2;
    localStorage["sp2"] = sp2;
    //row 3
    localStorage["align2"] = align2;
    localStorage["spellp2"] = spellp2;
    localStorage["dr2"] = dr2;
    localStorage["cw2"] = cw2;
    localStorage["ibs2"] = ibs2;
    localStorage["ss2"] = ss2;
    localStorage["ss2b"] = ss2b;
    //row 4
    localStorage["weapons2"] = weapons2;
    localStorage["spells2"] = spells2;
    localStorage["armours2"] = armours2;
    localStorage["inInv2"] = inInv2;

    //row 5
    //player 3
     //row 1
    localStorage["name3"] = name3;
    localStorage["Race3"] = race3;
    localStorage["class3"] = class3;
    localStorage["subclass3"] = subclass3;
    localStorage["hp3"] = hp3;
    //row 2
    localStorage["abil3"] = abil3;
    localStorage["prec3"] = prec3;
    localStorage["stre3"] = stre3;
    localStorage["dext3"] = dext3;
    localStorage["agil3"] = agil3;
    localStorage["cons3"] = cons3;
    localStorage["inte3"] = inte3;
    localStorage["wis3"] = wis3;
    localStorage["pers3"] = pers3;
    localStorage["inti3"] = inti3;
    localStorage["pois3"] = pois3;
    localStorage["fait3"] = fait3;

    localStorage["mod3"] = mod3;
    localStorage["sp3"] = sp3;
    //row 3
    localStorage["align3"] = align3;
    localStorage["spellp3"] = spellp3;
    localStorage["dr3"] = dr3;
    localStorage["cw3"] = cw3;
    localStorage["ibs3"] = ibs3;
    localStorage["ss3"] = ss3;
    localStorage["ss3b"] = ss3b;
    //row 4
    localStorage["weapons3"] = weapons3;
    localStorage["spells3"] = spells3;
    localStorage["armours3"] = armours3;
    localStorage["inInv3"] = inInv3;

    //row 5
}

function load() {
    //player1
    //row 1
    $("#name1").val(localStorage["name1"]);
    $("#Race1").val(localStorage["Race1"]);
    $("#Class1").val(localStorage["class1"]);
    $("#SubClass1").val(localStorage["subclass1"]);
    $("#HP1").val(localStorage["hp1"]);
    //row 2
    $("#Abil1").val(localStorage["abil1"]);
    $("#Prec1").val(localStorage["prec1"]);
    $("#Stre1").val(localStorage["stre1"]);
    $("#Dext1").val(localStorage["dext1"]);
    $("#Agil1").val(localStorage["agil1"]);
    $("#Cons1").val(localStorage["cons1"]);
    $("#Inte1").val(localStorage["inte1"]);
    $("#Wis1").val(localStorage["wis1"]);
    $("#Pers1").val(localStorage["pers1"]);
    $("#Inti1").val(localStorage["inti1"]);
    $("#Pois1").val(localStorage["pois1"]);
    $("#Fait1").val(localStorage["fait1"]);

    $("#Mod1").val(localStorage["mod1"]);
    $("#SP1").val(localStorage["sp1"]);
    //row 3
    $("#Alignment1").val(localStorage["align1"]);
    $("#SpellP1").val(localStorage["spellp1"]);
    $("#DR1").val(localStorage["dr1"]);
    $("#CW1").val(localStorage["cw1"]);
    $("#IBS1").val(localStorage["ibs1"]);
    $("#SS1").val(localStorage["ss1"]);
    $("#SS1b").val(localStorage["ss1b"]);
    //row 4
    $("#Weapons1").val(localStorage["weapons1"]);
    $("#Spells1").val(localStorage["spells1"]);
    $("#Armours1").val(localStorage["armours1"]);
    //row5
    $("#InInv1").val(localStorage["inInv1"]);
//player2
     $("#name2").val(localStorage["name2"]);
    $("#Race2").val(localStorage["Race2"]);
    $("#Class2").val(localStorage["class2"]);
    $("#SubClass2").val(localStorage["subclass2"]);
    $("#HP2").val(localStorage["hp2"]);
    //row 2
    $("#Abil2").val(localStorage["abil2"]);
    $("#Prec2").val(localStorage["prec2"]);
    $("#Stre2").val(localStorage["stre2"]);
    $("#Dext2").val(localStorage["dext2"]);
    $("#Agil2").val(localStorage["agil2"]);
    $("#Cons2").val(localStorage["cons2"]);
    $("#Inte2").val(localStorage["inte2"]);
    $("#Wis2").val(localStorage["wis2"]);
    $("#Pers2").val(localStorage["pers2"]);
    $("#Inti2").val(localStorage["inti2"]);
    $("#Pois2").val(localStorage["pois2"]);
    $("#Fait2").val(localStorage["fait2"]);

    $("#Mod2").val(localStorage["mod2"]);
    $("#SP2").val(localStorage["sp2"]);
    //row 3
    $("#Alignment2").val(localStorage["align2"]);
    $("#SpellP2").val(localStorage["spellp2"]);
    $("#DR2").val(localStorage["dr2"]);
    $("#CW2").val(localStorage["cw2"]);
    $("#IBS2").val(localStorage["ibs2"]);
    $("#SS2").val(localStorage["ss2"]);
    $("#SS2b").val(localStorage["ss2b"]);
    //row 4
    $("#Weapons2").val(localStorage["weapons2"]);
    $("#Spells2").val(localStorage["spells2"]);
    $("#Armours2").val(localStorage["armours2"]);
    //row5
    $("#InInv2").val(localStorage["inInv2"]);

//player3
     $("#name3").val(localStorage["name3"]);
    $("#Race3").val(localStorage["Race3"]);
    $("#Class3").val(localStorage["class3"]);
    $("#SubClass3").val(localStorage["subclass3"]);
    $("#HP3").val(localStorage["hp3"]);
    //row 2
    $("#Abil3").val(localStorage["abil3"]);
    $("#Prec3").val(localStorage["prec3"]);
    $("#Stre3").val(localStorage["stre3"]);
    $("#Dext3").val(localStorage["dext3"]);
    $("#Agil3").val(localStorage["agil3"]);
    $("#Cons3").val(localStorage["cons3"]);
    $("#Inte3").val(localStorage["inte3"]);
    $("#Wis3").val(localStorage["wis3"]);
    $("#Pers3").val(localStorage["pers3"]);
    $("#Inti3").val(localStorage["inti3"]);
    $("#Pois3").val(localStorage["pois3"]);
    $("#Fait3").val(localStorage["fait3"]);

    $("#Mod3").val(localStorage["mod3"]);
    $("#SP3").val(localStorage["sp3"]);
    //row 3
    $("#Alignment3").val(localStorage["align3"]);
    $("#SpellP3").val(localStorage["spellp3"]);
    $("#DR3").val(localStorage["dr3"]);
    $("#CW3").val(localStorage["cw3"]);
    $("#IBS3").val(localStorage["ibs3"]);
    $("#SS3").val(localStorage["ss3"]);
    $("#SS3b").val(localStorage["ss3b"]);
    //row 4
    $("#Weapons3").val(localStorage["weapons3"]);
    $("#Spells3").val(localStorage["spells3"]);
    $("#Armours3").val(localStorage["armours3"]);
    //row5
    $("#InInv3").val(localStorage["inInv3"]);


}
