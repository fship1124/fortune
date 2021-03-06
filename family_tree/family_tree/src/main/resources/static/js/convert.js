function daydeal_click() {
    document.frm_nal.hid_yun.value= "no"; //음력 윤달이 아닌 것으로 초기화.

    if(document.frm_nal.rad_gubun[0].checked== true) //음력을 입력한 경우에
    day_deal("um");
    else
    day_deal("yang");
}

function day_deal(pa_umyang) {
    var hae=0, dal=0, nal=0;
    var input_check= true;

    //hae, dal, nal은 실제 년,월,은 아님.
    hae= document.frm_nal.sel_year.selectedIndex*10+ document.frm_nal.sel_syear.selectedIndex;
    dal= document.frm_nal.sel_month.selectedIndex;
    nal= document.frm_nal.sel_day.selectedIndex;

    if(hae>205) {
        alert("2105년 까지만 선택이 가능함"); return;
    }

    if(pa_umyang=="um") {
        input_check= input_check_fun("um", hae,dal,nal);

        if(input_check==false) return; //실제 년월일에 맞게 hae,dal,nal에 수를 더해 줌.

        umyang_print_fun("umum",hae+1900, dal+1,nal+1);
        input_nalhap("um", hae, dal,nal);
    } else {
        input_check= input_check_fun("yang", hae,dal,nal);

        if(input_check==false) return;

        umyang_print_fun("yangyang",hae+1900, dal+1,nal+1);
        input_nalhap("yang", hae, dal,nal);
    }
}

function input_check_fun(in_umyang,in_hae,in_dal,in_nal) {
    var in_theyear= "";
    var input_check= true;

    if(in_umyang=="um") {
        in_theyear= um_days[in_hae]; //해당 년도를 받음.

        if(in_nal== 30) {
            input_error_fun();
            return false;
        }

        if(document.frm_nal.chk_yun.checked== true) {
            if(in_theyear.charAt(in_dal+3)=='9' || in_theyear.charAt(in_dal+3)=='0') {
                alert("선택한 달은 윤달이 아닙니다. 다시 하세요.");
                document.frm_nal.chk_yun.checked= false;
                return false;
            }
            if(in_nal== 29) {
                if(in_theyear.charAt(in_dal+3) !="m") {
                    input_error_fun();
                    return false;
                }
            }

            document.frm_nal.hid_yun.value= "yes";
        } else { //윤달을 체크하지 않은 경우
            for(var i=2; i<=in_dal+2; i++) {
                if(in_theyear.charAt(i)=="n" || in_theyear.charAt(i)=="m")
                in_dal++;
            }
            if(in_nal== 29) {
                if(in_theyear.charAt(in_dal+2) !="0") {
                    input_error_fun();
                    return false;
                }
            }
        }
    } else { //양력인 경우.
        document.frm_nal.chk_yun.checked= false;
        input_check= yun_fun("check", in_hae, in_dal, in_nal);
        if(input_check== false)
        return false;
    }
}

function input_error_fun() {
    alert("날짜 입력이 잘못 되었습니다."+
    "\n\n날이 선택한 달의 마지막 날을 초과해서 입력되었다."+
    "\n\n다시 하세요.");
}

function yun_fun(in_use, pa_year, pa_month, pa_day) {
    malil_bae= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var day_total= 365, real_year=0, nal_hap= 0;
    var yang_hap=0, um_hap=0, to_month=0,to_day=0;

    real_year= pa_year+ 1900;
    pa_day++;
    if(real_year%4== 0) {
        if(real_year%100!=0 || real_year%400==0) {
            malil_bae[1]= 29; day_total= 366;
        }
    }

    if(in_use== "check") { //양력의 날을 점검.
        if(pa_day> malil_bae[pa_month]) {
            input_error_fun();
            return false;
        }
    } else if (in_use== "yang_hap") {
        for(var i=0; i<12; i++) {
            if(pa_month== i) {
                break;
            } else {
                nal_hap+= malil_bae[i];
            }
        }
        nal_hap+= pa_day;
        to_um(pa_year, nal_hap);
    }
    else if(in_use== "yearhap") {
        return day_total;
    } else { //음력을 양력으로
        um_hap= pa_month;

        if(um_hap> day_total) {
            real_year++;
            um_hap-= day_total;
        }

        for(var i=0; i<12; i++) { //만약에 음력 1.1일이 양력 2.28이상이 되는 날엔 오류가 발생함.
            yang_hap+= malil_bae[i];
            if(yang_hap== um_hap) {
                to_month= i+1;
                to_day= malil_bae[i];
                break;
            }
            if(yang_hap> um_hap) {
                yang_hap-= malil_bae[i];
                to_month=i+1;
                to_day= um_hap- yang_hap;
                break;
            }
        } // for

        umyang_print_fun("umyang", real_year, to_month,to_day);
    } // else
}

function umyang_print_fun(in_umyang,in_real_hae, in_dal,in_nal) {
    var ymd_hap="";

    ymd_hap= in_real_hae+"년 ";

    if(document.frm_nal.hid_yun.value=="yes") {
        if(in_umyang=="umum" || in_umyang=="yangum")
        ymd_hap+="윤";
    }

    ymd_hap+=in_dal+"월 ";
    ymd_hap+=in_nal+"일";

    if(in_umyang=="umum" || in_umyang=="yangum") {
        document.frm_nal.txt_um.value= ymd_hap;
    } else {
        var in_hour = document.frm_nal.sel_hour.selectedIndex;
        var in_min = document.frm_nal.sel_min.selectedIndex;
        if (in_dal < 10) in_dal = '0' + in_dal;
        if (in_nal < 10) in_nal = '0' + in_nal;
        if (in_hour < 10) in_hour = '0' + in_hour;
        if (in_min < 10) in_min = '0' + in_min;

        var x = in_real_hae + '-' + in_dal + '-' + in_nal
        var y = in_hour + ':' + in_min;
        startMyungsig(x, y);

        document.frm_nal.txt_yang.value= ymd_hap;
    }
}

function input_nalhap(in_umyang, in_hae,in_dal,in_nal) {
    var um_hap=0;
    var the_year= um_days[in_hae];

    if(in_umyang=="um") {
        um_hap= parseInt(the_year.substring(0,2)); //음력 1.1일의 양력으로 전환한 총합

        for(var i=2; i<the_year.length; i++)
        {
        if(document.frm_nal.chk_yun.checked== true)
        {
        if(i== in_dal+3)
        break;
        }
        else
        {
        if(the_year.charAt(i)=='n' || the_year.charAt(i)=='m')
        in_dal++;
        if(i== in_dal+2)
        break;
        }
        if(the_year.charAt(i)=='9')
        um_hap+= 29;
        else if(the_year.charAt(i)=='0')
        um_hap+= 30;
        else if(the_year.charAt(i)=='n')
        um_hap+= 29;
        else
        um_hap+= 30;
        }
        um_hap+= in_nal;
        yun_fun("yun_is",in_hae, um_hap, 0);
    }
    else {
        yun_fun("yang_hap", in_hae,in_dal,in_nal);
    }
}

function to_um(in_year, in_nalhap) { //양력을 음력으로
    var the_year="";
    var to_hae=0, to_dal=0, to_day=0;
    var um_begin=0, um_hap=0;
    var end_day=0, yang_hap=0, i=0;
    var yun_isor= false;

    the_year= um_days[in_year];
    um_begin= parseInt(the_year.substring(0,2));

    if(in_nalhap< um_begin) {
        to_hae= in_year+ 1900-1;
        in_year--;
        if(in_year< 0) {
        to_day= document.frm_nal.sel_day.selectedIndex+ 1;
        umyang_print_fun("yangum", 1899, 12,to_day);
        return;
        }
        the_year= um_days[in_year];
        yang_hap= yun_fun("yearhap", in_year, 0, 0);
        um_begin= parseInt(the_year.substring(0,2));
        in_nalhap+= yang_hap;
    } else {
        to_hae= in_year+ 1900;
    }

    um_hap= um_begin;
    um_hap--;

    for(i=2; i<the_year.length; i++) {
        if(the_year.charAt(i)=='9')
            end_day= 29;
        else if(the_year.charAt(i)=='0')
            end_day= 30;
        else {
            yun_isor= true;
            if(the_year.charAt(i)=='n') {
                end_day= 29;
            } else {
                end_day= 30;
            }
        }

        um_hap+= end_day;
        if(um_hap== in_nalhap) {
            to_dal= i-1;
            to_day= end_day;
            break;
        }

        if(um_hap> in_nalhap) {
            um_hap-= end_day;
            to_dal= i-1;
            to_day= in_nalhap- um_hap;
            break;
        }
    } //for

    if(yun_isor== true) {
        to_dal--;
        if(the_year.charAt(i)=='n' || the_year.charAt(i)=='m') {
            document.frm_nal.hid_yun.value= "yes";
        }
    }
    umyang_print_fun("yangum", to_hae, to_dal,to_day);
}

function input_start() { // 1900-2100, 앞의 2자리는 음력 1.1의 양력에 해당하는 날의 합. 9=29, 0=30, n=윤29, m=윤30
um_days= new Array("3190990900n0090",
		"50909909090009", "39090990909000", "2990909n0990090", "47009099099009", "35009009909090",
		"259009m90909090", "44909090090909", "33099009090090", "2290n9090900090", "41909909090009",
		"30090990n900900", "49090990990090", "37009099099090", "2600900n9090990", "45090090909090",
		"35909090090909", "2309n0900900909", "42099090900900", "329099090n09000", "51909909900900",
		"39090990990900", "2809009n0990900", "47900909099090", "36090900909099", "240900n09009090",
		"44990909009009", "33099090900900", "2390n9099009000", "41909909909000", "30900990n909009",
		"48009090990909", "37000909099090", "2690090m9090990", "45909009090090", "35990909009009",
		"24099m990090009", "42099099090009", "310099099m90090", "50009909909090", "39009090990909",
		"27009009m990909", "46090090099090", "36909090090909", "250909m90900900", "44990990900090",
		"33099099090090", "2200n9099090900", "41090909909090", "290900909n09090", "48900090990909",
		"37090090909090", "2790909m9009090", "45909900900900", "35990990900900", "24099m990909000",
		"43909099090900", "3109090990n0900", "50900909909090", "39900909090909", "28090900n090909",
		"46090909009090", "36909909009009", "250909n09090009", "44090990909000", "33909099099000",
		"22900n099099009", "40009009909090", "309090090n09090", "48909090090909", "37099090090090",
		"2790990n0900090", "46909909090009", "34090990990090", "230090n90990090", "42009099099090",
		"3100909090n9090", "49090090909099", "38090090090909", "28099090m900909", "47099090900900",
		"36909909900900", "250909n09909000", "44090990990900", "330900990990n00", "51900909099090",
		"40900900909099", "29090900n009090", "49990909009009", "37099090909000", "2790990n9009000",
		"46909909909000", "35900990990900", "23900n090990909", "41000909099090", "3190090900n0990",
		"50909009090099", "38090909009009", "2809909n0090009", "47099099090009", "36009909909009",
		"240090n09909090", "43009090990909", "32009009099090", "2290n0090909090", "40909090090909",
		"290909090n00900", "49990990900090", "38099099090090", "2600990n9090900", "45090909909090",
		"34090090990909", "230900n00990909", "41090090909090", "31909090900n090", "50909909000909",
		"39090990900900", "28909099m909000", "47909099090900", "36090909909900", "250900n09909090",
		"43900909090909", "32090900909090", "2290n0909009090", "41909909009009", "29090990n090009",
		"48090990909000", "38909099099009", "2600090n9099009", "44009009909900", "34909009090909",
		"23090n090090909", "42099090090090", "3190990909000n0", "50909909090090", "39090990990090",
		"28009099m990090", "46009099099090", "35009090909909", "2400900n0909099", "43090090900909",
		"32099090090090", "2290n9090900900", "41909909900900", "300909909n09000", "48090990990900",
		"37090909099090", "2609009m9099090", "45900900909099", "33090900900909", "23909m909009009",
		"42099099009000", "3290990990n0000", "50909909909000", "39900990990900", "28900909m990909",
		"46000909099090", "35900909009909", "240909m09090099", "43090909009009", "33099099009009",
		"21009n099090009", "40009909909009", "290090909n09090", "48009090990909", "36009009099090",
		"2690900n0909090", "45909090090909", "34090990090090", "239090n90900090", "42099099090090",
		"3109090990n0900", "50090909909090", "38090090990909", "27090090n090909", "46090900909090",
		"36909090900909", "240909n09000909", "43090990900900", "33909099090900", "22090n099090900",
		"40900909909900", "299000909n09900", "48900909090909", "37090900909090", "2690990m9009090",
		"45909909009009", "34090990909000", "249090n90990009", "41009099099009", "3000090990n9009",
		"49009090909909", "38009009090909", "27900909m090909", "46099090090090", "36909909090009",
		"250909n09900090", "43090990990090", "32009099099090", "2100n0099099090", "40009090909909",
		"290090090n09909", "48090090900909", "38909090090090", "2890990n0900900", "46909909900900");
}