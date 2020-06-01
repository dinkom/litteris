const books = [
  {
    id: 1,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/zarko_paic1.jpg',
    title: 'Slika bez svijeta: Ikonoklazam suvremene umjetnosti',
    slug: 'slika-bez-svijeta-ikonoklazam-suvremene-umjetnosti',
    author: 'Žarko Paić',
    translation: null,
    date: '6/2006.',
    info: '319 str. / tvrdi uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Ikonoklazam suvremene umjetnosti, o čemu se raspravlja u ovoj knjizi, pretpostavlja unutarnji povijesni razvitak avangarde od njezine destrukcije slike do slikovnoga obrata naših dana. Razvitak avangarde tijekom XX. stoljeća u umjetnosti nije izričito povijesno-umjetnička tema. Avangardna umjetnost bila je posljednji radikalni pokret moderne s njezinim kultom novoga. Govoriti stoga o umjetnosti koja je nastojala prevladati i ukinuti umjetnost u životu nipošto ne može biti svedeno na govor o razvitku umjetničkih stilova, tendencija i smjerova.

Nakana je ove knjige izložiti temeljne razloge nestanka slike u doba virtualne realnosti iz razumijevanja suvremene umjetnosti kao realiziranog ikonoklazma.
    
Žarko Paić (1958.) diplomirao je i magistrirao na Fakultetu političkih znanosti, a doktorirao na Filozofskom fakultetu Sveučilišta u Zagrebu. Objavljuje filozofijske, sociologijske i književne rasprave i eseje, kritike i prikaze te poetske i prozne tekstove u knjigama, zbornicima i časopisima. Prevođen je na engleski, njemački, francuski, slovenski, mađarski i rumunjski jezik.
Glavni je i odgovorni urednik časopisa za književnost, umjetnost i znanost Tvrđa te zamjenik glavnog urednika časopisa Europski glasnik.`
  },
  {
    id: 2,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/balzac.jpg',
    title: 'Nepoznato remek-djelo / Sarrasine / Gambara',
    slug: 'nepoznato-remek-djelo-sarrasine-gambara',
    author: 'Honore de Balzac',
    translation: 'Mihaela Vekarić, Vlatka Valentić',
    date: '5/2006.',
    info: '179 str. / meki uvez',
    price: '105,00 kn',
    discountedPrice: '52,50 kn',
    fiftyOff: true,
    description: `U izdanju Litterisa i uz likovno oblikovanje Crtaone pred nama se nalaze do sada na hrvatski neprevedena tri teksta posvećena problemu umjetnosti: "Nepoznato remek-djelo" o slikarskom perfekcionistu Frenhoferu, "Sarrasine" kojoj je Roland Barthes svojom analizom osigurao mjesto u klasicima kratke priče, i "Gambara" posvećena mističnoj viziji glazbe.

"Nepoznato remek-djelo", "Sarrasine" i "Gambara", tri su slavne Balzacove novele koje se odnose na slikarstvo, kazalište i glazbu te predstavljaju izabrani korpus tekstova posvećen umjetnosti, umjetniku i općenito stvaranju. U "Nepoznatom remek-djelu", slikarsko platno ima svoj život kao i slikar: ono otkriva dramu velikog umjetnika, učitelja i perfekcionista Frenhofera kojemu treba deset godina da završi sliku, a kad je pokaže prijateljima, oni u njoj vide samo mazariju. Paolo Gambara, unespokojeni skladatelj, kao Frenhofer traži apsolut posve zaslijepljen svojom mističkom vizijom glazbe, a kipar Sarrasine ludo se zaljubljuje u kastrata. Balzacovska scenografija ocrtava nemoguće ljubavi, neizrecive tajne u kojima se na poseban način vezuju erotičnost i estetičnost.
    
Honore de Balzac (1799. - 1850.), francuski pisac, tvorac modernog, realističnog romana. U dvadeset godina grozničavim je radom stvorio čitavu biblioteku knjiga. U stotinjak djela ocrtao je više od dvije tisuće likova iz svih društvenih slojeva. "Ljudska komedija" je opći naziv za romaneskno djelo ovog genijalnog pisca.`
  },
  {
    id: 3,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/mogucnost_otoka.jpg',
    title: 'Mogućnost otoka',
    slug: 'mogucnost-otoka',
    author: 'Michel Houellebecq',
    translation: 'Anja Jović',
    date: '12/2005.',
    info: '475 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '116,25 kn',
    fiftyOff: false,
    description: `Daniel1, lik uspješne osobe našeg doba, s bogatstvom od šest milijuna eura i s vilom u Španjolskoj, sa sedamnaest soba, priča nam svoju životnu priču koju će dvije tisuće godina poslije komentirati njegovi klonovi i neo-ljudi, Daniel24 i Daniel25.

Katkad odvratan i krajnje lucidan cinik koji ne preza ni pred čim, ali i zakinut čovjek u potrazi za ljubavlju. Neuspjeli brak s Isabelle i promašena veza s Esther, dvjema ljepoticama od kojih, kao da su izišle iz Almodovarova filma, "jedna ne voli dovoljno seks, a druga ljubav", vode ga do mističko-pozitivističke sekte elohimita koji kloniranjem ljudi postižu besmrtnost.
    
Tko od vas zaslužuje vječni život? – pita se Michel Houellebecq na početku i na kraju romana koji je zamišljen kao odiseja ljudske vrste u SF-sekvencama, ali i kao stvarno putovanje nakraj noći zapadnog čovječanstva. Spram današnjeg društva bez Boga i mitova, podložnom nihilizmu i ispraznosti, koje odbija ostarjeti i patiti, ono buduće što nas očekuje donosi odsutnost svake strasti, gubitak ljubavi i humora...
    
Michel Houellebecq (1958.) postigao je svjetsku slavu romanima "Širenje područja borbe", "Elementarne čestice" i "Platforma" (svi prevedeni na hrvatski), probudivši francusku književnost iz letargije i blažene samodopadnosti. Kao i njegova učitelja Balzaca, najviše ga zaokuplja presjek društva kroz pojedinačne svijesti, njihove ideje i sudbine.`
  },
  {
    id: 4,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tea_bencic.jpg',
    title: 'Um na mjesec putuje: Ogledi o suvremenoj hrvatskoj poeziji i prozi',
    slug: 'um-na-mjesec-putuje',
    author: 'Tea Benčić Rimay',
    translation: null,
    date: '12/2005.',
    info: '235 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `"Um na mjesec putuje", izvadak je iz pjesme "Ćuk" Tina Ujevića, ali i smjernica analitičkom pristupu poetičkim esejima kojima autorica uspostavlja vrijednosne kriterije najosjetljivijeg razdoblja hrvatske poezije, proze i esejistike.

Tea Benčić Rimay rođena je u Sisku 6. 12. 1956,; na Filozofskom fakultetu u Zagrebu diplomirala 1980. studijske grupe jugoslavenski jezici i književnost (kroatistika) i komparativnu književnost; magistrirala 1987. radom »Semantika i izvori filozofijske dimenzije u poeziji Slavka Mihalića«; doktorirala na istom fakultetu 1998. disertacijom »Pjesma u prozi«. Zaposlena je kao docent na Visokoj učiteljskoj školi u Petrinji (Hrvatski jezik, Uvod u književnost, Stilistika). Članica je PEN-a od 2001., a od 2003. Hrvatskog društva pisaca.
    
Do sad je objavila: "Zidovi i zvijezde" (Semantička suglasja Slavka Mihalića,1997.), "Pjesma u prozi" (1998.), "Čuvari književnog nasljeđa" (1999.), "Pjesme u prozoru" (2000.), "Reci mi kakav ti je svijet, reći ću ti kakav si pjesnik" (2002.), "Sipine kosti" (2003.), "I bude šuma" (mala studija poezije žena, 2005.), "Sipine osti" (2005.).
    
Priredila je (izbor i predgovor) knjigu pjesama Dobriše Cesarića (1997.), Slavka Mihalića (1999.), Pjesme u prozi Tina Ujevića (2001.), Sabrane pjesme Dore Pfanove (2001.), Izabrane pjesme: Nikole Milićevića (1998.), Dražena Katunarića (1999.), Romea Mihaljevića (2002.), Božice Jelušić (2002.), Zvonimira Mrkonjića (pogovor izabranim pjesmama "Maslina u čistopisu" 2004.; predgovor zbirci "Sonet sonetom" 2005.)`
  },
  {
    id: 5,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/ezra.jpg',
    title: 'Pisanski Cantosi',
    slug: 'pisanski-cantosi',
    author: 'Ezra Pound',
    translation: null,
    date: '12/2005.',
    info: '319 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '82,50 kn',
    fiftyOff: false,
    description: `Ezra Pound bio je osobiti posrednik među raznim jezicima, iskustvima, kulturama, narodima i umjetnicima. Stoga je i ovaj prijevod cjelokupnih "Pisanskih Cantosa" (koji pak tvore najvažniju zasebnu cjelinu u "Cantosima") neka vrsta posredovanja u obnovljenom valu svjetskog interesa i zanimanja za djela i život Ezre Pounda. To prije jer je cijeli niz hrvatskih pjesnika i književnika iz različitih generacija bio pod većim ili manjim utjecajem književnog djela Ezre Pounda, premda se vrlo čudnom može doimati činjenica što je i pored takvog i tolikog utjecaja na neke od najznačajnijih hrvatskih pjesnika druge polovice XX. stoljeća Pound vrlo malo prevođen na hrvatski jezik.

Jedini ozbiljniji prevoditeljski pristup Poundovu pjesničkom djelu javio se u Hrvatskoj potkraj šezdesetih i početkom sedamdesetih godina - kada je sam Pound već bio na životnom izdisaju (Pound je umro 1. studenog 1972. u osamdeset sedmoj godini života i pokopan na glavnom venecijanskom groblju, otočiću San Michele u dijelu za protestante.). U svakom slučaju, Poundov utjecaj na cjelokupnu svjetsku poeziju dvadesetoga stoljeća je golem - spomenimo samo utjecaj na američke pjesnike, primjerice »Black Mountain« koledža: Charlesa Olsona, Roberta Creelyja, Roberta Duncana, ili »Beat generacije«: Allena Ginsberga i Garyja Snydera, ili »Newyorške pjesničke škole«: Kennetha Kocha, Johna Ashberyja, Teda Berrigana itd.
    
Također, Pound je bio jedan od prvih preteča današnjih brojnih izučavatelja i prevoditelja dalekoistočnih književnosti i religija, kad je već početkom dvadesetog stoljeća svojim prijevodima i prilagodbama zapadnom svijetu dao naslutiti bogatstva stare kineske i japanske poezije i filozofije.
    
Vojo Šindolić`
  },
  {
    id: 6,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/gotovac.jpg',
    title: 'Posude s vatrom: izabrane pjesme',
    slug: 'posude-s-vatrom-izabrane-pjesme',
    author: 'Vlado Gotovac',
    translation: null,
    date: '12/2005.',
    info: '184 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '82,50 kn',
    fiftyOff: false,
    description: `Teško je povjerovati da se o pjesniku, filozofu, polemičaru, političaru i etičaru Vladi Gotovcu i danas u Hrvatskoj ipak najradije govori - šutnjom. Neke druge vrijednosti, neki novi kriteriji i neki novi ljudi prevladali su u prostorima hrvatske kulture, premda čak ni to ne bi smjelo uvjetovati odbacivanje jednog snažnog individualnog i bogatog nasljeđa, beskompromisno hrabre osobnosti koju je čistoćom i etičnošću, poštenim i lucidnim načinom života pokazivao, ispisivao, izgovarao, uvijek svjestan Matejeva upozorenja koje često citira: tvoja će te riječ opravdati i tvoja će te riječ osuditi. Znajući da će izazvati nemire, Gotovac nije mogao ne izricati ono što je vidio i osjećao, poznatim etičkim kriticizmom, britkim i oštrim, uvijek sjajno izgovorenim. On duboko i iskreno vjeruje u djelo, u odgovornost riječi, u moć stvaranja, u poeziju kao proročanstvo, evanđelje i poziv.

Otvoriti poetiku Vlade Gotovca, otkriti njene dubine i strasti, emocije i umnosti, u suštini znači tek upoznati snagu jedne kompleksne, a tako čiste, jednostavne i jedinstvene osobnosti koja je obilježila cjelokupnu hrvatsku kulturu dvadesetog stoljeća. Rastvaranje i uspostavljanje takve poetike traži poznavanje cjelokupnog opusa Vlade Gotovca, što se ne odnosi samo na desetak pjesničkih zbirki i razasutih rukopisa, već i na njegove poetičke eseje, filozofske rasprave i polemike, zapise o slikarstvu i umjetnosti, fragmente o svijetu u kojem živimo, kao i o onome u kakvome bismo trebali živjeti.
    
Jer sve što je Gotovac napisao ili izgovorio prožeto je sjenama lirike: u njegovoj esejistici izbija duša poezije, a u samoj poeziji on je u pismu filozofa i esejista. Gotovac je filozoficirao emocije, emocionalizirao filozofske pojmove (Puhovski), čitavim svojim djelom (i životom), koje možemo eliptično nazvati duhovnom biografijom - Gotovac ispisuje kompleksno štivo koje mnogi nisu razumijeli, možda upravo zbog njegove čistoće, zbog predanosti, jednostavnosti i dakako zbog žrtve, zbog ozbiljnosti i iskrenosti kojom je pristupao svemu oko sebe i u sebi. A to jest najteže, ne samo činiti, nego i drugima shvatiti što on to čini! Nazvati takav način idealizmom, nije dostatno, jer pjesnik Vlado Gotovac nije živio u nekoj patetičnoj i udaljenoj imaginaciji, dapače, vrlo je čvrsto osjećao tlo pod nogama, bio i te kako svjestan vremena i prostora svoga prebivanja.
    
Kako je sve u životu tumačio na svoj, osebujan i originalan način, tako i prema poeziji uspostavlja poseban odnos, možda početno odrediv kao ogromna i iskrena ljubav, jer poezija je za njega sam jezik, izrijek, komunikacija sa sobom i drugima, određivanje odnosa prema postojanju i slobodi.
    
Tea Benčić Rimay`
  },
  {
    id: 7,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/kerouac.jpg',
    title: 'Satori u Parizu',
    slug: 'satori-u-parizu',
    author: 'Jack Kerouac',
    translation: 'Vojo Šindolić',
    date: '10/2005.',
    info: '110 str. / meki uvez',
    price: '85,00 kn',
    discountedPrice: '42,50 kn',
    fiftyOff: true,
    description: `«Satori u Parizu» je rezultat putovanja u Francusku koje je Kerouac poduzeo u proljeće 1965. godine s namjerom da istraži svoje podrijetlo. Planirao je posjetiti Bretanju, Cornwall, Amsterdam i Njemačku. Međutim, već nakon tjedan dana pijančevanja i bludničenja u Parizu, potrošio je svu svoju ušteđevinu i morao se vratiti na Floridu. Nakon povratka je, budući da mu je prijatelj i sudrug u piću bio odsutan, sedam uzastopnih dana i noći proveo prisjećajući se i bilježeći svoju priču. Rezultat toga je ovaj kratki i osebujan roman.

«Satori u Parizu» zamišljen je kao pripovijest u kojoj se nižu avanture kanadskog Francuza koji se raspituje o svom podrijetlu i istražuje svoje korijene. U zbilji, to je suvremeni ekvivalent poemi Sir Gawain and the Green Knight, sjajnoj srednjovjekovnoj viteškoj poemi koju je Kerouac pročitao godinu dana ranije. Vitez okruglog stola, Sir Gawain, postaje žrtvom zbog svog ponosa, ali ga od smrti spašava Kristova žrtva. Zbiljska tema ove pripovijesti je «potpuna nesposobnost najsjajnijeg od Arthurovih viteza da pomogne samom sebi».
    
Naslov romana koji u sebi uključuje zen-budistički izraz za prosvjetljenje, «satori», samo još više naglašava univerzalnost Kerouacova religioznog iskustva. Kerouac je u potrazi za Graalom, kojeg nikako ne nalazi, i ne može naći, ali umjesto toga nailazi na ljubaznost, dobrotu i razumijevanje pojedinih ljudi, a njegova percepcija njihove dobrote za njega predstavlja «satori». Tako se ispostavlja da pripovjedač, čiji je glavni cilj pronaći pisane dokumente o korijenima svoje prarodbine, na koncu shvaća da pripada bratstvu svih ljudi, bratstvu ljudi među kojima svačiji život predstavlja nešto neprocjenjivo.
    
Kerouacov pomak od budizma natrag prema kršćanstvu najočitije se ogleda u njegovom inzistiranju da je život stvaran. Ako život nije san, onda postoji mogućnost da se čovjek približi drugim ljudima - komunicirajući s njima i pomažući im.
    
«Satori u Parizu» je pretposljednje djelo koje je Kerouac uspio objaviti za svoga života. Posve narušenog zdravlja, 1968. objavio je svoje posljednje remek-djelo, roman «Vanity of Duluoz». Samo nekoliko mjeseci kasnije, 21. listopada 1969., poslije 26 transfuzija krvi, Jean Louis Kerouac umro je od unutrašnjeg krvarenja jednjaka, čestog uzroka smrti kod kroničnih pijanaca.`
  },
  {
    id: 8,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/naopako.jpg',
    title: 'Naopako',
    slug: 'naopako',
    author: 'Joris-Karl Huysmans',
    translation: 'Ana Buljan',
    date: '6/2005.',
    info: '292 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '62,50 kn',
    fiftyOff: true,
    description: `Ovaj se roman smatra biblijom dekadencije i najstrašnijim udarcem naturalizmu u književnosti, kako je ovo djelo ocijenio Zola. Miješajući priču, pjesmu u prozi, stranice povijesti i kritike, Huysmans obducira književnim skalpelom već gnjilo francusko društvo toga vremena.

"Naopako" je primjer sjajnog anti-romana koji uvodi tip esteta u literaturu, Jeana Floressasa des Esseintesa, posljednjeg izdanka aristokratskog stabla i predstavnika oronule civilizacije, koji je odlučio povući se iz svijeta i prepustiti tankoćutno-morbidnim strastima. Delikatna zdravlja, a pun novca, taj redovnik dekadencije pokušava nasamariti dosadu oživljenim razvratom, podražiti čula svakovrsnim pretjerivanjima. Njegova je samoća u Fontenayu fin-de-sieclevska neuroza, zatvoren svijet nastanjen samo dragocjenim predmetima i suptilnim senzacijama: parfemima, draguljima, rijetkim cvijećem, čitanjem latinske književnosti iz doba propadanja, potragom za baudelaireovskim korespondencijama između glazbe, slike i ukusa. Uživanje u artificijelnom, nekoć i sad, ima duboki korijen u razbuđivanju mašte. Ovo djelo tako ispunjava i stari Flaubertov san: napisati knjigu koja će se održati zahvaljujući snazi njezina stila.
    
Joris-Karl Huysmans (1848.-1907.) francuski je romanopisac nizozemskog podrijetla. Započeo je romansijersku karijeru u okviru naturalističke škole (roman "Sestre Vatard" posvećen je Zoli) da bi ga njegov intimni obrat te istančana estetska intuicija odvukli u ruho mističnog simbolizma (romani "Katedrala", "Tamo"). Huysmans je objavio i niz uspjelih kritika posvećenih svojedobno osporavanim umjetnicima Baudelaireu, Mallarmeu, Ropsu, Cezanneu...`
  },
  {
    id: 9,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/shwob.jpg',
    title: 'Imaginarni životopisi',
    slug: 'imaginarni-zivotopisi',
    author: 'Marcel Schwob',
    translation: 'Ana Buljan',
    date: '4/2005.',
    info: '132 str. / meki uvez',
    price: '75,00 kn',
    discountedPrice: '56,25 kn',
    fiftyOff: false,
    description: `"Imaginarni životopisi" jedna je od unikatnih knjiga s konca devetnaestog stoljeća. U njoj se nalaze dvadeset dva portreta zasebnih ljudskih sudbina kroz različite epohe koje počinju s Empedoklom, a završavaju s ubojicama Burkeom i Hareom. Suptilno miješajući žanrove, povijest i fikciju, novelu i pjesmu u prozi, kritički esej i sanjariju, priču i kroniku u cilju pronalaska forme koja će pripasti samo njemu, Marcel Schwob dosegao je ovim djelom svoje vrhunce.

Schwobov pokušaj imaginarne rekonstrukcije zbilje i često ironijskog zaokretanja erudicije završava u sintezi realizma i fantastičnog simbolizma. Knjiga je znatno utjecala na Apollinairea, Bretona, Leirisa, Artauda. Borges, koji je čitao imaginarne životopise s dvadeset godina, tek će se kasnije prepoznati kao Schwobov učenik.

Marcel Schwob (1867.-1905.), tajnoviti francuski pisac, jedna je od velikih figura pariškog književnog života posljednjih decenija devetnaestog stoljeća. Potekao od vrlo kultivirane židovske buržoazije, taj zaljubljenik u djelo Villona i Stevensona bio je zaboravljen gotovo cijelo stoljeće da bi se tek posljednjih godina dogodio veliki "povratak k Schwobu" s impozantnim brojem ponovljenih izdanja i kritičkog interesa koji ne jenjava. Važnija djela: "Dvostruko srce", "Knjiga o Monelle", "Kralj sa zlatnom maskom...".`
  },
  {
    id: 10,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/ducani_cimetneboje.jpg',
    title: 'Dućani cimetne boje',
    slug: 'ducani-cimetne-boje',
    author: 'Bruno Schulz',
    translation: 'Dalibor Blažina',
    date: '4/2005.',
    info: '160 str. / meki uvez',
    price: '95,00 kn',
    discountedPrice: '71,25 kn',
    fiftyOff: false,
    description: `"Dućani cimetne boje" (Sklepy cynamonowe, 1934.), prva, autobiografska zbirka pripovijedaka poljskog pisca Brune Schulza, smatra se jednim od najvećih dometa poljske i europske proze između dva svjetska rata, pa i 20. stoljeća općenito.

U "Dućanima cimetne boje", kako navodi sam autor, "pokušava se rekonstruirati povijest jedne obitelji, jedne kuće u provinciji - ne od njenih realnih elemenata, događaja, karaktera ili istinskih sudbina, već istražujući mitski sadržaj iznad njih, konačni smisao te povijesti«. U prvom planu te »knjige djetinjstva«, doma i grada, lik je oca, realno - trgovca suknom, no mitski - «herezijarha» i «demijurga» svijeta nastalog iz kiča. Schulzov svijet je groteska, no nimalo mračna, kafkijanska, već otvorena i vedra, kao što je vedar čin iluminacije koji se priziva s praga dječačke inicijacije u svijet spoznaje odraslih.
    
Bruno Schulz (1892.-1942.), poljski pisac židovskog podrijetla i profesor crtanja, sin skromnih trgovaca, skončao je svoje dane tako što ga je jedan nacist ustrijelio na ulici. Uspjeh "Dućana cimetne boje" potvrdila je i druga Schulzova zbirka pripovijedaka, "Sanatorij pod klepsidrom" (Sanatorium pod klepsydr, 1937.), s kojima je znatno utjecao na brojne svjetske pisce (spomenimo samo Danila Kiša), kao i na generaciju hrvatskih «borhesovaca».`
  },
  {
    id: 11,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/new_age.jpg',
    title: 'Ideologija New agea',
    slug: 'ideologija-new-agea',
    author: 'Michel Lacroix',
    translation: null,
    date: '11/2006.',
    info: '115 str. / meki uvez',
    price: '49,00 kn',
    discountedPrice: '36,75 kn',
    fiftyOff: false,
    description: `"Dvadeset prvo stoljeće bit će duhovno ili ga neće biti", izjavio je svojedobno Andre Malraux. Poslanje New agea, njegova budućnost sažeta je u ovom proročanstvu. Međutim, u "Ideologiji New agea" Michel Lacroix odlučio je kritički istražiti globalnu, razgranatu, sveobuhvatnu misao New agea, o kojoj se mnogo i ne zna na teorijskom planu, a da istodobno posvuda zapažamo njezinu prisutnost u mnogim sferama svakodnevnog života.

Lacroix joj suprotstavlja vrlo oštroumnu sociološku i filozofsku analizu pokazujući sve opasnosti koje ona nosi glede pojedinca i društva. Iza privlačnog lica New agea skriva se, prema autoru, totalitarna ideologija koja dovodi u pitanje temelje kulture te politička, demokratska načela Zapada.
    
Po formaciji profesor filozofije, Michel Lacroix je predavač na Sveučilištu u Evryju i istraživač u CNRS-u. Objavio je poznate knjige: «Kult emocija», «Zlo», «O pristojnosti», «Totalitarna spiritualnost», «New age i sekte», «Načelo Noe».`
  },
  {
    id: 12,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tea.jpg',
    title: 'Danijel',
    slug: 'danijel',
    author: 'Tea Benčić Rimay',
    translation: null,
    date: '5/2007. ',
    info: '85 str. / meki uvez',
    price: '70,00 kn',
    discountedPrice: '52,50 kn',
    fiftyOff: false,
    description: `Zbirka pjesama u prozi "Danijel" sadržava niz malih pjesničkih slika, što u gotovo stripovskom nizu portretiraju jednu fiktivnu osobu – Danijela. Prvotno se čini da je Daniel neki Kaspar Hauser koji otkriva svoju tragikomičnu svakodnevicu i sebe u njoj, te beskorisne okolnosti svog života, ili pak neki "Švejk", što se skriva i prikriva u vlastitim paradoksima, da bi mogao mirno živjeti na ovom svijetu. Ali tko god da taj (imaginarni) Danijel jest, živ je i dojmljiv, poput portreta, gotovo stvaran.

Danijel je junak koji vodi svog autora, onako kako on hoće i gdje je njemu drago. Pažljivijim čitanjem malih, gotovo anegdotalnih fragmenata uočava se dublje djelovanje pozadine onog što bi u svojoj srži mogao biti Danijel, odnosno njegova egzistencijalna bit. Njegova autorica, intelektualnom pjesničkom alkemijom uspjela je Danijela oblikovati u estetski izraz svih onih općih egzistencijalnih peripetija kojima podliježu svi ljudi, lirskim i dramatičnim, naoko presudnim, intimno prevažnima.
    
Prozno-pjesnički portret Danijela, njegove fiktivne osobnosti, bolje od bilo koje druge literarne forme pogađa bit osobnosti, njenu paradoksalnost. Čitajući prozno-pjesničke fragmente "Danijela" ulazimo u onu alkemijsku stvarnost koja se svodi na to da što pozornije i ustrajnije promatramo život (u ovom slučaju Danijelov,) to bolje shvaćamo da stvarnost ne odgovara mišljenju koje svi imamo o njoj.
    
***
    
Tea Benčić Rimay (1956.-2009.) dr.doc. godinama je pratila suvremenu hrvatsku poeziju recenzijama, kritikama i esejima u hrvatskim književnim časopisima: Forum (HAZU), Književna republika (HDP), Europski glasnik, The Bridge, Relations, Vijenac (Matica hrvatska), Tvrđa, Slobodna Dalmacija; te je surađivala s programima za kulturu Radio Zagreba (Prvi program HR-a: Kutija slova, Treći program: Poezija naglas). Do sada je objavila devet knjiga – eseja, studija, književno-kritičkih tekstova: Zidovi i zvijezde (Semantička suglasja Slavka Mihalića), HSLN, Zagreb 1997., Pjesma u prozi (poetika i primjeri); Tipex, Zagreb 1998., Čuvari književnog nasljeđa, Tipex, Zagreb 1999., Pjesme u prozoru, DHK, Zagreb 2000., Reci mi kakav ti je svijet, reći ću ti kakav si pjesnik, Tipex, Zagreb 2002., Sipine kosti, Ceres, Zagreb 2003., Um na mjesec putuje (Litteris 2005.), Sipine osti (Jutro poezije, 2005.), I bude šuma (mala studija poezije žena), Altagama, Zagreb 2005., Od gramatike i lingvistike do poetike i stilistike, Visoka učiteljska škola u Petrinji, 2005.`
  },
  {
    id: 13,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/schulz.jpg',
    title: 'Sanatorij pod klepsidrom',
    slug: 'sanatorij-pod-klepsidrom',
    author: 'Bruno Schulz',
    translation: 'Dalibor Blažina',
    date: '6/2007.',
    info: '272 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `"Sanatorij pod klepsidrom" druga je zbirka pripovijedaka poljskog pisca Brune Schulza, objavljena 1937. godine, dakle tri godine nakon velikog uspjeha njegovih "Dućana cimetne boje", koji se i danas smatraju jednim od najznačajnijih djela europske proze 20. stoljeća.

Zbirka je sastavljena od 13 pripovjedaka od kojih je većina, kako se pretpostavlja, nastala dvadesetih godina, ali su objavljene u zajedničkoj zbirci koja je nastala najvjerojatnije kao zamjena za nedovršeni (i izgubljeni roman) Mesija.
    
"Sanatorij pod klepsidrom" bitno proširuje dimenzije šulcovskog svijeta, obogaćuje ga pojmom Knjige (koji u sebi nosi mitske i mitopoetičke matrice), proširuje drugim dimenzijama fabularne linije, unosi u nju vrlo važnu "ajnštajnovsku", fantastičnu dimenziju vremena te najbolje daje naslutiti u kojem je smjeru pisac namjeravao razvijati svoj književni diskurs.
    
Zbirka nosi sve značajke obično-neobičnog, blago grotesknog svijeta Schulzove proze na razmeđi sacruma i profanuma, mitskog i svakodnevnog te je važno djelo u kanonu europske književnosti 20. stoljeća – stoljeća koje je tako snažno ispreplelo mitologiju privatnog i javnog.

Bruno Schulz (1892.-1942.), poljski pisac židovskog podrijetla i profesor crtanja, sin skromnih trgovaca, skončao je svoje dane tako što ga je jedan nacist ustrijelio na ulici. Uspjeh njegova književnog opusa znatno je utjecao na brojne svjetske pisce (spomenimo samo Danila Kiša), kao i na generaciju hrvatskih "borhesovaca".`
  },
  {
    id: 14,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/lanzarote.jpg',
    title: 'Lanzarote i drugi tekstovi',
    slug: 'lanzarote-i-drugi-tekstovi',
    author: 'Michel Houellebecq',
    translation: null,
    date: '6/2007.',
    info: '260 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '62,50 kn',
    fiftyOff: true,
    description: `Sve počinje slučajnim i bezazlenim odabirom Lanzarotea kao turističkog odredišta da bi slijedom događaja ono postalo simboličko mjesto susreta tijela i vječnosti. Lanzarote je duža pripovijest ili milenaristički kratki roman nazvan po vulkanskom otoku na Kanarima koji predstavlja križište sudbina i enigmatičnih ljubavnih iskustava. Čak i kad se Michel Houellebecq trudi napisati čisto narativni roman, ne uspijeva ga ostaviti bez metafizičkog začina koji će motivirati čitatelja. "Na ovo će, rekoh sebi, nalikovati svijet nakon što propadne", izražava Houellebecq svoju ljubav prema opustošenom krajoliku Lanzarotea koji predstavlja začetak temeljne inspiracije za teme koje će poslije razviti u "Mogućnosti otoka" (ne slučajno, istoimeni film snimljen je upravo na Lanzaroteu).

No, veći dio ove knjige čine eseji u kojima se Houellebecq bavi romanom, poezijom, informatikom, reklamama, liberalizmom, nijemim kazalištem, suvremenom umjetnošću, arhitekturom, kao i književnim stvaralaštvom koje podvrgava svojoj karakterističnoj i razornoj kritici. Iz ovog troknjižja razvidno je da Houellebecqova teorijska razmišljanja stvaraju osnovnu građu iz koje se poslije, čudnovatom alkemijom, inkubiraju njegovi romani. "Književna, umjetnička, glazbena kritika, sve bi se u biti moralo pretvoriti u jedinstvenu knjigu koju ćemo pisati do konca života; to mi se čini kao razuman način života, sretan i čak poželjan u praksi", opisuje Houellebecq svoj književni postupak. 

Michel Houellebecq, rođen 1958., francuski romanopisac, pjesnik i esejist svjetskog ugleda. Nakon objavljivanja romana "Širenje područja borbe", "Elementarne čestice", "Platforme" te "Mogućnosti otoka", za koji je umalo dobio Goncourtovu nagradu, postaje predvodnikom nove generacije pisaca. Snažan utjecaj ovoga autora osjeća se i u suvremenoj hrvatskoj književnosti, gdje još nisu poznata njegova ranija prozna, pjesnička i esejistička djela.`
  },
  {
    id: 15,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/dehumanizacija.jpg',
    title: 'Dehumanizacija umjetnosti i drugi eseji',
    slug: 'dehumanizacija-umjetnosti-i-drugi-eseji',
    author: 'Jose Ortega y Gasset',
    translation: 'Marko Grčić, Dunja Frankol i Tanja Tarbuk',
    date: '11/2007.',
    info: '135 str. / meki uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `Kao što je «Pobuna masa» vizionarsko djelo na polju sociologije i filozofije, gdje Ortega y Gasset najavljuje historijsko rođenje čovjeka-mase, tako je njegova «Dehumanizacija umjetnosti» nezaobilazna knjiga za razumijevanje moderne umjetnosti jer obrazlaže čovjekovu neprepoznatljivost na slikarskim platnima dvadesetog stoljeća.

José Ortega y Gasset (1883.-1955.), jedan je od najznačajnijih španjolskih i europskih filozofa i esejista. U vrijeme Francove vladavine nalazi se u pariškom egzilu, a 1946. vraća se u domovinu. Španjolska izdavačka kuća Revista de Ocddente izdala mu je «Sabrana djela» u dvanaest tomova. Prevođen je na sve svjetske jezike.`
  },
  {
    id: 16,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/pjesme_houellebecq.jpg',
    title: 'Sabrane pjesme',
    slug: 'sabrane-pjesme',
    author: 'Michel Houellebecq',
    translation: 'Maja Zorica',
    date: '2/2008.',
    info: '319 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '62,50 kn',
    fiftyOff: true,
    description: `Ostajući vjeran poeziji kao svojem iskonu, Michel Houellebecq započeo je svoj književni put i afirmirao se kao pjesnik prije nego što je postao planetarno poznati romanopisac. Svježina njegova stila i osobnog rukopisa, prisutna u romanima, i te kako je vidljiva u njegovoj poeziji. On si daje slobodu kao rijetko koji pjesnik da opjevava sve što mu padne na pamet, kratke trenutke života, bez kontinuiteta, koji postaju trenuci istine u njegovoj poeziji, da na scenu postavi suvremenost, razoreni urbani okoliš, i svoje 'razgolićeno srce'.

Kao 'ukleti' pjesnik, Michel Houellebecq je s iskonom na 'ti', premda je taj iskon samo temelj užasa svakodnevne egzistencije, neprobavljiv, razoren i smiješan; u njemu se zrcali kompromitirano čovječanstvo, atrofirana komunikacija, taština liberalne razmjene a, iznutra određuju neizbrisivi ožiljci ljubavne uskraćenosti.
    
U nizu svojih pariških i ne samo pariških sličica, Houellebecq je nastavio baudelaireovsku poetiku traganja za spleenom bez ideala, no dok Baudelaire preobražava užas u zraku svjetlosti usred rembrandtovskog chiaroscura, Houellebecq slika vlastite užase u apsolutnoj tami. Zato je intenzitet njegove patnje utoliko potresniji. 'Cvijeće zla' tadašnjeg francuskog društva postaje u Houellebecqovoj inačici 'Cvijeće bola' koju njegova lirika kupi s poda samotnih soba ili prljavih ulica.
    
"Ove sam godine znatno ostario. Popušio osam tisuća cigareta. Postoji valjda način da živim nešto što ne nalazim u knjigama. Nešto što me nisu naučili. Ne poštujem čovjeka; svejedno, zavidim mu." - kaže Houellebecq u jednom od svojih stihova koji odražavaju paradoksalnost jedne apartne duše.
    
Ako se za pjesnika može reći da je lucidan i iskren do granica samopoštovanja, onda je to svakako Michel Houellebecq.
    
***
    
Michel Houellebecq, rođen 1958., francuski pjesnik, esejist, romanopisac svjetskog ugleda. Nakon objavljivanja romana «Širenje područja borbe», «Elementarne čestice» te «Platforma», postaje predvodnikom nove generacije pisaca. Njegov posljednji roman «Mogućnost otoka» zamalo je dobio 'Goncourtovu nagradu'. Njegov snažan utjecaj osjeća se i u suvremenoj hrvatskoj literaturi, gdje još nije poznata njegova poezija koja se u cjelovitom vidu sada nudi čitateljima.`
  },
  {
    id: 17,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/pustinje.jpg',
    title: 'Pustinje',
    slug: 'pustinje',
    author: 'Rade Jarak',
    translation: null,
    date: '5/2008.',
    info: '170 str. / meki uvez',
    price: '105,00 kn',
    discountedPrice: '78,75 kn',
    fiftyOff: false,
    description: `Peti roman dubrovačkog pisca Rade Jarka potraga je za lirikom jednog davnog djetinjstva, izgubljenog vremena i grada.
"S jedne strane u 'Pustinjama', u kojima često odzvanja neki neskriveni prizvuk Danila Kiša ili Brune Schulza, čitamo fragmente o dječjim strahovima, prvim pročitanim knjigama, odlascima na Lokrum ili kupanju na Banjama, prvim ljubavnim i erotskim iskustvima, a s druge sva su ta sentimentalna putovanja-slike iz prošlosti, provučene kroz elegične tonove prolaznosti (nekada jednog ljeta, nekada i čitavog života) i svijesti o tome kako više ništa nije kao prije.
    
Jarkova proza sva je od slika (treba li još uopće spominjati slikarsko oko karakteristično za cjelokupnu njegovu prozu!) i zvukova, u njoj se pronalaze eksplicitna ili implicitna zrnca autorove poetike, a od slika koje se «ljušte, pucaju i nestaju» nastaje roman u kojem se čitaju i prava djetinja ushićenja i odrasla tuga zbog izgubljenog doba, svedenog na ostatke koje valja prikupiti."
    
(iz kritike Jagne Pogačnik)`
  },
  {
    id: 18,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/talmud.jpg',
    title: 'Talmud',
    slug: 'talmud',
    author: 'Više autora',
    translation: 'Eugen Werber',
    date: '12/2008.',
    info: '628 str. / meki uvez',
    price: '390,00 kn',
    discountedPrice: '292,50 kn',
    fiftyOff: false,
    description: `Talmud je bio i ostao riznica znanja koja potječe iz usmene židovske tradicije i stoljetnih rasprava učenih i mudrih rabina iz kojih i danas možemo učiti o različitim područjima ljudskog života, primjerice pravu, moralu, etici, odnosima u obitelji i u poslovnom svijetu. I te vrijednosti su nepromjenjive, jer im je izvor u najvišem autoritetu, nebeskom, a ne privremenom i zemaljskom.

Upravo zbog svojeg sasvim iznimnog značenja Židovi Talmud, baš kao i Toru, nazivaju svetom knjigom. Pritom je potrebno istaknuti da se kod proučavanja Talmuda uvijek postavljalo pitanje zašto, jer su i studenti kao i rabini i njihovi duhovni učitelji dobro poznavali samu tradiciju. I tako su zapravo židovski zakoni bih stalno tumačeni kroz usmenu tradiciju u neposrednom dodiru sa životom i svim predvidivim i nepredvidivim situacijama. Slijedom toga u usmenoj židovskoj predaji, odnosno Talmudu imamo oko pedeset tisuća tumačenja Pisane Tore koja ima 613 zakona.
    
Misao se u Talmudu u pravilu izražava s malo riječi, ali zato s mnogo nijansi vodeći ne samo židovski narod nego i cijelu nama poznatu i blisku civilizaciju iz prošlosti u budućnost, jer u tom neizmjernom talmudskom moru misli i tumačenja, čiji je tek manji dio objavljen u ovom izdanju, općeljudsko je iskustvo Boga, čovjeka, prirode, odnosa u društvu.
    
Životna istina izrečena je snažno i jednostavno s namjerom da čovjeka pouči i uvede ga u životnu mudrost čiji su temelji prožeti vjerom u Jednog, ali i vjerom u čovjekove mogućnosti da svijet materijalnog preobražava u duhovni svijet pa zato Talmud možemo nazvati i praktičnom teologijom koja uči da blagoslova u svijetu ima samo ih treba znati zaslužiti. (Jasminka Domaš)
    
Posljednji put Talmud je u Hrvatskoj objavljen 1982. godine. Nakladnička kuća Litteris sa svojim reprint izdanjem hrvatskoj kulturnoj javnosti sada vraća to iznimno vrijedno djelo s izborom i prijevodom tekstova s hebrejskog i aramejskog koji je prije puno godina učinio jedan od najvećih poznavatelja judaizma na području naše regije, Eugen Werber, koji, nažalost, više nije među živima.`
  },
  {
    id: 19,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/lude_djevice.jpg',
    title: 'Lude i mudre djevice:Antologija pjesama u prozi od Ujevića do današnjih dana',
    slug: 'lude-i-mudre-djevice',
    author: 'Tea Benčić Rimay',
    translation: null,
    date: '1/2009.',
    info: '322 str. / tvrdi uvez',
    price: '225,00 kn',
    discountedPrice: '168,75 kn',
    fiftyOff: false,
    description: `Hrvatsko pjesništvo dvadesetog stoljeća doživljavalo je različite teorijske i metodološke pristupe, razvrstavanja, antologiziranja, analiziranja, tumačenja i vrednovanja. Pokazalo se kako je izdvajanje pravih vrijednosti uvijek podložno vremenu, književnoj povijesti koja nastoji sačuvati i zabilježiti umjetnički nesporna djela u širem književnom kontekstu, baš kao i književnoj teoriji koja svojom klasifikacijom književnih rodova i vrsta bilježi važne promjene, ponekad u nas ne i sasvim uočljive i dovoljno naglašene.

Stoga je upravo neophodno proučavati hrvatsku književnost u europskom kontekstu, ne samo kao bitnom orijentiru za naše prilike, već i zbog mogućnosti usporedbe koja će u svakom slučaju pridonijeti sustavnijoj povijesti, teoriji i kritici. Komparacijom s europskom i svjetskom književnom scenom, nekim neočekivanim i naglim promjenama, jednostavnije je i u hrvatskoj poeziji odvajati trivijalno i trendovsko od literarnog i vrijednog, uočiti neke nelogične promjene kriterija, neujednačena vrednovanja, a posebno posljednjeg desetljeća sagledati svojevrsno ponižavanje i omalovažavanje jedinstvenoga roda koji je oduvijek postavljao najviše zahtjeve samom jeziku, njegovoj ljepoti i čistoći, bogatstvu i slojevitosti... (Tea Benčić Rimay)
    
Ova antologija nudi izbor najkvalitetnije poezije tridesetero hrvatskih pjesnikinja i pjesnika (Tin Ujević, Dora Pfanova, Nikola Šop, Jure Kaštelan, Vesna Parun, Slavko Mihalić, Vlado Gotovac, Vesna Krmpotić, Danijel Dragojević, Marija Čudina, Zvonimir Mrkonjić, Igor Zidić, Nikica Petrak, Tonko Maroević, Ljerka Mifka, Luko Paljetak, Andriana Škunca, Jozefina Dautbegović, Gordana Benić, Dražen Katunarić, Anka Žagar, Hrvoje Pejaković i Ana Brnadić), te poseban pristup poetici svakog pojedinačno, uz obavezne biografije i fotografije.`
  },
  {
    id: 20,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/hortenzije.jpg',
    title: 'Hortenzije',
    slug: 'hortenzije',
    author: 'Felisberto Hernandez',
    translation: 'Tanja Tarbuk',
    date: '12/2008.',
    info: '217 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '75,50 kn',
    fiftyOff: true,
    description: `"Hortenzije" otkrivaju zanimljive slojeve dvostrukosti, perverzije, paranoje, i puta u ludilo. Hernandezov roman čita se kao "luda" modernistička groteska. Na posljetku, pokazala se ništa više "luđom" od Hernandezova bračnog života" (Dragan Jurak).

Urugvajac Felisberto Hernández (1902.-1964.), rođen u Montevideu, pripovjedač ¡ pijanist, jedan je od najvećih i najoriginalnijih latinoameričkih pisaca. Zbog njegova utjecaja na Garciju Marquesa, Cortásara, Calvina, smatra se ocem magičnog realizma. Njegove bizarne priče prožete humorom, fantazmagoričnim zapletima s bezbroj rukavaca nalikuju muzičkim improvizacijama i šetnje su budnog sanjara koji nas podučava apsurdu ljudske egzistencije.
    
Kratki roman "Hortenzije" Felisberto je posvetio Mariji Luisi de las Heras, svojoj trećoj supruzi koju je upoznao u Parizu. U romanu glavni lik vodi dvostruki život. Uz suprugu Mariju, tu je i prijateljica Luisa. No trokut nije tako jednostavan. Uz Mariju tu je i Hortenzija, lutka nalik Mariji s kojom supružnici žive, dijele krevet i svoje mračne strasti...
    
I u "Hortenzijama", kao i u kasnijem "Dnevniku jednog besramnika" Felisberto propituje temu jastva, pomalo nalik Pessoi, koji se umnažao u svoje mnogobrojne osobe, kao što Felisberto traži u dijelovima svoga tijela koje je prozvao "besramnikom" i za koje smatra da nije njegovo.
    
"Jedne je noći autor ovoga djela otkrio da njegovo tijelo, koje naziva »besramnikom«, zapravo nije njegovo, i da njegova glava, koju naziva »ona«, vodi svoj zasebni život, jer je gotovo uvijek puna tuđih misli i uglavnom u dosluhu s ovim besramnikom kao i s mnogima drugima.
    
Otada pisac traži svoje istinsko ja, pišući o svojim pustolovinama."`
  },
  {
    id: 21,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/nesto_kao_fles.jpg',
    title: 'Nešto kao fleš',
    slug: 'nesto-kao-fles',
    author: 'Božidar Alajbegović',
    translation: null,
    date: '5/2009.',
    info: '303 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Knjiga "Nešto kao fleš" riječkog književnog kritičara Božidara Alajbegovića na 303 stranice donosi 70 kritika proznih knjiga domaćih, generacijski i poetički vrlo raznolikih autora/ica.

Radi se o djelima objavljenim između 2002. i 2009. godine pa knjiga predstavlja svojevrstan književnokritički pregled stanja na domaćoj proznoj sceni u zadnjih nekoliko godina.
    
Sve su kritike prethodno bile objavljene u različitim hrvatskim medijima, tiskanim i elektronskim (časopisi Vijenac, Tema, Nova Istra, Svjetlo, Književna Rijeka, emisija Bibliovizor trećeg programa Hrvatskog radija, Knjigomat, internetski portali Lupiga.com i Kupus.net itd.).
    
Na ovitku naslovnice knjige nalazi se citat iz Štulićeve pjesme "Tko to tamo pjeva" a koji glasi : "Raspolagati tuđom mukom nije mala zajebancija... ". Autor je citat odabrao zato što se na neki način odnosi i na književnu, odnosno bilo koju umjetničku kritiku, i sugerira odgovornost koju bi kritičar trebao osjećati prema onome što kaže, odnosno napiše o tuđem radu. 

"Među pionirima internetske popularizacije knjige u nas bio je upravo Božidar Alajbegović koji je sustavno i predano od 2000. godine objavljivao kritike na specijaliziranim internetskim stranicama, sudjelovao u njihovu nastanku i osmišljavanju. Na posljetku je pokrenuo i vlastiti blog Knjiški moljac kao referentno internetsko mjesto gdje ostvaruje svoje obećanje i donosi recenzije relevantnih novih naslova, polemike, vjestice, korisne i značajne linkove, zanimljivosti.
    
Alajbegović je pomno iščitao većinu tsunamijskog vala domaće književne produkcije, nastojeći odvojiti žito od kukolja. Svi mi koji se "bavimo" knjigom vrlo dobro znamo koliko je važna recepcija nekog novog naslova ili novog autora, koliko je katkad za prodor u publiku presudno nekoliko rečenica iz kakve recenzije, pa i to što znači imati referencu nakon nekoliko godina – referencu koju je danas važno imati baš na internetu – kamo će svi prvo pogledati.
    
Upravo stoga odabrani tekstovi Božidara Alajbegovića zaslužuju da osim u kibersvijetu steknu život i u tradicionalnom mediju "tvrde" knjige – kad je već toliko mnogo energije i bitova uloženo u strast širenja strasti prema knjizi. Uostalom, tako bi se spojila dva medija: klasični i moderni. 
(Jadranka Pintarić)`
  },
  {
    id: 22,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/jez.jpg',
    title: 'Otmjenost ježa',
    slug: 'otmjenost-jeza',
    author: 'Muriel Barbery',
    translation: 'Zora Suton',
    date: '6/2009.',
    info: '355 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '116,25 kn',
    fiftyOff: false,
    description: `Roman Muriel Barbery ''Otmjenost ježa'' plijeni od prve stranice svojim neočekivanim zapletom, paradoksima, osjetljivim, dubokim i smiješnim likovima. Posjeduje nevjerojatnu plastičnost kojom dočarava život, a prodirući u bit ljudskih odnosa, topao je i duboko human; književnosti daje nadu.

Događa se u jednoj buržujskoj pariškoj zgradi u sedmom okrugu s glavnim likom kućepaziteljice koja čita filozofske knjige i romane, a pred stanarima koje svaki dan susreće glumi analfabetizam, ne bi li je ostavili na miru. Strastveno voli Tolstoja i rusku književnost, a Husserlovu fenomenologiju iščitala je uz Mahlerovu glazbu.
    
Mimo svih konvencija, ona se vezuje za gospodina Ozua, bogatog Japanca, koji je poziva na večeru, te za Palomu, djevojčicu od dvanaest godina, nadarenu i suicidalnu. Malo-pomalo, stvara se čipka tananih ljudskih odnosa. Roman razbija klišeje i donosi ipak optimistično viđenje jednog društva u kojemu socijalni okviri i granice nisu presudni za istinsko prožimanje ljudskih bića; u kojemu su odbačeni postavljeni u središte pariškog mikrokozmosa.
    
Inteligentan, malo karikaturalan, ali suptilan i duhovit, roman Muriel Barbery svojom otmjenošću predstavlja štit od najezde ambijentalne prostote današnje proze, te donosi osvježenje u zamornu recepciju industrijaliziranog i komercijaliziranog romana koji njome prevladava.
    
***
    
Muriel Barbery, rođena 1969. godine u Casablanci, Maroku, spisateljica je i profesorica filozofije. Već prvi njezin roman «Poslastica», izdan 2000. godine, preveden je na dvanaest jezika. Drugi roman «Otmjenost ježa» (2006.) bio je nakladničko iznenađenje i rijetko dobro napisani bestseler. Postiže golem uspjeh u Europi i svijetu, preveden je na više od trideset jezika u milijunskoj nakladi da bi uspeo autoricu na sam vrh suvremene francuske proze.`
  },
  {
    id: 23,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/zaokret.jpg',
    title: 'Zaokret',
    slug: 'zaokret',
    author: 'Žarko Paić',
    translation: null,
    date: '9/2009.',
    info: '383 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '116,25 kn',
    fiftyOff: false,
    description: `S krajem globalizacije morali bismo promisliti što uopće nakon kulture kakvu smo poznavali i s kakvom smo tragali za novim svjetovima smisla.

Kultura očigledno više nije alternativa globalizaciji, jer je sama postala njezin nadomjesni moćni biopolitički stroj. Povratak kulturi u predglobalno doba nalikuje ispraznome bioetičkome pokušaju da utemelji pravo na humano usmrćivanje životinja. Izlazak iz njezina začaranog kruga smisla identiteta istog je dosega kao i svaki pokušaj izlaska iz nametnute globalizacijske zamke.
    
Trebamo li izaći iz slijepe ulice kulture uopće?
    
***
    
Žarko Paić jedan je od najplodnijih i najboljih hrvatskih esejista. Rođen je 1958. u Kutini. Diplomirao je i magistrirao na Fakultetu političkih znanosti, a doktorirao na Filozofskom fakultetu Sveučilišta u Zagrebu. Docent je na Studiju modnog dizajna na Tekstilno-tehnološkom fakultetu u Zagrebu.
    
Glavni je urednik časopisa za teoriju, kulturu i vizualne umjetnost Tvrđa, zamjenik glavnog urednika časopisa Europski glasnik i član uredništva časopisa za vizualne umjetnosti Atr-e-fact.
    
Objavljuje filozofijske, sociologijske i književne rasprave i eseje, kritike i prikaze te poetske i prozne tekstove u knjigama, zbornicima i časopisima.
    
Autor je i triju zbirki poezije "Aura" (Hrvatska sveučilišna naklada, Zagreb, 1994.), "Opako ljeto" (Ceres, Zagreb, 1998.) i "Uronjeni" (Fraktura, Zaprešić, 2009.). Pjesme su mu uvrštene u tri antologije suvremenog hrvatskog pjesništva.
    
Prijevodi studija, eseja i poezije u časopisima i zbornicima na engleski, francuski, njemački, slovenski, mađarski, rumunjski i slovački jezik.
    
Dobitnik je međunarodne autorske nagrade za literaturu srednjoeuropskih zemalja austrijske zaklade Kulturkontakt iz Beča za 2008. godinu.`
  },
  {
    id: 24,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/infernet.jpg',
    title: 'Infernet i drugi tekstovi: Eseji & kratke priče & putopisi',
    slug: 'infernet-i-drugi-tekstovi',
    author: 'Dražen Katunarić',
    translation: null,
    date: '9/2011.',
    info: '191 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '82,50 kn',
    fiftyOff: false,
    description: `"Svijet je prašina. Prema medijima, svijet nije vredniji od prašine. Kad čovjek baca stare novine trpajući ih u kontejner za reciklažu ili u plastične vrećice - prizor je to koji simbolizira njegove protekle dane na zemlji, dane koje je proveo u društvu medija. On svjedoči o ispraznosti njegove egzistencije. Sva lica političara, glumica, pjevača, zabavljača, jednokratnih zvijezda s naslovnica novina kao da su karikature njegovih namještenih osmijeha rasutih u vjetar. Ako ih malo prelista, još se sjeća starih naslova, poneke fotografije i napisa, svega što je pročitao: primjerice, od ovoga ljeta, Vesne Pusić koja je skliznula s ceste i njezina uginulog psa, sprovoda ubijenog Dina Pokrovca i Globusova stručnog tima za styling koji komentira kako je tko od ucviljenih modno izgledao na sprovodu. Zatim pokojega medijskog tajkuna, tipa Tarik Filipović, i nekoliko jeftinih krasotica za kojima će narod poludjeti jer lebde na letećim tepisima stvarnosti...

Taj trenutak medijskog sažimanja i »rasutog tereta« (D. Dragojević) pokazuje u kojoj su ga mjeri mediji hranili i oblikovali a da on toga nije ni svjestan, jer ih, eto, baca. U kojoj su ga mjeri punili smjesom podataka, senzacija, opscenosti i izazova, voajerstva i kriminala, svježe smrti i egzotike. Kad bi postojala neka idealna kazeta s prethodno snimljenim materijalom pa da čovjek baci i sve ono što je gledao na televiziji u kakvu veliku, zelenu kutiju, kao što to čini s novinama, sigurno bi iskoristio tu priliku. Što svjedoči da njegova potreba za informacijom i zabavom, u dugim popodnevima i večerima života, zauzima nizak položaj sa stajališta vrijednosti, položaj budućeg smeća, ali da zamjene nema. Jer bi inače trošio vrijeme na nešto dragocjenije, korisnije, pametnije, na nešto do čega mu je stalo, čiji trag neće baciti, nego sačuvati kao knjige, fotografije, suvenire, slike...
    
Svejedno, ova spoznaja neće ništa promijeniti. Neće utjecati na mogući zaokret ili drukčiju odluku. Da otkaže pretplatu ili se isključi iz mreže, sa serverà, ugasi sve ekrane u kući, televizijske, internetske, mobitelske, današnji bi se čovjek vjerojatno osjetio beskonačno sam i prokleto napušten. Upaljen televizor ili internet - koliko god na njima titrale neke besmislene reklame, recimo, »S vama kroz život« (Konzum), »Put do srca« (Podravka), banderi, vrpce, pokretne trakice, isprazna i simpatična ulagivanja - ipak je nekakvo društvo i kakav-takav život. Onaj jedini u kojemu obitavamo. Koji je za baciti, ali koji je naš. Mediji su poput brze hrane koja se može trenutačno prožvakati, svakodnevne senzacije slabijega ili jačeg intenziteta koje nas žele uvjeriti da se mnogo toga presudnoga zbilo, a ne ništa. Postoji svijet i postoje mediji koji kruže okolo, potpaljuju vatru, jer žele zauzeti njegovo mjesto. On bi inače bio mrtav ili bez jeke, pa ga neprestani tapage, vatra i buka, breaking news čine novim."
    
***
    
Ova se knjiga može čitati kao zbirka eseja, priča i putopisa, u njoj su granice među žanrovima meke i pretapajuće. Dražen Katunarić jedan je od najzanimljivijih hrvatskih pripovjedača i esejista. 
(Rade Jarak)`
  },
  {
    id: 25,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/iscekivanje_boga.jpg',
    title: 'Iščekivanje Boga',
    slug: 'iscekivanje-boga',
    author: 'Simone Weil',
    translation: 'Marko Kovačević',
    date: '9/2011.',
    info: '246 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Tekstovi, sakupljeni pod naslovom "Iščekivanje Boga" ("L'Attente de Diu") spadaju među najljepše tekstove što ih je ostavila Simone Weil (1909. - 1943.), francuska spisateljica i filozofkinja židovskog podrijetla koju smatraju najvećom mističarkom dvadesetog stoljeća.

Napisani između siječnja i lipnja 1942. ovi su tekstovi više ili manje povezani s dijalogom što ga je Simone Weil vodila s katoličkim svećenikom J.M. Perrinom, od lipnja 1941.; zajednički osluškujući Istinu, ona privučena od Krista, a on svećenik već trinaest godina.
    
Otac Perrin je 1949. godine pristao objaviti ove tekstove, a osobito prepisku koja tvori najljepši dio ovih tekstova - kako bi javnost upoznao s najpoučnijim stranicama koje govore o njenu nutarnjem iskustvu i o njenoj osobnosti.
    
Ali razlog toga objavljivanja bila je prije svega želja da se i drugima pruži mogućnost da uđu u taj dijalog, što je Simone izričito željela za vrijeme njihovih različitih susreta.
    
***
    
Simone Weil rodila se u Parizu 3. veljače 1909. Nije primila nikakav religiozni odgoj: odgojena je u duhu potpunoga agnosticizma. Jedna od glavnih značajki njenoga djetinjstva bila je ljubav, puna sućuti, prema nesretnicima; imala je oko pet godina kad je otkrila ljudsku bijedu zahvaljujući Prvom svjetskom ratu 1914. i kumstvu nekog vojnika.
    
Zahvaljujući prerano razvijenoj inteligenciji uspješno je završila školovanje. S devetnaest godina upisala se na fakultet (Normale), a s dvadeset dvije postala je profesor filozofije (1928. - 1931.).
    
Bila je profesorica filozofije, zatim radnica u tvornici Renault, sudjelovala je u Španjolskom građanskom ratu, odakle se, narušena zdravlja, vratila nastavničkom pozivu. Nakon što je 1940. otpuštena iz službe (zbog židovskog podrijetla), sklanja se najprije u New York, a potom u London, gdje radi za Francuski komitet narodnog oslobođenja.
    
Umrla je u dobi od 34 godine od posvemašnje fizičke i duševne iscrpljenosti napornim radom i lišavanjem.
    
Ipak je njeno srce pripadalo čitavom svijetu, nekoliko mjeseci prije smrti zapisala je: "Nesreća širom zemaljske kugle opsjeda me i toliko paralizira sve moje sposobnosti; ja ne mogu ozdraviti i osloboditi se te ospjednutosti ako i sama zdušno ne sudjelujem u opasnosti i patnji. To je uvjet da mogu raditi".`
  },
  {
    id: 26,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tahir.jpg',
    title: 'Luna Lusitana: Poetski putopis',
    slug: 'luna-lusitana-poetski-putopis',
    author: 'Tahir Mujičić, Hrvoje Šercar',
    translation: null,
    date: '7/2010.',
    info: '97 str. / tvrdi uvez',
    price: '130,00 kn',
    discountedPrice: '97,50 kn',
    fiftyOff: false,
    description: `Putovanje u Portugal potaknulo je stvaralačke vibracije i primjerene izražajne reakcije pjesnika Tahira Mujičića i slikara Hrvoja Šercara.

Sjećanja i zapisi pretvoreni su u sasvim određena djela, u pjesme i grafike što nadmašuju ograničenja prigodnosti. Možemo kazati da su se i literat i likovnjak osjetili nadahnutima ambijentima zapadne iberske obale, a u gradovima i gradićima portugalske kulturne baštine našli su prizore i situacije za koje su imali poseban afinitet, nešto između doživljaja evidentnih pozitivnih ambijentalnih pomaka i slutnje kako bi se postupno i tu mogli gotovo osjećati kao kod vlastite kuće. Stoga je njihova participacija u ovoj zajedničkoj mapi neposredna i čista.
    
Pjesniku je dano da se može izričito pozivati na mnoge specifične elemente, a Tahir Mujičić to obilato koristi u svojim evokativnim, pomalo nostalgičnim i pomalo podsmješljivim pjesmama. Nalik kolažnim postupcima, unosi u tekst nazive jela i pića, imena mogućih sugovornika i prolaznika, toponomastiku regije i karakterističan kolorit posjećenih mjesta.
    
Prividno putopisne reference na Porto i Coimbru, na Calem i Douro bitno su obogaćene nazočnošću ljudskog faktora: ribara i prodavača, pomorca i keramičara, turista i djevojaka, a naročito staraca, kojima se autor pomalo opsesivno, bilo kao već »vječni«, bilo kao jedan od tek »budućih« staraca, bavi.
    
Ali znani (za mene šoljanovski) motiv "staraca" Mujičić razrađuje ili sjenča izrazito sjetnom (reći ćemo: upravo fado) intonacijom, te odgovarajućom narativnom ritmizacijom, a situiranje motiva pred velikim morem, oceanom, »iza čega nema ničega«, daje cjelini pečat egzistencijalnog iskustva.
    
Inače izrazito humorni i opušteni Mujičić u svojem je portugalskom ciklusu dodirnuo nove registre, nije zanijekao svoju dosjetljivost i lakoću izraza, no stavio ih je u službu elegičnih uspomena i afektivne identifikacije sa svijetom približenih daljina. (Iz pogovora, Tonko Maroević)`
  },
  {
    id: 27,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/nemeza.jpg',
    title: 'Medicinska Nemeza: Eksproprijacija zdravlja',
    slug: 'medicinska-nemeza-eksproprijacija-zdravlja',
    author: 'Ivan Illich',
    translation: 'Jagoda Milinković',
    date: '12/2010.',
    info: '268 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '116,25 kn',
    fiftyOff: false,
    description: `Kultna Illicheva knjiga "Medicinska Nemeza", u kojoj grčka boginja odmazde kažnjava liječnikovu neograničenu vlast nad ljudskim životom, svojedobno je imala velik odjek u Europi i svijetu. Međutim, nakon trideset i pet godina, Illicheve osnovne postavke još više su se zaoštrile te pokazuju da se kriza medicinske paradigme zdravlja i bolesti znatno produbila.

Zdravlje je postalo fetiš kojemu se klanja većina ljudi, društvo je patološki opsjednuto bolešću, medikalizacija je zahvatila sve pore života, a pojedinac se bespomoćno pokorava diktatu liječnika i ljekarnika, režimu ambulanata i bolnica, ovisan o njima kao narkoman o drogi. Moderna medicina, unatoč velikom napretku, otišla je prema lllichu predaleko u želji da isključi smrtnost, bolest i bol, pretvarajući ljude u potrošače zdravlja, a uništavajući njihove obrambene sposobnosti.
    
Illicheva knjiga uspostavlja bogatiji i pozitivniji pojam zdravlja koji ne ovisi o medicinskim ustanovama koliko o općem kontekstu, načinu života, prehrambenim navikama, uvjetima stanovanja i rada, koheziji društvenog tkanja i temeljnoj autonomiji ljudskog bića.
    
Ivan Illich (Ilić) (1926.-2002.), svjetski je priznat filozof, sociolog, društveni kritičar, erudit i poligtot, rođen u Beču, po ocu podrijetlom iz bračko-splitske obitelji. U početku zaređen za svećenika, 1961. osniva Centar za međukulturnu dokumentaciju (CIDOC) u Cuarnevaci, u Meksiku. Djela: "Dolje škole" (1971.), "Pravo na zajedništvo" (1973.), "Prema povijesti potreba" (1978.), "Rad u sjeni" (1981.) i dr.`
  },
  {
    id: 28,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/50kritika.jpg',
    title: 'Pedeset kritika',
    slug: 'pedeset-kritika',
    author: 'Božidar Alajbegović',
    translation: null,
    date: '6/2011.',
    info: '248 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `Knjiga okuplja pedeset Alajbegovićevih kritičkih zapisa o istom tolikom broju stranih proznih djela objavljenih u hrvatskom prijevodu u zadnje četiri godine (2007. - 2010.). Sve kritike prethodno su bile objavljene većinom u Matičnom "Vijencu", ali i u "Bibliovizoru" trećeg programa Hrvatskog radija te na portalu za kulturu Kupus.net, a obuhvaćaju djela autora poput Woodyja Allena, Josea Saramaga, Michaela Ondaatjea, Nicka Cavea, Harukija Murakamija, Julija Cortazara, P.P.Pasolinija, Amelie Nothomb i dr.
O autorovoj prethodnoj knjizi "Nešto kao fleš" kritičarka Mirjana Jurišić je napisala:
    
Božidar Alajbegović svojim kritičkim, ali i promotivnim djelovanjem za knjigu i za književnost skladno povezuje tradiciju i moderne tehnologije. Kritike su mu utemeljene u poštovanju temeljnih zahtjeva recenzentskoga posla: stručnoj analizi i nedvosmislenoj ocjeni, a medij kojim se uglavnom koristi omogućuje mu široku popularizaciju ne samo svoga rada nego i književnoga stvaralaštva uopće. Kao knjiga, njegovi su osvrti odličan vodič kroz noviju proznu produkciju.`
  },
  {
    id: 29,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/sutra.jpg',
    title: 'Sutra',
    slug: 'sutra',
    author: 'Rade Jarak',
    translation: null,
    date: '6/2011.',
    info: '132 str. / meki uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `Nakon "Japanskog dnevnika", dnevničko-putopisne proze nastale nakon nekoliko veoma intenzivnih mjeseci koje je Rade Jarak, u sklopu slikarskog rezidencijalnog programa, proveo u Zemlji izlazećeg sunca i u kojoj je japansku kulturu i svakodnevicu "promotrio" pod zapadnim povećalom - istovremeno razotkrivajući specifičnosti domaćina, ali i, ništa manje, vlastite kulturne predrasude i stereotipe, pred čitateljima je i njegova nova knjiga - "Sutra".

Riječ je o donekle sličnoj proznoj cjelini, ovaj put sastavljenoj od tri dnevnika, i koja obuvaća gradove Zurich, Dubrovnik, Tokio, Krakow, Katowice, Warszavu, Beograd i naravno - Zagreb.`
  },
  {
    id: 30,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/gradobradnja.jpg',
    title: 'Gradogradnja: prema umjetničkim načelima',
    slug: 'gradogradnja-prema-umjetnickim-nacelima',
    author: 'Camillo Sitte',
    translation: 'Jasenka Mirenić-Bačić',
    date: '12/2010.',
    info: '204 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '77,50 kn',
    fiftyOff: true,
    description: `Polemička knjiga bečkog arhitekta i urbanista Camilla Sittea (Beč, 1843. - 1903.), pisana jednostavnim jezikom i stara više od sto dvadeset godina, generacijama je smatrana klasičnim, ako ne i remek-djelom urbane teorije. Čitajući je danas postajemo svjesni zašto nam trgovi, ulice i gradovi više nisu lijepi, i što je uzrokovalo rastakanje estetskih i humanističkih pretpostavki gradogradnje.

Camillo Sitte usudio se reći i dokazati brojnim i bogato ilustriranim primjerima iz prošlosti da izgradnja i oblikovanje gradova nisu samo tehnički nego ponajprije umjetnički problem, te je već 1889. pisao o užasu pravljenja gradova šestarom i ravnalom pod pravim kutom, po krutim geometrijskim šablonama s ujednačenim blokovima kuća i ulicama koje ubijaju svaku živost.
    
Prosvjedujući protiv modernog sustava projektiranja i ortogonalnih matrica koje stvaraju monotone i puste gradove s nepostojećim trgovima, Sitte je već onda smetao nadolazećoj funkcionalističkoj arhitekturi i urbanizmu na čelu s Le Corbusierom koja ga je proglasila retrogradnim paseistom "koji uskrisuje putove magaraca".
    
Danas, u suvremenom informatičkom društvu postmodeme ere, kad se urbana područja suočavaju sa sve većim gubitkom autentičnosti i identiteta, a bezlična sprega države, kapitala i medija bezobzirno ruši stare povijesne jezgre, Sitteova knjiga postaje aktualnija nego ikad.`
  },
  {
    id: 31,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tropizmi2.jpg',
    title: 'Tropizmi 2 - Kritike i eseji',
    slug: 'tropizmi-2-kritike-i-eseji',
    author: 'Darija Žilić',
    translation: null,
    date: '2013.',
    info: '350 str. / tvrdi uvez',
    price: '179,00 kn',
    discountedPrice: '134,25 kn',
    fiftyOff: false,
    description: `U svojoj knjizi Tropizmi 2 istaknuta hrvatska pjesnikinja, esejistica i kritičarka Darija Žilić opisuje na koji način pjesnikinje, pjesnici, prozaisti i prozaistkinje danas u Hrvatskoj pišu, koje  književne postupke koriste, ali se istovremeno zanima i za to na koji način oni konstruiraju reprezentacije svijeta i što one znače u kontekstu u kojem nastaju. Pokazujući raspon književnih postupaka, odnos prema pjesničkoj/proznoj lokalnoj tradiciji, kritičarka pokazuje kako se autori i autorice odnose prema globalnim modelima, te je paradigma koja se pokazuje najčešće definirana sintagmom "lokalno i kozmopolitsko", što je u ovom trenutku dominantno određujuća pozicija hrvatske književne kulture.`
  },
  {
    id: 32,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/sijevanja.jpg',
    title: 'Sijevanja',
    slug: 'sijevanja',
    author: 'Jean Echenoz',
    translation: 'Vlatka Valentić',
    date: '12/2011.',
    info: '120 str. / meki uvez',
    price: '90,00 kn',
    discountedPrice: '67,50 kn',
    fiftyOff: false,
    description: `Najradije samuje i da, općenito voli samački život pa radije u zrcalu gleda sebe nego da gleda druge ljude i mirne se duše odriče žena, iako se on njima i te kako sviđa jer je veoma naočit i visok, prepametan je i vješt na riječima, a nema ni četrdeset godina i još je slobodan. Nije da mu se više sviđaju muškarci, nije ni posve ravnodušan kad se gospođe nenametljivo vrzmaju oko njega, no zasad kao da ih nije voljan pustiti da se približe preko određene granice.

Jedna je to od karakternih osobitosti Gregora, glavnog lika Echenozova romana "Sijevanja" koji je posebno zanimljiv za hrvatsku čitateljsku publiku jer njegovu inspirativnu potku čini životopis Nikole Tesle (1856.-1943.) koji se rodio i "koji će stasati negdje na jugoistoku Europe, daleko od svega osim Jadranskog mora". Genijalni znanstvenik koji je izmislio sve što će čovjeku biti korisno idućih stoljeća nesposoban je voditi svoje poslove; znanost ga privlači više od profita, a drugi mu kradu ideje. Preostaju mu "sijevanja" njegovih izuma i društvo golubova u koje je jedino zaljubljen...
    
***
    
Jean Echenoz, rođen 1947. godine u Orangeu, jedan je od najznačajnijih suvremenih francuskih pisaca. Dobitnik nagrade "Goncourt" 1999. godine za roman "Odlazim", kao i nagrade "Medicis" za roman "Cherokee". Dosad je objavio trinaest romana. Njegova je romaneskna tehnika "minimalistička" i trezveno "objektivistička", a pozornost čitatelja često plijeni zagonetnim intrigama i likovima.`
  },
  {
    id: 33,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/brdo.jpg',
    title: 'Brdo',
    slug: 'brdo',
    author: 'Jean Giono',
    translation: null,
    date: '12/2011.',
    info: '160 str. / tvrdi uvez',
    price: '140,00 kn',
    discountedPrice: '105,00 kn',
    fiftyOff: false,
    description: `Kratak roman "Brdo" Jeana Gionoa otkriva duboke veze između čovjeka i prirode koja nije samo prostor u kom se odvija radnja, već glavni lik romana, živa i personificirana prisutnost Pana, nadmoćna i često neprijateljska sila.

***
    
Jean Giono (1895.-1970.), francuski pisac i scenarist zavičajno je vezan za Provansu gdje je proveo cijeli svoj jednostavni život u krugu obitelji, i gdje se odvija radnja mnogih njegovih djela. Neki od njegovih romana postali su klasici francuske književnosti 20. stoljeća. Od pedesetak napisanih djela valja izdvojiti sljedeće romane: "Čovjek koji je sadio drveće", "Momak u modrom", "Rob", "Žetva", "Kralj bez zabave"...`
  },
  {
    id: 34,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/posthumano_stanje.jpg',
    title: 'Posthumano stanje: Kraj čovjeka i mogućnosti druge povijesti',
    slug: 'posthumano-stanje',
    author: 'Žarko Paić',
    translation: null,
    date: '12/2011.',
    info: '473 str. / meki uvez',
    price: '170,00 kn',
    discountedPrice: '127,50 kn',
    fiftyOff: false,
    description: `Ovo nije knjiga o posljednjim "stvarima". Još je manje njezina usmjerenost spram pitanja o kraju čovjeka u posthumanome stanju "stvar" apokaliptičke ugođenosti duha vremena. Svaki govor o kraju i krajevima, kako je to izrijekom u svojim promišljanjima o povijesti zapadnjačke metafizike kao logocentrizma i onto-eshato-teologije nastojao izvesti Derrida, već je uvijek zatvoren unutar jedne sheme mišljenja koja počiva na ideji početka i kraja same ideje u njezinoj mogućnosti, zbilji i nužnosti.

Govor o kraju čovjeka pripada upravo jedinstvenoj arhitektonici uma. Na njoj se uzdižu i slamaju svi pokušaji izgradnje i razgradnje povijesti kao smislenoga događanja odnosa Boga, čovjeka i svijeta. Ovo je knjiga sabranih tekstova o posthumanome stanju koji se sabiru oko pitanja o mogućnostima druge povijesti. Bez mogućnosti nema povijesti, čak i kada se sve zbiva u vidu nužnosti ozbiljenja slobode u epohalnome događanju čovjeka u njegovome razvitku kroz različite postaje na putu.
    
Mogućnost drugoga i drukčijega nastaje samo iz razlike u istome. Stoga je identitet bitka i mišljenja ponajprije mogućnost da nešto jest i da jest tako kako jest samo ako postoji mogućnost da ne bude ili da bude drukčije no što jest. Mogućnost druge povijesti istodobno pretpostavlja drukčije razumijevanje svih prethodno opstojećih ideja povijesti koje su dospjele do svojeg stvarnoga i faktičnoga kraja.`
  },
  {
    id: 35,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/kronos.jpg',
    title: 'Kronos',
    slug: 'kronos',
    author: 'Dražen Katunarić',
    translation: null,
    date: '12/2011.',
    info: '80 str. / tvrdi uvez',
    price: '100,00 kn',
    discountedPrice: '75,00 kn',
    fiftyOff: false,
    description: `Nakon što je, suočen s činjenicom živahnosti vremena za koje je mislio da ga je, upakiranog u dan, možda moguće zaključati, Dražen Katunarić odlučio je uokviriti knjigu s temom vremena i smjestiti je između motiva dana koji se "ne sjeća sebe sutradan" i onog vremena za koje se činilo da "je spavalo u tišini", a sad - da bi označilo početak teksta - proviruje van kao slijepo mladunče. Nakon što apostrofira gubitak nevinosti i potvrdi bačenost u svijet uporabom preslike arhetipske epizode Uran-Kronos-Gea, Katunarić se na zaigrane načine obraća našoj konačnosti i nedovršenosti. (...)

Čitatelj će na stranici 53 naići na jedne od najljepših ljubavnih redaka suvremene poezije. Nakon noći provedene s ljubavnicom, ljubavnik piše: "Mjesec nas je pronašao gole i sjajne u podrumu, kao presavinuti švicarski nož. S leđa obasjao metal obnaženih tijela, razgolitio našu tajnu, do maloprije skritu od noći". Ali, što je puno važnije, ljepotom trenutka, zaštićenu i od vremena. Trenuci poput ovakvih ono je što nam omogućuje da se i Kronosu nasmijemo u brk, u nadi da će, bar načas "opustiti čeljust".
    
(iz kritike Nikole Petkovića)`
  },
  {
    id: 36,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/prokleti_dio.jpg',
    title: 'Prokleti dio',
    slug: 'prokleti-dio',
    author: 'Georges Bataille',
    translation: 'Daniel Bučan',
    date: '11/2012.',
    info: '240 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Ideja jednog svijeta kojim vlada prvobitna nužnost proizvodnje, stjecanja i očuvanja stečenog samo je komotna iluzija jer društvo preživljava samo uz cijenu neproduktivnog trošenja. Od arhaičnih do modernih vremena čovjekovo ekonomsko ponašanje uvijek je bilo vezano za njegove religijske korijene. Naizgled razumno, u svojoj je biti duboko iracionalno.

Knjiga "Prokleti dio" zauzima središnje mjesto u djelu Georgesa Bataillea, pisca transgresije; njegova razmišljanja o ekonomiji prožeta su filozofskim, antropološkim, sociološkim i književnim spoznajama i iskustvom.
    
Za Georgesa Bataillea (1897.-1962.) Michel Foucault je rekao da je jedan od najvažnijih pisaca svoga stoljeća. On je autor raznovrsnog opusa, romana, poezije, eseja. Glavna su mu djela: "Unutrašnje iskustvo", "Moja majka", "Povijest oka", "Plavetnilo neba", "Erotizam", "Lascaux ili rođenje umjetnosti"...`
  },
  {
    id: 37,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/carstvo_medija.jpg',
    title: 'Carstvo medija: Zbornik tekstova',
    slug: 'carstvo-medija-zbornik-tekstova',
    author: 'Dražen Katunarić (uredio)',
    translation: null,
    date: '11/2012.',
    info: '460 str. / meki uvez',
    price: '170,00 kn',
    discountedPrice: '127,50 kn',
    fiftyOff: false,
    description: `Masovni mediji, zajedno s informatikom, elektronikom i telefonijom, danas su teška industrija društva, glavna poluga globalizacijskog sustava i širenja neoliberalnog koncepta; oni služe tomu da neprestano uvećavaju moć pojedinaca, a spuštaju razinu mase. Na djelu je planetarna unifikacija ponašanja, ukusa, normi s pomoću medija, podvrgavanje svijesti efemernim zbivanjima, a i svojevrsna analfabetizacija korisnika i čitatelja.

Medijski je svijet postao zaseban svijet, sa svojim kodovima, slikama, jezikom i istinom te proizvodi pa prodaje vlastitu stvarnost, papir i pokretne slike, kao što druge industrije proizvode tekstil, vijke ili kreme za sunčanje. Informacija nije više slobodna i kritička nego pronosi jednu ideju, istinu, svjetonazor u oksimoronskom spoju jednoumnog pluralizma. Umjesto dokaza vjerodostojnosti, današnji mediji pokazuju očigledni deficit demokracije razmjeran velikom stupnju ovisnosti o "gazdama", financijskim grupama koji i nemaju baš puno veze sa svijetom novinstva.
    
Ovaj zbornik tekstova postavlja ozbiljna pitanja o funkcioniranju medija i njihovim totalitarističkim pretenzijama. Zamišljen je hrestomastijski, kao nezaobilazna cjelina za onog tko se želi baviti promišljanjem medija. Stoga se u knjizi krenulo od prvog amblematičnog teoretičara medija Marshala McLuhana (čije su dvije izreke o globalnom selu i Mediju kao poruci postali sastavni dio opće kulture) i referentnih tekstova u kojima su najavljene sve kulturne mutacije koje će pretrpjeti mediji od konca sedamdesetih godina do današnjih dana kad se izvorni smisao ideje slobode tiska i medija kao temelja demokracije pomalo izgubio.
    
Većina zastupljenih autora i teoretičara istaknuti su intelektualci: esejisti, pisci, filozofi, sociolozi, novinari, publicisti koji nerijetko s različitih pozicija pristupaju problematici medija.`
  },
  {
    id: 38,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/brodski.jpg',
    title: 'Postaja u pustinji: Izabrane pjesme',
    slug: 'postaja-u-pustinji-izabrane-pjesme',
    author: 'Josif Brodski',
    translation: 'Fikret Cacan',
    date: '11/2012.',
    info: '218 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '82,50 kn',
    fiftyOff: false,
    description: `Na pitanje što je građa za stihove Josifa Brodskog slijedi najjednostavniji odgovor: sve je građa; sve je poticaj; sve ga uzbuđuje i o svemu se može 'pisati stihiće'. Ako počnemo od tradicionalnog pjesničkog repertoara, osobnih doživljaja i lektire - tek smo zahvatili jedva trećinu razloga za to prigušeno, ali trajnožareće nadahnuće. Kada zađemo u netradicionalne pričuve motiva, gdje su razne znanosti, od matematike do historije, zatim portreti suvremenika (od djevojke i prijatelja pa do maršala Žukova), onda polemički i prigodni stihovi, pa naidemo na stih: »čovjek je sam kao misao koja se zaboravlja«, onda znamo da je pjesnik samo glas, glasnogovornik jezika koji se izražava u toj osobi i njezinoj egzistenciji.

Kao stihotvorac Brodski pripada onom redu pjesnika koje zovemo racionalnima, u kojih je misao i stalna usmjerenost k rješenju nekoga dubokog pitanja (nerješivoga, a i rješivoga) daleko ispred povremeno ekstatičnog ili češće prigušenog iskazivanja osjećaja i dojmova. Brodski je nevjerojatno originalan u svemu: bilo to otkrivanje klasicističkih prethodnika ili inoviranje strofike i tematike, što u ruskoj poetskoj riznici nije nimalo jednostavan doprinos. Svaku temu i predmet Brodski osvjetljava iz više kutova i s više razina (od autorske i ljudske do nerijetko metafizičke i onostrane). Redovito pri kraju pjesme dolazi do opravdanoga, gotovo filozofskoga uopćavanja, u čemu se otkrije pjesnikov kozmopolitski univerzalizam, ali dalek od suvremenog hermetičnog individualizma. Razvijanje teze, preko antiteza do uvijek efektne poante, podsjeća na geometrijske konstrukcije, iako su stihovi uvijek svježi i iskreni, a i jednostavni za neopterećenoga čitatelja. 
    
(iz Predgovora Fikreta Cacana)`
  },
  {
    id: 39,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/thiers.jpg',
    title: 'Korzikansko pjesništvo: Od napjeva do pjesme (antologija)',
    slug: 'korzikansko-pjesnistvo',
    author: 'Ghjacumu Thiers',
    translation: 'Vanda Mikšić',
    date: '12/2012.',
    info: '109 str. / tvrdi uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Aktualno korzikansko pjesništvo ima prilično ujednačen tematski teritorij na kojemu prednjači prizivanje prošle ili ugrožene poljoprivredno-pastirske civilizacije. Nadahnuće tada ima obilježje snažnog i često patetičnoga egzistencijalnog svjedočanstva. Otočki karakter zemlje također je često predmet tog pjesništva, uz oblike, boje i mirise, odnosno ugođaj koji se nastoji prikazati kao mudro pijanstvo osjetila. Od prisutnih tema, odnos prema zemlji kao matičnom elementu obrađuje se na vrlo različite načine.

Tim općim tendencijama pjesničkoga nadahnuća pridružuje se i možda originalnija produkcija koja je svojedobno htjela raskinuti s vječnim pjesničkim načinima i temama. Izbor pjesama predstavljen u ovoj zbirci namjerno se usredotočio na takav tip pjesama.
    
Zbirka "Korzikansko pjesništvo: Od napjeva do pjesme" nastoji pokazati nekoliko najreprezentativnijih pjesama suvremenog otočkog pjesništva.`
  },
  {
    id: 40,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/oko_vatre.jpg',
    title: 'Oko vatre: Trujal i jag',
    slug: 'oko-vatre-trujal-i-jag',
    author: 'Kujtim Paćaku',
    translation: 'Fadil Bajraj, Marcel Courtiade',
    date: '11/2012.',
    info: '83 str. / tvrdi uvez',
    price: '100,00 kn',
    discountedPrice: '75,00 kn',
    fiftyOff: false,
    description: `U stihovima poznatoga suvremenog romskoga pjesnika Kujtima Paćakua sažeta je na neki način romska sudbina, oni govore o "prokletstvu" romskoga naroda, osuđenoga na vječno lutanje i neimaštinu. Ljubav, malo bola i mnogo vatre – tri su bitna elementa romskog identiteta koji prožimaju i poeziju Kujtima Paćakua.

No, u tim pjesmama istodobno ključa i golema snaga, neka mudrost i toplina života i nesalomljivost duha naroda koji je stoljećima bio proganjan i diskriminiran. Pjesnik je, zapravo, zaljubljen u život, pa su mu i stihovi takvi – izravni i jasni.
    
Pjesnik je to koji jednostavnim rječnikom govori o ljubavi, bijedi, o smislu ljudskog postojanja, identitetu, ljudskoj patnji... ili se pak samo igra slatkim riječima romskoga jezika, pa su mu i stihovi tada dječački naivni i neposredni.
    
Ovo je prvi hrvatski prijevod pjesama Kujtima Paćakua.`
  },
  {
    id: 41,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/post_scriptum.jpg',
    title: 'Post scriptum: Knjiga književnih kritika',
    slug: 'post-scriptum-knjiga-knjizevnih-kritika',
    author: 'Božidar Alajbegović',
    translation: null,
    date: '10/2013.',
    info: '239 str. / tvrdi uvez',
    price: '145,00 kn',
    discountedPrice: '108,75 kn',
    fiftyOff: false,
    description: `Nakon knjige "Pedeset kritika" u kojoj je sakupio 50 kritika stranih beletrističkih djela u hrvatskom prijevodu objavljenih između 2008. i 2011., Božidar Alajbegović se u svojoj novoj knjizi "Post scriptum" posvetio domaćim autorima.

Knjiga donosi širok uvid u trenutačno stanje suvremene hrvatske proze, uzevši u obzir da je njezin autor iščitao većinu domaće književne produkcije od 2008. do 2013. godine, ne podliježući pritom trenutačnom ukusu i pomodnosti.

U svojim književnim kritikama Alajbegović ne koristi metajezik, piše pitko i jasno izražava stavove, te tako plete književni univerzum u kojem se tekstovi prepliću, pa se čini da romani i kratke proze o kojima piše i koji se u svijesti čitatelja ne dotiču, zapravo komuniciraju i prožimaju se.

Božidar Alajbegović (1972., Rijeka) urednik je najčitanijeg hrvatskog foruma o književnosti, bloga "Knjiški moljac".`
  },
  {
    id: 42,
    promotion: false,
    recommendation: true,
    news: false,
    image: 'http://litteris.com.hr/images/most_prema_dalmaciji.jpg',
    title: 'Most prema Dalmaciji: Potraga za značenjem mjesta',
    slug: 'most-prema-dalmaciji',
    author: 'Francis Violich',
    translation: 'Daniel Bučan',
    date: '8/2013.',
    info: '340 str. / meki uvez',
    price: '245,00 kn',
    discountedPrice: '183,75 kn',
    fiftyOff: false,
    description: `Most prema Dalmaciji, potraga za značenjem mjesta životno je djelo Francisa Violicha (1911. – 2005.), Amerikanca hrvatskoga podrijetla, nekadašnjeg uglednog profesora urbanizma na američkom Sveučilištu u Berkeleyju, koji je u nekoliko navrata boravio u Dalmaciji, zavičaju svojih baka i djedova. Uspoređujući ga sa sjevernoameričkim gradovima u kojima se nastanila njegova obitelj, Violich na originalan način istražuje urbani krajolik i strukturu dalmatinskih gradova i mjesta na otocima. Njegova metoda urbanog čitanja mjesta korak po korak pomaže nam da razumijemo distinktivne urbane identitete izravnim iskustvom, intuicijom, subjektivnim osjećajima koja mu pobuđuju određen prostor i zdanje.`
  },
  {
    id: 43,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/intuicija_trenutka.jpg',
    title: 'Intuicija trenutka',
    slug: 'intuicija-trenutka',
    author: 'Gaston Bachelard',
    translation: 'Gordana Popović-Vujičić',
    date: '10/2013.',
    info: '120 str. / tvrdi uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `Što  je vrijeme? Koja je razlika između 'trenutka' i 'trajanja'? Vrijeme percipiramo po trenucima, skupini točaka, koji se spajaju u perspektivu sadašnjosti, kao što se i sjećamo, ne dana, ne tjedana, ne mjeseca, nego trenutaka u njihovoj posebnosti i mnogoznačnosti. U svojoj knjizi Intuicija  trenutka francuski filozof, epistemolog europskog formata Gaston Bachelard (1884. – 1962.) zastupa, suprotstavljajući se Bergsonu, etiku proživljena trenutka koji nam daje mogućnost da u vremenu stanujemo poetski.`
  },
  {
    id: 44,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/illich.jpg',
    title: 'Vernakularne vrijednosti i drugi eseji',
    slug: 'vernakularne-vrijednosti-i-drugi-eseji',
    author: 'Ivan Illich',
    translation: 'Sanja Fabijanić, Goran Vujasinović',
    date: '11/2013.',
    info: '175 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '82,50 kn',
    fiftyOff: false,
    description: `Čovjek se u suvremenom društvu nalazi usred nepreglednog robnog obilja, zarobljen i sputan, nemoćan da samostalno radi i slobodno bira. Odvojen od svojih izvora, trajno je nasukan na civilizacijske otpatke mašinizirane svijesti. Stoga se Illich opredjeljuje za nedovršeni i ograničeni zavičajni svijet, nalazeći spas u individualnim obrascima života i vernakularnim vrijednostima domaće radinosti, intimnog svijeta stvorenog po mjeri zajedništva, kućnih alata, lokalnog narječja. Vernakularne vrijednosti i drugi eseji knjiga je koja okuplja Illicheve prodorne i eruditske analize po kojima je postao znamenit kao jedan od najvećih mislilaca našega doba.`
  },
  {
    id: 45,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tanizaki.jpg',
    title: 'U pohvalu sjene / Ključ',
    slug: 'u-pohvalu-sjene-kljuc',
    author: 'Jun\'ichiro Tanizaki',
    translation: 'Vojo Šindolić',
    date: '11/2013.',
    info: '211 str. / meki uvez',
    price: '120,00 kn',
    discountedPrice: '90,00 kn',
    fiftyOff: false,
    description: `Jun'ichiro Tanizaki (1886. – 1965.) ubraja se među nekolicinu najznačajnijih japanskih književnika 20. stoljeća. U svojoj gotovo lirskoj prozi U pohvalu sjene Tanizaki na oštrouman i zanimljiv način sanjari i tuguje nad već tada oslabjelim i zaboravljenim tradicijama japanskog pozapađenog društva, ispisujući neke od najljepših stranica japanske književnosti uopće. U kratkom romanu Ključ muž i žena koriste svoje dnevnike kao sredstvo međusobnog komuniciranja, i to tako da jedno drugome kradomice čitaju bilješke o erotskim maštarijama, pretvarajući se da to ne čine. Roman je ubrzo nakon objavljivanja doživio veliku popularnost, pa je po njegovu predlošku dva puta snimljen film.`
  },
  {
    id: 46,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/marco_i_ngalula.jpg',
    title: 'Marco i Ngalula',
    slug: 'marco-i-ngalula',
    author: 'Gerard Adam',
    translation: 'Ana Prpić',
    date: '11/2013.',
    info: '121 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `Marco i Ngalula tankoćutni je roman, blag i strašan u isti mah, o velikom i zabranjenom prijateljstvu dvoje djece. Desetogodišnji Marco provodi školske praznike na selu, kod  bake i djeda. Tu upoznaje Ngalulu, dvanaestogodišnju Afrikanku koja je dijete političkih izbjeglica koji sizifovski čekaju da im se riješi egzistencijalno pitanje. Marco je svjestan da susret s malom crnkinjom ima čar iznimnosti i bajkovitosti koja je nerazumljiva odraslima...
    
Riječ je o izuzetnoj knjizi suvremenog belgijskog romanopisca Gérarda Adama koja je doživjela više izdanja i po riječima kritičarke Gaël, "o novom Malom princu uzburkanog početka 21. stoljeća".`
  },
  {
    id: 47,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/urmuz.jpg',
    title: 'Bizarne stranice',
    slug: 'bizarne-stranice',
    author: 'Urmuz',
    translation: 'Ana Brnardić Oproiu i Andrian Oproiu',
    date: '11/2013.',
    info: '75 str. / tvrdi uvez',
    price: '90,00 kn',
    discountedPrice: '67,50 kn',
    fiftyOff: false,
    description: `Smatran jednim od začetnika rumunjske avangarde, pretečeom dadaista i nadrealistom in nuce, kao i jednim od preteča književnosti apsurda, Urmuz (pravim imenom Dem. Demetrescu-Buzau) rodio se u ožujku 1883. godine, u gradu Curtea de Arges u Rumunjskoj, a umro je u studenom 1923. godine u Bukureštu. Iako, prema svjedočenju svoje obitelji, započinje pisati prozu 1907./1908., Urmuz je iza sebe ostavio samo osam kratkih priča i jednu anegdotu u stihu. Usprkos neveliku opusu, za avangardu je Urmuz predstavljao kultnog pisca, zbog čega je dio kritike tvrdio da ne postoji Urmuzov opus, već Urmuzov mit.

Urmuzovi likovi, iako dolaze iz zbilje, mehaničke su kreature, sastavljene od biljnih i životinjskih elemenata, ljudi – predmeti, gurnuti na rub bića. Univerzum u kojem „žive“ nalazi se u svojevrsnom međusvijetu, ni na zemlji ni na nebu, ni u paklu ni u raju, u svijetu kao abnormalnoj tvorevini od heterogenih elemenata, prividno nespojivih…`
  },
  {
    id: 48,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/plaza.jpg',
    title: 'Plaža',
    slug: 'plaza',
    author: 'Rade Jarak',
    translation: null,
    date: '11/2013.',
    info: '79 str. / tvrdi uvez',
    price: '90,00 kn',
    discountedPrice: '67,50 kn',
    fiftyOff: false,
    description: `„U životu postoji samo jedna ljubav, ne postoje dvije ljubavi“, kaže glavni junak najnovije zbirke priča Rade Jarka Plaža, a tu svoju 'tezu' kao da nastoji dokazati u svojim pričama sabranima u knjizi. Jer o čemu god da piše, glavna tema Jarkovih priča je uvijek potraga za onom pravom Ljubavi. 

Jarkove su priče zanimljive, katkad morbidne i groteskne, katkad duhovite i neobične, a opet tako svakidašnje i svakome poznate. Ponekad su one gorke i mučne, ponekad pak nježne i melankolične. Baš kao što je i život sam.`
  },
  {
    id: 49,
    promotion: false,
    recommendation: true,
    news: false,
    image: 'http://litteris.com.hr/images/bijela_tinta.jpg',
    title: 'Bijela tinta: Studije i ogledi iz francuske književnosti',
    slug: 'bijela-tinta',
    author: 'Ingrid Šafranek',
    translation: null,
    date: '11/2013.',
    info: '450 str. / meki uvez',
    price: '165,00 kn',
    discountedPrice: '123,75 kn',
    fiftyOff: false,
    description: `Umjesto da sama pišem prozu ili poeziju, opredijelila sam se za ulogu posrednika između pisca i čitatelja, za poziciju onog trećeg čitajućeg lika u prostoru oko ruba koji spaja i dijeli čin pisanja i čin čitanja, taj obrnuti i usporedni užitak. U konkretnom slučaju radi se o razgovoru s tekstovima francuskih klasika kao što su Stendhal, Balzac, Flaubert, Proust, Sartre, Colette, Duras... Jer svako doba, naime, čita drugačije kao i svaki pojedinac. Nit vodilja ove knjige bilo bi mapiranje dijaloga između svijeta teksta i svijeta života, između kulture i prirode, između nemislivog (tijela, želje) uvijek već na putu u jezik i - misli. Naslov Bijela tinta, koji sam imala već odavno na umu, odnosi se na čitanje nekazanog, na ono što u tekstu nije vidljivo na prvi pogled nego samo pod izvjesnim kutom i osvjetljenjem. To uključuje čitanje svega što je u tekstu više pokazano nego iskazano.`
  },
  {
    id: 50,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/o_prirodi.jpg',
    title: 'O prirodi',
    slug: 'o-prirodi',
    author: 'Ralph Waldo Emerson',
    translation: 'Vojo Šindolić',
    date: '7/2013.',
    info: '151 str. / tvrdi uvez',
    price: '135,00 kn',
    discountedPrice: '101,25 kn',
    fiftyOff: false,
    description: `Nietzche je jednom rekao za Emersona da je 'autor s najviše ideja u ovome stoljeću'. A one su iznesene na jednostavan, prodoran i dubok način. Poput Goethea, Emerson traži u prirodi odgovor na pitanje mjesta čovjeka te u njoj prepoznaje duh. 

Ralf Waldo Emerson (1803. – 1882.) američki je mislilac i pjesnik. Po svojem utjecaju i idejama središnja je ličnost američkog intelektualnog života u 19. stoljeću. Jedan je od najvažnijih zagovornika individualizma, a poslije i transcendentalizma. Duhovni je mentor Davida Thoreaua.`
  },
  {
    id: 51,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/sutivan.jpg',
    title: 'Sutivan - kulturna povijest',
    slug: 'sutivan-kulturna-povijest',
    author: 'Dražen Katunarić (uredio), Franjo Mlinac (uredio)',
    translation: null,
    date: '2007.',
    info: '485 str. / tvrdi uvez',
    price: '500,00 kn',
    discountedPrice: '375,00 kn',
    fiftyOff: false,
    description: `Knjiga Sutvan - kulturna povijest nastala je kao cjelovit prikaz svega prikupljenog, iznesenog, sažetog o mjestu Sutivan, njegovom nastanku iz pretkršćanskog razdoblja, položaju, kulturnoj povijesti, opstanku i važnosti za cijeli otok Brač, Hrvatsku i svijet.

Zahvaljujući novonastaloj općini Sutivan, koja je poput ptice Feniks iznikla iz njedara drevnog Brača i njegovih kamenih korijena pa uspješno odolijeva svim kušnjama; zahvaljujući vjekovnoj težnji za očuvanjem svoje baštine; zahvaljujući naporima i dobroj volji kao i trudu zaljubljenika u sve navedeno i prikazano, nastala je ova knjiga - plod ljudske upornosti, ponosa, dostojanstva i želje, ističući iskonsku snagu bračkog čovjeka nekad, danas, sutra kako bi se održao u prostranstvu svemira.
    
Knjiga je važna kao i memento. U njoj smo pokušali sakupiti sažetu bit raznih viđenja, činjenica, ostavština - umjetničkih, kulturnih, znanstvenih, korijene otoka Brača iz kojih izbija i Sutivan. Sve u njoj se ogledava kao u ogledalu vremena i sve se pretvara u kreativno djelo ljudi opijenih strašću, zanosom, radom i znanjem.`
  },
  {
    id: 52,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/simone_weil.jpg',
    title: 'Težina i milost',
    slug: 'tezina-i-milost',
    author: 'Simone Weil',
    translation: 'Ana Buljan',
    date: '2004.',
    info: '223 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `Duhovno bogate stranice i kratke misli koje je Gustave Thibon okupio nakon smrti Simone Weil pod nazivom "Težina i milost" napisane su na gustom i savršenom jeziku koji izaziva na trenutke drhtanje i egzaltaciju. Djelo se bavi temama koje jedino nešto znače Simone Weil: ljubav prema Bogu, ljudska nesreća, dobra upotreba vremena, odricanje, milosrđe, praksa nadnaravnih vrlina. 
    
Misao Simone Weil, na pola puta između kršćanske teologije i židovske mistike, oblikuje metafiziku napuštenosti koja omogućuje određivanje prisutnosti Boga u čovjeku kao odricanje. Bog je istodobno savršena odsutnost i vrhunska prisutnost, a nesreća i pažnja dva puta koji vode analoškom odnosu između ljudskog i božanskog. Objavljivanje ove knjige, nezaobilazno za poznavanje opusa najveće mističarke 20. stoljeća, izazvalo je svojedobno velik odjek u Europi.`
  },
  {
    id: 53,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/elementarne_cestice.jpg',
    title: 'Elementarne čestice',
    slug: 'elementarne-cestice',
    author: 'Michel Houellebecq',
    translation: 'Marinko Koščec',
    date: '2004.',
    info: '376 str. / meki uvez',
    price: '135,00 kn',
    discountedPrice: '101,25 kn',
    fiftyOff: false,
    description: `Mnogo je blagotvornih, oplemenjujućih, virtuozno napisanih knjiga. Elementarne čestice nisu ništa od toga. Ovaj roman prezire stilske figure i svaku estetsku preokupaciju; čitatelju se obraća neobuzdanom silinom, sirovim i brutalnim jezikom. Gazeći po rijetkim preživjelim tabuima liberalnog društva, nagrađuje gladne provokacija, opscenog i morbidnog. I takvih je knjiga u izobilju, ali ova na drsko jedinstven način objedinjuje fikciju i teoriju, vivisekciju pojedinca i panoramsku viziju, najcrnju, turobnost i najcrnji humor. Ona je razorno autentična, nenadmašna u pogađanju bolnih mjesta i u svojoj moći fascinacije: premda nam pokazuje više nego možemo podnijeti, ostajemo zagledani u zrcalo, prepoznajući najgori, prokleti dio sebe. Samoća, mržnja, rasap, smrt... Ne želimo vjerovati u ono što nam razotkriva kao samu srž ljudskosti. Ali je ne puštamo iz ruku jer je, kao i patnja iz koje izvire, jezovito stvarna. Michel Houellebecq, rođen 1958. godine, danas je vjerojatno najkontroverzniji francuski pisac. Njegova je romaneskna trilogija (Širenje područja borbe, Elementarne čestice i Platforma - u cjelini prevedena na hrvatski) izazvala pravi potres na europskoj književnoj sceni. Preveden na više od trideset jezika.`
  },
  {
    id: 54,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/platforma.jpg',
    title: 'Platforma',
    slug: 'platforma',
    author: 'Michel Houellebecq',
    translation: 'Vlatka Valentić',
    date: '2003.',
    info: '293 str. / meki uvez',
    price: '135,00 kn',
    discountedPrice: '101,25 kn',
    fiftyOff: false,
    description: `Egzotika, seks, turizam, muslimanski terorizam - pikantni su začini najnovijeg, trećeg romana "Platforma" danas najkontroverznijeg svjetskog pisca Michela Houellebecqa. Oštar i smiješan, stilski čist i pitak te rijetko škrt u pretjerivanjima (pogotovu seksualnim), ovaj roman, s kliničkim smislom za pojedinosti, portretira prosječno društvo svoga vremena. Glavni junak, po imenu Michel, činovnik je u Ministarstvu kulture, živi u ritmu televizijskih igrica i feljtona, te peep shopova na izlasku s posla. Nakon smrti oca, "starog pokvarenjaka", odlučuje se otputovati na Tajland, u sklopu sofisticiranog paket-aranžmana agencije Nouvelles frontieres. Tamo se prepušta užicima erotske masaže, posjećuje barove s prostitutkama, ali i upoznaje Valerie, s kojom će otputovati na Kubu i umnožiti seksualna iskustva... 

Romanom Platforma, pa polemikom te sudskim procesom koji su uslijedili, Michel Houellebecq ponovno je ponio karizmu slobodnog pisca koji piše točno ono što želi zadajući muke cenzuri, kritici, političkoj korektnosti i zabranama društva. Naravno, netko će reći da su njegovi stavovi (i oni njegovih junaka) rasistički, seksistički, šokantni, ali i pitanje koje implicitno postavlja - smije li se u demokraciji loše misliti - ostaje otvoreno "Platformom"... 
    
Michel Houellebecq, rođen 1958., francuski pjesnik, esejist, romanopisac, nakon objavljivanja romana Širenje područja borbe i Elementarne čestice te Platforme, postaje predvodnikom nove generacije pisaca.`
  },
  {
    id: 55,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tarahumare.jpg',
    title: 'Tarahumare i druga djela',
    slug: 'tarahumare-i-druga-djela',
    author: 'Antonin Artaud',
    translation: 'Marija Bašić',
    date: '2003.',
    info: '303 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '62,50 kn',
    fiftyOff: true,
    description: `"Kad siđu u gradove, Tarahumare prose. (...) Ako dobiju, ne kažu hvala. Jer dati nekome tko ništa nema za njih nije čak ni obaveza, to je zakon fizičkog reciprociteta koji je Bijeli Svijet iznevjerio. (...) Taj zakon fizičkog reciprociteta koji mi zovemo milostinja, Indijanci primjenjuju prirodno, i bez ikakva sažaljenja. (...) Kad je pojeo, prosjak odlazi ne zahvalivši i ne pogledavši nikoga.", pisao je 1936. u Meksiku Antonin Artaud, jedan od najvećih pisaca 20. stoljeća. Samo godinu dana poslije, 1937. u Francuskoj, zatvoren je u ludnicu. Da je bio "bolje situiran", vjerojatno bi barem toga bio pošteđen, on, čija sabrana djela danas čini 26 knjiga, on, koji je snimio dvadesetak filmskih uloga, napisao sedam scenarija, u kazalištu bio i glumac i scenograf i režiser i kostimograf i dramski pisac i koreograf i kazališni teoretičar (ukupno sedam profesija), nacrtao dovoljno crteža da se može napraviti izložba... Artaudovi tekstovi sabrani u ovu knjigu sigurno se ubrajaju među najrezonantnije u cjelokupnom njegovu opusu. 

Van Gogh, ubijeni samoubojica napisan je poput svojevrsne oporuke, konačnog obračuna sa svijetom, u onih zadnjih godinu i pol koliko je Artaud još živio poslije izlaska na slobodu:"(...) Van Gogh se nikad nije bojao ratovati da bi živio, odnosno da bi ideju postojanja uskratio za činjenicu života, a dakako da sve može postojati ne trudeći se da bude, i sve može biti ne trudeći se da sjaji i blista, kao bjesomučni van Gogh. (...) Najviše na svijetu van Goghu je bilo stalo do njegove slikarske ideje, fanatične, apokaliptične, strašne vizionarske ideje. Da svijet treba urediti prema njegovoj vlastitoj matrici, preraditi njegov ubrzani ritam protivan duševnom životu, ritam okultne svetkovine, i na gradskom trgu, pred svima ga opet vratiti na pregrijavanje u kotao za taljenje."`
  },
  {
    id: 56,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/ispovijedi%20maske.jpg',
    title: 'Ispovijedi maske',
    slug: 'ispovijedi-maske',
    author: 'Yukio Mishima',
    translation: null,
    date: '2003.',
    info: '121 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `"Ovo će biti moj prvi autobiografski roman", kaže Yukio Mishima u bilješci od 2. studenoga 1948. godine. "Okrenut ću k sebi skalpel psihološke analize koji sam izoštrio na zamišljenim ličnostima. Pokušat ću secirati sebe živog. Nadam se da ću postići znanstvenu točnost da bih, po Baudelaireovim riječima, postao i osuđenik i krvnik. To zahtijeva odlučnost, ali zapušit ću nos i pisati". 

Brutalnim lirizmom, a bez dvoličnosti i pretvaranja, Mishima je tu Odluku dosljedno sproveo u djelo, kapitalno za japansku književnost, razotkrivajući svoju masku seksualne perverzije koja se pretvara u nagon za smrću i nesposobnost da voli i bude voljen. Premda je njime Yukio Mishima šokirao kritičare koji su se gnušali nad njegovom otvorenošću te tradicionalno japansko društvo, roman "Ispovijedi maske" stvorio je i novu zvijezdu na svodu svjetske književnosti koja otada nije tamnjela. 
    
Yukio Mishima (1925.-1970.), jedan od najplodnijih i najznačajnijih japanskih književnika, u svom kratkom i već legendarnom životu koji je završio obrednim samoubojstvom - seppuku - napisao je više od dvadeset romana, više od četrdeset kazališnih komada, stotinjak kratkih priča, nekoliko zbirki poezije i putopisa kao i nekolíko stotina raznovrsnih eseja.`
  },
  {
    id: 57,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/rakete.jpg',
    title: 'Rakete / Moje razgolićeno srce / Jadna Belgija',
    slug: 'rakete-moje-razgoliceno-srce-jadna-belgija',
    author: 'Charles Baudelaire',
    translation: 'Višnja Machiedo, Ana Buljan',
    date: '2006.',
    info: '237 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '57,50 kn',
    fiftyOff: true,
    description: `Rakete, prozne fragmente iz posmrtne ostavštine, Baudelaire počinje bilježiti već 1855., pridružujući im od 1859. nadalje i druge zapise, pod naslovom Moje razgolićeno srce, a prve dojmove o Belgiji zapisuje 1864., ubrzo nakon svojeg dolaska u Bruxelles. Uslijed bolesti i prerane smrti, tri zasebno koncipirana – za autora i te kako bitna – književna nacrta nisu okrunjena i knjigama. No ta „zagonetka“ ne zasjenjuje nimalo dojmljivost sačuvanih fragmenata. Iza razlomljene, trpke proze stoji nadasve snažan spoznajno-kritički poriv Baudelairea-mislioca, s „elementima“ lirskog pjesnika „u tragovima“, poriv što ga s vremenom tjera sve dalje od intimizma jastva, autobiografskih sjećanja, prizvanih snova, satiričkoga i pamfletskog obračuna sa svojim stoljećem i svijetom. Taj svojevrsni torzo posthumnih djela ne nudi samo potresno svjedočanstvo o najtežem životnom razdoblju genijalnog francuskog pjesnika i neupitne dokaze o paradoksalnoj vidovitosti njegova rastrojenog duha, nego nam ukazuje i na dotad neslućene mogućnosti fragmentarnog pisma.`
  },
  {
    id: 58,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/terasa%20u%20rimu.jpg',
    title: 'Terasa u Rimu',
    slug: 'terasa-u-rimu',
    author: 'Pascal Quignard',
    translation: 'Saša Sirovec, Zlatko Wurzberg',
    date: '2004.',
    info: '91 str. / meki uvez',
    price: '75,00 kn',
    discountedPrice: '56,25 kn',
    fiftyOff: false,
    description: `"Postoji doba u kojemu više ne susrećemo život nego vrijeme" - rečenica je iz romana Terasa u Rimu (Velika nagrada Francuske akademije), u kojemu je Pascal Quignard ispričao život i djelo slikara Geoffroya Meaumea, rođenog u Parizu 1617. godine i umrlog u Utrechtu 1667. godine. Meaume je pripadao školi slikara koji su na tankoćutan način prikazivali stvari koje je većina ljudi smatrala vulgarnima. Poput svojih suvremenika, on je putovao od grada do grada, od Brugesa, Antwerpeena, Mainza, Pariza, Londona, do juga Italije. U Rimu se zadržao najduže. Njegov je atelje imao terasu na Aventinu gdje bi njegov prijatelj Lorenac dolazio u suton razgovarati o životu i umjetnosti. U Rimu je Meaume napravio gravure krajolika, religioznih scena i opscenosti koje su bile zapaljene na javnom trgu 1664. godine. Seksualnost i zabranjena ljubav prema Nanni Veet Jakobsz upropaštavaju Meaumea, ali neiscrpni razgovor s odsutnim bićem kojemu je posvećen cijeli njegov život čine zapravo "materiju" njegova djela.Tijelo, vatra, atmosfera tišine i zaustavljena vremena, kako mistične tako i svakodnevne stvari obilježavaju ovaj roman koji je ispričan slikarskim postupkom chiaroscura.

Pascal Ouignard, rođen 1948. u Verneuil-sur-Avreu, jedan je od najboljih i najplodnijih francuskih suvremenih romanopisaca i esejista, po stilu i senzibilitetu antipod jednom Michelu Houellebecqu. Dugi je niz godina radio kod Gallimarda, a od 1994. godine isključivo se posvetio pisanju. Za trilogiju pod naslovom Posljednje carstvo. Lutajuće sjene okrunjen |e 2002. godine najprestižnijom, Goncourtovom nagradom.`
  },
  {
    id: 59,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/sirenje%20podrucja%20borbe.jpg',
    title: 'Širenje područja borbe',
    slug: 'sirenje-podrucja-borbe',
    author: 'Michel Houellebecq',
    translation: 'Marinko Koščec',
    date: '7/2013.',
    info: '151 str. / meki uvez',
    price: '95,00 kn',
    discountedPrice: '71,25 kn',
    fiftyOff: false,
    description: `Junak ili antijunak prvog i odmah kultnog romana Michela Houellebecqa Širenje područja borbe napunio je trideset godina. Kao informatičar zarađuje dva i pol puta više od prosječne plaće. Unatoč takvoj kupovnoj moći on ne privlači žene. Lišen ljepote i šarma, sklon čestim depresijama, on ne odgovara onome što žene ponajprije traže na tržištu seksa ili narcističkog zadovoljenja. Kao diskvalificirani igrač, ali i prodorni promatrač modernog života, on opisuje i život srodnih mu ljudi, njihovu grčevitu potragu za malo više užitka, malo više ljubavi, malo više novca.Ta se borba prenijela u sve sfere egzistencije pod utjecajem liberalnog modela života, a da se utočište ne može naći ni u krevetu. Seksualnost je, dapače, samo karika u lancu sustava socijalne hijerarhije... U ovom razornom, ostrašćenom i čak smiješnom romanu, po kojem je snimljen film, odigrane kazališne predstave, Houellebecq kazuje u nekoliko rečenica ono što sociolozi, filozofi, ekonomisti ili povjesničari nikad nisu znali ni mogli reći o modernom pojedincu i liberalnom svijetu koji ga okružuje.
    
Rođen 1958. godine, Michel Houellebecq, pjesnik, esejist i romanopisac, predvodnik je nove generacije francuskih pisaca. Romanesknom trilogijom (Širenje područja borbe, Elementarne čestice i Platforma - u cjelini preveden ja na hrvatski jezik) postigao je svjetski uspjeh, ali i podijelio kritiku, sablaznio čitatelje te uključio instance pravosuđa. Preveden na više od trideset jezika.`
  },
  {
    id: 60,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/stablo%20narance.jpg',
    title: 'Stablo naranče',
    slug: 'stablo-narance',
    author: 'Carlos Fuentes',
    translation: 'Tanja Tarbuk',
    date: '2004.',
    info: '273 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Likovi Fuentesovih priča izlažu se životnim opasnostima i trpe nepravde, ne uspijevajući zadovoljiti svoje ambicije: mornar koji baca bocu u more, španjolski vojnik koji živi s Indijancima i služi kao prevoditelj Cortesu, učeni Grk koji sudjeluje u opsadi Numancije, Cortesov sin koji je uvučen u zavjeru protiv kralja, i holivudski glumac koji posjećuje jednu javnu kuću u Acapulcu. Fuentes nam prikazuje bijedu osvajanja Amerike, ratne strahote u Europi i egzotičnost suvremenoga svijeta kroz slikovitu figuru stabla naranče. Orijentalno stablo čije je sjeme, zasađeno u Europi i Americi, simbol plodnosti, miješanja i zanosa "Novim Svijetom" postaje tako Arijadnina nit koja povezuje, suptilnom igrom zrcala svih pet Fuentesovih novela. Okrugla ploda poput majčine sise ili zemlje koju pomorac-otkrivač sanja obići, stablo naranče opisuje krugove vremena, osobne i povijesne sudbine... 

Carlos Fuentes, meksički romanopisac rođen 1928. godine, uz Garciju Marqueza i Vargasa Llosu, jedan je od divova južnoameričke književnosti, uvijek u najjužem krugu pretendenata na Nobelovu nagradu. U njegovu se djelu miješaju katolički sprovodi i poganska žrtvovanja, španjolske palače i aztečke piramide, ritualne, kulturne i socijalne razlike između kultura starog i novog svijeta. Autor "Smrti Artemija Cruza", "Starog Gringa", "Terra Nostre", "Godine s Laurom Diaz", Fuentes je, između brojnih nagrada, dobitnik i Cervantesove nagrade 1987. godine.`
  },
  {
    id: 61,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/diokecijanova%20palaca.jpg',
    title: 'Dioklecijanova palača sunca (+DVD)',
    slug: 'dioklecijanova-palaca-sunca',
    author: 'Mladen Pejaković',
    translation: null,
    date: '2006.',
    info: '269 str. / tvrdi uvez',
    price: '490,00 kn',
    discountedPrice: '367,50 kn',
    fiftyOff: false,
    description: `Dioklecijanova palača izvanredni je spomenik kulture uvršten u UNESCOV popis spomenika svjetske kulturne baštine. Interes za Dioklecijanovu palaču traje stoljećima. Načelna pitanja i mnoštvo pojedinosti ipak je ostalo nerazriješeno pa zanimanje za strukturu ovog spomenika ostaje i nadalje živo i poticajno.

Uz knjigu je priložen dokumentarni film Bogdana Žižića Palača sunca (DVD izdanje).`
  },
  {
    id: 62,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/krokodil.jpg',
    title: 'Krokodil i druge pripovijesti',
    slug: 'krokodil-i-druge-pripovijesti',
    author: 'Felisberto Hernandez',
    translation: 'Tanja Tarbuk',
    date: '2006.',
    info: '331 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Pustolovine jednog vrlo siromašnog pijanista, u kojima smisao za komično preobražava gorčinu života prožetoga porazima, polazna su točka „Krokodila i drugih pripovijesti“ Urugvajca Felisberta Hernandeza. Dovoljno je da počne pripovijedati o sitnim jadima života koji se odvijao u malim orkestrima montevideovskih kavana i na koncertima što su kružili po provincijskim mjestima u dolini rijeke La Plata, pa da se na stranicama počnu množiti gegovi, halucinacije i metafore u kojima predmeti žive kao osobe. No to je samo polazna točka. Ono što razvija Hernandezovu fantaziju to su neočekivani pozivi koji plahom pijanistu otvaraju vrata tajanstvenih kuća, osamljenih imanja na kojima žive bogati i ekscentrični likovi, žene pune tajanstvenosti i neuroza.

Felisberto Hernandez (1902. – 1964.), Urugvajac, rođen u Montevideu, pripovjedač i pijanist. Vjerojatno najsjajniji predstavnik fantastične književnosti svoje zemlje. A prema mišljenju kritike, s Borgesom dijeli vodeće mjesto u toj književnoj vrsti u dolini rijeke La Plata.

Felisberto Hernandez je pisac koji nije nikome nalik: nijednom Europejcu i nijednom Južnoamerikancu; on je pravi „slobodni strijelac“ koji dovodi u pitanje svaku klasifikaciju i svako obilježje, ali nedvojbeno prepoznatljiv čim se otvore njegove stranice.`
  },
  {
    id: 63,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/wauthier.jpg',
    title: 'Plodovi sjene',
    slug: 'plodovi-sjene',
    author: 'Jean-Luc Wauthier',
    translation: 'Vanda Mikšić',
    date: '2006.',
    info: '59 str. / tvrdi uvez',
    price: '70,00 kn',
    discountedPrice: '52,50 kn',
    fiftyOff: false,
    description: `Nakon progresivnog nestanka metafizike iz poezije, poetska riječ Jean-Luca Wauthiera želi sabrati sve ono što se raspršilo u odsutnosti. Wauthierova je poezija metafizička u ontološkom smislu, utoliko što želi zahvatiti u prisutnost i bivanje stvari, ali rasterećena filozofske težine i terminologije. Ni apstraktna ni eliptička, Wauthierova poezija je jednostavna i čitka, te polazi od iskustva, makar to iskustvo bila i odsutnost, samoća i tišina, koja se pojavljuje u svim pjesmama kao njihov nesvodivi oslonac.
    
Jan-Luc Wauthier rođen je 1950. godine u belgijskom gradu Charleroi i jedan je od vodećih belgijskih pjesnika frankofonog izraza. Predaje književnost u Nivelleu. Glavni je urednik najpoznatijeg belgijskog časopisa za poeziju Le Journal des poetes, a koordinator je i pjesničkog Bijenala u Liegeu koji je utemeljio legendarni Arthur Haulot. Objavio je desetak zbirki poezije i nekoliko knjiga proza, a dobitnik je više belgijskih i međunarodnih nagrada. U studenome 2004. godine Jean-Luc Wauthier gostovao je na Festivalu „Književnost uživo“ u Zagrebu, gdje je imao zapažen nastup.`
  },
  {
    id: 64,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/lira%20delirij.jpg',
    title: 'Lira/Delirij',
    slug: 'lira-delirij',
    author: 'Dražen Katunarić',
    translation: null,
    date: '2004.',
    info: '113 str. / meki uvez',
    price: '49,00 kn',
    discountedPrice: '36,75 kn',
    fiftyOff: false,
    description: `Zbirka pjesama "Lira/ Delirij" sastavljena je od više raznorodnih ciklusa. Jedan čine "cendrarsovski" niz sastavljen na osnovi pustolovina s meksičkog putovanja, pun boja, živosti i aluzija na doživljeno, drugi je dio epigramatski i tiče se obraćanja, često s primjesama ironije i cinizma, poznatim i nepoznatim osobama. U tim epigramima autor radi na skidanju (lažnih) svetokrugova. Ali premda mu je nakana ikonoklastička, stil tih epigrama teži uzdignutoj dikciji antičkog žanra. Katunarićevi su epigrami psihološki i nadasve moralni portreti pojedinaca koje on punim glasom proziva, pa time sam preuzima ulogu nepotkupljivog jamca. 
    
Dražen Katunarić rođen je 25. 12. 1954. godine u Zagrebu. Pjesnik, esejist, prozaik. Završio je filozofiju na Sveučilištu humanističkih znanosti u Strasbourgu. Glavni je urednik časopisa Europski glasnik te izdavačke kuće Litteris. Dosad je objavio petnaestak knjiga, pored ostalih, Mramorni Bakho (1983., Brankova nagrada). Pučina (1988.), Kuća dekadencije (1992.), Nebo/Zemlja (1993., Nagrada Tin Ujević), Crkva, ulica, zoološki vrt (1994.), Priča o špilji (1998.), Lijepak za slavuja (1998., Nagrada Matice hrvatske), Parabola (2001.), Kobne slike (2002.), te u prijevodu Ecclesia invisibilis (2001., Orient-Occident, Bukurešt), Isolomania (2004., Albiana, Ajaccio), Cherries (2004., Blue Aster Press, New York). Dodijeljen mu je red Viteza umjetnosti i književnosti francuskog Ministarstva kulture.`
  },
  {
    id: 65,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/skljarov.jpg',
    title: 'Slap plavih boja',
    slug: 'slap-plavih-boja',
    author: 'Miho Skljarov',
    translation: null,
    date: '2008.',
    info: '115 str. / tvrdi uvez',
    price: '130,00 kn',
    discountedPrice: '97,50 kn',
    fiftyOff: false,
    description: `Slap plavih boja prva je zbirka izabranih pjesama Miha Skljarova, nastala nakon dvadesetgodišnjeg samozatajnog pisanja poezije. Njegovo pjesništvo odlikuje mediteranska jasnoća, ljubavna čežnja i melankolija. Nakon progresivnog nestanka romantičnog iz poezije, poetska riječ Mihe Skljarova želi sabrati sve ono što se raspršilo u odsutnosti.

Miho Skljarov rodio se u Trstenu pored Dubrovnika 1926. godine od oca Rusa i majke Hrvatice. Sudjelovao je u NOB-u od 1943. do kraja rata i za dlaku izbjegao strijeljanje. 1951. godine diplomirao je na Filozofskom fakultetu, grupa ruski, hrvatski i slavenski jezici i književnost. 1965. doktorirao je s temom »Upotreba ličnih zamjenica u ruskom i hrvatskom jeziku«. Redovni profesor Filozofskog fakulteta postao je 1963. i predavao hrvatsku i rusku književnost i metodiku sve do umirovljenja. Osim sveučilišnih udžbenika objavio je knjige: 

Jezik i govor u nastavi stranih jezika [Školske novine, Zagreb, 1987.] i Teorija i praksa u nastavi stranih jezika (Školska knjiga, Zagreb, 1990.]. Dobitnik je nagrade »Ivan Filipović« za doprinos znanosti. Jedna njegova pjesma uvrštena je u zbirku najljepših lirskih pjesama koju je izdao Međunarodni institut za književnost »Erato«, a isti mu je dodijelio i priznanje za doprinos književnom stvaralaštvu. `
  },
  {
    id: 66,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/rene%20char.jpg',
    title: 'Hipnosovi listići i druge pjesme',
    slug: 'hipnosovi-listici-i-druge-pjesme',
    author: 'Rene Char',
    translation: 'Zvonimir Mrkonjić',
    date: '2010.',
    info: '95 str. / tvrdi uvez',
    price: '130,00 kn',
    discountedPrice: '97,50 kn',
    fiftyOff: false,
    description: `Hipnosovi listići, jedna od zbirki unutar Izabranih pjesama, napisani su između 1943. i 1944. godine dok je René Char bio aktivan u pokretu otpora. Posvećeni su Albertu Camusu. Pjesme su napisane u napetosti, bijesu, strahu, gađenju, lukavstvu, iluziji budućnosti, prijateljstvu i ljubavi.  Zbirka je imala golem utjecaj na razvoj europske pjesme u prozi koji se može osjetiti i u hrvatskom pjesništvu šezdesetih godina.

René Char (1907. – 1988.), jedan je od najvećih francuskih pjesnika dvadesetog stoljeća. Char krči svoj pjesnički put sam na tragu prevratničke linije Rimbaud-Lautréamont, ali istodobno njegov ga sredozemni osjećaj za jezgrovitost upućuje na zagonetne fragmente filozofa Heraklita i drugih predsokratovaca. Nakon Čekića bez gospodara, 1934., poznate su Charove zbirke, Bijes i tajna, 1948., Sunce vodâ, 1949., Jutrenjaci, 1950., Riječ kao otočje, 1962. i dr. Otkako ga je Albert Camus nazvao «pjesnikom našeg preporoda», ugled Renéa Chara nije prestao rasti.`
  },
  {
    id: 67,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/thiers2.jpg',
    title: 'Bijela postaja',
    slug: 'bijela-postaja',
    author: 'Ghjacumu Thiers',
    translation: 'Vanda Mikšić',
    date: '2007.',
    info: '80 str. / tvrdi uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `U trenutku kad je Thiers počeo pisati, prije trideset i pet godina, korzički jezik bio je u procesu izumiranja. Otada se, zahvaljujući žilavom otporu ponajviše kulturnih krugova, situacija bitno promijenila i on postaje profesor korzičkog jezika i književnosti na Sveučilištu u Cortiju. Thiersovu poeziju odlikuje mediteranska jasnoća, vedrina i melankolija. Otočki karakter zemlje pretapa se u njegove stihove živim bojama, oblicima i mirisima u ugođaju mudrog pijanstva osjetila.`
  },
  {
    id: 68,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/noel.jpg',
    title: 'Ostatak puta',
    slug: 'ostatak-puta',
    author: 'Bernard Noel',
    translation: 'Martina Kramer',
    date: '2010.',
    info: '93 str. / tvrdi uvez',
    price: '130,00 kn',
    discountedPrice: '97,50 kn',
    fiftyOff: false,
    description: `Razmišljamo li o poeziji Bernarda Noela, stavljamo se u poziciju leta. Stvari plivaju u pogledima. Percepcija se rastvara u prolaznosti kože i tijela. Tijelo je iskustvo granica, ono uvijek igra na kartu zadovoljstva / nezadovoljstva, odnosno oksimoronskog susjedstva stvari s njihovom negacijom. Poezija prema Bernardu Noelu nalazi se u pažljivom iščekivanju tjelesne nagosti koja nije ni čisto unutra ni čisto vani, pjesma razotkriva i putuje u onome što je tradicionalno zabranjeno pogledu i dodiru. Tijelo se tako opire krizi smisla koju danas živimo.
    
Prije svega pjesnik, Bernard Noel, rođen 1930. godine, također je i romanopisac, esejist i kritičar umjetnosti. Iznimno plodan, autor je više od sedamdeset knjiga. Jedan je od najpoštovanijih glasova suvremene francuske poezije.`
  },
  {
    id: 69,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/percepcija%20europe.jpg',
    title: 'Percepcija Europe/ La Perception de l\'Europe',
    slug: 'percepcija-europe',
    author: 'Dražen Katunarić (uredio)',
    translation: null,
    date: '2009.',
    info: '219 str. / meki uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `Skup pod naslovom „Kako je Europa danas percipirana“, održan 18. studenoga 2008. godine u Zagrebu, želio je odgovoriti na pitanje kako je Europa shvaćena danas, je li to samo poslovni klub iz interesa ili ona još uvijek inkarnira kulturno i duhovno jedinstvo u razlikama. Može li se nakon globalizacijskih procesa Europa još uvijek prepoznati ili ona samo egzistira u zemljopisnom i trgovačkom smislu? Na to pitanje bili su pozvani odgovoriti intelektualci poput Chaterine Lalumiere, Alfonsa Mattera-Recigliana, Drage Roksandića, Philippea Dessainta, Predraga Matvejevića, Nevena Šimca i drugih. Namjera je izdavača Litteris da diskursi uglednih sudionika budu trajno zabilježeni unutar korica knjige jer oni to doista zavređuju.`
  },
  {
    id: 70,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/tigrova%20mast.jpg',
    title: 'Tigrova mast i druge priče',
    slug: 'tigrova-mast-i-druge-price',
    author: 'Dražen Katunarić',
    translation: null,
    date: '2005.',
    info: '168 str. / meki uvez',
    price: '85,00 kn',
    discountedPrice: '63,75 kn',
    fiftyOff: false,
    description: `Knjiga Tigrova mast sastoji se od četiriju dužih pripovijesti pod sljedećim nazivima: "Tigrova mast", "Carmen", "Amigos para siempre" i "Gospođa Miranda". Postoje dvije zajedničke točke koje objedinjuju ovu zbirku pripovijesti. Prva je što redom tematiziraju odnos muškarca i žene te zadiru u njihovu seksualnost, a druga je što se većinom događaju u egzotičnim krajevima poput Kine, Indije, sjeverne Afrike, ali ne isključivo, nego i na relaciji Split -  Beč. Premda je putovanje u stranu državu čest okvir radnje, ono možda bolje izoštrava i taj odnos junaka prema vlastitoj zemlji jednom kad zaluta u nepoznate predjele. 

Po strukturi pripovijesti su dosta raznorodne, ponegdje hladno i objektivno, dokumentaristički pisane, a ponegdje "ispovjedno-lirski". Bilo da je riječ o odnosu supružnika, o bračnom preljubu, odnosu prema prostitutki, prvoj ljubavi ili neukrotivoj ženi, bilo da u prezentu obrađuju daleku prošlost, a u perfektu obuhvaćaju vrijeme koje se nameće kao sadašnjost, priče iz "Tigrove masti" nastoje protumačiti, svaka za sebe, dilemu o ispunjenosti ili promašenosti ljubavi, i dakle - života. 
    
Dražen Katunarić rođen je 25. 12. 1954. godine u Zagrebu. Pjesnik, esejist, prozaik. Završio je filozofiju na Sveučilištu humanističkih znanosti u Strasbourgu. Glavni je urednik časopisa Europski glasnik i Relations te izdavačke kuće Litteris. Dosad je objavio petnaestak knjiga, pored ostalih, Mramorni Bakho (1983., Brankova nagrada). Pučina (1988.), Kuća dekadencije (1992.), Nebo/Zemlja (1993., Nagrada Tin Ujević), Crkva, ulica, zoološki vrt (1994.), Priča o špilji (1998.), Lijepak za slavuja (1998., Nagrada Matice hrvatske), Parabola (2001.), Kobne slike (2002.), te u prijevodu Ecclesia invisibilis (2001., Orient-Occident, Bukurešt), Isolomania (2004., Albiana, Ajaccio), Cherries (2004., Blue Aster Press, New York). Dodijeljen mu je red Viteza umjetnosti i književnosti francuskog Ministarstva kulture.`
  },
  {
    id: 71,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/barbarin%20u%20aziji.jpg',
    title: 'Barbarin u Aziji',
    slug: 'barbarin-u-aziji',
    author: 'Henri Michaux',
    translation: 'Ana Buljan',
    date: '2004.',
    info: '187 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '55,00 kn',
    fiftyOff: true,
    description: `Godine 1927. Henri Michaux otputovao je u Ekvador – nelagodno iskustvo o kojemu je objavio svoju prvu knjigu. Nakon smrti oba roditelja 1929. godine putuje u sjevernu Afriku, Tursku, Italiju, a 1930.-1932. i na Daleki istok gdje postaje doživotno opčinjen istočnjačkim religijama i misticizmom. 

U knjizi "Barbarin u Aziji" Henri Michaux ne podliježe općim mjestima putopisne književnosti, uzalud ćemo tražiti opise spomenika ili ulica u Indiji, Kini, Japanu, Cejlonu, zemljama u kojima se zatekao. Riječ je prije svega o duhovnome susretu između zapadnoga intelektualca i azijskoga čovjeka. Michauxove su opservacije iznimno precizne, često iznenađujuće i daju portret Azije izvan svih uobičajenih predodžbi. Knjiga ima vrlo jaki poetski naboj i poslije čitanja osjećamo se ispunjeni. "Barbarin u Aziji" svjedoči o čudesnoj sprezi percepcije i stila te se smatra među najboljima u Michauxovu opusu
 
Henri Michaux (1899.-1984.), francuski pjesnik, esejist i slikar. Sedamdesetih godina Michaux je postao svjetski priznat i poznat, potpomognut pozitivnom kritikom francuskih nadrealista, predstavnika novog vala, i američkih pjesnika beat-generacije (Moji posjedi, Ecuador, Daleka unutrašnjost, Život u naborima).`
  },
  {
    id: 72,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/pola_stoljeca_poezije.jpg',
    title: 'Pola stoljeća poezije Slavka Mihalića',
    slug: 'pola-stoljeca-poezije-slavka-mihalica',
    author: 'Tea Benčić Rimay',
    translation: null,
    date: '2009.',
    info: '331 str. / meki uvez',
    price: '110,00 kn',
    discountedPrice: '82,50 kn',
    fiftyOff: false,
    description: `Mihalić je pjesnik koji uči nadgradnji same poezije tajnom stilizacijom neočekivanih postupaka: kad nam se čini da se pjesma rasprostire u emotivnom, on je sužava u razumsko, kada nas vodi da pratimo priču, dokida je, presijeca jakim metaforičkim slikama. 
Upravo je Mihalić mnogima pokazivao novi pjesnički put i onda kada se činilo da su sve riječi smrvljene i da će sutra govor izumrijeti.
    
Njegova poezija često je uspostavljala red u pjesničkom neredu, pokazivala mogućnost cjelovitog doživljaja moderne i postmoderne lirike, ali tako da pjesnik nikada ne odustaje od ijepote i snage pjesničkog izrijeka, ne dopušta da se svijet na njega sruši, te uvijek stigne otvoriti ili pak zatvoriti neka nova-stara vrata.
    
Bez obzira na mnoštvo ispisanih kritika o Mihalićevoj poeziji, a s obzirom na njegovu razvojnu i rastuću poetiku, o Mihaliću tek treba početi pisati. To je polazna točka ove vrijedne, zaokružene i zanimljive knjige Tee Benčić Rimay.
    
Pedeset godina života poezije najlucidnijeg hrvatskog pjesnika Slavka Mihalića pokušava se tematizirati u pet poglavlja: iscrpnom i literariziranom bibliografijom pjesnika, antologijskim akronološkim izborom od sto pjesama, najvažnijim pregledom kritika ove poezije od početaka njena stvaranja do danas, te autorskom interpretacijom koja obuhvaća srž Mihalićeve poetike; esejističku analizu jedne pjesme; slijed izdvojenih pojedinačnih zbirki; a posebno se analitički odnosi prema ritmu Mihaićeva besjedovna stiha, kao i izdvojenom opusu njegovih pjesama u prozi.`
  },
  {
    id: 73,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/pejakovic.jpg',
    title: 'Mladen Pejaković - monografija',
    slug: 'mladen-pejakovic-monografija',
    author: 'Jadranka Pintarić, Jagor Bučan',
    translation: null,
    date: '2009.',
    info: '343 str. / meki uvez',
    price: '490,00 kn',
    discountedPrice: '367,50 kn',
    fiftyOff: false,
    description: `Mladen Pejaković (1928.-2005.) važan je znanstvenik i teoretičar povijesti umjetnosti, slikar, pisac, pedagog, autor animiranih filmova, izložbenih i muzejskih stalnih postava. Njegovo slikarstvo ostavilo je u suvremenoj umjetnosti značajan i osobit trag, ali je nedovoljno bilo kritički valorizirano zbog okolnosti što je autor ponajprije poznat kao znanstvenik i istraživač povijesti arhitekture. Nakon Pejakovićeve smrti, njegovi učenici i prijatelji, osjetivši dug prema ovom velikom autoru, odlučili su napraviti reprezentativnu monografiju, koja je okupila na jednom mjestu glavninu njegova slikarskog opusa, i tako upozorila na veliki tematski raspon i značenje toga umjetnika.`
  },
  {
    id: 74,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/Buddha_u%20potkrovljuManji.jpg',
    title: 'Buddha u potkrovlju',
    slug: 'buddha-u-potkrovlju',
    author: 'Julie Otsuka',
    translation: null,
    date: '10/2014.',
    info: '140 str. / meki uvez',
    price: '95,00 kn',
    discountedPrice: '71,25 kn',
    fiftyOff: false,
    description: `Roman Buddha u potkrovlju, ispričan u nezaboravno prisnom prvom licu množine, prati sudbine bezimenih žena u Americi, mladih Japanki koje su, u potrazi za boljim životom, ranih 1900-ih prešle Tihi ocean kako bi se udale za muškarce koje nisu vidjele nikada u životu. 

Na putovanju brodom, koje je trajalo tjednima, ove naručene nevjeste mučne i naporne dane krate uspoređujući fotografije svojih budućih supruga i zamišljajući kako će izgledati njihov novi život u nepoznatoj zemlji. Međutim, već je i to putovanje puno izazova i nepredvidivih situacija, i kao da naviješta ono što ih tek očekuje u "obećanoj" zemlji... 
    
Julie Otsuka (1962) rodila se i odrasla u Kaliforniji. Autorica je hvaljenog romana When the Emperor Was Divine. Među brojnim prestižnim nagradama koje je dobila za njezin bestseler, Buddha u potkrovlju, ističu se Nagrada Američke akademije umjetnosti i književnosti, PEN/Faulknerova nagrada, u Francuskoj Nagrada Femina, u Njemačkoj Nagrada književna nagrada Albatros itd. Živi u New Yorku.
...
    
"Blistav mozaik nada i snova zbog kojih se toliko mnogo emigranata otisnulo preko oceana prema nepoznatoj zemlji. ... Otsuka oslikava izazove, patnje i povremenu radost što ih pronalaze u novoj domovini. ... Profinjeno poetična, odmjerena na riječima, precizna i evokativna, poput tanke, ova je knjiga rijetka, jedinstvena poslastica. ... Zanosno detaljna. ... Povijesna lekcija o boli." 
The Washington Independent Review of Books
...

"Fascinantno paradoksalan: kratak opsegom a simfonijski dosegom, sveobuhvatan a živ u pojedinostima. Poput poentilističke slike sastavljen od jarkih točaka boje: vinjeta koje u par redaka oslikavaju cio život stapajući se u vibrantan skupni portret."
The Seattle Times
...

"Hipnotičan. ... Ispričan u nezaboravno prisnom prvom licu množine, roman prati sudbine bezimenih žena u Americi. ... Otsuka otkriva draž i snagu emigrantskog (i ženskog) preživljavanja, pomno nas navodeći da iznova promislimo o dubokoj boli što je sadrži vječita nada. Iako žene nestaju, njihove riječi ostaju."
More
...

"Čarobno i s malo riječi... Koristeći zbirno "mi" da izrazi promjenljiv ali snažan grupni identitet iz kojeg se povremeno pomaljaju i potom u nj uranjaju zasebno ocrtani pojedinci, Otsuka je stvorila brižno dotjeranu povijesnu sliku, kakvi su i potezi perom njezinih skromnih emigrantkinja u pismima voljenima koje više nikada neće vidjeti."
O, The Oprah Magazine`
  },
  {
    id: 75,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/Boris_maruna_mali.jpg',
    title: 'Tvrd pjevač',
    slug: 'tvrd-pjevac',
    author: 'Boris Maruna',
    translation: null,
    date: '9/2014.',
    info: '80 str. / meki uvez',
    price: '75,00 kn',
    discountedPrice: '65,25 kn',
    fiftyOff: false,
    description: `Hrvatski književnik Boris Maruna (1940.-2007.) u svom pjesničkom opusu objelodanio je za života nekoliko knjiga pjesama, tiskanih dijelom u emigraciji i dijelom u domovini, nakon povratka 1990. godine. No na stranicama Hrvatske revije, u razdoblju od 1962. god 1971. godine objavio je Maruna četrdeset pjesama koje nije uvrstio ni u jednu knjigu, niti ih je na bilo koji drugi način ponovo objavio. Proučavajući ostavštinu B. Marune i prikupljajući materijal za njegovu biografiju pisac i publicist Nikica Mihaljević prikupio je te zaboravljene i zametnute pjesme koje imaju sve odlike prepoznatljiva Marunina izričaja: transparentnost suda i stava, ironičnost, antidogmatičnost i sveprisutnu skepsu u zbirku kojoj je dao naslov po jednom od objavljenih ciklusa: Tvrd pjevač.`
  },
  {
    id: 76,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/Romanes_mali.jpg',
    title: 'Na ramenu anđela',
    slug: 'na-ramenu-andjela',
    author: 'Alexandre Romanès',
    translation: null,
    date: '9/2014.',
    info: '92 str. / meki uvez',
    price: '65,00 kn',
    discountedPrice: '48,75 kn',
    fiftyOff: false,
    description: `Čitati Romanèsa znači doživjeti kušnju najveće duhovne nagosti. 

U njegovoj poeziji nema nijedne metafore, metonimije, stilske figure, nema pravila ni koda, nego samo jednostavan jezik kojim pokušava prodrijeti u bit stvari. Teme o kojima Romanès najviše govori su kćeri, otac, obitelj, sloboda, Bog, smisao života. Ljepota pjesme otkriva se u krajnje pročišćenoj formi na granici poezije. Pjesma dodiruje ljudska srca i umove, unosi toplinu u njihov život, uzdiže ga. Poezija Aleksandra Romanèsa bogata je smislom, životom i strašću i predstavlja biser u aktualnom trenutku romskog pjesništva.`
  },
  {
    id: 77,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/Grubic_mali.jpg',
    title: 'Rukohvat riječi',
    slug: 'rukohvat-rijeci',
    author: 'Damir Grubić',
    translation: null,
    date: '6/2014.',
    info: '112 str. / meki uvez',
    price: '75,00 kn',
    discountedPrice: '62,25 kn',
    fiftyOff: false,
    description: `"Rukohvat riječi" je tekst koji možemo označiti kao poemu. Čini se da ju je njezin autor Damir Grubić (1956.-2014.) napisao u jednom dahu, predosjećajući vlastitu smrt, kao da je riječ o ekspresionističkom kriku. I obračunu ili pak o svođenju računa. Može se čitati kao snoviđenje, kao zapis mahnite kiše misli i kao opis slike smrti.`
  },
  {
    id: 78,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/pametno%20srce_mali.jpg',
    title: 'Pametno srce',
    slug: 'pametno-srce',
    author: 'Alain Finkielkraut',
    translation: null,
    date: '11/2014.',
    info: '211 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `Alain Finkielkraut, koji je ponajprije poznat po svojim političko-filozofijskim djelima i angažmanu, u ovoj knjizi odlučio se vratiti svojoj staroj, inicijalnoj ljubavi još od studija književnosti – romanu. Pod lijepim naslovom Pametno srce koje aludira na Pascala, na jednom je mjestu okupio devet čitalačkih iskustava, devet različitih tumačenja djela koja su ga snažno obilježila. Knjige koje čine njegovu idealnu biblioteku i između kojih cirkulira njegova misao su sljedeće: Šala Milana Kundere, Sve prolazi Vassilija Grossmana, Povijest jednog Nijemca Sebastiana Haffnera, Zadatak Philipa Rotha, Prvi čovjek Alberta Camusa, Lord Jim Josepha Conrada, Zapisi iz podzemlja Fjodora M. Dostojevskog, Washington square Henryja Jamesa i Babetina gozba Karen Blixen.`
  },
  {
    id: 79,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/dan%20po%20dan_mali.jpg',
    title: 'Dan po dan',
    slug: 'dan-po-dan',
    author: 'Jasminka Domaš',
    translation: null,
    date: '11/2014.',
    info: '227 str. / meki uvez',
    price: '120,00 kn',
    discountedPrice: '90,00 kn',
    fiftyOff: false,
    description: `Knjiga "Dan po dan - židovska duhovnost" nastavak je autoričina istraživanja mističnih staza judaizma, ona je zapravo židovska mistika u svakodnevnom životu. Crpeći mudrost iz starih židovskih spisa i mističnih židovskih knjiga, brojnih priča i legenda autorica nam približava i rasvjetljuje univerzalne pojmove poput duše, kajanja, molitve, izgnanstva, patnje i smrti, nepravde i oprosta, ili pak govori o odnosu misli, tijela i duha te o tome kakva je moć onoga što biramo, donoseći pritom, dakako, esencijalne istine o životu. Put prema židovskoj meditaciji vodi kroz promišljanje o sebi samima, pa autorica, svojim jasnim i jednostavnim, ali poetičnim govorom, pišući o dubinama vjere i Božje prisutnosti u našem svijetu, govori i o vlastitome prožimanju unutarnjom svjetlošću i promatranju stvari unutarnjim okom.`
  },
  {
    id: 80,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/treca%20zemlja_mali.jpg',
    title: 'Treća zemlja',
    slug: 'treca-zemlja',
    author: 'Žarko Paić',
    translation: null,
    date: '10/2014.',
    info: '503 str. / meki uvez',
    price: '175,00 kn',
    discountedPrice: '131,25 kn',
    fiftyOff: false,
    description: `Ideja ove knjige ponajprije je da otvori prostor mišljenja o estetici i književnosti kao fragilnim iskustvima slobode i emergencije. Ništa nije unaprijed određeno. Ne postoji nikakav konačni cilj i smisao pisanja ni u onome transcendentnome (božanskome), a niti u imanentnome (želja-tijelo). Posrijedi je iskustvo planetarnoga nomadizma i egzila, obrane dostojanstva riječi kao posljednjeg utočišta slobode pred prodorom tehnoznanstvene logike napretka i pred morbidnim povratkom estetika i ideologija pseudo-angažmana u ove ili one svrhe koje književnost svode na spektakl, politiku i propagandu, na marketing totalnoga nihilizma. Knjiga "Treća zemlja" posvećena je ne samo filozofskome pitanje o karakteru umjetnosti u doba tehnosfera na tragovima Heideggera, Deleuzea i Lyotarda, poglavito, nego se usmjerava analizi „velike književnosti“ s obzirom na ono što od nje preostaje danas kao trag slobode i kao iskustvo egzistencijalnoga otpora i subverzije vremenu totalne praznine i zaborava povijesti.`
  },
  {
    id: 81,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/bijeg%20i%20pobuna_mali.jpg',
    title: 'Bijeg i pobuna',
    slug: 'bijeg-i-pobuna',
    author: 'Goran Starčević',
    translation: null,
    date: '12/2014.',
    info: '475 str. / meki uvez',
    price: '169,00 kn',
    discountedPrice: '126,75 kn',
    fiftyOff: false,
    description: `Već je sam naslov knjige "Bijeg i pobuna - ogledi o napuštenom svijetu" provokativan i zahtijeva interpretaciju utoliko što autor polazi od preispitivanja temeljnih pojmova filozofije u djelima ključnih mislilaca suvremenosti od Heideggera, Derride i Deleuzea do Levinasa i Lyotarda da bi uspostavio „sustavnost“ u nesustavnome mišljenju suvremene filozofije.Temeljna je teza knjige da se nakon raspada metafizičkih sustava u različitim fragmentima života pojavljuju surogati istinske filozofije i života. To podjednako vrijedi za različite postmoderne verzije kulture kao masovnoga spektakla kao i za duh vremena. Pritom je pitanje etičnosti u doba koje naziva eskapizmom, a pod time podrazumijeva različite strategije bijega od bitnoga iskazivanja smisla života u otporu diktaturi digitalnoga doba, jedno od najvažnijih pitanja filozofije danas.`
  },
  {
    id: 82,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/republika%20maste_mali.jpg',
    title: 'Republika mašte',
    slug: 'republika-maste',
    author: 'Bruno Schulz',
    translation: 'Dalibor Blažina',
    date: '10/2015.',
    info: '227 str. / meki uvez',
    price: '120,00 kn',
    discountedPrice: '90,00 kn',
    fiftyOff: false,
    description: `Nakon Dućana cimetne boje (2005.) i Sanatorija pod klepsidrom (2007.), Republika mašte treća je i posljednja knjiga kojom Litteris predstavlja hrvatske prijevode književnog djela znamenitog poljsko-židovskog pripovjedača Brune Schulza, jednog od najvećih europskih pisaca 20. stoljeća. 
  
Knjiga je sačinjena od onih sačuvanih tekstova iz Schulzove ukupne ostavštine koji nisu pronašli mjesto u navedenim zbirkama pripovijedaka, a sastoji se od Rasutih pripovijedaka, izbora Schulzovih kritičkih tekstova te pisama što ih je pisac pisao svojim suvremenicima, kao i pisama upućenim njemu.`
  },
  {
    id: 83,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/bijeg_mali.jpg',
    title: 'Bijeg od knjige',
    slug: 'bijeg-od-knjige',
    author: 'Antun Barac',
    translation: null,
    date: '10/2015.',
    info: '298 str. / meki uvez',
    price: '150,00 kn',
    discountedPrice: '112,50 kn',
    fiftyOff: false,
    description: `U posthumno objavljenoj knjizi Bijeg od knjige, koju je 1965. godine za tisak priredio Jure Kaštelan, prvi put upoznajemo jednu novu dimenziju Barčeve ličnosti u smislu spontanog autoportretiranja: upoznajemo ga kao pisca bolnih zapisa nastalih za vrijeme logorovanja i kundakovanja u zloglasnom zatvoru Stara Gradiška, u vrijeme Drugog svjetskog rata; upoznajemo ga i kao pjesnika koga je rodio imperativ vremena, pa su u tom smislu i te pjesme refleks mučnine i gorčine rata. 

Bijeg od knjige ide među najvrednija djela koja su se šezdesetih godina pojavila na horizontu hrvatske književnosti; knjiga koja se ponekad doimlje bolno i mučno — jer već i sam naslov sadrži u sebi izvjestan protest, izvjesno gađenje, izvjesnu bol - no to ne umanjuje njenu vrijednost, naprotiv, povećava je.`
  },
  {
    id: 84,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/venerino%20srce_mali.jpg',
    title: 'Venerino zrcalo',
    slug: 'venerino-zrcalo',
    author: 'Simona Delić',
    translation: null,
    date: '10/2015.',
    info: '271 str. / tvrdi uvez',
    price: '149,00 kn',
    discountedPrice: '111,75 kn',
    fiftyOff: false,
    description: `U knjizi eseja Venerino zrcalo Simona Delić napisala je eseje o sefardskoj književnosti, ponajviše zaokupljena žanrom balade. Knjiga se najviše bavi komparativnim proučavanjem tradicionalne balade, njezinim podrijetlom, prijevodima, kao i otkrivanjem sličnosti i razlika između pojedinih zemalja u europskom okruženju povezanim tim tradicionalnim žanrom. Autorica pokazuje da španjolsko i hrvatsko tradicionalno pjesničko stvaralaštvo potječu iz istih izvora i da su im povijesne i kulturološke okolnosti istovjetne, te da je sefardska tradicija čvrsta spona između njih. Venerino zrcalo, djelo pisano čitko i jednostavno, namijenjeno je širokom dijapazonu potencijalnih čitatelja.`
  },
  {
    id: 85,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/knjizevni%20prostor_mali.jpg',
    title: 'Književni prostor',
    slug: 'knjizevni-prostor',
    author: 'Maurice Blanchot',
    translation: null,
    date: '10/2015.',
    info: '347 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '116,25 kn',
    fiftyOff: false,
    description: `Književni prostor Mauricea Blanchota jedna je od temeljnih knjiga naše modernosti. Ona nije samo esej o razumijevanju književnog stvaranja nego i precizno istraživanje o onom što je zaista značajno za današnjeg čovjeka sučelice činjenici da "nešto kao umjetnost ili književnost postoje": silazak u dubinu, pristup tajnovitom, iskustvo samoće i smrti. Autor istražuje djela Kafke, Mallarméa, Rilkea, Holderlina i mnoga druga. Možda nema toliko stroge, bogate meditacije o stvaralačkom činu u cijeloj teoriji književnosti od ove Blanchotove.`
  },
  {
    id: 86,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/putovanje%20italijom_mali.jpg',
    title: 'Putovanje Italijom',
    slug: 'putovanje-italijom',
    author: 'Johann Wolfgang von Goethe',
    translation: null,
    date: '12/2015.',
    info: '169 str. / meki uvez',
    price: '105,00 kn',
    discountedPrice: '78,75 kn',
    fiftyOff: false,
    description: `U rujnu 1876. godine Goethe se otisnuo na dugo i gotovo opsesivno željeno putovanje u Italiju. O tom putovanju, koje je na neki način bila njegova potraga za duhovnom domovinom, nije nikoga obavijestio već se potajno zaputio prema Italiji, i ostao gotovo dvije godine. Za svoga boravka s druge strane Alpa Goethe je mnogo pisao - prije svega dnevnik, ali i pisma koja je, zajedno s tim dnevničkim zapisima, potom slao prijateljima u Njemačku. Većina pisama bila je upućena Charlotti von Stein, s kojom je u Weimaru Goethe bio u romantičnoj vezi. 

Na osnovi sačuvanih dnevnika i pisama, Goethe je sastavio knjigu "Putovanje po Italiji", koja je neka vrsta nastavka njegova autobiografskog djela "Pjesništvo i zbilja", što ga je pisao cijeloga života i povremeno objavljivao dijelove.
    
U Europi se djelo "Putovanje po Italiji" smatra klasičnim i nezaobilaznim za Goethea, a i današnjem čitaocu bit će zanimljivo premda ga od njegova nastanka dijele stoljeća. `
  },
  {
    id: 87,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/u%20glavi%20brune_mali.jpg',
    title: 'U glavi Brune Schulza',
    slug: 'u-glavi-brune-schulza',
    author: 'Maxim Biller',
    translation: null,
    date: '12/2015.',
    info: '55 str. / tvrdi uvez',
    price: '70,00 kn',
    discountedPrice: '52,50 kn',
    fiftyOff: false,
    description: `U svom kratkom romanu ili proširenoj noveli Maxim Biller rekonstruira nesačuvano pismo Brune Schulza Thomasu Mannu iz 1938. godine koje otkriva intimne, erotsko-političke fantazije te dvojice pisaca, ali i sudbine koje su ih snašle u Drugom svjetskom ratu.
    
Maxim Biller, rođen u Pragu 1960. godine od ruskih roditelja,emigrira s roditeljima i sestrom u Njemačku. Autor je dvadesetak knjiga, romana, novela, kratkih priča, drama, eseja, koje su, osim u Njemačkoj, imale uspjeha u anglosaksonskom svijetu. Dobitnik je nekoliko međunarodnih nagrada.`
  },
  {
    id: 88,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/huellebeck%20pokoravanje_mali.jpg',
    title: 'Pokoravanje',
    slug: 'pokoravanje',
    author: 'Michel Houellebecq',
    translation: null,
    date: '12/2015.',
    info: '177 str. / tvrdi uvez/meki uvez',
    price: '',
    discountedPrice: '125,00 kn (meki uvez), 190,00 (tvrdi uvez)',
    fiftyOff: false,
    description: `Dva proročka romana obilježila su prošlo stoljeće: Orwelova 1984. i Huxleyjev Vrli novi svijet. Ne samo zato što su predvidjeli budućnost nego što su govorili istinu o sadašnjosti. Prema mnogim kritičarima i piscima kao što su  Emmanuel Carrère, Houellebecqov roman Pokoravanje produljuje njihovu anticipatorsku moć u 21. stoljeće, a događaji koji su uslijedili već su potvrdili jedan dio njegovih predviđanja. Nekoliko dana nakon izlaska romana Platforma, koja završava s iznenadnim napadom islamskih terorista na jedno ljetovalište, zbio se fatalni udar na njujorške blizance 11.9. 2001., a na sam dan kad je izišao roman "Pokoravanje" dogodio se pokolj redakcije "Charlie Hebdoa" gdje je ubijeno dvanaest nevinih ljudi; da bi suglasje bilo potpuno, i naslovnica toga satiričnog časopisa karikira Houellebecqa kao Nostradamusa. 
Naslov romana Pokoravanje upućuje na etimologiju riječi "islam", ali počinje pohvalom književnosti. Europa umire, glavni lik François obeshrabren je i umoran, ali srećom postoji velika književnost Karla-Jorisa Huysmansa kojoj je posvećen (glavno djelo: Naopako, u odličnom prijevodu na hrvatski Ane Buljan, Litteris, 2005.) i koja jedina ima moć zadržati spasonosnu distancu. U vrijeme predsjedničkih izbora 2022. godine, Socijalistička partija ulazi u koaliciju s "Muslimanskom braćom" da bi spriječili ekstremno desnu kandidatkinju Marine Le Pen da dođe na vlast. Rezultat? Francuska se pomalo islamizira bez puno škrgutanja zubiju. Na ulicama se više ne vide žene u haljinama, nego u hlačama. Religijski se znakovi ističu u školama i na sveučilištu. Zdravstveno osiguranje zamijenjeno je obiteljskom solidarnošću. Poligamija postaje legalna. Nezaposlenost je nestala jer žene napuštaju tržište rada. Uspostavlja se red i delinkvencije nestaje u sumnjivim kvartovima. Ovaj futuristički scenarij stavlja akcent na nepodnošljivu lakoću kojom se građani podvrgavaju novim vrijednostima. Vlast ne stvara pokornost nego pokornost stvara vlast (La Boétie). Nadasve satiričan prema francuskom društvu u kojem vladaju kukavičluk, servilnost i politička korektnost vladajućih i kulturnih elita, a ne "islamofoban" kako su ga lažno optužili i prije čitanja, najnoviji Houellebecqov roman političke fikcije, "golem i suptilan, pretjeran i pametan, nevjerojatan i logičan" (Pivot), radikalna je kritika zapadnog nihilizma, njegovih duhovnih i ontoloških deficita. 
           
Michel Houellebecq francuski je pisac planetarnog glasa i značenja. Njegovi romani Širenje područja borbe, Elementarne čestice, Platforma, Mogućnost otoka i Karta i teritorij obilježili su vrijeme u kojem živimo. `
  },
  {
    id: 89,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/neruda_nevidljivi_mali.jpg',
    title: 'Neruda i nevidljivi čovjek',
    slug: 'neruda-i-nevidljivi-covjek',
    author: 'Antonio Skármeta',
    translation: null,
    date: '11/2016.',
    info: '196 str. / meki uvez',
    price: '115,00 kn',
    discountedPrice: '86,25 kn',
    fiftyOff: false,
    description: `Antonio Skármeta priredio je izbor dvadeset Nerudinih pjesama, popratio ih esejističkim medaljonima te nam iz jednog sasvim drukčijeg motrišta dočarao život i djelo slavnog pjesnika.

Uzimajući za polazište neke Nerudine fasete - knjige, ljubavi, kuće, mora i, iznad svega, neka od njegovih svjetala i sjena, Skarmeta nam je otkrio nepoznati, širi izvanknjiževni (i intimistički) kontekst pjesnikova stvaralaštva, ispreplićući vješto svoja sjećanja pričom o vlastitom stvaralaštvu nadahnutom Nerudinim djelom. `
  },
  {
    id: 90,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/domas_dusa_mali.jpg',
    title: 'Duša je nebo',
    slug: 'dusa-je-nebo',
    author: 'Jasminka Domaš',
    translation: null,
    date: '9/2016.',
    info: '104 str. / meki uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `Meke riječi pjesama Jasminke Domaš prostiru pred čitateljem Mliječnu stazu među Sazviježđem. Iznjedrile iz Duše, gdje je izvor Ljubavi, vode nas i mudro i hrabro i ponizno kroz blagdan svjetlosti, kao što su žene drevnih rabina palile postojano luči uma i duše za svoje muževe.

Iz autoričinih misli koje oblikuju ove stihove doista niču vizualizacije plamtećih cvjetova koji se i pred čitateljevim svemirom razlete, rasprskavaju i umnožavaju, te poput kiše mirisnih latica po svakome od nas bešumno padaju. Samo žar duhovne ljubavi prepoznaje taj uzvišeni osjećaj kao pupoljke zelene iz kojih niču i mudrost i znanje.`
  },
  {
    id: 91,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/vukcevic_poetika_mali.jpg',
    title: 'Poetika tijela',
    slug: 'poetika-tijela',
    author: 'Lidija Vukčević',
    translation: null,
    date: '10/2016.',
    info: '188 str. / meki uvez',
    price: '90,00 kn',
    discountedPrice: '67,50 kn',
    fiftyOff: false,
    description: `Riječ je o esejima u kojima autorica vrlo suptilno analizira tijelo, svaki njegov, pa i najmanji dio - oko, usne, glavu, kosu, njuh, stopalo, zapešće, kožu, sluh, a to stvarno i tjelesno, fizičko "prerasta" u metafizičko (pa promišlja i o pojmovima poput duše ili vremena), pri čemu često uzmiče u skrovište poezije kao mudrosnog stajališta.

Lidija Vukčević svoje spise u prozi ne nastoji okupiti pomoću priče nego oblicima svojevrsnog poetskog enciklopedizma ili maštovitog usustavljivanja uspomenske građe. Poetika tijela originalno je zasnovan tekst bogat asocijacijama i poetskim lirizmom, koji dragocjenim poetskim govorom balansira između lirskog i dramskog, individualnog i univerzalnog.`
  },
  {
    id: 92,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/ponge_strani_mali.jpg',
    title: 'Na strani stvari',
    slug: 'na-strani-stvari',
    author: 'Francis Ponge',
    translation: null,
    date: '10/2016.',
    info: '108 str. / meki uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `Francis Ponge najpoznatiji je kao pjesnik po zbirci Na strani stvari, koja je izišla 1942. godine i koja daje jednu drukčiju viziju svijeta i predmeta iz banalne svakodnevice. Naizgled, riječ je o poetskom izvješću, najstrožem i najpreciznijem, o karakterističnim fizičkim kvalitetama svakog predmeta. Međutim, tom tehničkom i znanstvenom opisu pridružuje se i lingvističko i etimološko traženje, izbor i red slova koja čine riječ. Tako riječ umjesto da upućuje samo na fizički aspekt, postaje na neki način simbol i alegorija samog predmeta. Iz toga postupka proizlazi da svaki predmet ima vlastitu retoriku koja govori i o njegovim svojstvima. Iz asocijacija ideja i igre riječi proizlaze vrlo neobične permutacije, beskrajni suodnosi kojima je cilj da proizvedu iznenađenje i jedinstven doživljaj pred poznatim predmetom.`
  },
  {
    id: 93,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/engel%20zalazak_mali.jpg',
    title: 'Zalazak',
    slug: 'zalazak',
    author: 'David Engels',
    translation: null,
    date: '3/2017.',
    info: '343 str. / meki uvez',
    price: '145,00 kn',
    discountedPrice: '108,75 kn',
    fiftyOff: false,
    description: `Povjesničar David Engels u svojoj intrigantnoj knjizi eseja koja je izazvala mnoge pozitivne reakcije na Zapadu postavlja pozitivnu paralelu između krize rimskog svijeta u doba Republike i Europe na početku 21. stoljeća. 

Zalazak je proglašen najboljom knjigom eseja 2013. godine prema mišljenju Suddeutsche Zeitunga i Norddeutscher Rundfunka, kao što je u francuskim knjižarama doživio golem uspjeh, a u medijima potaknuo živu raspravu o aktualnosti rimske antike za suvremenu Europu. `
  },
  {
    id: 94,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/abello%20pedeset%20ljubavnih%20pjesama.jpg',
    title: 'Pedeset ljubavnih pjesama',
    slug: 'pedeset-ljubavnih-pjesama',
    author: 'Montserrat Abello',
    translation: null,
    date: '3/2017.',
    info: '130 str. / meki uvez',
    price: '80,00 kn',
    discountedPrice: '60,00 kn',
    fiftyOff: false,
    description: `Montserrat Abello jedna je od najznačajnijih katalonskih pjesnikinja druge polovice 20. i početka 21. stoljeća. Pedeset ljubavnih pjesama dvojezično je izdanje, a predstavljaju antologijski izbor iz njezina cjelokupnog stvaralaštva, to je ujedno i pedeset godina pisanja poezije. Središnja os ove knjige jest, dakako, ljubav, bez granica, ukorijenjena u nježnosti, a prisutna su tu i promišljanja o životu, o položaju žene, žudnji, o vlastitome tijelu.`
  },
  {
    id: 95,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/sansal%202084_mali.jpg',
    title: '2084. Kraj svijeta',
    slug: '2084-kraj-svijeta',
    author: 'Boualem Sansal',
    translation: null,
    date: '3/2017.',
    info: '279 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `U ovom romanu fantazmagorične utopije/distopije alžirski romanopisac Boualem Sansal nudi nam suvremenu inačicu Orwelova remek-djela, jednu 1984. sto godina kasnije, u doba religioznog fanatizma. 
U golemom imaginarnom carstvu Abistana (državi sličnoj islamskoj Sjevernoj Koreji), stanovnici su stalno pod nadzorom, podvrgnuti vjeri u jedinog Boga, Yolaha, kojeg na zemlji predstavlja Božji poslanik Abia. 
    
Roman je proglašen najboljom knjigom 2015. po anketi časopisa Lire, a dobio je i veliku nagradu Francuske akademije. `
  },
  {
    id: 96,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/werfel_bernardica_mali.jpg',
    title: 'Pjesma o Bernardici',
    slug: 'pjesma-o-bernardici',
    author: 'Franz Werfel',
    translation: null,
    date: '11/2017.',
    info: '559 str. / meki uvez',
    price: '170,00 kn',
    discountedPrice: '127,50 kn',
    fiftyOff: false,
    description: `Ovo remek-djelo u žanru povijesnoga romana ima svoju autobiografsku potku. Godine 1938. Franz Werfel sa svojom suprugom i Mahlerovom udovicom Almom Mahler bježi od nacističkih trupa i sklanja se u Francusku, gdje isto nije siguran. Iz Sanary-sur-Mera bježi u Lourdes i skriva se od 1940. godine. Premda po vjeroispovijesti Židov, duboko je dirnut pričom o Bernadette Soubirous, djevojčici koja je prva vidjela Gospu u jednoj špilji. Werfel se zavjetuje da će o njoj napisati roman ukoliko se spasi iz ratnog pakla. Kada 1942. stiže u Sjedinjene Američke Države, to mu i uspijeva...`
  },
  {
    id: 97,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/paic%20doba%20oligarhije_mali.jpg',
    title: 'Doba oligarhije',
    slug: 'doba-oligarhije',
    author: 'Žarko Paić',
    translation: null,
    date: '11/2017.',
    info: '563 str. / meki uvez',
    price: '175,00 kn',
    discountedPrice: '131,25 kn',
    fiftyOff: false,
    description: `Studija Doba oligarhije: Od informacijske ekonomije do politike događaja sustavno i kritički radikalno pokazuje što je ostalo od političkoga i politike u doba vladavine tehnosfere na ishodu suverenosti nacija-država i ulaska u doba "velikoga prostora" globalnoga poretka novih-starih imperija. Radi se o iznimnom, uistinu kapitalnome djelu o suvremenom dobu vladavine neoliberalne aksiomatike kapitalizma u području informacijske ekonomije, oligarhijskoga političkoga poretka i postmoderne kulture spektakla.`
  },
  {
    id: 98,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/domas%20izabrana_mali.jpg',
    title: 'Izabrana. Život Edith Stein',
    slug: 'izabrana-zivot-edith-stein',
    author: 'Jasminka Domaš',
    translation: null,
    date: '11/2017.',
    info: '179 str. / meki uvez',
    price: '105,00 kn',
    discountedPrice: '78,75 kn',
    fiftyOff: false,
    description: `Ličnost Edith Stein, darovite znanstvenice, filozofkinje koja je bila i asistentica Edmunda Husserla, i nakon sedamdeset godina od njezine smrti u Auschwitzu izaziva brojne polemike između kršćanskog i židovskog svijeta. Papa Ivan Pavao II. proglasio ju je sveticom. Istražujući dosad gotovo sve što je napisano o Edith Stein nameće se misao da je jedna velika strana njezina života ostala neistražena i neosvijetljena. Roman će bez dvojbe izazvati zanimanje u intelektualnim, a posebice i teološkim krugovima u Hrvatskoj i izvan nje.`
  },
  {
    id: 99,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/bosco%20malicroix_mali.jpg',
    title: 'Malicroix',
    slug: 'malicroix',
    author: 'Henri Bosco',
    translation: null,
    date: '11/2017.',
    info: '399 str. / meki uvez',
    price: '155,00 kn',
    discountedPrice: '116,25 kn',
    fiftyOff: false,
    description: `Henri Bosco (1888. - 1976.) jedan je od najintrigantnijih pisaca francuskog dvadesetog stoljeća. Za razliku od tendencija ubrzavanja na svim područjima, Bosco je autor maksimalnog usporavanja. Prostor je njegov medij, beskrajni opisi njegov način. Bosco je riznica rijetkih nijansi, aktivator verbalnog medija prema svim osjetilnim područjima. Čitanje njegovih tekstova beskrajno je zadobivanje vremena u doba njegove otimačine, beskrajan poticaj za suočenje sa sobom u doba odvođenja od sebe, pripitomljavanje i vrednovanje samoće u doba njezine apsolutne pronevjere i nasilne masovnosti.`
  },
  {
    id: 100,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/Laignel-Lavastine%20Duhovi%20Europe_mali.jpg',
    title: 'Duhovi Europe',
    slug: 'duhovi-europe',
    author: 'Alexandra Laignel-Lavastine',
    translation: null,
    date: '11/2017.',
    info: '283 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Knjiga Duhovi Europe, koja je dobila niz europskih nagrada od kojih je najpoznatija Charles Veillon (2005.), želi osvijetliti filozofsku poruku Srednje Europe iz razdoblja prije pada Berlinskog zida. Akribičnom analizom djela i djelovanja vodećih disidenata toga doba, Jana Patočke, Czesława Miłosza, Istvána Bibóa, Karela Kosika, Thomasa Venclove, Zygmunta Baumana i drugih ona pokazuje u kojoj je mjeri disidencija neraskidivo povezana s kulturom i idejom Europe, odnosno kritičkim razmišljanjem o modernoj civilizaciji i otuđenju pojedinca sučelice hipertrofiji vlasti. Alexandra Laignel Lavastine nam prenosi vjeru u Europu unatoč svim kritikama, Europu koja za nju predstavlja čudesno jedinstvo u heterogenosti, ukoliko ga imamo snage obnoviti.`
  },
  {
    id: 101,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/cesmicki%20epigrami_mali.jpg',
    title: 'Epigrami',
    slug: 'epigrami',
    author: 'Ivan Česmički',
    translation: null,
    date: '11/2017.',
    info: '163 str. / meki uvez',
    price: '105,00 kn',
    discountedPrice: '78,75 kn',
    fiftyOff: false,
    description: `Janus Pannonius - Ivan Česmički (1434. - 1472.), istaknuti humanist i biskup, spada u red velikih pjesnika hrvatskoga i europskoga humanizma. Cjelokupno je Pannoniusovo pjesničko djelo na latinskom jeziku, a najzastupljenija su književna vrsta u njegovu opusu epigrami, od kojih je većinu napisao u Italiji. Sadržajno su veoma raznoliki: šaljive prigodnice, epitafi, elogiji, poslovice; ljubavni i erotski sastavci. Ovo izdanje izabranih epigrama Ivana Česmičkog zasniva se na prijevodima Nikole Šopa koje je izdala Akademija 1951. godine te predstavlja prvi opsežniji izbor njegovih erotskih stihova.`
  },
  {
    id: 102,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/zilic%20tropizmi3_mali.jpg',
    title: 'Tropizmi 3',
    slug: 'tropizmi-3',
    author: 'Darija Žilić',
    translation: null,
    date: '11/2017.',
    info: '287 str. / meki uvez',
    price: '99,00 kn',
    discountedPrice: '74,25 kn',
    fiftyOff: false,
    description: `Darija Žilić godinama sustavno prati hrvatsku pjesničku scenu, a širinom pristupa, dobrim teorijskim uvidom i dinamičnim stilom osigurava relevantnu provjeru različitih generacijskih i poetičkih praksi. Izvornost ovih ogleda postignuta je pozicioniranjem između poetike i filozofije, gdje svemoćnu (ne)moć poezije fokalizira najčešće antropološka i feministička matrica. Ako se na temelju ranije građe i moglo govoriti o intenzivnijem interesu za autore mlađe generacije, Tropizmi 3 potvrđuje suprotno - suvremenim pjesničkim pojavama u hrvatskoj i svjetskoj književnosti, nešto manje i regiji, Darija Žilić pridružuje provjerena pjesnička imena različitih generacija i različitog stupnja vidljivosti.`
  },
  {
    id: 103,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/alajbegovic%20paralelni_mali.jpg',
    title: 'Paralelni svjetovi',
    slug: 'paralelni-svjetovi',
    author: 'Božidar Alajbegović',
    translation: null,
    date: '11/2017.',
    info: '327 str. / meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Knjiga donosi književne kritike suvremenih proznih knjiga inozemnih, generacijski i poetički vrlo raznolikih autora i autorica. Riječ je o djelima europskih i neeuropskih pisaca u hrvatskom prijevodu objavljenima između 2010. i 2014. godine, pa knjiga predstavlja svojevrstan književnokritički pregled nekih od zanimljivijih djela suvremene inozemne prozne literature. Knjiga sadrži prikaze i kritike djela autora poput De Bottona, Calvina, Bernharda, Barnesa, Austera, Zadie Smith, Jančara, Kureishija, Houellebecqa.`
  },
  {
    id: 104,
    promotion: false,
    recommendation: false,
    news: false,
    image: 'http://litteris.com.hr/images/morgan%20mojoj%20ljubavi_mali.jpg',
    title: 'Mojoj ljubavi',
    slug: 'mojoj-ljubavi',
    author: 'Tammy Nuzzo-Morgan',
    translation: null,
    date: '11/2017.',
    info: '59 str. / meki uvez',
    price: '70,00 kn',
    discountedPrice: '52,50 kn',
    fiftyOff: false,
    description: `Zbirka poezije višestruko nagrađivane američke pjesnikinje Tammy Nuzzo-Morgan "GEM mine" Passion poems nije nikad objavljena kao knjiga. Riječ je o šezdeset ljubavnih pjesama koje je pjesnikinja specijalno odabrala za hrvatsko izdanje. Zbirka nosi podnaslov Pjesme strasti. Napisane u ljubavnoj temperaturi dana, intenzitet ljubavi smjenjuje se s boli: "Znala sam da će tvoji poljupci boljeti/ali nisam znala da će tako dugo potrajati". Ljubavna strast obilježava cijelu zbirku u ritmu njezinih sastanaka s ljubljenim: pažnja prema gesti, kretnji, prilici, situaciji, ono je po čemu se modelira.`
  },
  {
    id: 105,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/patocka%20heretiski%20esej%20mali.jpg',
    title: 'Heretični eseji o filozofiji povijesti',
    slug: 'hereticni-eseji-o-filozofiji-povijesti',
    author: 'Jan Patočka',
    translation: null,
    date: '4/2018.',
    info: '287 str. / tvrdi uvez',
    price: '149,00 kn',
    discountedPrice: '111,75 kn',
    fiftyOff: false,
    description: `Svojim Heretičnim esejima o filozofiji povijesti jedan od najznačajnijih čeških i europskih mislilaca 20. stoljeća ponajprije se obraća tehničkoj civilizaciji. Usprkos golemim pretenzijama, i neporecivim uspjesima, ta civilizacija nije riješila velik unutrašnji problem čovjeka – svoj vlastiti glavni problem: kako ne samo živjeti, nego živjeti na ljudski autentičan način u najvećoj mogućoj mjeri, kako nam pokazuje povijest. Još gore: učinila je rješavanje tog problema težim utoliko što se njezini koncepti izravnavaju, odvikavaju od misli u osnovnom smislu riječi. Proces depersonalizacije koji vodi k anonimnosti vlasti, koji tišti i guta svakoga od nas, taj proces sačinjava jedinstven i univerzalan pokret: on je suštinska dimenzija cijele moderne civilizacije, tvrdi Jan Patočka, nudeći nam na razmišljanje istočnoeuropsko iskustvo koje treba promatrati kao globalnu krizu te iste civilizacije.`
  },
  {
    id: 106,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/michaux%20pjev%20u%20labirintu-mali.jpg',
    title: 'Pjev u labirintu',
    slug: 'pjev-u-labirintu',
    author: 'Henri Michaux',
    translation: null,
    date: '5/2018.',
    info: '98 str. / tvrdi uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn',
    fiftyOff: false,
    description: `Henri Michaux je kao malo koji pjesnik 20. stoljeća obuhvatio bitne krajnosti i raspone misaone i osjećajne angažiranosti u našem vremenu. Kod njega nalazimo ono što je nevidljivo za nas same, ono što se i sami sebi ne usuđujemo priznati, što bismo najradije sakrili. Otkrivamo naše biće u njegovoj apsolutnoj nagosti, slabosti, ranjivosti, osamljenosti, neprilagođenosti; otkrivamo poniženje, gorčinu, nemoć i čitav niz egzistencijalnih osjećaja i reakcija. Zato nas i zadivljuje poražavajuća iskrenost Michauxovih tekstova. Oni nas ne odvode ni u ljepotu, ni u spoznaju: oni nas čine spremnijima i hrabrijima da sami sebi pogledamo u oči.`
  },
  {
    id: 107,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/alajbegovic%20librido-mali.jpg',
    title: 'Lib(r)ido',
    slug: 'librido',
    author: 'Božidar Alajbegović',
    translation: null,
    date: '4/2018.',
    info: '368 str. / meki uvez',
    price: '145,00 kn',
    discountedPrice: '108,75 kn',
    fiftyOff: false,
    description: `U svojoj novoj knjizi književnokritičkih osvrta i prikaza autor je iščitao većinu domaće književne produkcije od 2012. do 2015. godine, pa tako Lib(r)ido, između ostalih, obuhvaća četrdesetak kritika djela Slavenke Drakulić, Ludwiga Bauera, Branislava Glumca, Ratka Cvetnića, Daše Drndić, Zorana Ferića, Ede Popovića, Miljenka Jergovića, Josipa Mlakića, Damira Karakaša, Kristiana Novaka, Ivane Sajko, Marine Vujčić, Mihaele Gašpar i drugih, dakle generacijski i poetički vrlo raznolikih autora/ica. Osim kritika, knjiga sadržava i eseje u kojima, također na svoj pitak i jasan način, Božidar Alajbegović problematizira cijeli niz tema vezanih uz hrvatsku književnost i izdavaštvo, poput književnih nagrada, pogubnosti nečitanja, odnosa medija prema književnosti i sl. Ono što fascinira i u ovoj knjizi autorova je predanost književnosti te užitak koji se osjeća u prenošenju vlastitih doživljaja djela čitateljima svojih tekstova.`
  },
  {
    id: 108,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/popovic%20labirinti%20sjecanja.jpg',
    title: 'Labirinti sjećanja',
    slug: 'labirinti-sjecanja',
    author: 'Dimitrije Popović',
    translation: null,
    date: '11/2018.',
    info: '260 str. / tvrdi i meki uvez',
    price: '125,00 kn',
    discountedPrice: '93,75 kn (meki uvez)',
    fiftyOff: false,
    description: `Labirinti sjećanja je knjiga zapisa i eseja o osobama koje je Dimitrije Popović susreo tijekom života, s kojima je surađivao i prijateljevao, koje su ga nadahnjivale, koje je posebno volio i cijenio. Ta sjećanja na osobe koje, svaka na svoj način, zauzimaju posebno mjesto u autorovu životu bude u njemu čitav niz asocijacija i razmišljanja o raznim područjima, od filozofije i religije, estetike i metafizike, stvarnosti i imaginacije. Riječ je o vrlo emotivnim i dirljivim zapisima koji su, poput čitave knjige, mješavina dokumentarnog, esejističkog i poetsko-refleksivnog žanra. Šarmantan začin knjizi daju opisi Popovićevih dogodovština s putovanja i zanimljivih susreta s raznim poznatim i manje poznatim ljudima, a kroz nju se diskretno provlači i priča o ljubavi Dimitrija i Jagode Popović.`
  },
  {
    id: 109,
    promotion: false,
    recommendation: false,
    news: true,
    image: 'http://litteris.com.hr/images/domas%20ako%20tebe%20zaboravim.jpg',
    title: 'Ako tebe zaboravim',
    slug: 'ako-tebe-zaboravim',
    author: 'Jasminka Domaš',
    translation: null,
    date: '11/2018.',
    info: '288 str. / meki i tvrdi uvez',
    price: '150,00 kn',
    discountedPrice: '112,50 kn (meki uvez)',
    fiftyOff: false,
    description: `Knjiga Ako tebe zaboravim treća je u trilogiji koju još čine naslovi Obitelj - Mišpaha i Glasovi, sjećanja, život. U trilogiji se otkriva ukupno stotinjak životnih priča potomaka židovskih obitelji, koje u biografskim i autobiografskim esejističkim zapisima oživljavaju prošlost i izvještavaju nas o današnjici potomaka tih obitelji. Ove će knjige mnogima pružiti brojna znanja o bujnom židovskom životu do Holokausta i o nenadoknadivom europskom gubitku koji je on izazvao, o bespovratnom urušavanju duhom toliko bogatoga svijeta koji je postojao do Drugoga svjetskog rata. Ovi tekstovi potomaka nekada sretnih i produktivnih židovskih zajednica pružit će svima i više temelja za izgrađivanje osjećaja sućuti, za empatiju, koju sve većim udaljavanjem od toga doba srećemo sve rjeđe. Namijenjene su svakom čitatelju, podjednako Židovu i nežidovu. Uz osobito dojmljivu likovnu opremu ovih knjiga, najdragocjenije su brojne raritetne fotografije, koje potječu iz na razne načine spašenih obiteljskih albuma.`
  },
  {
    id: 110,
    promotion:!1,
    recommendation:!1,
    news:1,
    image: "http://litteris.com.hr/images/neiskazivost.png",
    title: "Neiskazivost",
    slug: "neiskazivost",
    author: "Žarko Paić",
    translation: null,
    date: "5./2019.",
    info: "307 str. / tvrdi uvez",
    price: "170,00 kn",
    discountedPrice: "127,50 kn",
    fiftyOff:!1,
    description: "Ova knjiga nastoji slijediti refleksije mislilaca-pisaca u 20. stoljeću koji su na pitanje što znači pisati &quot;danas&quot; u doba tehnosfere, kada književnost, doduše, naizgled kvantitativno cvjeta i buja kao nikad prije, dali vjerodostojne odgovore u svojim formama kazivanja: eseju, prozi, poeziji, filozofskoj raspravi. Od Blanchota preko Gombrowicza i Schulza, od Pessoe do Sartrea, Barthesa i, naposljetku, iznova Blanchota, te Deleuzea i Boscoa, pokazuje se kako problem pisanja nije samo stvar teorije književnosti, estetike i filozofije umjetnosti."
  },
  {
    id: 111,
    promotion:!1,
    recommendation:!1,
    news:1,
    image: "http://litteris.com.hr/images/pjesme_izgubljenih_ljeta.png",
    title: "Pjesme izgubljenih ljeta",
    slug: "pjesme-izgubljenih-ljeta",
    author: "Marijan Grakalić",
    translation: null,
    date: "5./2019.",
    info: "84 str. / tvrdi uvez",
    price: "70,00 kn",
    discountedPrice: "52,50 kn",
    fiftyOff:!1,
    description: "Marijan Grakalić, pisac, urednik i publicist, dosad je objavio pjesničku knjigu &quot;Pjesme od formata: o ljubavi i drugim nadnaravnim fenomenima&quot; (2014.). Pjesnička knjiga &quot;Pjesme izgubljenih ljeta&quot; već u svom naslovu naznačuje nostalgičan ton, okrenutost prošlom, ali ne u smislu pozicije nekog tko bi bio samo laudator temporis acti. Prošlost nije glorificirana, niti stavljena u opreku prema sadašnjem trenutku koji nije samo ispadanje iz zlatnog doba. Autor zapravo izbjegava i poziciju narcističkog subjekta, toliko čestu u suvremenoj poeziji, on želi „izaći iz svoje kože“, nadići granice ovog svijeta, „prevoditi s drevnih jezika“. Stoga teži prema izrazu koji je klasicistički, odmjeren, odvojen od partikularnosti svagdana."
  },
  {
    id: 112,
    promotion:!1,
    recommendation:!1,
    news:1,
    image: "http://litteris.com.hr/images/obiljezja_smisla.png",
    title: "Obilježja smisla",
    slug: "obiljezja-smisla",
    author: "Dean Komel",
    translation: null,
    date: "5./2019.",
    info: "163 str. / tvrdi uvez",
    price: "115,00 kn",
    discountedPrice: "86,25 kn",
    fiftyOff:!1,
    description: "Knjiga Deana Komela &quot;Obilježja smisla&quot; zbirka je ogleda, rasprava i komentara iz suvremene filozofije s jasnim fenomenologijskim tragom. Autor se potvrdio kao jedan od vodećih slovenskih mislilaca nakon Ivana Urbančiča, što je posvjedočeno njegovim brojnim knjigama na slovenskom i njemačkom o hermeneutici, fenomenologiji, Heideggeru, problemu humanističkih znanosti danas. Usto, Komel je angažirani filozof na posve navlastit način u svakodnevnome diskursu pokušaja obrane dostojanstva umjetnosti u doba tehničke konstelacije bitka."
  },
  {
    id: 113,
    promotion:!1,
    recommendation:!1,
    news:!0,
    image: "http://litteris.com.hr/images/serotonin.png",
    title: "Serotonin",
    slug: "serotonin",
    author: "Michel Houellebecq",
    translation: "Mirna Šimat",
    date: "6./2019.",
    info: "314 str. / meki uvez",
    price: "135,00 kn",
    discountedPrice: "101,25 kn",
    fiftyOff:!1,
    description: "Florent-Claude Labrouste, inženjer agronomije i glavni junak koji mrzi svoje ime, nostalgičar je ugašenih strasti, seksualnih i političkih, potencijalno opasan i kriminalan. Potrošač serotonina u magičnoj piluli &quot;Captorixa&quot; i depresivac kojeg bolest fizički i moralno razara i vodi ravno u samoubojstvo želio bi se pošto-poto vratiti izgubljenoj sreći. Usred ljubavne razapetosti on otkriva tragičnu situaciju globaliziranog poljoprivrednog svijeta (što mnogi vide kao slutnju nadolazećih &#39;žutih prsluka&#39;) i na svojoj koži doživljava tužnu razgradnju ljudskih odnosa koje jedino ljubav i prijateljstvo mogu iskupiti."
  }
];

export default books;
