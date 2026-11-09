let currentLang = 'ko';
    const I18N = {
      ko: {
        appTitle:'Short Track Archive',
        appSubtitle:'월드컵 · 월드투어 · 세계선수권 · 올림픽 쇼트트랙 포디움 아카이브', todayVisitors:'오늘 방문자 수', totalVisitors:'총 방문자 수',
        navTitle:'바로가기', navHome:'홈', navSeasons:'시즌', navCompetitions:'대회', navAthletes:'선수', navRecordSearch:'기록 검색', navSearch:'검색', navHelp:'도움말', navAcademy:'쇼트트랙 아카데미', navSkaterRank:'선수별 종합 순위', navCompare:'선수 비교', navCountryRank:'국가별 메달 순위', navEventRank:'종목별 선수 순위', navHallOfFame:'명예의 전당', navCardMaker:'선수 카드 만들기', navHeatTool:'조편성 계산기', navQuiz:'랜덤 퀴즈',
        navReport:'오류 신고 및 문의', navRecordRank:'종목별 기록 순위', navLapRank:'랩타임 순위', navRecords:'각종 기록',
        viewAuto:'자동', viewMobile:'모바일', viewDesktop:'데스크탑', mobileSettings:'설정',
        bottomHome:'홈', bottomSeason:'시즌', bottomCompetition:'대회', bottomAthlete:'선수', bottomSearch:'검색', bottomRank:'랭킹', bottomRecords:'기록', bottomMore:'더보기',
        brandHeroDesc:'기록과 선수, 시즌과 대회의 흐름을 한곳에서 탐색하는 쇼트트랙 데이터 아카이브입니다.', brandHeroCta:'아카이브 검색',
        mobileHomeKicker:'Mobile Archive', mobileHomeTitle:'검색부터 빠르게 시작하세요', mobileHomeDesc:'선수, 국가, 대회, 종목을 한 번에 찾고 자주 보는 기록으로 바로 이동합니다.', mobileSearchPlaceholder:'선수·국가·대회 검색',
        mobileQuickSkaterRank:'종합 랭킹', mobileQuickSkaterRankDesc:'선수별 점수·메달', mobileQuickRecordRank:'세계 기록', mobileQuickRecordRankDesc:'종목별 기록 순위', mobileQuickEventRank:'종목 랭킹', mobileQuickEventRankDesc:'거리별 선수 순위', mobileQuickLapRank:'랩타임 순위', mobileQuickLapRankDesc:'빠른 랩 기록 확인', mobileQuickHall:'명예의 전당', mobileQuickHallDesc:'주요 기록 카드',
        exploreTitle:'아카이브 탐색', exploreDesc:'검색하지 않아도 시즌, 대회, 선수 목록에서 기존 상세 페이지로 바로 이동할 수 있습니다.',
        exploreBySeason:'시즌으로 보기', exploreBySeasonDesc:'특정 시즌의 대회와 결과 탐색', exploreByCompetition:'대회로 보기', exploreByCompetitionDesc:'올림픽·세계선수권·월드컵·월드투어 탐색', exploreByAthlete:'선수로 보기', exploreByAthleteDesc:'선수의 시즌별 성적과 출전 기록 탐색',
        todayFeatureTitle:'오늘의 추천', todayFeatureDesc:'검색하지 않아도 바로 둘러볼 수 있는 빠른 메뉴입니다.', todaySkater:'오늘의 선수', todaySkaterLoading:'선수 데이터 준비 중', todaySkaterLoadingMeta:'데이터를 불러오면 오늘의 선수가 표시됩니다.', viewTodaySkater:'오늘의 선수 보기', randomSkater:'랜덤 선수 보기', quickPage:'빠른 탐색', quickCountrySeason:'아카이브 바로 보기', quickPageDesc:'시즌·대회·선수 목록과 판정/규칙 안내로 바로 이동합니다.', popularCountryPage:'대표 국가 페이지', latestSeasonPage:'최신 시즌 페이지', rulesGuide:'판정/규칙',
        seasonDirectoryTitle:'시즌 목록', seasonDirectoryDesc:'데이터에 존재하는 시즌만 최신순으로 정리합니다.', competitionDirectoryTitle:'대회 목록', competitionDirectoryDesc:'시즌과 대회 종류로 기존 대회 상세 페이지를 찾습니다.', athleteDirectoryTitle:'선수 목록', athleteDirectoryDesc:'이름, 국가, 성별, 수록 기록 시즌으로 선수 상세 페이지를 찾습니다.',
        latestSeason:'최신 시즌', recentCompetitions:'최근 개최 대회', recentPlayers:'최근 본 선수', viewSeason:'시즌 상세 보기', viewCompetition:'대회 결과 보기', viewAthlete:'선수 상세 보기', resetAll:'전체 초기화', filterSeason:'시즌 선택', filterCompetitionType:'대회 종류 선택', filterCity:'개최 도시/국가', filterCountry:'국가', filterGender:'성별', filterActiveSeason:'수록 기록 시즌', quickSearch:'빠른 검색', seasonDirectoryKeyword:'시즌·대회 종류 빠른 검색', allTypes:'전체 종류', allCountries:'전체 국가', allCities:'전체 도시/국가', allLetters:'전체 색인', showMore:'더보기', collapse:'접기', dataNone:'표시할 데이터가 없습니다.',
        reportTitle:'오류 신고 및 문의', close:'닫기', cancel:'취소', submit:'제출',
        reportPlaceholder:'오류 내용이나 문의 내용을 입력해 주세요.', searchPlaceholder:'선수명, 국가, 대회명, 종목 검색', searchSort:'정렬', sortRecent:'최신순', sortOldest:'오래된순', sortMedal:'메달순', sortEvent:'종목순', sortName:'선수명순', relayOnly:'계주만', goldOnly:'금메달만', excludeWorldsOverall:'세계선수권 종합 제외', exclude3000:'3000m 제외', helpTitle:'용어·데이터 기준 도움말', helpDesc:'순위와 기록을 해석할 때 참고할 기준입니다.', helpWorldsOverallTitle:'세계선수권 종합', helpWorldsOverallText:'세계선수권 Overall 포디움입니다. 선수별 종합 순위에서는 기본적으로 개인 종목 메달과 별도 집계합니다.', help3000Title:'3000m S.F.', help3000Text:'세계선수권 Super Final 성격의 3000m 개인전 기록입니다. 기본 순위에서는 제외하거나 별도 안내합니다.', helpRelayTitle:'계주 데이터', helpRelayText:'계주 멤버 데이터는 올림픽 중심으로 정리되어 있습니다. 세계선수권·월드컵 계주는 불완전할 수 있습니다.', helpScoreTitle:'점수 계산', helpScoreText:'종합 순위는 점수를 바꾼 뒤 ‘설정’을 눌러 적용합니다. 선수 비교 점수는 입력 즉시 반영됩니다. 공식 ISU 순위가 아닌 아카이브 비교 점수입니다.', playerTimelineTitle:'커리어 타임라인', playerTimelineDesc:'선수의 메달 기록을 시즌 역순으로 보여 줍니다.', dataLoaded:'데이터 로드 완료', reportThisRow:'오류 신고',
        skaterRankTitle:'선수별 종합 순위', countryRankTitle:'국가별 메달 순위', eventRankTitle:'종목별 선수 순위',
        skaterRankDesc:'올림픽 / 세계선수권 / 월드컵·월드투어 금·은·동을 나누고 마지막에 총합을 표시합니다.',
        countryRankDesc:'medals 시트 기준입니다. 계주가 선수 수만큼 중복 집계되지 않습니다. 상위 20개 국가까지만 표시합니다.',
        eventRankDesc:'종목별 점수 기준으로 산정합니다. 개인 종목은 선수별, 계주 종목은 국가별로 순위를 매깁니다. 초기 화면은 500m 순위입니다.',
        includeRelay:'계주 포함', individualOnly:'개인전만', gender:'성별', includeSettings:'포함 설정',
        all:'전체', menShort:'남', womenShort:'녀', men:'남자', women:'여자',
        olympicDemo:'올림픽 시범종목', worldsOverall:'세계선수권 종합', worldsOverallOption:'세계선수권 종합 별도 집계', separateWorldsOverall:'종합 메달 별도 집계', worldsOverallGold:'세계선수권 종합 금', worldsOverallSilver:'세계선수권 종합 은', worldsOverallBronze:'세계선수권 종합 동', worldsOverallGroup:'세계선수권 종합',
        olympics:'올림픽', worlds:'세계선수권', worldcupTour:'월드컵 및 월드투어',
        includeOlympicDemo:'올림픽 시범종목 포함', excludeOlympicDemo:'올림픽 시범종목 제외',
        event500:'500', event1000:'1000', event1500:'1500', womenRelay:'여자계주', menRelay:'남자계주', mixedRelay:'혼성계주',
        apply:'설정', cancelScoreChanges:'취소', restoreDefaultScores:'기본값 복원',
        seasonMode:'시즌 방식', singleSeasonMode:'단일 시즌', seasonRangeMode:'시즌 범위', seasonAllSummary:'전체 시즌',
        scoreStatusDefault:'아카이브 기본값 사용 중', scoreStatusChanged:'변경됨 - 설정을 눌러 적용', scoreStatusApplied:'점수 설정 적용됨', scoreStatusInvalid:'0 이상의 숫자만 입력해 주세요.',
        gold:'금', silver:'은', bronze:'동', total:'계', rank:'순위', skater:'선수', country:'국가', score:'점수',
        olympic:'올림픽', worldChampionships:'세계선수권', worldCupTour:'월드컵·월드투어', totalGroup:'총합',
        empty:'집계할 데이터가 없습니다.', preparing:'준비 중입니다.',
        relayNotice:'계주 결과는 올림픽 중심으로 정리되었으며, 세계선수권 및 월드컵·월드투어 계주 결과는 거의 반영되지 않았습니다.',
        submitted:'제출되었습니다.', enterReport:'내용을 입력해 주세요.', submitting:'제출 중입니다...',
        reportFail:'제출하지 못했습니다. Apps Script doPost와 report 시트를 확인해 주세요.',
        currentCompetition:'현재 구분', top20:'기본 10국씩 표시', currentEvent:'현재 종목', genderLabel:'성별',
        relayCountryNote:'계주 3개는 선수별이 아니라 국가별로 집계됩니다. 올림픽 시범종목은 기본 제외입니다.',
        top50:'기본 20명씩 표시됩니다',
        countryLabel:'국가', skaterLabel:'선수',
        loading:'데이터를 불러오는 중입니다.', noSearchResults:'검색 결과가 없습니다.', dataLoadFail:'데이터를 불러오지 못했습니다.', appsNotConnected:'Apps Script 주소 연결 후 집계됩니다.',
        resultCount:'검색 결과', goldMedal:'금메달', silverMedal:'은메달', bronzeMedal:'동메달',
        olympicGold:'올림픽 금', olympicSilver:'올림픽 은', olympicBronze:'올림픽 동',
        worldsGold:'세계선수권 금', worldsSilver:'세계선수권 은', worldsBronze:'세계선수권 동',
        worldcupGold:'월드컵·월드투어 금', worldcupSilver:'월드컵·월드투어 은', worldcupBronze:'월드컵·월드투어 동',
        skaterScoreDesc:'가중치를 입력하고 ‘설정’을 누르면 점수순으로 정렬됩니다. 기본 금메달 비율은 올림픽:세계선수권:월드컵·월드투어 = 24:6:1입니다.',
        eventScoreDesc:'이 점수는 종목별 선수 순위에만 적용됩니다. 선수별 종합 순위 점수와 별도로 설정됩니다. 계주 3개는 선수별이 아니라 국가별로 집계됩니다. 올림픽 시범종목은 기본 제외입니다.',
        skaterScoreHelp:'점수를 바꾼 뒤 설정을 누르면 점수 기준 순위로 다시 정렬됩니다.',
        eventScoreHelp:'점수를 바꾼 뒤 설정을 누르면 종목별 순위만 다시 계산됩니다.',
        top50Only:'기본 20명씩 표시됩니다. 더보기로 전체 순위를 계속 펼칠 수 있습니다. 기본 순위는 사용자 정의 점수 기준입니다. 금·은·동·계는 각각 개별 정렬됩니다. 현재 설정:',
        skaterFilterNote:'현재 검색어와 선수별 종합 순위의 시즌·성별·시대·포함 설정이 반영됩니다. 기본값은 개인전만·전체 시즌·전체 성별·올림픽 시범종목 제외·세계선수권 종합 별도 집계·3000m 제외입니다.',
        skaterScoreAutoNote:'기본 순위는 아래 점수 기준으로 계산됩니다. 점수를 바꾼 뒤 설정을 누르면 다시 계산됩니다.',
        allCompetitions:'전체 대회', allSeasons:'전체 시즌', allGenders:'전체 성별', allEvents:'전체 종목', season:'시즌',
        reliabilityTitle:'자료 신뢰도 안내', reliabilityDesc:'순위를 해석할 때 참고해야 할 데이터 반영 범위입니다.', reliabilityOlympicsTitle:'올림픽', reliabilityOlympicsText:'정식 메달과 시범종목을 구분해 반영했습니다.', reliabilityWorldsTitle:'세계선수권', reliabilityWorldsText:'종합, 개인전 결과를 중심으로 정리했습니다.', reliabilityWorldcupTitle:'월드컵·월드투어', reliabilityWorldcupText:'개인전 중심이며 일부 초기 자료는 보완이 필요할 수 있습니다.', reliabilityRelayTitle:'계주 멤버', reliabilityRelayText:'계주 멤버는 올림픽 중심으로 정리되어 있습니다.',
        playerOverviewTitle:'선수 요약', playerOverviewDesc:'개인전·계주·대회 유형별 메달을 요약합니다.', playerMedalDetailTitle:'선수별 메달 내역', playerMedalDetailDesc:'개인전 메달과 relay_members의 계주 메달을 함께 표시합니다.',
        eraRange:'시즌', eraStartAll:'전체 시즌 시작', eraEndAll:'전체 시즌 끝',
        compareTitle:'선수 비교', compareDesc:'두 선수를 선택해 개인전 성적만 기준으로 점수와 종목별 성과를 비교합니다.',
        hallTitle:'명예의 전당', hallDesc:'계주, 3000m, 올림픽 시범종목을 제외한 기록형 카드입니다. 개인전 기록은 500m·1000m·1500m 계열 종목 기준이며, 세계선수권 종합우승은 Overall Gold를 별도 집계합니다.', hallRecordUnit:'개', hallOverallUnit:'회', cardMakerTitle:'선수 카드 만들기', cardMakerDesc:'이용자가 직접 입력하는 팬메이드 선수 카드입니다. 공식 평가가 아니며 저장·공유 갤러리는 제공하지 않습니다.', cardMakerNotice:'이미지 URL은 외부 표시가 가능한 주소만 사용할 수 있습니다. URL 이미지가 안 뜨면 이미지 직접 첨부를 이용해 주세요. 직접 첨부한 이미지는 카드 저장 시에도 안정적으로 포함됩니다.', cardSkaterName:'선수명', cardRating:'카드 점수', cardGrade:'등급', cardCustomGrade:'CUSTOM 등급명', cardImageUrl:'이미지 URL', cardImageFile:'이미지 직접 첨부', cardComment:'한 줄 코멘트', cardStats:'스탯 항목 및 점수', cardStatsNotice:'최대 8개까지 자유롭게 입력할 수 있습니다.', updateCard:'카드 만들기', downloadCard:'이미지 저장', fanMadeFooter:'FAN-MADE · NOT OFFICIAL', heatToolTitle:'조편성 계산기', heatToolDesc:'경기 결과를 입력하면 진출자를 산정하고 다음 라운드 조편성을 추정합니다.', heatToolNotice:'2026년 6월 12일 시행 ISU 규정 기준 팬용 도우미입니다. ADV 진출자가 생길 수 있으므로 조별 선수 수를 직접 정해 결과 입력표를 만듭니다. 진출자는 직전 라운드 순위 우선·동순위 기록순으로 시드화하고, 다음 라운드 조는 지그재그로 배정합니다. 각 조의 SP도 순위 우선·동순위 기록순으로 안쪽부터 배정합니다. 실제 공식 조편성과 다를 수 있으며 ADV·동순위는 수동 확인이 필요합니다.', heatDistance:'종목', heatRound:'현재 라운드', roundPreliminary:'예비예선', roundHeats:'예선', roundQuarterfinals:'준준결승', roundSemifinals:'준결승', heatCount:'현재 조 수', heatSkatersPerHeat:'조별 선수 수', heatAutoQualifiers:'조별 순위 진출', heatTimeQualifiers:'기록순 추가 진출', heatNextCount:'다음 라운드 조 수', heatSeedMethod:'ISU 조 배정', seedSnake:'지그재그 배정', seedStraight:'순차 배정', heatTimeSort:'기록 정렬', timeFastest:'빠른 기록 우선', timeNone:'기록 미사용', buildHeatTable:'결과 입력표 만들기', calculateHeatDraw:'진출자·조편성 계산', sampleHeatData:'예시 채우기', clearHeatData:'입력 초기화', heatInputEmpty:'결과 입력표를 먼저 만들어 주세요.', heatOutputEmpty:'계산 결과가 여기에 표시됩니다.', heatNoQualifiers:'진출자가 없습니다.', heatAutoQ:'순위 진출', heatTimeQ:'기록 진출', heatAdv:'ADV', heatEliminated:'탈락자', heatQualifiers:'진출자', heatNextDraw:'다음 라운드 조편성', heatName:'선수명', heatCountry:'국가', heatPosition:'순위', heatTime:'기록', heatStatus:'상태', heatHeat:'조', heatReason:'진출 방식', heatRank:'시드', heatSP:'SP', heatOfficialNote:'ISU 규정 293조 기준 추정 결과입니다. ADV·동순위 등으로 실제 공식 조편성과 다를 수 있습니다.', quizTitle:'랜덤 쇼트트랙 퀴즈', quizDesc:'현재 medals 데이터를 바탕으로 자동 출제합니다. 문제를 따로 만들 필요는 없으며, 데이터가 추가되면 새로고침 후 문제 후보도 자동으로 늘어납니다.', quizNotice:'개인전 중심으로 출제하며 계주, 3000m, 올림픽 시범종목, 공동 메달 또는 불완전 포디움 의심 경기는 제외합니다. 문제에서 오류를 발견하면 문제별 오류 신고 버튼으로 제보할 수 있습니다.', quizCount:'문제 수', quizEra:'시대', quizType:'문제 유형', quizTypeMixed:'혼합', quizTypeGold:'금메달리스트', quizTypePodium:'포디움 순서', quizTypeCountry:'선수 국가', quizTypeMedal:'메달 색', startQuiz:'퀴즈 시작', submitQuiz:'채점하기', resetQuiz:'초기화', quizEmpty:'옵션을 선택한 뒤 퀴즈를 시작해 주세요.', quizNoData:'조건에 맞는 문제 후보가 없습니다.', quizQuestion:'문제', quizReport:'이 문제 오류 신고', quizCorrectAnswer:'정답', quizYourAnswer:'내 답', quizUnanswered:'미응답', quizScoreText:'정답 수', quizAccuracy:'정답률', quizTitleGod:'ISU 데이터베이스 그 자체', quizTitleLegend:'쇼트트랙 백과사전', quizTitleWorld:'월드투어 해설위원', quizTitlePodium:'포디움 추적자', quizTitleFan:'빙상장 상주팬', quizTitleRookie:'다시보기 훈련 필요', quizGoldQuestion:'금메달리스트는?', quizPodiumQuestion:'포디움 순서로 맞는 것은?', quizCountryQuestion:'의 국가로 맞는 것은?', quizMedalQuestion:'이 선수의 메달 색은?', selectPlayerA:'선수 A 선택', selectPlayerB:'선수 B 선택', compareButton:'비교하기', compareEmpty:'비교할 두 선수를 선택해 주세요.', compareScoreDesc:'이 점수는 선수 비교에만 적용됩니다. 기본값은 기존 13·21·34 기반 점수 체계이며, 계주는 제외하고 개인전 성적만 비교합니다.', compareIncludeWorldsOverall:'세계선수권 종합 포함', compareExcludeWorldsOverall:'세계선수권 종합 제외', worldsOverallScore:'세계선수권 종합 점수',
        category:'구분', individual:'개인전', relayMedal:'계주', includeRelayTotal:'계주 포함', individualMedals:'개인전 메달', relayIncludedMedals:'계주 포함 메달', bestEvent:'최다 금메달 종목', fiveHundred:'500m', thousand:'1000m', fifteenHundred:'1500m', scoreLabel:'점수', olympicScore:'올림픽 점수', worldsScore:'세계선수권 점수', worldcupScore:'월드컵·월드투어 점수', totalScore:'총점', noData:'데이터 없음',
        olympicGames:'올림픽', worldCup:'월드컵', worldTour:'월드투어', challengeCup:'챌린지컵', mixed:'혼성', overall:'종합', relay:'계주'
      },
      en: {
        appTitle:'Short Track Archive',
        appSubtitle:'Short track podium archive for World Cup, World Tour, World Championships, and Olympics',
        navTitle:'Menu', navHome:'Home', navSeasons:'Seasons', navCompetitions:'Competitions', navAthletes:'Athletes', navRecordSearch:'Record Search', navSearch:'Search', navHelp:'Help', navAcademy:'Short Track Academy', navSkaterRank:'Overall Skater Ranking', navCompare:'Compare Skaters', navCountryRank:'Country Medal Ranking', navEventRank:'Event Ranking', navHallOfFame:'Hall of Fame', navCardMaker:'Card Maker', navHeatTool:'Heat Draw Tool', navQuiz:'Random Quiz',
        navReport:'Report / Contact', navRecordRank:'Event Record Ranking', navLapRank:'Lap Time Ranking', navRecords:'Records',
        viewAuto:'Auto', viewMobile:'Mobile', viewDesktop:'Desktop', mobileSettings:'Settings',
        bottomHome:'Home', bottomSeason:'Seasons', bottomCompetition:'Events', bottomAthlete:'Athletes', bottomSearch:'Search', bottomRank:'Rank', bottomRecords:'Records', bottomMore:'More',
        brandHeroDesc:'Explore the people, seasons, competitions, and records that shape short track history.', brandHeroCta:'Explore the archive',
        mobileHomeKicker:'Mobile Archive', mobileHomeTitle:'Start with search', mobileHomeDesc:'Find skaters, countries, competitions, and events at once, then jump to frequently used records.', mobileSearchPlaceholder:'Search skater, country, or competition',
        mobileQuickSkaterRank:'Overall Ranking', mobileQuickSkaterRankDesc:'Skater score and medals', mobileQuickRecordRank:'World Records', mobileQuickRecordRankDesc:'Event record ranking', mobileQuickEventRank:'Event Ranking', mobileQuickEventRankDesc:'Distance-based skater ranking', mobileQuickLapRank:'Lap ranking', mobileQuickLapRankDesc:'Check the fastest lap records', mobileQuickHall:'Hall of Fame', mobileQuickHallDesc:'Featured record cards',
        exploreTitle:'Explore the Archive', exploreDesc:'Open season, competition, and athlete detail pages without starting from search.',
        exploreBySeason:'Browse by season', exploreBySeasonDesc:'Find competitions and results from a season', exploreByCompetition:'Browse by competition', exploreByCompetitionDesc:'Explore Olympics, World Championships, World Cup, and World Tour events', exploreByAthlete:'Browse by athlete', exploreByAthleteDesc:'Find season results and competition history by athlete',
        todayFeatureTitle:'Today’s Picks', todayFeatureDesc:'Quick entry points you can browse without starting from search.', todaySkater:'Today’s athlete', todaySkaterLoading:'Athlete data is loading', todaySkaterLoadingMeta:'Today’s athlete will appear after the data loads.', viewTodaySkater:'View today’s athlete', randomSkater:'Random athlete', quickPage:'Quick browse', quickCountrySeason:'Browse the archive', quickPageDesc:'Jump to seasons, competitions, athletes, or the judging/rules guide.', popularCountryPage:'Representative country page', latestSeasonPage:'Latest season page', rulesGuide:'Rules guide',
        seasonDirectoryTitle:'Season Directory', seasonDirectoryDesc:'Only seasons present in the data are listed, newest first.', competitionDirectoryTitle:'Competition Directory', competitionDirectoryDesc:'Find existing competition detail pages by season and competition type.', athleteDirectoryTitle:'Athlete Directory', athleteDirectoryDesc:'Find athlete detail pages by name, country, gender, and active season.',
        latestSeason:'Latest season', recentCompetitions:'Recent competitions', recentPlayers:'Recently viewed athletes', viewSeason:'View season details', viewCompetition:'View competition results', viewAthlete:'View athlete details', resetAll:'Reset all', filterSeason:'Season', filterCompetitionType:'Competition type', filterCity:'Host city/country', filterCountry:'Country', filterGender:'Gender', filterActiveSeason:'Active season', quickSearch:'Quick search', seasonDirectoryKeyword:'Quick search season or competition type', allTypes:'All types', allCountries:'All countries', allCities:'All cities/countries', allLetters:'All index', showMore:'Show more', collapse:'Collapse', dataNone:'No data to display.',
        reportTitle:'Report / Contact', close:'Close', cancel:'Cancel', submit:'Submit',
        reportPlaceholder:'Enter an error report or question.', searchPlaceholder:'Search skater, country, competition, or event',
        skaterRankTitle:'Overall Skater Ranking', countryRankTitle:'Country Medal Ranking', eventRankTitle:'Event Ranking',
        skaterRankDesc:'Shows Olympic / World Championships / World Cup & World Tour medals separately, with totals at the end.',
        countryRankDesc:'Based on the medals sheet. Relay medals are not duplicated by skater count. Only the top 20 countries are shown.',
        eventRankDesc:'Calculated with event-specific points. Individual events rank skaters; relay events rank countries. The default view is 500m.',
        includeRelay:'Include relay', individualOnly:'Individual only', gender:'Gender', includeSettings:'Settings',
        all:'All', menShort:'Men', womenShort:'Women', men:'Men', women:'Women',
        olympicDemo:'Olympic demo events', worldsOverall:'Worlds overall', worldsOverallOption:'Worlds overall separate', separateWorldsOverall:'Separate overall medals', worldsOverallGold:'Worlds overall gold', worldsOverallSilver:'Worlds overall silver', worldsOverallBronze:'Worlds overall bronze', worldsOverallGroup:'Worlds overall',
        olympics:'Olympics', worlds:'World Championships', worldcupTour:'World Cup & World Tour',
        includeOlympicDemo:'Include Olympic demo events', excludeOlympicDemo:'Exclude Olympic demo events',
        event500:'500', event1000:'1000', event1500:'1500', womenRelay:"Women's relay", menRelay:"Men's relay", mixedRelay:'Mixed relay',
        apply:'Apply', cancelScoreChanges:'Cancel', restoreDefaultScores:'Restore defaults',
        seasonMode:'Season mode', singleSeasonMode:'Single season', seasonRangeMode:'Season range', seasonAllSummary:'All seasons',
        scoreStatusDefault:'Using archive defaults', scoreStatusChanged:'Changed - click Apply to use', scoreStatusApplied:'Score settings applied', scoreStatusInvalid:'Enter numbers greater than or equal to 0.',
        gold:'Gold', silver:'Silver', bronze:'Bronze', total:'Total', rank:'Rank', skater:'Skater', country:'Country', score:'Score',
        olympic:'Olympics', worldChampionships:'World Championships', worldCupTour:'World Cup & World Tour', totalGroup:'Total',
        empty:'No data to aggregate.', preparing:'Coming soon.',
        relayNotice:'Relay results are organized mainly around the Olympics; World Championships, World Cup, and World Tour relay results are mostly not reflected.',
        submitted:'Submitted.', enterReport:'Please enter a message.', submitting:'Submitting...',
        reportFail:'Could not submit. Please check Apps Script doPost and the report sheet.',
        currentCompetition:'Current category', top20:'Showing 10 countries by default', currentEvent:'Current event', genderLabel:'Gender',
        relayCountryNote:'The three relay events are aggregated by country, not by skater. Olympic demonstration events are excluded by default.',
        top50:'Showing 20 by default',
        countryLabel:'Country', skaterLabel:'Skater',
        loading:'Loading data.', noSearchResults:'No search results.', dataLoadFail:'Could not load data.', appsNotConnected:'Connect Apps Script first.',
        resultCount:'Results', goldMedal:'Gold medals', silverMedal:'Silver medals', bronzeMedal:'Bronze medals',
        olympicGold:'Olympic gold', olympicSilver:'Olympic silver', olympicBronze:'Olympic bronze',
        worldsGold:'Worlds gold', worldsSilver:'Worlds silver', worldsBronze:'Worlds bronze',
        worldcupGold:'World Cup/Tour gold', worldcupSilver:'World Cup/Tour silver', worldcupBronze:'World Cup/Tour bronze',
        skaterScoreDesc:'Enter point values to sort the overall skater ranking by custom score.',
        eventScoreDesc:'These points apply only to event rankings. They are separate from the overall skater ranking points. The three relay events are ranked by country, not by skater. Olympic demonstration events are excluded by default.',
        skaterScoreHelp:'After changing point values, click Apply to sort by score again.',
        eventScoreHelp:'After changing point values, click Apply to recalculate only the event ranking.',
        top50Only:'Showing 20 skaters by default. Use Show more to keep expanding the full ranking. The default ranking uses custom score. Gold, silver, bronze, and total columns are independently sortable. Current settings:',
        skaterFilterNote:'Current search and this section’s season, gender, era, and inclusion settings are applied. Default settings: individual only, all seasons, all genders, Olympic demonstration events excluded, World Championships overall counted separately, 3000m excluded.',
        skaterScoreAutoNote:'The default ranking is calculated using the points below. Change the point values and click Apply to recalculate the ranking.',
        allCompetitions:'All competitions', allSeasons:'All seasons', allGenders:'All genders', allEvents:'All events', season:'Season',
        reliabilityTitle:'Data Coverage Notice', reliabilityDesc:'Use this as context when interpreting rankings.', reliabilityOlympicsTitle:'Olympics', reliabilityOlympicsText:'Official medals and demonstration events are separated.', reliabilityWorldsTitle:'World Championships', reliabilityWorldsText:'Overall and individual results are organized as the main focus.', reliabilityWorldcupTitle:'World Cup & World Tour', reliabilityWorldcupText:'Mainly individual events; some early records may still need refinement.', reliabilityRelayTitle:'Relay members', reliabilityRelayText:'Relay member data is organized mainly around the Olympics.',
        playerOverviewTitle:'Skater Summary', playerOverviewDesc:'Summarizes medals by individual/relay and competition type.', playerMedalDetailTitle:'Medal Details', playerMedalDetailDesc:'Shows individual medals together with relay medals from relay_members.',
        eraRange:'Season range', eraStartAll:'Start', eraEndAll:'End',
        compareTitle:'Compare Skaters', compareDesc:'Select two skaters to compare scores and event performance based on individual results only.',
        hallTitle:'Hall of Fame', hallDesc:'Record-based cards excluding relays, 3000m, and Olympic demonstration events. Individual records are based on 500m, 1000m, and 1500m events, while World Championships Overall titles are counted separately from Overall Gold.', hallRecordUnit:'medals', hallOverallUnit:'titles', cardMakerTitle:'Card Maker', cardMakerDesc:'Create a fan-made skater card from your own inputs. This is not an official rating, and no gallery or saved sharing is provided.', cardMakerNotice:'Only image URLs that allow external display can be used. If a URL image does not load, upload an image directly. Directly uploaded images are more reliably included when saving the card.', cardSkaterName:'Skater name', cardRating:'Card rating', cardGrade:'Grade', cardCustomGrade:'CUSTOM grade name', cardImageUrl:'Image URL', cardImageFile:'Upload image directly', chooseFile:'Choose file', noFileSelected:'No file selected', cardComment:'One-line comment', cardStats:'Stats and scores', cardStatsNotice:'You can freely enter up to 8 stats.', updateCard:'Create card', downloadCard:'Save image', fanMadeFooter:'FAN-MADE · NOT OFFICIAL', heatToolTitle:'Heat Draw Tool', heatToolDesc:'Enter race results to calculate qualifiers and estimate the next-round heat draw.', heatToolNotice:'This is a fan-made helper. Because ADV qualifiers may occur, set the number of skaters per heat manually before building the result table. Qualifiers are seeded by finish-position groups first, then by time within each group; next-round heats are assigned by snake seeding. SP within each next-round heat is then re-sorted by the previous-round time. Actual official heat draws may differ, and ADV/ties should be checked manually.', heatDistance:'Event', heatRound:'Current round', roundPreliminary:'Preliminary', roundHeats:'Heats', roundQuarterfinals:'Quarterfinals', roundSemifinals:'Semifinals', heatCount:'Current heats', heatSkatersPerHeat:'Skaters per heat', heatAutoQualifiers:'Auto qualifiers per heat', heatTimeQualifiers:'Fastest additional qualifiers', heatNextCount:'Next-round heats', heatSeedMethod:'Seeding method', seedSnake:'Snake seeding', seedStraight:'Straight seeding', heatTimeSort:'Time sorting', timeFastest:'Fastest first', timeNone:'Do not use times', buildHeatTable:'Build result table', calculateHeatDraw:'Calculate qualifiers & draw', sampleHeatData:'Fill sample', clearHeatData:'Clear input', heatInputEmpty:'Build a result table first.', heatOutputEmpty:'Results will appear here.', heatNoQualifiers:'No qualifiers.', heatAutoQ:'Auto qualifier', heatTimeQ:'Time qualifier', heatAdv:'ADV', heatEliminated:'Eliminated', heatQualifiers:'Qualifiers', heatNextDraw:'Next-round heat draw', heatName:'Skater', heatCountry:'Country', heatPosition:'Place', heatTime:'Time', heatStatus:'Status', heatHeat:'Heat', heatReason:'Reason', heatRank:'Seed', heatSP:'SP', heatOfficialNote:'Estimated heat draw. Actual official heat draws may differ.', quizTitle:'Random Short Track Quiz', quizDesc:'Questions are generated automatically from the current medals data. You do not need to create questions manually; when new data is added, the quiz pool updates after refresh.', quizNotice:'Questions focus on individual events and exclude relays, 3000m, Olympic demonstration events, joint-medal cases, and incomplete podiums. If you find an error, report it from that question.', quizCount:'Questions', quizEra:'Era', quizType:'Question type', quizTypeMixed:'Mixed', quizTypeGold:'Gold medalist', quizTypePodium:'Podium order', quizTypeCountry:'Skater country', quizTypeMedal:'Medal color', startQuiz:'Start quiz', submitQuiz:'Grade quiz', resetQuiz:'Reset', quizEmpty:'Select options and start the quiz.', quizNoData:'No question candidates match these options.', quizQuestion:'Question', quizReport:'Report this question', quizCorrectAnswer:'Answer', quizYourAnswer:'Your answer', quizUnanswered:'Unanswered', quizScoreText:'Correct', quizAccuracy:'Accuracy', quizTitleGod:'ISU database itself', quizTitleLegend:'Short track encyclopedia', quizTitleWorld:'World Tour commentator', quizTitlePodium:'Podium tracker', quizTitleFan:'Rink regular', quizTitleRookie:'Needs replay training', quizGoldQuestion:'Who was the gold medalist?', quizPodiumQuestion:'Which podium order is correct?', quizCountryQuestion:'is from which country?', quizMedalQuestion:'What medal did this skater win?', selectPlayerA:'Select skater A', selectPlayerB:'Select skater B', compareButton:'Compare', compareEmpty:'Select two skaters to compare.', compareScoreDesc:'These weights apply only to skater comparison. Defaults follow the existing 13·21·34-based scoring system. Relays are excluded, and only individual results are compared.', compareIncludeWorldsOverall:'Include Worlds overall', compareExcludeWorldsOverall:'Exclude Worlds overall', worldsOverallScore:'Worlds overall score',
        heatToolTitle:'Heat Draw Tool', heatToolDesc:'Enter race results to calculate qualifiers and estimate the next-round heat draw.', heatToolNotice:'This is a fan-made helper. Because ADV qualifiers may occur, set the number of skaters per heat manually before building the result table. Qualifiers are seeded by finish-position groups first, then by time within each group; next-round heats are assigned by snake seeding. SP within each next-round heat is then re-sorted by the previous-round time. Actual official heat draws may differ, and ADV/ties should be checked manually.', heatDistance:'Event', heatRound:'Current round', roundPreliminary:'Preliminary', roundHeats:'Heats', roundQuarterfinals:'Quarterfinals', roundSemifinals:'Semifinals', heatCount:'Current heats', heatSkatersPerHeat:'Skaters per heat', heatAutoQualifiers:'Auto qualifiers per heat', heatTimeQualifiers:'Fastest additional qualifiers', heatNextCount:'Next-round heats', heatSeedMethod:'Seeding method', seedSnake:'Snake seeding', seedStraight:'Straight seeding', heatTimeSort:'Time sorting', timeFastest:'Fastest first', timeNone:'Do not use times', buildHeatTable:'Build result table', calculateHeatDraw:'Calculate qualifiers & draw', sampleHeatData:'Fill sample', clearHeatData:'Clear input', heatInputEmpty:'Build a result table first.', heatOutputEmpty:'Results will appear here.', heatNoQualifiers:'No qualifiers.', heatAutoQ:'Auto qualifier', heatTimeQ:'Time qualifier', heatAdv:'ADV', heatEliminated:'Eliminated', heatQualifiers:'Qualifiers', heatNextDraw:'Next-round heat draw', heatName:'Skater', heatCountry:'Country', heatPosition:'Place', heatTime:'Time', heatStatus:'Status', heatHeat:'Heat', heatReason:'Reason', heatRank:'Seed', heatSP:'SP', heatOfficialNote:'Estimated heat draw. Actual official heat draws may differ.',
        quizTitle:'Random Short Track Quiz', quizDesc:'Questions are generated automatically from the current medals data. You do not need to create questions manually; when new data is added, the quiz pool updates after refresh.', quizNotice:'Questions focus on individual events and exclude relays, 3000m, Olympic demonstration events, joint-medal cases, and incomplete podiums. If you find an error, report it from that question.', quizCount:'Questions', quizEra:'Era', quizType:'Question type', quizTypeMixed:'Mixed', quizTypeGold:'Gold medalist', quizTypePodium:'Podium order', quizTypeCountry:'Skater country', quizTypeMedal:'Medal color', startQuiz:'Start quiz', submitQuiz:'Grade quiz', resetQuiz:'Reset', quizEmpty:'Select options and start the quiz.', quizNoData:'No question candidates match these options.', quizQuestion:'Question', quizReport:'Report this question', quizCorrectAnswer:'Answer', quizYourAnswer:'Your answer', quizUnanswered:'Unanswered', quizScoreText:'Correct', quizAccuracy:'Accuracy', quizTitleGod:'ISU database itself', quizTitleLegend:'Short track encyclopedia', quizTitleWorld:'World Tour commentator', quizTitlePodium:'Podium tracker', quizTitleFan:'Rink regular', quizTitleRookie:'Needs replay training', quizGoldQuestion:'Who was the gold medalist?', quizPodiumQuestion:'Which podium order is correct?', quizCountryQuestion:'is from which country?', quizMedalQuestion:'What medal did this skater win?',
        category:'Category', individual:'Individual', relayMedal:'Relay', includeRelayTotal:'Relay included', individualMedals:'Individual medals', relayIncludedMedals:'Relay included medals', bestEvent:'Best gold-medal event', fiveHundred:'500m', thousand:'1000m', fifteenHundred:'1500m', scoreLabel:'Score', olympicScore:'Olympic score', worldsScore:'Worlds score', worldcupScore:'World Cup/Tour score', totalScore:'Total score', noData:'No data',
        olympicGames:'Olympic Games', worldCup:'World Cup', worldTour:'World Tour', challengeCup:'Challenge Cup', mixed:'Mixed', overall:'Overall', relay:'Relay'
      }
    };

    Object.assign(I18N.ko, {
      navTierMaker:'티어메이커',
      rulesModalTitle:'판정/규칙 설명',
      rulesModalNotice:'ISU Short Track Sports Rules 및 Short Track Infringement Language and Code 기준으로 정리한 팬용 요약입니다. 공식 판정은 대회 Referee의 공지와 프로토콜을 우선합니다.',
      rulesPenaltyText:'Racing Rules 위반에 대한 제재입니다. 해당 레이스에서 실격 처리되며, 해당 거리/경기의 다음 라운드에 참가할 수 없습니다.',
      rulesYellowCardText:'위험하거나 비신사적이거나 유해·위험한 행위, 또는 한 레이스 안에서 Impeding/Kicking Out 위반이 복수로 발생한 경우 등에 부과될 수 있습니다. 해당 레이스 실격, 해당 거리/경기 이전 포인트·결과 상실로 이어집니다.',
      rulesRedCardText:'위험하거나 중대한 과실에 해당하는 위반, 같은 이벤트에서 Yellow Card 2회, ISU Code of Ethics 위반 등에 부과될 수 있습니다. 해당 이벤트의 남은 개인전·계주 레이스 참가가 제한됩니다.',
      rulesAdvancementText:'다른 선수의 PEN/YC/RC 원인이 된 방해를 받았고, 그 시점에 직접 진출권 위치에 있던 선수는 다음 라운드로 진출 처리될 수 있습니다. 준결승에서는 Final B 진출권 위치의 선수는 Final B로 advanced 됩니다.',
      rulesDnfText:'피니시 라인을 통과하지 못한 경우입니다. 중단·재시작 상황에서 선수 보호를 위해 재시작에 참가하지 못한 경우에도 DNF로 기록될 수 있습니다.',
      rulesDnsText:'출발하지 않은 경우입니다. 장비 규정 미준수로 레이스 참가가 제외되거나, 진출했으나 의료 사유 등으로 출발하지 못하는 경우 DNS로 기록될 수 있습니다.',
      rulesSrText:'두 명 이상 선수의 동시 행동으로 생긴 접촉이 경미하고 결과에 영향을 주지 않았다고 Referee가 판단하면, Shared Responsibility로 보고 누구에게도 Penalty를 주지 않을 수 있습니다.',
      rulesRelayCodesText:'R1 Missed Relay Touch, R2 Illegal Relay, R3 Blocking in the Infield 등 계주 전용 위반 코드입니다.',
      rulesSourceNote:'출처: ISU Sports Rules - Short Track, Rule 291·296·297 및 ISU Short Track Infringement Language and Code 2025/26.',
      skaterName:'선수명', skaterInfo:'선수 정보', playerAchievementLabel:'선수 주요 업적', totalMedals:'총 메달', copyLink:'링크 복사',
      playerTimelineAction:'타임라인 보기', playerTimelineEmpty:'타임라인 보기 버튼을 누르면 표시됩니다.',
      competitionNameLabel:'대회명', competitionInfoLabel:'대회 정보', competitionMedalTableTitle:'대회별 메달표', competitionMedalTableDesc:'해당 대회의 종목별 금·은·동 포디움입니다.', competitionBestTimeTitle:'대회별 최고기록 입력 현황', competitionBestTimeDesc:'best_times 시트에 입력된 선수별 최종 최고기록 행 수를 요약합니다.',
      countryInfoLabel:'국가별 관련 기록', seasonInfoLabel:'시즌별 관련 기록', selectCountryPrompt:'국가를 선택해 주세요.', selectSeasonPrompt:'시즌을 선택해 주세요.',
      tierMakerTitle:'티어메이커', tierMakerDesc:'선수 카드를 직접 드래그해 S/A/B/C/D/보류 티어표를 만들 수 있습니다. 공식 평가가 아닌 사용자 제작용 기능입니다.', tierSearch:'선수 검색', tierSearchPlaceholder:'선수명 또는 국가 검색', mixedRelayIncluded:'혼성/계주 포함', tierSource:'선수 범위', tierMedalSkaters:'메달 기록 보유 선수', tierAllSkaters:'전체 선수', refresh:'새로고침', reset:'초기화', tierNote:'티어 이름은 직접 클릭해서 수정할 수 있습니다. 선수 카드는 드래그해서 티어 칸이나 왼쪽 선수 목록으로 옮길 수 있습니다.', tierPoolTitle:'선수 목록', tierPoolEmpty:'데이터를 불러온 뒤 표시됩니다.', tierBoardTitle:'티어표', saveImage:'이미지 저장', copyText:'텍스트 복사', generateText:'텍스트 만들기', tierCopyPlaceholder:'텍스트 만들기를 누르면 티어표 결과가 여기에 표시됩니다.', tierNoSkater:'조건에 맞는 선수가 없습니다.', tierDragHere:'여기로 드래그', tierResetConfirm:'현재 티어 배치를 초기화할까요?', tierCopied:'티어표 텍스트를 복사했습니다.', tierCopyManual:'자동 복사가 막혔습니다. 아래 텍스트를 직접 복사해 주세요.', tierExportTitle:'쇼트트랙 선수 티어표', tierImageFail:'이미지 저장에 실패했습니다. 브라우저 보안 제한일 수 있습니다. 텍스트 복사를 이용해 주세요.', tierImageRetry:'이미지 저장에 실패했습니다. 다시 시도해 주세요.', noRecord:'기록 없음',
      cardCustomGradePlaceholder:'예: ACE', fanCardImagePlaceholder:'이미지 URL을 입력하면 여기에 표시됩니다.', fanStatStamina:'체력', fanStatSpeed:'스피드', fanStatStart:'스타트', fanStatPhysical:'몸싸움', fanStatOutside:'아웃코스', fanStatInside:'인코스', fanStatRaceCraft:'경기운영', fanStatMarking:'코스마킹',
      recordRankDesc:'500m·1000m·1500m 및 계주 종목의 기준 기록 이내 결과를 빠른 순서로 표시합니다.', event:'종목', competition:'대회', competitionType:'대회 구분', tryAgainLater:'잠시 후 다시 시도해 주세요.', recordFinalRank:'라운드 최종 순위', firstOnly:'1위만', recordBestOnly:'선수별 기록', allRecords:'전체 기록', bestPerSkater:'선수별 최고 기록만', displayLimit:'표시 개수', loadData:'불러오기', recordKpiQualified:'기준 통과 기록', individualEvents:'개인 종목', relayEvents:'계주 종목', currentlyShown:'현재 표시', recordNotLoaded:'아직 종목별 기록 데이터를 불러오지 않았습니다. 위의 <strong>불러오기</strong>를 누르세요.', recordDataNotReady:'종목별 기록 데이터를 준비하지 못했습니다.', recordLoading:'종목별 기록 데이터를 불러오는 중입니다.', recordDataNotFound:'종목별 기록 데이터를 찾지 못했습니다.', recordLoadFailed:'종목별 기록 데이터를 불러오지 못했습니다.', recordNoMatch:'조건에 맞는 기록이 없습니다.', adjustRecordFilters:'성별·시즌·종목·대회 구분 필터를 조정해 보세요.', recordShownSummary:'현재 조건', shownCount:'건 표시', ofCount:'건 중', record:'기록', skaterTeam:'선수/팀', source:'출처', view:'보기', viewSource:'출처 보기', details:'상세 보기',
      lapRankDesc:'ISU Results의 lap time / split time(rank)를 기준으로 빠른 랩만 모아 보여 줍니다.', lapRankNotice:'여자 개인전·여자 계주는 <strong>8.59초 이하</strong>, 남자 개인전·남자 계주는 <strong>8.19초 이하</strong>를 기준으로 표시합니다. <strong>Women 3000 m Relay</strong>, <strong>Men 5000 m Relay</strong>, <strong>Mixed Team Relay</strong>도 랩타임 순위에 포함합니다. 계주 랩타임은 누락이 많습니다.', lapContextLabel:'랩타임 분류', lapLead:'선두', lapPass:'추월', lapFollow:'따라타기', lapPassed:'추월당함', lapUnknown:'미분류', lapSortNote:'전체보기 정렬 우선순위: 랩타임 빠른 순 → 동일 랩타임일 때 선두 > 추월 > 따라타기 > 추월당함.', lapKpiCollected:'수집된 빠른 랩', lapWomenThreshold:'여자/여자 계주 기준', lapMenThreshold:'남자/남자 계주 기준', relayDisplay:'계주 표시', included:'포함', lapNotLoaded:'아직 랩타임 데이터를 불러오지 않았습니다. 위의 <strong>불러오기</strong>를 누르세요.', lapDataNotReady:'랩타임 데이터를 준비하지 못했습니다.', lapLoading:'랩타임 순위 데이터를 불러오는 중입니다.', lapLoadFailed:'랩타임 데이터를 불러오지 못했습니다.', lapNoMatch:'조건에 맞는 랩타임이 없습니다.', adjustLapFilters:'성별·시즌·종목·분류 필터를 조정해 보세요.', lapTime:'랩타임', round:'라운드', heat:'Heat', lap:'Lap', basis:'근거', seasonRound:'시즌/라운드', totalShown:'총',
      medalListTitle:'메달 목록', medalListDesc:'상세 원자료 확인용 목록입니다. 길어지기 쉬워 화면 맨 아래에 배치했습니다.', genderTabsLabel:'성별 보기', medalTabsLabel:'메달 보기', allMedals:'전체 메달'
    });

    Object.assign(I18N.ko, {
      filterSettings:'필터 설정', closeFilters:'필터 닫기', heatFilterTitle:'조편성 설정', skaterFilterTitle:'선수 순위 필터 설정', countryFilterTitle:'국가 순위 필터 설정', eventFilterTitle:'종목별 선수 순위 필터 설정', compareFilterTitle:'선수 비교 설정', quizFilterTitle:'퀴즈 설정', recordFilterTitle:'종목별 기록 필터', lapFilterTitle:'랩타임 필터',
      countryPage:'국가 페이지', skaterDetail:'선수 상세', competitionDetails:'대회별 세부 보기',
      showMoreSkaters:'선수 더 보기', showMoreCountries:'국가 더 보기', showMoreRecords:'기록 더 보기', showMoreLaps:'랩타임 더 보기', showMoreRawRows:'원자료 더 보기', showMoreEventRanks:'종목 순위 더 보기', showMoreTableRows:'표 항목 더 보기',
      heatNoAssigned:'배정된 선수가 없습니다.', heatNoNextDraw:'다음 조 배정이 없습니다.', heatNoEliminated:'미진출자가 없습니다.',
      heatInputNote:'현재 라운드 결과에 필요한 선수들을 입력합니다. 심판 판정으로 진출한 선수만 ADV로 표시해 주세요.',
      heatSeedOrderNote:'시드 순서: 순위 진출자는 직전 라운드 순위 우선·동순위 기록순이며, 그다음 ADV, 마지막으로 기록 진출자입니다.',
      heatAssignmentNote:'조는 시드 지그재그 방식으로 배정합니다. 각 조의 SP도 시드 순서대로 안쪽부터 배정합니다.',
      searchRawPrompt:'선수명, 국가, 대회명, 시즌, 종목을 검색하면 원자료 결과가 표시됩니다.'
    });

    Object.assign(I18N.en, {
      todayVisitors:'Today visitors', totalVisitors:'Total visitors',
      navTierMaker:'Tier Maker',
      rulesModalTitle:'Judging / Rules Guide',
      rulesModalNotice:'A fan-oriented summary based on ISU Short Track Sports Rules and the Short Track Infringement Language and Code. Official referee notices and protocols take priority.',
      rulesPenaltyText:'A sanction for a Racing Rules infringement. The skater is disqualified from that race and may not continue to the next round of that distance/event.',
      rulesYellowCardText:'May be issued for dangerous, unsporting, harmful, or hazardous actions, or when Impeding/Kicking Out infringements occur multiple times in one race. It results in race disqualification and loss of previous points/results for that distance/event.',
      rulesRedCardText:'May be issued for dangerous or serious misconduct, two Yellow Cards in the same event, or an ISU Code of Ethics infringement. It restricts participation in the remaining individual and relay races of that event.',
      rulesAdvancementText:'A skater impeded by another skater causing PEN/YC/RC, while in a direct qualifying position, may be advanced to the next round. In semifinals, a skater in a Final B qualifying position may be advanced to Final B.',
      rulesDnfText:'Did Not Finish means the skater did not cross the finish line. It may also be recorded when a skater cannot restart for safety or medical protection after an interruption.',
      rulesDnsText:'Did Not Start means the skater did not start, including equipment-rule exclusion or medical withdrawal after qualifying.',
      rulesSrText:'If simultaneous actions by two or more skaters cause minor contact without affecting the result, the Referee may treat it as Shared Responsibility and issue no penalty.',
      rulesRelayCodesText:'Relay-specific infringement codes such as R1 Missed Relay Touch, R2 Illegal Relay, and R3 Blocking in the Infield.',
      rulesSourceNote:'Source: ISU Sports Rules - Short Track, Rules 291, 296, 297, and ISU Short Track Infringement Language and Code 2025/26.',
      skaterName:'Skater name', skaterInfo:'Skater information', playerAchievementLabel:'Skater achievements', totalMedals:'Total medals', copyLink:'Copy link',
      playerTimelineTitle:'Career timeline', playerTimelineDesc:'Shows the skater medal history in reverse season order.', playerTimelineAction:'View timeline', playerTimelineEmpty:'Press View timeline to display this section.', dataLoaded:'Data loaded',
      competitionNameLabel:'Competition name', competitionInfoLabel:'Competition information', competitionMedalTableTitle:'Competition Medal Table', competitionMedalTableDesc:'Gold, silver, and bronze podiums by event for this competition.', competitionBestTimeTitle:'Best-Time Entry Coverage', competitionBestTimeDesc:'Summarizes final personal-best rows entered in the best_times sheet for this competition.',
      countryInfoLabel:'Country-related records', seasonInfoLabel:'Season-related records', selectCountryPrompt:'Select a country.', selectSeasonPrompt:'Select a season.',
      tierMakerTitle:'Tier Maker', tierMakerDesc:'Drag skater cards into S/A/B/C/D/Hold tiers. This is a user-made tool, not an official evaluation.', tierSearch:'Skater search', tierSearchPlaceholder:'Search skater or country', mixedRelayIncluded:'Mixed / relays included', tierSource:'Skater pool', tierMedalSkaters:'Skaters with medal records', tierAllSkaters:'All skaters', refresh:'Refresh', reset:'Reset', tierNote:'Tier names are editable. Drag skater cards into tier rows or back to the skater list.', tierPoolTitle:'Skater list', tierPoolEmpty:'Skaters appear after the data loads.', tierBoardTitle:'Tier board', saveImage:'Save image', copyText:'Copy text', generateText:'Generate text', tierCopyPlaceholder:'Press Generate text to show the tier-board result here.', tierNoSkater:'No skaters match these filters.', tierDragHere:'Drag here', tierResetConfirm:'Reset the current tier board?', tierCopied:'Tier-board text copied.', tierCopyManual:'Automatic copy was blocked. Select and copy the text below.', tierExportTitle:'Short Track Skater Tier Board', tierImageFail:'Could not save the image. This may be a browser security limitation. Use text copy instead.', tierImageRetry:'Could not save the image. Please try again.', noRecord:'No records',
      cardCustomGradePlaceholder:'e.g. ACE', fanCardImagePlaceholder:'Enter an image URL to display it here.', fanStatStamina:'Stamina', fanStatSpeed:'Speed', fanStatStart:'Start', fanStatPhysical:'Physicality', fanStatOutside:'Outside pass', fanStatInside:'Inside pass', fanStatRaceCraft:'Race craft', fanStatMarking:'Course marking',
      recordRankDesc:'Shows qualifying 500m, 1000m, 1500m, and relay results in fastest-time order.', event:'Event', competition:'Competition', competitionType:'Competition type', tryAgainLater:'Please try again later.', recordFinalRank:'Final placement', firstOnly:'1st place only', recordBestOnly:'Skater records', allRecords:'All records', bestPerSkater:'Personal best only', displayLimit:'Display limit', loadData:'Load', recordKpiQualified:'Qualified records', individualEvents:'Individual events', relayEvents:'Relay events', currentlyShown:'Currently shown', recordNotLoaded:'Event record data has not been loaded yet. Click <strong>Load</strong> above.', recordDataNotReady:'Event record data is not ready.', recordLoading:'Loading event record rankings.', recordDataNotFound:'No event record data was found.', recordLoadFailed:'Could not load event record data.', recordNoMatch:'No records match these filters.', adjustRecordFilters:'Adjust gender, season, event, or competition filters.', recordShownSummary:'Current filters', shownCount:'shown', ofCount:'of', record:'Record', skaterTeam:'Skater/team', source:'Source', view:'View', viewSource:'View source', details:'Details',
      lapRankDesc:'Shows the fastest laps from ISU Results lap time / split time rank data.', lapRankNotice:'Women’s individual and women’s relay laps are shown at <strong>8.59 seconds or faster</strong>; men’s individual and men’s relay laps at <strong>8.19 seconds or faster</strong>. <strong>Women 3000 m Relay</strong>, <strong>Men 5000 m Relay</strong>, and <strong>Mixed Team Relay</strong> are included. Relay lap-time coverage is incomplete.', lapContextLabel:'Lap-time category', lapLead:'Lead', lapPass:'Pass', lapFollow:'Follow', lapPassed:'Passed', lapUnknown:'Unclassified', lapSortNote:'All-view sorting: fastest lap time, then lead > pass > follow > passed for tied times.', lapKpiCollected:'Fast laps collected', lapWomenThreshold:'Women / women relay threshold', lapMenThreshold:'Men / men relay threshold', relayDisplay:'Relay display', included:'Included', lapNotLoaded:'Lap-time data has not been loaded yet. Click <strong>Load</strong> above.', lapDataNotReady:'Lap-time data is not ready.', lapLoading:'Loading lap-time rankings.', lapLoadFailed:'Could not load lap-time data.', lapNoMatch:'No lap times match these filters.', adjustLapFilters:'Adjust gender, season, event, or category filters.', lapTime:'Lap time', round:'Round', heat:'Heat', lap:'Lap', basis:'Basis', seasonRound:'Season/round', totalShown:'Total',
      medalListTitle:'Medal List', medalListDesc:'Detailed source rows for checking raw records. Kept at the bottom because the list can get long.', genderTabsLabel:'Gender tabs', medalTabsLabel:'Medal tabs', allMedals:'All medals',
      filterSettings:'Filters', closeFilters:'Close filters', heatFilterTitle:'Heat draw settings', skaterFilterTitle:'Skater ranking filters', countryFilterTitle:'Country ranking filters', eventFilterTitle:'Event ranking filters', compareFilterTitle:'Comparison settings', quizFilterTitle:'Quiz settings', recordFilterTitle:'Event record filters', lapFilterTitle:'Lap-time filters',
      countryPage:'Country page', skaterDetail:'Skater details', competitionDetails:'Competition details',
      showMoreSkaters:'Show more skaters', showMoreCountries:'Show more countries', showMoreRecords:'Show more records', showMoreLaps:'Show more lap times', showMoreRawRows:'Show more source rows', showMoreEventRanks:'Show more event rankings', showMoreTableRows:'Show more table rows',
      heatNoAssigned:'No skaters assigned.', heatNoNextDraw:'No next-round draw assigned.', heatNoEliminated:'No eliminated skaters.',
      heatInputNote:'Enter the skaters needed for the current heat results. Use ADV only for skaters advanced by referee decision.',
      heatSeedOrderNote:'Seed order: direct qualifiers by previous-round place then time, followed by ADV skaters and finally time qualifiers.',
      heatAssignmentNote:'Heats use snake seeding. SP in each heat follows the same seed order from the inside lane outward.',
      searchRawPrompt:'Search by skater, country, competition, season, or event to show source rows.',
      heatToolTitle:'Heat Draw Tool', heatToolDesc:'Enter race results to calculate qualifiers and estimate the next-round heat draw.', heatToolNotice:'This is a fan-made helper. Because ADV qualifiers may occur, set the number of skaters per heat manually before building the result table. Qualifiers are seeded by finish-position groups first, then by time within each group; next-round heats are assigned by snake seeding. SP within each next-round heat is then re-sorted by the previous-round time. Actual official heat draws may differ, and ADV/ties should be checked manually.', heatDistance:'Event', heatRound:'Current round', roundPreliminary:'Preliminary', roundHeats:'Heats', roundQuarterfinals:'Quarterfinals', roundSemifinals:'Semifinals', heatCount:'Current heats', heatSkatersPerHeat:'Skaters per heat', heatAutoQualifiers:'Auto qualifiers per heat', heatTimeQualifiers:'Fastest additional qualifiers', heatNextCount:'Next-round heats', heatSeedMethod:'Seeding method', seedSnake:'Snake seeding', seedStraight:'Straight seeding', heatTimeSort:'Time sorting', timeFastest:'Fastest first', timeNone:'Do not use times', buildHeatTable:'Build result table', calculateHeatDraw:'Calculate qualifiers & draw', sampleHeatData:'Fill sample', clearHeatData:'Clear input', heatInputEmpty:'Build a result table first.', heatOutputEmpty:'Results will appear here.', heatNoQualifiers:'No qualifiers.', heatAutoQ:'Auto qualifier', heatTimeQ:'Time qualifier', heatAdv:'ADV', heatEliminated:'Eliminated', heatQualifiers:'Qualifiers', heatNextDraw:'Next-round heat draw', heatName:'Skater', heatCountry:'Country', heatPosition:'Place', heatTime:'Time', heatStatus:'Status', heatHeat:'Heat', heatReason:'Reason', heatRank:'Seed', heatSP:'SP', heatOfficialNote:'Estimated heat draw. Actual official heat draws may differ.',
      quizTitle:'Random Short Track Quiz', quizDesc:'Questions are generated automatically from the current medals data. You do not need to create questions manually; when new data is added, the quiz pool updates after refresh.', quizNotice:'Questions focus on individual events and exclude relays, 3000m, Olympic demonstration events, joint-medal cases, and incomplete podiums. If you find an error, report it from that question.', quizCount:'Questions', quizEra:'Era', quizType:'Question type', quizTypeMixed:'Mixed', quizTypeGold:'Gold medalist', quizTypePodium:'Podium order', quizTypeCountry:'Skater country', quizTypeMedal:'Medal color', startQuiz:'Start quiz', submitQuiz:'Grade quiz', resetQuiz:'Reset', quizEmpty:'Select options and start the quiz.', quizNoData:'No question candidates match these options.', quizQuestion:'Question', quizReport:'Report this question', quizCorrectAnswer:'Answer', quizYourAnswer:'Your answer', quizUnanswered:'Unanswered', quizScoreText:'Correct', quizAccuracy:'Accuracy', quizTitleGod:'ISU database itself', quizTitleLegend:'Short track encyclopedia', quizTitleWorld:'World Tour commentator', quizTitlePodium:'Podium tracker', quizTitleFan:'Rink regular', quizTitleRookie:'Needs replay training', quizGoldQuestion:'Who was the gold medalist?', quizPodiumQuestion:'Which podium order is correct?', quizCountryQuestion:'is from which country?', quizMedalQuestion:'What medal did this skater win?'
    });

    Object.assign(I18N.ko, {
      heatToolNotice:'2026년 6월 12일 시행 ISU 규정 기준 팬용 도우미입니다. ADV 진출자가 생길 수 있으므로 조별 선수 수를 직접 정해 결과 입력표를 만듭니다. 진출자는 직전 라운드 순위 우선·동순위 기록순으로 시드화하고, 다음 라운드 조는 지그재그로 배정합니다. 각 조의 SP도 순위 우선·동순위 기록순으로 안쪽부터 배정합니다. 실제 공식 조편성과 다를 수 있으며 ADV·동순위는 수동 확인이 필요합니다.',
      heatSeedMethod:'ISU 조 배정',
      seedSnake:'지그재그 배정',
      heatTimeSort:'동순위 기준',
      heatOfficialNote:'ISU 규정 293조 기준 추정 결과입니다. ADV·동순위 등으로 실제 공식 조편성과 다를 수 있습니다.'
    });

    Object.assign(I18N.en, {
      heatToolNotice:'Fan-made helper based on the ISU rules effective June 12, 2026. Qualifiers are seeded by previous-round place first and time within the same place; next-round heats use snake seeding. SP in each heat follows the same place-first, time-second order from the inside lane outward. Set heat sizes manually when ADV skaters are involved, and verify ties against the official draw.',
      heatSeedMethod:'ISU heat assignment',
      seedSnake:'Snake seeding',
      heatTimeSort:'Same-place tiebreaker',
      heatOfficialNote:'Estimated under ISU Rule 293. ADV cases and ties can still make the official draw differ.'
    });

    const FAN_CARD_DEFAULT_STATS = {
      ko:['체력','스피드','스타트','몸싸움','아웃코스','인코스','경기운영','코스마킹'],
      en:['Stamina','Speed','Start','Physicality','Outside pass','Inside pass','Race craft','Course marking']
    };


    function sanitizeI18nText(value){
      return String(value || '')
        .replace(/<\/?span[^>]*>/g,'')
        .replace(/&lt;\/?span[^&]*&gt;/g,'');
    }

    function tr(key){
      return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.ko && I18N.ko[key]) || key;
    }
    function initialLanguage(){
      try{
        const saved=localStorage.getItem('shorttrack_lang');
        if(saved === 'ko' || saved === 'en') return saved;
      }catch(_e){}
      const langs=[navigator.language, ...(navigator.languages || [])].filter(Boolean).map(v=>String(v).toLowerCase());
      return langs.some(v=>v === 'ko' || v.startsWith('ko-')) ? 'ko' : 'en';
    }
    function updateLocalizedFileInput(){
      const input=document.getElementById('fanCardImageFile');
      const label=document.getElementById('fanCardImageFileName');
      if(!label) return;
      label.textContent=input?.files?.[0]?.name || tr('noFileSelected');
    }

    function localizeFanCardDefaults(){
      const next = FAN_CARD_DEFAULT_STATS[currentLang] || FAN_CARD_DEFAULT_STATS.ko;
      const known = new Set([...(FAN_CARD_DEFAULT_STATS.ko || []), ...(FAN_CARD_DEFAULT_STATS.en || [])]);
      document.querySelectorAll('.fan-stat-name').forEach((input,index)=>{
        const current = input.value.trim();
        if(known.has(current) && next[index]) input.value = next[index];
      });
      const placeholder = document.getElementById('fanCardImagePlaceholder');
      if(placeholder && placeholder.style.display !== 'none') placeholder.textContent = tr('fanCardImagePlaceholder');
      if(typeof updateFanCard === 'function') updateFanCard();
    }

    function playerTimelineDetailsCopy(open){
      if(currentLang === 'en'){
        return {
          action: open ? 'Hide' : 'Show timeline',
          placeholder: 'Open the timeline to display it.'
        };
      }
      return {
        action: open ? '접기' : '타임라인 보기',
        placeholder: '타임라인 보기 버튼을 누르면 표시됩니다.'
      };
    }

    function updatePlayerTimelineDetailsAction(open){
      const action=document.querySelector('#playerTimelineDetails .player-timeline-details-action');
      if(action) action.textContent=playerTimelineDetailsCopy(open).action;
    }

    function resetPlayerTimelineDetails(name){
      const details=document.getElementById('playerTimelineDetails');
      const wrap=document.getElementById('playerTimeline');
      if(details){
        details.open=false;
        details.dataset.playerName=name||'';
        details.dataset.rendered='';
      }
      if(wrap) wrap.innerHTML=`<div class="empty">${escapeHtml(playerTimelineDetailsCopy(false).placeholder)}</div>`;
      updatePlayerTimelineDetailsAction(false);
    }

    function handlePlayerTimelineDetailsToggle(details){
      if(!details) return;
      updatePlayerTimelineDetailsAction(details.open);
      if(!details.open) return;
      const name=details.dataset.playerName || document.getElementById('playerName')?.textContent || '';
      if(!name || details.dataset.rendered===name) return;
      renderPlayerTimeline(name);
      details.dataset.rendered=name;
    }

    function setLanguage(lang){
      const activePlayerPanel=document.getElementById('playerPanel');
      const activePlayerName=activePlayerPanel?.classList.contains('active')
        ? (activePlayerPanel.dataset.playerName || document.getElementById('playerName')?.textContent?.trim() || '')
        : '';
      currentLang = lang === 'en' ? 'en' : 'ko';
      document.documentElement.lang = currentLang;
      document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang === currentLang));
      document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent = sanitizeI18nText(tr(el.dataset.i18n));});
      document.querySelectorAll('[data-i18n-html]').forEach(el=>{el.innerHTML = tr(el.dataset.i18nHtml);});
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.setAttribute('placeholder', tr(el.dataset.i18nPlaceholder));});
      document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{el.setAttribute('aria-label', tr(el.dataset.i18nAriaLabel));});
      document.querySelectorAll('[data-mobile-filter-title]').forEach(el=>{el.textContent = tr(el.dataset.mobileFilterTitle);});
      document.querySelectorAll('.hof-title,.hof-note,.hof-unit[data-ko],.hof-unit[data-en]').forEach(el=>{el.textContent = currentLang === 'en' ? (el.dataset.en || el.textContent) : (el.dataset.ko || el.textContent);});
      localizeFanCardDefaults();
      updateLocalizedFileInput();
      refreshSelectOptionLabels();
      renderSummary(filteredMedals || []);
      if(filteredMedals) renderCountryRanking(getFilteredCountryMedals());
      if(typeof getFilteredSkaterMedals === 'function') renderSkaterRanking(getFilteredSkaterMedals());
      if(typeof getFilteredEventRankingMedals === 'function') renderEventRanking(getFilteredEventRankingMedals());
      if(typeof renderPlayerComparison === 'function') renderPlayerComparison();
      if(typeof updateAllSeasonModeControls === 'function') updateAllSeasonModeControls();
      if(typeof updateSkaterScoreStatus === 'function') updateSkaterScoreStatus('applied');
      // Load large record datasets on demand so they do not compete with initialData.
      if(typeof window.renderEventRecords === 'function') window.renderEventRecords();
      if(typeof renderLapRankings === 'function') renderLapRankings();
      document.querySelectorAll('.tier-label').forEach(el=>{
        const text = el.textContent.trim();
        if(text === '보류' || text === 'Hold') el.textContent = currentLang === 'en' ? 'Hold' : '보류';
      });
      if(typeof window.syncTierLabels === 'function') window.syncTierLabels();
      if(typeof populateTierCountryFilter === 'function') populateTierCountryFilter();
      if(typeof renderTierPool === 'function') renderTierPool();
      if(typeof renderTierBoard === 'function') renderTierBoard();
      if(typeof window.buildMobileHeatInputCards === 'function') window.buildMobileHeatInputCards();
      if(activePlayerName && typeof openPlayerPanel === 'function') openPlayerPanel(activePlayerName);
      if(typeof window.buildMobileHeatResults === 'function') window.buildMobileHeatResults();
      if(typeof stRenderRecentSearches === 'function') stRenderRecentSearches();
      if(typeof window.renderRecentPlayers === 'function') window.renderRecentPlayers();
      if(typeof refreshLoadingStatusText === 'function') refreshLoadingStatusText();
      updatePlayerTimelineDetailsAction(document.getElementById('playerTimelineDetails')?.open);
    }

    function refreshLoadingStatusText(){
      const loadingStatus=document.getElementById('loadingStatus');
      if(!loadingStatus) return;
      const state=loadingStatus.dataset.state || 'loading';
      if(state === 'loaded'){
        const generatedRaw=loadingStatus.dataset.generatedAt || '';
        loadingStatus.textContent=generatedRaw ? `${currentLang==='en'?'Last updated':'업데이트'} ${new Date(generatedRaw).toLocaleString(currentLang==='en'?'en-US':'ko-KR')}` : '';
      }else if(state === 'error'){
        loadingStatus.textContent = loadingStatus.dataset.errorMessage || `${tr('dataLoadFail')} ${tr('tryAgainLater')}`;
      }else{
        loadingStatus.textContent=tr('loading');
      }
    }

    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkNr8yBRI_ok8aFZd623RmHhNCpyHFKuTvdwxYiczFi_LFff5olScBXSPGPd_-QWepKg/exec';
    const LAP_API_URL = APPS_SCRIPT_URL; // 랩타임 API를 별도 배포하면 이 주소만 교체

    let medals = [];
    let relayMembers = [];
    let bestTimes = [];
    let eventRecordsCache = [];
    let skaterAliases = [];
    let skaterAliasMap = new Map();
    let athleteCountryHistory = [];
    let skaterMedals = [];
    let filteredMedals = [];
    let currentMedalFilter = '';
    let countryRankingGroup = 'all';
    let eventRankingEvent = '500';
    let eventRankingGender = 'all';
    let compareGender = 'all';
    let eventRankingOptions = { includeOlympicDemo: false };
    let eventSortKey = 'score';
    let eventSortDir = 'desc';
    let relayIncludeNoticeShown = false;
    let skaterRankingMode = 'individual';
    let skaterSortKey = 'default';
    let skaterSortDir = 'desc';
    let skaterCustomScoreEnabled = true;
    let skaterRankingGender = 'all';
    let skaterSeason = '';
    let compareSeason = '';
    let countrySeason = '';
    let eventSeason = '';
    let skaterEraStart = '';
    let skaterEraEnd = '';
    let compareEraStart = '';
    let compareEraEnd = '';
    let countryEraStart = '';
    let countryEraEnd = '';
    let eventEraStart = '';
    let eventEraEnd = '';
    let compareOptions = { includeWorldsOverall: true };
    let fanCardUploadedImageDataUrl = '';
    let currentQuizQuestions = [];
    const SKATER_RANKING_PAGE_SIZE = 20;
    const COUNTRY_RANKING_PAGE_SIZE = 10;
    const EVENT_RANKING_PAGE_SIZE = 20;
    let skaterRankingVisibleCount = SKATER_RANKING_PAGE_SIZE;
    let countryRankingVisibleCount = COUNTRY_RANKING_PAGE_SIZE;
    let eventRankingVisibleCount = EVENT_RANKING_PAGE_SIZE;
    const SKATER_SCORE_DEFAULTS = {
      olympic_gold: 816,
      olympic_silver: 504,
      olympic_bronze: 312,
      worlds_gold: 204,
      worlds_silver: 126,
      worlds_bronze: 78,
      worlds_overall_gold: 204,
      worlds_overall_silver: 126,
      worlds_overall_bronze: 78,
      worldcup_gold: 34,
      worldcup_silver: 21,
      worldcup_bronze: 13
    };
    let seasonFilterModes = {
      skater: 'single',
      compare: 'single',
      country: 'single',
      event: 'single'
    };
    let mobileFilterLastFocus = null;
    let skaterRankingOptions = {
      includeOlympicDemo: false,
      includeWorldsOverall: true,
      separateWorldsOverall: true,
      includeIndividual3000m: false
    };
    let scoreWeights = {...SKATER_SCORE_DEFAULTS};
    let lastAppliedSkaterScoreWeights = {...SKATER_SCORE_DEFAULTS};

    let archiveCommittedSearch = '';
    const searchInput = document.getElementById('searchInput');
    const skaterSeasonFilter = document.getElementById('skaterSeasonFilter');
    const compareSeasonFilter = document.getElementById('compareSeasonFilter');
    const countrySeasonFilter = document.getElementById('countrySeasonFilter');
    const eventSeasonFilter = document.getElementById('eventSeasonFilter');
    const skaterEraStartSelect = document.getElementById('skaterEraStart');
    const skaterEraEndSelect = document.getElementById('skaterEraEnd');
    const compareEraStartSelect = document.getElementById('compareEraStart');
    const compareEraEndSelect = document.getElementById('compareEraEnd');
    const countryEraStartSelect = document.getElementById('countryEraStart');
    const countryEraEndSelect = document.getElementById('countryEraEnd');
    const eventEraStartSelect = document.getElementById('eventEraStart');
    const eventEraEndSelect = document.getElementById('eventEraEnd');
    const searchSortSelect = document.getElementById('searchSortSelect');

    const VIEW_MODE_STORAGE_KEY = 'shorttrack_view_mode_v1';
    const VIEW_MODE_MEDIA_QUERY = window.matchMedia ? window.matchMedia('(max-width: 820px)') : null;
    let currentViewMode = 'auto';

    function normalizeViewMode(mode){
      return ['auto','mobile','desktop'].includes(mode) ? mode : 'auto';
    }
    function readSavedViewMode(){
      try{return normalizeViewMode(localStorage.getItem(VIEW_MODE_STORAGE_KEY) || 'auto');}
      catch(_e){return 'auto';}
    }
    function getEffectiveViewMode(){
      if(currentViewMode === 'mobile' || currentViewMode === 'desktop') return currentViewMode;
      return VIEW_MODE_MEDIA_QUERY && VIEW_MODE_MEDIA_QUERY.matches ? 'mobile' : 'desktop';
    }
    function applyViewMode(){
      currentViewMode = normalizeViewMode(currentViewMode);
      const effective = getEffectiveViewMode();
      document.body.classList.toggle('st-view-mobile', effective === 'mobile');
      document.body.classList.toggle('st-view-desktop', effective === 'desktop');
      document.querySelectorAll('.view-btn').forEach(btn=>{
        const active = btn.dataset.viewMode === currentViewMode;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }
    function setViewMode(mode){
      currentViewMode = normalizeViewMode(mode);
      try{localStorage.setItem(VIEW_MODE_STORAGE_KEY, currentViewMode);}catch(_e){}
      applyViewMode();
    }
    window.setViewMode = setViewMode;
    function focusMobileSearch(){
      const effective = getEffectiveViewMode();
      const target = effective === 'mobile' ? document.getElementById('mobileSearchInput') : searchInput;
      scrollToSection(effective === 'mobile' ? 'mobileHomeSection' : 'searchSection');
      setTimeout(()=>target?.focus(), 260);
    }
    window.focusMobileSearch = focusMobileSearch;
    function toggleMobileSettings(){
      const header = document.querySelector('header');
      if(!header) return;
      const open = !header.classList.contains('mobile-settings-open');
      header.classList.toggle('mobile-settings-open', open);
      document.querySelector('.mobile-settings-btn')?.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    window.toggleMobileSettings = toggleMobileSettings;
    function initViewModeControls(){
      currentViewMode = readSavedViewMode();
      applyViewMode();
      const onMediaChange = () => { if(currentViewMode === 'auto') applyViewMode(); };
      if(VIEW_MODE_MEDIA_QUERY){
        if(typeof VIEW_MODE_MEDIA_QUERY.addEventListener === 'function') VIEW_MODE_MEDIA_QUERY.addEventListener('change', onMediaChange);
        else if(typeof VIEW_MODE_MEDIA_QUERY.addListener === 'function') VIEW_MODE_MEDIA_QUERY.addListener(onMediaChange);
      }
      const mobileSearchInput = document.getElementById('mobileSearchInput');
      if(mobileSearchInput){
        mobileSearchInput.value = searchInput?.value || '';
        mobileSearchInput.addEventListener('input', ()=>{
          if(searchInput && searchInput.value !== mobileSearchInput.value){
            searchInput.value = mobileSearchInput.value;
          }
        });
        mobileSearchInput.addEventListener('keydown', event=>{
          if(event.key === 'Enter' && !event.isComposing){
            event.preventDefault();
            commitSearchAndScrollToResults();
          }
        });
      }
      searchInput?.addEventListener('input', ()=>{
        if(mobileSearchInput && mobileSearchInput.value !== searchInput.value) mobileSearchInput.value = searchInput.value;
      });
    }

    document.addEventListener('DOMContentLoaded', init);

    async function init(){
      initViewModeControls();
      bindEvents();
      setLanguage(initialLanguage());
      syncSkaterScoreInputs(scoreWeights);
      updateSkaterScoreStatus('applied');
      applyViewMode();
      updateCompareOptionTabs();
      updateEventGenderTabs();
      updateFanCard();
      updateWorldsOverallScoreFields();
      const loadingStatus=document.getElementById('loadingStatus');
      if(loadingStatus) loadingStatus.textContent=tr('loading');
      if(!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('여기에')){showNotConnected();return;}
      registerVisit();
      const loaded = await startLiveResults();
      if(!loaded) return;
      if(!window.shorttrackDataReady){
        window.shorttrackDataReady = true;
        window.dispatchEvent(new CustomEvent('shorttrack:data-ready'));
      }
      updateFanCard();
    }

    function bindEvents(){
      enhanceSeasonControls();
      searchInput.addEventListener('keydown', event=>{
        if(event.key === 'Enter' && !event.isComposing){
          event.preventDefault();
          commitSearchAndScrollToResults();
        }
      });
      ['searchSortSelect','searchIndividualOnly','searchRelayOnly','searchGoldOnly','searchExcludeWorldsOverall','searchExclude3000'].forEach(id=>{
        document.getElementById(id)?.addEventListener('change', applyFilters);
      });

      document.querySelectorAll('.medal-tab').forEach(btn=>btn.addEventListener('click',()=>{
        document.querySelectorAll('.medal-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        currentMedalFilter = btn.dataset.medal;
        applyFilters();
        if(typeof window.archiveRefreshTierSource === 'function') window.archiveRefreshTierSource();
      }));

      document.querySelectorAll('.skater-mode-tab').forEach(btn=>btn.addEventListener('click',()=>{
        const nextMode = btn.dataset.mode;
        if(nextMode === 'all' && skaterRankingMode !== 'all' && !relayIncludeNoticeShown){
          alert(tr('relayNotice'));
          relayIncludeNoticeShown = true;
        }
        document.querySelectorAll('.skater-mode-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        skaterRankingMode = nextMode;
        resetSkaterRankingVisibleCount();
        resetEventRankingVisibleCount();
        renderSkaterRanking(getFilteredSkaterMedals());
        renderEventRanking(getFilteredEventRankingMedals());
      }));

      document.querySelectorAll('.skater-rank-gender-tab').forEach(btn=>btn.addEventListener('click',()=>{
        document.querySelectorAll('.skater-rank-gender-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        skaterRankingGender = btn.dataset.rankGender || 'all';
        resetSkaterRankingVisibleCount();
        renderSkaterRanking(getFilteredSkaterMedals());
      }));

      document.querySelectorAll('.ranking-option-tab').forEach(btn=>btn.addEventListener('click',()=>{
        const option = btn.dataset.option;
        if(!option || !(option in skaterRankingOptions)) return;
        skaterRankingOptions[option] = !skaterRankingOptions[option];

        if(option === 'includeWorldsOverall'){
          skaterRankingOptions.separateWorldsOverall = !!skaterRankingOptions.includeWorldsOverall;
          if(skaterRankingOptions.includeWorldsOverall){
            copyWorldsScoresToOverallScores();
          }else{
            resetWorldsOverallScoreInputs();
          }
        }

        if(option === 'separateWorldsOverall'){
          if(skaterRankingOptions.separateWorldsOverall){
            skaterRankingOptions.includeWorldsOverall = true;
            copyWorldsScoresToOverallScores();
          }else{
            resetWorldsOverallScoreInputs();
          }
        }

        document.querySelectorAll('.ranking-option-tab').forEach(b=>{
          const opt=b.dataset.option;
          if(opt && opt in skaterRankingOptions) b.classList.toggle('active', !!skaterRankingOptions[opt]);
        });
        updateWorldsOverallScoreFields();
        resetSkaterRankingVisibleCount();
        renderSkaterRanking(getFilteredSkaterMedals());
      }));


      document.querySelectorAll('.country-ranking-tab').forEach(btn=>btn.addEventListener('click',()=>{
        document.querySelectorAll('.country-ranking-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        countryRankingGroup = btn.dataset.countryGroup || 'all';
        resetCountryRankingVisibleCount();
        renderCountryRanking(getFilteredCountryMedals());
      }));

      document.querySelectorAll('.event-ranking-tab').forEach(btn=>btn.addEventListener('click',()=>{
        document.querySelectorAll('.event-ranking-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        eventRankingEvent = btn.dataset.eventRank || '500';
        eventSortKey = 'score';
        eventSortDir = 'desc';
        resetEventRankingVisibleCount();
        updateEventGenderTabs();
        renderEventRanking(getFilteredEventRankingMedals());
      }));

      document.querySelectorAll('.event-rank-gender-tab').forEach(btn=>btn.addEventListener('click',()=>{
        if(btn.disabled) return;
        document.querySelectorAll('.event-rank-gender-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        eventRankingGender = btn.dataset.eventRankGender || 'all';
        resetEventRankingVisibleCount();
        renderEventRanking(getFilteredEventRankingMedals());
      }));

      document.querySelectorAll('.event-ranking-option-tab').forEach(btn=>btn.addEventListener('click',()=>{
        const option = btn.dataset.eventOption;
        if(option === 'includeOlympicDemo'){
          eventRankingOptions.includeOlympicDemo = true;
        }else if(option === 'excludeOlympicDemo'){
          eventRankingOptions.includeOlympicDemo = false;
        }
        document.querySelectorAll('.event-ranking-option-tab').forEach(b=>b.classList.remove('active'));
        document.querySelectorAll('.event-ranking-option-tab').forEach(b=>{
          const opt=b.dataset.eventOption;
          b.classList.toggle('active',
            (opt === 'includeOlympicDemo' && eventRankingOptions.includeOlympicDemo) ||
            (opt === 'excludeOlympicDemo' && !eventRankingOptions.includeOlympicDemo)
          );
        });
        resetEventRankingVisibleCount();
        renderEventRanking(getFilteredEventRankingMedals());
      }));

      document.querySelectorAll('.compare-gender-tab').forEach(btn=>btn.addEventListener('click',()=>{
        compareGender = btn.dataset.compareGender || 'all';
        document.querySelectorAll('.compare-gender-tab').forEach(b=>b.classList.toggle('active', b.dataset.compareGender===compareGender));
        setupComparePlayerSelects();
        const wrap=document.getElementById('compareWrap');
        if(wrap) wrap.innerHTML=`<div class="empty">${tr('compareEmpty')}</div>`;
      }));

      const compareA=document.getElementById('comparePlayerA');
      const compareB=document.getElementById('comparePlayerB');
      [compareA,compareB].forEach(el=>el&&el.addEventListener('change',renderPlayerComparison));

      document.querySelectorAll('.compare-option-tab').forEach(btn=>btn.addEventListener('click',()=>{
        if(btn.dataset.compareOption === 'includeWorldsOverall'){
          compareOptions.includeWorldsOverall = !compareOptions.includeWorldsOverall;
          updateCompareOptionTabs();
          renderPlayerComparison();
        }
      }));

      document.querySelectorAll('.compare-score-input').forEach(input=>input.addEventListener('input',renderPlayerComparison));

      document.getElementById('quizStartBtn')?.addEventListener('click', event=>{event.preventDefault(); startRandomQuiz();});
      document.getElementById('quizSubmitBtn')?.addEventListener('click', event=>{event.preventDefault(); submitRandomQuiz();});
      document.getElementById('quizResetBtn')?.addEventListener('click', event=>{event.preventDefault(); resetRandomQuiz();});

      bindSeasonEraFilters();


      document.querySelectorAll('.score-input').forEach(input=>input.addEventListener('input',markSkaterScoreDirty));
      document.querySelectorAll('.event-score-input').forEach(input=>input.addEventListener('input',()=>{}));
    }

    function showNotConnected(){
      document.getElementById('tableWrap').innerHTML=`<div class="notice">${tr('appsNotConnected')}</div>`;
      (document.getElementById('skaterRankingTableWrap')||document.getElementById('skaterRankingWrap')).innerHTML=`<div class="empty">${tr('appsNotConnected')}</div>`;
      document.getElementById('countryRankingWrap').innerHTML=`<div class="empty">${tr('appsNotConnected')}</div>`; document.getElementById('eventRankingWrap').innerHTML=`<div class="empty">${tr('appsNotConnected')}</div>`;
    }


    const STATIC_DATA_BUILD_ID = '20261107215836';
    const API_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
    function buildApiUrl(params){
      const query = new URLSearchParams(params);
      return APPS_SCRIPT_URL + (APPS_SCRIPT_URL.includes('?') ? '&' : '?') + query.toString();
    }
    function staticDataUrl(path){
      const clean = String(path || '').replace(/^\/+/, '');
      let url;
      if(location.hostname.endsWith('github.io')){
        const parts = location.pathname.split('/').filter(Boolean);
        const repo = parts[0] || 'shorttrack';
        url = `${location.origin}/${repo}/${clean}`;
      }else{
        url = new URL(clean, document.baseURI || location.href).href;
      }
      if(clean.startsWith('data/')){
        const parsed = new URL(url, location.href);
        parsed.searchParams.set('v', STATIC_DATA_BUILD_ID);
        return parsed.href;
      }
      return url;
    }
    async function fetchJson(url, fetchOptions){
      const response = await fetch(url, fetchOptions);
      if(!response.ok) throw new Error(`Request failed ${response.status}: ${url}`);
      const text = await response.text();
      let json;
      try{
        json = JSON.parse(text);
      }catch(error){
        throw new Error('API response was not JSON');
      }
      return json;
    }
    async function fetchStaticJson(path){
      return fetchJson(staticDataUrl(path), {cache:'force-cache'});
    }
    function runWhenIdle(callback, timeout = 1200){
      if(typeof callback !== 'function') return 0;
      if('requestIdleCallback' in window) return window.requestIdleCallback(callback, {timeout});
      return window.setTimeout(callback, 0);
    }
    const liveRequests = new Map();
    function fetchLiveJson(url){
      // Share concurrent consumers, but never reuse an old Sheets response.
      if(liveRequests.has(url)) return liveRequests.get(url);
      const request = (async()=>{
        const target = new URL(url, location.href);
        target.searchParams.set('_live', Date.now().toString());
        const json = await fetchJson(target.href, {cache:'no-store', signal:AbortSignal.timeout(60000)});
        if(!json || json.ok === false) throw new Error(json?.error || 'Sheets API error');
        return json;
      })().finally(()=>liveRequests.delete(url));
      liveRequests.set(url, request);
      return request;
    }
    async function cachedFetchJson(url, storageKey, ttlMs = API_CACHE_TTL_MS){
      if(String(url).startsWith(APPS_SCRIPT_URL)) return fetchLiveJson(url);
      const now = Date.now();
      const requestUrl = /^data\//.test(String(url || '')) ? staticDataUrl(url) : url;
      try{
        const cached = JSON.parse(localStorage.getItem(storageKey) || 'null');
        if(cached && cached.version === STATIC_DATA_BUILD_ID && cached.expires > now && cached.value) return cached.value;
      }catch(_e){}
      const json = await fetchJson(requestUrl, /^data\//.test(String(url || '')) ? {cache:'no-cache'} : undefined);
      if(json && json.ok !== false){
        try{ localStorage.setItem(storageKey, JSON.stringify({version:STATIC_DATA_BUILD_ID, expires: now + ttlMs, value: json})); }catch(_e){}
      }
      return json;
    }
    function hasUsableBestTimes(rows){
      return Array.isArray(rows) && rows.some(row => String(row && (row.best_time || row.final_time || row.time || row.record || row.lap_time || row.cumulative_time) || '').trim());
    }
    async function refreshBestTimesIfNeeded(json){
      if(hasUsableBestTimes(json && json.best_times)) return json;
      try{
        const bestJson = await cachedFetchJson(buildApiUrl({type:'best_times'}), 'shorttrack_best_times_v4');
        if(hasUsableBestTimes(bestJson && bestJson.best_times)){
          return {...json, best_times: bestJson.best_times};
        }
      }catch(_bestTimesError){}
      return json;
    }
    async function fetchInitialData(){
      return archiveFetchCoreData();
    }
    async function fetchAthleteCountryHistory(){
      try{
        const json = await cachedFetchJson(staticDataUrl('data/athlete-country-history.json'), 'shorttrack_athlete_country_history_v2');
        return Array.isArray(json && json.athletes) ? json.athletes : [];
      }catch(_e){
        return [];
      }
    }
    let __filterTimer = 0;
    function scheduleApplyFilters(){
      archiveCommittedSearch=String(searchInput?.value||'').trim();
      window.clearTimeout(__filterTimer);
      __filterTimer = window.setTimeout(() => applyFilters(), 120);
    }
    function commitSearchAndScrollToResults(){
      archiveCommittedSearch=String(searchInput?.value||'').trim();
      document.querySelectorAll('main > .panel.active').forEach(panel=>panel.classList.remove('active'));
      window.clearTimeout(__filterTimer);
      applyFilters();
      const query=String(searchInput?.value || '').trim();
      const target=query ? document.getElementById('stSearchResultView') : document.getElementById('searchSection');
      window.requestAnimationFrame(()=>{
        target?.scrollIntoView({behavior:'smooth', block:'start'});
      });
    }

    async function loadData(suppliedJson){
      try{
        const json=suppliedJson || await fetchInitialData();
        if(!json.ok) throw new Error(json.error || '데이터를 불러오지 못했습니다.');
        archiveInstallMaster(json.athlete_master||[]);
        athleteCountryHistory=normalizeAthleteCountryHistory(json.athlete_country_history||json.athletes||[]);
        skaterAliases=archiveSupplementAliases(json.skater_aliases||[]).map(normalizeAliasRow);
        skaterAliasMap=buildSkaterAliasMap(skaterAliases, [...(json.medals||[]),...(json.relay_members||[]),...(json.best_times||[])]);
        medals=(json.medals||[]).map(normalizeMedalRow);
        relayMembers=(json.relay_members||[]).map(normalizeRelayRow);
        bestTimes=(json.best_times||json.lap_times||[]).map(normalizeBestTimeRow);
        const initialEventRecords=extractEventRecordsFromJson(json).map(normalizeEventRecordCacheRow).filter(row=>row.skater_name && row.personal_best_event);
        if(initialEventRecords.length) eventRecordsCache=initialEventRecords;
        window.eventRecordsCache = eventRecordsCache;
        const loadingStatus=document.getElementById('loadingStatus');
        if(loadingStatus){
          loadingStatus.dataset.state='loaded';
          loadingStatus.dataset.medals=String(medals.length);
          loadingStatus.dataset.relayMembers=String(relayMembers.length);
          loadingStatus.dataset.bestTimes=String(bestTimes.length);
          loadingStatus.dataset.eventRecords=String(eventRecordsCache.length);
          loadingStatus.dataset.generatedAt=json.generated_at || '';
          refreshLoadingStatusText();
        }
        skaterMedals=buildSkaterMedals();
        setupSectionSeasonFilters();
        setupSectionEraFilters();
        runWhenIdle(()=>setupComparePlayerSelects(), 1600);
        applyFilters();
        if(typeof unlockLapFilterControls === 'function') unlockLapFilterControls();
        return true;
      }catch(error){
        console.error(error);
        const message = `${tr('dataLoadFail')} ${tr('tryAgainLater')}`;
        const loadingStatus=document.getElementById('loadingStatus');
        if(loadingStatus){
          loadingStatus.dataset.state='error';
          loadingStatus.dataset.errorMessage=message;
          loadingStatus.textContent = message;
        }
        document.getElementById('tableWrap').innerHTML=`<div class="error">${message}</div>`;
        (document.getElementById('skaterRankingTableWrap')||document.getElementById('skaterRankingWrap')).innerHTML=`<div class="empty">${tr('dataLoadFail')}</div>`;
        document.getElementById('countryRankingWrap').innerHTML=`<div class="empty">${tr('dataLoadFail')}</div>`; document.getElementById('eventRankingWrap').innerHTML=`<div class="empty">${tr('dataLoadFail')}</div>`;
        ['seasonDirectoryWrap','competitionDirectoryWrap','athleteDirectoryWrap'].forEach(id=>{
          const el=document.getElementById(id);
          if(el) el.innerHTML=`<div class="empty">${message}</div>`;
        });
        return false;
      }
    }

    function normalizeAliasRow(row){return {alias_name:String(row.alias_name||'').trim(),canonical_name:String(row.canonical_name||'').trim(),country:archiveCountryCode(row.country),original_country:String(row.country||'').trim(),note:String(row.note||'').trim()};}
    function koreanAliasForSkater(name){
      const canonical = canonicalSkaterName(name);
      const keys = new Set([aliasKey(name), aliasKey(canonical), looseNameKey(name), looseNameKey(canonical)]);
      const row = (skaterAliases || []).find(item => {
        const alias = String(item.alias_name || '').trim();
        const itemCanonical = canonicalSkaterName(item.canonical_name);
        if(!/[가-힣]/.test(alias)) return false;
        return keys.has(aliasKey(item.canonical_name)) || keys.has(aliasKey(itemCanonical)) || keys.has(looseNameKey(item.canonical_name)) || keys.has(looseNameKey(itemCanonical));
      });
      return row ? String(row.alias_name || '').trim() : '';
    }
    function displaySkaterNameHtml(name){return escapeHtml(name);}
    function eventCountry(row){return String(row && (row.country_at_event || row.country) || '').trim();}
    function eventSkaterName(row){return String(row && (row.name_at_event || row.skater_name) || '').trim();}
    function normalizeAthleteCountryHistory(rows){
      return (rows||[]).map(item=>({
        canonical_name:String(item.canonical_name||'').trim(),
        aliases:(item.aliases||[]).map(alias=>String(alias||'').trim()).filter(Boolean),
        country_periods:(item.country_periods||[]).map(period=>({
          from_season:String(period.from_season||'').trim(),
          to_season:String(period.to_season||'').trim(),
          country:String(period.country||'').trim(),
          status:String(period.status||'').trim(),
          source_urls:(period.source_urls||[]).map(url=>String(url||'').trim()).filter(Boolean),
          effective_from:String(period.effective_from||'').trim(),
          effective_to:String(period.effective_to||'').trim()
        }))
      })).filter(item=>item.canonical_name);
    }
    function seasonStartNumberForCountryHistory(season, year){
      const text=String(season||year||'').trim();
      const match=text.match(/(\d{4})/);
      return match ? Number(match[1]) : 0;
    }
    function countryHistoryEntryForSkater(name){
      const keys=new Set([aliasKey(name), aliasKey(canonicalSkaterName(name)), looseNameKey(name), looseNameKey(canonicalSkaterName(name))]);
      return (athleteCountryHistory||[]).find(item=>{
        const names=[item.canonical_name, ...(item.aliases||[])];
        return names.some(value=>keys.has(aliasKey(value)) || keys.has(looseNameKey(value)));
      }) || null;
    }
    function countryHistoryPeriodForSeason(name, season, year){
      const entry=countryHistoryEntryForSkater(name);
      if(!entry) return null;
      const value=seasonStartNumberForCountryHistory(season, year);
      if(!value) return null;
      return (entry.country_periods||[]).find(period=>{
        const from=period.from_season ? seasonStartNumberForCountryHistory(period.from_season, period.from_season) : -Infinity;
        const to=period.to_season ? seasonStartNumberForCountryHistory(period.to_season, period.to_season) : Infinity;
        return value>=from && value<=to;
      }) || null;
    }
    function representativeCountryForRow(row, name){
      const period=countryHistoryPeriodForSeason(name || row?.skater_name || row?.original_skater_name, row?.season, row?.year);
      return period && period.country ? period.country : '';
    }
    function applyRepresentativeCountry(row, name){
      const country=representativeCountryForRow(row, name);
      if(!country) return row;
      return {...row, country, country_at_event:country};
    }
    function currentRepresentativeCountry(name, rows){
      const entry=countryHistoryEntryForSkater(name);
      if(entry){
        const active=(entry.country_periods||[]).filter(period=>period.country && period.status!=='transition' && period.status!=='no_international_results')
          .sort((a,b)=>seasonStartNumberForCountryHistory(b.from_season||b.to_season,b.from_season||b.to_season)-seasonStartNumberForCountryHistory(a.from_season||a.to_season,a.from_season||a.to_season))[0];
        if(active) return active.country;
      }
      const latest=(rows||[]).slice().sort((a,b)=>seasonStartNumberForCountryHistory(b.season,b.year)-seasonStartNumberForCountryHistory(a.season,a.year))[0];
      return latest ? eventCountry(latest) : '';
    }
    function countryHistorySummaryHtml(name){
      const entry=countryHistoryEntryForSkater(name);
      if(!entry || !entry.country_periods?.length) return '';
      const parts=entry.country_periods.map(period=>{
        const range=period.from_season && period.to_season && period.from_season!==period.to_season
          ? `${period.from_season}~${period.to_season}`
          : (period.from_season ? `${period.from_season}~` : (period.to_season ? `~${period.to_season}` : ''));
        const label=period.country || (period.status==='transition' ? '전환기' : '국제대회 기록 없음');
        return `<span class="quality-badge">${escapeHtml(label)}${range?` (${escapeHtml(range)})`:''}</span>`;
      }).join('');
      return `<div class="country-history-line"><strong>대표국 이력</strong>${parts}</div>`;
    }
    
    
    


    function buildSkaterAliasMap(rows, results=[]){
      const map=new Map();
      rows.forEach(row=>{if(!row.alias_name||!row.canonical_name)return;map.set(aliasKey(row.alias_name),row.canonical_name);map.set(aliasKey(row.canonical_name),row.canonical_name);});
      results.forEach(row=>{const name=String(row.skater_name||'').trim();if(name && !map.has(aliasKey(name))) map.set(aliasKey(name),name);});
      return map;
    }
    function aliasKey(name){return archiveNameKey(name);}
    function looseNameKey(name){return archiveNameKey(name);}
    function canonicalSkaterName(name){const raw=String(name||'').trim();if(!raw)return '';return skaterAliasMap.get(aliasKey(raw))||raw.normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC');}
    function addNameMatchingVariantsToSet(set, value){
      const raw=String(value||'').trim();
      if(!raw) return;
      const candidates=[raw, canonicalSkaterName(raw)];
      raw.split('/').forEach(v=>candidates.push(v));
      candidates.slice().forEach(v=>{
        const parts=String(v||'').trim().split(/\s+/).filter(Boolean);
        if(parts.length>=2) candidates.push([...parts].reverse().join(' '));
      });
      candidates.forEach(v=>{
        if(!v) return;
        set.add(aliasKey(v));
        set.add(looseNameKey(v));
      });
    }

    function buildSkaterMedals(){
      const individual=medals
        .filter(row=>row.skater_name && !isRelayEvent(row.event) && !isWorldChampionshipSuperFinalRow(row))
        .map(row=>({...row,medal_type:'Individual'}));
      const superFinal=medals
        .filter(row=>row.skater_name && isWorldChampionshipSuperFinalRow(row))
        .map(row=>({...row,medal_type:'SuperFinal'}));
      const relay=relayMembers.filter(row=>row.skater_name).map(row=>({...row,medal_type:'Relay'}));
      return [...individual,...superFinal,...relay];
    }


    function translateCompetitionType(value){
      const v=String(value||'').trim();
      const lower=v.toLowerCase();
      if(lower.includes('olympic')) return tr('olympicGames');
      if(lower.includes('world championship')) return tr('worldChampionships');
      if(lower.includes('world cup')) return tr('worldCup');
      if(lower.includes('world tour')) return tr('worldTour');
      if(lower.includes('challenge')) return tr('challengeCup');
      return v;
    }

    function translateEventName(value){
      const v=String(value||'').trim();
      const lower=v.toLowerCase().replace(/\s+/g,' ');
      if(/^overall|allround|classification|종합/.test(lower)) return tr('overall');
      if(isDistanceEvent(v,'500')) return '500m';
      if(isDistanceEvent(v,'1000')) return '1000m';
      if(isDistanceEvent(v,'1500')) return '1500m';
      if(lower === '3000m relay') return currentLang==='en' ? "Women's 3000m Relay" : "여자 3000m 계주";
      if(lower === '5000m relay') return currentLang==='en' ? "Men's 5000m Relay" : "남자 5000m 계주";
      if(lower === 'mixed relay' || lower === 'mixed 2000m relay') return currentLang==='en' ? "Mixed 2000m Relay" : "혼성 2000m 계주";
      return v;
    }

    function translateOptionValue(selectId,value){
      return value;
    }

    function refreshSelectOptionLabels(){
      [skaterSeasonFilter,compareSeasonFilter,countrySeasonFilter,eventSeasonFilter,skaterEraStartSelect,skaterEraEndSelect,compareEraStartSelect,compareEraEndSelect,countryEraStartSelect,countryEraEndSelect,eventEraStartSelect,eventEraEndSelect,document.getElementById('comparePlayerA'),document.getElementById('comparePlayerB')].forEach(select=>{
        if(!select) return;
        [...select.options].forEach(option=>{
          if(option.value===''){
            const key=option.dataset.i18n;
            if(key) option.textContent=tr(key);
          }else{
            option.textContent=translateOptionValue(select.id,option.value);
          }
        });
      });
    }


    function setupSectionEraFilters(){
      const seasons=[...new Set([...medals,...relayMembers]
        .map(row=>String(row.season||'').trim())
        .filter(season=>/^\d{4}-\d{2}$/.test(season)))]
        .sort((a,b)=>seasonSortValue(a)-seasonSortValue(b));

      [skaterEraStartSelect, compareEraStartSelect, countryEraStartSelect, eventEraStartSelect].forEach(select=>fillSeasonRangeSelect(select, seasons, 'eraStartAll'));
      [skaterEraEndSelect, compareEraEndSelect, countryEraEndSelect, eventEraEndSelect].forEach(select=>fillSeasonRangeSelect(select, seasons, 'eraEndAll'));
      updateAllSeasonModeControls();
    }

    function fillSeasonRangeSelect(el,seasons,labelKey){
      if(!el) return;
      const current=el.value;
      el.innerHTML=`<option value="" data-i18n="${labelKey}">${tr(labelKey)}</option>`;
      seasons.forEach(season=>{
        const opt=document.createElement('option');
        opt.value=season;
        opt.textContent=season;
        el.appendChild(opt);
      });
      if(current && seasons.includes(current)) el.value=current;
    }

    function getSkaterPrimaryGender(name){
      const genders=skaterMedals.filter(row=>row.skater_name===name).map(row=>row.gender).filter(Boolean);
      if(genders.includes('Women')) return 'women';
      if(genders.includes('Men')) return 'men';
      if(genders.includes('Mixed')) return 'mixed';
      return 'all';
    }

    function getComparePlayerNames(){
      return [...new Set(skaterMedals
        .filter(row=>{
          if(compareGender==='women') return row.gender==='Women';
          if(compareGender==='men') return row.gender==='Men';
          return row.gender==='Women' || row.gender==='Men' || row.gender==='Mixed';
        })
        .filter(row=>!compareSeason||row.season===compareSeason)
        .filter(row=>rowInEra(row, compareEraStart, compareEraEnd))
        .map(row=>row.skater_name)
        .filter(Boolean))]
        .sort((x,y)=>x.localeCompare(y,'ko'));
    }

    function setupComparePlayerSelects(){
      const a=document.getElementById('comparePlayerA');
      const b=document.getElementById('comparePlayerB');
      if(!a||!b) return;
      const names=getComparePlayerNames();
      fillPlayerSelect(a,names,'selectPlayerA');
      fillPlayerSelect(b,names,'selectPlayerB');
    }

    function fillPlayerSelect(el,names,labelKey){
      const current=el.value;
      el.innerHTML=`<option value="" data-i18n="${labelKey}">${tr(labelKey)}</option>`;
      names.forEach(name=>{
        const opt=document.createElement('option');
        opt.value=name;
        opt.textContent=name;
        el.appendChild(opt);
      });
      if(current && names.includes(current)) el.value=current;
    }


    function setupSectionSeasonFilters(){
      const seasons=unique(medals,'season');
      [skaterSeasonFilter, compareSeasonFilter, countrySeasonFilter, eventSeasonFilter].forEach(select=>{
        if(select) fillSelect(select,seasons,'allSeasons');
      });
      updateAllSeasonModeControls();
    }
    
    function fillSelect(el,values,labelKey){
      if(!el) return;
      const current=el.value;
      el.innerHTML=`<option value="" data-i18n="${labelKey}">${tr(labelKey)}</option>`;
      values.forEach(value=>{
        const opt=document.createElement('option');
        opt.value=value;
        opt.textContent=translateOptionValue(el.id,value);
        el.appendChild(opt);
      });
      if(current) el.value=current;
    }

    function seasonFilterConfigs(){
      return [
        { scope:'skater', season: skaterSeasonFilter, start: skaterEraStartSelect, end: skaterEraEndSelect, set: values=>{
          skaterSeason = values.season; skaterEraStart = values.start; skaterEraEnd = values.end;
        }},
        { scope:'compare', season: compareSeasonFilter, start: compareEraStartSelect, end: compareEraEndSelect, set: values=>{
          compareSeason = values.season; compareEraStart = values.start; compareEraEnd = values.end;
        }},
        { scope:'country', season: countrySeasonFilter, start: countryEraStartSelect, end: countryEraEndSelect, set: values=>{
          countrySeason = values.season; countryEraStart = values.start; countryEraEnd = values.end;
        }},
        { scope:'event', season: eventSeasonFilter, start: eventEraStartSelect, end: eventEraEndSelect, set: values=>{
          eventSeason = values.season; eventEraStart = values.start; eventEraEnd = values.end;
        }}
      ];
    }

    function getSeasonFilterConfig(scope){
      return seasonFilterConfigs().find(section=>section.scope === scope);
    }

    function selectedSeasonSummary(section){
      if(!section) return tr('seasonAllSummary');
      const mode = seasonFilterModes[section.scope] || 'single';
      const season = section.season?.value || '';
      const start = section.start?.value || '';
      const end = section.end?.value || '';
      if(mode === 'single') return season ? `${season} ${currentLang === 'en' ? 'season' : '시즌'}` : tr('seasonAllSummary');
      if(start && end) return start === end ? `${start} ${currentLang === 'en' ? 'season' : '시즌'}` : `${start}~${end}`;
      if(start) return currentLang === 'en' ? `From ${start}` : `${start} 이후`;
      if(end) return currentLang === 'en' ? `Until ${end}` : `${end}까지`;
      return tr('seasonAllSummary');
    }

    function normalizeSeasonRange(section){
      if(!section?.start || !section?.end) return;
      const start = section.start.value;
      const end = section.end.value;
      if(start && end && seasonSortValue(start,start) > seasonSortValue(end,end)){
        section.end.value = start;
      }
    }

    function updateSeasonModeControls(scope){
      const section = getSeasonFilterConfig(scope);
      if(!section) return;
      const mode = seasonFilterModes[scope] || 'single';
      const singleWrap = section.season?.closest('.era-controls');
      const rangeWrap = section.start?.closest('.era-controls');
      singleWrap?.classList.toggle('season-control-hidden', mode !== 'single');
      rangeWrap?.classList.toggle('season-control-hidden', mode !== 'range');
      document.querySelectorAll(`.season-mode-tab[data-season-scope="${scope}"]`).forEach(btn=>{
        const active = btn.dataset.seasonMode === mode;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      const summary = document.querySelector(`.season-mode-summary[data-season-scope="${scope}"]`);
      if(summary) summary.textContent = selectedSeasonSummary(section);
    }

    function updateAllSeasonModeControls(){
      Object.keys(seasonFilterModes).forEach(updateSeasonModeControls);
    }

    function applySeasonFilterChange(){
      setupComparePlayerSelects();
      applyFilters();
      renderPlayerComparison();
    }

    function setSeasonFilterMode(scope, mode, shouldApply = true){
      const section = getSeasonFilterConfig(scope);
      if(!section) return;
      seasonFilterModes[scope] = mode === 'range' ? 'range' : 'single';
      if(seasonFilterModes[scope] === 'single'){
        if(section.start) section.start.value = '';
        if(section.end) section.end.value = '';
        section.set({season: section.season?.value || '', start: '', end: ''});
      }else{
        if(section.season) section.season.value = '';
        normalizeSeasonRange(section);
        section.set({season: '', start: section.start?.value || '', end: section.end?.value || ''});
      }
      updateSeasonModeControls(scope);
      if(shouldApply) applySeasonFilterChange();
    }

    function enhanceSeasonControls(){
      seasonFilterConfigs().forEach(section=>{
        if(!section.season || !section.start || !section.end) return;
        const singleWrap = section.season.closest('.era-controls');
        const rangeWrap = section.start.closest('.era-controls');
        if(!singleWrap || !rangeWrap || singleWrap.dataset.seasonModeEnhanced) return;
        singleWrap.dataset.seasonModeEnhanced = '1';
        singleWrap.classList.add('season-single-control');
        rangeWrap.classList.add('season-range-control');

        const control = document.createElement('div');
        control.className = 'season-mode-control';
        control.dataset.seasonScope = section.scope;
        control.setAttribute('role','group');
        control.innerHTML = `
          <span class="ranking-filter-label" data-i18n="seasonMode">${tr('seasonMode')}</span>
          <button type="button" class="tab season-mode-tab" data-season-scope="${section.scope}" data-season-mode="single" data-i18n="singleSeasonMode" aria-pressed="true">${tr('singleSeasonMode')}</button>
          <button type="button" class="tab season-mode-tab" data-season-scope="${section.scope}" data-season-mode="range" data-i18n="seasonRangeMode" aria-pressed="false">${tr('seasonRangeMode')}</button>
          <span class="season-mode-summary score-mini" data-season-scope="${section.scope}">${tr('seasonAllSummary')}</span>
        `;
        control.querySelectorAll('.season-mode-tab').forEach(btn=>{
          btn.addEventListener('click',()=>setSeasonFilterMode(section.scope, btn.dataset.seasonMode, true));
        });
        singleWrap.insertAdjacentElement('beforebegin', control);
        updateSeasonModeControls(section.scope);
      });
    }

    

    function bindSeasonEraFilters(){
      const sections = seasonFilterConfigs();

      sections.forEach(section=>{
        if(section.season){
          section.season.addEventListener('change',()=>{
            // 시즌을 마지막으로 건드리면 같은 컨텐츠의 시대 드롭박스는 초기화
            seasonFilterModes[section.scope] = 'single';
            if(section.start) section.start.value = '';
            if(section.end) section.end.value = '';
            section.set({
              season: section.season.value || '',
              start: '',
              end: ''
            });
            updateSeasonModeControls(section.scope);
            applySeasonFilterChange();
          });
        }

        [section.start, section.end].forEach(el=>el&&el.addEventListener('change',()=>{
          // 시대를 마지막으로 건드리면 같은 컨텐츠의 시즌 드롭박스는 초기화
          seasonFilterModes[section.scope] = 'range';
          if(section.season) section.season.value = '';
          normalizeSeasonRange(section);
          section.set({
            season: '',
            start: section.start?.value || '',
            end: section.end?.value || ''
          });
          updateSeasonModeControls(section.scope);
          applySeasonFilterChange();
        }));
      });
    }

    function rowInEra(row,start,end){
      const rowSeasonValue = seasonSortValue(row.season, row.year);
      if(start && rowSeasonValue < seasonSortValue(start, start)) return false;
      if(end && rowSeasonValue > seasonSortValue(end, end)) return false;
      return true;
    }

    


    function getFilteredSkaterMedals(){
      const q=archiveCommittedSearch.toLowerCase();
      let data=skaterMedals.filter(row=>rowMatchesSearchAndMedal(row,q)).filter(row=>!skaterSeason||row.season===skaterSeason).filter(shouldIncludeSkaterRankingRow);
      if(skaterRankingMode==='individual') data=data.filter(row=>row.medal_type==='Individual' || (skaterRankingOptions.includeIndividual3000m && row.medal_type==='SuperFinal'));
      return data;
    }

    function shouldIncludeSkaterRankingRow(row){
      const gender = String(row.gender||'').trim();
      const event = String(row.event||'').trim();
      const competitionType = String(row.competition_type||'').trim();
      const competitionName = String(row.competition_name||'').trim();
      const note = String(row.note||'').toLowerCase();
      const year = String(row.year||'').trim();

      if(!rowInEra(row, skaterEraStart, skaterEraEnd)) return false;

            if(skaterRankingGender === 'men' && gender !== 'Men') return false;
      if(skaterRankingGender === 'women' && gender !== 'Women') return false;

      if(!skaterRankingOptions.includeOlympicDemo && isOlympicDemonstrationRow({competition_type:competitionType, competition_name:competitionName, year, note})) return false;
      if(!skaterRankingOptions.includeWorldsOverall && isWorldChampionshipOverallRow({competition_type:competitionType, event})) return false;
      if(!skaterRankingOptions.includeIndividual3000m && (isWorldChampionshipSuperFinalRow(row) || isIndividual3000mEvent(event))) return false;

      return true;
    }

    function isOlympicDemonstrationRow(row){
      const type = String(row.competition_type||'').toLowerCase();
      const name = String(row.competition_name||'').toLowerCase();
      const note = String(row.note||'').toLowerCase();
      const year = String(row.year||'').trim();
      return type.includes('olympic') && (note.includes('demonstration') || year === '1988' || name.includes('calgary 1988'));
    }

    function isWorldChampionshipOverallRow(row){
      const type = String(row.competition_type||'').toLowerCase();
      const event = String(row.event||'').trim().toLowerCase();
      return type.includes('world championship') && /overall|allround|classification|종합/.test(event);
    }

    function isIndividual3000mEvent(eventName){
      const event = String(eventName||'').trim().toLowerCase().replace(/[._-]+/g,' ').replace(/\s+/g,' ');
      return /3000\s*m/.test(event) && !isRelayEvent(event);
    }

    function isSuperFinal3000mEvent(eventName){
      const event = String(eventName||'').trim().toLowerCase().replace(/[._-]+/g,' ').replace(/\s+/g,' ');
      return /3000\s*m/.test(event) && !isRelayEvent(event);
    }

    function isWorldChampionshipSuperFinalRow(row){
      const type = String(row && row.competition_type || '').toLowerCase();
      const name = String(row && row.competition_name || '').toLowerCase();
      const event = String(row && row.event || '').toLowerCase();
      const note = String(row && row.note || '').toLowerCase();
      const isWorlds = type.includes('world championship') || name.includes('world championship');
      if(!isWorlds) return false;
      if(isRelayEvent(event)) return false;
      if(isWorldChampionshipOverallRow(row)) return false;
      return /3000\s*m|3000m|super\s*final|superfinal/.test(event + ' ' + note);
    }

    function isWorldChampionshipRegularIndividualRow(row){
      const type = String(row && row.competition_type || '').toLowerCase();
      const name = String(row && row.competition_name || '').toLowerCase();
      const isWorlds = type.includes('world championship') || name.includes('world championship');
      return isWorlds && !isRelayEvent(row && row.event) && !isWorldChampionshipOverallRow(row) && !isWorldChampionshipSuperFinalRow(row);
    }


    function getCompetitionGroup(row){
      const type = String(row.competition_type||'').toLowerCase();
      const name = String(row.competition_name||'').toLowerCase();
      const note = String(row.note||'').toLowerCase();
      if(type.includes('olympic') || name.includes('calgary 1988')) return 'olympics';
      if(type.includes('world championship')) return 'worlds';
      if(type.includes('world cup') || type.includes('world tour') || type.includes('challenge cup') || note.includes('world ranking')) return 'worldcup';
      return 'other';
    }

    function getFilteredEventRankingMedals(){
      const q=archiveCommittedSearch.toLowerCase();
      const source = isEventRankingRelay() ? medals : skaterMedals;
      return source
        .filter(row=>rowMatchesEventRankingBaseFilters(row,q))
        .filter(row=>shouldIncludeEventRankingRow(row))
        .filter(row=>eventRankingMatch(row));
    }

    function isEventRankingRelay(){
      return ['womenRelay','menRelay','mixedRelay'].includes(eventRankingEvent);
    }

    

    function shouldIncludeEventRankingRow(row){
      if(!eventRankingOptions.includeOlympicDemo && isOlympicDemonstrationRow(row)) return false;
      return true;
    }


    function normalizedEventText(eventName){
      return String(eventName||'').trim().toLowerCase().replace(/\s+/g,' ');
    }

    function isDistanceEvent(eventName, distance){
      const event = normalizedEventText(eventName);
      // 500m, 500 m, 500m (1), 500m (2) 등 보너스/복수 종목 표기를 모두 같은 거리로 집계합니다.
      return new RegExp('^' + distance + '\\s*m\\s*(?:\\(\\d+\\))?$').test(event);
    }

    function eventRankingMatch(row){
      const event=String(row.event||'').trim().toLowerCase().replace(/\s+/g,' ');
      const gender=String(row.gender||'').trim();
      const selected=eventRankingEvent;

      if(selected==='mixedRelay'){
        return event.includes('mixed') && event.includes('relay');
      }

      if(selected==='womenRelay'){
        return gender==='Women' && (event==='3000m relay' || event==='women relay');
      }

      if(selected==='menRelay'){
        return gender==='Men' && (event==='5000m relay' || event==='men relay');
      }

      if(eventRankingGender==='men' && gender!=='Men') return false;
      if(eventRankingGender==='women' && gender!=='Women') return false;

      if(selected==='500') return isDistanceEvent(row.event,'500');
      if(selected==='1000') return isDistanceEvent(row.event,'1000');
      if(selected==='1500') return isDistanceEvent(row.event,'1500');
      return false;
    }

    function updateEventGenderTabs(){
      const relaySelected = isEventRankingRelay();
      const tabs=[...document.querySelectorAll('.event-rank-gender-tab')];
      tabs.forEach(btn=>btn.disabled = relaySelected && btn.dataset.eventRankGender !== 'all');
      if(relaySelected){
        eventRankingGender='all';
        tabs.forEach(btn=>btn.classList.toggle('active', btn.dataset.eventRankGender === 'all'));
      }
    }

    function eventRankingLabel(){
      const map={
        '500':'500m',
        '1000':'1000m',
        '1500':'1500m',
        'womenRelay':tr('womenRelay'),
        'menRelay':tr('menRelay'),
        'mixedRelay':tr('mixedRelay')
      };
      return map[eventRankingEvent] || '500m';
    }

    function eventGenderLabel(){
      if(['mixedRelay','womenRelay','menRelay'].includes(eventRankingEvent)) return tr('all');
      if(eventRankingGender==='men') return tr('men');
      if(eventRankingGender==='women') return tr('women');
      return tr('all');
    }

    function renderSummary(data){
      // 홈 화면의 검색결과/메달수 요약 카드는 제거했습니다.
      // 기존 렌더링 흐름과의 호환성을 위해 함수만 안전하게 남겨 둡니다.
      return;
    }

    function medalSlotKey(row){
      return [row.competition_type,row.season,row.competition_name,row.city,row.year,row.gender,row.event,row.medal].map(v=>String(v||'').trim()).join(' | ');
    }

    function podiumSlotKey(row){
      return [row.competition_type,row.season,row.competition_name,row.city,row.year,row.gender,row.event].map(v=>String(v||'').trim()).join(' | ');
    }

    function buildQualityIndexes(rows){
      const medalSlots=new Map();
      const podiumSlots=new Map();
      rows.forEach(row=>{
        const mk=medalSlotKey(row);
        if(!medalSlots.has(mk)) medalSlots.set(mk,[]);
        medalSlots.get(mk).push(row);
        const pk=podiumSlotKey(row);
        if(!podiumSlots.has(pk)) podiumSlots.set(pk,[]);
        podiumSlots.get(pk).push(row);
      });
      return {medalSlots,podiumSlots};
    }

    function rowQualityBadges(row, indexes){
      const badges=[];
      if(isRelayEvent(row.event)) badges.push({text:currentLang==='en'?'Relay data caution':'계주 주의',level:'warn'});
      if(isWorldChampionshipOverallRow(row)) badges.push({text:currentLang==='en'?'Worlds overall':'세선 종합',level:'info'});
      if(isIndividual3000mEvent(row.event)) badges.push({text:'3000m S.F.',level:'info'});
      if(isOlympicDemonstrationRow(row)) badges.push({text:currentLang==='en'?'Olympic demo':'올림픽 시범',level:'warn'});
      const source=sourceStatus(row);
      badges.push({text:sourceStatusLabel(source),level:source.level});
      const sameMedal=indexes?.medalSlots?.get(medalSlotKey(row))||[];
      const distinctNames=new Set(sameMedal.map(r=>r.skater_name+'|'+r.country));
      if(sameMedal.length>1 && distinctNames.size>1) badges.push({text:currentLang==='en'?'Joint/conflict?':'공동/충돌 의심',level:'danger'});
      if(sameMedal.length>1 && distinctNames.size===1) badges.push({text:currentLang==='en'?'Duplicate?':'중복 의심',level:'danger'});
      const podium=indexes?.podiumSlots?.get(podiumSlotKey(row))||[];
      if(podium.length){
        const g=podium.filter(r=>r.medal==='Gold').length;
        const s=podium.filter(r=>r.medal==='Silver').length;
        const b=podium.filter(r=>r.medal==='Bronze').length;
        if((g&&s&&b) && (g!==1||s!==1||b!==1)) badges.push({text:currentLang==='en'?'Podium check':'포디움 확인',level:'warn'});
      }
      return badges;
    }

    function renderQualityBadges(row,indexes){
      const badges=rowQualityBadges(row,indexes);
      const sourceLink=row.source_url?`<a class="quality-badge info" href="${escapeAttr(row.source_url)}" target="_blank" rel="noopener">출처 보기</a>`:'';
      if(!badges.length && !sourceLink) return '';
      return `<div class="quality-badges">${badges.map(b=>`<span class="quality-badge ${b.level}">${escapeHtml(b.text)}</span>`).join('')}${sourceLink}</div>`;
    }

    function sourceStatus(row){
      const note=String(row && row.note || '').toLowerCase();
      const url=String(row && row.source_url || '').trim();
      if(url) return {key:'official', level:'info'};
      if(note.includes('verify with official source') || note.includes('확인 필요')) return {key:'needsVerification', level:'warn'};
      if(note.includes('user-supplied') || note.includes('사용자')) return {key:'userSupplied', level:'warn'};
      if(note.includes('wikipedia')) return {key:'secondary', level:'warn'};
      return {key:'missing', level:'danger'};
    }

    function sourceStatusLabel(status){
      const key=typeof status==='string'?status:status?.key;
      const labels={
        official: currentLang==='en'?'Official source':'공식 출처 확인',
        secondary: currentLang==='en'?'Secondary source':'2차 자료',
        userSupplied: currentLang==='en'?'User-supplied':'사용자 제공 자료',
        needsVerification: currentLang==='en'?'Needs verification':'검증 필요',
        missing: currentLang==='en'?'No source':'출처 미등록'
      };
      return labels[key] || labels.missing;
    }

    function rowReportText(row,context){
      return `[메달 데이터 오류 신고]\n위치: ${context||''}\n대회유형: ${row.competition_type||''}\n시즌: ${row.season||''}\n대회: ${row.competition_name||''}\n개최지: ${row.city||''}\n연도: ${row.year||''}\n성별: ${row.gender||''}\n종목: ${row.event||''}\n메달: ${row.medal||''}\n선수/팀: ${eventSkaterName(row)||''}\n통합 선수명: ${row.skater_name||''}\n국가: ${eventCountry(row)||''}\n기록: ${row.time||''}\n비고: ${row.note||''}\n출처 상태: ${sourceStatusLabel(sourceStatus(row))}\n\n의견: `;
    }

    function reportRowIssue(encodedText){
      openReportModal(encodedText);
    }

    function sortSearchRows(data){
      const mode=document.getElementById('searchSortSelect')?.value || 'recent';
      const rows=[...data];
      if(mode==='oldest') return rows.sort((a,b)=>Number(a.year||0)-Number(b.year||0)||String(a.competition_name).localeCompare(String(b.competition_name),'ko'));
      if(mode==='medal') return rows.sort((a,b)=>medalOrder(a.medal)-medalOrder(b.medal)||Number(b.year||0)-Number(a.year||0));
      if(mode==='event') return rows.sort((a,b)=>eventOrder(a.event)-eventOrder(b.event)||Number(b.year||0)-Number(a.year||0));
      if(mode==='name') return rows.sort((a,b)=>String(a.skater_name||'').localeCompare(String(b.skater_name||''),'ko')||Number(b.year||0)-Number(a.year||0));
      return rows.sort((a,b)=>Number(b.year||0)-Number(a.year||0)||genderOrder(a.gender)-genderOrder(b.gender)||eventOrder(a.event)-eventOrder(b.event)||medalOrder(a.medal)-medalOrder(b.medal));
    }

    function renderMedalTable(data){
      const wrap=document.getElementById('tableWrap');
      if(!data.length){wrap.innerHTML=`<div class="empty">${tr('noSearchResults')}</div>`;return;}
      const sorted=sortSearchRows(data);
      const indexes=buildQualityIndexes(medals);
      wrap.innerHTML=`<div class="table-scroll"><table><thead><tr><th>대회</th><th>시즌</th><th>개최지</th><th>성별</th><th>종목</th><th>메달</th><th>선수/팀</th><th>국가</th><th>기록</th><th>상태</th><th>신고</th></tr></thead><tbody>${sorted.map(row=>`<tr><td><span class="link" onclick="openCompetitionPanel('${escapeJs(row.competition_name)}')">${escapeHtml(row.competition_name)}<br><small>${escapeHtml(row.competition_type)}</small></span></td><td>${escapeHtml(row.season)}</td><td>${escapeHtml(row.city)}</td><td>${genderKorean(row.gender)}</td><td>${escapeHtml(row.event)}</td><td><span class="medal ${escapeHtml(row.medal)}">${medalKorean(row.medal)}</span></td><td>${isRelayEvent(row.event)?escapeHtml(row.skater_name):`<span class="link" onclick="openPlayerPanel('${escapeJs(row.skater_name)}')">${escapeHtml(row.skater_name)}</span>`}</td><td>${escapeHtml(row.country)}</td><td>${escapeHtml(row.time)}</td><td>${renderQualityBadges(row,indexes)}${escapeHtml(row.note||'')}</td><td><button type="button" class="row-report-btn" onclick="reportRowIssue('${escapeJs(rowReportText(row,'검색 결과'))}')">${tr('reportThisRow')}</button></td></tr>`).join('')}</tbody></table></div>`;
    }
    function renderMedalTablePrompt(){
      const wrap=document.getElementById('tableWrap');
      if(wrap) wrap.innerHTML=`<div class="empty">${tr('searchRawPrompt')}</div>`;
    }


    function toggleSkaterCustomScore(){
      skaterCustomScoreEnabled = true;
      const panel=document.getElementById('skaterScorePanel');
      if(panel) panel.classList.add('open');
      renderSkaterRanking(getFilteredSkaterMedals());
    }

    

    

    

    

    function readEventScoreWeights(){
      const weights={};
      document.querySelectorAll('.event-score-input').forEach(input=>{
        const key=input.dataset.scoreKey;
        const value=Number(input.value);
        weights[key]=Number.isFinite(value)?value:0;
      });
      return weights;
    }


    

    function totalCustomScore(row,weights){
      return bucketScore(row.olympic,'olympic',weights)
        + bucketScore(row.worlds,'worlds',weights)
        + (skaterRankingOptions.includeWorldsOverall
          ? bucketScore(row.worldsOverall, skaterRankingOptions.separateWorldsOverall ? 'worlds_overall' : 'worlds', weights)
          : 0)
        + bucketScore(row.worldcup,'worldcup',weights);
    }

    

    function resetSkaterRankingVisibleCount(){
      skaterRankingVisibleCount = SKATER_RANKING_PAGE_SIZE;
    }

    function resetCountryRankingVisibleCount(){
      countryRankingVisibleCount = COUNTRY_RANKING_PAGE_SIZE;
    }

    function resetEventRankingVisibleCount(){
      eventRankingVisibleCount = EVENT_RANKING_PAGE_SIZE;
    }

    function resetRankingVisibleCounts(){
      resetSkaterRankingVisibleCount();
      resetCountryRankingVisibleCount();
      resetEventRankingVisibleCount();
    }

    function showMoreSkaterRanking(){
      skaterRankingVisibleCount += SKATER_RANKING_PAGE_SIZE;
      renderSkaterRanking(getFilteredSkaterMedals());
    }

    function collapseSkaterRanking(){
      resetSkaterRankingVisibleCount();
      renderSkaterRanking(getFilteredSkaterMedals());
      document.getElementById('skaterRankingSection')?.scrollIntoView({behavior:'smooth',block:'start'});
    }

    function showMoreCountryRanking(){
      countryRankingVisibleCount += COUNTRY_RANKING_PAGE_SIZE;
      renderCountryRanking(getFilteredCountryMedals());
    }

    function collapseCountryRanking(){
      resetCountryRankingVisibleCount();
      renderCountryRanking(getFilteredCountryMedals());
      document.getElementById('countryRankingSection')?.scrollIntoView({behavior:'smooth',block:'start'});
    }

    function showMoreEventRanking(){
      eventRankingVisibleCount += EVENT_RANKING_PAGE_SIZE;
      renderEventRanking(getFilteredEventRankingMedals());
    }

    function collapseEventRanking(){
      resetEventRankingVisibleCount();
      renderEventRanking(getFilteredEventRankingMedals());
      document.getElementById('eventRankingSection')?.scrollIntoView({behavior:'smooth',block:'start'});
    }

    function rankingLimitControls(kind, visibleCount, totalCount){
      const pageSize = kind === 'country' ? COUNTRY_RANKING_PAGE_SIZE : kind === 'event' ? EVENT_RANKING_PAGE_SIZE : SKATER_RANKING_PAGE_SIZE;
      const shown = Math.min(visibleCount, totalCount);
      const eventRelay = kind === 'event' && typeof isEventRankingRelay === 'function' && isEventRankingRelay();
      const unitKo = kind === 'country' || eventRelay ? '국' : '명';
      const unitEn = kind === 'country' || eventRelay ? 'countries' : 'skaters';
      const countText = currentLang === 'en'
        ? `Showing ${shown} of ${totalCount} ${unitEn}`
        : `총 ${totalCount}${unitKo} 중 ${shown}${unitKo} 표시`;
      const moreFn = kind === 'country' ? 'showMoreCountryRanking' : kind === 'event' ? 'showMoreEventRanking' : 'showMoreSkaterRanking';
      const collapseFn = kind === 'country' ? 'collapseCountryRanking' : kind === 'event' ? 'collapseEventRanking' : 'collapseSkaterRanking';
      const moreButton = shown < totalCount ? `<button type="button" class="sort-btn" onclick="${moreFn}()">${currentLang === 'en' ? 'Show more' : '더보기'}</button>` : '';
      const collapseButton = shown > pageSize ? `<button type="button" class="sort-btn" onclick="${collapseFn}()">${currentLang === 'en' ? 'Collapse' : '접기'}</button>` : '';
      return `<div class="ranking-more-actions"><span class="score-mini">${countText}</span>${moreButton}${collapseButton}</div>`;
    }


    function renderSkaterRanking(data){
      const wrap=document.getElementById('skaterRankingTableWrap') || document.getElementById('skaterRankingWrap');
      if(!data.length){wrap.innerHTML=`<div class="empty">${tr('empty')}</div>`;return;}

      const weights=getAppliedSkaterScoreWeights();
      let rows=buildSkaterAggregates(data).map(row=>{
        const customScore=totalCustomScore(row,weights);
        return {...row,customScore};
      });

      if(skaterCustomScoreEnabled && skaterSortKey==='default'){
        rows.sort((a,b)=>b.customScore-a.customScore||defaultSkaterCompare(a,b));
      }else if(skaterSortKey==='default'){
        rows.sort(defaultSkaterCompare);
      }else{
        rows.sort((a,b)=>{
          const av=getSkaterSortValue(a,skaterSortKey);
          const bv=getSkaterSortValue(b,skaterSortKey);
          let primary=0;
          if(typeof av==='string'||typeof bv==='string'){
            primary = skaterSortDir==='asc'
              ? String(av).localeCompare(String(bv),'ko')
              : String(bv).localeCompare(String(av),'ko');
          }else{
            primary = skaterSortDir==='asc' ? av-bv : bv-av;
          }
          return primary || (skaterCustomScoreEnabled ? (b.customScore-a.customScore||defaultSkaterCompare(a,b)) : defaultSkaterCompare(a,b));
        });
      }

      const totalRows = rows.length;
      rows=rows.slice(0,skaterRankingVisibleCount);

      const mobileCards = `<div class="mobile-card-list rank-mobile-cards">${rows.map((row,i)=>`
        <article class="mobile-data-card rank-mobile-card">
          <div class="mobile-card-topline"><span class="mobile-rank-badge">#${i+1}</span>${skaterCustomScoreEnabled?`<strong class="mobile-record-time">${formatScore(row.customScore)}</strong>`:''}</div>
          <div class="mobile-card-title"><span class="link" onclick="openPlayerPanel('${escapeJs(row.name)}')">${displaySkaterNameHtml(row.name)}</span></div>
          <div class="mobile-card-meta">${escapeHtml(row.country || '-')} · ${tr('gold')} ${row.total.gold} · ${tr('silver')} ${row.total.silver} · ${tr('bronze')} ${row.total.bronze} · ${tr('total')} ${medalTotal(row.total)}</div>
          <div class="mobile-rank-medal-grid">
            <div><span>${tr('olympic')}</span><strong>${row.olympic.gold}/${row.olympic.silver}/${row.olympic.bronze}</strong></div>
            <div><span>${tr('worldChampionships')}</span><strong>${row.worlds.gold}/${row.worlds.silver}/${row.worlds.bronze}</strong></div>
            <div><span>${tr('worldcupTour')}</span><strong>${row.worldcup.gold}/${row.worldcup.silver}/${row.worldcup.bronze}</strong></div>
          </div>
        </article>`).join('')}</div>`;

      const scoreHead = skaterCustomScoreEnabled ? `<th rowspan="2" class="sort-th score-col" onclick="setSkaterSort('custom_score')">${tr('score')}${sortArrow('custom_score')}</th>` : '';
      const worldsOverallHead = skaterRankingOptions.separateWorldsOverall
        ? `<th colspan="4" class="group-head">${tr('worldsOverallGroup')}</th>`
        : '';
      const worldsOverallSubHead = skaterRankingOptions.separateWorldsOverall
        ? `<th class="medal-num sort-th" onclick="setSkaterSort('worlds_overall_gold')">${tr('gold')}${sortArrow('worlds_overall_gold')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_overall_silver')">${tr('silver')}${sortArrow('worlds_overall_silver')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_overall_bronze')">${tr('bronze')}${sortArrow('worlds_overall_bronze')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_overall_total')">${tr('total')}${sortArrow('worlds_overall_total')}</th>`
        : '';
      const worldsOverallCells = row => skaterRankingOptions.separateWorldsOverall
        ? `<td class="medal-num">${row.worldsOverall.gold}</td><td class="medal-num">${row.worldsOverall.silver}</td><td class="medal-num">${row.worldsOverall.bronze}</td><td class="medal-num rank-total">${medalTotal(row.worldsOverall)}</td>`
        : '';

      const rankingOptionSummary = getSkaterRankingOptionSummary();

      wrap.innerHTML=`<div class="subnote">${tr('top50Only')} ${rankingOptionSummary}</div>
      ${mobileCards}
      <div class="desktop-data-table table-scroll"><table class="medal-detail-table">
        <thead>
          <tr>
            <th rowspan="2" class="rank-col">${tr('rank')}</th>
            <th rowspan="2" class="name-col sort-th" onclick="setSkaterSort('name')">${tr('skater')}${sortArrow('name')}</th>
            <th rowspan="2" class="country-col sort-th" onclick="setSkaterSort('country')">${tr('country')}${sortArrow('country')}</th>
            <th colspan="4" class="group-head">${tr('olympic')}</th>
            <th colspan="4" class="group-head">${tr('worldChampionships')}</th>
            ${worldsOverallHead}
            <th colspan="4" class="group-head">${tr('worldCupTour')}</th>
            <th colspan="4" class="group-head">${tr('totalGroup')}</th>
            ${scoreHead}
          </tr>
          <tr>
            <th class="medal-num sort-th" onclick="setSkaterSort('olympic_gold')">${tr('gold')}${sortArrow('olympic_gold')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('olympic_silver')">${tr('silver')}${sortArrow('olympic_silver')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('olympic_bronze')">${tr('bronze')}${sortArrow('olympic_bronze')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('olympic_total')">${tr('total')}${sortArrow('olympic_total')}</th>

            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_gold')">${tr('gold')}${sortArrow('worlds_gold')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_silver')">${tr('silver')}${sortArrow('worlds_silver')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_bronze')">${tr('bronze')}${sortArrow('worlds_bronze')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worlds_total')">${tr('total')}${sortArrow('worlds_total')}</th>

            ${worldsOverallSubHead}

            <th class="medal-num sort-th" onclick="setSkaterSort('worldcup_gold')">${tr('gold')}${sortArrow('worldcup_gold')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worldcup_silver')">${tr('silver')}${sortArrow('worldcup_silver')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worldcup_bronze')">${tr('bronze')}${sortArrow('worldcup_bronze')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('worldcup_total')">${tr('total')}${sortArrow('worldcup_total')}</th>

            <th class="medal-num sort-th" onclick="setSkaterSort('total_gold')">${tr('gold')}${sortArrow('total_gold')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('total_silver')">${tr('silver')}${sortArrow('total_silver')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('total_bronze')">${tr('bronze')}${sortArrow('total_bronze')}</th>
            <th class="medal-num sort-th" onclick="setSkaterSort('total_count')">${tr('total')}${sortArrow('total_count')}</th>
          </tr>
        </thead>
        <tbody>${rows.map((row,i)=>`<tr>
          <td class="rank-col">${i+1}</td>
          <td class="name-col"><span class="link" onclick="openPlayerPanel('${escapeJs(row.name)}')">${displaySkaterNameHtml(row.name)}</span></td>
          <td class="country-col">${escapeHtml(row.country)}</td>
          <td class="medal-num">${row.olympic.gold}</td><td class="medal-num">${row.olympic.silver}</td><td class="medal-num">${row.olympic.bronze}</td><td class="medal-num rank-total">${medalTotal(row.olympic)}</td>
          <td class="medal-num">${row.worlds.gold}</td><td class="medal-num">${row.worlds.silver}</td><td class="medal-num">${row.worlds.bronze}</td><td class="medal-num rank-total">${medalTotal(row.worlds)}</td>
          ${worldsOverallCells(row)}
          <td class="medal-num">${row.worldcup.gold}</td><td class="medal-num">${row.worldcup.silver}</td><td class="medal-num">${row.worldcup.bronze}</td><td class="medal-num rank-total">${medalTotal(row.worldcup)}</td>
          <td class="medal-num">${row.total.gold}</td><td class="medal-num">${row.total.silver}</td><td class="medal-num">${row.total.bronze}</td><td class="medal-num rank-total">${medalTotal(row.total)}</td>
          ${skaterCustomScoreEnabled?`<td class="score-result score-col">${formatScore(row.customScore)}</td>`:''}
        </tr>`).join('')}</tbody>
      </table></div>${rankingLimitControls('skater', skaterRankingVisibleCount, totalRows)}`;
    }

    function getSkaterRankingOptionSummary(){
      const genderLabel = skaterRankingGender === 'men' ? tr('menShort') : skaterRankingGender === 'women' ? tr('womenShort') : tr('all');
      const demoLabel = skaterRankingOptions.includeOlympicDemo ? tr('includeOlympicDemo') : tr('excludeOlympicDemo');
      const worldsOverallLabel = skaterRankingOptions.includeWorldsOverall ? tr('worldsOverall') + ' ' + (currentLang==='en'?'separate':'별도 집계') : tr('worldsOverall') + ' ' + (currentLang==='en'?'excluded':'제외');
      const event3000Label = skaterRankingOptions.includeIndividual3000m ? '3000m ' + (currentLang==='en'?'included':'포함') : '3000m ' + (currentLang==='en'?'excluded':'제외');
      return [genderLabel, demoLabel, worldsOverallLabel, event3000Label].filter(Boolean).join(' · ');
    }

    function defaultSkaterCompare(a,b){
      return b.olympic.gold-a.olympic.gold||
        b.olympic.silver-a.olympic.silver||
        b.olympic.bronze-a.olympic.bronze||
        (b.worlds.gold + (!skaterRankingOptions.separateWorldsOverall && skaterRankingOptions.includeWorldsOverall ? b.worldsOverall.gold : 0))-(a.worlds.gold + (!skaterRankingOptions.separateWorldsOverall && skaterRankingOptions.includeWorldsOverall ? a.worldsOverall.gold : 0))||
        (b.worlds.silver + (!skaterRankingOptions.separateWorldsOverall && skaterRankingOptions.includeWorldsOverall ? b.worldsOverall.silver : 0))-(a.worlds.silver + (!skaterRankingOptions.separateWorldsOverall && skaterRankingOptions.includeWorldsOverall ? a.worldsOverall.silver : 0))||
        (b.worlds.bronze + (!skaterRankingOptions.separateWorldsOverall && skaterRankingOptions.includeWorldsOverall ? b.worldsOverall.bronze : 0))-(a.worlds.bronze + (!skaterRankingOptions.separateWorldsOverall && skaterRankingOptions.includeWorldsOverall ? a.worldsOverall.bronze : 0))||
        (skaterRankingOptions.separateWorldsOverall ? (b.worldsOverall.gold-a.worldsOverall.gold||b.worldsOverall.silver-a.worldsOverall.silver||b.worldsOverall.bronze-a.worldsOverall.bronze) : 0)||
        b.worldcup.gold-a.worldcup.gold||
        b.worldcup.silver-a.worldcup.silver||
        b.worldcup.bronze-a.worldcup.bronze||
        String(a.name).localeCompare(String(b.name),'ko');
    }

    function resetWorldsOverallScoreInputs(){
      document.querySelectorAll('.worlds-overall-score-input').forEach(input=>{
        input.value='0';
      });
    }

    function copyWorldsScoresToOverallScores(){
      const gold=document.querySelector('[data-score-key="worlds_gold"]')?.value || '0';
      const silver=document.querySelector('[data-score-key="worlds_silver"]')?.value || '0';
      const bronze=document.querySelector('[data-score-key="worlds_bronze"]')?.value || '0';
      const set=(key,value)=>{const input=document.querySelector(`[data-score-key="${key}"]`); if(input) input.value=value;};
      set('worlds_overall_gold', gold);
      set('worlds_overall_silver', silver);
      set('worlds_overall_bronze', bronze);
    }

    function updateWorldsOverallScoreFields(){
      const show=!!skaterRankingOptions.includeWorldsOverall && !!skaterRankingOptions.separateWorldsOverall;
      document.querySelectorAll('.worlds-overall-score-field').forEach(el=>{
        el.style.display=show?'block':'none';
      });
    }

    function readScoreWeights(){
      const weights={};
      document.querySelectorAll('.score-input').forEach(input=>{
        const key=input.dataset.scoreKey;
        const value=Number(input.value);
        weights[key]=Number.isFinite(value)?value:0;
      });
      return weights;
    }

    function getAppliedSkaterScoreWeights(){
      return {...SKATER_SCORE_DEFAULTS, ...scoreWeights};
    }

    function syncSkaterScoreInputs(weights){
      const source = {...SKATER_SCORE_DEFAULTS, ...(weights || {})};
      document.querySelectorAll('.score-input').forEach(input=>{
        const key = input.dataset.scoreKey;
        if(key && key in source) input.value = source[key];
        input.classList.remove('score-input-invalid');
        input.removeAttribute('aria-invalid');
      });
    }

    function validateSkaterScoreInputs(){
      let ok = true;
      document.querySelectorAll('.score-input').forEach(input=>{
        const raw = String(input.value || '').trim();
        const value = Number(raw);
        const invalid = raw === '' || !Number.isFinite(value) || value < 0;
        input.classList.toggle('score-input-invalid', invalid);
        input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
        if(invalid) ok = false;
      });
      if(!ok) updateSkaterScoreStatus('error');
      return ok;
    }

    function scoreWeightsEqual(a,b){
      const left = {...SKATER_SCORE_DEFAULTS, ...(a || {})};
      const right = {...SKATER_SCORE_DEFAULTS, ...(b || {})};
      return Object.keys(SKATER_SCORE_DEFAULTS).every(key=>Number(left[key]) === Number(right[key]));
    }

    function updateSkaterScoreStatus(state){
      const status = document.getElementById('skaterScoreStatus');
      if(!status) return;
      status.classList.remove('is-dirty','is-error','is-applied');
      if(state === 'error'){
        status.textContent = tr('scoreStatusInvalid');
        status.classList.add('is-error');
      }else if(state === 'dirty'){
        status.textContent = tr('scoreStatusChanged');
        status.classList.add('is-dirty');
      }else if(scoreWeightsEqual(scoreWeights, SKATER_SCORE_DEFAULTS)){
        status.textContent = tr('scoreStatusDefault');
        status.classList.add('is-applied');
      }else{
        status.textContent = tr('scoreStatusApplied');
        status.classList.add('is-applied');
      }
    }

    function markSkaterScoreDirty(){
      if(!validateSkaterScoreInputs()) return;
      updateSkaterScoreStatus(scoreWeightsEqual(readScoreWeights(), lastAppliedSkaterScoreWeights) ? 'applied' : 'dirty');
    }

    function cancelSkaterScoreChanges(){
      syncSkaterScoreInputs(lastAppliedSkaterScoreWeights);
      updateSkaterScoreStatus('applied');
    }

    function restoreSkaterScoreDefaults(){
      syncSkaterScoreInputs(SKATER_SCORE_DEFAULTS);
      applyScoreSettings();
    }

    function buildSkaterAggregates(data){
      const map=new Map();
      data.forEach(row=>{
        const key=row.athlete_id||row.skater_name;if(!key)return;
        if(!map.has(key)) map.set(key,createSkaterAgg(row.skater_name,eventCountry(row)));
        const item=map.get(key);
        if(eventCountry(row) && !item.country) item.country=eventCountry(row);
        let bucket=competitionBucket(row.competition_type);
        if(bucket==='worlds' && isWorldChampionshipOverallRow(row)){
          bucket='worldsOverall';
        }
        addMedalCount(item[bucket], row.medal);
        addMedalCount(item.total, row.medal);
      });
      return [...map.values()];
    }

    function bucketScore(bucket,prefix,weights){
      return (bucket.gold||0)*(weights[`${prefix}_gold`]||0)+(bucket.silver||0)*(weights[`${prefix}_silver`]||0)+(bucket.bronze||0)*(weights[`${prefix}_bronze`]||0);
    }

    function scoreBucketCell(bucket,score){
      return `<td>${bucket.gold}/${bucket.silver}/${bucket.bronze}<br><strong>${formatScore(score)}</strong></td>`;
    }

    function formatScore(value){
      const n=Number(value)||0;
      return Number.isInteger(n)?String(n):n.toFixed(1).replace(/\.0$/,'');
    }


    function createSkaterAgg(name,country){
      return {
        name:name||'',
        country:country||'',
        olympic:{gold:0,silver:0,bronze:0},
        worlds:{gold:0,silver:0,bronze:0},
        worldsOverall:{gold:0,silver:0,bronze:0},
        worldcup:{gold:0,silver:0,bronze:0},
        total:{gold:0,silver:0,bronze:0}
      };
    }

    function addMedalCount(bucket,medal){
      if(!bucket)return;
      if(medal==='Gold')bucket.gold++;
      else if(medal==='Silver')bucket.silver++;
      else if(medal==='Bronze')bucket.bronze++;
    }

    function medalTotal(bucket){
      return (Number(bucket?.gold)||0)+(Number(bucket?.silver)||0)+(Number(bucket?.bronze)||0);
    }

    function competitionBucket(type){
      const value=String(type||'').toLowerCase();
      if(value.includes('olympic'))return 'olympic';
      if(value.includes('world championship'))return 'worlds';
      if(value.includes('world cup')||value.includes('world tour'))return 'worldcup';
      return 'worldcup';
    }

        function applyScoreSettings(){
      // 입력된 점수를 기준으로 다시 순위를 계산합니다.
      // 사용자가 다른 머리글로 오름/내림 정렬해 둔 상태여도, 설정 버튼을 누르면 점수 기준 내림차순으로 복귀합니다.
      if(!validateSkaterScoreInputs()) return;
      scoreWeights = {...SKATER_SCORE_DEFAULTS, ...readScoreWeights()};
      lastAppliedSkaterScoreWeights = {...scoreWeights};
      skaterCustomScoreEnabled = true;
      skaterSortKey = 'default';
      skaterSortDir = 'desc';

      const panel = document.getElementById('skaterScorePanel');
      if(panel) panel.classList.add('open');

      updateWorldsOverallScoreFields();
      updateSkaterScoreStatus('applied');
      renderSkaterRanking(getFilteredSkaterMedals());
      renderPlayerComparison();
    }

        function setSkaterSort(key){
      if(skaterSortKey === key){
        skaterSortDir = skaterSortDir === 'desc' ? 'asc' : 'desc';
      }else{
        skaterSortKey = key;
        skaterSortDir = 'desc';
      }

      // 점수 입력란은 그대로 유지하고 표만 다시 정렬합니다.
      const panel = document.getElementById('skaterScorePanel');
      if(panel) panel.classList.add('open');

      renderSkaterRanking(getFilteredSkaterMedals());
    }





    function sortArrow(key){
      if(skaterSortKey!==key)return '';
      return `<span class="sort-arrow">${skaterSortDir==='asc'?'▲':'▼'}`;
    }

    function groupSortScore(bucket){return (bucket.gold||0)*1000000+(bucket.silver||0)*10000+(bucket.bronze||0)*100+medalTotal(bucket);}

    function getSkaterSortValue(row,key){
      switch(key){
        case 'name':return row.name||'';
        case 'country':return row.country||'';
        case 'olympic_gold':return row.olympic.gold;
        case 'olympic_silver':return row.olympic.silver;
        case 'olympic_bronze':return row.olympic.bronze;
        case 'olympic_total':return medalTotal(row.olympic);
        case 'worlds_gold':return row.worlds.gold;
        case 'worlds_silver':return row.worlds.silver;
        case 'worlds_bronze':return row.worlds.bronze;
        case 'worlds_total':return medalTotal(row.worlds);
        case 'worlds_overall_gold':return row.worldsOverall.gold;
        case 'worlds_overall_silver':return row.worldsOverall.silver;
        case 'worlds_overall_bronze':return row.worldsOverall.bronze;
        case 'worlds_overall_total':return medalTotal(row.worldsOverall);
        case 'worldcup_gold':return row.worldcup.gold;
        case 'worldcup_silver':return row.worldcup.silver;
        case 'worldcup_bronze':return row.worldcup.bronze;
        case 'worldcup_total':return medalTotal(row.worldcup);
        case 'total_gold':return row.total.gold;
        case 'total_silver':return row.total.silver;
        case 'total_bronze':return row.total.bronze;
        case 'total_count':return medalTotal(row.total);
        case 'olympic_group':return groupSortScore(row.olympic);
        case 'worlds_group':return groupSortScore(row.worlds);
        case 'worlds_overall_group':return groupSortScore(row.worldsOverall);
        case 'worldcup_group':return groupSortScore(row.worldcup);
        case 'total_group':return groupSortScore(row.total);
        case 'custom_score':return row.customScore||0;
        default:return 0;
      }
    }

    function getFilteredCountryMedals(){
      const q=archiveCommittedSearch.toLowerCase();
      return medals.filter(row=>rowMatchesSearchAndMedal(row,q)).filter(row=>!countrySeason||row.season===countrySeason).filter(row=>rowInEra(row, countryEraStart, countryEraEnd));
    }

    function renderCountryRanking(data){
      const wrap=document.getElementById('countryRankingWrap');
      const scoped = data.filter(row=>countryRankingGroup==='all' || getCompetitionGroup(row)===countryRankingGroup);
      if(!scoped.length){wrap.innerHTML=`<div class="empty">${tr('empty')}</div>`;return;}
      const map=new Map();
      scoped.forEach(row=>{
        const key=eventCountry(row);if(!key)return;
        if(!map.has(key))map.set(key,{country:key,gold:0,silver:0,bronze:0,total:0});
        const item=map.get(key);
        if(row.medal==='Gold')item.gold++;
        if(row.medal==='Silver')item.silver++;
        if(row.medal==='Bronze')item.bronze++;
        item.total++;
      });
      const allRanking=[...map.values()].sort(rankSort);
      const totalRows = allRanking.length;
      const ranking=allRanking.slice(0,countryRankingVisibleCount);
      const groupLabel = countryRankingGroup==='olympics'?tr('olympics'):countryRankingGroup==='worlds'?tr('worlds'):countryRankingGroup==='worldcup'?tr('worldcupTour'):tr('all');
      const mobileCards = `<div class="mobile-card-list country-mobile-cards">${ranking.map((row,i)=>`
        <article class="mobile-data-card country-mobile-card">
          <div class="mobile-card-topline"><span class="mobile-rank-badge">#${i+1}</span><strong class="mobile-record-time">${row.total}</strong></div>
          <div class="mobile-card-title">${escapeHtml(row.country)}</div>
          <div class="mobile-card-meta">${groupLabel} · ${tr('gold')} ${row.gold} · ${tr('silver')} ${row.silver} · ${tr('bronze')} ${row.bronze}</div>
          <div class="mobile-rank-medal-grid">
            <div><span>${tr('gold')}</span><strong>${row.gold}</strong></div>
            <div><span>${tr('silver')}</span><strong>${row.silver}</strong></div>
            <div><span>${tr('bronze')}</span><strong>${row.bronze}</strong></div>
          </div>
          <div class="mobile-card-action"><button type="button" class="st-mini-btn" onclick="openCountryPage('${escapeJs(row.country)}')">${tr('countryPage')}</button></div>
        </article>`).join('')}</div>`;
      wrap.innerHTML=`<div class="subnote">${tr('currentCompetition')}: ${groupLabel} · ${tr('top20')}</div>${mobileCards}<div class="desktop-data-table table-scroll"><table><thead><tr><th>${tr('rank')}</th><th>${tr('country')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${ranking.map((row,i)=>`<tr><td>${i+1}</td><td><strong>${escapeHtml(row.country)}</strong></td><td>${row.gold}</td><td>${row.silver}</td><td>${row.bronze}</td><td><strong>${row.total}</strong></td></tr>`).join('')}</tbody></table></div>${rankingLimitControls('country', countryRankingVisibleCount, totalRows)}`;
    }


    function setEventSort(key){
      if(eventSortKey === key){
        eventSortDir = eventSortDir === 'desc' ? 'asc' : 'desc';
      }else{
        eventSortKey = key;
        eventSortDir = key === 'name' ? 'asc' : 'desc';
      }
      renderEventRanking(getFilteredEventRankingMedals());
    }

    function eventSortArrow(key){
      if(eventSortKey !== key) return '';
      return `<span class="sort-arrow">${eventSortDir === 'asc' ? '▲' : '▼'}`;
    }

    function getEventSortValue(row,key){
      switch(key){
        case 'name': return row.name || '';
        case 'olympic_gold': return row.olympic.gold;
        case 'olympic_silver': return row.olympic.silver;
        case 'olympic_bronze': return row.olympic.bronze;
        case 'olympic_total': return medalTotal(row.olympic);
        case 'worlds_gold': return row.worlds.gold;
        case 'worlds_silver': return row.worlds.silver;
        case 'worlds_bronze': return row.worlds.bronze;
        case 'worlds_total': return medalTotal(row.worlds);
        case 'worldcup_gold': return row.worldcup.gold;
        case 'worldcup_silver': return row.worldcup.silver;
        case 'worldcup_bronze': return row.worldcup.bronze;
        case 'worldcup_total': return medalTotal(row.worldcup);
        case 'total_gold': return row.total.gold;
        case 'total_silver': return row.total.silver;
        case 'total_bronze': return row.total.bronze;
        case 'total_count': return medalTotal(row.total);
        case 'score': return row.customScore || 0;
        default: return 0;
      }
    }

    function eventSortCompare(a,b){
      const av=getEventSortValue(a,eventSortKey);
      const bv=getEventSortValue(b,eventSortKey);
      let primary=0;
      if(typeof av === 'string' || typeof bv === 'string'){
        primary = eventSortDir === 'asc'
          ? String(av).localeCompare(String(bv),'ko')
          : String(bv).localeCompare(String(av),'ko');
      }else{
        primary = eventSortDir === 'asc' ? av-bv : bv-av;
      }
      return primary || defaultEventRankingCompare(a,b);
    }

    function renderEventRanking(data){
      const wrap=document.getElementById('eventRankingWrap');
      if(!data.length){wrap.innerHTML=`<div class="empty">${tr('empty')}</div>`;return;}

      const weights=readEventScoreWeights();
      const allRows=(isEventRankingRelay() ? buildCountryAggregatesForEventRanking(data) : buildSkaterAggregates(data))
        .map(row=>({...row,customScore:totalCustomScore(row,weights)}))
        .sort(eventSortCompare);
      const totalRows = allRows.length;
      const rows = allRows.slice(0, eventRankingVisibleCount);

      const labelName = isEventRankingRelay() ? tr('countryLabel') : tr('skaterLabel');
      const titleName = isEventRankingRelay() ? tr('countryLabel') : tr('skaterLabel');
      const relayMode = isEventRankingRelay();
      const eventLimitNote = relayMode ? (currentLang === 'en' ? 'Showing 20 countries by default' : '기본 20국씩 표시됩니다') : tr('top50');
      const scoreUnit = currentLang === 'en' ? 'pts' : '점';
      const bucketSummary = (bucket) => `${tr('gold')} ${bucket.gold} · ${tr('silver')} ${bucket.silver} · ${tr('bronze')} ${bucket.bronze} · ${tr('total')} ${medalTotal(bucket)}`;
      const bucketCard = (label,bucket) => `<div class="event-rank-bucket ${medalTotal(bucket)?'':'is-empty'}">
        <div class="event-rank-bucket-title"><span>${escapeHtml(label)}</span><strong>${medalTotal(bucket)}</strong></div>
        <div class="event-rank-bucket-values">
          <div><span>${tr('gold')}</span><strong>${bucket.gold}</strong></div>
          <div><span>${tr('silver')}</span><strong>${bucket.silver}</strong></div>
          <div><span>${tr('bronze')}</span><strong>${bucket.bronze}</strong></div>
          <div><span>${tr('total')}</span><strong>${medalTotal(bucket)}</strong></div>
        </div>
      </div>`;
      const mobileCards = `<div class="mobile-card-list event-rank-mobile-cards">${rows.map((row,i)=>{
        const nameHtml = relayMode
          ? `<strong>${escapeHtml(row.name)}</strong>`
          : `<span class="link" onclick="openPlayerPanel('${escapeJs(row.name)}')">${displaySkaterNameHtml(row.name)}</span>`;
        const action = relayMode
          ? `<button type="button" class="st-mini-btn" onclick="openCountryPage('${escapeJs(row.name)}')">${tr('countryPage')}</button>`
          : `<button type="button" class="st-mini-btn" onclick="openPlayerPanel('${escapeJs(row.name)}')">${tr('skaterDetail')}</button>`;
        return `<article class="mobile-data-card event-rank-mobile-card">
          <div class="mobile-card-topline"><span class="mobile-rank-badge">#${i+1}</span><strong class="event-rank-score">${formatScore(row.customScore)}<small>${scoreUnit}</small></strong></div>
          <div class="mobile-card-title"><span>${nameHtml}</span></div>
          <div class="mobile-card-meta">${escapeHtml(eventRankingLabel())} · ${escapeHtml(eventGenderLabel())}${row.country && !relayMode ? ` · ${escapeHtml(row.country)}` : ''}</div>
          <div class="event-rank-total-strip">
            <div><span>${tr('gold')}</span><strong>${row.total.gold}</strong></div>
            <div><span>${tr('silver')}</span><strong>${row.total.silver}</strong></div>
            <div><span>${tr('bronze')}</span><strong>${row.total.bronze}</strong></div>
            <div><span>${tr('total')}</span><strong>${medalTotal(row.total)}</strong></div>
          </div>
          <details class="mobile-card-more">
            <summary>${tr('competitionDetails')}</summary>
            <div class="event-rank-bucket-grid">
              ${bucketCard(tr('olympic'),row.olympic)}
              ${bucketCard(tr('worldChampionships'),row.worlds)}
              ${bucketCard(tr('worldCupTour'),row.worldcup)}
            </div>
            <div class="mobile-card-detail"><span>${tr('totalGroup')}</span><strong>${escapeHtml(bucketSummary(row.total))}</strong></div>
          </details>
          <div class="mobile-card-action">${action}</div>
        </article>`;
      }).join('')}</div>`;

      wrap.innerHTML=`<div class="subnote">${tr('currentEvent')}: ${eventRankingLabel()} · ${tr('genderLabel')}: ${eventGenderLabel()} · ${titleName} · ${eventLimitNote}. ${tr('relayCountryNote')}</div>
      ${mobileCards}
      <div class="desktop-data-table table-scroll"><table class="medal-detail-table">
        <thead>
          <tr>
            <th rowspan="2" class="rank-col">${tr('rank')}</th>
            <th rowspan="2" class="name-col sort-th" onclick="setEventSort('name')">${labelName}${eventSortArrow('name')}</th>
            <th colspan="4" class="group-head">${tr('olympic')}</th>
            <th colspan="4" class="group-head">${tr('worldChampionships')}</th>
            <th colspan="4" class="group-head">${tr('worldCupTour')}</th>
            <th colspan="4" class="group-head">${tr('totalGroup')}</th>
            <th rowspan="2" class="score-col sort-th" onclick="setEventSort('score')">${tr('score')}${eventSortArrow('score')}</th>
          </tr>
          <tr>
            <th class="medal-num sort-th" onclick="setEventSort('olympic_gold')">${tr('gold')}${eventSortArrow('olympic_gold')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('olympic_silver')">${tr('silver')}${eventSortArrow('olympic_silver')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('olympic_bronze')">${tr('bronze')}${eventSortArrow('olympic_bronze')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('olympic_total')">${tr('total')}${eventSortArrow('olympic_total')}</th>

            <th class="medal-num sort-th" onclick="setEventSort('worlds_gold')">${tr('gold')}${eventSortArrow('worlds_gold')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('worlds_silver')">${tr('silver')}${eventSortArrow('worlds_silver')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('worlds_bronze')">${tr('bronze')}${eventSortArrow('worlds_bronze')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('worlds_total')">${tr('total')}${eventSortArrow('worlds_total')}</th>

            <th class="medal-num sort-th" onclick="setEventSort('worldcup_gold')">${tr('gold')}${eventSortArrow('worldcup_gold')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('worldcup_silver')">${tr('silver')}${eventSortArrow('worldcup_silver')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('worldcup_bronze')">${tr('bronze')}${eventSortArrow('worldcup_bronze')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('worldcup_total')">${tr('total')}${eventSortArrow('worldcup_total')}</th>

            <th class="medal-num sort-th" onclick="setEventSort('total_gold')">${tr('gold')}${eventSortArrow('total_gold')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('total_silver')">${tr('silver')}${eventSortArrow('total_silver')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('total_bronze')">${tr('bronze')}${eventSortArrow('total_bronze')}</th>
            <th class="medal-num sort-th" onclick="setEventSort('total_count')">${tr('total')}${eventSortArrow('total_count')}</th>
          </tr>
        </thead>
        <tbody>${rows.map((row,i)=>`<tr>
          <td class="rank-col">${i+1}</td>
          <td class="name-col">${isEventRankingRelay()?`<strong>${escapeHtml(row.name)}</strong>`:`<span class="link" onclick="openPlayerPanel('${escapeJs(row.name)}')">${escapeHtml(row.name)}</span>`}</td>
          <td class="medal-num">${row.olympic.gold}</td><td class="medal-num">${row.olympic.silver}</td><td class="medal-num">${row.olympic.bronze}</td><td class="medal-num rank-total">${medalTotal(row.olympic)}</td>
          <td class="medal-num">${row.worlds.gold}</td><td class="medal-num">${row.worlds.silver}</td><td class="medal-num">${row.worlds.bronze}</td><td class="medal-num rank-total">${medalTotal(row.worlds)}</td>
          <td class="medal-num">${row.worldcup.gold}</td><td class="medal-num">${row.worldcup.silver}</td><td class="medal-num">${row.worldcup.bronze}</td><td class="medal-num rank-total">${medalTotal(row.worldcup)}</td>
          <td class="medal-num">${row.total.gold}</td><td class="medal-num">${row.total.silver}</td><td class="medal-num">${row.total.bronze}</td><td class="medal-num rank-total">${medalTotal(row.total)}</td>
          <td class="score-result score-col">${formatScore(row.customScore)}</td>
        </tr>`).join('')}</tbody>
      </table></div>${rankingLimitControls('event', eventRankingVisibleCount, totalRows)}`;
    }

    function buildCountryAggregatesForEventRanking(data){
      const map=new Map();
      data.forEach(row=>{
        const key=row.country;if(!key)return;
        if(!map.has(key)) map.set(key,createSkaterAgg(key,key));
        const item=map.get(key);
        const bucket=competitionBucket(row.competition_type);
        addMedalCount(item[bucket], row.medal);
        addMedalCount(item.total, row.medal);
      });
      return [...map.values()];
    }

    function defaultEventRankingCompare(a,b){
      return b.customScore-a.customScore||
        b.olympic.gold-a.olympic.gold||
        b.olympic.silver-a.olympic.silver||
        b.olympic.bronze-a.olympic.bronze||
        b.worlds.gold-a.worlds.gold||
        b.worlds.silver-a.worlds.silver||
        b.worlds.bronze-a.worlds.bronze||
        (skaterRankingOptions.separateWorldsOverall ? (b.worldsOverall.gold-a.worldsOverall.gold||b.worldsOverall.silver-a.worldsOverall.silver||b.worldsOverall.bronze-a.worldsOverall.bronze) : 0)||
        b.worldcup.gold-a.worldcup.gold||
        b.worldcup.silver-a.worldcup.silver||
        b.worldcup.bronze-a.worldcup.bronze||
        String(a.name).localeCompare(String(b.name),'ko');
    }

    function applyEventScoreSettings(){
      eventSortKey = 'score';
      eventSortDir = 'desc';
      resetEventRankingVisibleCount();
      renderEventRanking(getFilteredEventRankingMedals());
    }


    function updateCompareOptionTabs(){
      document.querySelectorAll('.compare-option-tab').forEach(btn=>{
        if(btn.dataset.compareOption === 'includeWorldsOverall'){
          btn.classList.toggle('active', !!compareOptions.includeWorldsOverall);
          btn.textContent = compareOptions.includeWorldsOverall ? tr('compareIncludeWorldsOverall') : tr('compareExcludeWorldsOverall');
        }
      });
      document.querySelectorAll('.compare-worlds-overall-score-field').forEach(el=>{
        el.style.display = 'none';
      });
    }

    function readCompareScoreWeights(){
      const weights={};
      document.querySelectorAll('.compare-score-input').forEach(input=>{
        const key=input.dataset.scoreKey;
        const value=Number(input.value);
        weights[key]=Number.isFinite(value)?value:0;
      });
      return weights;
    }

    function totalCompareScore(row,weights){
      return bucketScore(row.olympic,'olympic',weights)
        + bucketScore(row.worlds,'worlds',weights)
        + (compareOptions.includeWorldsOverall ? bucketScore(row.worldsOverall,'worlds',weights) : 0)
        + bucketScore(row.worldcup,'worldcup',weights);
    }

    function getComparisonEligibleRows(name){
      return skaterMedals
        .filter(row=>row.skater_name===name)
        .filter(row=>row.medal_type==='Individual')
        .filter(row=>!compareSeason||row.season===compareSeason)
        .filter(row=>rowInEra(row, compareEraStart, compareEraEnd))
        .filter(row=>{
          if(isOlympicDemonstrationRow(row)) return false;
          if(!compareOptions.includeWorldsOverall && isWorldChampionshipOverallRow(row)) return false;
          if(isIndividual3000mEvent(row.event)) return false;
          return true;
        });
    }

    function aggregateRowsForComparison(rows){
      const agg=createSkaterAgg('', '');
      rows.forEach(row=>{
        let bucket=competitionBucket(row.competition_type);
        // 선수 비교에서는 종합 순위 화면의 '세계선수권 종합 별도' 설정과 무관하게
        // World Championships Overall 행을 항상 별도 버킷으로 분리합니다.
        // 그래야 '세계선수권 점수'와 '세계선수권 종합 점수'가 서로 섞이지 않습니다.
        if(bucket==='worlds' && isWorldChampionshipOverallRow(row)){
          bucket='worldsOverall';
        }
        addMedalCount(agg[bucket], row.medal);
        addMedalCount(agg.total, row.medal);
      });
      return agg;
    }

    function comparisonScore(rows, bucketName){
      const weights=readCompareScoreWeights();
      const agg=aggregateRowsForComparison(rows);
      if(bucketName==='olympic') return bucketScore(agg.olympic,'olympic',weights);
      if(bucketName==='worldsOverall') return compareOptions.includeWorldsOverall ? bucketScore(agg.worldsOverall,'worlds',weights) : 0;
      if(bucketName==='worlds') return bucketScore(agg.worlds,'worlds',weights);
      if(bucketName==='worldcup') return bucketScore(agg.worldcup,'worldcup',weights);
      return totalCompareScore(agg,weights);
    }

    function eventMedalBucketForComparison(rows,eventName){
      const distance = String(eventName||'').replace(/[^0-9]/g,'');
      return countMedalBucket(rows.filter(row=>isDistanceEvent(row.event,distance) && row.medal_type==='Individual'));
    }

    function comparisonEventGroupLabel(eventName){
      if(isDistanceEvent(eventName,'500')) return '500m';
      if(isDistanceEvent(eventName,'1000')) return '1000m';
      if(isDistanceEvent(eventName,'1500')) return '1500m';
      if(isWorldChampionshipOverallRow({ competition_type:'World Championships', event:eventName })) return tr('overall');
      return translateEventName(eventName || '');
    }

    function bestGoldEvent(rows){
      const map=new Map();
      rows.filter(row=>row.medal==='Gold' && row.medal_type==='Individual')
        .filter(row=>!isWorldChampionshipOverallRow(row))
        .forEach(row=>{
          const label=comparisonEventGroupLabel(row.event||'');
          if(!label) return;
          map.set(label,(map.get(label)||0)+1);
        });
      if(!map.size) return tr('noData');
      const [event,count]=[...map.entries()].sort((a,b)=>b[1]-a[1]||String(a[0]).localeCompare(String(b[0]),'ko'))[0];
      return currentLang === 'en' ? `${event} (${count})` : `${event} (${count}개)`;
    }

    function medalBucketText(bucket){
      return `${bucket.gold}/${bucket.silver}/${bucket.bronze} (${medalTotal(bucket)})`;
    }

    function renderPlayerComparison(){
      const aName=document.getElementById('comparePlayerA')?.value || '';
      const bName=document.getElementById('comparePlayerB')?.value || '';
      const wrap=document.getElementById('compareWrap');
      if(!wrap) return;
      if(!aName || !bName){
        wrap.innerHTML=`<div class="empty">${tr('compareEmpty')}</div>`;
        return;
      }

      const aRows=getComparisonEligibleRows(aName);
      const bRows=getComparisonEligibleRows(bName);
      const rows=[
        [tr('totalScore'), formatScore(comparisonScore(aRows,'total')), formatScore(comparisonScore(bRows,'total'))],
        [tr('olympicScore'), formatScore(comparisonScore(aRows,'olympic')), formatScore(comparisonScore(bRows,'olympic'))],
        ...(compareOptions.includeWorldsOverall ? [[tr('worldsOverallScore'), formatScore(comparisonScore(aRows,'worldsOverall')), formatScore(comparisonScore(bRows,'worldsOverall'))]] : []),
        [tr('worldsScore'), formatScore(comparisonScore(aRows,'worlds')), formatScore(comparisonScore(bRows,'worlds'))],
        [tr('worldcupScore'), formatScore(comparisonScore(aRows,'worldcup')), formatScore(comparisonScore(bRows,'worldcup'))],
        [tr('individualMedals'), medalBucketText(countMedalBucket(aRows)), medalBucketText(countMedalBucket(bRows))],
        [tr('fiveHundred'), medalBucketText(eventMedalBucketForComparison(aRows,'500m')), medalBucketText(eventMedalBucketForComparison(bRows,'500m'))],
        [tr('thousand'), medalBucketText(eventMedalBucketForComparison(aRows,'1000m')), medalBucketText(eventMedalBucketForComparison(bRows,'1000m'))],
        [tr('fifteenHundred'), medalBucketText(eventMedalBucketForComparison(aRows,'1500m')), medalBucketText(eventMedalBucketForComparison(bRows,'1500m'))],
        [tr('bestEvent'), bestGoldEvent(aRows), bestGoldEvent(bRows)]
      ];

      wrap.innerHTML=`<div class="table-scroll"><table><thead><tr><th>${tr('category')}</th><th>${escapeHtml(aName)}</th><th>${escapeHtml(bName)}</th></tr></thead><tbody>${rows.map(row=>`<tr><td><strong>${escapeHtml(row[0])}</strong></td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td></tr>`).join('')}</tbody></table></div>`;
    }



    function normalizeBadgeText(value){
      return String(value || '')
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,'')
        .toLowerCase()
        .replace(/\s+/g,' ');
    }

    function medalTextIsGold(row){
      const medal = normalizeBadgeText(row && row.medal);
      return medal === 'gold' || medal === 'g' || medal === '금' || medal === '금메달' || medal === '1' || medal === '1위' || medal.includes('gold');
    }

    function isWorldCupOrWorldTourRow(row){
      const type = normalizeBadgeText(row && row.competition_type);
      const name = normalizeBadgeText(row && row.competition_name);
      return type.includes('world cup') || type.includes('world tour') || name.includes('world cup') || name.includes('world tour');
    }

    function badgeCompetitionBucket(row){
      const type = normalizeBadgeText(row && row.competition_type);
      const name = normalizeBadgeText(row && row.competition_name);
      if(type.includes('olympic') || name.includes('olympic')) return 'olympic';
      if(type.includes('world championship') || type.includes('world championships') || name.includes('world championship') || name.includes('world championships')) return 'worlds';
      if(type.includes('world cup') || type.includes('world tour') || name.includes('world cup') || name.includes('world tour')) return 'worldcup';
      return '';
    }

    function badgeEventText(row){
      return normalizeBadgeText(row && row.event).replace(/\s+/g,' ');
    }

    function badgeIsOverall(row){
      const event = badgeEventText(row);
      return /overall|allround|classification|종합/.test(event);
    }

    function badgeIsRelay(row){
      const event = badgeEventText(row);
      const medalType = normalizeBadgeText(row && row.medal_type);
      return medalType === 'relay' || event.includes('relay') || event.includes('계주');
    }

    function badgeIsIndividual(row){
      const medalType = normalizeBadgeText(row && row.medal_type);
      if(medalType === 'superfinal') return false;
      if(isWorldChampionshipSuperFinalRow(row)) return false;
      if(medalType === 'individual') return true;
      return !badgeIsRelay(row) && !isWorldChampionshipSuperFinalRow(row);
    }

    function badgeAllPlayerRows(name){
      const canonical = canonicalSkaterName(name);
      const rows = [];
      (medals || []).forEach(row => {
        if(canonicalSkaterName(row.skater_name) === canonical){
          rows.push({...row, medal_type: row.medal_type || 'Individual', skater_name: canonical});
        }
      });
      (relayMembers || []).forEach(row => {
        if(canonicalSkaterName(row.skater_name) === canonical){
          rows.push({...row, medal_type: row.medal_type || 'Relay', skater_name: canonical});
        }
      });
      (skaterMedals || []).forEach(row => {
        if(canonicalSkaterName(row.skater_name) === canonical){
          rows.push(row);
        }
      });

      const seen = new Set();
      return rows.filter(row => {
        const key = [
          row.competition_type, row.season, row.competition_name, row.event,
          row.medal, row.medal_type, row.country
        ].map(v => String(v || '')).join('|');
        if(seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    function getPlayerAchievementBadges(name){
      const rows = badgeAllPlayerRows(name).filter(medalTextIsGold);
      const label=(ko,en)=>currentLang==='en'?en:ko;

      const olympicIndividualGold = rows.some(row =>
        badgeCompetitionBucket(row) === 'olympic' &&
        badgeIsIndividual(row) &&
        !isOlympicDemonstrationRow(row)
      );
      const olympicRelayGold = rows.some(row =>
        badgeCompetitionBucket(row) === 'olympic' &&
        badgeIsRelay(row) &&
        !isOlympicDemonstrationRow(row)
      );
      const worldsOverallGold = rows.some(row =>
        badgeCompetitionBucket(row) === 'worlds' &&
        badgeIsOverall(row)
      );
      const worldsIndividualGold = rows.some(row =>
        badgeCompetitionBucket(row) === 'worlds' &&
        badgeIsIndividual(row) &&
        !badgeIsOverall(row)
      );
      const worldCupTourIndividualGold = rows.some(row =>
        badgeCompetitionBucket(row) === 'worldcup' &&
        badgeIsIndividual(row)
      );
      const grandSlam = olympicIndividualGold && olympicRelayGold && worldsIndividualGold && worldCupTourIndividualGold;

      const badges = [];
      if(olympicIndividualGold) badges.push({label:label('\uC62C\uB9BC\uD53D \uAC1C\uC778\uC804 \uAE08\uBA54\uB2EC','Olympic individual gold medal'), cls:''});
      if(olympicRelayGold) badges.push({label:label('\uC62C\uB9BC\uD53D \uACC4\uC8FC \uAE08\uBA54\uB2EC','Olympic relay gold medal'), cls:''});
      if(worldsOverallGold) badges.push({label:label('\uC138\uACC4\uC120\uC218\uAD8C \uC885\uD569 \uC6B0\uC2B9','World Championships overall title'), cls:''});
      if(worldsIndividualGold) badges.push({label:label('\uC138\uACC4\uC120\uC218\uAD8C \uAC1C\uC778\uC804 \uAE08\uBA54\uB2EC','World Championships individual gold medal'), cls:''});
      if(worldCupTourIndividualGold) badges.push({label:label('\uC6D4\uB4DC\uCEF5\u00B7\uC6D4\uB4DC\uD22C\uC5B4 \uAC1C\uC778\uC804 \uAE08\uBA54\uB2EC','World Cup & World Tour individual gold medal'), cls:''});
      if(grandSlam) badges.push({label:label('\uADF8\uB79C\uB4DC\uC2AC\uB7A8','Grand Slam'), cls:'grand-slam'});
      return badges;
    }

    function renderPlayerAchievementBadges(name){
      const badges = getPlayerAchievementBadges(name);
      const html = badges.map(badge => `<span class="achievement-badge ${badge.cls || ''}">${escapeHtml(badge.label)}</span>`).join('');
      const wrap = document.getElementById('playerAchievementBadges');
      if(wrap) wrap.innerHTML = html;
      const duplicateLine = document.getElementById('playerAchievementBadgesLine');
      if(duplicateLine) duplicateLine.remove();
    }


    
    function closePlayerPanel(){document.getElementById('playerPanel').classList.remove('active');}


    function displayMedalTypeForDetail(value){
      if(value === 'Relay') return relaySummaryLabel();
      if(value === 'Individual') return currentLang === 'en' ? 'Individual' : '개인전';
      return value || '';
    }

    function worldSummaryLabel(){
      return currentLang === 'en' ? 'World Championships' : '세계선수권';
    }

    function relaySummaryLabel(){
      return currentLang === 'en' ? 'Relay (Olympics-focused)' : '계주 (올림픽 중심)';
    }

    

    function countMedalBucket(rows){
      const bucket={gold:0,silver:0,bronze:0};
      rows.forEach(row=>addMedalCount(bucket,row.medal));
      return bucket;
    }

    function medalOrderForPlayerDetail(medal){
      if(medal === 'Gold') return 0;
      if(medal === 'Silver') return 1;
      if(medal === 'Bronze') return 2;
      return 9;
    }

    function competitionOrderForPlayerDetail(row){
      const bucket = competitionBucket(row.competition_type);
      const event = String(row.event || '').trim().toLowerCase();
      const medalType = String(row.medal_type || '').trim();

      if(bucket === 'olympic'){
        if(medalType === 'Individual') return 0;
        if(medalType === 'Relay') return 1;
        return 2;
      }

      if(bucket === 'worlds'){
        if(event === 'overall') return 2;
        if(medalType === 'Individual') return 3;
        if(medalType === 'Relay') return 4;
        return 5;
      }

      if(bucket === 'worldcup'){
        if(medalType === 'Individual') return 5;
        if(medalType === 'Relay') return 6;
        return 7;
      }

      return 8;
    }

    function seasonStartYearForSort(season){
      const text=String(season||'').trim();
      const match=text.match(/^(\d{4})\s*-\s*(\d{2}|\d{4})$/);
      if(match) return Number(match[1]);
      const yearMatch=text.match(/\d{4}/);
      return yearMatch ? Number(yearMatch[0]) : 0;
    }

    function competitionRoundForSort(name){
      const text=String(name||'');
      const hash=text.match(/#\s*(\d+)/);
      if(hash) return Number(hash[1]);
      const tour=text.match(/(?:World\s*Tour|World\s*Cup)\s*(\d+)/i);
      if(tour) return Number(tour[1]);
      return 0;
    }

    function competitionRecentSortValue(row){
      const year=Number(row.year||0);
      const seasonStart=seasonStartYearForSort(row.season);
      const round=competitionRoundForSort(row.competition_name);
      return {year, seasonStart, round};
    }

    function compareRecentCompetition(a,b){
      const av=competitionRecentSortValue(a);
      const bv=competitionRecentSortValue(b);
      return (bv.year-av.year)
        || (bv.seasonStart-av.seasonStart)
        || (bv.round-av.round)
        || String(b.competition_name || '').localeCompare(String(a.competition_name || ''), 'ko');
    }

    function playerDetailEventOrder(row){
      const event = String(row.event || '').trim().toLowerCase().replace(/\s+/g,'');
      if(event === 'overall') return 0;
      if(/^500m(\(\d+\))?$/.test(event)) return 1;
      if(/^1000m(\(\d+\))?$/.test(event)) return 2;
      if(/^1500m(\(\d+\))?$/.test(event)) return 3;
      if(/^3000m/.test(event)) return 4;
      if(event.includes('relay')) return 5;
      return 6;
    }

    // 선수 상세 메달 내역 정렬: 금·은·동 각각에서 올림픽 개인전 → 올림픽 계주 → 세계선수권 종합 → 세계선수권 개인전 → 세계선수권 계주 → 월드컵·월드투어 개인전 → 월드컵·월드투어 계주 순서를 유지하고, 각 묶음 안에서는 최근 대회·최근 회차부터 정렬
    function comparePlayerDetailMedals(a,b){
      return medalOrderForPlayerDetail(a.medal) - medalOrderForPlayerDetail(b.medal)
        || competitionOrderForPlayerDetail(a) - competitionOrderForPlayerDetail(b)
        || compareRecentCompetition(a,b)
        || playerDetailEventOrder(a) - playerDetailEventOrder(b)
        || String(a.event || '').localeCompare(String(b.event || ''), 'ko');
    }


    function seasonSortValue(season, year){
      const raw=String(season||'').trim();
      const match=raw.match(/^(\d{4})-(\d{2}|\d{4})$/);
      if(match) return Number(match[1]);
      const y=Number(year||0);
      return Number.isFinite(y) ? y : 0;
    }

    

    function normalizeBestTimeEvent(value){
      const raw=String(value||'').trim();
      const v=raw.toLowerCase()
        .replace(/ladies/g,'women')
        .replace(/metres|metre|meters|meter/g,'m')
        .replace(/[._-]+/g,' ')
        .replace(/\s+/g,' ')
        .trim();
      const compact=v.replace(/\s+/g,'');
      if(/relay/.test(v) || /mixed/.test(v)) return raw;
      if(/3000m/.test(compact)) return '3000m Super Final';
      if(/(?:^|women|men)500m(?:\(\d+\))?$/.test(compact) && !/1500m/.test(compact)) return '500m';
      if(/(?:^|women|men)1000m(?:\(\d+\))?$/.test(compact)) return '1000m';
      if(/(?:^|women|men)1500m(?:\(\d+\))?$/.test(compact)) return '1500m';
      if(compact==='500') return '500m';
      if(compact==='1000') return '1000m';
      if(compact==='1500') return '1500m';
      return raw;
    }

    function normalizePersonalBestEvent(value){
      const event=normalizeBestTimeEvent(value);
      return ['500m','1000m','1500m'].includes(event) ? event : '';
    }

    function personalBestEventOrder(event){
      const order={'500m':1,'1000m':2,'1500m':3};
      return order[event] || 99;
    }

    function personalBestDisplayEvent(event){
      return event || '';
    }

    function parseBestSeconds(value){
      const s=String(value||'').trim();
      if(!s || /^(nan|null|undefined|no time|pen|dnf|dns|adv|dq)$/i.test(s)) return null;
      const direct=Number(s);
      if(Number.isFinite(direct)) return direct;
      if(s.includes(':')){
        const parts=s.split(':').map(x=>Number(String(x).trim()));
        if(parts.length===2 && parts.every(Number.isFinite)) return parts[0]*60+parts[1];
        if(parts.length===3 && parts.every(Number.isFinite)) return parts[0]*3600+parts[1]*60+parts[2];
      }
      return null;
    }

    function extractEventRecordsFromJson(json){
      if(!json) return [];
      if(Array.isArray(json)) return json;
      const keys=['event_records_cache','event_records','eventRecordsCache','eventRecords','records','record_rankings','event_records_all'];
      let out=[];
      keys.forEach(key=>{
        const value=json[key];
        if(Array.isArray(value)) out=out.concat(value);
      });
      if(json.result) out=out.concat(extractEventRecordsFromJson(json.result));
      return out;
    }

    async function fetchEventRecordsForPersonalBest(){
      if(!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('여기에')) return [];
      const sep=APPS_SCRIPT_URL.includes('?') ? '&' : '?';
      const json=await archiveSnapshotDataset('event_records');
      if(json && json.ok === false) throw new Error(json.error || 'event_records 로딩 실패');
      return extractEventRecordsFromJson(json).map(normalizeEventRecordCacheRow).filter(row=>row.skater_name && row.personal_best_event);
    }

    function normalizeEventRecordCacheRow(row){
      const original=String(row && (row.skater_name || row.name || row.athlete || row.team_name) || '').replace(/\s+/g,' ').trim();
      const event=normalizePersonalBestEvent(row && (row.event || row.distance || row.discipline) || '');
      const seconds=parseBestSeconds(row && (row.seconds_float || row.best_time || row.time || row.final_time || row.record));
      const status=String(row && row.status || '').trim();
      const round=String(row && row.round || '').trim();
      const normalized={
        rank:String(row && row.rank || '').trim(),
        athlete_id:row.athlete_id||archiveAthleteId(original),
        skater_name:canonicalSkaterName(original),
        original_skater_name:original,
        country:String(row && row.country || '').trim(),
        time:String(row && (row.time || row.best_time || row.final_time || row.record) || '').trim(),
        seconds_float:seconds,
        status,
        gender:String(row && row.gender || '').trim(),
        event:String(row && row.event || '').trim(),
        personal_best_event:event,
        final_rank:String(row && (row.final_rank || row.rank) || '').trim(),
        city:String(row && row.city || '').trim(),
        date:String(row && row.date || '').trim(),
        season:normalizeSeasonLabel(row && row.season || '', row && row.year || ''),
        competition_type:String(row && row.competition_type || '').trim(),
        competition_name:String(row && row.competition_name || '').trim(),
        round,
        heat:String(row && row.heat || '').trim(),
        source_url:String(row && row.source_url || '').trim(),
        raw_data:String(row && row.raw_data || '').trim(),
        note:String(row && row.note || '').trim(),
        source:'기록자료'
      };
      if(!['500m','1000m','1500m'].includes(normalized.personal_best_event)) normalized.personal_best_event='';
      if(/relay/i.test(normalized.event)) normalized.personal_best_event='';
      if(/^(pen|dnf|dns|dq)$/i.test(status) || String(round).toLowerCase()==='consent') normalized.personal_best_event='';
      return normalized;
    }

    function buildSkaterNameKeySet(name){
      const set=new Set();
      const add=(v)=>addNameMatchingVariantsToSet(set, v);
      add(name);
      const canonical=canonicalSkaterName(name);
      add(canonical);
      (skaterAliases||[]).forEach(row=>{
        const rowCanonical=canonicalSkaterName(row.canonical_name);
        const related = rowCanonical===canonical
          || aliasKey(row.canonical_name)===aliasKey(canonical)
          || looseNameKey(row.canonical_name)===looseNameKey(canonical);
        if(related){
          add(row.alias_name);
          add(row.canonical_name);
        }
      });
      return set;
    }

    function sameSkaterByAlias(recordName, targetKeys){
      const candidates=[];
      const addCandidate=(v)=>{
        const raw=String(v||'').trim();
        if(!raw) return;
        candidates.push(raw, canonicalSkaterName(raw));
        raw.split('/').forEach(x=>candidates.push(x));
        const parts=raw.split(/\s+/).filter(Boolean);
        if(parts.length>=2) candidates.push([...parts].reverse().join(' '));
      };
      addCandidate(recordName);
      return candidates.some(candidate=>{
        const raw=String(candidate||'').trim();
        return raw && (targetKeys.has(aliasKey(raw)) || targetKeys.has(looseNameKey(raw)) || targetKeys.has(aliasKey(canonicalSkaterName(raw))) || targetKeys.has(looseNameKey(canonicalSkaterName(raw))));
      });
    }

    function personalBestTieBreakScore(row){
      const round=String(row.round||'').toLowerCase();
      let score=0;
      if(round.includes('final') && !round.includes('rep')) score+=30;
      if(round.includes('semi')) score+=20;
      if(round.includes('quarter')) score+=10;
      if(row.competition_type && /olympic/i.test(row.competition_type)) score+=5;
      if(row.competition_type && /world championship/i.test(row.competition_type)) score+=4;
      return score;
    }

    function isBetterPersonalBest(candidate, current){
      if(!current) return true;
      const cSec=Number(candidate.seconds_float);
      const pSec=Number(current.seconds_float);
      if(Number.isFinite(cSec) && Number.isFinite(pSec) && cSec !== pSec) return cSec < pSec;
      const cScore=personalBestTieBreakScore(candidate);
      const pScore=personalBestTieBreakScore(current);
      if(cScore !== pScore) return cScore > pScore;
      return seasonSortValue(candidate.season,candidate.year) > seasonSortValue(current.season,current.year);
    }

    function bestTimeRowAsPersonalBest(row){
      const event=normalizePersonalBestEvent(row.event);
      const seconds=parseBestSeconds(row.best_time || row.time);
      if(!['500m','1000m','1500m'].includes(event) || seconds===null) return null;
      return {
        skater_name:row.skater_name,
        original_skater_name:row.original_skater_name||row.skater_name,
        country:row.country||'',
        gender:row.gender||'',
        personal_best_event:event,
        event:row.event||event,
        time:row.best_time||row.time||'',
        seconds_float:seconds,
        competition_type:row.competition_type||'',
        competition_name:row.competition_name||'',
        city:row.city||'',
        season:row.season||row.year||'',
        year:row.year||'',
        round:row.round||'',
        note:row.note||'',
        source:'수동 입력'
      };
    }

    function personalBestMapForPlayer(name){
      const keys=buildSkaterNameKeySet(name);
      const bestByEvent=new Map();

      (eventRecordsCache||[]).forEach(row=>{
        if(!row || !row.personal_best_event) return;
        if(!sameSkaterByAlias(row.skater_name || row.original_skater_name, keys)) return;
        if(!Number.isFinite(Number(row.seconds_float))) return;
        const event=row.personal_best_event;
        if(isBetterPersonalBest(row, bestByEvent.get(event))) bestByEvent.set(event,row);
      });

      (bestTimes||[]).forEach(row=>{
        if(!sameSkaterByAlias(row.skater_name || row.original_skater_name, keys)) return;
        const pb=bestTimeRowAsPersonalBest(row);
        if(!pb) return;
        const event=pb.personal_best_event;
        if(isBetterPersonalBest(pb, bestByEvent.get(event))) bestByEvent.set(event,pb);
      });

      return bestByEvent;
    }

    function renderPersonalBestCell(row){
      if(!row) return `<span class="muted">${escapeHtml(archiveRecordStateText())}</span>`;
      const details=[row.competition_name,row.round,row.season||row.year].filter(Boolean).join(' · ');
      return `<strong>${escapeHtml(row.time || '')}</strong><br><small>${escapeHtml(details || '-')}</small>`;
    }

    function bestTimeEventOrder(event){
      const e=normalizeBestTimeEvent(event);
      if(e==='500m') return 0;
      if(e==='1000m') return 1;
      if(e==='1500m') return 2;
      return 9;
    }

    function parseTimeToSeconds(value){
      const raw=String(value||'').trim();
      if(!raw) return Number.POSITIVE_INFINITY;
      const clean=raw.replace(/[^\d:.]/g,'');
      const parts=clean.split(':').map(Number);
      if(parts.some(Number.isNaN)) return Number.POSITIVE_INFINITY;
      if(parts.length===1) return parts[0];
      if(parts.length===2) return parts[0]*60 + parts[1];
      if(parts.length===3) return parts[0]*3600 + parts[1]*60 + parts[2];
      return Number.POSITIVE_INFINITY;
    }

    

    function renderPlayerBestTimeTable(name){
      const wrap=document.getElementById('playerBestTimeTable');
      if(!wrap) return;
      const bestByEvent=personalBestMapForPlayer(name);
      const events=['500m','1000m','1500m'];
      const tableRows=events.map(event=>{
        const row=bestByEvent.get(event);
        if(!row){
          return `<tr><td><strong>${event}</strong></td><td colspan="5" class="muted">${escapeHtml(archiveRecordStateText())}</td></tr>`;
        }
        const time=row.time||row.best_time||'';
        const comp=[row.competition_name,row.round].filter(Boolean).join(' · ') || '-';
        const season=row.season||row.year||'-';
        const source=archiveSourceLabel(row.source||'수동 입력');
        const note=[source,row.note].filter(Boolean).join(' · ');
        return `<tr>
          <td><strong>${event}</strong></td>
          <td><strong>${escapeHtml(time)}</strong></td>
          <td>${escapeHtml(comp)}</td>
          <td>${escapeHtml(row.competition_type||'-')}</td>
          <td>${escapeHtml(season)}</td>
          <td>${archiveSourceHtml(row)}${row.note ? `<br><small>${escapeHtml(row.note)}</small>` : ''}</td>
        </tr>`;
      }).join('');

      wrap.innerHTML=`<div class="table-scroll"><table><thead><tr><th>${tr('event')}</th><th>${stLang('수록 최고기록','Best recorded time')}</th><th>${stLang('대회/라운드','Competition/round')}</th><th>${stLang('구분','Type')}</th><th>${tr('season')}</th><th>${tr('source')}</th></tr></thead><tbody>${tableRows}</tbody></table></div>`;
    }

    
    function closeCompetitionPanel(){document.getElementById('competitionPanel').classList.remove('active');}

    

    function renderCompetitionLapSummary(name){
      const wrap=document.getElementById('competitionBestTimeSummary');
      if(!wrap) return;
      wrap.innerHTML='';
    }

    function sortLapRows(a,b){return Number(b.year||0)-Number(a.year||0)||String(a.competition_name).localeCompare(String(b.competition_name),'ko')||genderOrder(a.gender)-genderOrder(b.gender)||eventOrder(a.event)-eventOrder(b.event)||roundOrder(a.round)-roundOrder(b.round)||Number(a.heat||0)-Number(b.heat||0)||Number(a.lap_number||0)-Number(b.lap_number||0);}
    function rankSort(a,b){return b.gold-a.gold||b.silver-a.silver||b.bronze-a.bronze||b.total-a.total||String(a.country).localeCompare(String(b.country),'ko');}
    function isRelayEvent(eventName){return /relay|계주/i.test(String(eventName||''));}
    function medalOrder(medal){return medal==='Gold'?1:medal==='Silver'?2:medal==='Bronze'?3:4;}
    function genderOrder(gender){return gender==='Men'?1:gender==='Women'?2:gender==='Mixed'?3:9;}
    function competitionTypeOrder(type){return type==='Olympic Games'?1:type==='World Championships'?2:type==='World Cup'?3:type==='World Tour'?4:9;}
    function eventOrder(eventName){const order={'500m':1,'1000m':2,'1500m':3,'3000m':4,'3000m Relay':5,'5000m Relay':6,'Mixed Relay':7,'Mixed 2000m Relay':7,'Overall':8};return order[eventName]||99;}
    function roundOrder(roundName){const order={'Preliminaries':1,'Preliminary':1,'Heats':2,'Heat':2,'Quarterfinal':3,'Quarterfinals':3,'Semifinal':4,'Semifinals':4,'Final B':5,'Final A':6};return order[roundName]||99;}
    function medalKorean(medal){return medal==='Gold'?tr('gold'):medal==='Silver'?tr('silver'):medal==='Bronze'?tr('bronze'):medal||'';}
    function genderKorean(gender){return gender==='Men'?tr('men'):gender==='Women'?tr('women'):gender==='Mixed'?tr('mixed'):escapeHtml(gender||'');}



    function visitorLocalDate(){
      const d=new Date();
      const y=d.getFullYear();
      const m=String(d.getMonth()+1).padStart(2,'0');
      const day=String(d.getDate()).padStart(2,'0');
      return `${y}-${m}-${day}`;
    }





    function handleFanCardImageFile(event){
      const file=event.target.files && event.target.files[0];
      updateLocalizedFileInput();
      if(!file){
        fanCardUploadedImageDataUrl='';
        updateLocalizedFileInput();
        updateFanCard();
        return;
      }

      if(!file.type || !file.type.startsWith('image/')){
        alert(currentLang==='en' ? 'Please select an image file.' : '이미지 파일을 선택해 주세요.');
        event.target.value='';
        fanCardUploadedImageDataUrl='';
        updateFanCard();
        return;
      }

      const reader=new FileReader();
      reader.onload=()=>{
        fanCardUploadedImageDataUrl=String(reader.result || '');
        updateFanCard();
      };
      reader.onerror=()=>{
        alert(currentLang==='en' ? 'The image could not be loaded.' : '이미지를 불러오지 못했습니다.');
        fanCardUploadedImageDataUrl='';
        updateFanCard();
      };
      reader.readAsDataURL(file);
    }

    function fanCardGradeClass(grade){
      const value=String(grade||'CUSTOM').toLowerCase().replace(/\s+/g,'-');
      if(['prospect','contender','champion','world-class','legend','goat','custom'].includes(value)) return 'grade-'+value;
      return 'grade-custom';
    }

    function updateFanCard(){
      const card=document.getElementById('fanCardPreview');
      if(!card) return;

      const name=document.getElementById('fanCardName')?.value.trim() || 'Unnamed Skater';
      const rating=document.getElementById('fanCardRating')?.value || '-';
      const gradeSelect=document.getElementById('fanCardGrade');
      const selectedGrade=gradeSelect?.value || 'CUSTOM';
      const customGrade=document.getElementById('fanCardCustomGrade')?.value.trim();
      const grade=selectedGrade==='CUSTOM' && customGrade ? customGrade : selectedGrade;
      const comment=document.getElementById('fanCardComment')?.value.trim() || '';
      const imageUrlFromInput=document.getElementById('fanCardImageUrl')?.value.trim() || '';
      const imageUrl=fanCardUploadedImageDataUrl || imageUrlFromInput;

      card.className='fan-card ' + fanCardGradeClass(selectedGrade);
      document.getElementById('fanCardPreviewName').textContent=name;
      document.getElementById('fanCardPreviewRating').textContent=rating;
      document.getElementById('fanCardPreviewGrade').textContent=grade;
      document.getElementById('fanCardPreviewComment').textContent=comment;

      const img=document.getElementById('fanCardPreviewImage');
      const placeholder=document.getElementById('fanCardImagePlaceholder');
      if(img && placeholder){
        if(imageUrl){
          img.style.display='block';
          placeholder.style.display='none';
          if(img.src !== imageUrl) img.src=imageUrl;
          img.onerror=()=>{
            img.style.display='none';
            placeholder.style.display='block';
            placeholder.textContent=currentLang==='en' ? 'This image URL cannot be displayed.' : '표시할 수 없는 이미지 URL입니다.';
          };
          img.onload=()=>{
            img.style.display='block';
            placeholder.style.display='none';
          };
        }else{
          img.removeAttribute('src');
          img.style.display='none';
          placeholder.style.display='block';
          placeholder.textContent=currentLang==='en' ? 'Enter an image URL to display it here.' : '이미지 URL을 입력하면 여기에 표시됩니다.';
        }
      }

      const stats=[];
      const names=[...document.querySelectorAll('.fan-stat-name')];
      const scores=[...document.querySelectorAll('.fan-stat-score')];
      names.forEach((input,index)=>{
        const statName=input.value.trim();
        const statScore=scores[index]?.value ?? '';
        if(statName || statScore){
          stats.push({name:statName || '-', score:statScore || '-'});
        }
      });

      const statsWrap=document.getElementById('fanCardPreviewStats');
      if(statsWrap){
        statsWrap.innerHTML=stats.slice(0,8).map(stat=>`<div class="fan-card-stat"><span class="stat-name">${escapeHtml(stat.name)}</span><span class="stat-score">${escapeHtml(stat.score)}</span></div>`).join('');
      }
    }

    let html2canvasLoadPromise = null;
    function ensureHtml2Canvas(){
      if(typeof html2canvas === 'function') return Promise.resolve();
      if(html2canvasLoadPromise) return html2canvasLoadPromise;
      html2canvasLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('html2canvas load failed'));
        document.head.appendChild(script);
      });
      return html2canvasLoadPromise;
    }

    async function downloadFanCard(){
      const card=document.getElementById('fanCardPreview');
      if(!card) return;

      try{
        await ensureHtml2Canvas();
      }catch(_loadError){
        alert(currentLang==='en' ? 'Image saving library has not loaded. Please try a screenshot.' : '이미지 저장 라이브러리를 불러오지 못했습니다. 화면 캡처를 이용해 주세요.');
        return;
      }

      try{
        const canvas=await html2canvas(card,{
          backgroundColor:null,
          scale:2,
          useCORS:true,
          allowTaint:false
        });
        const link=document.createElement('a');
        const name=(document.getElementById('fanCardName')?.value || 'skater-card').trim().replace(/[\\/:*?"<>|]+/g,'_') || 'skater-card';
        link.download=`${name}_fan_card.png`;
        link.href=canvas.toDataURL('image/png');
        link.click();
      }catch(error){
        console.warn(error);
        alert(currentLang==='en'
          ? 'The card could not be saved as an image. The external image URL may be blocked by security/CORS settings. Please use a screenshot instead.'
          : '카드 이미지를 저장하지 못했습니다. 외부 이미지 URL 보안/CORS 문제일 수 있습니다. 화면 캡처를 이용해 주세요.');
      }
    }


    function parseShortTrackTime(value){
      const raw=String(value||'').trim();
      if(!raw) return Number.POSITIVE_INFINITY;
      const clean=raw.replace(/[^\d:.]/g,'');
      if(!clean) return Number.POSITIVE_INFINITY;
      const parts=clean.split(':').map(Number);
      if(parts.some(Number.isNaN)) return Number.POSITIVE_INFINITY;
      if(parts.length===1) return parts[0];
      if(parts.length===2) return parts[0]*60 + parts[1];
      if(parts.length===3) return parts[0]*3600 + parts[1]*60 + parts[2];
      return Number.POSITIVE_INFINITY;
    }

    function buildHeatInputTable(){
      const heatCount=Math.max(1, Math.min(20, Number(document.getElementById('heatCount')?.value)||1));
      const perHeat=Math.max(2, Math.min(8, Number(document.getElementById('heatSkatersPerHeat')?.value)||5));
      const wrap=document.getElementById('heatInputWrap');
      if(!wrap) return;

      let rows='';
      for(let h=1; h<=heatCount; h++){
        for(let s=1; s<=perHeat; s++){
          rows += `<tr data-heat-row="${h}">
            <td class="heat-col">${h}</td>
            <td><input class="heat-pos" type="number" min="1" max="20" value="${s}"></td>
            <td><input class="heat-name" type="text" placeholder="${tr('heatName')}"></td>
            <td><input class="heat-country" type="text" maxlength="3" placeholder="KOR"></td>
            <td><input class="heat-time" type="text" placeholder="1:23.456"></td>
            <td><select class="heat-status">
              <option value="OK">OK</option>
              <option value="ADV">ADV</option>
            </select></td>
          </tr>`;
        }
      }

      wrap.innerHTML=`<div class="heat-output-title">${tr('heatRound')} ${escapeHtml(document.getElementById('heatRound')?.value||'')}</div>
      <div class="subnote">${tr('heatInputNote')}</div>
      <div class="table-scroll"><table class="heat-table"><thead><tr>
        <th>${tr('heatHeat')}</th><th>${tr('heatPosition')}</th><th>${tr('heatName')}</th><th>${tr('heatCountry')}</th><th>${tr('heatTime')}</th><th>${tr('heatStatus')}</th>
      </tr></thead><tbody>${rows}</tbody></table></div>`;
      document.getElementById('heatOutputWrap').innerHTML=`<div class="empty">${tr('heatOutputEmpty')}</div>`;
    }

    function collectHeatRows(){
      return [...document.querySelectorAll('#heatInputWrap tbody tr')].map((trEl, index)=>{
        const heat=Number(trEl.dataset.heatRow || 0);
        const position=Number(trEl.querySelector('.heat-pos')?.value || 999);
        const name=trEl.querySelector('.heat-name')?.value.trim() || '';
        const country=trEl.querySelector('.heat-country')?.value.trim().toUpperCase() || '';
        const time=trEl.querySelector('.heat-time')?.value.trim() || '';
        const status=trEl.querySelector('.heat-status')?.value || 'OK';
        return {index, heat, position, name, country, time, status, seconds:parseShortTrackTime(time)};
      }).filter(row=>row.name);
    }

    function qualifierReasonLabel(reason){
      if(reason==='Q') return tr('heatAutoQ');
      if(reason==='q') return tr('heatTimeQ');
      if(reason==='ADV') return tr('heatAdv');
      return reason;
    }

    function qualifierTag(reason){
      const cls=reason==='Q'?'tag-q':reason==='q'?'tag-t':'tag-adv';
      return `<span class="qualifier-tag ${cls}">${qualifierReasonLabel(reason)}</span>`;
    }

    function compareHeatSeedPriority(a, b){
      const reasonOrder={Q:0,ADV:1,q:2};
      const reasonDiff=(reasonOrder[a.reason]??9)-(reasonOrder[b.reason]??9);
      if(reasonDiff) return reasonDiff;

      // Rule 293: direct qualifiers and ADV skaters use place first, then time.
      // Time qualifiers have already been selected by time and stay in that order.
      if(a.reason==='q'){
        return a.seconds-b.seconds
          || a.position-b.position
          || a.heat-b.heat
          || a.index-b.index;
      }
      return a.position-b.position
        || a.seconds-b.seconds
        || a.heat-b.heat
        || a.index-b.index;
    }

    function calculateHeatDraw(){
      const rows=collectHeatRows();
      const autoN=Math.max(0, Number(document.getElementById('heatAutoQualifiers')?.value)||0);
      const timeN=Math.max(0, Number(document.getElementById('heatTimeQualifiers')?.value)||0);
      const nextHeatCount=Math.max(1, Number(document.getElementById('heatNextCount')?.value)||1);

      const qualifiers=[];
      const used=new Set();
      const heatGroups=new Map();
      rows.forEach(row=>{
        if(!heatGroups.has(row.heat)) heatGroups.set(row.heat, []);
        heatGroups.get(row.heat).push(row);
      });

      // 직접 진출자는 각 조 결과에서 먼저 선발한다. ADV는 별도 그룹으로 처리한다.
      [...heatGroups.entries()].sort((a,b)=>a[0]-b[0]).forEach(([heat, group])=>{
        group
          .filter(row=>row.status==='OK')
          .sort((a,b)=>a.position-b.position||a.seconds-b.seconds||a.index-b.index)
          .slice(0, autoN)
          .forEach(row=>{
            qualifiers.push({...row, reason:'Q'});
            used.add(row.index);
          });
      });

      // q는 직접 진출 포지션 밖의 선수 중 기록순으로 선발한다.
      if(timeN>0){
        rows
          .filter(row=>row.status==='OK' && !used.has(row.index))
          .sort((a,b)=>a.seconds-b.seconds||a.position-b.position||a.index-b.index)
          .slice(0,timeN)
          .forEach(row=>{
            qualifiers.push({...row, reason:'q'});
            used.add(row.index);
          });
      }

      // ADV는 순위 진출자 뒤, 기록 진출자(q) 앞의 별도 시드 그룹이다.
      rows.filter(row=>row.status==='ADV').forEach(row=>{
        qualifiers.push({...row, reason:'ADV'});
        used.add(row.index);
      });

      const seedOrder=qualifiers.slice()
        .sort(compareHeatSeedPriority)
        .map((row, i)=>({...row, seed:i+1}));

      const nextHeats=Array.from({length:nextHeatCount},()=>[]);
      seedOrder.forEach((row, idx)=>{
        const block=Math.floor(idx/nextHeatCount);
        const pos=idx % nextHeatCount;
        const heatIndex=block % 2 === 0 ? pos : nextHeatCount-1-pos;
        nextHeats[heatIndex].push(row);
      });

      const nextHeatsWithSp=nextHeats.map(group=>group
        .slice()
        .sort((a,b)=>a.seed-b.seed||a.index-b.index)
        .map((row, idx)=>({...row, sp:idx+1}))
      );

      renderHeatToolOutput(seedOrder, nextHeatsWithSp);
    }

    function renderHeatToolOutput(qualifiers, nextHeats){
      const wrap=document.getElementById('heatOutputWrap');
      if(!wrap) return;

      if(!qualifiers.length){
        wrap.innerHTML=`<div class="empty">${tr('heatNoQualifiers')}</div>`;
        return;
      }

      const qualifierRows=qualifiers.map(row=>`<tr>
        <td>${row.seed}</td><td>${row.heat}</td><td><strong>${escapeHtml(row.name)}</strong> ${qualifierTag(row.reason)}</td><td>${escapeHtml(row.country)}</td><td>${row.position}</td><td>${escapeHtml(row.time||'-')}</td>
      </tr>`).join('');

      const nextHtml=nextHeats.map((group, i)=>`<div class="heat-next-card"><h4>${tr('heatHeat')} ${i+1}</h4>
        <div class="table-scroll"><table class="heat-table"><thead><tr><th>${tr('heatSP')}</th><th>${tr('heatName')}</th><th>${tr('heatCountry')}</th><th>${tr('heatTime')}</th><th>${tr('heatRank')}</th></tr></thead><tbody>
        ${group.map(row=>`<tr><td>${row.sp}</td><td><strong>${escapeHtml(row.name)}</strong></td><td>${escapeHtml(row.country)}</td><td>${escapeHtml(row.time||'-')}</td><td>#${row.seed}</td></tr>`).join('')}
        </tbody></table></div></div>`).join('');

      wrap.innerHTML=`<div class="heat-result-grid">
        <div class="heat-output-box"><div class="heat-output-title">${tr('heatQualifiers')}</div>
          <div class="subnote">${tr('heatSeedOrderNote')}</div>
          <div class="table-scroll"><table class="heat-table"><thead><tr><th>${tr('heatRank')}</th><th>${tr('heatHeat')}</th><th>${tr('heatName')}</th><th>${tr('heatCountry')}</th><th>${tr('heatPosition')}</th><th>${tr('heatTime')}</th></tr></thead><tbody>${qualifierRows}</tbody></table></div>
        </div>
        <div class="heat-output-box"><div class="heat-output-title">${tr('heatNextDraw')}</div>
          <div class="subnote">${tr('heatAssignmentNote')} ${tr('heatOfficialNote')}</div>
          <div class="heat-result-grid">${nextHtml}</div>
        </div>
      </div>`;
    }

    function fillSampleHeatData(){
      buildHeatInputTable();
      const names=['Kim A','Lee B','Park C','Choi D','Seo E','Hwang F','Rim G','Sun H','Dubois I','Sighel J','Dandjinou K','Desmet L','Liu M','Wang N','Blais O','Santos P','Velzeboer Q','Poutsma R','Boutin S','Jang T'];
      const countries=['KOR','KOR','KOR','KOR','KOR','KOR','PRK','CHN','CAN','ITA','CAN','BEL','CHN','CHN','CAN','USA','NED','NED','CAN','KOR'];
      [...document.querySelectorAll('#heatInputWrap tbody tr')].forEach((trEl, i)=>{
        const name=names[i%names.length];
        trEl.querySelector('.heat-name').value=name;
        trEl.querySelector('.heat-country').value=countries[i%countries.length];
        const heat=Number(trEl.dataset.heatRow||1);
        const pos=Number(trEl.querySelector('.heat-pos').value||1);
        trEl.querySelector('.heat-time').value=`2:${String(15+heat+pos).padStart(2,'0')}.${String(100+i*17).slice(0,3)}`;
      });
    }

    function clearHeatData(){
      document.querySelectorAll('#heatInputWrap input').forEach(input=>{
        if(input.classList.contains('heat-pos')) return;
        input.value='';
      });
      document.querySelectorAll('#heatInputWrap select').forEach(select=>select.value='OK');
      const out=document.getElementById('heatOutputWrap');
      if(out) out.innerHTML=`<div class="empty">${tr('heatOutputEmpty')}</div>`;
    }


    function escapeAttr(value){
      return String(value ?? '')
        .replace(/&/g,'&amp;')
        .replace(/"/g,'&quot;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;');
    }

    function quizMedalLabel(medal){
      const value=String(medal||'');
      if(typeof translateMedal === 'function') return translateMedal(value);
      if(currentLang==='en') return value;
      if(value==='Gold') return '금';
      if(value==='Silver') return '은';
      if(value==='Bronze') return '동';
      return value;
    }

    function quizCompetitionGroup(row){
      const bucket=competitionBucket(row.competition_type);
      if(bucket==='olympic') return 'olympic';
      if(bucket==='worlds') return 'worlds';
      if(bucket==='worldcup') return 'worldcup';
      return bucket || '';
    }

    function isQuizEligibleRow(row){
      if(!row || !row.skater_name || !row.country || !row.gender || !row.event || !row.medal) return false;
      if(row.gender!=='Men' && row.gender!=='Women') return false;
      if(row.medal_type && row.medal_type !== 'Individual') return false;
      const event=String(row.event||'');
      if(/relay/i.test(event)) return false;
      if(isIndividual3000mEvent(event)) return false;
      if(isOlympicDemonstrationRow(row)) return false;
      if(!['Gold','Silver','Bronze'].includes(row.medal)) return false;
      const year=Number(row.year||0);
      if(!Number.isFinite(year) || year<1900) return false;
      return true;
    }

    function quizRowMatchesOptions(row){
      const era=document.getElementById('quizEra')?.value || 'all';
      const gender=document.getElementById('quizGender')?.value || 'all';
      const competition=document.getElementById('quizCompetition')?.value || 'all';
      const year=Number(row.year||0);
      if(era!=='all'){
        const start=Number(era);
        if(year < start || year > start+9) return false;
      }
      if(gender!=='all' && row.gender!==gender) return false;
      if(competition!=='all' && quizCompetitionGroup(row)!==competition) return false;
      return true;
    }

    function quizGroupKey(row){
      return [row.competition_type,row.season,row.competition_name,row.city,row.year,row.gender,row.event].join(' | ');
    }

    function quizEventLabel(row){
      const gender = row.gender==='Women' ? tr('women') : row.gender==='Men' ? tr('men') : row.gender;
      return `${row.year} ${row.competition_name} · ${gender} · ${translateEventName(row.event)}`;
    }

    function shuffleArray(array){
      const arr=array.slice();
      for(let i=arr.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
      }
      return arr;
    }

    function uniqueValues(values){
      return [...new Set(values.filter(Boolean).map(v=>String(v).trim()).filter(Boolean))];
    }

    function sampleOptions(correct, pool, count=4){
      const options=[String(correct)];
      shuffleArray(uniqueValues(pool).filter(v=>v!==String(correct))).forEach(v=>{
        if(options.length<count) options.push(v);
      });
      return options.length>=2 ? shuffleArray(options.slice(0,count)) : [];
    }

    function getQuizBaseRows(){
      const sourceRows = Array.isArray(medals) && medals.length ? medals : (Array.isArray(filteredMedals) ? filteredMedals : []);
      return sourceRows.filter(isQuizEligibleRow).filter(quizRowMatchesOptions);
    }

    function getCompleteQuizPodiums(rows){
      const groups=new Map();
      rows.forEach(row=>{
        const key=quizGroupKey(row);
        if(!groups.has(key)) groups.set(key, []);
        groups.get(key).push(row);
      });
      return [...groups.values()].map(group=>{
        const gold=group.filter(r=>r.medal==='Gold');
        const silver=group.filter(r=>r.medal==='Silver');
        const bronze=group.filter(r=>r.medal==='Bronze');
        if(gold.length===1 && silver.length===1 && bronze.length===1){
          return {rows:group, gold:gold[0], silver:silver[0], bronze:bronze[0], sample:gold[0]};
        }
        return null;
      }).filter(Boolean);
    }

    function makeGoldQuiz(podium, allRows){
      const answer=podium.gold.skater_name;
      const pool=allRows
        .filter(row=>row.gender===podium.gold.gender && (row.event===podium.gold.event || quizCompetitionGroup(row)===quizCompetitionGroup(podium.gold)))
        .map(row=>row.skater_name);
      const options=sampleOptions(answer,pool,4);
      if(options.length<4) return null;
      return {
        type:'gold',
        question:`${quizEventLabel(podium.gold)} ${tr('quizGoldQuestion')}`,
        options,
        answer,
        sourceRows:[podium.gold],
        meta:`${podium.gold.competition_type} / ${podium.gold.season} / ${podium.gold.event} / Gold`
      };
    }

    function makePodiumQuiz(podium){
      const answer=`${podium.gold.skater_name} - ${podium.silver.skater_name} - ${podium.bronze.skater_name}`;
      const names=[podium.gold.skater_name,podium.silver.skater_name,podium.bronze.skater_name];
      const perms=[
        [names[0],names[1],names[2]],[names[0],names[2],names[1]],[names[1],names[0],names[2]],
        [names[1],names[2],names[0]],[names[2],names[0],names[1]],[names[2],names[1],names[0]]
      ].map(a=>a.join(' - '));
      const options=sampleOptions(answer,perms,4);
      if(options.length<4) return null;
      return {
        type:'podium',
        question:`${quizEventLabel(podium.gold)} ${tr('quizPodiumQuestion')}`,
        options,
        answer,
        sourceRows:[podium.gold,podium.silver,podium.bronze],
        meta:`${podium.gold.competition_type} / ${podium.gold.season} / ${podium.gold.event} / Podium`
      };
    }

    function makeCountryQuiz(row, allRows){
      const answer=row.country;
      const pool=allRows.filter(r=>r.gender===row.gender).map(r=>r.country);
      const options=sampleOptions(answer,pool,4);
      if(options.length<4) return null;
      return {
        type:'country',
        question:`${row.skater_name} ${tr('quizCountryQuestion')}`,
        options,
        answer,
        sourceRows:[row],
        meta:`${row.skater_name} / ${row.country}`
      };
    }

    function makeMedalQuiz(podium){
      const row=shuffleArray([podium.gold,podium.silver,podium.bronze])[0];
      const answer=quizMedalLabel(row.medal);
      const options=['Gold','Silver','Bronze'].map(quizMedalLabel);
      return {
        type:'medal',
        question:`${quizEventLabel(row)} · ${row.skater_name}: ${tr('quizMedalQuestion')}`,
        options:shuffleArray(options),
        answer,
        sourceRows:[row],
        meta:`${row.competition_type} / ${row.season} / ${row.event} / ${row.medal}`
      };
    }

    function buildQuizCandidates(){
      const rows=getQuizBaseRows();
      const selectedType=document.getElementById('quizType')?.value || 'mixed';
      const candidates=[];
      if(!rows.length) return candidates;

      // 성능 보호: 전체 데이터가 커도 랜덤 표본에서 충분한 후보를 만든다.
      const rowSample=shuffleArray(rows).slice(0, Math.min(rows.length, 1200));
      const goldRows=shuffleArray(rows.filter(row=>row.medal==='Gold')).slice(0, 500);
      const countryRows=shuffleArray(rows).slice(0, Math.min(rows.length, 500));
      const medalRows=shuffleArray(rows).slice(0, Math.min(rows.length, 700));

      const poolsByGender=new Map();
      rows.forEach(row=>{
        const key=row.gender || 'all';
        if(!poolsByGender.has(key)) poolsByGender.set(key, []);
        poolsByGender.get(key).push(row.skater_name);
      });

      if(selectedType==='mixed'||selectedType==='gold'){
        goldRows.forEach(row=>{
          const pool=(poolsByGender.get(row.gender)||rows.map(r=>r.skater_name));
          const options=sampleOptions(row.skater_name,pool,4);
          if(options.length>=4){
            candidates.push({
              type:'gold',
              question:`${quizEventLabel(row)} ${tr('quizGoldQuestion')}`,
              options,
              answer:row.skater_name,
              sourceRows:[row],
              meta:`${row.competition_type} / ${row.season} / ${row.event} / Gold`
            });
          }
        });
      }

      if(selectedType==='mixed'||selectedType==='podium'){
        getCompleteQuizPodiums(rowSample).slice(0,300).forEach(podium=>{
          const q=makePodiumQuiz(podium);
          if(q) candidates.push(q);
        });
      }

      if(selectedType==='mixed'||selectedType==='medal'){
        medalRows.forEach(row=>{
          const answer=quizMedalLabel(row.medal);
          const options=['Gold','Silver','Bronze'].map(quizMedalLabel);
          candidates.push({
            type:'medal',
            question:`${quizEventLabel(row)} · ${row.skater_name}: ${tr('quizMedalQuestion')}`,
            options:shuffleArray(options),
            answer,
            sourceRows:[row],
            meta:`${row.competition_type} / ${row.season} / ${row.event} / ${row.medal}`
          });
        });
      }

      if(selectedType==='mixed'||selectedType==='country'){
        countryRows.forEach(row=>{
          const q=makeCountryQuiz(row, rows);
          if(q) candidates.push(q);
        });
      }

      return shuffleArray(candidates);
    }

    function startRandomQuiz(){
      const wrap=document.getElementById('quizWrap');
      if(!wrap) return;

      wrap.innerHTML=`<div class="empty">${currentLang==='en'?'Generating quiz...':'퀴즈를 생성하는 중입니다...'}</div>`;

      setTimeout(()=>{
        try{
          const sourceReady=(Array.isArray(medals) && medals.length) || (Array.isArray(filteredMedals) && filteredMedals.length);
          if(!sourceReady){
            currentQuizQuestions=[];
            wrap.innerHTML=`<div class="empty">${currentLang==='en'
              ? 'Medals data has not loaded yet. Please wait a moment and try again.'
              : 'medals 데이터를 아직 불러오지 못했습니다. 잠시 후 다시 눌러 주세요.'}</div>`;
            return;
          }

          const requestedCount=Number(document.getElementById('quizCount')?.value||10);
          const candidates=buildQuizCandidates();

          if(!candidates.length){
            currentQuizQuestions=[];
            wrap.innerHTML=`<div class="empty">${tr('quizNoData')}<br><br>${currentLang==='en'
              ? 'Try broadening the filters: All era / All gender / All competitions / Mixed question type.'
              : '시대·성별·대회 종류를 전체로 넓히거나 문제 유형을 혼합으로 바꿔 보세요.'}</div>`;
            return;
          }

          const actualCount=Math.min(requestedCount, candidates.length);
          currentQuizQuestions=candidates.slice(0, actualCount).map((q,i)=>({...q,id:i}));
          renderQuizQuestions(false);

          if(actualCount < requestedCount){
            const notice=document.createElement('div');
            notice.className='subnote';
            notice.style.marginBottom='10px';
            notice.textContent=currentLang==='en'
              ? `Only ${actualCount} questions were generated for the selected filters.`
              : `선택한 조건에서 생성 가능한 문제가 ${actualCount}개라 ${actualCount}문제만 출제했습니다.`;
            document.getElementById('quizWrap')?.prepend(notice);
          }
        }catch(error){
          console.error('Quiz start error', error);
          wrap.innerHTML=`<div class="empty">${currentLang==='en'
            ? 'The quiz could not be generated. Please report this issue.'
            : '퀴즈를 생성하지 못했습니다. 오류 신고로 제보해 주세요.'}<br><small>${escapeHtml(String(error && error.message ? error.message : error))}</small></div>`;
        }
      }, 30);
    }

    function renderQuizQuestions(showResult=false){
      const wrap=document.getElementById('quizWrap');
      if(!wrap) return;
      if(!currentQuizQuestions.length){
        wrap.innerHTML=`<div class="empty">${tr('quizEmpty')}</div>`;
        return;
      }

      const questionsHtml=currentQuizQuestions.map((q,idx)=>{
        const selected=document.querySelector(`input[name="quiz_${q.id}"]:checked`)?.value || '';
        return `<div class="quiz-question" data-quiz-id="${q.id}">
          <div class="quiz-question-header">
            <div class="quiz-question-title">${tr('quizQuestion')} ${idx+1}. ${escapeHtml(q.question)}</div>
            <button type="button" class="quiz-report-btn" onclick="reportQuizIssue(${q.id})">${tr('quizReport')}</button>
          </div>
          <div class="quiz-options">${q.options.map(option=>{
            const isSelected=selected===option;
            const cls=showResult ? (option===q.answer ? ' correct' : (isSelected && option!==q.answer ? ' wrong' : '')) : '';
            return `<label class="quiz-option${cls}"><input type="radio" name="quiz_${q.id}" value="${escapeAttr(option)}" ${isSelected?'checked':''}> <span>${escapeHtml(option)}</span></label>`;
          }).join('')}</div>
          ${showResult?`<div class="quiz-meta">${tr('quizCorrectAnswer')}: <strong>${escapeHtml(q.answer)}</strong> · ${tr('quizYourAnswer')}: <strong>${escapeHtml(selected||tr('quizUnanswered'))}</strong></div>
          <div class="quiz-meta">${escapeHtml(q.meta||'')}</div>${archiveQuizEvidenceHtml(q)}`:''}
        </div>`;
      }).join('');

      const bottomButton = showResult ? '' : `<div class="quiz-actions" style="justify-content:center;margin-top:16px">
        <button type="button" class="sort-btn primary-score-btn" data-i18n="submitQuiz" onclick="submitRandomQuiz()">${tr('submitQuiz')}</button>
      </div>`;

      wrap.innerHTML=questionsHtml + bottomButton;
    }

    function getQuizTitleByRate(rate){
      if(rate>=1) return tr('quizTitleGod');
      if(rate>=0.9) return tr('quizTitleLegend');
      if(rate>=0.8) return tr('quizTitleWorld');
      if(rate>=0.7) return tr('quizTitlePodium');
      if(rate>=0.5) return tr('quizTitleFan');
      return tr('quizTitleRookie');
    }

    function submitRandomQuiz(){
      if(!currentQuizQuestions.length) return;
      let correct=0;
      currentQuizQuestions.forEach(q=>{
        const selected=document.querySelector(`input[name="quiz_${q.id}"]:checked`)?.value || '';
        if(selected===q.answer) correct++;
      });
      renderQuizQuestions(true);
      const rate=correct/currentQuizQuestions.length;
      const result=document.createElement('div');
      result.className='quiz-result-box';
      result.id='quizResultBox';
      result.innerHTML=`<div class="quiz-result-score">${tr('quizScoreText')}: ${correct} / ${currentQuizQuestions.length}</div>
        <div>${tr('quizAccuracy')}: ${Math.round(rate*100)}%</div>
        <div class="quiz-title-badge">${escapeHtml(getQuizTitleByRate(rate))}</div>`;
      document.getElementById('quizWrap')?.prepend(result);

      setTimeout(()=>{
        document.getElementById('quizResultBox')?.scrollIntoView({behavior:'smooth', block:'start'});
      }, 50);
    }

    function resetRandomQuiz(){
      currentQuizQuestions=[];
      const wrap=document.getElementById('quizWrap');
      if(wrap) wrap.innerHTML=`<div class="empty">${tr('quizEmpty')}</div>`;
    }

    function reportQuizIssue(id){
      const q=currentQuizQuestions.find(item=>item.id===id);
      openReportModal();
      const textarea=document.getElementById('reportMessage');
      if(textarea && q){
        const rows=(q.sourceRows||[]).map(row=>[
          row.competition_type,row.season,row.competition_name,row.city,row.year,row.gender,row.event,row.medal,row.skater_name,row.country,row.time
        ].join(' | ')).join('\\n');
        textarea.value=`[퀴즈 오류 신고]\\n문제: ${q.question}\\n정답 처리: ${q.answer}\\n선택지: ${q.options.join(' / ')}\\n관련 데이터:\\n${rows}`;
      }
    }

    window.startRandomQuiz = startRandomQuiz;
    window.submitRandomQuiz = submitRandomQuiz;
    window.resetRandomQuiz = resetRandomQuiz;
    window.reportQuizIssue = reportQuizIssue;
    window.reportRowIssue = reportRowIssue;
    window.openHelpModal = openHelpModal;
    window.closeHelpModal = closeHelpModal;


    function openHelpModal(){
      const modal=document.getElementById('helpModalBackdrop');
      if(modal) modal.classList.add('open');
    }
    function closeHelpModal(){
      const modal=document.getElementById('helpModalBackdrop');
      if(modal) modal.classList.remove('open');
    }

    function openReportModal(prefill){
      const modal=document.getElementById('reportModalBackdrop');
      const status=document.getElementById('reportStatus');
      const textarea=document.getElementById('reportMessage');
      if(status) status.textContent='';
      if(typeof prefill==='string' && textarea) textarea.value=prefill;
      if(modal) modal.classList.add('open');
      setTimeout(()=>document.getElementById('reportMessage')?.focus(),50);
    }
    function closeReportModal(){
      const modal=document.getElementById('reportModalBackdrop');
      if(modal) modal.classList.remove('open');
    }
    async function submitReport(){
      const textarea=document.getElementById('reportMessage');
      const btn=document.getElementById('reportSubmitBtn');
      const status=document.getElementById('reportStatus');
      const message=String(textarea?.value||'').trim();
      if(!message){if(status) status.textContent=tr('enterReport');return;}
      try{
        if(btn) btn.disabled=true;
        if(status) status.textContent=tr('submitting');
        const payload={action:'report',message,page_url:location.href,user_agent:navigator.userAgent,created_at:new Date().toISOString()};
        const response=await fetch(APPS_SCRIPT_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});
        const result=await response.json().catch(()=>({ok:false,error:'응답을 해석하지 못했습니다.'}));
        if(!result.ok) throw new Error(result.error||'제출에 실패했습니다.');
        textarea.value='';
        closeReportModal();
        alert(tr('submitted'));
      }catch(error){
        console.error(error);
        if(status) status.textContent=tr('reportFail');
      }finally{
        if(btn) btn.disabled=false;
      }
    }

    function scrollToSection(id){
      if(id==='homeFeatureSection')id=getEffectiveViewMode()==='mobile'?'mobileHomeSection':'archiveQuickStart';
      const el=document.getElementById(id);
      if(el && !el.classList.contains('panel'))document.querySelectorAll('main > .panel.active').forEach(panel=>panel.classList.remove('active'));
      if(!el) return;
      el.scrollIntoView({behavior:'smooth',block:'start'});
    }

    function showPreparing(){
      alert(tr('preparing'));
    }

    function escapeHtml(value){return String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');}
    function escapeJs(value){
      return String(value ?? '')
        .replaceAll('\\', '\\\\')
        .replaceAll("'", "\\'")
        .replaceAll('"', '\\"');
    }
  
    /* Search result view: 검색어가 있을 때 홈 콘텐츠를 필터링처럼 보이지 않게 하고, 검색 결과 전용 화면을 표시합니다. */
    const ST_SEARCH_VIEW_ID = 'stSearchResultView';
    const ST_RESULT_LIMIT = 6;

    function stText(value){return String(value ?? '').trim();}
    function stLower(value){return stText(value).toLowerCase();}
    function stHtml(value){return escapeHtml(value);}
    function stJs(value){return escapeJs(value);}
    function stLang(ko,en){return currentLang === 'en' ? en : ko;}

    function stAllSearchRows(){
      const medalRows = (medals || []).map(row => ({...row, __source:'medals'}));
      const relayRows = (relayMembers || []).map(row => ({...row, __source:'relay_members'}));
      const bestRows = (bestTimes || []).map(row => ({
        competition_type: row.competition_type || 'Best Time',
        season: row.season || '',
        competition_name: row.competition_name || '',
        city: row.city || '',
        year: row.year || '',
        gender: row.gender || '',
        event: row.event || '',
        medal: '',
        skater_name: row.skater_name || row.original_skater_name || '',
        original_skater_name: row.original_skater_name || '',
        country: row.country || '',
        time: row.best_time || row.time || '',
        note: row.note || '',
        __source:'best_times'
      }));
      return [...medalRows, ...relayRows, ...bestRows];
    }

    

    function stUniqueBy(rows, keyFn){
      const seen = new Set();
      const out = [];
      rows.forEach(row => {
        const key = keyFn(row);
        if(!key || seen.has(key)) return;
        seen.add(key);
        out.push(row);
      });
      return out;
    }

    function stMedalSummary(rows){
      const gold = rows.filter(row => row.medal === 'Gold').length;
      const silver = rows.filter(row => row.medal === 'Silver').length;
      const bronze = rows.filter(row => row.medal === 'Bronze').length;
      const bits = [];
      if(gold) bits.push(`금 ${gold}`);
      if(silver) bits.push(`은 ${silver}`);
      if(bronze) bits.push(`동 ${bronze}`);
      return bits.length ? bits.join(' · ') : `관련 기록 ${rows.length}건`;
    }

    function stGenderLabel(value){
      const v = stLower(value);
      if(v === 'women') return '여자';
      if(v === 'men') return '남자';
      if(v === 'mixed') return '혼성';
      return stText(value) || '-';
    }

    function stMedalLabel(value){
      const v = stText(value);
      if(v === 'Gold') return '금';
      if(v === 'Silver') return '은';
      if(v === 'Bronze') return '동';
      return v || '-';
    }

    function stDetectSearchType(query, pool){
      const q = stLower(query);
      const compact = q.replace(/\s+/g,'');
      if(/^\d{4}-\d{2}$/.test(q)) return {key:'season', label:'시즌 검색어로 인식됨'};
      if(/^(500|1000|1500)m?$/.test(compact) || compact.includes('계주') || compact.includes('relay') || compact.includes('mixedrelay')) return {key:'event', label:'종목 검색어로 인식됨'};

      const countries = stUniqueBy(pool.filter(row => stText(row.country)), row => stLower(row.country)).map(row => stLower(row.country));
      if(countries.includes(q) || ['kor','korea','southkorea','republicofkorea','대한민국','한국','can','canada','chn','china','중국','ned','netherlands','네덜란드','ita','italy','이탈리아','hun','hungary','헝가리','usa','unitedstates','미국','jpn','japan','일본'].includes(compact)){
        return {key:'country', label:'국가 검색어로 인식됨'};
      }

      if(/olympic|world|championship|championships|tour|cup|games|asian|european|olympics|세계선수권|월드컵|월드투어|올림픽|아시안게임|유럽선수권|사대륙/.test(q)){
        return {key:'competition', label:'대회 검색어로 인식됨'};
      }

      const exactCompetition = pool.some(row => stLower(row.competition_name) === q);
      if(exactCompetition) return {key:'competition', label:'대회 검색어로 인식됨'};

      return {key:'skater', label:'선수 검색어로 인식됨'};
    }

    

    function stEnsureSearchView(){
      let view = document.getElementById(ST_SEARCH_VIEW_ID);
      if(view) return view;
      view = document.createElement('section');
      view.id = ST_SEARCH_VIEW_ID;
      view.className = 'card anchor-section';
      const searchSection = document.getElementById('searchSection');
      if(searchSection && searchSection.parentNode){
        searchSection.parentNode.insertBefore(view, searchSection.nextSibling);
      }else{
        document.querySelector('main')?.prepend(view);
      }
      return view;
    }

    function stSetSearchHomeVisible(showHome){
      document.body.classList.toggle('st-search-active', !showHome);
      const view = document.getElementById(ST_SEARCH_VIEW_ID);
      if(view) view.style.display = showHome ? 'none' : '';
    }

    function stButton(label, onclick){
      return `<button type="button" class="st-mini-btn" onclick="${onclick}">${stHtml(label)}</button>`;
    }

    

    function stSectionHtml(title, items, renderer){
      if(!items.length){
        return `<div class="st-result-section"><h3>${stHtml(title)}</h3><div class="st-empty-small">관련 결과가 없습니다.</div></div>`;
      }
      return `<div class="st-result-section"><h3>${stHtml(title)}</h3><div class="st-result-list">${items.slice(0,ST_RESULT_LIMIT).map(renderer).join('')}</div>${items.length > ST_RESULT_LIMIT ? `<div class="st-empty-small">외 ${items.length - ST_RESULT_LIMIT}건은 검색어를 더 구체화하면 확인하기 쉽습니다.</div>` : ''}</div>`;
    }

    

    function stClearSearchView(){
      archiveCommittedSearch='';
      const homeInput=document.getElementById('archiveHomeSearch');if(homeInput)homeInput.value='';
      if(searchInput) searchInput.value = '';
      const mobileInput=document.getElementById('mobileSearchInput');
      if(mobileInput) mobileInput.value = '';
      applyFilters();
      document.getElementById('searchSection')?.scrollIntoView({behavior:'smooth', block:'start'});
    }

    function stSetQuery(value){
      archiveCommittedSearch=String(value||'').trim();
      const homeInput=document.getElementById('archiveHomeSearch');if(homeInput)homeInput.value=value;
      if(searchInput) searchInput.value = value;
      const mobileInput=document.getElementById('mobileSearchInput');
      if(mobileInput) mobileInput.value = value;
      applyFilters();
      document.getElementById(ST_SEARCH_VIEW_ID)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
    window.stClearSearchView = stClearSearchView;
    window.stSetQuery = stSetQuery;



    /* Approved feature implementation v3 */
    function normalizeSeasonLabel(value, year){
      const raw=String(value||'').trim();
      if(!raw) return '';
      let m=raw.match(/^(\d{4})\s*[-~–—/]\s*(\d{2}|\d{4})$/);
      if(m){
        const start=m[1];
        const end=m[2].length===4 ? m[2].slice(2) : m[2];
        return `${start}-${end}`;
      }
      m=raw.match(/^(\d{4})\s*(?:season|시즌)$/i);
      if(m) return m[1];
      return raw.replace(/(\d{4})\s*[-~–—/]\s*(\d{4})/g,(_,a,b)=>`${a}-${String(b).slice(2)}`);
    }

    function normalizeMedalRow(row){
      const original=String(row.skater_name||'').trim();
      const season=normalizeSeasonLabel(row.season||'', row.year||'');
      const normalized={competition_type:String(row.competition_type||'').trim(),season,competition_name:String(row.competition_name||'').trim(),city:String(row.city||'').trim(),year:String(row.year||'').trim(),gender:String(row.gender||'').trim(),event:String(row.event||'').trim(),medal:String(row.medal||'').trim(),athlete_id:row.athlete_id||archiveAthleteId(original),skater_name:canonicalSkaterName(original),original_skater_name:row.original_skater_name||original,name_at_event:String(row.name_at_event||'').trim(),country:archiveCountryCode(row.country),original_country:String(row.country||'').trim(),country_at_event:archiveCountryCode(row.country_at_event),source_url:String(row.source_url||'').trim(),time:String(row.time||'').trim(),note:String(row.note||'').trim()};
      return applyRepresentativeCountry(normalized, normalized.skater_name);
    }
    function normalizeRelayRow(row){
      const original=String(row.skater_name||'').trim();
      const season=normalizeSeasonLabel(row.season||'', row.year||'');
      const normalized={competition_type:String(row.competition_type||'').trim(),season,competition_name:String(row.competition_name||'').trim(),city:String(row.city||'').trim(),year:String(row.year||'').trim(),gender:String(row.gender||'').trim(),event:String(row.event||'').trim(),medal:String(row.medal||'').trim(),country:archiveCountryCode(row.country),original_country:String(row.country||'').trim(),country_at_event:archiveCountryCode(row.country_at_event),team_name:String(row.team_name||'').trim(),athlete_id:row.athlete_id||archiveAthleteId(original),skater_name:canonicalSkaterName(original),original_skater_name:row.original_skater_name||original,name_at_event:String(row.name_at_event||'').trim(),source_url:String(row.source_url||'').trim(),time:String(row.time||'').trim(),note:String(row.note||'').trim()};
      return applyRepresentativeCountry(normalized, normalized.skater_name);
    }
    function normalizeBestTimeRow(row){
      const original=String(row.skater_name||row.name||'').trim();
      const event=normalizeBestTimeEvent(row.event||row.distance||row.discipline||'');
      const season=normalizeSeasonLabel(row.season||'', row.year||'');
      return {athlete_id:row.athlete_id||archiveAthleteId(original),skater_name:canonicalSkaterName(original),original_skater_name:row.original_skater_name||original,name_at_event:String(row.name_at_event||'').trim(),country:archiveCountryCode(row.country),original_country:String(row.country||'').trim(),country_at_event:archiveCountryCode(row.country_at_event),gender:String(row.gender||'').trim(),event,best_time:String(row.best_time||row.final_time||row.time||row.record||row.lap_time||row.cumulative_time||'').trim(),competition_type:String(row.competition_type||'').trim(),season,competition_name:String(row.competition_name||row.compitition||row.competition||'').trim(),city:String(row.city||'').trim(),year:String(row.year||'').trim(),round:String(row.round||'').trim(),source_url:String(row.source_url||'').trim(),note:String(row.note||'').trim()};
    }

    function unique(data,key){
      return [...new Set(data.map(item=>normalizeSeasonLabel(item[key], item.year)).filter(Boolean))]
        .sort((a,b)=>seasonSortValue(b,b)-seasonSortValue(a,a)||String(b).localeCompare(String(a),'ko'));
    }

    function setStandaloneBestTimeBlockVisible(show){
      const wrap=document.getElementById('playerBestTimeTable');
      if(!wrap) return;
      wrap.style.display=show?'':'none';
      let node=wrap.previousElementSibling;
      let hidden=0;
      while(node && hidden<2){
        if(node.classList?.contains('section-title') || node.classList?.contains('spacer')){
          node.style.display=show?'':'none';
          hidden++;
        }
        node=node.previousElementSibling;
      }
    }

    function individualRowsForPlayer(name){return skaterMedals.filter(row=>row.skater_name===name && row.medal_type==='Individual' && !isWorldChampionshipSuperFinalRow(row));}
    function relayRowsForPlayer(name){return skaterMedals.filter(row=>row.skater_name===name && row.medal_type==='Relay');}
    function medalBucketInline(rows){const b=countMedalBucket(rows);return currentLang === 'en' ? `G ${b.gold} \u00b7 S ${b.silver} \u00b7 B ${b.bronze} \u00b7 Total ${medalTotal(b)}` : `\uAE08 ${b.gold} \u00b7 \uC740 ${b.silver} \u00b7 \uB3D9 ${b.bronze} \u00b7 \uCD1D ${medalTotal(b)}`;}
    function mainEventForPlayer(rows){
      const map=new Map();
      rows.forEach(row=>{
        if(isWorldChampionshipSuperFinalRow(row)) return;
        const event=normalizeBestTimeEvent(row.event);
        if(!['500m','1000m','1500m'].includes(event)) return;
        map.set(event,(map.get(event)||0)+1);
      });
      if(!map.size) return '-';
      const [event,count]=[...map.entries()].sort((a,b)=>b[1]-a[1]||personalBestEventOrder(a[0])-personalBestEventOrder(b[0]))[0];
      return currentLang === 'en' ? `${event} (${count})` : `${event} (${count}개)`;
    }
    function activeSeasonsForPlayer(rows, laps){
      const seasons=[...new Set([...rows,...laps].map(row=>normalizeSeasonLabel(row.season,row.year)||row.year).filter(Boolean))]
        .sort((a,b)=>seasonSortValue(b,b)-seasonSortValue(a,a));
      if(!seasons.length) return '-';
      if(seasons.length===1) return seasons[0];
      return `${seasons[seasons.length-1]} ~ ${seasons[0]}`;
    }
    function bestTimeMapForPlayer(name){
      return personalBestMapForPlayer(name);
    }

    function refreshActivePlayerPersonalBests(){
      const panel=document.getElementById('playerPanel');
      const name=document.getElementById('playerName')?.textContent?.trim() || '';
      if(!panel?.classList.contains('active') || !name) return;
      renderPlayerOverview(name);
      renderPlayerBestTimeTable(name);
    }
    window.refreshActivePlayerPersonalBests=refreshActivePlayerPersonalBests;

    function openPlayerPanel(name){
      const rows=skaterMedals.filter(row=>row.skater_name===name);
      const keys=buildSkaterNameKeySet(name);
      const lapRows=bestTimes.filter(row=>sameSkaterByAlias(row.skater_name||row.original_skater_name, keys));
      const pbRows=(eventRecordsCache||[]).filter(row=>sameSkaterByAlias(row.skater_name||row.original_skater_name, keys));
      if(!rows.length&&!lapRows.length&&!pbRows.length)return;
      const sample=rows[0]||lapRows[0]||pbRows[0]||{};
      const individual=rows.filter(archiveIsDistanceMedal);
      const relay=rows.filter(r=>r.medal_type==='Relay');
      const superFinal=rows.filter(r=>r.medal_type==='SuperFinal' || isWorldChampionshipSuperFinalRow(r));
      const currentCountry=currentRepresentativeCountry(name, rows.concat(lapRows,pbRows));
      const panel=document.getElementById('playerPanel');
      panel.dataset.playerName=name;
      document.getElementById('playerName').textContent=name;
      renderPlayerAchievementBadges(name);
      document.getElementById('playerInfo').textContent=currentLang === 'en'
        ? [currentCountry||sample.country||'', genderKorean(sample.gender)||'-', `distance-event medals ${individual.length}`, `relay ${relay.length}`, `3000m S.F. ${superFinal.length}`, `recorded seasons ${activeSeasonsForPlayer(rows,lapRows.concat(pbRows))}`].filter(Boolean).join(' \u00b7 ')
        : `${currentCountry||sample.country||''} \u00b7 ${genderKorean(sample.gender)||'-'} \u00b7 거리별 개인전 메달 ${individual.length}\uAC1C \u00b7 \uACC4\uC8FC ${relay.length}\uAC1C \u00b7 3000m S.F. ${superFinal.length}\uAC1C \u00b7 수록 기록 시즌 ${activeSeasonsForPlayer(rows,lapRows.concat(pbRows))}`;
      document.getElementById('playerTotal').textContent=individual.length;
      document.getElementById('playerGold').textContent=individual.filter(r=>r.medal==='Gold').length;
      document.getElementById('playerSilver').textContent=individual.filter(r=>r.medal==='Silver').length;
      document.getElementById('playerBronze').textContent=individual.filter(r=>r.medal==='Bronze').length;
      const labels=document.querySelectorAll('#playerPanel .summary-box .label');
      if(labels[0]) labels[0].textContent=stLang('거리별 개인전 메달','Distance-event medals');
      if(labels[1]) labels[1].textContent=stLang('개인전 금','Individual gold');
      if(labels[2]) labels[2].textContent=stLang('개인전 은','Individual silver');
      if(labels[3]) labels[3].textContent=stLang('개인전 동','Individual bronze');
      setStandaloneBestTimeBlockVisible(true);
      resetPlayerTimelineDetails(name);
      renderPlayerOverview(name);renderPlayerLapTable(name);
      panel.classList.add('active');if(!window.shorttrackRefreshingResults) panel.scrollIntoView({behavior:'smooth',block:'start'});
      if(!eventRecordsCache.length && typeof window.preloadEventRecordFilters === 'function'){
        window.preloadEventRecordFilters();
      }
    }

    function renderPlayerOverview(name){
      const wrap=document.getElementById('playerOverviewTable');
      if(!wrap) return;
      const rows=skaterMedals.filter(row=>row.skater_name===name);
      const keys=buildSkaterNameKeySet(name);
      const laps=bestTimes.filter(row=>sameSkaterByAlias(row.skater_name||row.original_skater_name, keys));
      const recordRows=(eventRecordsCache||[]).filter(row=>sameSkaterByAlias(row.skater_name||row.original_skater_name, keys));
      if(!rows.length&&!laps.length&&!recordRows.length){wrap.innerHTML=`<div class="empty">${tr('empty')}</div>`;return;}
      const individual=rows.filter(row=>row.medal_type==='Individual' && !isWorldChampionshipSuperFinalRow(row));
      const relay=rows.filter(row=>row.medal_type==='Relay');
      const superFinal=rows.filter(row=>row.medal_type==='SuperFinal' || isWorldChampionshipSuperFinalRow(row));
      const sample=rows[0]||laps[0]||recordRows[0]||{};
      const currentCountry=currentRepresentativeCountry(name, rows.concat(laps,recordRows));
      const bestMap=bestTimeMapForPlayer(name);

      const pbEvents=['500m','1000m','1500m'];
      const bestTimeRows=pbEvents.map(event=>{
        const row=bestMap.get(event);
        if(!row) return `<tr><td><strong>${personalBestDisplayEvent(event)}</strong></td><td colspan="5" class="muted">${archiveRecordStateText()}</td></tr>`;
        const source=archiveSourceLabel(row.source);
        const comp=[row.competition_name,row.round].filter(Boolean).join(' · ') || '-';
        return `<tr>
          <td><strong>${personalBestDisplayEvent(event)}</strong></td>
          <td><strong>${escapeHtml(row.time||row.best_time||'')}</strong></td>
          <td>${escapeHtml(comp)}</td>
          <td>${escapeHtml(row.competition_type||'-')}</td>
          <td>${escapeHtml(row.season||row.year||'-')}</td>
          <td>${archiveSourceHtml(row)}</td>
        </tr>`;
      }).join('');

      const groups=[
        {label:stLang('거리별 개인전','Distance events'), rows:individual.filter(row=>['500m','1000m','1500m'].includes(normalizeBestTimeEvent(row.event)))},
        {label:stLang('세계선수권 종합','Worlds overall'), rows:individual.filter(isWorldChampionshipOverallRow)},
        {label:stLang('기타 개인전','Other individual'), rows:individual.filter(row=>!['500m','1000m','1500m'].includes(normalizeBestTimeEvent(row.event)) && !isWorldChampionshipOverallRow(row))},
        {label:stLang('계주 메달','Relay medals'), rows:relay},
        {label:'3000m Super Final', rows:superFinal},
        {label:tr('olympic'), rows:individual.filter(row=>competitionBucket(row.competition_type)==='olympic')},
        {label:worldSummaryLabel(), rows:individual.filter(row=>competitionBucket(row.competition_type)==='worlds')},
        {label:tr('worldCupTour'), rows:individual.filter(row=>competitionBucket(row.competition_type)==='worldcup')}
      ];

      const distanceCards=['500m','1000m','1500m'].map(event=>{
        const eventRows=individual.filter(row=>normalizeBestTimeEvent(row.event)===event);
        const medalText=medalBucketInline(eventRows);
        const best=bestMap.get(event);
        return `<div class="distance-summary-card"><strong>${event}</strong><span>${escapeHtml(medalText)}</span><span>${stLang('수록 최고기록','Best recorded time')}: ${best?escapeHtml(best.time||best.best_time):archiveRecordStateText()}</span></div>`;
      }).join('');


      wrap.innerHTML=`
        ${archivePlayerScopeHtml(name,individual)}
        <div class="approved-profile-grid">
          <div class="approved-profile-box"><div class="label">${stLang('현재/최근 대표국','Current/recent representative country')}</div><div class="value">${escapeHtml(currentCountry||sample.country||'-')}</div></div>
          <div class="approved-profile-box"><div class="label">${tr('gender')}</div><div class="value">${escapeHtml(genderKorean(sample.gender)||'-')}</div></div>
          <div class="approved-profile-box"><div class="label">${stLang('최다 메달 종목','Most medaled distance')}</div><div class="value">${escapeHtml(mainEventForPlayer(individual))}</div></div>
          <div class="approved-profile-box"><div class="label">${stLang('수록 기록 시즌','Recorded seasons')}</div><div class="value">${escapeHtml(activeSeasonsForPlayer(rows,laps.concat(recordRows)))}</div></div>
        </div>
        ${countryHistorySummaryHtml(name)}
        <div class="approved-overview-split">
          <div>
            <div class="approved-overview-heading">${stLang('메달 요약','Medal summary')}</div>
            <div class="table-scroll"><table><thead><tr><th>${tr('category')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${groups.slice(0,5).map(group=>{const bucket=countMedalBucket(group.rows);return `<tr><td><strong>${escapeHtml(group.label)}</strong></td><td>${bucket.gold}</td><td>${bucket.silver}</td><td>${bucket.bronze}</td><td><strong>${medalTotal(bucket)}</strong></td></tr>`;}).join('')}</tbody></table></div>
            <div class="approved-overview-heading">${stLang('대회별 개인전 메달','Individual medals by competition')}</div>
            <div class="table-scroll"><table><thead><tr><th>${tr('competition')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${groups.slice(5).map(group=>{const b=countMedalBucket(group.rows);return `<tr><td>${escapeHtml(group.label)}</td><td>${b.gold}</td><td>${b.silver}</td><td>${b.bronze}</td><td>${medalTotal(b)}</td></tr>`;}).join('')}</tbody></table></div>
          </div>
          <div>
            <div class="approved-overview-heading">${stLang('거리별 성적 요약','Distance summary')}</div>
            <div class="distance-summary-grid">${distanceCards}</div>
          </div>
          <div>
            <div class="approved-overview-heading">${stLang('수록 경기 중 최고기록','Best recorded times')}</div>
            <div class="table-scroll"><table><thead><tr><th>${tr('event')}</th><th>${stLang('수록 최고기록','Best recorded time')}</th><th>${stLang('대회/라운드','Competition/round')}</th><th>${stLang('구분','Type')}</th><th>${stLang('시즌/연도','Season/year')}</th><th>${stLang('출처','Source')}</th></tr></thead><tbody>${bestTimeRows}</tbody></table></div>
          </div>
        </div>`;
    }

    function renderPlayerLapTable(name){
      setStandaloneBestTimeBlockVisible(true);
      renderPlayerBestTimeTable(name);
    }

    function renderTimelineBadges(row){
      if(!isRelayEvent(row.event)) return '';
      return `<span class="simple-badges"><span class="simple-badge">${tr('relay')}</span><span class="simple-badge warn">${stLang('확인 필요','Needs review')}</span></span>`;
    }

    function renderPlayerTimeline(name){
      const wrap=document.getElementById('playerTimeline');
      if(!wrap) return;
      const rows=skaterMedals.filter(row=>row.skater_name===name).slice().sort((a,b)=>seasonSortValue(b.season,b.year)-seasonSortValue(a.season,a.year)||Number(b.year||0)-Number(a.year||0)||competitionOrderForPlayerDetail(a)-competitionOrderForPlayerDetail(b)||playerDetailEventOrder(a)-playerDetailEventOrder(b)||medalOrderForPlayerDetail(a.medal)-medalOrderForPlayerDetail(b.medal));
      if(!rows.length){wrap.innerHTML=`<div class="empty">${tr('empty')}</div>`;return;}
      const bySeason=new Map();
      rows.forEach(row=>{
        const season=normalizeSeasonLabel(row.season,row.year) || row.year || '';
        if(!bySeason.has(season)) bySeason.set(season,[]);
        bySeason.get(season).push(row);
      });
      const sortedSeasons=[...bySeason.entries()].sort((a,b)=>seasonSortValue(b[0],b[0])-seasonSortValue(a[0],a[0]));
      wrap.innerHTML=`<div class="timeline">${sortedSeasons.map(([season,list])=>`<div class="timeline-year"><h4>${escapeHtml(season)}</h4><div class="timeline-list">${list.map(row=>`<div class="timeline-item"><strong>${escapeHtml(row.competition_name||row.year)}</strong> · ${escapeHtml(row.event)} · <span class="medal-pill ${String(row.medal||'').toLowerCase()}">${medalKorean(row.medal)}</span> <small>${escapeHtml(row.competition_type||'')}</small>${renderTimelineBadges(row)}</div>`).join('')}</div></div>`).join('')}</div>`;
    }

    function competitionTypeBadge(rowOrType){
      const type=String(typeof rowOrType==='string'?rowOrType:rowOrType?.competition_type||'').toLowerCase();
      if(type.includes('olympic')) return {label:stLang('올림픽','Olympics'), cls:'olympic'};
      if(type.includes('world championship')) return {label:stLang('세계선수권','World Championships'), cls:'worlds'};
      if(type.includes('world cup')) return {label:stLang('월드컵','World Cup'), cls:'worldcup'};
      if(type.includes('world tour')) return {label:stLang('월드투어','World Tour'), cls:'worldtour'};
      return null;
    }
    function competitionTypeBadgeHtml(rowOrType){
      const badge=competitionTypeBadge(rowOrType);
      return badge?`<span class="competition-type-badge ${badge.cls}">${badge.label}</span>`:'';
    }

    function openCompetitionPanel(name){
      document.getElementById('competitionPanel').dataset.liveName=name;
      const rows=medals.filter(row=>row.competition_name===name);
      const laps=bestTimes.filter(row=>row.competition_name===name);
      if(!rows.length&&!laps.length)return;
      const first=rows[0]||laps[0];
      const countries=new Set(rows.map(r=>r.country).filter(Boolean));
      const events=new Set(rows.map(r=>r.event).filter(Boolean));
      document.getElementById('competitionName').innerHTML=`${competitionTypeBadgeHtml(first)}${escapeHtml(name)}`;
      document.getElementById('competitionInfo').innerHTML=`${escapeHtml(first.city||'-')} · ${escapeHtml(normalizeSeasonLabel(first.season,first.year)||first.year||'-')} · ${stLang('종목','Events')} ${events.size} · ${tr('country')} ${countries.size}`;
      document.getElementById('competitionTotal').textContent=rows.length;
      document.getElementById('competitionGold').textContent=rows.filter(r=>r.medal==='Gold').length;
      document.getElementById('competitionSilver').textContent=rows.filter(r=>r.medal==='Silver').length;
      document.getElementById('competitionBronze').textContent=rows.filter(r=>r.medal==='Bronze').length;
      renderCompetitionTable(name);renderCompetitionLapSummary(name);
      const panel=document.getElementById('competitionPanel');panel.classList.add('active');if(!window.shorttrackRefreshingResults) panel.scrollIntoView({behavior:'smooth',block:'start'});
    }

    function renderCompetitionTable(name){
      const wrap=document.getElementById('competitionTable');
      const rows=medals.filter(row=>row.competition_name===name).sort((a,b)=>genderOrder(a.gender)-genderOrder(b.gender)||eventOrder(a.event)-eventOrder(b.event)||medalOrder(a.medal)-medalOrder(b.medal));
      if(!rows.length){wrap.innerHTML=`<div class="empty">${stLang('입력된 대회 메달표가 없습니다.','No competition medal table has been entered.')}</div>`;return;}
      const first=rows[0]||{};
      const eventCount=new Set(rows.map(r=>r.event).filter(Boolean)).size;
      const countryCount=new Set(rows.map(r=>r.country).filter(Boolean)).size;
      const playerCount=new Set(rows.map(r=>r.skater_name).filter(Boolean)).size;
      const countryRows=[...rows.reduce((map,row)=>{const key=row.country||'-'; if(!map.has(key)) map.set(key,{country:key,gold:0,silver:0,bronze:0,total:0}); const item=map.get(key); addMedalCount(item,row.medal); item.total++; return map;},new Map()).values()].sort(rankSort).slice(0,8);
      const countryTable=countryRows.length?`<div class="spacer"></div><div class="approved-overview-heading">${stLang('국가별 메달 집계','Medal table by country')}</div><div class="table-scroll"><table><thead><tr><th>${tr('country')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${countryRows.map(row=>`<tr><td><strong>${escapeHtml(row.country)}</strong></td><td>${row.gold}</td><td>${row.silver}</td><td>${row.bronze}</td><td><strong>${row.total}</strong></td></tr>`).join('')}</tbody></table></div>`:'';
      wrap.innerHTML=`
        <div class="competition-detail-grid">
          <div class="competition-detail-box"><div class="label">${stLang('대회 유형','Competition type')}</div><div class="value">${competitionTypeBadgeHtml(first)}${escapeHtml(first.competition_type||'-')}</div></div>
          <div class="competition-detail-box"><div class="label">${tr('season')}</div><div class="value">${escapeHtml(normalizeSeasonLabel(first.season,first.year)||first.year||'-')}</div></div>
          <div class="competition-detail-box"><div class="label">${stLang('개최지','Host city')}</div><div class="value">${escapeHtml(first.city||'-')}</div></div>
          <div class="competition-detail-box"><div class="label">${stLang('기록 규모','Record scope')}</div><div class="value">${stLang('종목','Events')} ${eventCount} · ${stLang('선수/팀','Athletes/teams')} ${playerCount} · ${tr('country')} ${countryCount}</div></div>
        </div>
        <div class="approved-overview-heading">${stLang('종목별 포디움','Podiums by event')}</div>
        <div class="table-scroll"><table><thead><tr><th>${tr('gender')}</th><th>${stLang('종목','Event')}</th><th>${stLang('메달','Medal')}</th><th>${stLang('선수/팀','Athlete/team')}</th><th>${tr('country')}</th><th>${stLang('기록','Time')}</th><th>${stLang('비고','Note')}</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${genderKorean(row.gender)}</td><td>${escapeHtml(row.event)}</td><td><span class="medal ${escapeHtml(row.medal)}">${medalKorean(row.medal)}</span></td><td>${isRelayEvent(row.event)?escapeHtml(row.skater_name):`<span class="link" onclick="openPlayerPanel('${escapeJs(row.skater_name)}')">${escapeHtml(row.skater_name)}</span>`}</td><td>${escapeHtml(row.country)}</td><td>${escapeHtml(row.time)}</td><td>${escapeHtml(row.note)}</td></tr>`).join('')}</tbody></table></div>
        ${countryTable}`;
    }

    function setupSearchAutocomplete(){
      if(window.__stAutocompleteReady) return;
      const input=document.getElementById('searchInput');
      if(!input) return;
      let list=document.getElementById('stSearchSuggestions');
      if(!list){list=document.createElement('datalist');list.id='stSearchSuggestions';document.body.appendChild(list);}
      input.setAttribute('list','stSearchSuggestions');
      input.addEventListener('focus',()=>refreshSearchAutocomplete(),{once:true});
      document.getElementById('mobileSearchInput')?.addEventListener('focus',()=>refreshSearchAutocomplete(),{once:true});
      window.__stAutocompleteReady=true;
    }
    function refreshSearchAutocomplete(){
      setupSearchAutocomplete();
      if(window.__stAutocompletePopulated) return;
      const list=document.getElementById('stSearchSuggestions');
      if(!list) return;
      const rows = stAllSearchRows();
      if(!rows.length) return;
      const values=new Set();
      rows.forEach(row=>{
        [row.skater_name,row.original_skater_name,row.country,row.competition_name,row.event,row.season].forEach(v=>{v=stText(v); if(v) values.add(v);});
      });
      list.innerHTML=[...values].sort((a,b)=>a.localeCompare(b,'ko')).slice(0,600).map(v=>`<option value="${escapeAttr(v)}"></option>`).join('');
      window.__stAutocompletePopulated=true;
    }

    function stKoreanInitials(value){
      const CHO=['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
      return String(value||'').split('').map(ch=>{
        const code=ch.charCodeAt(0)-44032;
        if(code>=0 && code<=11171) return CHO[Math.floor(code/588)];
        return ch;
      }).join('');
    }
    function stDistanceSearchKey(value){
      const raw = String(value || '').toLowerCase().replace(/\s+/g,' ');
      if(/\b500\s*m\b|500m|500미터/.test(raw) && !/\b1500\s*m\b|1500m/.test(raw)) return '500m';
      if(/\b1000\s*m\b|1000m|1000미터/.test(raw)) return '1000m';
      if(/\b1500\s*m\b|1500m|1500미터/.test(raw)) return '1500m';
      if(/mixed.*relay|혼성.*계주/.test(raw)) return 'mixedrelay';
      if(/women.*relay|여자.*계주|3000\s*m.*relay|3000m.*relay/.test(raw)) return 'womenrelay';
      if(/men.*relay|남자.*계주|5000\s*m.*relay|5000m.*relay/.test(raw)) return 'menrelay';
      return '';
    }
    function stNormalizeForSearch(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC').toLowerCase().replace(/[\s._\-–—/()\[\],·]+/g,'');}
    function stSearchCandidatesForRow(row){
      const values=[row.competition_type,row.season,row.competition_name,row.city,row.year,row.gender,row.event,row.medal,row.skater_name,row.original_skater_name,row.country,row.team_name,row.time,row.note,row.__source].filter(Boolean).map(String);
      values.push(...archiveAliasesForName(row.skater_name));
      const distanceValues = values.map(stDistanceSearchKey).filter(Boolean);
      return [...values, ...distanceValues, ...values.map(stKoreanInitials)];
    }
    function stEditDistance(a,b,limit=2){
      a=stNormalizeForSearch(a); b=stNormalizeForSearch(b);
      if(!a||!b) return 999;
      if(Math.abs(a.length-b.length)>limit) return limit+1;
      const dp=Array.from({length:a.length+1},(_,i)=>i);
      for(let j=1;j<=b.length;j++){
        let prev=dp[0]; dp[0]=j; let rowMin=dp[0];
        for(let i=1;i<=a.length;i++){
          const temp=dp[i];
          dp[i]=Math.min(dp[i]+1,dp[i-1]+1,prev+(a[i-1]===b[j-1]?0:1));
          prev=temp; rowMin=Math.min(rowMin,dp[i]);
        }
        if(rowMin>limit) return limit+1;
      }
      return dp[a.length];
    }
    function stRowMatchesQuery(row, query){
      const raw=stText(query);
      if(!raw) return true;
      const q=stNormalizeForSearch(raw);
      const distanceQuery=stDistanceSearchKey(raw);
      const initials=stNormalizeForSearch(stKoreanInitials(raw));
      const candidates=stSearchCandidatesForRow(row);
      const normalizedCandidates=candidates.map(stNormalizeForSearch).filter(Boolean);
      if(distanceQuery && normalizedCandidates.includes(distanceQuery)) return true;
      if(normalizedCandidates.some(c=>c.includes(q) || q.includes(c))) return true;
      if(initials && normalizedCandidates.some(c=>c.includes(initials))) return true;
      const tokens=raw.split(/\s+/).filter(Boolean);
      if(tokens.length>1){
        return tokens.every(token=>stRowMatchesQuery(row, token));
      }
      if(q.length>=3){
        return normalizedCandidates.some(c=>{
          if(c.length<2) return false;
          const parts=c.split(/[^a-z0-9\uac00-\ud7a3\u3131-\u314e\u314f-\u3163]+/).filter(Boolean);
          const pool=parts.length?parts:[c];
          const loosePrefix=q.slice(0,Math.max(2,q.length-1));
          if(q.length>=5 && c.includes(loosePrefix)) return true;
          if(q.length<5 && pool.some(part=>part.startsWith(q))) return true;
          return pool.some(part=>stEditDistance(part,q,q.length>=6?2:1)<= (q.length>=6?2:1));
        });
      }
      return false;
    }
    function stRowTarget(row){return stSearchCandidatesForRow(row).map(stLower).join(' ')+' '+stSearchCandidatesForRow(row).map(stKoreanInitials).map(stLower).join(' ');}

    function stEntitySearchScore(query, values){
          const q=stNormalizeForSearch(query);
          if(!q) return 9999;
          const initials=stNormalizeForSearch(stKoreanInitials(query));
          let best=9999;
          (Array.isArray(values)?values:[values]).forEach(value=>{
            const raw=stText(value);
            if(!raw) return;
            const norm=stNormalizeForSearch(raw);
            const init=stNormalizeForSearch(stKoreanInitials(raw));
            const tokens=norm.split(/[^a-z0-9\uac00-\ud7a3\u3131-\u314e\u314f-\u3163]+/).filter(Boolean);
            const candidates=[norm,init,...tokens].filter(Boolean);
            candidates.forEach(c=>{
              let score=9999;
              if(c===q) score=0;
              else if(c.startsWith(q)) score=1;
              else if(c.includes(q)) score=2;
              else if(q.length>=3 && c.startsWith(q.slice(0,q.length-1))) score=4;
              else if(q.length>=4) score=8+stEditDistance(c,q,q.length>=6?2:1);
              best=Math.min(best,score);
            });
            if(initials && init.includes(initials)) best=Math.min(best,3);
          });
          return best;
        }
        function stSortBySearchRelevance(query, getter, fallback){
          return (a,b)=>{
            const sa=stEntitySearchScore(query,getter(a));
            const sb=stEntitySearchScore(query,getter(b));
            if(sa!==sb) return sa-sb;
            return fallback ? fallback(a,b) : 0;
          };
        }

    function rowMatchesSearchAndMedal(row,q){
      const raw=archiveCommittedSearch || q || '';
      if(raw && !stRowMatchesQuery(row, raw)) return false;
      if(currentMedalFilter && row.medal!==currentMedalFilter) return false;
      const individualOnly=document.getElementById('searchIndividualOnly')?.checked;
      const relayOnly=document.getElementById('searchRelayOnly')?.checked;
      const goldOnly=document.getElementById('searchGoldOnly')?.checked;
      const excludeWorldsOverall=document.getElementById('searchExcludeWorldsOverall')?.checked;
      const exclude3000=document.getElementById('searchExclude3000')?.checked;
      if(individualOnly && isRelayEvent(row.event)) return false;
      if(relayOnly && !isRelayEvent(row.event)) return false;
      if(goldOnly && row.medal!=='Gold') return false;
      if(excludeWorldsOverall && isWorldChampionshipOverallRow(row)) return false;
      if(exclude3000 && isIndividual3000mEvent(row.event)) return false;
      return true;
    }
    function rowMatchesEventRankingBaseFilters(row,q){
      const raw=archiveCommittedSearch || q || '';
      return (!raw||stRowMatchesQuery(row,raw)) && (!eventSeason||row.season===eventSeason) && rowInEra(row,eventEraStart,eventEraEnd) && (!currentMedalFilter||row.medal===currentMedalFilter);
    }

    function stAllSuggestionValues(){
      const values=new Set();
      stAllSearchRows().forEach(row=>[row.skater_name,row.original_skater_name,row.country,row.competition_name,row.event,row.season].forEach(v=>{v=stText(v); if(v) values.add(v);}));
      return [...values];
    }
    function stGetQuerySuggestions(query, limit=8){
      const q=stNormalizeForSearch(query);
      if(!q) return [];
      return stAllSuggestionValues().map(value=>{
        const norm=stNormalizeForSearch(value);
        const init=stNormalizeForSearch(stKoreanInitials(value));
        let score=999;
        if(norm.includes(q)) score=0;
        else if(init.includes(q)) score=1;
        else score=stEditDistance(norm,q,q.length>=6?3:2)+2;
        return {value,score};
      }).filter(item=>item.score<=5).sort((a,b)=>a.score-b.score||a.value.length-b.value.length||a.value.localeCompare(b.value,'ko')).slice(0,limit).map(item=>item.value);
    }

    function stBuildSearchData(query){
      const pool=stAllSearchRows();
      const matched=pool.filter(row=>stRowMatchesQuery(row,query));
      const players=stUniqueBy(matched.filter(row=>stText(row.skater_name)), row=>stLower(row.skater_name)).map(row=>{const name=stText(row.skater_name); const related=pool.filter(item=>stText(item.skater_name)===name||stText(item.original_skater_name)===name); const country=stText(row.country)||stText(related.find(item=>stText(item.country))?.country); const gender=stText(row.gender)||stText(related.find(item=>stText(item.gender))?.gender); return {name,country,gender,count:related.length,summary:stMedalSummary(related)};}).sort(stSortBySearchRelevance(query, item=>[item.name], (a,b)=>b.count-a.count||a.name.localeCompare(b.name,'ko')));
      const countries=stUniqueBy(matched.filter(row=>stText(row.country)), row=>stLower(row.country)).map(row=>{const country=stText(row.country); const related=pool.filter(item=>stText(item.country)===country); const playerCount=stUniqueBy(related.filter(item=>stText(item.skater_name)), item=>stLower(item.skater_name)).length; const competitionCount=stUniqueBy(related.filter(item=>stText(item.competition_name)), item=>stLower(item.competition_name)).length; return {country,playerCount,competitionCount,count:related.length,summary:stMedalSummary(related)};}).sort(stSortBySearchRelevance(query, item=>[item.country], (a,b)=>b.count-a.count||a.country.localeCompare(b.country,'ko')));
      const competitions=stUniqueBy(matched.filter(row=>stText(row.competition_name)), row=>[stLower(row.competition_name),stLower(row.season),stLower(row.year)].join('|')).map(row=>{const name=stText(row.competition_name); const season=normalizeSeasonLabel(row.season,row.year); const year=stText(row.year); const related=pool.filter(item=>stText(item.competition_name)===name&&(!season||normalizeSeasonLabel(item.season,item.year)===season)); return {name,season,year,type:stText(row.competition_type),city:stText(row.city),count:related.length,summary:stMedalSummary(related)};}).sort(stSortBySearchRelevance(query, item=>[item.name,item.season,item.city,item.type], (a,b)=>seasonSortValue(b.season,b.year)-seasonSortValue(a.season,a.year)||b.count-a.count||a.name.localeCompare(b.name,'ko')));
      const events=stUniqueBy(matched.filter(row=>stText(row.event)), row=>stLower(row.event)).map(row=>{const event=stText(row.event); const related=pool.filter(item=>stText(item.event)===event); const playerCount=stUniqueBy(related.filter(item=>stText(item.skater_name)), item=>stLower(item.skater_name)).length; return {event,gender:stText(row.gender),playerCount,count:related.length,summary:stMedalSummary(related)};}).sort(stSortBySearchRelevance(query, item=>[item.event], (a,b)=>b.count-a.count||a.event.localeCompare(b.event,'ko')));
      const seasons=stUniqueBy(matched.filter(row=>stText(row.season)), row=>stLower(row.season)).map(row=>{const season=normalizeSeasonLabel(row.season,row.year); const related=pool.filter(item=>normalizeSeasonLabel(item.season,item.year)===season); const competitionCount=stUniqueBy(related.filter(item=>stText(item.competition_name)), item=>stLower(item.competition_name)).length; return {season,competitionCount,count:related.length,summary:stMedalSummary(related)};}).sort(stSortBySearchRelevance(query, item=>[item.season], (a,b)=>seasonSortValue(b.season,b.season)-seasonSortValue(a.season,a.season)));
      const recentRows=matched.slice().sort((a,b)=>seasonSortValue(b.season,b.year)-seasonSortValue(a.season,a.year)||Number(b.year||0)-Number(a.year||0)).slice(0,8);
      return {query,type:stDetectSearchType(query,pool),total:matched.length,players,countries,competitions,events,seasons,recentRows,suggestions:stGetQuerySuggestions(query)};
    }

    function stCompetitionCard(item){
      return `<div class="st-result-card-rich"><div class="st-result-item-top"><div><div class="st-result-name">${competitionTypeBadgeHtml(item.type)}${stHtml(item.name)}</div><div class="st-result-meta">${stHtml(item.season||'-')} · ${stHtml(item.city||'-')} · 기록 ${item.count}건<br>${stHtml(item.summary||'')}</div></div>${stButton('상세', `openCompetitionPanel('${stJs(item.name)}')`)}</div></div>`;
    }

    function stFeaturedHtml(data){
      const type=data.type.key; let item=null;
      if(type==='country') item=data.countries[0]; else if(type==='competition') item=data.competitions[0]; else if(type==='event') item=data.events[0]; else if(type==='season') item=data.seasons[0]; else item=data.players[0];
      if(!item){
        const suggestions=(data.suggestions||[]).map(v=>`<button type="button" class="suggest-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('');
        return `<div class="st-search-featured"><div class="st-featured-kicker">검색 결과 없음</div><div class="st-featured-title">다른 표현으로 검색해 보세요</div><div class="st-featured-meta">예: Kim Gil-li, KOR, World Tour, 2025-26, 1500m</div>${suggestions?`<div class="suggestion-row">${suggestions}</div>`:''}</div>`;
      }
      if(type==='country') return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 국가</div><div class="st-featured-title">${stHtml(item.country)}</div><div class="st-featured-meta">선수 ${item.playerCount}명 · 대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div>${stButton('국가 관련 기록 보기', `stSetQuery('${stJs(item.country)}')`)}</div>`;
      if(type==='competition') return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 대회</div><div class="st-featured-title">${competitionTypeBadgeHtml(item.type)}${stHtml(item.name)}</div><div class="st-featured-meta">${stHtml(item.season||'-')} · ${stHtml(item.city||'-')} · 관련 기록 ${item.count}건<br>${stHtml(item.summary||'')}</div>${stButton('대회 상세 보기', `openCompetitionPanel('${stJs(item.name)}')`)}</div>`;
      if(type==='event') return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 종목</div><div class="st-featured-title">${stHtml(item.event)}</div><div class="st-featured-meta">관련 선수 ${item.playerCount}명 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div>${stButton('이 종목 다시 검색', `stSetQuery('${stJs(item.event)}')`)}</div>`;
      if(type==='season') return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 시즌</div><div class="st-featured-title">${stHtml(item.season)}</div><div class="st-featured-meta">관련 대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div>${stButton('이 시즌 다시 검색', `stSetQuery('${stJs(item.season)}')`)}</div>`;
      return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 선수</div><div class="st-featured-title">${stHtml(item.name)}</div><div class="st-featured-meta">${stHtml(item.country||'-')} · ${stHtml(stGenderLabel(item.gender))} · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div>${stButton('선수 상세 보기', `openPlayerPanel('${stJs(item.name)}')`)}</div>`;
    }

    function stRenderRecentSearches(){
      const section=document.getElementById('searchSection');
      if(!section) return;
      let panel=document.getElementById('stRecentSearchesWrap');
      if(!panel){panel=document.createElement('div');panel.id='stRecentSearchesWrap';panel.className='search-extra-panel';section.appendChild(panel);}
      const items=JSON.parse(localStorage.getItem('shorttrack_recent_searches')||'[]').slice(0,8);
      panel.innerHTML=items.length?`<div class="recent-searches"><span class="recent-searches-title">최근 검색어</span>${items.map(v=>`<button type="button" class="recent-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('')}<button type="button" class="recent-chip" onclick="stClearRecentSearches()">지우기</button></div>`:'';
    }
    function stSaveRecentSearch(query){
      query=stText(query); if(!query) return;
      const key='shorttrack_recent_searches';
      const items=JSON.parse(localStorage.getItem(key)||'[]').filter(v=>stLower(v)!==stLower(query));
      items.unshift(query); localStorage.setItem(key,JSON.stringify(items.slice(0,8))); stRenderRecentSearches();
    }
    function stClearRecentSearches(){localStorage.removeItem('shorttrack_recent_searches');stRenderRecentSearches();}
    window.stClearRecentSearches=stClearRecentSearches;

    function renderSearchResultView(){
      const view=stEnsureSearchView();
      const query=stText(archiveCommittedSearch);
      if(!query){stSetSearchHomeVisible(true);view.innerHTML='';stRenderRecentSearches();return;}
      const data=stBuildSearchData(query);
      stSetSearchHomeVisible(false);
      const playersSection=stSectionHtml('선수 결과',data.players,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.name)}</div><div class="st-result-meta">${stHtml(item.country||'-')} · ${stHtml(stGenderLabel(item.gender))} · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('상세', `openPlayerPanel('${stJs(item.name)}')`)}</div></div>`);
      const countriesSection=stSectionHtml('국가 결과',data.countries,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.country)}</div><div class="st-result-meta">선수 ${item.playerCount}명 · 대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('보기', `stSetQuery('${stJs(item.country)}')`)}</div></div>`);
      const competitionsSection=stSectionHtml('대회 결과',data.competitions,stCompetitionCard);
      const eventsSection=stSectionHtml('종목 결과',data.events,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.event)}</div><div class="st-result-meta">관련 선수 ${item.playerCount}명 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('검색', `stSetQuery('${stJs(item.event)}')`)}</div></div>`);
      const seasonsSection=stSectionHtml('시즌 결과',data.seasons,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.season)}</div><div class="st-result-meta">대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('검색', `stSetQuery('${stJs(item.season)}')`)}</div></div>`);
      const sections={skater:playersSection,country:countriesSection,competition:competitionsSection,event:eventsSection,season:seasonsSection};
      const orderMap={skater:['skater','competition','event','country','season'],country:['country','skater','competition','event','season'],competition:['competition','event','skater','country','season'],event:['event','skater','competition','country','season'],season:['season','competition','event','skater','country']};
      const ordered=(orderMap[data.type.key]||orderMap.skater).map(key=>sections[key]);
      const recentRowsHtml=data.recentRows.length?`<div class="st-result-section" style="grid-column:1/-1"><h3>관련 원자료 일부</h3><div class="table-scroll"><table class="st-result-table"><thead><tr><th>대회</th><th>시즌</th><th>종목</th><th>메달</th><th>선수/팀</th><th>국가</th><th>기록</th></tr></thead><tbody>${data.recentRows.map(row=>`<tr><td>${competitionTypeBadgeHtml(row.competition_type)}${stHtml(row.competition_name||'-')}</td><td>${stHtml(normalizeSeasonLabel(row.season,row.year)||'-')}</td><td>${stHtml(row.event||'-')}</td><td>${stHtml(stMedalLabel(row.medal))}</td><td>${stHtml(row.skater_name||row.team_name||'-')}</td><td>${stHtml(row.country||'-')}</td><td>${stHtml(row.time||'-')}</td></tr>`).join('')}</tbody></table></div></div>`:'';
      const suggestions=(data.suggestions||[]).map(v=>`<button type="button" class="suggest-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('');
      const emptyHelp=data.total?'':`<div class="notice"><strong>검색 결과가 없습니다.</strong><br>철자, 띄어쓰기, 영문 표기를 조금 바꿔 보세요. 예: Kim Gil-li, KOR, World Tour, 2025-26, 1500m${suggestions?`<div class="suggestion-row">${suggestions}</div>`:''}</div>`;
      view.innerHTML=`<div class="st-search-head"><div><h2>“${stHtml(query)}” 검색 결과</h2><p>검색어 유형에 맞춰 선수·국가·대회·종목·시즌 결과를 따로 정리합니다.</p><span class="st-search-type">${stHtml(data.type.label)}</span><div class="st-count-row"><span class="st-count-chip">전체 ${data.total}건</span><span class="st-count-chip">선수 ${data.players.length}</span><span class="st-count-chip">국가 ${data.countries.length}</span><span class="st-count-chip">대회 ${data.competitions.length}</span><span class="st-count-chip">종목 ${data.events.length}</span><span class="st-count-chip">시즌 ${data.seasons.length}</span></div></div><div class="st-search-actions"><button type="button" class="sort-btn" onclick="stClearSearchView()">검색 초기화</button></div></div>${emptyHelp}${stFeaturedHtml(data)}<div class="st-result-grid">${ordered.join('')}${recentRowsHtml}</div>`;
      window.clearTimeout(window.__stRecentSearchTimer);
      window.__stRecentSearchTimer=window.setTimeout(()=>stSaveRecentSearch(query),700);
    }

    function applyFilters(){
      setupSearchAutocomplete();
      stRenderRecentSearches();
      if(!window.shorttrackRefreshingResults) resetRankingVisibleCounts();
      const q=archiveCommittedSearch.toLowerCase();
      filteredMedals=medals.filter(row=>rowMatchesSearchAndMedal(row,q));
      renderSummary(filteredMedals);
      if(q) renderMedalTable(filteredMedals);
      else renderMedalTablePrompt();
      renderSkaterRanking(getFilteredSkaterMedals());
      renderCountryRanking(getFilteredCountryMedals());
      renderEventRanking(getFilteredEventRankingMedals());
      renderSearchResultView();
    }



    /* Approved feature implementation: rules modal, empty states, today/random, country page, season page */
    function openRulesModal(){document.getElementById('rulesModalBackdrop')?.classList.add('open');}
    function closeRulesModal(){document.getElementById('rulesModalBackdrop')?.classList.remove('open');}
    window.openRulesModal=openRulesModal; window.closeRulesModal=closeRulesModal;

    function stNonRelayMedalRows(){return medals.filter(row=>row.skater_name && !isRelayEvent(row.event));}
    function stMedalScoreValue(row){return row.medal==='Gold'?3:row.medal==='Silver'?2:row.medal==='Bronze'?1:0;}
    function stAvailableSkaters(){
      const map=new Map();
      [...stNonRelayMedalRows(), ...bestTimes.filter(row=>row.skater_name)].forEach(row=>{
        const name=stText(row.skater_name); if(!name) return;
        if(!map.has(name)) map.set(name,{name,country:stText(row.country),gender:stText(row.gender),rows:[]});
        const item=map.get(name); item.rows.push(row);
        if(!item.country && row.country) item.country=row.country;
        if(!item.gender && row.gender) item.gender=row.gender;
      });
      return [...map.values()].sort((a,b)=>a.name.localeCompare(b.name,'ko'));
    }
    function stDeterministicTodayIndex(size){
      if(!size) return -1;
      const now=new Date();
      const key=now.getFullYear()*10000+(now.getMonth()+1)*100+now.getDate();
      return key % size;
    }
    function stTodaySkater(){const list=stAvailableSkaters(); const idx=stDeterministicTodayIndex(list.length); return idx>=0?list[idx]:null;}
    function stHomeSkaterMeta(item){
      if(!item) return tr(window.shorttrackDataReady?'dataNone':'todaySkaterLoadingMeta');
      const indiv=skaterMedals.filter(row=>row.skater_name===item.name && row.medal_type==='Individual');
      const b=countMedalBucket(indiv);
      const seasons=activeSeasonsForPlayer(indiv,bestTimes.filter(row=>row.skater_name===item.name));
      return currentLang === 'en'
        ? `${item.country||'-'} · ${genderKorean(item.gender)||'-'} · individual G ${b.gold} · S ${b.silver} · B ${b.bronze} · recorded seasons ${seasons}`
        : `${item.country||'-'} · ${genderKorean(item.gender)||'-'} · 개인전 금 ${b.gold} · 은 ${b.silver} · 동 ${b.bronze} · 수록 기록 시즌 ${seasons}`;
    }
    function refreshTodaySkaterCard(){
      const item=stTodaySkater();
      const nameEl=document.getElementById('todaySkaterName');
      const metaEl=document.getElementById('todaySkaterMeta');
      if(nameEl) nameEl.textContent=item?item.name:tr(window.shorttrackDataReady?'dataNone':'todaySkaterLoading');
      if(metaEl) metaEl.textContent=stHomeSkaterMeta(item);
    }
    function openTodaySkater(){const item=stTodaySkater(); if(item) openPlayerPanel(item.name);}
    function pickRandomSkater(){const list=stAvailableSkaters(); if(!list.length){alert(stLang('선수 데이터가 아직 없습니다.','Athlete data is not available yet.'));return;} const item=list[Math.floor(Math.random()*list.length)]; openPlayerPanel(item.name);}
    window.openTodaySkater=openTodaySkater; window.pickRandomSkater=pickRandomSkater;

    function stMostFrequentCountry(){
      const map=new Map();
      medals.forEach(row=>{const c=stText(row.country); if(!c) return; map.set(c,(map.get(c)||0)+1);});
      return [...map.entries()].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'ko'))[0]?.[0]||'';
    }
    function stLatestSeason(){
      const seasons=[...new Set(medals.map(row=>normalizeSeasonLabel(row.season,row.year)).filter(Boolean))];
      return seasons.sort((a,b)=>seasonSortValue(b,b)-seasonSortValue(a,a))[0]||'';
    }
    function openPopularCountryPage(){const c=stMostFrequentCountry(); if(c) openCountryPage(c); else alert(stLang('국가 데이터가 아직 없습니다.','Country data is not available yet.'));}
    function openLatestSeasonPage(){const s=stLatestSeason(); if(s) openSeasonPage(s); else alert(stLang('시즌 데이터가 아직 없습니다.','Season data is not available yet.'));}
    window.openPopularCountryPage=openPopularCountryPage; window.openLatestSeasonPage=openLatestSeasonPage;

    function stCountryRows(country){return medals.filter(row=>stText(row.country)===stText(country));}
    function stSeasonRows(season){return medals.filter(row=>normalizeSeasonLabel(row.season,row.year)===normalizeSeasonLabel(season,season));}
    function stDistinctCount(rows,keyFn){return new Set(rows.map(keyFn).map(stText).filter(Boolean)).size;}
    function stMedalSummaryTable(rows, label='합계'){
      const b=countMedalBucket(rows);
      return `<div class="st-page-grid"><div class="st-page-box"><div class="label">${escapeHtml(label)}</div><div class="value">${rows.length}</div></div><div class="st-page-box"><div class="label">${tr('gold')}</div><div class="value">${b.gold}</div></div><div class="st-page-box"><div class="label">${tr('silver')}</div><div class="value">${b.silver}</div></div><div class="st-page-box"><div class="label">${tr('bronze')}</div><div class="value">${b.bronze}</div></div></div>`;
    }
    function stTopPlayersHtml(rows, limit=12){
      const items=[...rows.reduce((map,row)=>{const name=stText(row.skater_name); if(!name||isRelayEvent(row.event)) return map; if(!map.has(name)) map.set(name,{name,country:row.country,gold:0,silver:0,bronze:0,total:0}); const item=map.get(name); addMedalCount(item,row.medal); item.total++; return map;},new Map()).values()].sort(rankSort).slice(0,limit);
      if(!items.length) return `<div class="st-empty-small">${stLang('표시할 개인전 선수가 없습니다.','No individual athletes to display.')}</div>`;
      return `<div class="table-scroll"><table><thead><tr><th>${tr('skater')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${items.map(item=>`<tr><td><span class="link" onclick="openPlayerPanel('${escapeJs(item.name)}')">${escapeHtml(item.name)}</span></td><td>${item.gold}</td><td>${item.silver}</td><td>${item.bronze}</td><td><strong>${item.total}</strong></td></tr>`).join('')}</tbody></table></div>`;
    }
    function stTopCompetitionsHtml(rows, limit=10){
      const items=[...rows.reduce((map,row)=>{const key=[row.competition_name,normalizeSeasonLabel(row.season,row.year),row.year].join('|'); if(!map.has(key)) map.set(key,{name:row.competition_name,season:normalizeSeasonLabel(row.season,row.year),city:row.city,type:row.competition_type,count:0}); const item=map.get(key); item.count++; return map;},new Map()).values()].sort((a,b)=>seasonSortValue(b.season,b.year)-seasonSortValue(a.season,a.year)||b.count-a.count).slice(0,limit);
      if(!items.length) return `<div class="st-empty-small">${stLang('표시할 대회가 없습니다.','No competitions to display.')}</div>`;
      return `<div class="table-scroll"><table><thead><tr><th>${stLang('대회','Competition')}</th><th>${tr('season')}</th><th>${stLang('개최지','Host city')}</th><th>${stLang('기록','Records')}</th></tr></thead><tbody>${items.map(item=>`<tr><td>${competitionTypeBadgeHtml(item.type)}<span class="link" onclick="openCompetitionPanel('${escapeJs(item.name)}')">${escapeHtml(item.name)}</span></td><td>${escapeHtml(item.season||'-')}</td><td>${escapeHtml(item.city||'-')}</td><td>${item.count}${stLang('건','')}</td></tr>`).join('')}</tbody></table></div>`;
    }
    function stCountryRankingWithinRows(rows, limit=12){
      const items=[...rows.reduce((map,row)=>{const c=stText(row.country); if(!c) return map; if(!map.has(c)) map.set(c,{country:c,gold:0,silver:0,bronze:0,total:0}); const item=map.get(c); addMedalCount(item,row.medal); item.total++; return map;},new Map()).values()].sort(rankSort).slice(0,limit);
      return `<div class="table-scroll"><table><thead><tr><th>${tr('country')}</th><th>${tr('gold')}</th><th>${tr('silver')}</th><th>${tr('bronze')}</th><th>${tr('total')}</th></tr></thead><tbody>${items.map(item=>`<tr><td><span class="link" onclick="openCountryPage('${escapeJs(item.country)}')">${escapeHtml(item.country)}</span></td><td>${item.gold}</td><td>${item.silver}</td><td>${item.bronze}</td><td><strong>${item.total}</strong></td></tr>`).join('')}</tbody></table></div>`;
    }
    function openCountryPage(country){
      const rows=stCountryRows(country);
      const panel=document.getElementById('countryPanel'); const body=document.getElementById('countryPanelBody');
      if(!panel||!body) return;
      document.getElementById('countryPanelName').textContent=country;
      document.getElementById('countryPanelInfo').textContent=rows.length
        ? stLang(`관련 기록 ${rows.length}건 · 선수 ${stDistinctCount(rows,r=>r.skater_name)}명 · 대회 ${stDistinctCount(rows,r=>r.competition_name)}개`, `${rows.length} related records · ${stDistinctCount(rows,r=>r.skater_name)} athletes · ${stDistinctCount(rows,r=>r.competition_name)} competitions`)
        : stLang('관련 기록 없음','No related records');
      if(!rows.length){body.innerHTML=`<div class="st-empty-illustration"><div class="icon">🔎</div><strong>${stLang('국가 기록이 없습니다.','No country records found.')}</strong>${stLang('시트의 country 표기를 확인하거나 다른 국가 코드로 검색해 주세요.','Check the country code in the sheet or try another country code.')}</div>`;}
      else{
        const relayRows=rows.filter(row=>isRelayEvent(row.event)); const indivRows=rows.filter(row=>!isRelayEvent(row.event));
        body.innerHTML=`${stMedalSummaryTable(rows,stLang('전체 기록','All records'))}
        <div class="st-page-grid"><div class="st-page-box"><div class="label">${stLang('개인전 기록','Individual records')}</div><div class="value">${indivRows.length}</div></div><div class="st-page-box"><div class="label">${stLang('계주/팀 기록','Relay/team records')}</div><div class="value">${relayRows.length}</div></div><div class="st-page-box"><div class="label">${stLang('선수/팀','Athletes/teams')}</div><div class="value">${stDistinctCount(rows,r=>r.skater_name)}</div></div><div class="st-page-box"><div class="label">${stLang('대회','Competitions')}</div><div class="value">${stDistinctCount(rows,r=>r.competition_name)}</div></div></div>
        <div class="st-page-two-col"><div class="st-page-section"><h3>${stLang('주요 선수','Key athletes')}</h3>${stTopPlayersHtml(indivRows)}</div><div class="st-page-section"><h3>${stLang('관련 대회','Related competitions')}</h3>${stTopCompetitionsHtml(rows)}</div></div>
        <div class="st-page-section"><h3>${stLang('최근 관련 기록','Recent related records')}</h3><div class="table-scroll"><table><thead><tr><th>${tr('season')}</th><th>${stLang('대회','Competition')}</th><th>${tr('gender')}</th><th>${stLang('종목','Event')}</th><th>${stLang('메달','Medal')}</th><th>${stLang('선수/팀','Athlete/team')}</th><th>${stLang('기록','Time')}</th></tr></thead><tbody>${rows.slice().sort((a,b)=>seasonSortValue(b.season,b.year)-seasonSortValue(a.season,a.year)||eventOrder(a.event)-eventOrder(b.event)).slice(0,80).map(row=>`<tr><td>${escapeHtml(normalizeSeasonLabel(row.season,row.year)||'-')}</td><td>${competitionTypeBadgeHtml(row.competition_type)}${escapeHtml(row.competition_name||'-')}</td><td>${escapeHtml(genderKorean(row.gender)||'-')}</td><td>${escapeHtml(row.event||'-')}</td><td>${escapeHtml(medalKorean(row.medal))}</td><td>${isRelayEvent(row.event)?escapeHtml(row.skater_name||'-'):`<span class="link" onclick="openPlayerPanel('${escapeJs(row.skater_name)}')">${escapeHtml(row.skater_name||'-')}</span>`}</td><td>${escapeHtml(row.time||'-')}</td></tr>`).join('')}</tbody></table></div></div>`;
      }
      panel.classList.add('active'); if(!window.shorttrackRefreshingResults) panel.scrollIntoView({behavior:'smooth',block:'start'});
    }
    function closeCountryPanel(){document.getElementById('countryPanel')?.classList.remove('active');}
    window.openCountryPage=openCountryPage; window.closeCountryPanel=closeCountryPanel;

    function openSeasonPage(season){
      const normalized=normalizeSeasonLabel(season,season)||season;
      const rows=stSeasonRows(normalized);
      const panel=document.getElementById('seasonPanel'); const body=document.getElementById('seasonPanelBody');
      if(!panel||!body) return;
      document.getElementById('seasonPanelName').textContent=normalized;
      document.getElementById('seasonPanelInfo').textContent=rows.length
        ? stLang(`관련 기록 ${rows.length}건 · 대회 ${stDistinctCount(rows,r=>r.competition_name)}개 · 국가 ${stDistinctCount(rows,r=>r.country)}개`, `${rows.length} related records · ${stDistinctCount(rows,r=>r.competition_name)} competitions · ${stDistinctCount(rows,r=>r.country)} countries`)
        : stLang('관련 기록 없음','No related records');
      if(!rows.length){body.innerHTML=`<div class="st-empty-illustration"><div class="icon">📅</div><strong>${stLang('시즌 기록이 없습니다.','No season records found.')}</strong>${stLang('시즌 표기 형식이 2025-26인지 확인해 주세요.','Check whether the season format is like 2025-26.')}</div>`;}
      else{
        const indivRows=rows.filter(row=>!isRelayEvent(row.event));
        body.innerHTML=`${stMedalSummaryTable(rows,stLang('시즌 전체','Season total'))}
        <div class="st-page-two-col"><div class="st-page-section"><h3>${stLang('국가별 메달','Medals by country')}</h3>${stCountryRankingWithinRows(rows)}</div><div class="st-page-section"><h3>${stLang('주요 선수','Key athletes')}</h3>${stTopPlayersHtml(indivRows)}</div></div>
        <div class="st-page-section"><h3>${stLang('대회 목록','Competition list')}</h3>${stTopCompetitionsHtml(rows,50)}</div>`;
      }
      panel.classList.add('active'); if(!window.shorttrackRefreshingResults) panel.scrollIntoView({behavior:'smooth',block:'start'});
    }
    function closeSeasonPanel(){document.getElementById('seasonPanel')?.classList.remove('active');}
    window.openSeasonPage=openSeasonPage; window.closeSeasonPanel=closeSeasonPanel;

    function stEmptyStateHtml(title, body, icon='🔎'){
      return `<div class="st-empty-illustration"><div class="icon">${icon}</div><strong>${escapeHtml(title)}</strong>${escapeHtml(body)}</div>`;
    }

    const __stOriginalStFeaturedHtml = typeof stFeaturedHtml === 'function' ? stFeaturedHtml : null;
    stFeaturedHtml = function(data){
      const type=data.type.key; let item=null;
      if(type==='country') item=data.countries[0]; else if(type==='competition') item=data.competitions[0]; else if(type==='event') item=data.events[0]; else if(type==='season') item=data.seasons[0]; else item=data.players[0];
      if(!item){
        const suggestions=(data.suggestions||[]).map(v=>`<button type="button" class="suggest-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('');
        return `<div class="st-search-featured">${stEmptyStateHtml('검색 결과가 없습니다.','철자, 띄어쓰기, 국가 코드, 시즌 표기를 바꿔 검색해 보세요.','🔎')}${suggestions?`<div class="suggestion-row">${suggestions}</div>`:''}</div>`;
      }
      if(type==='country') return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 국가</div><div class="st-featured-title">${stHtml(item.country)}</div><div class="st-featured-meta">선수 ${item.playerCount}명 · 대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div>${stButton('국가 페이지 보기', `openCountryPage('${stJs(item.country)}')`)}</div>`;
      if(type==='season') return `<div class="st-search-featured"><div class="st-featured-kicker">가장 관련 높은 시즌</div><div class="st-featured-title">${stHtml(item.season)}</div><div class="st-featured-meta">관련 대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div>${stButton('시즌 페이지 보기', `openSeasonPage('${stJs(item.season)}')`)}</div>`;
      return __stOriginalStFeaturedHtml ? __stOriginalStFeaturedHtml(data) : '';
    };

    function stRecentRowsTableHtml(rows, extraClass=''){
      return `<div class="${extraClass}table-scroll"><table class="st-result-table"><thead><tr><th>대회</th><th>시즌</th><th>종목</th><th>메달</th><th>선수/팀</th><th>국가</th><th>기록</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${competitionTypeBadgeHtml(row.competition_type)}${stHtml(row.competition_name||'-')}</td><td>${stHtml(normalizeSeasonLabel(row.season,row.year)||'-')}</td><td>${stHtml(row.event||'-')}</td><td>${stHtml(stMedalLabel(row.medal))}</td><td>${stHtml(row.skater_name||row.team_name||'-')}</td><td>${stHtml(row.country||'-')}</td><td>${stHtml(row.time||'-')}</td></tr>`).join('')}</tbody></table></div>`;
    }
    function stMobileRecentRowsHtml(rows){
      return `<div class="mobile-card-list search-mobile-row-cards">${rows.map((row,idx)=>{
        const season=normalizeSeasonLabel(row.season,row.year)||'-';
        const medal=stMedalLabel(row.medal);
        const player=row.skater_name||row.team_name||'-';
        const playerHtml=(row.skater_name && !(typeof isRelayEvent === 'function' && isRelayEvent(row.event))) ? `<span class="link" onclick="openPlayerPanel('${stJs(row.skater_name)}')">${stHtml(row.skater_name)}</span>` : stHtml(player);
        return `<article class="mobile-data-card search-mobile-row-card">
          <div class="mobile-card-topline"><span class="mobile-rank-badge">#${idx+1}</span><strong class="mobile-record-time">${stHtml(row.time||medal||'-')}</strong></div>
          <div class="mobile-card-title">${playerHtml}</div>
          <div class="mobile-card-meta">${stHtml(row.country||'-')} · ${stHtml(row.event||'-')} · ${stHtml(medal||'-')}</div>
          <details class="mobile-card-more">
            <summary>대회 보기</summary>
            <div class="mobile-card-detail"><span>대회</span><strong>${competitionTypeBadgeHtml(row.competition_type)}${stHtml(row.competition_name||'-')}</strong></div>
            <div class="mobile-card-detail"><span>시즌</span><strong>${stHtml(season)}</strong></div>
          </details>
        </article>`;
      }).join('')}</div>`;
    }

    const __stOriginalRenderSearchResultView = typeof renderSearchResultView === 'function' ? renderSearchResultView : null;
    renderSearchResultView = function(){
      const view=stEnsureSearchView();
      const query=stText(archiveCommittedSearch);
      if(!query){stSetSearchHomeVisible(true);view.innerHTML='';if(typeof stRenderRecentSearches==='function') stRenderRecentSearches();return;}
      const data=stBuildSearchData(query);
      stSetSearchHomeVisible(false);
      const playersSection=stSectionHtml('선수 결과',data.players,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.name)}</div><div class="st-result-meta">${stHtml(item.country||'-')} · ${stHtml(stGenderLabel(item.gender))} · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('상세', `openPlayerPanel('${stJs(item.name)}')`)}</div></div>`);
      const countriesSection=stSectionHtml('국가 결과',data.countries,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.country)}</div><div class="st-result-meta">선수 ${item.playerCount}명 · 대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('국가 페이지', `openCountryPage('${stJs(item.country)}')`)}</div></div>`);
      const competitionsSection=stSectionHtml('대회 결과',data.competitions,typeof stCompetitionCard==='function'?stCompetitionCard:(item=>`<div class="st-result-item">${stHtml(item.name)}</div>`));
      const eventsSection=stSectionHtml('종목 결과',data.events,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.event)}</div><div class="st-result-meta">관련 선수 ${item.playerCount}명 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('검색', `stSetQuery('${stJs(item.event)}')`)}</div></div>`);
      const seasonsSection=stSectionHtml('시즌 결과',data.seasons,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.season)}</div><div class="st-result-meta">대회 ${item.competitionCount}개 · 관련 기록 ${item.count}건<br>${stHtml(item.summary)}</div></div>${stButton('시즌 페이지', `openSeasonPage('${stJs(item.season)}')`)}</div></div>`);
      const sections={skater:playersSection,country:countriesSection,competition:competitionsSection,event:eventsSection,season:seasonsSection};
      const orderMap={skater:['skater','competition','event','country','season'],country:['country','skater','competition','event','season'],competition:['competition','event','skater','country','season'],event:['event','skater','competition','country','season'],season:['season','competition','event','skater','country']};
      const ordered=(orderMap[data.type.key]||orderMap.skater).map(key=>sections[key]);
      const recentRowsHtml=data.recentRows.length?`<div class="st-result-section" style="grid-column:1/-1"><h3>관련 원자료 일부</h3>${stMobileRecentRowsHtml(data.recentRows)}<details class="st-mobile-raw-details"><summary>표로 보기</summary>${stRecentRowsTableHtml(data.recentRows)}</details>${stRecentRowsTableHtml(data.recentRows,'desktop-data-table ')}</div>`:'';
      const suggestions=(data.suggestions||[]).map(v=>`<button type="button" class="suggest-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('');
      const emptyHelp=data.total?'':`<div class="notice"><strong>검색 결과가 없습니다.</strong><br>철자, 띄어쓰기, 영문 표기를 조금 바꿔 보세요. 예: Kim Gil-li, KOR, World Tour, 2025-26, 1500m${suggestions?`<div class="suggestion-row">${suggestions}</div>`:''}</div>`;
      view.innerHTML=`<div class="st-search-head"><div><h2>“${stHtml(query)}” 검색 결과</h2><p>검색어 유형에 맞춰 선수·국가·대회·종목·시즌 결과를 따로 정리합니다.</p><span class="st-search-type">${stHtml(data.type.label)}</span><div class="st-count-row"><span class="st-count-chip">전체 ${data.total}건</span><span class="st-count-chip">선수 ${data.players.length}</span><span class="st-count-chip">국가 ${data.countries.length}</span><span class="st-count-chip">대회 ${data.competitions.length}</span><span class="st-count-chip">종목 ${data.events.length}</span><span class="st-count-chip">시즌 ${data.seasons.length}</span></div></div><div class="st-search-actions"><button type="button" class="sort-btn" onclick="stClearSearchView()">검색 초기화</button></div></div>${emptyHelp}${stFeaturedHtml(data)}<div class="st-result-grid">${ordered.join('')}${recentRowsHtml}</div>`;
      window.clearTimeout(window.__stRecentSearchTimer);
      window.__stRecentSearchTimer=window.setTimeout(()=>{ if(typeof stSaveRecentSearch==='function') stSaveRecentSearch(query); },700);
    };

    function stSearchCount(count, koUnit, enSingular, enPlural){
      if(currentLang === 'en') return `${count} ${count === 1 ? enSingular : (enPlural || `${enSingular}s`)}`;
      return `${count}${koUnit}`;
    }
    function stRelatedRecordsText(count){
      return currentLang === 'en' ? stSearchCount(count, '', 'related record') : `관련 기록 ${count}건`;
    }
    function stSearchTypeLabel(key){
      const labels = {
        season: stLang('시즌 검색어로 인식됨','Detected as a season query'),
        event: stLang('종목 검색어로 인식됨','Detected as an event query'),
        country: stLang('국가 검색어로 인식됨','Detected as a country query'),
        competition: stLang('대회 검색어로 인식됨','Detected as a competition query'),
        skater: stLang('선수 검색어로 인식됨','Detected as a skater query')
      };
      return labels[key] || labels.skater;
    }
    function stEntityMeta(parts){
      return parts.filter(Boolean).join(' · ');
    }
    function stPlayerMeta(item){
      return stEntityMeta([item.country || '-', stGenderLabel(item.gender), stRelatedRecordsText(item.count)]) + `<br>${stHtml(item.summary)}`;
    }
    function stCountryMeta(item){
      return stEntityMeta([
        stSearchCount(item.playerCount, '명', 'athlete'),
        stSearchCount(item.competitionCount, '개 대회', 'competition'),
        stRelatedRecordsText(item.count)
      ]) + `<br>${stHtml(item.summary)}`;
    }
    function stEventMeta(item){
      return stEntityMeta([
        currentLang === 'en' ? stSearchCount(item.playerCount, '', 'related athlete') : `관련 선수 ${item.playerCount}명`,
        stRelatedRecordsText(item.count)
      ]) + `<br>${stHtml(item.summary)}`;
    }
    function stSeasonMeta(item){
      return stEntityMeta([
        stSearchCount(item.competitionCount, '개 대회', 'competition'),
        stRelatedRecordsText(item.count)
      ]) + `<br>${stHtml(item.summary)}`;
    }
    function stCompetitionMeta(item){
      return stEntityMeta([item.season || '-', item.city || '-', stRelatedRecordsText(item.count)]) + `<br>${stHtml(item.summary || '')}`;
    }

    stMedalSummary = function(rows){
      const gold = rows.filter(row => row.medal === 'Gold').length;
      const silver = rows.filter(row => row.medal === 'Silver').length;
      const bronze = rows.filter(row => row.medal === 'Bronze').length;
      const bits = [];
      if(currentLang === 'en'){
        if(gold) bits.push(`G ${gold}`);
        if(silver) bits.push(`S ${silver}`);
        if(bronze) bits.push(`B ${bronze}`);
      }else{
        if(gold) bits.push(`금 ${gold}`);
        if(silver) bits.push(`은 ${silver}`);
        if(bronze) bits.push(`동 ${bronze}`);
      }
      return bits.length ? bits.join(' · ') : stRelatedRecordsText(rows.length);
    };
    stGenderLabel = function(value){
      const v = stLower(value);
      if(v === 'women') return tr('women');
      if(v === 'men') return tr('men');
      if(v === 'mixed') return tr('mixed');
      return stText(value) || '-';
    };
    stMedalLabel = function(value){
      const v = stText(value);
      if(v === 'Gold') return tr('gold');
      if(v === 'Silver') return tr('silver');
      if(v === 'Bronze') return tr('bronze');
      return v || '-';
    };
    stDetectSearchType = function(query, pool){
      const q = stLower(query);
      const compact = q.replace(/\s+/g,'');
      if(/^\d{4}-\d{2}$/.test(q)) return {key:'season', label:stSearchTypeLabel('season')};
      if(/^(500|1000|1500)m?$/.test(compact) || compact.includes('계주') || compact.includes('relay') || compact.includes('mixedrelay')) return {key:'event', label:stSearchTypeLabel('event')};
      const countries = stUniqueBy(pool.filter(row => stText(row.country)), row => stLower(row.country)).map(row => stLower(row.country));
      if(countries.includes(q) || ['kor','korea','southkorea','republicofkorea','대한민국','한국','can','canada','chn','china','중국','ned','netherlands','네덜란드','ita','italy','이탈리아','hun','hungary','헝가리','usa','unitedstates','미국','jpn','japan','일본'].includes(compact)){
        return {key:'country', label:stSearchTypeLabel('country')};
      }
      if(/olympic|world|championship|championships|tour|cup|games|asian|european|olympics|세계선수권|월드컵|월드투어|올림픽|아시안게임|유럽선수권|사대륙/.test(q)){
        return {key:'competition', label:stSearchTypeLabel('competition')};
      }
      if(pool.some(row => stLower(row.competition_name) === q)) return {key:'competition', label:stSearchTypeLabel('competition')};
      return {key:'skater', label:stSearchTypeLabel('skater')};
    };
    stSectionHtml = function(title, items, renderer){
      if(!items.length){
        return `<div class="st-result-section"><h3>${stHtml(title)}</h3><div class="st-empty-small">${stLang('관련 결과가 없습니다.','No related results.')}</div></div>`;
      }
      const hidden = items.length - ST_RESULT_LIMIT;
      return `<div class="st-result-section"><h3>${stHtml(title)}</h3><div class="st-result-list">${items.slice(0,ST_RESULT_LIMIT).map(renderer).join('')}</div>${hidden > 0 ? `<div class="st-empty-small">${currentLang === 'en' ? `${hidden} more results. Narrow the search to review them more easily.` : `외 ${hidden}건은 검색어를 더 구체화하면 확인하기 쉽습니다.`}</div>` : ''}</div>`;
    };
    stCompetitionCard = function(item){
      return `<div class="st-result-card-rich"><div class="st-result-item-top"><div><div class="st-result-name">${competitionTypeBadgeHtml(item.type)}${stHtml(item.name)}</div><div class="st-result-meta">${stCompetitionMeta(item)}</div></div>${stButton(stLang('상세','Details'), `openCompetitionPanel('${stJs(item.name)}')`)}</div></div>`;
    };
    stFeaturedHtml = function(data){
      const type=data.type.key; let item=null;
      if(type==='country') item=data.countries[0]; else if(type==='competition') item=data.competitions[0]; else if(type==='event') item=data.events[0]; else if(type==='season') item=data.seasons[0]; else item=data.players[0];
      if(!item){
        const suggestions=(data.suggestions||[]).map(v=>`<button type="button" class="suggest-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('');
        return `<div class="st-search-featured">${stEmptyStateHtml(stLang('검색 결과가 없습니다.','No search results.'),stLang('철자, 띄어쓰기, 국가 코드, 시즌 표기를 바꿔 검색해 보세요.','Try a different spelling, spacing, country code, or season format.'),'🔎')}${suggestions?`<div class="suggestion-row">${suggestions}</div>`:''}</div>`;
      }
      if(type==='country') return `<div class="st-search-featured"><div class="st-featured-kicker">${stLang('가장 관련 높은 국가','Top matching country')}</div><div class="st-featured-title">${stHtml(item.country)}</div><div class="st-featured-meta">${stCountryMeta(item)}</div>${stButton(stLang('국가 페이지 보기','View country page'), `openCountryPage('${stJs(item.country)}')`)}</div>`;
      if(type==='competition') return `<div class="st-search-featured"><div class="st-featured-kicker">${stLang('가장 관련 높은 대회','Top matching competition')}</div><div class="st-featured-title">${competitionTypeBadgeHtml(item.type)}${stHtml(item.name)}</div><div class="st-featured-meta">${stCompetitionMeta(item)}</div>${stButton(stLang('대회 상세 보기','View competition details'), `openCompetitionPanel('${stJs(item.name)}')`)}</div>`;
      if(type==='event') return `<div class="st-search-featured"><div class="st-featured-kicker">${stLang('가장 관련 높은 종목','Top matching event')}</div><div class="st-featured-title">${stHtml(item.event)}</div><div class="st-featured-meta">${stEventMeta(item)}</div>${stButton(stLang('이 종목 다시 검색','Search this event'), `stSetQuery('${stJs(item.event)}')`)}</div>`;
      if(type==='season') return `<div class="st-search-featured"><div class="st-featured-kicker">${stLang('가장 관련 높은 시즌','Top matching season')}</div><div class="st-featured-title">${stHtml(item.season)}</div><div class="st-featured-meta">${stSeasonMeta(item)}</div>${stButton(stLang('시즌 페이지 보기','View season page'), `openSeasonPage('${stJs(item.season)}')`)}</div>`;
      return `<div class="st-search-featured"><div class="st-featured-kicker">${stLang('가장 관련 높은 선수','Top matching skater')}</div><div class="st-featured-title">${stHtml(item.name)}</div><div class="st-featured-meta">${stPlayerMeta(item)}</div>${stButton(stLang('선수 상세 보기','View skater details'), `openPlayerPanel('${stJs(item.name)}')`)}</div>`;
    };
    stRecentRowsTableHtml = function(rows, extraClass=''){
      return `<div class="${extraClass}table-scroll"><table class="st-result-table"><thead><tr><th>${tr('competition')}</th><th>${tr('season')}</th><th>${tr('event')}</th><th>${stLang('메달','Medal')}</th><th>${tr('skaterTeam')}</th><th>${tr('country')}</th><th>${tr('record')}</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${competitionTypeBadgeHtml(row.competition_type)}${stHtml(row.competition_name||'-')}</td><td>${stHtml(normalizeSeasonLabel(row.season,row.year)||'-')}</td><td>${stHtml(row.event||'-')}</td><td>${stHtml(stMedalLabel(row.medal))}</td><td>${stHtml(row.skater_name||row.team_name||'-')}</td><td>${stHtml(row.country||'-')}</td><td>${stHtml(row.time||'-')}</td></tr>`).join('')}</tbody></table></div>`;
    };
    stRenderRecentSearches = function(){
      const section=document.getElementById('searchSection');
      if(!section) return;
      let panel=document.getElementById('stRecentSearchesWrap');
      if(!panel){panel=document.createElement('div');panel.id='stRecentSearchesWrap';panel.className='search-extra-panel';section.appendChild(panel);}
      const items=JSON.parse(localStorage.getItem('shorttrack_recent_searches')||'[]').slice(0,8);
      panel.innerHTML=items.length?`<div class="recent-searches"><span class="recent-searches-title">${stLang('최근 검색어','Recent searches')}</span>${items.map(v=>`<button type="button" class="recent-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('')}<button type="button" class="recent-chip" onclick="stClearRecentSearches()">${stLang('지우기','Clear')}</button></div>`:'';
    };
    window.stClearRecentSearches=stClearRecentSearches;
    stMobileRecentRowsHtml = function(rows){
      return `<div class="mobile-card-list search-mobile-row-cards">${rows.map((row,idx)=>{
        const season=normalizeSeasonLabel(row.season,row.year)||'-';
        const medal=stMedalLabel(row.medal);
        const player=row.skater_name||row.team_name||'-';
        const playerHtml=(row.skater_name && !(typeof isRelayEvent === 'function' && isRelayEvent(row.event))) ? `<span class="link" onclick="openPlayerPanel('${stJs(row.skater_name)}')">${stHtml(row.skater_name)}</span>` : stHtml(player);
        return `<article class="mobile-data-card search-mobile-row-card">
          <div class="mobile-card-topline"><span class="mobile-rank-badge">#${idx+1}</span><strong class="mobile-record-time">${stHtml(row.time||medal||'-')}</strong></div>
          <div class="mobile-card-title">${playerHtml}</div>
          <div class="mobile-card-meta">${stHtml(row.country||'-')} · ${stHtml(row.event||'-')} · ${stHtml(medal||'-')}</div>
          <details class="mobile-card-more">
            <summary>${stLang('대회 보기','View competition')}</summary>
            <div class="mobile-card-detail"><span>${tr('competition')}</span><strong>${competitionTypeBadgeHtml(row.competition_type)}${stHtml(row.competition_name||'-')}</strong></div>
            <div class="mobile-card-detail"><span>${tr('season')}</span><strong>${stHtml(season)}</strong></div>
          </details>
        </article>`;
      }).join('')}</div>`;
    };
    renderSearchResultView = function(){
      const view=stEnsureSearchView();
      const query=stText(archiveCommittedSearch);
      if(!query){stSetSearchHomeVisible(true);view.innerHTML='';if(typeof stRenderRecentSearches==='function') stRenderRecentSearches();return;}
      const data=stBuildSearchData(query);
      stSetSearchHomeVisible(false);
      const playersSection=stSectionHtml(stLang('선수 결과','Skater results'),data.players,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.name)}</div><div class="st-result-meta">${stPlayerMeta(item)}</div></div>${stButton(stLang('상세','Details'), `openPlayerPanel('${stJs(item.name)}')`)}</div></div>`);
      const countriesSection=stSectionHtml(stLang('국가 결과','Country results'),data.countries,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.country)}</div><div class="st-result-meta">${stCountryMeta(item)}</div></div>${stButton(stLang('국가 페이지','Country page'), `openCountryPage('${stJs(item.country)}')`)}</div></div>`);
      const competitionsSection=stSectionHtml(stLang('대회 결과','Competition results'),data.competitions,stCompetitionCard);
      const eventsSection=stSectionHtml(stLang('종목 결과','Event results'),data.events,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.event)}</div><div class="st-result-meta">${stEventMeta(item)}</div></div>${stButton(stLang('검색','Search'), `stSetQuery('${stJs(item.event)}')`)}</div></div>`);
      const seasonsSection=stSectionHtml(stLang('시즌 결과','Season results'),data.seasons,item=>`<div class="st-result-item"><div class="st-result-item-top"><div><div class="st-result-name">${stHtml(item.season)}</div><div class="st-result-meta">${stSeasonMeta(item)}</div></div>${stButton(stLang('시즌 페이지','Season page'), `openSeasonPage('${stJs(item.season)}')`)}</div></div>`);
      const sections={skater:playersSection,country:countriesSection,competition:competitionsSection,event:eventsSection,season:seasonsSection};
      const orderMap={skater:['skater','competition','event','country','season'],country:['country','skater','competition','event','season'],competition:['competition','event','skater','country','season'],event:['event','skater','competition','country','season'],season:['season','competition','event','skater','country']};
      const ordered=(orderMap[data.type.key]||orderMap.skater).map(key=>sections[key]);
      const recentRowsHtml=data.recentRows.length?`<div class="st-result-section" style="grid-column:1/-1"><h3>${stLang('관련 원자료 일부','Sample source rows')}</h3>${stMobileRecentRowsHtml(data.recentRows)}<details class="st-mobile-raw-details"><summary>${stLang('표로 보기','View as table')}</summary>${stRecentRowsTableHtml(data.recentRows)}</details>${stRecentRowsTableHtml(data.recentRows,'desktop-data-table ')}</div>`:'';
      const suggestions=(data.suggestions||[]).map(v=>`<button type="button" class="suggest-chip" onclick="stSetQuery('${stJs(v)}')">${stHtml(v)}</button>`).join('');
      const emptyHelp=data.total?'':`<div class="notice"><strong>${stLang('검색 결과가 없습니다.','No search results.')}</strong><br>${stLang('철자, 띄어쓰기, 영문 표기를 조금 바꿔 보세요.','Try changing spelling, spacing, or English notation.')} ${stLang('예','Examples')}: Kim Gil-li, KOR, World Tour, 2025-26, 1500m${suggestions?`<div class="suggestion-row">${suggestions}</div>`:''}</div>`;
      view.innerHTML=`<div class="st-search-head"><div><h2>${currentLang === 'en' ? `Search results for "${stHtml(query)}"` : `“${stHtml(query)}” 검색 결과`}</h2><p>${stLang('검색어 유형에 맞춰 선수·국가·대회·종목·시즌 결과를 따로 정리합니다.','Results are grouped by skater, country, competition, event, and season based on the query type.')}</p><span class="st-search-type">${stHtml(data.type.label)}</span><div class="st-count-row"><span class="st-count-chip">${stLang('전체','Total')} ${stSearchCount(data.total,'건','result')}</span><span class="st-count-chip">${tr('skater')} ${data.players.length}</span><span class="st-count-chip">${tr('country')} ${data.countries.length}</span><span class="st-count-chip">${tr('competition')} ${data.competitions.length}</span><span class="st-count-chip">${tr('event')} ${data.events.length}</span><span class="st-count-chip">${tr('season')} ${data.seasons.length}</span></div></div><div class="st-search-actions"><button type="button" class="sort-btn" onclick="stClearSearchView()">${stLang('검색 초기화','Clear search')}</button></div></div>${emptyHelp}${stFeaturedHtml(data)}<div class="st-result-grid">${ordered.join('')}${recentRowsHtml}</div>`;
      window.clearTimeout(window.__stRecentSearchTimer);
      window.__stRecentSearchTimer=window.setTimeout(()=>{ if(typeof stSaveRecentSearch==='function') stSaveRecentSearch(query); },700);
    };

    const __stOriginalLoadDataForApprovedPages = loadData;
    loadData = async function(suppliedJson){
      const result = await __stOriginalLoadDataForApprovedPages(suppliedJson);
      refreshTodaySkaterCard();
      return result;
    };


    /* Scroll/navigation reliability patch */
    function stScrollToElementAfterRender(id){
      window.requestAnimationFrame(()=>{
        window.setTimeout(()=>{
          const el=document.getElementById(id);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }, 30);
      });
    }
    if(typeof openCountryPage==='function'){
      const __stOpenCountryPageWithScroll=openCountryPage;
      (window.liveDetailRenderers ||= {}).CountryPage=openCountryPage;
      openCountryPage=function(country){
        __stOpenCountryPageWithScroll(country);
        stScrollToElementAfterRender('countryPanel');
      };
      window.openCountryPage=openCountryPage;
    }
    if(typeof openSeasonPage==='function'){
      const __stOpenSeasonPageWithScroll=openSeasonPage;
      (window.liveDetailRenderers ||= {}).SeasonPage=openSeasonPage;
      openSeasonPage=function(season){
        __stOpenSeasonPageWithScroll(season);
        stScrollToElementAfterRender('seasonPanel');
      };
      window.openSeasonPage=openSeasonPage;
    }
    if(typeof openPlayerPanel==='function'){
      const __stOpenPlayerPanelWithScroll=openPlayerPanel;
      (window.liveDetailRenderers ||= {}).PlayerPanel=openPlayerPanel;
      openPlayerPanel=function(name){
        __stOpenPlayerPanelWithScroll(name);
        stScrollToElementAfterRender('playerPanel');
      };
      window.openPlayerPanel=openPlayerPanel;
    }
    if(typeof openCompetitionPanel==='function'){
      const __stOpenCompetitionPanelWithScroll=openCompetitionPanel;
      (window.liveDetailRenderers ||= {}).CompetitionPanel=openCompetitionPanel;
      openCompetitionPanel=function(name){
        __stOpenCompetitionPanelWithScroll(name);
        stScrollToElementAfterRender('competitionPanel');
      };
      window.openCompetitionPanel=openCompetitionPanel;
    }
    if(typeof refreshTodaySkaterCard==='function'){
      window.addEventListener('DOMContentLoaded',()=>{try{refreshTodaySkaterCard();}catch(e){}});
    }

  

    // Lap time ranking API integration
    let lapRankingRows = [];
    let lapRankingLoaded = false;
    let currentLapContext = 'all';
    let lapVisibleLimit = 0;
    let lapVisibleBaseLimit = 0;
    let lapVisibleSignature = '';

    function lapContextLabel(key){
      return {lead:tr('lapLead'), pass:tr('lapPass'), follow:tr('lapFollow'), passed:tr('lapPassed'), unknown:tr('lapUnknown')}[key] || key || tr('lapUnknown');
    }
    function ordinalEn(value){
      const n=Number(value);
      if(!Number.isFinite(n)) return String(value||'');
      const mod100=n%100;
      const suffix=mod100>=11&&mod100<=13?'th':(n%10===1?'st':n%10===2?'nd':n%10===3?'rd':'th');
      return `${n}${suffix}`;
    }
    function lapBasisText(row){
      if(row.prev_split_rank && row.split_rank){
        return currentLang==='en' ? `${ordinalEn(row.prev_split_rank)} to ${ordinalEn(row.split_rank)}` : `${row.prev_split_rank}위 → ${row.split_rank}위`;
      }
      const raw=String(row.context_basis||'').trim();
      if(currentLang==='en' && raw){
        return raw.replace(/(\d+)\s*위\s*[→>-]+\s*(\d+)\s*위/g, (_m,a,b)=>`${ordinalEn(a)} to ${ordinalEn(b)}`);
      }
      return raw || '-';
    }
    function lapContextClass(key){
      return ['lead','pass','follow','passed'].includes(key) ? key : 'unknown';
    }
    function lapContextPriority(key){
      return {lead:0, pass:1, follow:2, passed:3, unknown:4}[key] ?? 5;
    }
    function lapEventOrder(event){
      const e=normalizeLapEvent(event);
      const order={
        'Women 500 m':1,
        'Men 500 m':2,
        'Women 3000 m Relay':3,
        'Men 5000 m Relay':4,
        'Mixed Team Relay':5
      };
      return order[e] ?? 99;
    }
    function normalizeLapEvent(event){
      const raw=String(event||'').trim();
      const upper=raw.toUpperCase().replace(/\s+/g,' ');
      if(!raw) return '';
      if(upper==='TEAM RELAY' || upper==='3000M RELAY' || upper==='3000 M RELAY' || upper==='WOMEN RELAY') return 'Women 3000 m Relay';
      if(upper==='5000M RELAY' || upper==='5000 M RELAY' || upper==='MEN RELAY') return 'Men 5000 m Relay';
      if(upper==='MIXED RELAY' || upper==='MIXED TEAM RELAY') return 'Mixed Team Relay';
      if(/WOMEN\s*3000\s*M?\s*RELAY/i.test(raw) || /^WOMEN\s+RELAY$/i.test(raw)) return 'Women 3000 m Relay';
      if(/MEN\s*5000\s*M?\s*RELAY/i.test(raw) || /^MEN\s+RELAY$/i.test(raw)) return 'Men 5000 m Relay';
      if(/MIXED/i.test(raw) && /RELAY/i.test(raw)) return 'Mixed Team Relay';
      return raw;
    }
    function inferLapGender(gender,event){
      const g=String(gender||'').trim();
      const e=String(event||'').toLowerCase();
      if(/^women$/i.test(g) || /women|female|여/.test(g.toLowerCase())) return 'Women';
      if(/^men$/i.test(g) || /(^|[^a-z])men([^a-z]|$)|male|남/.test(g.toLowerCase())) return 'Men';
      if(/^mixed$/i.test(g) || /mixed|혼성/.test(g.toLowerCase())) return 'Mixed';
      if(e.includes('women')) return 'Women';
      if(e.includes('men')) return 'Men';
      if(e.includes('mixed')) return 'Mixed';
      return g;
    }
    function lapGenderThreshold(gender,event){
      const g=inferLapGender(gender,event);
      if(g==='Women') return 8.59;
      if(g==='Men') return 8.19;
      return 999;
    }
    function getLapApiUrl(){
      return (typeof LAP_API_URL!=='undefined' && LAP_API_URL) ? LAP_API_URL : APPS_SCRIPT_URL;
    }
    function setLapContextFilter(context){
      currentLapContext=context;
      document.querySelectorAll('.lap-context-tab').forEach(btn=>btn.classList.toggle('active', btn.dataset.lapContext===context));
      renderLapRankings();
    }
    function populateLapFilters(rows){
      const seasonSel=document.getElementById('lapSeasonFilter');
      const eventSel=document.getElementById('lapEventFilter');
      if(!seasonSel||!eventSel) return;
      const oldSeason=seasonSel.value||'all';
      const oldEvent=eventSel.value||'all';
      const seasons=[...new Set(rows.map(r=>String(r.season||'').trim()).filter(Boolean))].sort().reverse();
      const events=[...new Set(rows.map(r=>normalizeLapEvent(r.event)).filter(Boolean))]
        .sort((a,b)=>lapEventOrder(a)-lapEventOrder(b)||eventOrder(a)-eventOrder(b)||a.localeCompare(b));
      seasonSel.innerHTML=`<option value="all">${escapeHtml(tr('allSeasons'))}</option>`+seasons.map(s=>`<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
      eventSel.innerHTML=`<option value="all">${escapeHtml(tr('allEvents'))}</option>`+events.map(e=>`<option value="${escapeHtml(e)}">${escapeHtml(e)}</option>`).join('');
      seasonSel.value=seasons.includes(oldSeason)?oldSeason:'all';
      eventSel.value=events.includes(oldEvent)?oldEvent:'all';
      seasonSel.disabled=false;
      eventSel.disabled=false;
    }

    function normalizeLapRow(row){
      const normalizedEvent=normalizeLapEvent(row.event||row.distance||row.discipline||'');
      const normalizedGender=inferLapGender(row.gender||'', normalizedEvent);
      return {
        competition_type:String(row.competition_type||''), season:String(row.season||''), competition_name:String(row.competition_name||row.compitition||row.competition||''), city:String(row.city||''), year:String(row.year||''),
        gender:normalizedGender, event:normalizedEvent, round:String(row.round||''), heat:String(row.heat||''), skater_name:String(row.skater_name||row.name||row.athlete||''), country:String(row.country||row.noc||''),
        lap_no:Number(row.lap_no||row.lap_number||0), lap_time:Number(row.lap_time||row.rap_time||row.time||0), split_time:String(row.split_time||''), split_rank:Number(row.split_rank||0), prev_split_rank:Number(row.prev_split_rank||0),
        auto_context:String(row.auto_context||row.context||''), manual_context:String(row.manual_context||''), source_url:String(row.source_url||''), note:String(row.note||''), context_basis:String(row.context_basis||'')
      };
    }
    function extractLapRowsFromJson(json){
      if(!json) return [];
      if(Array.isArray(json)) return json;
      const keys=['rows','lap_times_raw','lap_times','lap_rankings','lapRankings','lap_time_rankings'];
      for(const key of keys){
        if(Array.isArray(json[key])) return json[key];
      }
      return [];
    }
    function dedupeLapRows(rows){
      const seen=new Set();
      const out=[];
      rows.forEach(row=>{
        const key=[row.competition_type,row.season,row.competition_name,row.gender,row.event,row.round,row.heat,row.skater_name,row.country,row.lap_no,row.lap_time,row.split_time,row.prev_split_rank,row.split_rank].map(v=>String(v||'').trim()).join('||');
        if(seen.has(key)) return;
        seen.add(key);
        out.push(row);
      });
      return out;
    }
    function unlockLapFilterControls(){
      ['lapSeasonFilter','lapEventFilter'].forEach(id=>{
        const el=document.getElementById(id);
        if(el) el.disabled=false;
      });
    }
    function applyLoadedLapRankingsJson(json, renderResults=true){
      if(!json || json.ok===false) throw new Error(json && json.error ? json.error : 'lapRankings 응답 오류');
      let sourceRows=extractLapRowsFromJson(json);
      lapRankingRows=dedupeLapRows(sourceRows.map(normalizeLapRow).filter(r=>r.lap_time>0 && r.event));
      populateLapFilters(lapRankingRows);
      if(renderResults){
        lapRankingLoaded=true;
        document.getElementById('lapKpiTotal').textContent=lapRankingRows.length.toLocaleString('ko-KR');
        document.getElementById('lapKpiLoaded') && (document.getElementById('lapKpiLoaded').textContent=new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'}));
        renderLapRankings();
      }
    }
    window.preloadLapRankingFilters = async function(){
      if(lapRankingRows.length){
        populateLapFilters(lapRankingRows);
        unlockLapFilterControls();
        return;
      }
      try{
        const staticJson = await archiveSnapshotDataset('lap_rankings');
        applyLoadedLapRankingsJson(staticJson, false);
      }catch(error){
        unlockLapFilterControls();
        console.warn('랩타임 필터 사전 준비 실패', error);
      }
    };
    async function loadLapRankings(force){
      const wrap=document.getElementById('lapRankingWrap');
      if(!wrap) return;
      if(lapRankingLoaded && !force){ renderLapRankings(); return; }
      if(lapRankingRows.length && !lapRankingLoaded && !force){
        lapRankingLoaded=true;
        populateLapFilters(lapRankingRows);
        document.getElementById('lapKpiTotal').textContent=lapRankingRows.length.toLocaleString('ko-KR');
        document.getElementById('lapKpiLoaded') && (document.getElementById('lapKpiLoaded').textContent=new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'}));
        renderLapRankings();
        return;
      }
      const api=getLapApiUrl();
      unlockLapFilterControls();
      if(!api || api.includes('여기에')){
        wrap.innerHTML=`<div class="empty"><strong>${escapeHtml(tr('lapDataNotReady'))}</strong><br>${escapeHtml(tr('tryAgainLater'))}</div>`;
        return;
      }
      wrap.innerHTML=`<div class="empty">${escapeHtml(tr('lapLoading'))}</div>`;
      ['lapSeasonFilter','lapEventFilter'].forEach(id=>{const el=document.getElementById(id); if(el) el.disabled=false;});
      try{
        const sep=api.includes('?')?'&':'?';
        const json = await archiveSnapshotDataset('lap_rankings', !!force);
        if(!json || json.ok===false) throw new Error(json && json.error ? json.error : 'lapRankings 응답 오류');
        let sourceRows=extractLapRowsFromJson(json);
        lapRankingRows=dedupeLapRows(sourceRows.map(normalizeLapRow).filter(r=>r.lap_time>0 && r.event));
        lapRankingLoaded=true;
        populateLapFilters(lapRankingRows);
        document.getElementById('lapKpiTotal').textContent=lapRankingRows.length.toLocaleString('ko-KR');
        document.getElementById('lapKpiLoaded') && (document.getElementById('lapKpiLoaded').textContent=new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'}));
        renderLapRankings();
      }catch(err){
        ['lapSeasonFilter','lapEventFilter'].forEach(id=>{const el=document.getElementById(id); if(el) el.disabled=false;});
        console.error('Lap ranking load failed', err);
        wrap.innerHTML=`<div class="empty"><strong>${escapeHtml(tr('lapLoadFailed'))}</strong><br>${escapeHtml(tr('tryAgainLater'))}</div>`;
      }
    }
    function renderLapRankings(){
      const wrap=document.getElementById('lapRankingWrap');
      if(!wrap) return;
      if(!lapRankingLoaded){
        wrap.innerHTML=`<div class="empty">${tr('lapNotLoaded')}</div>`;
        return;
      }
      const gender=document.getElementById('lapGenderFilter')?.value||'all';
      const season=document.getElementById('lapSeasonFilter')?.value||'all';
      const event=document.getElementById('lapEventFilter')?.value||'all';
      const baseLimit=Math.max(1, Number(document.getElementById('lapLimitFilter')?.value||20));
      const signature=[gender,season,event,currentLapContext,baseLimit].join('|');
      if(signature!==lapVisibleSignature){
        lapVisibleSignature=signature;
        lapVisibleBaseLimit=baseLimit;
        lapVisibleLimit=baseLimit;
      }
      let rows=lapRankingRows.slice();
      rows=rows.filter(row=>{
        const context=row.manual_context || row.auto_context || 'unknown';
        if(gender!=='all' && row.gender!==gender) return false;
        if(season!=='all' && row.season!==season) return false;
        if(event!=='all' && row.event!==event) return false;
        if(currentLapContext!=='all' && context!==currentLapContext) return false;
        const threshold=lapGenderThreshold(row.gender,row.event);
        if(row.lap_time>threshold) return false;
        return true;
      });
      rows.sort((a,b)=>a.lap_time-b.lap_time || lapContextPriority(a.manual_context||a.auto_context)-lapContextPriority(b.manual_context||b.auto_context) || String(a.skater_name).localeCompare(String(b.skater_name),'ko'));
      const currentLimit=Math.max(lapVisibleLimit||baseLimit, baseLimit);
      const visible=rows.slice(0,currentLimit);
      if(!visible.length){
        wrap.innerHTML=`<div class="empty"><strong>${escapeHtml(tr('lapNoMatch'))}</strong><br>${escapeHtml(tr('adjustLapFilters'))}</div>`;
        return;
      }
      const cards=`<div class="mobile-card-list lap-mobile-cards">${visible.map((row,idx)=>{
        const context=row.manual_context || row.auto_context || 'unknown';
        const basis=lapBasisText(row);
        return `<article class="mobile-data-card lap-mobile-card">
          <div class="mobile-card-topline"><span class="mobile-rank-badge">#${idx+1}</span><strong class="mobile-record-time">${row.lap_time.toFixed(2)}</strong></div>
          <div class="mobile-card-title">${escapeHtml(row.skater_name || '-')}</div>
          <div class="mobile-card-meta">${escapeHtml(row.country || '-')} · ${escapeHtml(row.gender || '-')} · ${escapeHtml(row.event || '-')}</div>
          <details class="mobile-card-more">
            <summary>${escapeHtml(tr('details'))}</summary>
            <div class="mobile-card-detail"><span>${escapeHtml(tr('competition'))}</span><strong>${escapeHtml(row.competition_name || '-')}</strong></div>
            <div class="mobile-card-detail"><span>${escapeHtml(tr('seasonRound'))}</span><strong>${escapeHtml(row.season || '-')} · ${escapeHtml(row.round || '-')} · H${escapeHtml(row.heat || '-')}</strong></div>
            <div class="mobile-card-detail"><span>${escapeHtml(tr('lap'))} / ${escapeHtml(tr('category'))}</span><strong>${row.lap_no || '-'} · <span class="lap-badge ${lapContextClass(context)}">${lapContextLabel(context)}</span></strong></div>
            <div class="mobile-card-detail"><span>${escapeHtml(tr('basis'))}</span><strong>${escapeHtml(basis)}</strong></div>
          </details>
        </article>`;
      }).join('')}</div>`;
      const moreControls=lapRankingMoreControls(visible.length, rows.length);
      const html=`${cards}<div class="desktop-data-table table-scroll"><table><thead><tr>
        <th>${escapeHtml(tr('rank'))}</th><th>${escapeHtml(tr('lapTime'))}</th><th>${escapeHtml(tr('skater'))}</th><th>${escapeHtml(tr('country'))}</th><th>${escapeHtml(tr('gender'))}</th><th>${escapeHtml(tr('event'))}</th><th>${escapeHtml(tr('competition'))}</th><th>${escapeHtml(tr('season'))}</th><th>${escapeHtml(tr('round'))}</th><th>${escapeHtml(tr('heat'))}</th><th>${escapeHtml(tr('lap'))}</th><th>${escapeHtml(tr('category'))}</th><th>${escapeHtml(tr('basis'))}</th>
      </tr></thead><tbody>${visible.map((row,idx)=>{
        const context=row.manual_context || row.auto_context || 'unknown';
        const basis=lapBasisText(row);
        return `<tr>
          <td>${idx+1}</td><td><strong>${row.lap_time.toFixed(2)}</strong></td><td>${escapeHtml(row.skater_name)}</td><td>${escapeHtml(row.country)}</td><td>${escapeHtml(row.gender)}</td><td>${escapeHtml(row.event)}</td><td>${escapeHtml(row.competition_name)}</td><td>${escapeHtml(row.season)}</td><td>${escapeHtml(row.round)}</td><td>${escapeHtml(row.heat)}</td><td>${row.lap_no||''}</td><td><span class="lap-badge ${lapContextClass(context)}">${lapContextLabel(context)}</span></td><td>${escapeHtml(basis)}</td>
        </tr>`;
      }).join('')}</tbody></table></div><div class="subnote">${currentLang==='en' ? `${tr('totalShown')}: ${visible.length.toLocaleString('en-US')} ${tr('shownCount')} ${tr('ofCount')} ${rows.length.toLocaleString('en-US')}` : `${tr('totalShown')} ${rows.length.toLocaleString('ko-KR')}${tr('ofCount')} ${visible.length.toLocaleString('ko-KR')}${tr('shownCount')}`}</div>${moreControls}`;
      wrap.innerHTML=html;
    }
    function lapRankingMoreControls(shown,total){
      const showMore = shown < total ? `<button type="button" class="sort-btn" onclick="showMoreLapRankings()">${escapeHtml(tr('showMoreLaps'))}</button>` : '';
      const collapse = shown > (lapVisibleBaseLimit||Number(document.getElementById('lapLimitFilter')?.value||20)) ? `<button type="button" class="sort-btn" onclick="collapseLapRankings()">${escapeHtml(tr('collapse'))}</button>` : '';
      return showMore || collapse ? `<div class="ranking-more-actions"><span class="score-mini">${currentLang==='en' ? `${total.toLocaleString('en-US')} total` : `총 ${total.toLocaleString('ko-KR')}개`}</span>${showMore}${collapse}</div>` : '';
    }
    window.showMoreLapRankings=function(){
      const step=lapVisibleBaseLimit||Math.max(1,Number(document.getElementById('lapLimitFilter')?.value||20));
      lapVisibleLimit+=step;
      renderLapRankings();
    };
    window.collapseLapRankings=function(){
      lapVisibleLimit=lapVisibleBaseLimit||Math.max(1,Number(document.getElementById('lapLimitFilter')?.value||20));
      renderLapRankings();
    };
