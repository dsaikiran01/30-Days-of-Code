function processData(input) {
        var date = input.split(" ");
        let retDay = parseInt(date[0]);
        let retMon = parseInt(date[1]);
        let temp = date[2].split("\n");
        let retYr = parseInt(temp[0]);
        let dueDay = parseInt(temp[1]);
        let dueMon = parseInt(date[3]);
        let dueYr = parseInt(date[4]);

        let fine = 0;

        if (dueYr == retYr) {
                if (dueMon == retMon) {
                        if (retDay > dueDay) {
                                fine = 15 * (retDay - dueDay);
                        }
                } else if (retMon > dueMon) {
                        fine = 500 * (retMon - dueMon);
                }
        } else if (retYr > dueYr) {
                fine = 10000;
        }
        console.log(fine);
}
