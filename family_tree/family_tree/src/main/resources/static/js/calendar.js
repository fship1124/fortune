
            // ============================
            // "The Almanac, Korean Eternal Calendar & Chinese New Year" 
            // First Created : 2003-01-21 
            // Last Updated : 2004-05-22
            // by Byon Kwang-Hyon(邊光賢)
            // http://www.AncientArt.co.kr/ 
            // ============================
            
            kan    = new Array('甲','乙','丙','丁','戊','己','庚','辛','壬','癸')	
            zhi    = new Array('子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥')
            week   = new Array('日','月','火','水','木','金','土')
            two    = new Array('甲己','乙庚','丙辛','丁壬','戊癸')
            num    = new Array('零','一','二','三','四','五','六','七','八','九','十','十一')
            han    = new Array('正','二','三','四','五','六','七','八','九','十','十一','十二')
            zol    = new Array('大雪','小寒','立春','驚蟄','淸明','立夏','芒種','小暑','立秋','白露','寒露','立冬')
            khi    = new Array('冬至','大寒','雨水','春分','穀雨','小滿','夏至','大暑','處暑','秋分','霜降','小雪')
            animal = new Array('쥐','소','범','토끼','용','뱀','말','양','잔나비','닭','개','돼지')
        
            zhiTime = new Array(
                        '子初','子正','丑初','丑正','寅初','寅正','卯初','卯正',
                        '辰初','辰正','巳初','巳正','午初','午正','未初','未正',
                        '申初','申正','酉初','酉正','戌初','戌正','亥初','亥正')
            allKanzhi = new Array(
                        '甲子','乙丑','丙寅','丁卯','戊辰','己巳','庚午','辛未','壬申','癸酉',
                        '甲戌','乙亥','丙子','丁丑','戊寅','己卯','庚辰','辛巳','壬午','癸未',
                        '甲申','乙酉','丙戌','丁亥','戊子','己丑','庚寅','辛卯','壬辰','癸巳',
                        '甲午','乙未','丙申','丁酉','戊戌','己亥','庚子','辛丑','壬寅','癸卯',
                        '甲辰','乙巳','丙午','丁未','戊申','己酉','庚戌','辛亥','壬子','癸丑',
                        '甲寅','乙卯','丙辰','丁巳','戊午','己未','庚申','辛酉','壬戌','癸亥')        
            monthDates1 = new Array('31','29','31','30','31','30','31','31','30','31','30','31')            // 366 dates
            monthDates2 = new Array('31','28','31','30','31','30','31','31','30','31','30','31')            // 365 dates
        
            //===== 음력 정월 초하루 일자. 1864: 高宗 元年 上元 甲子.
            asiYear = new Array('18640208','18650127','18660215','18670205','18680125','18690211','18700131', 
                        '18710219','18720209','18730129','18740217','18750206','18760126','18770213','18780202','18790122','18800210',  
                        '18810130','18820218','18830208','18840128','18850215','18860204','18870124','18880212','18890131','18900121', 
                        '18910209','18920130','18930217','18940206','18950126','18960213','18970202','18980122','18990210','19000131', 
                        '19010219','19020208','19030129','19040216','19050204','19060125','19070213','19080202','19090122','19100210', 
                        '19110130','19120218','19130206','19140126','19150214','19160204','19170123','19180211','19190201','19200220', 
                        '19210208','19220128','19230216','19240205','19250124','19260213','19270202','19280123','19290210','19300130', 
                        '19310217','19320206','19330126','19340214','19350204','19360124','19370211','19380131','19390219','19400208', 
                        '19410127','19420215','19430205','19440126','19450213','19460202','19470122','19480210','19490129','19500217', 
                        '19510206','19520127','19530214','19540204','19550124','19560212','19570131','19580219','19590208','19600128', 
                        '19610215','19620205','19630125','19640213','19650202','19660122','19670209','19680130','19690217','19700206', 
                        '19710127','19720215','19730203','19740123','19750211','19760131','19770218','19780207','19790128','19800216', 
                        '19810205','19820125','19830213','19840202','19850220','19860209','19870129','19880218','19890206','19900127', 
                        '19910215','19920204','19930123','19940210','19950131','19960219','19970208','19980128','19990216','20000205', 
                        '20010124','20020212','20030201','20040122','20050209','20060129','20070218','20080207','20090126','20100214', 
                        '20110203','20120123','20130210','20140131','20150219','20160208','20170128','20180216','20190205','20200125', 
                        '20210212','20220201','20230122','20240210','20250129','20260217','20270207','20280127','20290213','20300203', 
                        '20310123','20320211','20330131','20340219','20350208','20360128','20370215','20380204','20390124','20400212')  
        
            // === seasonal memorial dates === 
            chusok  = new Array('20030911','20040928','20051017','20061006','20070925','20080914','20091003','20100922')	// 秋夕
        
            // 24 절기 일자(1941~,1951~,1961~,1971~,1981~,1991~,2001~,2011~,2021~,2031~2040)
            sohan      = new Array('6666666666','6666665666','5666566656','6656665666','5666566655',    
                            '6655665566','5566556655','6655665566','5566555655','5655565556')		// 小寒 0105, 0106;
            dehan      = new Array('0111011101','1100110011','0011001100','1100110011','0011000100',     
                            '0100010001','0001000100','0100010000','0000000000','0000000000')		// 大寒 0120, 0121;
            ipchun     = new Array('4455445544','5544454445','4445444544','4544454445','4445444444',     
                            '4444444444','4444444444','4444444444','3444344434','4434443444')		// 立春 0203, 0204, 0205;
            usu        = new Array('9990999099','9099909999','9999999999','9999999999','9999999999',      
                            '9999998999','8999899989','9989998999','8999899988','9988998899')		// 雨水 0218, 0219, 0220;
            gyongchip  = new Array('6666666666','6666656665','6665666566','6566656665','6665666556',     
                            '6556655665','5665566556','6556655665','5565556555','6555655565')		// 驚蟄 0305, 0306;
            chunbun    = new Array('1111111111','1111111110','1110111011','1011101110','1110111011',     
                            '1001100110','0110011001','1001100110','0110001000','1000100010')		// 春分 0320, 0221;
            chongmyong = new Array('5565556555','5555555555','5555555555','5555555555','5554555455',     
                            '5455545554','5554555455','5455544554','4554455445','5445544554')		// 淸明 0404, 0405;
            gogu       = new Array('0110011001','1001100010','0010001000','1000100910','0010000000',     
                            '0000000000','0000000000','0000000009','0009000900','0900090009')		// 穀雨 0419, 0420, 0421;
            ipha       = new Array('6666666566','6566656665','6665666566','6566656665','5665566556',           
                            '6556655665','5665566555','6555655565','5565556555','6555655565')		// 立夏 0505, 0506;
            soman      = new Array('1221122112','2111211121','1121112111','2111211121','1121111111',     
                            '1111111111','1111111111','1111101110','1110111011','1011101110')		// 小滿 0520, 0521, 0522;
            mangzong   = new Array('6666666666','6666666666','6666666666','6566656665','6665666566',      
                            '6566656665','5665566556','6556655665','5665566555','6555655565')		// 芒種 0605, 0506;
            hazhi      = new Array('2221222122','2122212221','2221122112','2112211221','1221122112',      
                            '2111211121','1121112111','2111211121','1111111111','1111111111')		// 夏至 0621, 0622, 0623;
            sosoe      = new Array('7887788778','8778877887','7787778777','8777877787','7787778777',            
                            '7777777777','7777777777','7777777777','7776777677','7677767776')		// 小暑 0706, 0707, 0708;
            desoe      = new Array('3343334333','4333433333','3333333333','3333333333','3333333233',      
                            '3233323332','3332333233','3233323332','2332233223','3223322332')		// 大暑 0722, 0723, 0724;
            ipchu      = new Array('8888888888','8788878887','8887888788','8788878887','7887788778',      
                            '8778877887','7887788777','8777877787','7787778777','8777877787')		// 立秋 0807, 0808;
            chosoe     = new Array('3443344334','4334433443','3443334333','4333433343','3343334333',      
                            '4333333333','3333333333','3333333333','3332333233','3233323332')		// 處暑 0822, 0823, 0824;
            begro      = new Array('8888888888','8888888888','8887888788','8788878887','8887888788',      
                            '8788877887','7887788778','8778877887','7887778777','8777877787')		// 白露 0907, 0908;
            chubun     = new Array('3443344333','4333433343','3343334333','4333433343','3333333333',      
                            '3333333333','3333333333','3233323332','3332333233','3233323332')		// 秋分 0922, 0923, 0924;
            hanro      = new Array('9998999899','9889988998','8998899889','9889988998','8998889888',      
                            '9888988898','8898889888','9888888888','8888888888','8888888888')		// 寒露 1008, 1009;
            sanggang   = new Array('4443444344','4344434443','4443444334','4334433443','3443344334',      
                            '4334433343','3343334333','4333433343','3343334333','3333333333')		// 霜降 1022, 1023, 1024;
            ipdong     = new Array('8887888788','8788878887','8887888778','8778877887','7887788778',      
                            '8778877887','7787778777','8777877787','7787778777','8777777777')		// 立冬 1107, 1108;
            sosol      = new Array('3332333233','3223322332','2332233223','3223322332','2332223222',      
                            '3222322232','2232223222','3222322222','2222222222','2222222222')		// 小雪 1122, 1123;
            desol      = new Array('7887788778','8778877787','7787778777','8777877787','7787778777',      
                            '7777777777','7777777777','7777777777','7777777677','7677767776')		// 大雪 1206, 1207, 1208;
            dongzhi    = new Array('2232223222','3222322222','2222222222','2222222222','2222222222',      
                            '2122212221','2221222122','2122212221','2221222112','2112211221')		// 冬至 1221, 1222, 1223;
        
            timerRunning = false;
            timerID = null;

                    
        function stopClock() {
            if(timerRunning)
                clearTimeout(timerID)
            timerRunning = false
        }
        
            // === get the memorial dates ===
        
        function getMemoDate() {       
            debugger;
            // === set the memorial dates of every year ===
            md = new Array()
            md['0101'] = " / 新正"     // 서력설날
        
            if(millYear > 1950) {
                md['0301'] = " / 三一"     // 삼일절      
                md['0405'] = " / 植木"     // 식목일
                md['0505'] = " / 兒童"     // 어린이날
                md['0508'] = " / 父母"     // 어버이날 
                md['0515'] = " / 先生"     // 스승의날
                md['0606'] = " / 顯忠"     // 현충일
                md['0717'] = " / 制憲"     // 제헌절
                md['0815'] = " / 光復"     // 광복절
                md['1003'] = " / 開天"     // 개천절
                md['1009'] = " / 한글"     // 한글날
                md['1103'] = " / 學生"     // 학생의날
                md['1225'] = " / 聖誕"     // 예수탄생일
            }
        
            // 위를 md, 아래를 mmd 등으로 구분하고 합칠 수도 있으나 화면효과상 아래것 
            // 하나만 나오게 하고, 또한 미리 정해놓은 년도 이외의 것에 대한 오류를 방지한다.
        
            // === set Asian(or Chinese) New Year === 
            if((millYear >= 1864) && (millYear <= 2040)) { 
                asiNum = eval(millYear - 1864) 
                asiDate = asiYear[asiNum].substring(4) 
                md[asiDate] = " / 설날"                     
            } 
            else  { 
                asiNum = 0 
                asiDate = asiYear[asiNum].substring(4) 
                md[asiDate] = "" 
            }
         
            if((millYear >= 2003) && (millYear <= 2010)) { 
                chusokNum = eval(millYear - 2003) 
                chusokDate = chusok[chusokNum].substring(4) 
                md[chusokDate] = " / 秋夕" 
            } 
            else { 
                chusokNum = 0 
                chusokDate = chusok[chusokNum].substring(4) 
                md[chusokDate] = "" 
            } 
        
            // === only this year ===
            if(millYear == 2004) { md['0526'] = " / 釋誕" }     // 석가탄신일
        
            // === set the 24 seasons dates ===
            if((millYear > 1940) && (millYear < 2041)) { 
                yearNum1 = parseInt((millYear - 1941) / 10 + 1, 10) - 1
                yearNum2 = parseInt((millYear - 1941) % 10 + 1, 10) - 1
        
                sohanDate      = sohan[yearNum1].charAt(yearNum2)
                dehanDate      = dehan[yearNum1].charAt(yearNum2)
                ipchunDate     = ipchun[yearNum1].charAt(yearNum2)
                usuDate        = usu[yearNum1].charAt(yearNum2)
                gyongchipDate  = gyongchip[yearNum1].charAt(yearNum2)
                chunbunDate    = chunbun[yearNum1].charAt(yearNum2)
                chongmyongDate = chongmyong[yearNum1].charAt(yearNum2)
                goguDate       = gogu[yearNum1].charAt(yearNum2)
                iphaDate       = ipha[yearNum1].charAt(yearNum2)
                somanDate      = soman[yearNum1].charAt(yearNum2)
                mangzongDate   = mangzong[yearNum1].charAt(yearNum2)
                hazhiDate      = hazhi[yearNum1].charAt(yearNum2)
                sosoeDate      = sosoe[yearNum1].charAt(yearNum2)
                desoeDate      = desoe[yearNum1].charAt(yearNum2)
                ipchuDate      = ipchu[yearNum1].charAt(yearNum2)
                chosoeDate     = chosoe[yearNum1].charAt(yearNum2)
                begroDate      = begro[yearNum1].charAt(yearNum2)
                chubunDate     = chubun[yearNum1].charAt(yearNum2)
                hanroDate      = hanro[yearNum1].charAt(yearNum2)
                sanggangDate   = sanggang[yearNum1].charAt(yearNum2)
                ipdongDate     = ipdong[yearNum1].charAt(yearNum2)
                sosolDate      = sosol[yearNum1].charAt(yearNum2)
                desolDate      = desol[yearNum1].charAt(yearNum2)
                dongzhiDate    = dongzhi[yearNum1].charAt(yearNum2)
        
                md['010'+sohanDate]      = " / 小寒"
                md['012'+dehanDate]      = " / 大寒"
                md['020'+ipchunDate]     = " / 立春"
                if(usu[yearNum1].charAt(yearNum2)==0) 
                    { md['022'+usuDate] = " / 雨水" }     // 20일인 경우
                else                                  
                    { md['021'+usuDate] = " / 雨水" }     // 18, 19일인 경우
                md['030'+gyongchipDate]  = " / 驚蟄"
                md['032'+chunbunDate]    = " / 春分"
                md['040'+chongmyongDate] = " / 淸明"
                if(gogu[yearNum1].charAt(yearNum2)==9) 
                    { md['041'+goguDate] = " / 穀雨" }     // 19일인 경우
                else                                   
                    { md['042'+goguDate] = " / 穀雨" }     // 20, 21일인 경우
                md['050'+iphaDate]       = " / 立夏"
                md['052'+somanDate]      = " / 小滿"
                md['060'+mangzongDate]   = " / 芒種"
                md['062'+hazhiDate]      = " / 夏至"
                md['070'+sosoeDate]      = " / 小暑"
                md['072'+desoeDate]      = " / 大暑"
                md['080'+ipchuDate]      = " / 立秋"
                md['082'+chosoeDate]     = " / 處暑"
                md['090'+begroDate]      = " / 白露"
                md['092'+chubunDate]     = " / 秋分"
                md['100'+hanroDate]      = " / 寒露"
                md['102'+sanggangDate]   = " / 霜降"
                md['110'+ipdongDate]     = " / 立冬"
                md['112'+sosolDate]      = " / 小雪"
                md['120'+desolDate]      = " / 大雪"
                md['122'+dongzhiDate]    = " / 冬至"
            }
            else    { yearNum1=0; yearNum2=0; sohanDate=0; md[sohanDate]=''; } 
        }
        
            // === get the first days & first date's kanzhi ===
        
        function getFirstDayYear() {
            if(millYear > 0) {
                addDates1 = parseInt((millYear-1) / 4 + 1, 10) - 1  
                addDates2 = parseInt((millYear-1) / 100 + 1, 10) - 1
                addDates3 = parseInt((millYear-1) / 400 + 1, 10) - 1
                        // 전년도까지 계산. Unix, Netscape에서의 NaN을 방지.
                sumYearDates = 365 * (millYear-1) + addDates1 - addDates2 + addDates3	
                        // 평년에 윤년일자 가산.
                sumYearMonths = 12 * (millYear-1) + month		
                        // 원년부터의 총월수는 전년도까지의 월수에 당해년도의 당월까지 합산. 
                addDays = parseInt(sumYearDates % 7, 10)	
                        // 총일수를 일주일씩 나눠 매년 증가되는 요일을 계산. 
        
                startDay = 1		// 서기 1년은 월요일(1)부터 시작. 
                firstDayYear = ((startDay+addDays)>6) ? (startDay+addDays-7) : (startDay+addDays) 
                        // 원년 초하루 요일에 매년 초하루에서의 증가된 요일을 가산.
        
                sumMonthDates = 0		// 올해의 지나간 총일수 합계 초기화.
                for(i=0; i<(month-1); i++) {
                    if(((millYear % 4 == 0) && (millYear % 100 != 0)) || (millYear % 400 == 0)) 
                        { sumMonthDates += eval(monthDates1[i]) }		 
                        // 윤년 당해년도에 전월까지의 총일수.
                    else  { sumMonthDates += eval(monthDates2[i]) }		 
                        // 평년 당해년도에 전월까지의 총일수.
                }
            }
            else if(millYear < 0) {
                addDates1 = parseInt((millYear-1+1) / 4 - 1, 10) + 1  
                addDates2 = parseInt((millYear-1+1) / 100 - 1, 10) + 1
                addDates3 = parseInt((millYear-1+1) / 400 - 1, 10) + 1
                        // 전년도까지에 0년 삭제. Unix, Netscape에서의 NaN을 방지. 
                sumYearDates = 365 * (millYear-1+1) + addDates1 - addDates2 + addDates3	
                sumYearMonths = 12 * (millYear-1+1) + month		
                addDays = 7 + parseInt(sumYearDates % 7, 10)	
        
                startDay = 1   
                firstDayYear = ((startDay+addDays)>6) ? (startDay+addDays-7) : (startDay+addDays) 
                sumMonthDates = 0			
                for(i=0; i<(month-1); i++) {
                    if(((millYear % 4 == 0) && (millYear % 100 != 0)) || (millYear % 400 == 0)) 
                        { sumMonthDates += eval(monthDates1[i]) }		 
                    else  { sumMonthDates += eval(monthDates2[i]) }		 
                }
            }
        }
        
            // === get the Gregorian's months & dates & days ===
        
        function getFirstDayMonth() {
            if     (month == 1)  { monthDates = 31 }
            else if(month == 2) {
                if(((millYear % 4 == 0) && (millYear % 100 != 0)) || (millYear % 400 == 0)) 
                           { monthDates = 29 }
                else		   { monthDates = 28 } 
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
        
            if(((millYear % 4 == 0) && (millYear % 100 != 0)) || (millYear % 400 == 0)) {   
                if     (month == 1)  { firstDayMonth = firstDayYear }
                else if(month == 2)  { firstDayMonth = ((firstDayYear+3)>6) ? (firstDayYear+3)-7 : (firstDayYear+3) }
                else if(month == 3)  { firstDayMonth = ((firstDayYear+4)>6) ? (firstDayYear+4)-7 : (firstDayYear+4) }
                else if(month == 4)  { firstDayMonth = firstDayYear }
                else if(month == 5)  { firstDayMonth = ((firstDayYear+2)>6) ? (firstDayYear+2)-7 : (firstDayYear+2) }
                else if(month == 6)  { firstDayMonth = ((firstDayYear+5)>6) ? (firstDayYear+5)-7 : (firstDayYear+5) }
                else if(month == 7)  { firstDayMonth = firstDayYear }
                else if(month == 8)  { firstDayMonth = ((firstDayYear+3)>6) ? (firstDayYear+3)-7 : (firstDayYear+3) }
                else if(month == 9)  { firstDayMonth = ((firstDayYear+6)>6) ? (firstDayYear+6)-7 : (firstDayYear+6) }
                else if(month == 10) { firstDayMonth = ((firstDayYear+1)>6) ? (firstDayYear+1)-7 : (firstDayYear+1) }
                else if(month == 11) { firstDayMonth = ((firstDayYear+4)>6) ? (firstDayYear+4)-7 : (firstDayYear+4) }
                else if(month == 12) { firstDayMonth = ((firstDayYear+6)>6) ? (firstDayYear+6)-7 : (firstDayYear+6) }
            }
            else { 
                if     (month == 1)  { firstDayMonth = firstDayYear }
                else if(month == 2)  { firstDayMonth = ((firstDayYear+3)>6) ? (firstDayYear+3)-7 : (firstDayYear+3) }
                else if(month == 3)  { firstDayMonth = ((firstDayYear+3)>6) ? (firstDayYear+3)-7 : (firstDayYear+3) }
                else if(month == 4)  { firstDayMonth = ((firstDayYear+6)>6) ? (firstDayYear+6)-7 : (firstDayYear+6) }
                else if(month == 5)  { firstDayMonth = ((firstDayYear+1)>6) ? (firstDayYear+1)-7 : (firstDayYear+1) }
                else if(month == 6)  { firstDayMonth = ((firstDayYear+4)>6) ? (firstDayYear+4)-7 : (firstDayYear+4) }
                else if(month == 7)  { firstDayMonth = ((firstDayYear+6)>6) ? (firstDayYear+6)-7 : (firstDayYear+6) }
                else if(month == 8)  { firstDayMonth = ((firstDayYear+2)>6) ? (firstDayYear+2)-7 : (firstDayYear+2) }
                else if(month == 9)  { firstDayMonth = ((firstDayYear+5)>6) ? (firstDayYear+5)-7 : (firstDayYear+5) }
                else if(month == 10) { firstDayMonth = firstDayYear }
                else if(month == 11) { firstDayMonth = ((firstDayYear+3)>6) ? (firstDayYear+3)-7 : (firstDayYear+3) }
                else if(month == 12) { firstDayMonth = ((firstDayYear+5)>6) ? (firstDayYear+5)-7 : (firstDayYear+5) }
            }
            lastDayMonth1 = firstDayMonth + parseInt(31 % 7, 10) - 1 
            lastDayMonth2 = firstDayMonth + parseInt(30 % 7, 10) - 1 
            lastDayMonth3 = firstDayMonth + parseInt(28 % 7, 10) - 1 
            if     (monthDates == 31) { lastDayMonth = (lastDayMonth1 > 6) ? (lastDayMonth1 - 7) : lastDayMonth1 } 
            else if(monthDates == 30) { lastDayMonth = (lastDayMonth2 > 6) ? (lastDayMonth2 - 7) : lastDayMonth2 } 
            else if(monthDates == 28) { lastDayMonth = lastDayMonth3 } 
            else                      { lastDayMonth = firstDayMonth } 
        }
        
            // === get the Kanzhi & Danki ===
        
        function getAllKanzhi() {
            baseMonthKanzhi = 24
            baseDateKanzhi = 14   
                // 이 간지 번호는 만세력의 원년을 알 수 없기에, 현재 달력의 60 갑자 주기를 기준으로 하여 
                // 계산을 통하여 얻어진 것으로, 원래는 만세력의 원년으로 알려진 甲子年 丙寅月 甲子日 甲子時를 
                // 그레고리 태양력으로 환산한 년도인 -2697년 봄 甲子日부터 계산하여야 한다. 그런데 기원전 
                // 2697년 초의 갑자일은 乙丑月(陰曆으로 丙寅月) 1월 25일로 계산되어진다. 
        
            thisYearKanzhi = parseInt((millYear - 4) % 60, 10)      
            thisYearAnimal = parseInt((millYear - 4) % 12, 10)
                // 서기전 10017년, 9957년, 서기후 4년, 1984년이 갑자년. 
        
            kanzhiNum = ((60+thisYearKanzhi)>59) ? (parseInt((60+thisYearKanzhi)%60,10)) : (60+thisYearKanzhi)          
            aniNum = ((12+thisYearAnimal)>11) ? (parseInt((12+thisYearAnimal)%12,10)) : (12+thisYearAnimal) 
            kanzhi = allKanzhi[kanzhiNum]
            animalZhi = animal[aniNum]
        
            monthKanzhi = 60 + parseInt(sumYearMonths % 60, 10)
                // 기준년부터 당해년도의 당월까지 합산된 총 월수의 간지. 
            monthKanzhiNum = ((baseMonthKanzhi+monthKanzhi)>59) ? (parseInt((baseMonthKanzhi+monthKanzhi)%60,10)) : (baseMonthKanzhi+monthKanzhi) 
                // 당월 간지. 월수 기준 간지에 당월까지의 간지수 합산. 
            dateKanzhi = parseInt((sumYearDates + sumMonthDates + 1) % 60, 10) 
                // 기준년부터 당해년도의 당월, 당일까지 합산된 총 일수의 간지. 
            firstDateKanzhiNum = ((baseDateKanzhi+dateKanzhi)>59) ? (parseInt((baseDateKanzhi+dateKanzhi)%60,10)) : (baseDateKanzhi+dateKanzhi) 
                // 당월 초하루 간지. 일수 기준 간지에 당월 초하루까지의 간지수 합산. 
            todayKanzhiNum = ((firstDateKanzhiNum+dates-1)>59) ? (parseInt((firstDateKanzhiNum+dates-1)%60,10)) : (firstDateKanzhiNum+dates-1) 
                // 당일 간지. 당월 초하루에 당일자를 합산하면서 하루를 뺀다. 
            if(millYear < 0) {
                if(millYear < -2333) { danki = eval(millYear) + 2333 }	
                else                 { danki = eval(millYear) + 2333 + 1 }
            }
            else { danki = eval(millYear) + 2333 }
                // 단기 0년과 서기 0년을 없앤다. 
        }
        
        function showCalendar() {
            current = new Date()
            year = current.getYear()
            months = current.getMonth() 
            dates = current.getDate()
            days = current.getDay()
            hours = current.getHours()
            minutes = current.getMinutes()
            seconds = current.getSeconds()
            years = (year < 2000) ? (1900 + year) : year
        
            month = months + 1
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


            $('#daeun').empty();
            let html = '';
            html += '<CENTER>';
            html += '<H3>대운</H3>';
            html += '<TABLE HEIGHT=380 CELLPADDING=3 border=1>';
            html += '<TR><TH HEIGHT=25 BGCOLOR=ECECDB COLSPAN=7>';
            html += '<FONT FACE=궁서 SIZE=+2>' + millYear + '</FONT>';
            html += '<FONT FACE=굴림>年 </FONT>'; 
            html += '<FONT FACE=궁서 SIZE=+2>' + month + '</FONT>';
            html += '<FONT FACE=굴림>月 </FONT>'; 
            html += '<FONT FACE=궁서 SIZE=+2>' + dates + '</FONT>';
            html += '<FONT FACE=굴림>日 </FONT>   '; 
            html += '<FONT FACE=굴림>( 檀紀 ' + danki + '年 ';
            html += kanzhi + '年 ' + allKanzhi[monthKanzhiNum] + '月 ';
            html += allKanzhi[todayKanzhiNum] + '日 </FONT>';
            html += '<FONT FACE=굴림>' + shiKanzhi + '時 </FONT>)</FONT>';
            html += '</TH></TR><TR>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20><FONT COLOR=0080C0>日</FONT></TH>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20>月</TH>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20>火</TH>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20>水</TH>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20>木</TH>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20>金</TH>';
            html += '<TH BGCOLOR=C2B78D WIDTH=80 HEIGHT=20><FONT COLOR=0080C0>土</FONT></TH>';
        
            col = 0
            html += '<TR>';
            html += '</TABLE>';
            $('#daeun').html(html);

        }
            // === write the kanzhi Time ===
        
        function showKanzhiHour() {
            stopClock()
        
            // === get the independant kanzhis and hours in the current times ===
        
            current = new Date()
            year = current.getYear()
            months = current.getMonth() 
            dates = current.getDate()
            days = current.getDay()
            hours = current.getHours()
            minutes = current.getMinutes()
            seconds = current.getSeconds()
            years = (year < 2000) ? (1900 + year) : year
        
            month = months + 1
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
        
             dateAm = (hours >= 12) ? (' 午後 ') : (' 午前 ')
            dateHour = (hours > 12) ? (hours - 12) : (hours)
            baseTimeKanzhi = 9
            shiKanzhi = allKanzhi[parseInt(((tKNum % 5) * 12 + ((hours+1) / 2)) % 60, 10) ]
            shicho = (parseInt(hours % 2, 10) == 1) ? ('初') : ('正')
            gak = parseInt(minutes / 15 + 1, 10)   // extract '0' minute. 
            bun = parseInt(minutes % 15 + 1, 10)
            bun1 = parseInt((minutes % 15) / 10 + 1, 10)
            bun2 = parseInt((minutes % 15) % 10 + 1, 10)
            minuBun = (bun > 10) ? (num[10] + num[bun2]) : (num[bun2])
        
            // === write the kanzhi Hour Table ===
        
            timeObj = this;
            timeObj.document.write('<BODY BGCOLOR=FAF9F5><CENTER>')
        
            timeObj.document.write('<TABLE WIDTH=600 CELLPADDING=5 border=1>')
            timeObj.document.write('<TR><TH BGCOLOR=EFEFEF>')
            timeObj.document.write('現在 時刻')
            timeObj.document.write('</TH></TR><TR><TH>')
            timeObj.document.write('<B>西紀 ' + years + '年 ' + month + '月 ' + dates + '日 ' + week[days] + '曜日 ') 
            timeObj.document.write(dateAm + dateHour + '時 ' + minutes + '分 ' + seconds + '秒 ')
            timeObj.document.write('</TH></TR><TR><TH>')
            timeObj.document.write('檀紀 ' + yearYon + '年 ' + allKanzhi[kNum] + '年 ')
            timeObj.document.write(allKanzhi[mKNum] + '月 ' + allKanzhi[tKNum] + '日 ') 
            timeObj.document.write(shiKanzhi + shicho + '時 ' + num[gak] + '刻 ' + minuBun + '分') 
            timeObj.document.write('</TH></TR></TABLE>')
            timeObj.document.write('<FONT SIZE=-1>支는 二時間, 初와 正은 各一時間, ')
            timeObj.document.write('一時間은 四刻, 一刻은 十五分, 一分은 陰陽同</FONT><BR><BR>')
        
            timeObj.document.write('<TABLE WIDTH=600 CELLPADDING=5 border=1>')
            timeObj.document.write('<TR><TH COLSPAN=8 BGCOLOR=EFEFEF>')
            timeObj.document.write('十二支時刻解')
            timeObj.document.write('</TH></TR><TR>')
        
            col = 0
            for(i=0; i<24; i++) {
                datePm = ((i - 1 + 12) > 11) && ((i - 1 + 12) < 24) ? (' 午前 ') : (' 午後 ')
                di = parseInt(((i - 1 - 12) + 24) % 12, 10)
                diHan = num[di]
        
                  timeObj.document.write('<TD ALIGN=middle><FONT SIZE=-1>' + zhiTime[i] + '</FONT></TD>')
                timeObj.document.write('<TD ALIGN=middle><FONT SIZE=-1>' + datePm + diHan + '時 </FONT></TD>')
                col++
                if(col == 4) {
                         timeObj.document.write('</TR>')
                    col = 0
                }
            }
        
              timeObj.document.write('</TR>')
            timeObj.document.write('</TABLE>')
            timeObj.document.write('</CENTER>')
            timeObj.document.close()
        
            timerID = setTimeout('showKanzhiHour()', 100)
            timerRunning = true
        }
        
        function showWolgon() {
            stopClock()
        
            timeObj = parent.highframe
            timeObj.document.open()
            timeObj.document.write('<BODY BGCOLOR=FAF9F5><CENTER>')
        
            // === write the Date kanzhi List ===
        
            timeObj.document.write('<B>日辰早見表</B>')
            timeObj.document.write('<TABLE WIDTH=600 CELLPADDING=5 border=1><TR>')
            timeObj.document.write('<TD BGCOLOR=EFEFEF ALIGN=middle><FONT SIZE=-1>日時</FONT></TD>')
            for(i=0; i<12; i++) { 
        
                timeObj.document.write('<TD BGCOLOR=EFEFEF><FONT SIZE=-1>' + zhi[i] + '時</FONT></TD>') 
            }
            timeObj.document.write('</TR>')
            col = 0
            low = 0
            timeObj.document.write('<TR><TD><FONT SIZE=-1>' + two[0] + '日</FONT></TD>')
            for(i=0; i<60; i++) {
                timeObj.document.write('<TD ALIGN=middle><FONT SIZE=-1>' + allKanzhi[i] + '</FONT></TD>')
                col++
                if(col == 12) {
                    timeObj.document.write('</TR>')
                    col = 0
                    low++
                    if(low < 5) { 
                        timeObj.document.write('<TR><TD ALIGN=middle><FONT SIZE=-1>' + two[low] + '日</FONT></TD>') 
                    }
                }
            }
            timeObj.document.write('</TR></TABLE>')
        
            // === write the Month kanzhi List ===
        
            timeObj.document.write('<B>月建早見表</B>')
            timeObj.document.write('<TABLE WIDTH=600 CELLPADDING=5 border=1><TR>')
            timeObj.document.write('<TD BGCOLOR=EFEFEF ALIGN=middle><FONT SIZE=-1>年月</FONT></TD>')
            for(i=0; i<12; i++) { 
                timeObj.document.write('<TD BGCOLOR=EFEFEF ALIGN=middle><FONT SIZE=-1>' + han[i] + '</FONT></TD>') 
            }
            timeObj.document.write('</TR>')
            col = 0
            low = 0
            timeObj.document.write('<TR><TD><FONT SIZE=-1>' + two[0] + '年</FONT></TD>')
            for(i=0; i<60; i++) {
                mk = parseInt((60 + i + 2) % 60, 10)
                timeObj.document.write('<TD ALIGN=middle><FONT SIZE=-1>' + allKanzhi[mk] + '</FONT></TD>')
                col++
                if(col == 12) {
                    timeObj.document.write('</TR>')
                    col = 0
                    low++
                    if(low < 5) { 
                        timeObj.document.write('<TR><TD ALIGN=middle><FONT SIZE=-1>' + two[low] + '年</FONT></TD>') 
                    }
                }
            }
            timeObj.document.write('</TR></TABLE>')
            timeObj.document.write('</CENTER></BODY>')
            timeObj.document.close()
        }
        
        function showText() {
            stopClock()
        
            timeObj = parent.highframe
            timeObj.document.open()
            timeObj.document.write('<BODY BGCOLOR=FAF9F5><CENTER>')
        
            timeObj.document.write('<TABLE WIDTH=600 CELLPADDING=5 border=1>')
            timeObj.document.write('<TR><TH COLSPAN=6 BGCOLOR=EFEFEF>')
            timeObj.document.write('陰曆 二十四 節氣')
            timeObj.document.write('</TH></TR><TR><TD COLSPAN=6><FONT SIZE=-1>')
            timeObj.document.write('歲次, 月建, 日辰 ; 60 甲子<BR>')
            timeObj.document.write('</FONT></TD></TR><TR>')
        
            col = 0
            for(i=1; i<13; i++) {
                mO = parseInt((12 + i + 1) % 12, 10)
        
                timeObj.document.write('<TD><FONT SIZE=-1>陰曆 ' + han[i-1] + '月</FONT></TD>')
                timeObj.document.write('<TD><FONT SIZE=-1>'+zol[mO]+', '+khi[mO]+', '+zhi[mO]+'月</FONT></TD>')
                col++
                if(col == 3) {
                         timeObj.document.write('</TR>')
                    col = 0
                }
            }
        
            timeObj.document.write('<TR><TD COLSPAN=6><FONT SIZE=-1>')
            timeObj.document.write('天干 ; 甲, 乙, 丙, 丁, 戊, 己, 庚, 辛, 壬, 癸<BR>')
            timeObj.document.write('</FONT></TD></TR><TR><TD COLSPAN=6><FONT SIZE=-1>')
            timeObj.document.write('地支 ; 子, 丑, 寅, 卯, 辰, 巳, 午, 未, 申, 酉, 戌, 亥<BR>')
            timeObj.document.write('</FONT></TD></TR><TR><TD COLSPAN=6><FONT SIZE=-1>')
            timeObj.document.write('12 節氣 ; 大雪, 小寒, 立春, 驚蟄, 淸明, 立夏, 芒種, 小暑, 立秋, 白露, 寒露, 立冬<BR>')
            timeObj.document.write('</FONT></TD></TR><TR><TD COLSPAN=6><FONT SIZE=-1>')
            timeObj.document.write('12 中氣 ; 冬至, 大寒, 雨水, 春分, 穀雨, 小滿, 夏至, 大暑, 處暑, 秋分, 霜降, 小雪<BR>')
            timeObj.document.write('</FONT></TD></TR><TR><TD COLSPAN=6><FONT SIZE=-1>')
            timeObj.document.write('冬至點; 子正, 春分點; 卯正, 夏至點; 午正, 秋分點; 酉正<BR>')
            timeObj.document.write('</TD></TR></TABLE>')
        
            timeObj.document.write('</CENTER>')
            timeObj.document.close()
        }
        
        function findKanzhi() {
            stopClock()
            inputKanzhi = document.calendarForm.kanzhiInput.selectedIndex
            putKanzhi = document.calendarForm.kanzhiInput.options[inputKanzhi].value
            putKanzhiList = document.calendarForm.kanzhiInput.selectedIndex
        
            if     (putKanzhiList > 12)  { zhiYear = parseInt(putKanzhiList % 12, 10) }
            else if(putKanzhiList == 12) { zhiYear = 0 }
            else                         { zhiYear = putKanzhiList }
        
            animalZhi = animal[zhiYear]
            baseKanzhi = allKanzhi[putKanzhiList] 
        
            if(putKanzhiList + 4 > 60) { baseYear = parseInt((putKanzhiList + 4) % 60, 10) }
            else                       { baseYear = putKanzhiList + 4 }
        
            // === write the kanzhi calendar table ===
        
            timeObj = this;
            timeObj.document.write('<BODY BGCOLOR=FAF9F5><CENTER>')
            timeObj.document.write('<TABLE WIDTH=600 CELLPADDING=5 border=1>')
            timeObj.document.write('<TR><TH BGCOLOR=EFEFEF>')
            timeObj.document.write('<FONT FACE=굴림 SIZE=+1>')
            timeObj.document.write(baseKanzhi + '年')
            timeObj.document.write('</TH></TR><TR><TD>')
            timeObj.document.write('<TABLE CELLPADDING=5><TR><TD ALIGN=middle>')
            timeObj.document.write('<FONT FACE=Arial SIZE=-1>')
        
            for(i=-135; i<0; i++) { 
                findoutKanzhi1 = baseYear + 60 * i - 1; 
                timeObj.document.write(findoutKanzhi1 + ', ') 
            }
            for(i=0; i<135; i++) { 
                findoutKanzhi2 = baseYear + 60 * i; 
                timeObj.document.write(findoutKanzhi2 + ', ') 
            } 
        
            timeObj.document.write('</FONT></TD></TR></TABLE>')
            timeObj.document.write('</TD></TR></TABLE>')
            timeObj.document.write('<FONT SIZE=-1><B>' + animalZhi + '띠 ; </B> ')
            timeObj.document.write('檢索基準年 : 西曆 ' + baseYear + ' 年 (+- 8000).')
            timeObj.document.write('</FONT></CENTER>')
            timeObj.document.close()
        }
        
        function thisMonth() {
            if(document.calendarForm.yearInput.value == 0) {
                alert(' 0年은 없습니다 ') 
                return
            }
            else {
                putYear = document.calendarForm.yearInput.value 
                putMonth = document.calendarForm.monthInput.selectedIndex 
            }
            stopClock()
            inputMonth(putYear, putMonth)
        }
        
        function preYear() {
            if(document.calendarForm.yearInput.value == 1) {
                document.calendarForm.yearInput.value = -1
                putMonth = document.calendarForm.monthInput.selectedIndex  
                putYear = document.calendarForm.yearInput.value   
            }
            else {  
                putMonth = document.calendarForm.monthInput.selectedIndex 
                putYear = --document.calendarForm.yearInput.value
            } 
            stopClock()
            inputMonth(putYear, putMonth)
        }
        
        function preMonth() {
            if(document.calendarForm.monthInput.selectedIndex < 1) {
                if(document.calendarForm.yearInput.value == 1) {
                    document.calendarForm.monthInput.selectedIndex = 11
                    document.calendarForm.yearInput.value = -1
                    putMonth = document.calendarForm.monthInput.selectedIndex  
                    putYear = document.calendarForm.yearInput.value   
                }
                else {
                    document.calendarForm.monthInput.selectedIndex = 11
                    putMonth = document.calendarForm.monthInput.selectedIndex  
                    putYear = --document.calendarForm.yearInput.value   
                }
            }
            else {  
                putMonth = --document.calendarForm.monthInput.selectedIndex 
                putYear = document.calendarForm.yearInput.value
            } 
            stopClock()
            inputMonth(putYear, putMonth)
        }
        
        function nextMonth() {
            if(document.calendarForm.monthInput.selectedIndex > 10) {       
                if(document.calendarForm.yearInput.value == -1) {
                    document.calendarForm.monthInput.selectedIndex = 0
                    document.calendarForm.yearInput.value = 1
                    putMonth = document.calendarForm.monthInput.selectedIndex  
                    putYear = document.calendarForm.yearInput.value   
                }
                else {
                    document.calendarForm.monthInput.selectedIndex = 0
                    putMonth = document.calendarForm.monthInput.selectedIndex  
                    putYear = ++document.calendarForm.yearInput.value   
                }
            }
            else {
                putMonth = ++document.calendarForm.monthInput.selectedIndex 
                putYear = document.calendarForm.yearInput.value 
            }
            stopClock()
            inputMonth(putYear, putMonth)
        }
        
        function nextYear() {
            if(document.calendarForm.yearInput.value == -1) {
                document.calendarForm.yearInput.value = 1
                putMonth = document.calendarForm.monthInput.selectedIndex  
                putYear = document.calendarForm.yearInput.value   
            }
            else {  
                putMonth = document.calendarForm.monthInput.selectedIndex 
                putYear = ++document.calendarForm.yearInput.value
            } 
            stopClock()
            inputMonth(putYear, putMonth)
        }
        
        function inputMonth(putYear, putMonth) {
            stopClock()
            millYear = parseInt(eval(putYear), 10)
            month = putMonth + 1        
            millMonth = ((month < 10) ? '0' : '') + month 
            millDate = ((dates < 10) ? '0' : '') + dates 
        
            getFirstDayYear()
            getFirstDayMonth()
            getAllKanzhi()
            showKanzhiCalendar()
        }
        
        function curMonth() {
            stopClock()
            current = new Date()
            years = current.getYear()
            months = current.getMonth() 
            dates = current.getDate()
        
            month = months + 1 
            millYear = (years < 2000) ? (1900 + years) : years
            millMonth = ((months + 1 < 10) ? '0' : '') + (months + 1) 
            millDate = ((dates < 10) ? '0' : '') + dates 
        
            getFirstDayYear()
            getFirstDayMonth()
            getAllKanzhi()
            showCalendar()
        }
        
        function startCalendar() {
            stopClock()
            ini = new Date()
            years = ini.getYear()
            iniYear = (years < 2000) ? (1900 + years) : years
            iniMonth = ini.getMonth() 
        
            curMonth()
        }