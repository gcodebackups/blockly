// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">graficzne środowisko programistyczne</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Zobacz wygenerowany kod JavaScript.</span><span id="linkTooltip">Zapisz i podlinkuj do bloków</span><span id="runTooltip">Uruchom program zdefinowany przez bloki w \\nobszarze roboczym </span><span id="runProgram">Uruchom Program</span><span id="resetProgram">Zresetuj</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logika</span><span id="catLoops">Pętle</span><span id="catMath">Matematyka</span><span id="catText">Tekst</span><span id="catLists">Listy</span><span id="catColour">Kolor</span><span id="catVariables">Zmienne</span><span id="catProcedures">Procedury</span><span id="httpRequestError">Wystąpił problem z zażądaniem.</span><span id="linkAlert">Udpostępnij swoje bloki korzystając z poniższego linku : \n\n\n%1</span><span id="hashError">Przepraszamy, \'%1\' nie odpowiada z jakimkolwiek zapisanym programem.</span><span id="xmlError">Nie można załadować zapisanego pliku. Być może został utworzony za pomocą innej wersji Blockly?</span><span id="listVariable">lista</span><span id="textVariable">tekst</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">idź naprzód</span><span id="Maze_turnLeft">skręć w lewo</span><span id="Maze_turnRight">skręć w prawo</span><span id="Maze_doCode">Wykonaj</span><span id="Maze_elseCode">W innym wypadku</span><span id="Maze_pathAhead">jeśli droga prowadzi prosto</span><span id="Maze_pathLeft">Jeśli ścieżka w lewo</span><span id="Maze_pathRight">Jeśli ścieżka w prawo</span><span id="Maze_repeatUntil">Powtórz</span><span id="Maze_moveForwardTooltip">Porusza gracza do przodu o jedną przestrzeń.</span><span id="Maze_turnTooltip">Obraca gracza w lewo lub prawo o 90 stopni.</span><span id="Maze_ifTooltip">Jeśli istnieje ścieżka jest w określonym \\nkierunku, wykonaj jakieś akcje </span><span id="Maze_ifelseTooltip">Jeśli istnieje ścieżka jest w określonym \\nkierunku, wykonaj pierwszy blok akcji. \\nW innym wypadku wykonaj drugi blok akcji </span><span id="Maze_whileTooltip">Powtarzać załączone kroki, dopóki punkt nie \\nzostanie osiągnięty. </span><span id="Maze_capacity0">Masz %0 pozostałych bloków.</span><span id="Maze_capacity1">Masz %1 pozostały blok.</span><span id="Maze_capacity2">Masz %2 pozostałe(ych) bloki(ów).</span><span id="Maze_nextLevel">Gratulacje! Czy jesteś gotowy, aby przejść do poziomu %1?</span><span id="Maze_finalLevel">Gratulacje! Rozwiązałeś końcowy poziom.</span></div>';
};


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = mazepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Labirynt</span> &nbsp; ';
  for (var i158 = 1; i158 < 11; i158++) {
    output += ' ' + ((i158 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i158) + '</span>' : (i158 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i158) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i158) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i158) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i158) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Ustaw kilka poleceń \'idź naprzód\' jedno po drugi abym doszedł do celu.';
      break;
    case 2:
      output += 'Jaka jest sekwencja kroków, aby iść tą drogą ?';
      break;
    case 3:
      output += 'Komputery mają ograniczoną pamięć. Dotrzyj do końca tej ścieżki za pomocą tylko dwóch bloków. Użyj "powtórz" aby uruchomić blok więcej niż raz.';
      break;
    case 4:
      output += 'Osiągnij cel używając tylko pięciu bloków.';
      break;
    case 5:
      output += 'Pegman musi skręcić w lewo, kiedy nie może iść prosto.';
      break;
    case 6:
      output += 'Blok "if (jeżeli)" wykona określoną czynność tylko kiedy wyrażenie warunkowe jest prawdziwe. Spróbuj pójść w lewo jeśli ścieżka jest w lewo.';
      break;
    case 7:
      output += 'Ten labirynt wygląda na bardziej skomplikowany niż poprzedni, ale wcale tak nie jest.';
      break;
    case 8:
      output += 'Możesz użyć więcej niż jednego bloku "if".';
      break;
    case 9:
      output += 'Bloki "if-else (jeżeli-lub)" bedą wykonywać jedną czynność lub inną czynność.';
      break;
    case 10:
      output += 'Czy dasz radę przejść ten trudny labirynt? Wypróbnuj metodę trzymania się lewą ręką ściany. Tylko dla zaawansowanych programistów!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button class="notext" title="Zobacz wygenerowany kod JavaScript." onclick="BlocklyApps.showCode(this);"><img src="../../media/1x1.gif" class="code icon21"></button><button id="linkButton" class="notext" title="Zapisz i podlinkuj do bloków" onclick="BlocklyStorage.link();"><img src="../../media/1x1.gif" class="link icon21"></button></td><td><button id="runButton" class="primary" onclick="Maze.runButtonClick();" title="Makes the player do what the blocks say."><img src="../../media/1x1.gif" class="run icon21"> Uruchom Program</button><button id="resetButton" class="primary" onclick="Maze.resetButtonClick();" style="display: none" title="Put the player back at the start of the maze."><img src="../../media/1x1.gif" class="stop icon21"> Zresetuj</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData) + '<div id="dialogDone" class="dialogHiddenContent"><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><img src="../../media/1x1.gif" id="pegSpin"><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"></div></div><div id="dialogOneTopBlock" class="dialogHiddenContent"><div>Na tym poziomie, musisz ułożyć razem wszystkie bloki w białym obszarze roboczym.</div><iframe id="iframeOneTopBlock" src=""></iframe>' + apps.ok(null, null, opt_ijData) + '</div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


mazepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return mazepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};