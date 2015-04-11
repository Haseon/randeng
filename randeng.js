var sentence  = ['S'];
var rules = [
	['S', [
		['DP', 'TP']
	      ]
	],
	['DP', [
	        ['D', 'NP'],
		    ['ProNP']
	       ]
	],
	['D', [
	       ['the'],
	       [],
	       ['some'],
	       ['these'],
	       ['those'],
	       ['their'],
	       ['my'],
	       ['your'],
	       ['his'],
	       ['our'],
	       ['her']
	      ]
	],
	['ProNP', [
	       ['they'],
	       ['you'],
	       ['we']
	       ]
	],
	['NP', [
	      ['N'],
	      ['AP', 'NP']
	       ]
	],
	['AP', [
	      ['A']
	       ]
	],
	['TP', [
	      ['VP'],
	      ['ModalAux', 'VP']
	       ]
	],
	['VP', [
	      ['V_I'],
	      ['V_T', 'DP'],
	      ['V_v', 'to', 'VP'],
	      ['V_R', 'CP'],
	      ['V_cop', 'AP']
	       ]
	],
	['CP', [
	      ['C', 'S'],
	       ]
	],
	['C', [
	      ['that']
	      ]
	],
	['ModalAux', [
	      ['can'],
	      ['will'],
	      ['would'],
	      ['may'],
	      ['should']
	             ]
	],
	['N', [
	      ['boys'],
	      ['girls'],
	      ['robots'],
	      ['cups'],
	      ['escargots'],
	      ['snails'],
	      ['aliens'],
	      ['gods'],
	      ['elephants'],
	      ['desks'],
	      ['ideas'],
	      ['conlangs'],
	      ['conlangers'],
	      ['grammars'],
	      ['computers'],
	      ['languages'],
	      ['chodings'],
	      ['tricks'],
	      ['rules'],
	      ['linguists'],
	      ['programmers'],
	      ['neuroscientists'],
	      ['pianists'],
	      ['cows'],
	      ['dogs'],
	      ['CDs'],
	      ['words'],
	      ['arctic lynxes']
	      ['wolves'],
	      ['pens'],
	      ['horses'],
	      ['dragons'],
	      ['mandarins'],
	      ['skies'],
	      ['romantic relationships'],
	      ['theories'],
	      ['semioticists'],
	      ['phones'],
	      ['phonemes'],
	      ['word-forms'],
	      ['wolves'],
	      ['girls'],
	      ['boys'],
	      ['gosams'],
	      ['soldiers'],
	      ['machines'],
	      ['slices of pizza'],
	      ['lions'],
	      ['chickens'],
	      ['eggs'],
	      ['men'],
	      ['women'],
	      ['clothes'],
	      ['trousers'],
	      ['skirts'],
	      ['jan mute pi toki pona'],
	      ['esperantistoj'],
	      ['songs'],
	      ['allomorphs'],
	      ['notes'],
	      ['dishes'],
	      ['soba noodles'],
	      ['FSMs'],
	      ['programs'],
	      ['AIs'],
	      ['Jimi Hendrixes']
	      ['groups of Bachs'],
	      ['groups of Aristotles'],
	      ['planets'],
	      ['trees'],
	      ['woods'],
	      ['lumps of cheese'],
	      ['cups of water'],
	      ['wizards'],
	      ['beauties'],
	      ['man candies'],
	      ['hunks of bread'],
	      ['game companies'],
	      ['factories'],
	      ['chemicals'],
	      ['toxics'],
	      ['shampoos'],
	      ['socks'],
	      ['foods'],
	      ['bottles of water'],
	      ['guitars'],
	      ['queens'],
	      ['kings'],
	      ['prayers'],
	      ['doors'],
	      ['angels'],
	      ['devils'],
	      ['ghosts'],
	      ['games'],
	      ['flies'],
	      ['fruits'],
	      ['strawberries'],
	      ['apples'],
	      ['books'],
	      ['articles'],
	      ['dictionaries'],
	      ['editors'],
	      ['chefs'],
	      ['mice'],
	      ['airplanes'],
	      ['cars'],
	      ['bottles', 'of', 'juice'],
	      ['theorems'],
	      ['lawyers']
	      ]
	],
	['A', [
	      ['happy'],
	      ['dirty'],
	      ['bad'],
	      ['nice'],
	      ['vicious'],
	      ['autonomous'],
	      ['dedicated'],
	      ['korean'],
	      ['stellar'],
	      ['sober'],
	      ['drunk'],
	      ['conlanging'],
	      ['lyrical'],
	      ['sexy'],
	      ['hot'],
	      ['cold'],
	      ['cool'],
	      ['smart'],
	      ['intellectual'],
	      ['computational'],
	      ['green'],
	      ['sad'],
	      ['learned'],
	      ['international'],
	      ['clumsy'],
	      ['postmodern'],
	      ['meaningless'],
	      ['colorless'],
	      ['dead'],
	      ['magical'],
	      ['scientific'],
	      ['endless'],
	      ['boring'],
	      ['irrational'],
	      ['romantic'],
	      ['married'],
	      ['attractive'],
	      ['infinitive'],
	      ['limited'],
	      ['mathematical'],
	      ['scary'],
	      ['tremendous'],
	      ['delicate'],
	      ['elegant'],
	      ['red'],
	      ['high'],
	      ['well-formed'],
	      ['ill-formed'],
	      ['nice'],
	      ['down-to-earth'],
	      ['fun'],
	      ['tiny'],
	      ['holy'],
	      ['pale'],
	      ['polluted'],
	      ['endangered'],
	      ['last'],
	      ['alive'],
	      ['wet'],
	      ['dry'],
	      ['bitter'],
	      ['sweet'],
	      ['tender'],
	      ['gentle'],
	      ['mighty'],
	      ['problematic'],
	      ['unusual']
	      ]
	],
	['V_I', [
	      ['walk'],
	      ['sleep'],
	      ['exist'],
	      ['die'],
	      ['sing'],
	      ['jump'],
	      ['toss and turn'],
	      ['run'],
	      ['fly'],
	      ['transform'],
	      ['conjugate'],
	      ['grow'],
	      ['are', 'human'],
	      ['live', 'in', 'Mars'],
	      ['survive'],
	      ['work', 'in', 'Sundaegukbapjip'],
	      ['go', 'to', 'jail'],
	      ['go', 'to', 'church'],
	      ['go', 'to', 'school'],
	      ['dance'],
	      ['collapse'],
	      ['sing']
	        ]
	],
	['V_T', [
	      ['love'],
	      ['hate'],
	      ['eat'],
	      ['kill'],
	      ['make'],
	      ['need'],
	      ['flirt', 'with'],
	      ['enjoy'],
	      ['be', 'angry', 'with'],
	      ['be', 'in', 'fact'],
	      ['be'],
	      ['transform', 'into'],
	      ['antidifferentiate'],
	      ['study'],
	      ['write'],
	      ['eat'],
	      ['purify'],
	      ['make'],
	      ['create'],
	      ['learn'],
	      ['touch'],
	      ['feel'],
	      ['understand'],
	      ['like'],
	      ['affect'],
	      ['rule'],
	      ['shake'],
	      ['wash'],
	      ['own'],
	      ['fight', 'against'],
	      ['drink'],
	      ['download'],
	      ['debug'],
	      ['memorize'],
	      ['program'],
	      ['cut'].
	      ['photograph'],
	      ['record'],
	      ['draw'],
	      ['pluralize'],
	      ['nasalize'],
	      ['optimize'],
	      ['upload'],
	      ['make', 'sandwiches', 'out', 'of'],
	      ['get'],
	      ['take'],
	      ['palatalize'],
	      ['look'],
	      ['watch'],
	      ['play', 'with'],
	      ['play', 'chess', 'with'],
	      ['ruin'],
	      ['dance', 'with'],
	      ['harvest']
	        ]
	],
	['V_v', [
	      ['want'],
	      ['need'],
	      ['try'],
	      ['are', 'pleased'],
	      ['are', 'going']
	        ]
	],
	['V_R', [
	      ['think'],
	      ['know'],
	      ['say'],
	      ['mention'],
	      ['believe'],
	      ['deny'],
	      ['imagine'],
	      ['hypothesize'],
	      ['propose'],
	      ['state'],
	      ['guess'],
	      ['prove']
	        ]
	],
	['V_cop', [
	      ['be']
	          ]
	]
];

function apply_rule(rule, expr) {
	var lhs = rule[0];
	var rhss = rule[1];
	var res = [];
	for(var i=0; i<expr.length; i++) {
		if (lhs == expr[i]) {
			rhs = rhss[Math.floor(Math.random()*rhss.length)];
			res = res.concat(rhs);
		}else {
			res.push(expr[i]);
		}
	}
	return res;
}

function apply_rules(rules, expr) {
	var res = expr;
	for(var i=0; i<rules.length; i++) {
		res = apply_rule(rules[i], res);
	}
	return res;
}

function eliminate_nonterminal(rules, expr) {
	var res = expr;
	res = apply_rules(rules, res);
	if (res.toString() == expr.toString()) {
		return res;
	}else {
		return eliminate_nonterminal(rules, res);
	}
}

function solder_agreements(expr) {
    var res = [expr[0]];
    var nonfin_markers = ['to'];
    var acc_markers = [];
    for(var i=0; i<rules.length; i++) {
        if (rules[i][0] == 'ModalAux') {
            nonfin_markers = nonfin_markers.concat.apply(nonfin_markers, rules[i][1]);
        }
    }
    for(var i=0; i<rules.length; i++) {
        if (rules[i][0] == 'V_T') {
            acc_markers = acc_markers.concat.apply(acc_markers, rules[i][1]);
        }
    }
    for(var i=1; i<expr.length; i++) { 
        if (!(nonfin_markers.indexOf(expr[i-1])+1) ) {
            //console.log(1)
            if (expr[i] == 'be') {
                res.push('are');
            }else {
                res.push(expr[i]);
            }
        }else if (expr[i-1] != 'that')) {
            //console.log(2);
            if (expr[i] == 'they') {
                res.push('them');
            }else if (expr[i] == 'we') {
            	res.push('us');
            }else {
                res.push(expr[i]);
            }
        }else {
            //console.log(3);
            res.push(expr[i]);
        }
    }
    return res;
}

handler.chat(solder_agreements(eliminate_nonterminal(rules, sentence)).join(' ')+'.');
