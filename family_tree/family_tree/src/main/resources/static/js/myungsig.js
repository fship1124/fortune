var sex_type = 1;

function startMyungsig (birthday, time) {
    console.log("startMyungsig");
    console.log(birthday);
    console.log(time);

    stopClock();
    
    // 1984-04-28
    years = parseInt(birthday.substring(0, 4));
    month = parseInt(birthday.substring(5, 7));
    months = month - 1;
    dates = parseInt(birthday.substring(8, 10));
    
    millYear = years;
    millMonth = ((months + 1 < 10) ? '0' : '') + (months + 1) ;
    millDate = ((dates < 10) ? '0' : '') + dates ;
    
    // 시간 06:00
    millHours = parseInt(time.substring(0, 2));
    millMinutes = parseInt(time.substring(3, 5));

    getFirstDayYear()
    getFirstDayMonth()
    getAllKanzhi()
    showMyungsig(millHours, millMinutes)
}

function showMyungsig(millHours, millMinutes) {
    //current = new Date()
    
    //year = current.getYear()
    //months = current.getMonth() 
    //dates = current.getDate(); // todo
    //days = current.getDay();    // todo
    hours = millHours;
    minutes = millMinutes;
    //seconds = current.getSeconds()
    //years = (year < 2000) ? (1900 + year) : year

    //month = months + 1
    yon1 = parseInt((years+2333) / 1000, 10)
    yon2 = parseInt((years+2333) % 1000 / 100, 10)
    yon3 = parseInt((years+2333) % 100 / 10, 10)
    yon4 = parseInt((years+2333) % 10, 10)
    yearYon = num[yon1] + num[yon2] + num[yon3] + num[yon4] 

    addDates1 = parseInt((years-1) / 4 + 1, 10) - 1  
    addDates2 = parseInt((years-1) / 100 + 1, 10) - 1
    addDates3 = parseInt((years-1) / 400 + 1, 10) - 1
    sYDates = 365 * (years-1) + addDates1 - addDates2 + addDates3	
    sMDates = 0	
    for(i=0; i<months; i++) {
        if(((years % 4 == 0) && (years % 100 != 0)) || (years % 400 == 0)) 
            { sMDates += eval(monthDates1[i]) }		 
        else  { sMDates += eval(monthDates2[i]) }		 
    }

    tYKanzhi = parseInt((years-4) % 60, 10)      
    kNum = ((60+tYKanzhi)>59) ? (parseInt((60+tYKanzhi)%60,10)) : (60+tYKanzhi)          
    mKanzhi = 60 + parseInt((12 * (years-1) + month) % 60, 10)
    mKNum = ((24+mKanzhi)>59) ? (parseInt((24+mKanzhi)%60,10)) : (24+mKanzhi) 
    dKanzhi = parseInt((sYDates + sMDates + 1) % 60, 10) 
    fDKNum = ((14+dKanzhi)>59) ? (parseInt((14+dKanzhi)%60,10)) : (14+dKanzhi) 
    tKNum = ((fDKNum+dates-1)>59) ? (parseInt((fDKNum+dates-1)%60,10)) : (fDKNum+dates-1) 

    dateAm = (hours >= 12) ? (' 午後 ') : (' 午前 ');
    dateHour = (hours > 12) ? (hours - 12) : (hours);
    baseTimeKanzhi = 9;
    shiKanzhi = allKanzhi[parseInt(((tKNum % 5) * 12 + ((hours+1) / 2)) % 60, 10) ];


    $("#kan_year").text(kanzhi.substr(0, 1));
    $("#zhi_year").text(kanzhi.substr(1, 1));

    $("#kan_month").text(allKanzhi[monthKanzhiNum].substr(0, 1));
    $("#zhi_month").text(allKanzhi[monthKanzhiNum].substr(1, 1));

    $("#kan_date").text(allKanzhi[todayKanzhiNum].substr(0, 1));
    $("#zhi_date").text(allKanzhi[todayKanzhiNum].substr(1, 1));

    $("#kan_hour").text(shiKanzhi.substr(0, 1));
    $("#zhi_hour").text(shiKanzhi.substr(1, 1));

    $('#saju').empty();
    let html = '';
    html += '<TABLE HEIGHT=80 CELLPADDING=3 border=1>';
    html += '<TR><TH HEIGHT=20 COLSPAN=7>';
    html += '<FONT FACE=궁서 SIZE=+2>' + millYear + '</FONT>';
    html += '<FONT FACE=굴림>年 </FONT>'; 
    html += '<FONT FACE=궁서 SIZE=+2>' + millMonth + '</FONT>';
    html += '<FONT FACE=굴림>月 </FONT>'; 
    html += '<FONT FACE=궁서 SIZE=+2>' + millDate + '</FONT>';
    html += '<FONT FACE=굴림>日 </FONT>   '; 
    html += '<FONT FACE=굴림>( 檀紀 ' + danki + '年 ';
    html += kanzhi + '年 ' + allKanzhi[monthKanzhiNum] + '月 ';
    html += allKanzhi[todayKanzhiNum] + '日 </FONT>';
    html += '<FONT FACE=굴림>' + shiKanzhi + '時 </FONT>)</FONT>';
    html += '<TR>';
    html += '</TABLE>';
    $('#saju').html(html);


    /** 대운
     * 순행 : 양남 음녀
     * 역행 : 음남 양녀
     * 
     * */
    let flag_sun = false;
    let year_kan = kanzhi.substring(0, 1);
    let year_ghi = kanzhi.substring(1, 2);
    let yangkan = '甲丙戊庚壬';
    if (yangkan.includes(year_kan) && sex_type == 1) {
        // 양간양남
        flag_sun = true;
    } else if (!yangkan.includes(year_kan) && sex_type == 2) {
        // 음간음녀
        flag_sun = true;
    }

    /** 대운수 계산
     *  계산법
     *  양력기준 
     *  #대운 순행 : 태어난 날짜부터 다가올 절기까지 일수 계산
     *  대운기준시각은 출생일시와 절기 사이의 날짜를 세어서 정합니다. 그런데 출생연도의 간지가 양간이면 양남양녀이고 음간이면 음남음녀로서 양남음녀이면 순행이라 하여 출생일시로부터 다음 절기까지의 기간을 세는 것이고, 음남양녀라면 역행으로 출생일시 전의 절기까지의 기간을 세는 것입니다.
     *  
     *  1 태어난 일, 태어난 월 절기 일
     *  2 (태어난 월 절기 일 - 태어난일) 1 < 이상이면 5로 점핑
     *  3 현재 월의 마지막 일수 계산
     *  4 2번 + 절기 일
     *  5 나누기 3
     *  #대운 역행 : 태어난 날짜부터 이미 지나온 절기까지 일수 계산 
     *  1 태어난 일, 태어난 월 절기 일
     *  2 (태어난 일 - 태어난 월 절기 일) 1 < 이상이면 5로 점핑
     *  3 이전 월의 마지막 일수 계산
     *  3-1 (이전 월의 마지막 일수 - 이전 월 절기)
     *  4 3-1 + 태어난 일
     *  5 나누기 3
     * 
     * ? 소수점 반올림보다는 한자리수 표시?
     * */

    // === set the 24 seasons dates ===
    let daeunsu = 0;
    if((millYear > 1940) && (millYear < 2041)) { 
        yearNum1 = parseInt((millYear - 1941) / 10 + 1, 10) - 1
        yearNum2 = parseInt((millYear - 1941) % 10 + 1, 10) - 1

        sohanDate      = sohan[yearNum1].charAt(yearNum2);  //
        ipchunDate     = ipchun[yearNum1].charAt(yearNum2);  //
        gyongchipDate  = gyongchip[yearNum1].charAt(yearNum2);  //
        chongmyongDate = chongmyong[yearNum1].charAt(yearNum2);  //       
        iphaDate       = ipha[yearNum1].charAt(yearNum2);  //
        mangzongDate   = mangzong[yearNum1].charAt(yearNum2);  //
        sosoeDate      = sosoe[yearNum1].charAt(yearNum2);  //       
        ipchuDate      = ipchu[yearNum1].charAt(yearNum2);  //
        begroDate      = begro[yearNum1].charAt(yearNum2);  //
        hanroDate      = hanro[yearNum1].charAt(yearNum2);  //
        ipdongDate     = ipdong[yearNum1].charAt(yearNum2);  //
        desolDate      = desol[yearNum1].charAt(yearNum2);  //
        
        // 절기 
        let seasons24 = new Array(sohanDate,ipchunDate,gyongchipDate,chongmyongDate,iphaDate,mangzongDate,
            sosoeDate,ipchuDate,begroDate,hanroDate,ipdongDate,desolDate);
        console.log(seasons24);

        // month lastday 
        let monthDates = getMonthDates(month);

        // 1 대운 순행/역행 분기
        
        if (flag_sun) { // 순행
            let julgi = seasons24[months];
            let monthCount = monthDates - millDate;
            let julgiCount = parseInt(monthCount) + parseInt(julgi);
            daeunsu = parseInt(parseInt(julgiCount) / 3);

            console.log("절기일 : " + julgi);
        } else {    // 역행
            let julgi = seasons24[month];
            let monthCount = millDate - monthDates;
            if (monthCount < 1) {
                monthDates = getMonthDates(month -1);
                let julgiCount = monthDates - seasons24[months -1];
                daeunsu = parseInt(parseInt(julgiCount) / 3);
            } else {
                daeunsu = parseInt(parseInt(monthCount) / 3);
            }
        }
    }

    $('#daeun').empty();
    html = '';
    html += '<TABLE HEIGHT=80 CELLPADDING=3 border=1>';
    html += '<TR>';
    for (let i = 10; i > 0; i--) {
        html += '<TD>';
        let v = flag_sun ? monthKanzhiNum + i : monthKanzhiNum - i;

        if (v < 0) {
            v += 60;
        } else if (v > 59) {
            v -= 60;
        }

        html += allKanzhi[v];
        html += '</TD>';
    }
    html += '</TR>';

    html += '<TR>';
    for (let i = 9; i >= 0; i--) {
        html += '<TD>';
        html += daeunsu + (i * 10);
        html += '</TD>';
    }
    html += '</TR>';
    html += '</TABLE>';
    $('#daeun').html(html);
}

function getMonthDates(month) {       
    let monthDates = 0;

    if (month == 1)  {
        monthDates = 31
    } else if (month == 2) {
        if (((millYear % 4 == 0) && (millYear % 100 != 0)) || (millYear % 400 == 0)) {
            monthDates = 29 
        } else { monthDates = 28 } 
    }
    else if(month == 3)  { monthDates = 31 }
    else if(month == 4)  { monthDates = 30 }
    else if(month == 5)  { monthDates = 31 }
    else if(month == 6)  { monthDates = 30 }
    else if(month == 7)  { monthDates = 31 }
    else if(month == 8)  { monthDates = 31 }
    else if(month == 9)  { monthDates = 30 }
    else if(month == 10) { monthDates = 31 }
    else if(month == 11) { monthDates = 30 }
    else if(month == 12) { monthDates = 31 }

    return monthDates;
}