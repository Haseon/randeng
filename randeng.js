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
	       [''],
	       ['some'],
	       ['these']
	      ]
	],
	['ProNP', [
	       ['they'],
	       ['those'],
	       ['these'],
	       ['you']
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
	      ['skies']
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
	      ['romantic relationships'],
	      ['marriages']
	      ]
	],
	['V_I', [
	      ['walk'],
	      ['sleep'],
	      ['exist'],
	      ['die'],
	      ['sing'],
	      ['hop'],
	      ['toss and turn'],
	      ['run'],
	      ['fly'],
	      ['transform'],
	      ['conjugate']
	        ]
	],
	['V_T', [
	      ['love'],
	      ['hate'],
	      ['eat'],
	      ['kill'],
	      ['make'],
	      ['need'],
	      ['flirt with'],
	      ['enjoy'],
	      ['are angry with'],
	      ['be in fact'],
	      ['be'],
	      ['transform into'],
	      ['antidifferentiate'],
	      ['study']
	        ]
	],
	['V_v', [
	      ['want'],
	      ['need']
	        ]
	],
	['V_R', [
	      ['think'],
	      ['know'],
	      ['say'],
	      ['mention'],
	      ['believe'],
	      ['deny']
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
            }else if (expr[i] == 'be in fact') {
                res.push('are in fact');
            }else {
                res.push(expr[i]);
            }
        }else if (!(acc_markers.indexOf(expr[i-1])+1)) {
            //console.log(2);
            if (expr[i] == 'they') {
                res.push('them');
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
