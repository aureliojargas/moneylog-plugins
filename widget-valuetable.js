///////////////////////////////////////////////////////////////////////
//// Value Table Widget
//// by Breno Ramalho Lemes 2012-05-14
//
// http://www.br-lemes.net/2012/05/seus-widgets-para-moneylog.html
//
// Copy/paste all this code to the end of your config.js file.

vwlist = { };

function vpopulate() {
	s = '<table>';
	n = 0;
	for (i in this.values) {
		s += '<tr><td>' + i + '</td><td class="number">'
		  +  prettyFloat(this.values[i]) + '</td></tr>';
		n += this.values[i];
	}
	s += '<tr class="vtotals"><td>TOTAL</td><td class="number">'
	  +  prettyFloat(n) + '</span></td></tr>';
	this.content.innerHTML = s + '</table>';
}

function vfloat(strfloat) {
	// Validade the amount value
	amount = strfloat.match(dataPatterns.amountNumber);
	if (amount) {
		amount = amount[1].replace(/\s+/g, ''); // group 1, no blanks

		// Normalize Value
		// Force '.' as internal cents separator, remove other punctuation
		// Ex.: 1.234,56 > 1.234@56 > 1234@56 > 1234.56
		amount = amount.replace(
			dataPatterns.amountCents, '@$1').replace(
			/[.,]/g, '').replace(
			'@', '.');

		// Now we can validate the number (str2float)
		amount = parseFloat(amount);

		// Ops, we don't have a valid number
		if (isNaN(amount)) return 0;
	} else return 0;
	return amount;
}

function vparse(row) {
	fields = row.match(/^#=[ \t]+([a-z]+)[ \t]+([a-z]+)[ \t]+([+\-]?[0-9.,]+)$/)
	if (!fields) return; // ignore invalid data	
	fields.shift();
	fields[2] = vfloat(fields[2]);
	if (!vwlist[fields[0]]) {
		w = new Widget(fields[0], fields[0], fields[0]);
		w.populate = vpopulate;
		w.values = { };
		vwlist[fields[0]] = w;
	}
	vwlist[fields[0]].values[fields[1]] = parseFloat(fields[2]);
}

function vtables() {
	init();
	readData();
	for (i = 0; i < Widget.instances.length; i++)
		vwlist[Widget.instances[i].id] = Widget.instances[i];

	// Split lines
	rows = rawData.split(dataRecordSeparator);

	// Scan data rows
	for (i = 0; i < rows.length; i++) {
		thisRow = rows[i].lstrip();  // Ignore left spacing
		if (thisRow.indexOf(commentChar) === 0 &&
		    thisRow.indexOf('=') === 1) {
			vparse(thisRow);
		}
	}

	for (i in vwlist) vwlist[i].init();
}

window.onload = vtables;
