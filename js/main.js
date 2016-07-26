var achivements = (function() {

    var viewAchievements =
        [{
            title: "Addcepted!",
            description: "Finally you have enough views to start showing adds!",
            unlocked: false,
            requirement: function() {
                return player.pageViews >= 500 ? true : false;
            }
        }, {
            title: "Viewalicious!",
            description: "1k views, a breakpoint in your carrier!",
            unlocked: false,
            requirement: function() {
                return player.pageViews >= 1000 ? true : false;
            }
        }, {
            title: "Viewalicious II!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.pageViews >= 10000 ? true : false;
            }
        }, {
            title: "Viewalicious III!",
            description: "100k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.pageViews >= 100000 ? true : false;
            }
        }, {
            title: "Viewalicious IV!",
            description: "500k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.pageViews >= 500000 ? true : false;
            }
        }]

    var moneyAchievements =
        [{
            title: "Cash!",
            description: "Finally you have enough views to start showing adds!",
            unlocked: false,
            requirement: function() {
                return player.money >= 10 ? true : false;
            }
        }, {
            title: "Cash II!",
            description: "1k views, a breakpoint in your carrier!",
            unlocked: false,
            requirement: function() {
                return player.money >= 15 ? true : false;
            }
        }, {
            title: "Cash III!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.money >= 20 ? true : false;
            }
        }, {
            title: "Cash IV!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.money >= 40 ? true : false;
            }
        }, {
            title: "Cash V!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.money >= 80 ? true : false;
            }
        }]

    var popularityAchievements =
        [{
            title: "Cash!",
            description: "Finally you have enough views to start showing adds!",
            unlocked: false,
            requirement: function() {
                return player.popularity >= 1.5 ? true : false;
            }
        }, {
            title: "Cash II!",
            description: "1k views, a breakpoint in your carrier!",
            unlocked: false,
            requirement: function() {
                return player.popularity >= 2 ? true : false;
            }
        }, {
            title: "Cash III!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.popularity >= 5 ? true : false;
            }
        }, {
            title: "Cash IV!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.popularity >= 10 ? true : false;
            }
        }, {
            title: "Cash V!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.popularity >= 100 ? true : false;
            }
        }]

    var uniqueVisitorsAchievements =
        [{
            title: "Cash!",
            description: "Finally you have enough views to start showing adds!",
            unlocked: false,
            requirement: function() {
                return player.uniqueVisitors >= 10 ? true : false;
            }
        }, {
            title: "Cash II!",
            description: "1k views, a breakpoint in your carrier!",
            unlocked: false,
            requirement: function() {
                return player.uniqueVisitors >= 15 ? true : false;
            }
        }, {
            title: "Cash III!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.uniqueVisitors >= 20 ? true : false;
            }
        }, {
            title: "Cash IV!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.uniqueVisitors >= 40 ? true : false;
            }
        }, {
            title: "Cash V!",
            description: "10k views and still rising steady every day",
            unlocked: false,
            requirement: function() {
                return player.uniqueVisitors >= 80 ? true : false;
            }
        }]

    return {
        viewAchievements: viewAchievements,
        moneyAchievements: moneyAchievements,
        popularityAchievements: popularityAchievements,
        uniqueVisitorsAchievements: uniqueVisitorsAchievements,
    }
})();

var articles = (function() {

    var allArticles = function() {
        return [{
            title: "Idle gamers love to kill time, says scientists.",
            content: "Scientists have studied idle-gamers for several months and have come to the conclusion that idle-gamers actually likes to kill time." +
                "This is a facinating discovery as regular time-killing is done when nothing else is going on. Idle-gamers plan to kill time in order to have fun in versious games. Truly remarkable discovery!",
        }, {
            title: "AddRevenue threatened by adblock!",
            content: "The use of addblock is damageing web-owners revenue. This results in pageviews that does not generate income!" +
                "Web-owners plea that people should white-list pages they like, if they want to enjoy them in the future. #white-list #incomeLoss",
        }, {
            title: "What the heck, is popularity?",
            content: "Popularity is a abstract thing, who is popular? How do you measure it? Views per second are based on the popularity of a website" +
                " and the number are simply a multiplier for this calculation. More popularity = more views. It is also a good measurement to compare your website with your friends... DUDE? You only have 200 popularity? I'm at 5k noob 8-)",
        }, {
            title: "Diamondcollector idle game!",
            content: "Have you played http://diamondcollecotr.net? It's rumored that webtycoon come from the same creator!" +
                "It's another idle game that you should (and probably will) try out! :) ",
        }, {
            title: "Guugli to relese new ad software?",
            content: "Information regarding Guugli and their add-software have leaked! It is almost sure that Guugli will relese a ad-software that is far better than adCent." +
                "This means that website owners will earn more money faster from their ads and webpage visitors will get more accurate ads presented. It's a win win! Relesedate is still unknown...",
        }, {
            title: "Sponsorhunting tutorial",
            content: "Sponsorhunting is a populair trend nowadays. Blog owners talk to sponsors about promoting products and get products or money as reward." +
                " The sponsors are hard to get and only 33% of sponsorhunting tries goes well. Be patient and have some faith!",
        }, {
            title: "Content as content",
            content: "Today is a day when I lack motivation for this blog. Therefor I refuse to write something fun.",
        }];
    }

    return {
        allArticles: allArticles,
    }
})();

var player = (function() {

    const updateMS = 30;
    var worker;
    var websiteName = "webtycoon";
    var tutorialDone = false;

    var money = 0;
    var pageViews = 0;
    var addViews = 0;
    var uniqueVisitors = 0;
    var popularity = 1.1;
    var returningVisitors = 0;
    var newVisitors = 0.5;
    var serverCapacity = 0.85;
    var serverload = 0;
    var energy = 100;
    var autoRefresh = 0;
    var adds = 0;
    var energyRegen = 0.4;
    var saveEnabled = true;


    return {
        websiteName: websiteName,
        worker: worker,
        updateMS: updateMS,
        money: money,
        pageViews: pageViews,
        addViews: addViews,
        uniqueVisitors: uniqueVisitors,
        popularity: popularity,
        returningVisitors: returningVisitors,
        newVisitors: newVisitors,
        serverload: serverload,
        energy: energy,
        autoRefresh: autoRefresh,
        adds: adds,
        serverCapacity: serverCapacity,
        energyRegen: energyRegen,
        saveEnabled: saveEnabled,
        tutorialDone: tutorialDone,
    }


})();

var init = (function() {

    var tutorialTexts = [{
        'text': 'Greetings and welcome to your new webpage! I know you are eager to start developing your web-empire but please let me explain a few basics of the game!',
        'element': null,
    }, {
        'text': 'This is your money, you gain money trough addviews on your page or by hunting sponsors.',
        'element': 'money',
    }, {
        'text': 'The base currency is views and all other currencys are based on it and popularity decides how many views you get.',
        'element': 'pageViews',
    }, {
        'text': 'Your servers can only handle a certain amount of traffic. Do not overload them as that will cause lag and displeasment among the users which in turn leads to decreased popularity.',
        'element': 'serverload',
    }, {
        'text': 'Popularity increases a small amount with views as people recommend your site to friends. Updating and improving your website also increases popularity. Views per minute are based on popularity.',
        'element': 'popularity',
    }, {
        'text': 'Energy is needed to perform manual tasks, e.g hunting for sponsors, which in turn gives good rewards. Default regenerationrate is 0.4% every second',
        'element': 'energy',
    }, {
        'text': 'Autorefreshers refreshes the page for you! You gain 0.5 pageviews every second for every autorefresher you own.',
        'element': 'autoRefBtn',
    }, {
        'text': 'Write a new article on your page to increase your popularity!',
        'element': 'newEntryBtn',
    }, {
        'text': 'AdCent is a addprogram run by Guugli, this is your main incomesource, when you hit 500 views you will get a free adcent promotion and start earning money. After this you must sacrifice popularity to gain more profit.',
        'element': 'popularityBtn',
    }, {
        'text': 'You can cheat and generate views by manually refreshing your page, remember that this also increases serverload and will make other users lag if overloaded.',
        'element': 'manual-btn',
    }, {
        'text': 'Good luck to you!',
        'element': null,
    }];
    var currentText = 0;

    var elements = function() {
        $("#money").html(update.nFormatter(player.money, 2, 2));
        $("#pageViews").html(update.nFormatter(player.pageViews, 2));
        $("#addViews").html(update.nFormatter(player.addViews, 2));
        $("#uniqueVisitors").html(update.nFormatter(player.uniqueVisitors, 2));
        $("#serverload").html(player.serverload);
        $("#popularity").html(update.nFormatter(player.popularity, 2, 2));
        $("#energy").html(player.energy);
        $("#autorefresherPrice").html(update.nFormatter(update.calculateAutoRefresherPrice(), 2, 1));
        $('#serverPrice').html(update.nFormatter(150 * Math.pow(1.15, player.serverCapacity)));
        $('#marketingPrice').html(update.nFormatter(update.calculateMarketingPrice()));
        $("#autorefresherCount").html(player.autoRefresh);
        $("#autoRefreshBtn").html('Clicks:' + update.nFormatter((0.015 * player.autoRefresh) * (1000 / 30), 2, 1) + '/s');
        $("#websiteName").html(player.websiteName);
        $("#websiteURL").attr('value', 'www.' + player.websiteName + '.com');
    }

    var blogModal = function() {
        $('#blogModal').on('shown.bs.modal', function(e) {
            var arrayOfEvents = [];
            var theElement = document.getElementById("blogModal");

            var fn = function(e) {
                var valueNow = $("#blogProgress").attr('aria-valuenow');
                if (valueNow >= 100) {
                    update.modifyEnergy(-75);
                    theElement.removeEventListener("touchmove", fn, false);
                    $('#blogProgress').css('width', 0 + '%').attr('aria-valuenow', 0);
                    update.modifyPopularity(0.5)
                    $.notify("Popularity increased by 0.5", "success");
                    $('#blogModal').modal('hide');
                    var articleCount = $('#blogFeed').html().split('</div>');
                    var article = Math.floor(Math.random() * articles.allArticles().length);
                    $('#blogFeed').html("<div><hr><h4>" + articles.allArticles()[article].title + "</h4><p>" + articles.allArticles()[article].content + "</p></div>");
                    var articlesAdded = 1;
                    for (var i = 0; i < articleCount.length; i++) {
                        if (articleCount[i] != null && articlesAdded < 3) {
                            $('#blogFeed').append(articleCount[i] + "</div>")
                            articlesAdded++;
                        }
                    }
                } else {
                    var valueNew = Number(valueNow) + 0.25;
                    $('#blogProgress').css('width', valueNew < 0 ? 0 : valueNew + '%').attr('aria-valuenow', valueNew < 0 ? 0 : valueNew);
                }
                e.preventDefault();
            }

            theElement.addEventListener("touchmove", fn, false);

            document.onkeydown = function(e) {
                var valueNow = $("#blogProgress").attr('aria-valuenow');
                if (valueNow >= 100) {
                    update.modifyEnergy(-75);
                    document.onkeydown = null;
                    $('#blogProgress').css('width', 0 + '%').attr('aria-valuenow', 0);
                    update.modifyPopularity(0.5)
                    $.notify("Popularity increased by 0.5", "success");
                    $('#blogModal').modal('hide');
                    var articleCount = $('#blogFeed').html().split('</div>');
                    var article = Math.floor(Math.random() * articles.allArticles().length);
                    $('#blogFeed').html("<div><hr><h4>" + articles.allArticles()[article].title + "</h4><p>" + articles.allArticles()[article].content + "</p></div>");
                    var articlesAdded = 1;
                    for (var i = 0; i < articleCount.length; i++) {
                        if (articleCount[i] != null && articlesAdded < 3) {
                            $('#blogFeed').append(articleCount[i] + "</div>")
                            articlesAdded++;
                        }
                    }
                } else {
                    var punishment = 0;
                    if (arrayOfEvents != null) {

                        for (var i = 0; i < 15; i++) {
                            if (arrayOfEvents[i] != null) {
                                if (arrayOfEvents[i].keyCode == e.keyCode) {
                                    punishment += 0.2
                                }
                            }
                        }
                    }
                    var valueNew = Number(valueNow) + (1 - punishment);
                    $('#blogProgress').css('width', valueNew < 0 ? 0 : valueNew + '%').attr('aria-valuenow', valueNew < 0 ? 0 : valueNew);
                    arrayOfEvents.splice(0, 0, e);
                }
            };

        });
        $('#blogModal').on('hidden.bs.modal', function(e) {
            document.onkeydown = null;
        })

        $('#sponsorModal').on('hidden.bs.modal', function(e) {
            update.resetCards();
        })
    }

    var load = function() {
        if (localStorage.getItem("money")) {
            player.money = Number(localStorage.getItem("money"));
            player.pageViews = Number(localStorage.getItem("pageViews"));
            player.uniqueVisitors = Number(localStorage.getItem("uniqueVisitors"));
            player.addViews = Number(localStorage.getItem("addViews"));
            player.popularity = Number(localStorage.getItem("popularity"));
            player.returningVisitors = Number(localStorage.getItem("returningVisitors"));
            player.newVisitors = Number(localStorage.getItem("newVisitors"));
            player.serverCapacity = Number(localStorage.getItem("serverCapacity"));
            player.serverload = Number(localStorage.getItem("serverload"));
            player.energy = Number(localStorage.getItem("energy"));
            player.autoRefresh = Number(localStorage.getItem("autoRefresh"));
            player.adds = Number(localStorage.getItem("adds"));
            player.websiteName = localStorage.getItem("websiteName");
            //player.energyRegen = Number(localStorage.getItem("energyRegen"));
            if (localStorage.getItem("blogFeed")) {
                $('#blogFeed').html(localStorage.getItem("blogFeed"));
            }
            for (var j = 0; j < achivements.viewAchievements.length; j++) {
                if (achivements.viewAchievements[j].requirement() && !achivements.viewAchievements[j].unlocked) {
                    achivements.viewAchievements[j].unlocked = true;
                }
            }
            for (var j = 0; j < achivements.moneyAchievements.length; j++) {
                if (achivements.moneyAchievements[j].requirement() && !achivements.moneyAchievements[j].unlocked) {
                    achivements.moneyAchievements[j].unlocked = true;
                }
            }
            player.tutorialDone = true;
            init.elements();

        } else {
            init.tutorial();
        }
    }

    var startWebWorker = function() {
        if (typeof(Worker) !== "undefined") {
            if (typeof(player.worker) == "undefined") {
                player.worker = new Worker(webWorker.start());
            }
            (player.worker).onmessage = function(event) {
                console.log("worker said something")
            };
        } else {
            console.log("no support");
        }
    }

    var tutorial = function() {
        var height = $(window).height() - 150;
        var width = 0;
        var img = $('<img id="tutorialDude" />')
        img.attr('src', "images/tut_dude.png")
        img.css({
            'position': 'fixed',
            'height': 150,
            'width': 125,
            'left': width,
            'top': height,
        })

        var text = $('<p id="tutorialText"/>')
        text.html(tutorialTexts[currentText].text + " <a class='mouse-pointer' onclick='init.progressTutorial()'>continue...</a>")
        text.css({
            'position': 'fixed',
            'left': width + 125,
            'top': height,
            'width': '300px',
            'color': 'white',
            'background-color': 'rgba(0,0,0,0.9)',
            'padding': '3px 3px 3px 3px',
            'border-radius': '5px',
        })

        $('body').append(img)
        $('body').append(text)
    }

    var progressTutorial = function() {
        $('#tutorialImage').remove();
        currentText++;
        if (tutorialTexts[currentText]) {
            if (tutorialTexts[currentText].element) {
                var img = $('<img id="tutorialImage" />')
                img.attr('src', "images/arrow.png")
                img.css({
                    'position': 'absolute',
                    'height': 75,
                    'width': 75,
                    'left': $('#' + tutorialTexts[currentText].element).offset().left - 75 + $('#' + tutorialTexts[currentText].element).width() / 2,
                    'top': $('#' + tutorialTexts[currentText].element).offset().top - 75,
                })
                $('body').append(img)
                document.getElementById('tutorialImage').scrollIntoView();
            }
            $('#tutorialText').html(tutorialTexts[currentText].text + " <a class='mouse-pointer' onclick='init.progressTutorial()'>continue...</a>")

        } else {
            $('#tutorialDude').remove();
            $('#tutorialText').remove();
            player.tutorialDone = true;
        }
    }

    return {
        elements: elements,
        blogModal: blogModal,
        load: load,
        startWebWorker: startWebWorker,
        tutorial: tutorial,
        progressTutorial: progressTutorial,
    }
})();

var webWorker = (function() {

    var start = function() {
        setInterval(function() {
            if (player.tutorialDone) {
                update.calculateRegularViews();
                update.calculateAutoRefreshViews();
                if ($('#marketingPrice').html != update.nFormatter(update.calculateMarketingPrice())) {
                    $('#marketingPrice').html(update.nFormatter(update.calculateMarketingPrice()));
                }
                if (player.pageViews >= 500 && player.adds == 0) {
                    player.adds++;
                }
            }
        }, player.updateMS);
    }

    var stop = function() {
        (player.worker).terminate()
        player.worker = undefined;
    }

    return {
        start: start,
        stop: stop,
    }
})();

var update = (function() {

    var serverLoadCounter = 0;
    var serverLoadAverage = 0;

    var calculateRegularViews = function() {
        var amount;
        Math.random() > 0.2 ? amount = 0.2 * player.popularity : amount = 0.45 * player.popularity
        amount = amount / (1000 / player.updateMS);
        if (player.adds > 0) {
            update.addAddViews(amount, 0.019)
        }
        update.isUniqueView(amount)
        update.addPageView(amount)
    }

    var calculateManualView = function() {
        if (player.adds > 0) {
            update.addAddViews(1, 0.011)
        }
        update.addPageView()
    }

    var calculateAutoRefreshViews = function() {
        update.addPageView(0.015 * player.autoRefresh);
        if (player.adds > 0) {
            update.addAddViews(0.015 * player.autoRefresh, 0.0012)
        }

    }

    var calculateSeverLoad = function(amount) {
        if ((new Date).getTime() - serverLoadCounter >= 1000) {
            calculateEnergyRegen();
            var percent = (1 - (player.serverCapacity - (serverLoadAverage / 10))) * 100;
            percent < 0 ? percent = 0 : false;
            $("#serverload").html(percent.toFixed(2));
            if (percent < 50 && percent >= 0) {
                $("#serverload").css('color', 'green');
            } else if (percent > 50 && percent < 80) {
                $("#serverload").css('color', 'yellow');
            } else {
                if (percent > 100) {
                    update.modifyPopularity(-0.5);
                    $.notify("Servers overloaded! Popularity decreased! -0.5", {
                        position: "top-right",
                        clickToHide: true,
                    });
                }
                $("#serverload").css('color', 'red');
            }
            serverLoadAverage = 0;
            serverLoadCounter = (new Date).getTime();

        } else {
            serverLoadAverage += amount;
        }
    }

    var isUniqueView = function(amount) {
        Math.random() < player.newVisitors ? update.addUniqueVisitor(amount) : false
    }

    var calculateEnergyRegen = function() {
        if (player.energy < 100) {
            update.modifyEnergy(player.energyRegen);
            if (player.energy > 100) {
                player.energy = 100;
            }
        }
    }

    var addPageView = function(amount) {
        amount == null ? amount = 1 : amount = amount
        player.pageViews += amount;
        calculateSeverLoad(amount)
        saveGame();
        for (var j = 0; j < achivements.viewAchievements.length; j++) {
            if (achivements.viewAchievements[j].requirement() && !achivements.viewAchievements[j].unlocked) {
                achivements.viewAchievements[j].unlocked = true;
                $.notify("Achivement: '" + achivements.viewAchievements[j].title + "' unlocked!", 'success')
            }
        }
        var cacheNumber = update.nFormatter(player.pageViews, 2, 0);
        if ($("#pageViews").html() != cacheNumber) {
            Math.random() > 0.9 ? modifyPopularity(0.01) : false
            $("#pageViews").html(cacheNumber);
            $("#pageViews").addClass('animate');
            setTimeout(function() {
                $("#pageViews").removeClass('animate');
            }, 500);
        }
    }

    var addAddViews = function(views, addValue) {
        if (Math.random() > 0.5) {
            player.addViews += views;
            update.addMoney(views * (player.adds * addValue));
            var cacheNumber = update.nFormatter(player.addViews, 2, 0);
            if ($("#addViews").html() != cacheNumber) {
                $("#addViews").html(cacheNumber);
            }
        }

    }

    var addMoney = function(amount) {
        amount == null ? amount = 1 : amount = amount
        player.money += amount;
        for (var j = 0; j < achivements.moneyAchievements.length; j++) {
            if (achivements.moneyAchievements[j].requirement() && !achivements.moneyAchievements[j].unlocked) {
                achivements.moneyAchievements[j].unlocked = true;
                $.notify("Achivement: '" + achivements.moneyAchievements[j].title + "' unlocked!", 'success')
            }
        }
        var cacheNumber = update.nFormatter(player.money, 2, 2);
        if ($("#money").html() != cacheNumber) {
            $("#money").html(cacheNumber);
            $("#money").addClass('animate');
            setTimeout(function() {
                $("#money").removeClass('animate');
            }, 500);
        }
    }

    var addUniqueVisitor = function(amount) {
        amount == null ? amount = 1 : amount = amount
        player.uniqueVisitors += amount;
        var cacheNumber = update.nFormatter(player.uniqueVisitors, 2, 0);
        for (var j = 0; j < achivements.uniqueVisitorsAchievements.length; j++) {
            if (achivements.uniqueVisitorsAchievements[j].requirement() && !achivements.uniqueVisitorsAchievements[j].unlocked) {
                achivements.uniqueVisitorsAchievements[j].unlocked = true;
                $.notify("Achivement: '" + achivements.uniqueVisitorsAchievements[j].title + "' unlocked!", 'success')
            }
        }
        if ($("#uniqueVisitors").html() != cacheNumber) {
            $("#uniqueVisitors").html(cacheNumber);
        }
    }

    var modifyPopularity = function(amount) {
        if (amount <= 0) {
            if (player.popularity - amount <= 0) {
                player.popularity = 0;
            }
        } else {
            player.popularity += amount;
        }
        for (var j = 0; j < achivements.popularityAchievements.length; j++) {
            if (achivements.popularityAchievements[j].requirement() && !achivements.popularityAchievements[j].unlocked) {
                achivements.popularityAchievements[j].unlocked = true;
                $.notify("Achivement: '" + achivements.popularityAchievements[j].title + "' unlocked!", 'success')
            }
        }
        $("#popularity").html((player.popularity).toFixed(2));
        $("#popularity").addClass('animate');
        setTimeout(function() {
            $("#popularity").removeClass('animate');
        }, 500);
    }

    var buyAutoRefresher = function() {
        if (player.money >= update.calculateAutoRefresherPrice()) {
            update.addMoney((0 - update.calculateAutoRefresherPrice()));
            player.autoRefresh++;
            autorefresherCount = (player.autoRefresh * 40) / (1000 / player.updateMS)
            $("#autoRefreshBtn").html('Clicks:' + update.nFormatter((0.015 * player.autoRefresh) * (1000 / 30), 2, 1) + '/s');
            $("#autorefresherCount").html(player.autoRefresh);
            $("#autorefresherPrice").html(update.nFormatter(update.calculateAutoRefresherPrice(), 2));
        } else {
            $.notify("You don't have enough money!", {
                position: "top-right",
                clickToHide: true,
            });
        }
    }

    var calculateAutoRefresherPrice = function() {
        return player.autoRefresh == 0 ? 10 : 10 * Math.pow(1.15, player.autoRefresh)
    }

    var addAdds = function() {
        if (player.popularity - 20 > 0) {
            player.adds++;
            update.modifyPopularity(-20);
        } else {
            $.notify("This would put you at negative popularity and the death of this website!")
        }
        if (player.adds == 0 && player.pageviews > 500) {
            player.adds++;
        }
    }

    var modifyEnergy = function(amount) {
        player.energy += amount;
        $("#energy").html((player.energy).toFixed(2));
        $("#energy").addClass('animate');
        setTimeout(function() {
            $("#energy").removeClass('animate');
        }, 500);
    }

    var nFormatter = function(num, digits, decimalsBelow1000) {
        decimalsBelow1000 == null ? decimalsBelow1000 = 0 : false;
        false;
        var si = [{
                value: 1E18,
                symbol: "AB"
            }, {
                value: 1E15,
                symbol: "A"
            }, {
                value: 1E12,
                symbol: "T"
            }, {
                value: 1E9,
                symbol: "B"
            }, {
                value: 1E6,
                symbol: "M"
            }, {
                value: 1E3,
                symbol: "k"
            }],
            i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (Number((num / si[i].value).toFixed(digits))).toFixed(digits).toString().replace(".", ".") + si[i].symbol;
            }
        }
        return parseFloat(Math.round(num * 100) / 100).toFixed(decimalsBelow1000);
    }

    var upgradeServer = function() {
        var cost = 150 * Math.pow(1.15, player.serverCapacity);
        if (player.money > cost) {
            player.serverCapacity += 0.9;
            $('#serverPrice').html(update.nFormatter(150 * Math.pow(1.15, player.serverCapacity + 1)));
        } else {
            $.notify("You don't have enough money!", {
                position: "top-right",
                clickToHide: true,
            });
        }
    }

    var saveGame = function() {
        if (player.saveEnabled) {
            localStorage.setItem("money", player.money);
            localStorage.setItem("pageViews", player.pageViews);
            localStorage.setItem("uniqueVisitors", player.uniqueVisitors);
            localStorage.setItem("popularity", player.popularity);
            localStorage.setItem("addViews", player.addViews);
            localStorage.setItem("returningVisitors", player.returningVisitors);
            localStorage.setItem("newVisitors", player.newVisitors);
            localStorage.setItem("serverCapacity", player.serverCapacity);
            localStorage.setItem("serverload", player.serverload);
            localStorage.setItem("energy", player.energy);
            localStorage.setItem("autoRefresh", player.autoRefresh);
            localStorage.setItem("adds", player.adds);
            localStorage.setItem("energyRegen", player.energyRegen);
            localStorage.setItem("blogFeed", $('#blogFeed').html());
            localStorage.setItem("websiteName", player.websiteName);
        }
    }

    var resetGame = function() {
        player.saveEnabled = false;
        localStorage.clear();
        location.reload();
    }

    var chooseCard = function(card) {
        return function() {
            $("#sponsorCard" + card).addClass('choosen');
            var goodCard = Math.floor(Math.random() * 3) + 1;
            var bonusCollected = false;
            for (var i = 1; i <= 3; i++) {
                $("#sponsorCard" + i).prop('onclick', null).off('click');
                if (goodCard == i) {
                    $("#sponsorCard" + i).attr('src', 'images/good_card.png')
                } else {
                    $("#sponsorCard" + i).attr('src', 'images/bad_card.jpg')
                }
            }
            if (goodCard == card && !bonusCollected) {
                var reward = (player.popularity / 10) * 2
                $.notify("+ " + update.nFormatter(reward, 2, 2) + " dollar!", "success")
                update.addMoney(reward)
                bonusCollected = true;
            } else {
                $.notify("Wrong card!")
            }
            update.modifyEnergy(-15);
        }

    }

    var resetCards = function() {
        for (var i = 1; i <= 3; i++) {
            $("#sponsorCard" + i).attr('src', 'images/back_of_card.png');
            $("#sponsorCard" + i).removeClass('choosen');
            $("#sponsorCard" + i).click(chooseCard(i));
        }
    }

    var changeWebsiteName = function() {
        var p = prompt("What you want your page to be named?").replace(/ /g, '').toLowerCase();

        $("#websiteName").html(p);
        $("#websiteURL").attr('value', 'www.' + p + '.com');
        player.websiteName = p;
    }

    var showSponsorModal = function() {
        if (player.energy >= 15) {
            $('#sponsorModal').modal('show');
        } else {
            $.notify("Not enough energy!");
        }
    }

    var showBlogModal = function() {
        if (player.energy >= 75) {
            $('#blogModal').modal('show');
        } else {
            $.notify("Not enough energy!");
        }
    }

    var showAchivements = function() {
        $('#modalBodyAchievements').html("");
        initAchivements("Views", achivements.viewAchievements)
        initAchivements("Money", achivements.moneyAchievements)
        initAchivements("Popularity", achivements.popularityAchievements)
        initAchivements("UniqueVisitors", achivements.uniqueVisitorsAchievements)
    }

    function initAchivements(typeOfAchivement, achis) {
        $('#modalBodyAchievements').append("<h4 style='display: inline'>" + typeOfAchivement + " </h4>");
        for (var i = 0; i < achis.length; i++) {
            if (achis[i].unlocked) {
                $('#modalBodyAchievements').append("<span class='glyphicon glyphicon-star mouse-pointer' data-toggle='tooltip' title='" + achis[i].description + "'></span>");
            } else {
                $('#modalBodyAchievements').append("<span class='glyphicon glyphicon-star-empty'></span>");
            }
        }
        $('#modalBodyAchievements').append("<br>");
        $('#achievementModal').modal('show')
        $('[data-toggle="tooltip"]').tooltip();
    }

    var ajaxCall = function() {
        console.log("AJAX!");
        $.ajax({
            url: "/rest/highscore",
            success: function(data) {
                alert(data);
            }
        });


    }

    var market = function() {
        if (player.money >= update.calculateMarketingPrice()) {
            update.addMoney(0 - update.calculateMarketingPrice());
            var rand = Math.floor((Math.random() * 100) + 1) / 10;
            $.notify("Marketing site...", "success")
            console.log(rand);
            update.modifyPopularity(10);
            $.notify("... popularity increased by " + update.nFormatter(rand, 2, 2), "success")
        } else {
            $.notify("Not enough money :(")
        }
    }

    var calculateMarketingPrice = function() {
        return (player.popularity * 1.75);
    }

    return {
        calculateRegularViews: calculateRegularViews,
        calculateAutoRefreshViews: calculateAutoRefreshViews,
        calculateManualView: calculateManualView,
        isUniqueView,
        isUniqueView,
        addPageView: addPageView,
        addAddViews: addAddViews,
        addMoney: addMoney,
        addUniqueVisitor: addUniqueVisitor,
        buyAutoRefresher: buyAutoRefresher,
        addAdds: addAdds,
        modifyPopularity: modifyPopularity,
        calculateSeverLoad: calculateSeverLoad,
        serverLoadCounter: serverLoadCounter,
        serverLoadAverage: serverLoadAverage,
        modifyEnergy: modifyEnergy,
        calculateEnergyRegen: calculateEnergyRegen,
        calculateAutoRefresherPrice: calculateAutoRefresherPrice,
        nFormatter: nFormatter,
        upgradeServer: upgradeServer,
        saveGame: saveGame,
        chooseCard: chooseCard,
        resetCards: resetCards,
        resetGame: resetGame,
        changeWebsiteName: changeWebsiteName,
        showSponsorModal: showSponsorModal,
        showBlogModal: showBlogModal,
        showAchivements: showAchivements,
        ajaxCall: ajaxCall,
        market: market,
        calculateMarketingPrice: calculateMarketingPrice,
    }

})();


$(document).ready(function() {
    init.elements();
    init.blogModal();
    init.load();
    init.startWebWorker();




    /*setInterval(function() {
        update.calculateRegularViews();
        update.calculateAutoRefreshViews();
        if (player.pageViews >= 500 && player.adds == 0) {
            player.adds++;
        }
    }, player.updateMS);
*/

});