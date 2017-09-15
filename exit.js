      document.addEventListener("backbutton", onBackKeyDown, false);//hijack the backbutton

        function onBackKeyDown(e){
            var page = $.mobile.activePage.attr('id');
            xStat.rec("back button clicked from page:" + page);
            if (page == 'menuPage'){//are you on the 'root page' from which phonegap will exit?
                e.preventDefault();
                $.mobile.changePage('#aboutToExitAppPage');
            } else {
                window.history.back();//restore normal back button functionality
            }
        }


//somewhere else in your code for the "aboutToExit app" page
        $('#aboutToExitAppPage').on('pageinit', function(){
            $(this).find('#exitApp').on('click', function(){
                navigator.app.exitApp();//quit the app.
            });
        });