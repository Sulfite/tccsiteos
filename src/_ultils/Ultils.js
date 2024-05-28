
export const isNUllorEmpty = (value) => {
	if (value === '' || value === null || value === undefined) {
		return true;
	}

	return false;
}

export const formatDate = (date) => {
	
	let newDate;
	newDate = date;
	newDate = ("00" + date.getDate()).slice(-2)+'/'+("00" + (date.getMonth() + 1)).slice(-2)+'/'+date.getFullYear();
	return newDate;
}

export const formatDateInput = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const formatTime = (datetime) => {
    if (datetime !== null) {
        let time = new Date(datetime);
        let formatar = Intl.DateTimeFormat("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return formatar.format(time);
    }
    return "";
}

export const formatDateDB = (datetime) => {
    var date;
    date = datetime;
    date =
        date.getFullYear() +
        "-" +
        ("00" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" + date.getDate()).slice(-2) +
        " " +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2) +
        ":" +
        ("00" + date.getSeconds()).slice(-2);
    return date;
}

export const calculateDateDifference = (date, date2) => {
//     data1 = new Date(date);
//   data2 = new Date(date2);

  let timeDiff = Math.abs(date2.getTime() - date.getTime());
  return Math.round((timeDiff)/(1000*3600*24));
}